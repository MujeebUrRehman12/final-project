import Image from 'next/image';
import Link from 'next/link';

const ProductsSection = () => {
  const products = [
    {
      id: 'Sytherine',
      name: 'Sytherine',
      price: 'Rp 2.500.000',
      image: '/image/p1.svg',
      link: '/sytherine',
    },
    {
      id: 'Leolisa',
      name: 'Leolisa',
      price: 'Rp 7.200.000',
      image: '/image/s7.svg',
      link: '/leolisa',
    },
    {
      id: 'Lolito',
      name: 'Lolito',
      price: 'Rp 7.200.000',
      image: '/image/p3.svg',
      link: '/lolito',
    },
    {
      id: 'Respiro',
      name: 'Respiro',
      price: 'Rp 500.000',
      image: '/image/p4.svg',
      link: '/respiro',
    },
    {
      id: 'Grito',
      name: 'Grito',
      price: 'Rp 1.500.000',
      image: '/image/p5.svg',
      link: '/grito',
    },
    {
      id: 'Muggo',
      name: 'Muggo',
      price: 'Rp 150.000',
      image: '/image/p6.svg',
      link: '/muggo',
    },
    {
      id: 'Pingky',
      name: 'Pingky',
      price: 'Rp 7.000.000',
      image: '/image/p7.svg',
      link: '/pingky',
    },
    {
      id: 'Potty',
      name: 'Potty',
      price: 'Rp 500.000',
      image: '/image/p8.svg',
      link: '/potty',
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl flex flex-col justify-center items-center pb-11">Our Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link href={product.link} key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </Link>
          

          
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;