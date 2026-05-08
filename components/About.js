import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { skills, stats } from '../data/portfolio';

const StatCounter = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
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
  }, [inView, number]);

  return (
    <div ref={ref} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300">
      <h3 className="text-4xl font-bold text-primary-600 mb-2">
        {count}+
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Passionate designer creating impactful visual solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-lg leading-relaxed mb-8 text-gray-300"
              variants={itemVariants}
            >
I’m a professional specializing in Graphic Design & Web Development.
From brand identity and logo design to high-converting websites and marketing strategies, Along with my team I help businesses build a strong digital presence that attracts attention and drives growth. ✨ <br /><br />

With a focus on creativity, strategy, and results, I create visuals and experiences that connect with audiences, strengthen brands, and generate real business opportunities. 🚀
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="flex items-center gap-4 p-4 service-card"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white">
                    <i className={skill.icon} />
                  </div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 service-card"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat) => (
              <StatCounter key={stat.id} number={stat.number} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
