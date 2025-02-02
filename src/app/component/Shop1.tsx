
import Link from "next/link";

const ShopHeader = () => {
  return (
    <div>
      {/* Header Section */}
      <section className=" shop relative w-full bg-gray-100">
        {/* Background Image */}
        <div className=" shop absolute inset-0 -z-10">
         
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
          <nav className="text-sm text-gray-500 mt-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>{" "}
            &gt; <span>Shop</span>
          </nav>
        </div>
      </section>

      {/* Toolbar Section */}
      <div className="bg-white py-4 px-4 md:px-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Filter and View Options */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <span className="material-icons-outlined">filter_alt</span>
              <span className="ml-2">Filter</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <span className="material-icons-outlined">view_module</span>
              <span className="ml-2">Grid</span>
            </button>
          </div>

          {/* Product Count */}
          <div className="text-center text-gray-500">
            Showing <span className="font-medium">1-16</span> of 32 results
          </div>

          {/* Sort Options */}
          <div className="flex justify-end space-x-4">
            <div className="flex items-center">
              <label htmlFor="show" className="text-gray-500 mr-2">
                Show
              </label>
              <select
                id="show"
                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>16</option>
                <option>32</option>
                <option>48</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-gray-500 mr-2">
                Sort by
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;