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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About US</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Marketing Solution For Your Business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p
              className="text-lg leading-relaxed mb-8 text-gray-300 text-center"
            >
We are a full-service creative and marketing team dedicated to helping businesses grow, scale, and dominate their digital presence. 🚀
<br /><br />
From eye-catching Graphic Design and powerful Brand Identity to modern Website Development, Strategic Marketing, and Lead Generation we provide complete business solutions designed to attract attention, build trust, and increase sales. ✨
<br /><br />
We don’t just create designs or websites we build experiences that connect with customers, strengthen your brand, and turn ideas into real business growth.
<br /><br />
Whether you’re launching a new brand or scaling an existing business, our team focuses on delivering creative strategies, impactful visuals, and result-driven marketing that helps your business stand out in today’s competitive market. 💼🔥
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
