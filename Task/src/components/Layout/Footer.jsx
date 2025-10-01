import { Heart, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-emerald-100">
            <span className="text-sm md:text-base">Made with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" />
            <span className="text-sm md:text-base">for the Ummah</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Remmaabde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:Reemabdella702@gmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs md:text-sm text-emerald-200">
            <p>&copy; {currentYear} Islamic Task Manager. All rights reserved.</p>
          </div>

          <div className="text-center text-emerald-100 text-sm italic">
            <p className="font-arabic">"Indeed, Allah loves those who act with excellence"</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
