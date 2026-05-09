import Head from 'next/head';
import Navbar from '../components/Navbar';

const LeadGeneration = () => {
  const services = [
    {
      icon: 'fas fa-search-dollar',
      title: 'Lead Generation Strategy',
      description: 'Comprehensive strategies to identify and attract qualified leads for your business',
      features: ['Target Audience Research', 'Lead Scoring', 'Conversion Optimization']
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and converts your ideal customers',
      features: ['Blog Content', 'Lead Magnets', 'Email Campaigns']
    },
    {
      icon: 'fas fa-users',
      title: 'Social Media Marketing',
      description: 'Leverage social platforms to generate leads and build brand awareness',
      features: ['Social Ads', 'Community Building', 'Social Listening']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Marketing',
      description: 'Nurture leads through targeted email campaigns and automation',
      features: ['Drip Campaigns', 'Lead Nurturing', 'A/B Testing']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'PPC Advertising',
      description: 'Pay-per-click campaigns that drive immediate traffic and leads',
      features: ['Google Ads', 'Facebook Ads', 'Retargeting']
    },
    {
      icon: 'fas fa-phone',
      title: 'Cold Outreach',
      description: 'Strategic cold calling and email campaigns for B2B lead generation',
      features: ['Email Templates', 'Call Scripts', 'Follow-up Sequences']
    }
  ];

  const strategies = [
    {
      title: 'Inbound Marketing',
      description: 'Attract customers through valuable content and experiences',
      tactics: ['SEO Optimization', 'Content Creation', 'Social Media Marketing'],
      icon: 'fas fa-magnet'
    },
    {
      title: 'Outbound Marketing',
      description: 'Proactively reach out to potential customers',
      tactics: ['Cold Calling', 'Email Outreach', 'Direct Mail'],
      icon: 'fas fa-paper-plane'
    },
    {
      title: 'Account-Based Marketing',
      description: 'Target high-value accounts with personalized campaigns',
      tactics: ['Account Research', 'Personalized Content', 'Multi-channel Outreach'],
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Social Selling',
      description: 'Leverage social platforms to build relationships and generate leads',
      tactics: ['LinkedIn Outreach', 'Content Sharing', 'Relationship Building'],
      icon: 'fas fa-handshake'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Target Audience Analysis',
      description: 'Identify and understand your ideal customer profile and buyer personas.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a comprehensive lead generation strategy tailored to your business goals.'
    },
    {
      step: 3,
      title: 'Campaign Implementation',
      description: 'Execute multi-channel campaigns to attract and capture qualified leads.'
    },
    {
      step: 4,
      title: 'Lead Nurturing',
      description: 'Nurture leads through the sales funnel with personalized communication.'
    },
    {
      step: 5,
      title: 'Analysis & Optimization',
      description: 'Track performance metrics and continuously optimize for better results.'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '1000',
      period: '',
      features: [
        '300-500 Leads',
        'Basic Strategy',
        'Email Support'
      ],
      excluded: ['Advanced Analytics', 'Dedicated Manager']
    },
    {
      name: 'Professional',
      price: '3000',
      period: '',
      popular: true,
      features: [
        '1000-2000 Leads',
        'Advanced Strategy',
        'Email Marketing',
        'Weekly Reporting',
        'Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      price: '5000',
      period: '',
      features: [
        '500+ Leads/Day',
        'Full-Service Strategy',
        'Custom Campaigns',
        'Advanced Analytics',
        'B2B / B2C Planning',
        'Weekly Reporting',
        'Dedicated Manager'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'RMS Group',
      role: 'CEO, B2B Leads',
      content: 'Webnexter\'s lead generation strategy helped us increase our qualified leads by 85% in just 3 months. Their approach is data-driven and results-focused.'
    },
    {
      name: 'Jewel Watch',
      role: 'Marketing Director, B2C leads',
      content: 'We struggled with lead generation until we partnered with Webnexter. They delivered a comprehensive strategy that consistently brings in high-quality leads.'
    },
    {
      name: 'Glamour & Glow',
      role: 'Founder, Sell Leads',
      content: 'The team understands our target market perfectly. Their multi-channel approach has helped us build a steady pipeline of qualified prospects.'
    }
  ];

  const metrics = [
    {
      number: '10K+',
      label: 'Leads Generated',
      icon: 'fas fa-users'
    },
    {
      number: '85%',
      label: 'Conversion Rate',
      icon: 'fas fa-chart-line'
    },
    {
      number: '92%',
      label: 'ROI Average',
      icon: 'fas fa-dollar-sign'
    },
    {
      number: '25+',
      label: 'Industries Served',
      icon: 'fas fa-industry'
    }
  ];

  return (
    <>
      <Head>
        <title>Lead Generation Services - Webnexter</title>
      </Head>

      <div className="min-h-screen bg-secondary-50" id="lead-gen-page">
        <Navbar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-secondary-100 to-secondary-50 pt-24 lg:pt-32 pb-24'>
      <section className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 ">
            <div 
              className="mb-12 lg:mb-0 text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                Lead Generation
                <span className="gradient-text block">Excellence</span>
              </h1>
              <p className="text-xl text-accent-100 mb-8 max-w-lg">
                Transform your business with data-driven lead generation strategies that deliver real results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#services" className="btn btn-primary text-center">Our Services</a>
                <a href="/contact" className="btn btn-secondary text-center">Free Audit</a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">500K+</h3>
                  <p className="text-accent-100">Leads Generated</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold text-accent-300">85%</h3>
                  <p className="text-accent-100">Conversion Rate</p>
                </div>
              </div>
            </div>
            <div 
              className=""
            >
              <div className="floating-card">
                <div className="marketing-graphic">
                  <i className="fas fa-funnel-dollar text-6xl text-green-600"></i>
                </div>
              </div>
            </div>
          </div>
      </section>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-primary-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="metric-icon mb-4">
                  <i className={`${metric.icon} text-3xl text-green-600`}></i>
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">{metric.number}</h3>
                <p className="text-gray-200">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-primary-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Lead Generation Services</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Comprehensive lead generation solutions for your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card hover-lift"
                onMouseEnter={(e) => e.currentTarget.classList.add('hover-lift')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-lift')}
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

      {/* Strategies Section */}
      <section id="strategies" className="py-12 bg-primary-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Lead Generation Strategies</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Proven approaches to attract and convert your ideal customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="strategy-card"
              >
                <div className="flex items-start gap-6">
                  <div className="strategy-icon flex-shrink-0">
                    <i className={strategy.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{strategy.title}</h3>
                    <p className="text-accent-100">{strategy.description}</p>
                    <div className="space-y-2 mt-4">
                      {strategy.tactics.map((tactic, idx) => (
                        <div key={idx} className="flex items-center text-accent-100">
                          <i className="fas fa-arrow-right text-accent-400 mr-2 text-sm"></i>
                          {tactic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 bg-primary-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Lead Generation Process</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              A systematic approach to deliver consistent, high-quality leads
            </p>
          </div>
          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="process-step flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="step-number w-20 h-20 bg-accent-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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
      <section id="pricing" className="py-12 bg-primary-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Lead Generation Packages</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Flexible pricing for lead generation services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                onMouseEnter={(e) => e.currentTarget.classList.add('hover-lift')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover-lift')}
              >
                {plan.popular && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="text-white">{plan.name}</h3>
                  <div className="price text-white">
                    <span className="currency">৳</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-green-100">
                      <i className="fas fa-check text-green-400 mr-2"></i>
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
                <a href="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} lg:w-[40%] md:w-[50%] w-[60%]  text-center`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-primary-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Client Success Stories</h2>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              Hear what our clients have to say about our lead generation services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author flex flex-col items-start">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
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
      <section id="cta" className="py-12 relative overflow-hidden">
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
              Ready to Grow Your Pipeline?
            </h2>
            <p className="text-lg mb-6 max-w-lg mx-auto text-blue-100">
              Let's create a lead generation strategy that consistently delivers qualified prospects and drives revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm">
                Start Generating Leads
              </a>
              <a href="/contact" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 hover:border-white transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LeadGeneration;
