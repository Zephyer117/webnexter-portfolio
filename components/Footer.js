const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/webnexterofficials/' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/berryalan57/' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ms-utsho/?skipRedirect=true' },
    { icon: 'fab fa-behance', href: 'https://www.behance.net/msutsho117' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-12 rounded-2xl ">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Webnexter</h2>
            <p className="opacity-80">Your business deserves more than just visuals it deserves growth, impact, and recognition.
My job is toattract attention, build trust, and help your brand stand out. ✨<br /><br />
Let’s create something impactful, memorable, and growth-driven together. 🚀</p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transform hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Social media link"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10 opacity-80">
          <p>&copy; 2026 Webexter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
