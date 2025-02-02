import Image from 'next/image';
import Link from 'next/link';

const FurniturePage = () => {
  const furnitureItems = [
    {
      id: 1,
      image: '/image/f1.svg',
      link: '/furniture1',
    },
    {
      id: 2,
      image: '/image/f2.svg',
      link: '/furniture2',
    },
    {
      id: 3,
      image: '/image/f3.svg',
      link: '/furniture3',
    },
    {
      id: 4,
      image: '/image/f4.svg',
      link: '/furniture4',
    },
    {
      id: 5,
      image: '/image/f5.svg',
      link: '/furniture5',
    },
    {
      id: 6,
      image: '/image/f6.svg',
      link: '/furniture6',
    },{
        id: 7,
        image: '/image/f7.svg',
        link: '/furniture6',
    },{
        id: 8,
      image: '/image/f8.svg',
      link: '/furniture6',
    },{
        id: 9,
      image: '/image/f9.svg',
      link: '/furniture6',
    }
  ];

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-2xl font-bold mb-4 flex justify-center text-center items-center">#FunitureFurniture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {furnitureItems.map((item) => (
          <Link href={item.link} key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300" >
            
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={`Furniture ${item.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          
        ))}
      </div>
    </div>
  );
};

export default FurniturePage;