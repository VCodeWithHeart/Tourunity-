import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="space-y-6">
          <div className="flex flex-col items-start">
            <h2 className="text-white text-3xl font-extrabold font-serif">Tourunity</h2>
            <p className="text-gray-500 text-sm mt-1">For Explorers Everywhere</p>
          </div>

          <div>
            <h3 className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300"
                aria-label="Youtube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider">
              Subscribe
            </h3>
            <p className="text-blue-500 text-base font-semibold">
              Get 20% off your first order.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Subscribe now
              </Button>
            </div>
            <p className="text-gray-500 text-xs">
              Subscribe to Lonely Planet newsletters and promotions. <br />
              Read our <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>. {/* Link for internal policy */}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
            Top Destinations
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/destinations/new-york-city" className="hover:text-white transition-colors">New York City</Link></li>
            <li><Link to="/destinations/paris" className="hover:text-white transition-colors">Paris</Link></li>
            <li><Link to="/destinations/italy" className="hover:text-white transition-colors">Italy</Link></li>
            <li><Link to="/destinations/costa-rica" className="hover:text-white transition-colors">Costa Rica</Link></li>
            <li><Link to="/destinations/japan" className="hover:text-white transition-colors">Japan</Link></li>
            <li><Link to="/destinations/usa" className="hover:text-white transition-colors">USA</Link></li>
            <li><Link to="/destinations/amsterdam" className="hover:text-white transition-colors">Amsterdam</Link></li>
            <li><Link to="/destinations/portugal" className="hover:text-white transition-colors">Portugal</Link></li>
            <li><Link to="/destinations/cancun" className="hover:text-white transition-colors">Cancun</Link></li>
            <li><Link to="/destinations/chicago" className="hover:text-white transition-colors">Chicago</Link></li>
            <li><Link to="/destinations/england" className="hover:text-white transition-colors">England</Link></li>
            <li><Link to="/destinations/tokyo" className="hover:text-white transition-colors">Tokyo</Link></li>
            <li><Link to="/destinations/france" className="hover:text-white transition-colors">France</Link></li>
            <li><Link to="/destinations/thailand" className="hover:text-white transition-colors">Thailand</Link></li>
            <li><Link to="/destinations/ireland" className="hover:text-white transition-colors">Ireland</Link></li>
            <li><Link to="/destinations/rome" className="hover:text-white transition-colors">Rome</Link></li>
            <li><Link to="/destinations/london" className="hover:text-white transition-colors">London</Link></li>
            <li><Link to="/destinations/los-angeles" className="hover:text-white transition-colors">Los Angeles</Link></li>
            <li><Link to="/destinations/mexico" className="hover:text-white transition-colors">Mexico</Link></li>
            <li><Link to="/destinations/san-francisco" className="hover:text-white transition-colors">San Francisco</Link></li>
            <li className="pt-2"><Link to="/destinations" className="text-blue-500 hover:underline text-xs">Explore More Destinations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
            Travel Interests
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/interests/adventure-travel" className="hover:text-white transition-colors">Adventure Travel</Link></li>
            <li><Link to="/interests/art-and-culture" className="hover:text-white transition-colors">Art and Culture</Link></li>
            <li><Link to="/interests/beaches-coasts-islands" className="hover:text-white transition-colors">Beaches, Coasts and Islands</Link></li>
            <li><Link to="/interests/family-holidays" className="hover:text-white transition-colors">Family Holidays</Link></li>
            <li><Link to="/interests/festivals" className="hover:text-white transition-colors">Festivals</Link></li>
            <li><Link to="/interests/food-and-drink" className="hover:text-white transition-colors">Food and Drink</Link></li>
            <li><Link to="/interests/road-trips" className="hover:text-white transition-colors">Road Trips</Link></li>
            <li><Link to="/interests/sustainable-travel" className="hover:text-white transition-colors">Sustainable Travel</Link></li>
            <li><Link to="/interests/travel-on-a-budget" className="hover:text-white transition-colors">Travel on a Budget</Link></li>
            <li><Link to="/interests/wildlife-and-nature" className="hover:text-white transition-colors">Wildlife and Nature</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop/destination-guides" className="hover:text-white transition-colors">Destination Guides</Link></li>
              <li><Link to="/shop/lonely-planet-kids" className="hover:text-white transition-colors">Lonely Planet Kids</Link></li>
              <li><Link to="/shop/lonely-planet-shop" className="hover:text-white transition-colors">Lonely Planet Shop</Link></li>
              <li><Link to="/shop/non-english-guides" className="hover:text-white transition-colors">Non-English Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
              About Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us/lonely-planet" className="hover:text-white transition-colors">About Lonely Planet</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/trade-advertising" className="hover:text-white transition-colors">Trade and Advertising</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/work-for-us" className="hover:text-white transition-colors">Work For Us</Link></li>
              <li><Link to="/write-for-us" className="hover:text-white transition-colors">Write For Us</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link to="/consumer-health-data-privacy-policy" className="hover:text-white transition-colors">Consumer Health Data Privacy Policy</Link></li>
              <li><Link to="/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link></li>
              <li><Link to="/do-not-sell-share-my-personal-information" className="hover:text-white transition-colors">Do Not Sell or Share My Personal Information</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;