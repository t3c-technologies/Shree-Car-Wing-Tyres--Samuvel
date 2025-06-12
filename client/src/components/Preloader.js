import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/utils/constants';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center z-50 overflow-hidden">
      <div className="relative w-full h-screen">
        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          {/* Company Name */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-pulse">
            {COMPANY_INFO.name}
          </h2>

          {/* Road Section */}
          <div className="relative h-48 w-full overflow-hidden">
            {/* Road Background with Gradient */}
            <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-gray-700 to-gray-900 top-1/2 -translate-y-1/2 shadow-xl">
              {/* Road Texture */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>

              {/* Road Markings Container - Now moving right */}
              <div className="absolute top-1/2 w-full h-2 flex gap-8 animate-roadMoveRight">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-full bg-gradient-to-r from-gray-300/40 via-gray-300/60 to-gray-300/40 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Rolling Tyre Container - Now moving from left to right */}
            <div className="animate-tyreMove">
              <div className="relative w-32 h-32 -mt-16 animate-tyreRoll">
                <Image
                  src="/images/tyres/4W/preloader.png"
                  alt="Premium Multi-Brand Tyre"
                  width={128}
                  height={128}
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Tyre Shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 blur-md rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Loading Text with Dots */}
          <div className="mt-8 text-white/80 flex items-center justify-center gap-4">
            <span className="text-lg">Loading</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-white/80 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes roadMoveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes tyreRoll {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes tyreMove {
          0% { 
            transform: translateX(-100%);
          }
          100% { 
            transform: translateX(100%);
          }
        }

        .animate-roadMoveRight {
          animation: roadMoveRight 2s linear infinite;
        }

        .animate-tyreRoll {
          animation: tyreRoll 2s linear infinite;
        }

        .animate-tyreMove {
          position: absolute;
          top: 50%;
          animation: tyreMove 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;