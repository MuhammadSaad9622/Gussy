import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import product1 from '../assets/HOMEPAGE/1.png';
import product2 from '../assets/HOMEPAGE/2.png';
import product3 from '../assets/HOMEPAGE/3.png';
import product4 from '../assets/HOMEPAGE/4.png';
import product5 from '../assets/HOMEPAGE/5.png';
import product6 from '../assets/HOMEPAGE/6.png';
import product7 from '../assets/HOMEPAGE/7.png';
import product8 from '../assets/HOMEPAGE/8.png';
import product9 from '../assets/HOMEPAGE/9.png';
import product10 from '../assets/HOMEPAGE/10.png';
import product11 from '../assets/HOMEPAGE/11.png';
import product12 from '../assets/HOMEPAGE/12.png';


// Data arrays
const shows = [
  { category: 'A', items: ['Access Hollywood Live', 'American Idol Fashion', 'American Woman', 'Award Shows'] },
  { category: 'B', items: ['Bachelor In Paradise', 'Below Deck'] },
  { category: 'C', items: ['Celebrity Apprentice', 'Cyrus vs Cyrus'] },
  { category: 'D', items: ['Daily / Nightly Pop', 'Dancing With The Stars'] },
  { category: 'E', items: ['E! News', 'Ellen', 'Emily In Paris', 'EXTRA'] },
  { category: 'F', items: ['Flip Or Flop', 'Fuller House'] },
  { category: 'G', items: ['GCB', "Girlfriends Guide To Divorce", 'GMA'] },
  { category: 'H', items: ['House Of Fab', 'How To Be A Trophy Wife'] }
];

const celebrities = [
  'Abbey Hunatman','Alexis Ballino','Abbey McCarthy','Alexis Rose',
  'Adela King','Abj Lawber','Adja Toure','Amanda Bonnie',
  'Ashcrest De Moura','Amanda Vaughn','Adrienne Lima','Amanda Smith',
  'Adrienne Molisch','Amber Neuchwee','Alaysia Barcowidaz','Ana Quinesses',
  'Alexis Echeverria','Andy Cohen','Angie Katsanevas','Anna Arnezoun',
  'Annabielle Neilson','Annaliese Puccini','Annalise Carbone','Anya Trethouse',
  'Anya Firestone','Aldana Biermann','Aldana Modik','Asa Soltan',
  'Ashley Borders','Ashley Darby','Ashley Hebert Rosenbaum','Ashley Larsonath',
  'Ashley Jacobs','Adela Davis','Alderry O\'Dray','Audrina Rattidge'
];

const brands = ['All Brands', 'Gucci', 'Prada', 'Versace', 'Dolce & Gabbana'];
const productsList = ['All Products', 'Dresses', 'Accessories', 'Tops', 'Bottoms'];

const products = [
  { image: product1, name: "Gina Richardson's Black Floral Long Sleeve Midi Dress", source: "Real Housewives of Orange County" },
  { image: product2, name: "Lena Borgeous's Tan And White Printed Boho Dress", source: "Southern Charm Instagram Fashion" },
  { image: product3, name: "Brynn Whitfield's White Satin Lace Slip Dress", source: "Real Housewives of New York Instagram" },
  { image: product4, name: "Melissa Gorga's Yellow Rose Tweed Mini Dress", source: "Real Housewives of New Jersey Instagram" },
  { image: product5, name: "Lexi Wood's Cropped Blazer And Skirt", source: "Summer House Fashion" },
  { image: product6, name: "Gabby Prescod's Black Aviator Sunglasses", source: "Summer House Fashion" },
  { image: product7, name: "Madison LeCroy's Yellow Off The Shoulder Dress", source: "Watch What Happens Live Fashion" },
  { image: product8, name: "Lexi Wood's Yellow Satin Backless Dress", source: "Summer House Fashion" },
  { image: product9, name: "Amanda Batula's Black Belted Pantsuit", source: "Summer House Fashion" },
  { image: product10, name: "Leva Bonaparte’s White Cable Knit Varsity Sweater", source: "Southern Charm Instagram Fashion" },
  { image: product11, name: "Angela Oakley’s Black Draped Midi Dress", source: "Real Housewives of Atlanta Fashion" },
  { image: product12, name: "Paige DeSorbo’s Black Satin Peplum Top", source: "Summer House Fashion" }
];


