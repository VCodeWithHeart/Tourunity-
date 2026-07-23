import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { notify } from "@/components/toast/notify";

// Create Axios instance with base configuration
const api = axios.create({
  baseURL: "http://localhost:8080", // Updated base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth tokens or other headers
api.interceptors.request.use(
  (config) => {
    // Example: Add auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases
    if (error.response) {
      return error?.response;
    } else if (error.request) {
      // No response received
      console.error("No response received from server");
    } else if (error.code === "ERR_CANCELED") {
      // Request was canceled
      console.log("Request canceled:", error.message);
    } else {
      // Other errors
      console.error("Error setting up request:", error.message);
    }
    // return Promise.reject(error);
  }
);

const useApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  // API call function with method, endpoint, and optional config
  const callApi = useCallback(
    async (method, endpoint, payload = {}, config = {}) => {
      // Create a new AbortController for this request
      const abortController = new AbortController();
      setController(abortController);

      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await api({
          method,
          url: endpoint,
          data: payload,
          signal: abortController.signal,
          ...config,
        });

        setData(response.data);
        setIsLoading(false);
        return response?.data;
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request was canceled");
        } else {
          setError(
            err.response?.data?.message || err.message || "An error occurred"
          );
        }
        setIsLoading(false);
        // throw err;
      }
    },
    []
  );

  // Cleanup: Abort ongoing requests when component unmounts
  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  // Methods for different HTTP verbs
  const get = useCallback(
    (endpoint, config = {}) => callApi("get", endpoint, {}, config),
    [callApi]
  );
  const post = useCallback(
    (endpoint, payload, config = {}) =>
      callApi("post", endpoint, payload, config),
    [callApi]
  );
  const put = useCallback(
    (endpoint, payload, config = {}) =>
      callApi("put", endpoint, payload, config),
    [callApi]
  );
  const del = useCallback(
    (endpoint, config = {}) => callApi("delete", endpoint, {}, config),
    [callApi]
  );

  // Cancel ongoing request
  const cancelRequest = useCallback(() => {
    if (controller) {
      controller.abort();
    }
  }, [controller]);

  return {
    data,
    isLoading,
    error,
    get,
    post,
    put,
    del,
    cancelRequest,
  };
};

export default useApi;
