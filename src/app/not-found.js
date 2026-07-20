"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center px-6">

      <div className="text-center">

        {/* Icon */}
        <div className="mx-auto w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl animate-pulse">
          <SearchX className="w-20 h-20 text-cyan-400" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mt-8">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-xl mx-auto mt-5 text-lg leading-8">
          The page you re looking for does nt exist, has been moved,
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link href="/">
            <Button
              color="primary"
              className="px-8 py-6 text-lg rounded-2xl shadow-xl"
              startContent={<Home size={20} />}
            >
              Back to Home
            </Button>
          </Link >

          <Link href="/"> 

          <Button
            variant="bordered"
            className="px-8 py-6 text-lg rounded-2xl border-white mx-auto text-white hover:bg-white hover:text-black transition-all"
            >
            Go Back
          </Button>
              </Link>

        </div>

      </div>

    </div>
  );
};

export default NotFound;