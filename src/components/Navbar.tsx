import React, { useState, useEffect } from "react";
import { Home, Info, Briefcase, GraduationCap, Mail, Menu, X } from "lucide-react";

const navItems = [
  { text: 'Home', icon: <Home size={20} className="text-white" /> },
  { text: 'About', icon: <Info size={20} className="text-white" /> },
  { text: 'Projects', icon: <Briefcase size={20} className="text-white" /> },
  { text: 'Education', icon: <GraduationCap size={20} className="text-white" /> },
  { text: 'Contact', icon: <Mail size={20} className="text-white" /> },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("Home");

  // useEffect for Navbar becomes thinner and smaller.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // useEffect for Active Link in Navbar.
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const item of navItems) {
        const id = item.text;
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return(
    <>
      <nav 
        className={`sticky top-0 z-40 border-b border-white/30 bg-white/20
          shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300
          ${isScrolled ? 'py-0' : 'py-2'}`
        }
      >
        <div className="flex min-h-14 items-center px-4 sm:min-h-16">
          {/* Logo or Name */}
          <span 
            className={`flex-grow font-bold text-white transition-all duration-300 
              ${isScrolled ? 'text-base' : 'text-xl'}`
            }
          >
            Mochi Portfolio
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.text}
                onClick={() => scrollToSection(item.text)}
                className={`relative ml-4 cursor-pointer overflow-hidden px-2 pb-1 uppercase tracking-wide transition-colors duration-300 
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                  after:transition-all after:duration-300 after:content-[''] hover:after:w-full 
                  ${activeSection === item.text 
                    ? 'border-b-2 border-accent-blue font-bold text-accent-blue'
                    : 'font-normal text-white'
                  }`
                }
              >
                {item.text}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer(true)}
            aria-label="Open menu"
            className="block cursor-pointer p-2 text-white md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={toggleDrawer(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${drawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
        `}
      />

      {/* Drawer for Mobile */}
      <div 
        className={`fixed right-0 top-0 z-50 h-full w-[250px] bg-bg-tertiary text-white
          transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-2">
          <button onClick={toggleDrawer(false)} className="cursor-pointer p-2 text-white" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <ul>
          {navItems.map(({ text, icon }) => (
            <li key={text}>
              <button
                onClick={() => {
                  scrollToSection(text);
                  setDrawerOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center gap-4 px-6 py-3 text-left
                  ${activeSection === text ? 'bg-white/10' : 'bg-bg-tertiary'}
                `}
              >
                {icon}
                <span 
                  className={activeSection === text 
                    ? 'font-bold text-accent-blue'
                    : 'font-normal text-white'
                  }
                >
                  {text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar;