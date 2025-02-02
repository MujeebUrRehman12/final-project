
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
        {/* Address Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Funiro.</h2>
          <p className="text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/"  className="hover:text-blue-600" >
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-600" >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600" >
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600" >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/payment-options" className="hover:text-blue-600">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-blue-600">
                Return
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies" className="hover:text-blue-600">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;