import Image from 'next/image';
import Link from 'next/link';

const ProductDetails: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      
      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center ">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/image/s2.svg" 
              alt="Syltherine"
              width={224}
              height={446}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Syltherine</h3>
              <p className="text-gray-500">Stylish cafe chair</p>
              <p className="font-bold">Rp 2.500.000</p>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 rounded">-30%</span>
            </div>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/image/s7.svg" 
              alt="Leviosa"
              width={224}
              height={446}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Leviosa</h3>
              <p className="text-gray-500">Stylish cafe chair</p>
              <p className="font-bold">Rp 2.500.000</p>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 rounded">-30%</span>
            </div>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/image/ch.svg" 
              alt="Leviosa"
              width={224}
              height={446}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Lolito</h3>
              <p className="text-gray-500">Luxury big Sofa</p>
              <p className="font-bold"> Rp 7.000.000</p>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 rounded">-30%</span>
            </div>
          </div>

        


          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/image/s5.svg" 
              alt="Respira"
              width={224}
              height={446}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Respira</h3>
              <p className="text-gray-500">Outdoor bar table and stool</p>
              <p className="font-bold">Rp 500.000</p>
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 rounded">New</span>
            </div>
          </div>
        </div>

        {/* Show More Button */}
        <div className="mt-4 text-center">
          <Link href="/related-products" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-5" >
          
              Show More
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;