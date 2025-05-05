import React from 'react';

import ProductDetails from '../components/ProductDetails';
import Moreitems from '../components/Moreitems';
import Loveisland from '../components/loveisland';
import More from '../components/Morelatest';
import img from '../Assets/HOMEPAGE/1.png';
import img1 from '../Assets/img.png';
const ProductPage: React.FC = () => {
 

  return (

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              {/* <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Product Main" 
                className="w-full aspect-square object-cover rounded-lg"
              /> */}
            </div>
            <img 
              src={img}              alt="Product Detail" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src={img1} 
              alt="Product Detail" 
              className="w-full aspect-square object-cover rounded-lg"
              style={{height:'100%'}}
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <ProductDetails 
              title="Gina Kirschenheiter's Black Floral Long Sleeve Mini Dress"
              sku="Love Island S8E5"
              description="This stunning geometric pattern bikini set features a triangle top with adjustable straps and a high-cut bottom. Made with premium quick-dry fabric that offers UPF 50+ protection. This stunning geometric pattern bikini set features a triangle top with adjustable straps and a high-cut bottom. Made with premium quick-dry fabric that offers UPF 50+ protection."
            />
          </div>
        </div>

        <Moreitems/>

        <br/>
        <Loveisland/>

        <More/>



  
      </div>

  );
};

export default ProductPage;