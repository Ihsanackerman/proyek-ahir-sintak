import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.54,12.19 14.58,12.81C16.09,13.45 17,14.94 17,16.61C17,18.95 15.05,20.9 12.71,20.9H9.29C6.95,20.9 5,18.95 5,16.61C5,14.94 5.91,13.45 7.42,12.81C5.46,12.19 4,10.28 4,8V5L2,5V8H0V3H6V8C6,9.1 6.9,10 8,10H10C11.1,10 12,9.1 12,8V3H18V8C18,9.1 17.1,10 16,10H14C12.9,10 12,9.1 12,8V5H10V8C10,10.76 12.24,13 15,13H17C19.76,13 22,10.76 22,8V3H24V8H22V5L20,5Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">CoffeeBean Co.</span>
                <span className="text-xs text-gray-400 -mt-1">
                  Premium Indonesian Coffee
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              Premium Indonesian coffee beans sourced directly from local
              farmers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors"
                >
                  Arabica Beans
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors"
                >
                  Robusta Beans
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors"
                >
                  Ground Coffee
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors"
                >
                  Coffee Blends
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Palembang, Indonesia</p>
              <p>+62 21 1234 5678</p>
              <p>info@coffeebean.co.id</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CoffeeBean Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
