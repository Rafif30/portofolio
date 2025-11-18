import { Code2, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Building the future of web development, one project at a time. 
              Passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Rafif30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/imamradrian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
