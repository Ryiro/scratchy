import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white">
      {/* Top section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto p-3 flex justify-between items-center">
          <Logo />
          <div className="text-sm">Sign In / Register</div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto p-3">
        <nav className="flex items-center justify-between">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-400">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="px-4 py-1 rounded-full bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="hover:text-blue-400">🛒</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
