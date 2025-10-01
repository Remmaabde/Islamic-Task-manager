import { Moon, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-4 left-10 animate-pulse">
          <Star className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute top-12 right-20 animate-pulse delay-100">
          <Star className="w-4 h-4" fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-32 animate-pulse delay-200">
          <Star className="w-5 h-5" fill="currentColor" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <Moon className="w-12 h-12 text-yellow-200 animate-pulse" fill="currentColor" />
            <Star className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-ping" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
              Islamic Task Manager
            </h1>
            <p className="text-emerald-50 text-sm md:text-base mt-2 font-light tracking-wide">
              Organize your day with purpose and devotion
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"></div>
    </header>
  );
}
