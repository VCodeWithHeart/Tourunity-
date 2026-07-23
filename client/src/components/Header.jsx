import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { navbarDestinations } from "@/data/navbarData";
import {
  CircleQuestionMark,
  CircleUserRound,
  Heart,
  UserRound,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="w-full border-0.5 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-green-600">Tourunity</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition cursor-pointer"
              >
                <NavigationMenuLink asChild>
                  <span>Home</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-green-600 transition cursor-pointer">
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-gray-800 min-w-[400px]">
                <ul className="p-3 space-y-2 bg-gray-800 rounded-md shadow-md grid w-[250px] gap-2 md:w-[350px] md:grid-cols-2 lg:w-[450px]">
                  {navbarDestinations?.map((destination) => (
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={destination?.href}
                          className="block py-2 dark:hover:bg-gray-700 text-white rounded"
                        >
                          <span>{destination?.title}</span>
                          <p className="text-neutral-400">
                            {destination?.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition cursor-pointer"
              >
                <NavigationMenuLink asChild>
                  <span>About</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition cursor-pointer"
              >
                <NavigationMenuLink asChild>
                  <span>Contact</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* user profile dropdown handled separately using Radix DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-gray-700 hover:text-green-600 transition focus:outline-none cursor-pointer">
                  <div className="rounded-full bg-green-200 px-4 py-1">
                    <UserRound size={25} />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={6}
                className="z-50 w-48 p-2 rounded-md shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to={!isAuthenticated ? "/login" : "#"}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={isAuthenticated ? logout : undefined}
                  >
                    <CircleUserRound size={20} />
                    {isAuthenticated ? "Logout" : "Login / Signup"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <Heart size={20} />
                    Wishlists
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <CircleQuestionMark size={20} />
                    Help
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
