// components/NewCollection.tsx
import Image from "next/image";
import Link from "next/link";

const NewCollection = () => {
  return (
    <div className="relative bg-white w-full">
      {/* Background Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src="/image/hero.svg" 
          alt="New Collection Background"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Content Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#FFF3E3] max-w-sm md:max-w-lg lg:max-w-xl p-6 rounded-md shadow-md text-center md:text-left">
          <h3 className="text-sm font-medium text-gray-600 uppercase mb-2">
            New Arrival
          </h3>
          <h1 className="text-2xl md:text-4xl font-bold text-[#B88E2F] leading-tight mb-8  ">
            Discover Our New Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          
            <Link className="inline-block bg-[#B88E2F] text-white font-medium py-2 px-6 rounded hover:bg-yellow-700 transition" href={"/"}>
              Buy Now
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default NewCollection;