import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { navbarDestinations } from "@/data/navbarData";
import {
  Plane,
  User,
  Heart,
  BookmarkCheck,
  Settings,
  LogOut,
  ArrowRight,
  Menu,
  X,
  Compass,
  Users,
  Info,
  Mail,
  Home as HomeIcon,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Helper to generate initials from name
  const getInitials = (name) => {
    if (!name) return "TU";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/90 backdrop-blur-md transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-sm">
            <Plane className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-green-600 transition-colors">
            Tourunity
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 inline-block ${
                      isActive("/")
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Destinations Mega Menu */}
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-green-600 data-[state=open]:text-green-600 rounded-full transition-all duration-200 bg-transparent hover:bg-gray-50 focus:bg-gray-50">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] md:w-[620px] bg-white border border-gray-100/80 shadow-2xl rounded-2xl p-4 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-100 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Featured Destinations
                    </span>
                    <Link
                      to="/destinations"
                      className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
                    >
                      View all <ArrowRight size={12} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {navbarDestinations?.map((destination) => (
                      <NavigationMenuLink key={destination.title} asChild>
                        <Link
                          to={destination.href}
                          className="group p-2.5 rounded-xl transition-all duration-200 hover:bg-green-50/60 border border-transparent hover:border-green-100/60 flex items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200/60">
                            <img
                              src={destination.imageSrc}
                              alt={destination.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors truncate">
                                {destination.title}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-green-600 transition-all duration-200 shrink-0" />
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {destination.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Tour Groups */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/tour-groups"
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 inline-block ${
                      isActive("/tour-groups")
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    Tour Groups
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 inline-block ${
                      isActive("/about")
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/contact"
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 inline-block ${
                      isActive("/contact")
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions (Guest or Authenticated User) */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="group relative focus:outline-none cursor-pointer"
                  aria-label="User Profile Menu"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold text-sm flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:ring-4 group-hover:ring-green-500/15 transition-all duration-200 border-2 border-white ring-1 ring-gray-200">
                    {getInitials(user?.name)}
                  </div>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="z-50 w-60 p-1.5 rounded-2xl bg-white shadow-xl border border-gray-100 animate-in fade-in-50 zoom-in-95"
              >
                {/* User Info Header */}
                <DropdownMenuLabel className="px-3 py-2.5 mb-1 bg-gray-50/80 rounded-xl">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user?.name || "Explorer"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || "user@tourunity.com"}
                  </p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="h-px bg-gray-100 my-1" />

                {/* Profile Item */}
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50/60 rounded-xl transition-colors cursor-pointer group"
                  >
                    <User size={16} className="text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>

                {/* Wishlist Item */}
                <DropdownMenuItem asChild>
                  <Link
                    to="/wishlist"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50/60 rounded-xl transition-colors cursor-pointer group"
                  >
                    <Heart size={16} className="text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Wishlist</span>
                  </Link>
                </DropdownMenuItem>

                {/* My Bookings Item */}
                <DropdownMenuItem asChild>
                  <Link
                    to="/bookings"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50/60 rounded-xl transition-colors cursor-pointer group"
                  >
                    <BookmarkCheck size={16} className="text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>My Bookings</span>
                  </Link>
                </DropdownMenuItem>

                {/* Settings Item */}
                <DropdownMenuItem asChild>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50/60 rounded-xl transition-colors cursor-pointer group"
                  >
                    <Settings size={16} className="text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="h-px bg-gray-100 my-1" />

                {/* Logout Item */}
                <DropdownMenuItem asChild>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer text-left group"
                  >
                    <LogOut size={16} className="text-red-500 group-hover:text-red-600 transition-colors" />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors px-3.5 py-2"
              >
                Log In
              </Link>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium px-5 py-2 shadow-xs transition-all hover:shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/") ? "bg-green-50 text-green-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <HomeIcon size={18} />
              <span>Home</span>
            </Link>

            <Link
              to="/destinations"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/destinations") ? "bg-green-50 text-green-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Compass size={18} />
              <span>Destinations</span>
            </Link>

            <Link
              to="/tour-groups"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/tour-groups") ? "bg-green-50 text-green-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Users size={18} />
              <span>Tour Groups</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/about") ? "bg-green-50 text-green-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Info size={18} />
              <span>About Us</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/contact") ? "bg-green-50 text-green-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-gray-100">
            {isAuthenticated ? (
              <div className="space-y-1">
                <div className="px-3 py-2 bg-gray-50 rounded-xl mb-2">
                  <p className="text-sm font-semibold text-gray-900">{user?.name || "Explorer"}</p>
                  <p className="text-xs text-gray-500">{user?.email || "user@tourunity.com"}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <User size={18} />
                  <span>My Profile</span>
                </Link>
                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <Heart size={18} />
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <BookmarkCheck size={18} />
                  <span>My Bookings</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl font-medium"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl border border-gray-200"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-xs"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