const Fashion: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<'shows'|'celebs'|null>(null);
  const [selected, setSelected] = useState({ show: 'All Shows', celebrity: 'All Celebrities', brand: brands[0], product: productsList[0] });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as any)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div className="text-center z-10">
          <h1 className="text-6xl font-serif mb-4">Trending This Week</h1>
          <p className="text-lg mb-6">Discover the latest styles from your favorite shows and celebrities.</p>
          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-medium hover:bg-[#B38F2D] transition-all">
            Explore Now
          </button>
        </div>
      </div>

      {/* Shop Section */}
      <div className="bg-white py-12 text-black">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif">Shop With Filters</h2>
              
              <div className="relative">
                <input type="search" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-full w-64" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex gap-4 mb-6 flex-wrap">

              {/* Shows Mega Dropdown */}
              <div className="relative">
                <button onClick={() => setOpenMenu(openMenu==='shows'?null:'shows')} className="border rounded px-4 py-2 min-w-[200px] flex justify-between items-center">
                  {selected.show}
                  <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                {openMenu==='shows' && (
                  <div className="absolute left-0 mt-2 w-[600px] bg-green-800 bg-[url('/path/to/green-texture.png')] bg-cover bg-opacity-90 p-6 rounded-lg shadow-lg text-white">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-xl font-semibold">Shows</h3>
                      <div className="relative">
                        <input type="search" placeholder="Search shows..." className="pl-8 pr-4 py-2 rounded-full text-black" />
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" size={16} />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 h-64 overflow-y-auto">
                      {shows.map(g => (
                        <div key={g.category}>
                          <h4 className="text-lg font-medium mb-2">{g.category}</h4>
                          <ul className="space-y-1 text-sm">
                            {g.items.map(i => <li key={i} onClick={() => { setSelected(s=>({...s, show: i})); setOpenMenu(null); }} className="cursor-pointer hover:underline">{i}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Celebrities Mega Dropdown */}
              <div className="relative">
                <button onClick={() => setOpenMenu(openMenu==='celebs'?null:'celebs')} className="border rounded px-4 py-2 min-w-[200px] flex justify-between items-center">
                  {selected.celebrity}
                  <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                {openMenu==='celebs' && (
                  <div className="absolute left-0 mt-2 w-[400px] bg-green-800 bg-[url('/path/to/green-texture.png')] bg-cover bg-opacity-90 p-6 rounded-lg shadow-lg text-white">
                    <div className="relative mb-4">
                      <input type="search" placeholder="Search celebrities..." className="pl-8 pr-4 py-2 rounded-full text-black w-full" />
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" size={16} />
                    </div>
                    <div className="h-64 overflow-y-auto">
                      <ul className="grid grid-cols-2 gap-4 text-sm">
                        {celebrities.map(n => <li key={n} onClick={() => { setSelected(s=>({...s, celebrity: n})); setOpenMenu(null); }} className="cursor-pointer hover:underline">{n}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Brand Dropdown */}
              <div className="relative">
                <select value={selected.brand} onChange={e => setSelected(s=>({...s, brand: e.target.value}))} className="border rounded px-4 py-2 appearance-none pr-8 min-w-[200px]">
                  {brands.map(b => <option key={b}>{b}</option>)}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>

              {/* Product Dropdown */}
              <div className="relative">
                <select value={selected.product} onChange={e => setSelected(s=>({...s, product: e.target.value}))} className="border rounded px-4 py-2 appearance-none pr-8 min-w-[200px]">
                  {productsList.map(p => <option key={p}>{p}</option>)}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>

            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p,i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-3">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                </div>
                <h3 className="text-sm font-medium">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.source}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 gap-2">
            {[1,2,3,4,5,6].map(page => (
              <button key={page} className={`w-8 h-8 rounded-full ${page===1?'bg-black text-white':'text-gray-500 hover:bg-gray-100'}`}>{page}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;




