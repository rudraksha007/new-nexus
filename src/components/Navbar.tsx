'use client';
import Link from 'next/link'
import { Home, User, ChartLine, Heart, Mail } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: User },
    { path: "/prediction", label: "Prediction", icon: ChartLine },
    { path: "/health-tips", label: "Health Tips", icon: Heart },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-green-800">
            Health Predictor AI
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center space-x-1 text-gray-600 hover:text-green-700 transition-colors">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <SignedIn>
              <UserButton
                userProfileProps={{
                  additionalOAuthScopes: {
                    google: [
                      "https://www.googleapis.com/auth/fitness.activity.read",
                      "https://www.googleapis.com/auth/fitness.activity.write"
                    ]
                  }
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
            <SignedOut>
              <Link href="/login">
                Sign in
              </Link>
            </SignedOut>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button - simplified version */}
            <button className="text-gray-600 hover:text-green-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;