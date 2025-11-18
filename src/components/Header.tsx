'use client'
import { Code2, Menu } from 'lucide-react';


export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <header id="portfolio_header" className='sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6"/>
            <span className="text-xl font-bold">Web developer</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                data-testid="link-projects"
            >
                Home
            </button>
            <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                data-testid="link-projects"
            >
                Experience
            </button>
            <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                data-testid="link-projects"
            >
                Skills
            </button>
            <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-bold hover-elevate px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                data-testid="link-projects"
            >
                Contact
            </button>
          </div>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-neutral-900" />
          </button>
        </div>
      </nav>
    </header>
  );
};
