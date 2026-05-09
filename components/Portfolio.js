import { useState, useEffect } from 'react';
import { portfolioItems, categories } from '../data/portfolio';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
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

    const element = document.getElementById('portfolio-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };


  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <div
          id="portfolio-section"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Showcasing creative excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white border-0'
                  : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item hover-lift`}
                onClick={() => openModal(item)}
                onMouseEnter={(e) => e.currentTarget.classList.add('hover-lift')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-lift')}
              >
                <div className="portfolio-image h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="portfolio-overlay">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="mb-4 opacity-90">{item.description}</p>
                  <button className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform">
                    <i className="fas fa-expand" />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 fade-in"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto fade-in"
              onClick={(e) => e.stopPropagation()}
            >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black/50 w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-black/70 transition-colors z-10"
                >
                  ×
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-xl mb-6 max-h-[60vh] object-contain"
                />
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Portfolio;
