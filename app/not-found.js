"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      
      {/* 404 Number with Glow Gradient */}
      <h1 className="text-[9rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-[0_0_25px_rgba(255,0,128,0.4)] animate-pulse">
        404
      </h1>

      {/* Page Title */}
      <h2 className="text-3xl font-semibold mb-3">Oops! Page Not Found</h2>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or might have been moved.
        Let’s get you back on track.
      </p>

      {/* Return Home Button */}
      <Link href="/" passHref>
        <Button
          className="px-6 py-3 text-base rounded-xl font-medium shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20"
        >
          🏠 Return Home
        </Button>
      </Link>
    </div>
  );
}
