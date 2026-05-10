import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item.href) {
      // Navigate to a different page
      router.push(item.href);
    } else {
      // Scroll to section on current page
      const element = document.getElementById(item.id);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  const isSinglePage = router.pathname !== '/';

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'marketing', label: 'Marketing', href: '/marketing' },
    { id: 'web-design', label: 'Web Design', href: '/web-design' },
    { id: 'lead-generation', label: 'Lead Generation', href: '/lead-generation' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        scrolled
          ? 'bg-secondary-50/98 backdrop-blur-xs shadow-lg border-b border-accent-600/20'
          : 'bg-secondary-50/95 backdrop-blur-xs shadow-sm border-b border-accent-600/10'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 py-4 lg:py-6 flex justify-between items-center">
        <div className="nav-logo">
          <h2 className="text-2xl font-bold gradient-text">Webnexter</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none gap-8">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              {item.href ? (
                <Link href={item.href}>
                  <span className={`nav-link cursor-pointer ${router.pathname === item.href ? 'active' : ''}`}>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden flex flex-col cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`w-6 h-0.5 bg-gray-200 mb-1.5 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-200 mb-1.5 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-200 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`md:block fixed left-0 top-full w-full bg-primary-50 shadow-xl transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navItems.filter(item => !item.showOnlyOnHome || isSinglePage === false).map((item) => (
          <li key={item.id} className="border-b border-accent-600/30">
            {item.href ? (
              <Link href={item.href}>
                <span className={`block w-full text-left px-5 py-4 nav-link cursor-pointer ${
                  router.pathname === item.href ? 'active' : ''
                }`}>
                  {item.label}
                </span>
              </Link>
            ) : (
              <button
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-5 py-4 nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
