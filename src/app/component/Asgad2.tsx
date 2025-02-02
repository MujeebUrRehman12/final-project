import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Product Image Thumbnails */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="cursor-pointer border rounded-lg">
              <Image
                src={`/image/a${item}.svg`} 
                alt={`Thumbnail ${item}`}
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="md:col-span-5 flex justify-center">
          <Image
            src="/image/a5.svg"
            alt="Asgaard sofa"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div className="md:col-span-5 space-y-4">
          {/* Product Title */}
          <h1 className="text-2xl font-semibold text-gray-800">Asgaard sofa</h1>

          {/* Price */}
          <p className="text-xl font-bold text-gray-600">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(5 Customer Reviews)</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the
            Asgaard sofa is crafted for comfort and style, ideal for any home.
          </p>

          {/* Size Options */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Size</h4>
            <div className="flex space-x-4">
              {["XL", "L", "M"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Color</h4>
            <div className="flex space-x-4">
              {["#5736DD", "#7A601F", "#000"].map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="number"
              defaultValue={1}
              className="w-12 text-center border rounded-md"
            />
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-200">
              + Compare
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>SKU:</strong> 58001
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
            <p>
              <strong>Tags:</strong> Sofa, Chair, Home, Shop
            </p>
            <p>
              <strong>Share:</strong>
              <span className="ml-2 space-x-2">
                <a href="#" className="hover:text-gray-800">📘</a>
                <a href="#" className="hover:text-gray-800">🐦</a>
                <a href="#" className="hover:text-gray-800">📸</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;