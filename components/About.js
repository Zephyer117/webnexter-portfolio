import { useState, useEffect } from 'react';
import { skills, stats } from '../data/portfolio';

const StatCounter = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${number}-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [number, label]);

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(number.replace('+', ''));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          setCount(Math.floor(current));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };
      
      updateCounter();
    }
  }, [isVisible, number]);

  return (
    <div id={`stat-${number}-${label}`} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 fade-in">
      <h3 className="text-4xl font-bold text-primary-600 mb-2">
        {count}+
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const About = () => {
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

    const element = document.getElementById('about-section');
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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <div
          id="about-section"
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Passionate designer creating impactful visual solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p
              className="text-lg leading-relaxed mb-8 text-gray-300 text-center"
            >
I’m a professional specializing in Graphic Design & Web Development.
From brand identity and logo design to high-converting websites and marketing strategies, Along with my team I help businesses build a strong digital presence that attracts attention and drives growth. ✨ <br /><br />

With a focus on creativity, strategy, and results, I create visuals and experiences that connect with audiences, strengthen brands, and generate real business opportunities. 🚀
            </p>

            <div
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="service-card flex flex-col items-center justify-around"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white">
                    <i className={skill.icon} />
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 service-card">
            {stats.map((stat) => (
              <StatCounter key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
