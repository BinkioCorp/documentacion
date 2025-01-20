import Image from 'next/image';
import { ArrowUpRight, Atom } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="w-full h-full mx-auto bg-white rounded-[32px] p-6 md:px-8 shadow-lg">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Offer Card */}
          <div className="col-span-1 md:col-span-8 bg-zinc-900 rounded-[24px] p-4 md:p-8 relative overflow-hidden">
            <p className="text-zinc-400 text-sm">Binkio Labs</p>
            <h1 className="text-white text-6xl font-medium mt-4 mb-8 max-w-md leading-[1.1]">
                Smart payments tool
            </h1>
            <div className="flex items-center gap-2 bg-white rounded-full pl-4 pr-6 py-3 w-fit">
              <span className="text-zinc-400 text-sm">TECH</span>
              <div className="flex items-center gap-2 text-zinc-900">
                <span className="font-medium">Discover</span>
                <Atom className="h-5 w-5" />
              </div>
            </div>
            {/*<Image
              src=""
              alt="Product charging case"
              width={500}
              height={500}
              className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4"
            />*/}
          </div>

          {/* Blog Card */}
          <div className="col-span-1 md:col-span-4 bg-zinc-100 rounded-[24px] p-4 md:p-6 relative overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-sm text-zinc-900">TECH-DRIVEN PAYMENTS</p>
                <h2 className="text-3xl font-medium mt-2 md:mt-4">View our blog</h2>
              </div>
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="h-6 w-6 text-zinc-900" />
              </div>
            </div>
            <div className="absolute right-6 top-24">
              <div className="w-32 h-32 bg-zinc-300 rounded-full" />
              <div className="w-8 h-8 bg-zinc-900 rounded-full absolute -top-4 right-4" />
            </div>
          </div>

          {/* About Us Card */}
          <div className="col-span-1 md:col-span-6 bg-violet-400 rounded-[24px] p-4 md:p-6 relative">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-white text-sm">DISCOVER</p>
                <p className="text-white text-sm">OUR HISTORY</p>
                <h2 className="text-white text-3xl font-medium mt-2">About us</h2>
              </div>
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="col-span-1 md:col-span-6 bg-[#B5F459] rounded-[24px] p-4 md:p-6 relative">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-zinc-900 text-sm">HAVE SOME</p>
                <p className="text-zinc-900 text-sm">QUESTIONS?</p>
                <h2 className="text-zinc-900 text-3xl font-medium mt-2 md:mt-4">Contact us</h2>
              </div>
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="h-6 w-6 text-zinc-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
