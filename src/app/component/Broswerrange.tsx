// components/BrowseTheRange.tsx
import Image from "next/image";
import Link from "next/link";

const BrowseTheRange = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Browse The Range</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/dining" className="group">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="/image/r1.svg" 
              alt="Dining"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600">Dining</h3>
            </div>
          </div>
        </Link>
        <Link href="/living" className="group">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="/image/r2.svg" 
              alt="Living"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600">Living</h3>
            </div>
          </div>
        </Link>
        <Link href="/bedroom" className="group">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="/image/r3.svg" 
              alt="Bedroom"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600">Bedroom</h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BrowseTheRange;