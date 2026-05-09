import { useState, useEffect } from 'react';
import { services } from '../data/portfolio';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <div
          id="services-section"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive design solutions for your brand
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card hover-lift`}
              onMouseEnter={(e) => e.currentTarget.classList.add('hover-lift')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('hover-lift')}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl">
                <i className={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
