import Head from 'next/head';
import Navbar from '../components/Navbar';

const WebDesign = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Custom Website Development',
      description: 'Tailored websites built to meet your specific business needs and goals',
      features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First Design',
      description: 'Websites that look and work perfectly on all devices, from phones to desktops',
      features: ['Progressive Web Apps', 'Touch-Friendly Interface', 'Fast Loading']
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management',
      features: ['Secure Checkout', 'Product Management', 'Order Tracking']
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight your users and drive conversions',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: 'fas fa-rocket',
      title: 'Website Optimization',
      description: 'Speed up your website and improve user experience with performance optimization',
      features: ['Page Speed', 'Core Web Vitals', 'Image Optimization']
    },
    {
      icon: 'fas fa-cogs',
      title: 'CMS Development',
      description: 'Content management systems that make it easy to update your website',
      features: ['WordPress', 'Custom CMS', 'Easy Updates']
    }
  ];

  const portfolio = [
    {
      category: 'business',
      title: 'Corporate Website',
      description: 'Professional business website with modern design',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/Images/webnexter(new).png'
    },
    {
      category: 'ecommerce',
      title: 'Online Store',
      description: 'Full-featured e-commerce platform',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: '/Images/Organic.png'
    },
    {
      category: 'portfolio',
      title: 'Creative Portfolio',
      description: 'Artist portfolio with gallery system',
      tech: ['React', 'Framer Motion', 'Sanity'],
      image: '/Images/BRanding MOckup.jpg'
    },
    {
      category: 'business',
      title: 'SaaS Platform',
      description: 'Software as a service application',
      tech: ['Vue.js', 'Express', 'MySQL'],
      image: '/Images/Woodcut-Logo-Mockup.png'
    },
    {
      category: 'portfolio',
      title: 'Photography Website',
      description: 'Photographer portfolio with booking system',
      tech: ['Next.js', 'Tailwind', 'Prisma'],
      image: '/Images/Facebook post.png'
    },
    {
      category: 'ecommerce',
      title: 'Fashion Store',
      description: 'Fashion e-commerce with custom features',
      tech: ['React', 'Shopify', 'GraphQL'],
      image: '/Images/gift-card.jpg'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and competition to create a comprehensive project plan.'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize the final product.'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your website using modern technologies and best practices for scalability and performance.'
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Rigorous testing and quality assurance before deploying your website to production.'
    },
    {
      step: 5,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly and securely.'
    }
  ];

  const pricing = [
    {
      name: 'Starter Website',
      price: '10,000',
      features: [
        '3-Page Website',
        'Responsive Design',
        'Contact Form',
        '1 Month Support'
      ],
      excluded: ['Custom Animations', 'Advanced Features', 'CMS Integration']
    },
    {
      name: 'Professional Website',
      price: '20,000',
      popular: true,
      features: [
        '5-Page Website',
        'Custom Design',
        'CMS Integration',
        'Contact Forms',
        'Social Media Integration',
        '3 Months Support'
      ]
    },
    {
      name: 'E-commerce Website',
      price: '35,000',
      features: [
        'Unlimited Pages',
        'E-commerce Functionality',
        'Payment Gateway',
        'Product Management',
        'Order System',
        'Advanced Analytics',
        '6 Months Support',
        'Price Based on Project Complexity'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'CEO, Tech Company',
      content: 'Webnexter delivered an amazing website that perfectly represents our brand. The design is modern and the functionality is flawless.'
    },
    {
      name: 'Emily Chen',
      role: 'Founder, Fashion Brand',
      content: 'Our e-commerce store has seen a 200% increase in conversions since the redesign. The user experience is exceptional.'
    },
    {
      name: 'Robert Johnson',
      role: 'Director, Non-Profit',
      content: 'The team understood our needs perfectly and delivered a website that helps us serve our community better.'
    }
  ];

  return (
    <>
      <Head>
        <title>Web Design Services - Webnexter</title>
      </Head>

      <div className="min-h-screen bg-secondary-50">
        <Navbar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-secondary-100 to-secondary-50 pt-24 lg:pt-32 pb-24'>
      <section className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 ">
            <div 
              className="mb-12 lg:mb-0 text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                Web Design
                <span className="gradient-text block">Excellence</span>
              </h1>
              <p className="text-xl text-accent-100 mb-8 max-w-lg">
                Create stunning, user-centered websites that convert visitors into customers and drive business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#services" className="btn btn-primary text-center">Our Services</a>
                <a href="#contact" className="btn btn-secondary text-center">Get Quote</a>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">20+</h3>
                  <p className="text-accent-100">Websites Built</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">95%</h3>
                  <p className="text-accent-100">Client Satisfaction</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">24/7</h3>
                  <p className="text-accent-100">Support Available</p>
                </div>
              </div>
            </div>
            <div 
              className=""
            >
              <div className="floating-card">
                <div className="marketing-graphic">
                  <i className="fas fa-code text-6xl text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>
      </section>
      </section>
    
      {/* Services Section */}
      <section id="services" className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 "
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Web Design Services</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Comprehensive web design solutions for your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-primary-100">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 "
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Portfolio</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Explore our web design projects and creative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="portfolio-item"
                onMouseEnter={(e) => e.currentTarget.classList.add('hover-lift')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-lift')}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                </div>
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tech-stack">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 "
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Design Process</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              A systematic approach to creating exceptional web experiences
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="process-step flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="step-number w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-accent-100">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 "
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Web Design Packages</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Transparent pricing for web development services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">৳</span>
                    <span className="amount">{plan.price}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                  {plan.excluded?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <i className="fas fa-times text-red-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-[40%] text-center`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary-100">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 "
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Client Testimonials</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              What our clients say about our web design services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <p className="text-accent-100">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="text-white">{testimonial.name}</h4>
                    <p className="text-accent-100">{testimonial.company}</p>
                  </div>
                  <div className="rating">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
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
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let's create a stunning website that represents your brand and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm">
                Start Your Project
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 hover:border-white transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default WebDesign;
