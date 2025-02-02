
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
          <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
          <nav className="text-sm text-gray-500 mt-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>{" "}
             <span>Contact</span>
          </nav>
        </div>
      </section>


    </div>
  );
};

export default ShopHeader;