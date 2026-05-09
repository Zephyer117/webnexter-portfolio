import Head from 'next/head';
import Navbar from '../components/Navbar';

const About = () => {
  const team = [
    {
      name: 'Mostofa Shahriar',
      role: 'Founder',
      bio: 'With over 5 years of experience in brand strategy and creative design, he leads our team with vision and innovation.',
      image: 'MS',
      skills: ['Brand Strategy', 'Web Development', 'Graphics Design', 'Creative Direction']
    },
    {
      name: 'Shazzadur Rahman Ohe',
      role: 'Marketer',
      bio: 'Ohe brings expertise in development and digital marketing, ensuring our solutions are both beautiful and functional.',
      image: 'SRO',
      skills: ['Web Development', 'SEO', 'Performance Optimization', 'Digital Marketing']
    },
    {
      name: 'Tahir Hafiz',
      role: 'Graphics Designer',
      bio: 'Tahir brings with his knowledge of graphics design, ensuring our solutions are both beautiful and functional.',
      image: 'TH',
      skills: ['Graphics Design', 'UI/UX Design', 'Brand Identity']
    },
    {
      name: 'Redowan Mahmud',
      role: 'Graphics Designer & Business Developer',
      bio: 'Redowan brings more leads to our business for the development, ensuring our solutions are both beautiful and functional.',
      image: 'RM',
      skills: ['Graphics Design', 'UI/UX Design', 'Brand Identity', 'Business Development']
    },
    {
      name: 'Hemen',
      role: 'Meta ADS & Social Media Manager',
      bio: 'Hemen manages our Meta ADS and social media, ensuring our solutions are both beautiful and functional.',
      image: 'HM',
      skills: ['Meta ADS', 'Social Media Management', 'Content Creation']
    }
  ];

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new creative solutions to stay ahead of industry trends.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'Our team is driven by a genuine passion for creating exceptional digital experiences.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Excellence',
      description: 'We deliver outstanding results that exceed expectations and drive business growth.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Years Experience' }
  ];

  return (
    <>
      <Head>
        <title>About Us - Webnexter</title>
      </Head>

      <div className="min-h-screen bg-secondary-50" id="about-page">
        <Navbar />

        {/* Hero Section */}
      <section className='bg-gradient-to-br from-secondary-100 to-secondary-50 pt-24 lg:pt-32 pb-24'>
      <section className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 ">
            <div 
              className="mb-12 lg:mb-0 text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                About
                <span className="gradient-text block">Webnexter</span>
              </h1>
              <p className="text-xl text-accent-100 mb-8 max-w-lg">
                We are a team of passionate creatives and strategists dedicated to transforming ideas into powerful digital experiences that drive results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="">
                    <h3 className="text-3xl font-bold text-accent-300">{stat.number}</h3>
                    <p className="text-accent-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className=""
            >
              <div className="floating-card">
                <div className="marketing-graphic">
                  <i className="fas fa-rocket text-6xl text-primary-600"></i>
                </div>
              </div>
            </div>
          </div>
      </section>
      </section>

        {/* Story Section */}
        <section className="py-20 bg-primary-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Story</h2>
              <p className="text-xl text-accent-100 max-w-3xl mx-auto">
                Founded in 2022, Webnexter began as a small design agency with a big vision: to help businesses 
                transform their digital presence and achieve remarkable growth through innovative design and strategic marketing.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-accent-100 mb-6">
                  Over the years, we've grown from a boutique agency to a full-service digital studio, 
                  serving clients across various industries with our comprehensive suite of services.
                </p>
                <p className="text-lg text-accent-100 mb-6">
                  Our approach combines creative excellence with data-driven strategies, ensuring that every project 
                  not only looks stunning but also delivers measurable business results.
                </p>
                <p className="text-lg text-accent-100">
                  Today, we're proud to be a trusted partner for businesses looking to make their mark 
                  in the digital landscape.
                </p>
              </div>
              <div className="relative">
                <div className="floating-card">
                  <div className="marketing-graphic">
                    <i className="fas fa-history text-6xl text-primary-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-primary-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Values</h2>
              <p className="text-xl text-accent-100 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="service-card text-center"
                >
                  <div className="service-icon">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-accent-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-primary-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Meet Our Team</h2>
              <p className="text-xl text-accent-100 max-w-2xl mx-auto">
                The talented individuals behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="service-card"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-accent-200 mb-4">{member.role}</p>
                  </div>
                  <p className="text-accent-100 mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-accent-500/20 text-accent-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
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
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                Let's create something amazing together and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm">
                  Start Your Project
                </a>
                <a href="/portfolio" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 hover:border-white transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
