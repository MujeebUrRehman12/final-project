import Image from "next/image";
import Link from "next/link";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      discount: "30%",
      image: "/image/s2.svg",
      isNew: false,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      image: "/image/s6.svg",
      isNew: false,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury sofa",
      price: "Rp 7.000.000",
      discount: "50%",
      image: "/image/s4.svg",
      isNew: false,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      discount: null,
      image: "/image/s5.svg",
      isNew: true,
    }, {
      id: 5,
      name: "Syltherine",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      discount: "30%",
      image: "/image/s2.svg",
      isNew: false,
    },
    {
      id: 6,
      name: "Leviosa",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      image: "/image/s6.svg",
      isNew: false,
    },
    {
      id: 7,
      name: "Lolito",
      description: "Luxury sofa",
      price: "Rp 7.000.000",
      discount: "50%",
      image: "/image/s4.svg",
      isNew: false,
    },
    {
      id: 8,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      discount: null,
      image: "/image/s5.svg",
      isNew: true,
    },
    {
      id: 9,
      name: "Syltherine",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      discount: "30%",
      image: "/image/s2.svg",
      isNew: false,
    },
    {
      id: 10,
      name: "Leviosa",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      image: "/image/s6.svg",
      isNew: false,
    },
    {
      id: 11,
      name: "Lolito",
      description: "Luxury sofa",
      price: "Rp 7.000.000",
      discount: "50%",
      image: "/image/s4.svg",
      isNew: false,
    },
    {
      id: 12,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      discount: null,
      image: "/image/s5.svg",
      isNew: true,
    },
    {
      id: 13,
      name: "Syltherine",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      discount: "30%",
      image: "/image/s2.svg",
      isNew: false,
    },
    {
      id: 14,
      name: "Leviosa",
      description: "Stylish coffee chair",
      price: "Rp 2.500.000",
      image: "/image/s6.svg",
      isNew: false,
    },
    {
      id: 15,
      name: "Lolito",
      description: "Luxury sofa",
      price: "Rp 7.000.000",
      discount: "50%",
      image: "/image/s4.svg",
      isNew: false,
    },
    {
      id: 16,
      name: "Respira",
      description: "Outdoor table and stool",
      price: "Rp 500.000",
      discount: null,
      image: "/image/s5.svg",
      isNew: true,
    },

  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-auto"
              />
              {/* Badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <p className="font-bold text-gray-800 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center space-x-2">
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          1
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          2
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          3
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
          <Link href={"/shop/Asgadsofa"} >Next</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;