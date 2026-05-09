import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Creative Solution For Business';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="flex items-center bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900 relative overflow-hidden pt-14 pb-14">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="white"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div 
          className="hero-content text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {text}
            <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-white ml-1 animate-pulse" />
          </h1>
          
          <p
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Transforming ideas & branding into stunning solutions through innovative design & result.
          </p>
          
          <div
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Portfolio
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div 
          className="hero-image flex justify-center items-center"
        >
          <div className="floating-card bg-primary-200 p-8 rounded-2xl shadow-2xl border border-accent-600/30 hover-lift">
            <img
              src="/Images/WebNexterNew.png"
              alt="Featured Design"
              className="w-64 md:w-72 lg:w-80 h-auto rounded-xl"
              onError={(e) => {
                e.target.src = '/Images/TVflex(2).png';
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-8 border-r-3 border-b-3 border-white transform rotate-45" />
      </div>
    </section>
  );
};

export default Hero;
