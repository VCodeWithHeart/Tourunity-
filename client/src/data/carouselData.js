const carouselData = [
  {
    id: 1,
    bgClass: "bg-[#fde7e7]", // light pink
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682535209719-839f625f8770?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Statue in summer setting",
    mainTitle: "The Ultimate Guide to Summer",
    description:
      "We’re your very own super-powered hub for anything and everything summer: a day at the beach (or lake or river); getting outdoors for a hike or a bike or a walk; drinking and eating; choosing ideas for where to go and recommendations for last-minute getaways.",
    buttonText: "Explore Summer",
    buttonLink: "/explore-summer",
    yellowBoxText: ["OUR GUIDES", "YOUR STORIES"],
    yellowBoxBg: "bg-yellow-400", // Matches the original image
    coordinates: "41.8967° N, 12.4822° E",
    // Filters for this image (adjust as needed for your image)
    imageFilterStyle: {
      filter: "hue-rotate(200deg) saturate(150%) brightness(80%)",
    },
    sticker: true,
    stickerColor: "bg-pink-500",
  },
  {
    id: 2,
    bgClass: "bg-blue-50", // Example: a light blue background for the next slide
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1669047670670-3dbd04213fa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Mountain landscape with lake",
    mainTitle: "Discover Alpine Adventures",
    description:
      "Embark on breathtaking journeys through majestic mountains and serene lakes. Find the perfect trails for hiking, climbing, or simply enjoying nature's tranquility. Your next adventure awaits.",
    buttonText: "Plan Your Escape",
    buttonLink: "/alpine-adventures",
    yellowBoxText: ["MOUNTAIN", "TRIP"],
    yellowBoxBg: "bg-indigo-400", // Different color for this slide
    coordinates: "46.8841° N, 8.2497° E",
    imageFilterStyle: { filter: "grayscale(50%) brightness(90%)" }, // Different filter for this image
    sticker: true,
    stickerColor: "bg-stone-300",
  },
  {
    id: 3,
    bgClass: "bg-yellow-50", // Example: a light yellow background
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681429767128-e451570160d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Vibrant city street",
    mainTitle: "City Lights & Urban Delights",
    description:
      "Dive into the heart of vibrant metropolises. Explore hidden gems, culinary hotspots, and iconic landmarks. Experience the pulse of the city, day and night, with our curated guides.",
    buttonText: "Explore Cities",
    buttonLink: "/urban-explorations",
    yellowBoxText: ["URBAN", "GUIDES"],
    yellowBoxBg: "bg-red-400", // Different color for this slide
    coordinates: "35.6895° N, 139.6917° E",
    imageFilterStyle: { filter: "contrast(120%) saturate(130%)" }, // Different filter for this image
    sticker: true,
    stickerColor: "bg-cyan-500",
  },
];

export default carouselData;