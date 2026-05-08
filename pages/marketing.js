import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Marketing = () => {
  const services = [
    {
      icon: 'fas fa-bullhorn',
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns across all platforms to increase brand awareness and engagement',
      features: ['Content Creation', 'Community Management', 'Paid Advertising']
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions',
      features: ['Campaign Strategy', 'Automation Setup', 'Performance Tracking']
    },
    {
      icon: 'fas fa-ad',
      title: 'PPC Advertising',
      description: 'Pay-per-click campaigns that deliver immediate results and maximize ROI',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization']
    },
    {
      icon: 'fas fa-pen',
      title: 'Content Marketing',
      description: 'Engaging content that tells your brand story and attracts your target audience',
      features: ['Blog Writing', 'Video Content', 'Infographics']
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to measure campaign success',
      features: ['Performance Tracking', 'Custom Reports', 'Insights & Recommendations']
    }
  ];

  const portfolio = [
    {
      category: 'social-media',
      title: 'Fashion Brand Instagram Growth',
      description: '250% increase in engagement',
      stats: ['50K+ Followers', '85% Engagement'],
      icon: 'fas fa-instagram'
    },
    {
      category: 'seo',
      title: 'E-commerce SEO Optimization',
      description: 'Page 1 rankings for 15 keywords',
      stats: ['300% Traffic', '180% Sales'],
      icon: 'fas fa-search'
    },
    {
      category: 'ppc',
      title: 'Google Ads for SaaS Company',
      description: '450% ROI in 3 months',
      stats: ['$5.50 CPA', '12% CTR'],
      icon: 'fas fa-ad'
    },
    {
      category: 'content',
      title: 'B2B Content Strategy',
      description: '200+ blog posts published',
      stats: ['100K+ Views', '5K+ Leads'],
      icon: 'fas fa-blog'
    },
    {
      category: 'social-media',
      title: 'Facebook Lead Generation',
      description: '500+ qualified leads per month',
      stats: ['$3.20 CPL', '85% Conversion'],
      icon: 'fab fa-facebook'
    },
    {
      category: 'seo',
      title: 'Local SEO for Restaurant',
      description: '#1 ranking in local search',
      stats: ['Local Pack #1', '200% Calls'],
      icon: 'fas fa-link'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '4500',
      features: [
        'Social Media Management (2 platforms)',
        'Basic SEO Optimization',
        'Monthly Reporting',
        'Email Support'
      ],
      excluded: ['PPC Management', 'Content Creation']
    },
    {
      name: 'Professional',
      price: '8500',
      popular: true,
      features: [
        'Social Media Management (4 platforms)',
        'Advanced SEO & Content',
        'PPC Management ($2,000 ad spend)',
        'Bi-weekly Reporting',
        'Priority Support',
        'A/B Testing'
      ]
    },
    {
      name: 'Enterprise',
      price: '12000',
      features: [
        'Full-Service Marketing',
        'Unlimited Platforms',
        'PPC Management ($5,000+ ad spend)',
        'Weekly Reporting & Analysis',
        'Dedicated Account Manager',
        'Custom Strategy Development'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Fashion Boutique',
      content: 'Webnexter transformed our online presence. Our social media engagement increased by 300% and sales doubled within 6 months!'
    },
    {
      name: 'Mike Chen',
      role: 'Founder, Tech Startup',
      content: 'The SEO results have been outstanding. We\'re now ranking on page 1 for our main keywords and organic traffic is up 400%.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Director, SaaS Company',
      content: 'Their PPC management expertise helped us reduce our cost-per-acquisition by 60% while doubling our conversion rate.'
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Marketing Services - Webnexter</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center bg-gradient-to-br from-secondary-100 to-secondary-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                Digital Marketing
                <span className="gradient-text block">Excellence</span>
              </h1>
              <p className="text-xl text-accent-100 mb-8 max-w-lg">
                Transform your business with data-driven marketing strategies that deliver measurable results and drive sustainable growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#services" className="btn btn-primary">Our Services</a>
                <a href="/contact" className="btn btn-secondary">Free Consultation</a>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">500+</h3>
                  <p className="text-accent-100">Campaigns Managed</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">98%</h3>
                  <p className="text-accent-100">Client Satisfaction</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">3x</h3>
                  <p className="text-accent-100">Average ROI</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 lg:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="floating-card">
                <div className="marketing-graphic">
                  <i className="fas fa-chart-line text-6xl text-primary-600"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Marketing Services</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions for your business growth
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-accent-100 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-accent-100">
                      <i className="fas fa-check text-accent-400 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-primary-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Marketing Success Stories</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Real results from real campaigns
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="portfolio-image">
                  <div className="campaign-preview">
                    <i className={item.icon}></i>
                    <h4>{item.title.split(' ')[0]}</h4>
                  </div>
                </div>
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="campaign-stats">
                    {item.stats.map((stat, idx) => (
                      <span key={idx}>
                        <i className="fas fa-users mr-1"></i>
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Marketing Packages</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Flexible pricing options for businesses of all sizes
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="text-white">{plan.name}</h3>
                  <div className="price text-white">
                    <span className="currency">৳</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/month</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-accent-100">
                      <i className="fas fa-check text-accent-400 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                  {plan.excluded?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <i className="fas fa-times text-red-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-[40%] text-center`}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Client Success Stories</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Hear what our clients have to say about our marketing services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text text-accent-100">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <span>{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className="author-info">
                      <h4 className="text-white">{testimonial.name}</h4>
                      <p className="text-accent-100">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Modern decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let's create a marketing strategy that delivers real results and drives sustainable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm">
                Free Marketing Audit
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 hover:border-white transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Marketing;
