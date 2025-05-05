import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Gussy</h3>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Latest Outfits</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Trending</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Shows</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Celebrities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Shows</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">The Bachelor</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Selling Sunset</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Emily in Paris</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Bridgerton</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">The Kardashians</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Never Miss a Style Alert</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border border-gray-700 rounded-l px-4 py-2 flex-grow text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-r text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;