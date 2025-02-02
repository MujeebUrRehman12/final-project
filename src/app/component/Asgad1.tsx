import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="bg-[#F9F1E7] py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center space-x-4 text-gray-600">
        {/* Home Link */}
        <Link href="/" className="text-sm font-medium hover:text-gray-800">
          Home
        </Link>
        <span className="text-gray-400">›</span>

        {/* Shop Link */}
        <Link href="/shop" className="text-sm font-medium hover:text-gray-800">
          Shop
        </Link>
        <span className="text-gray-400">›</span>

        {/* Current Page */}
        <span className="text-sm font-semibold text-gray-800">
          Asgaard Sofa
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;