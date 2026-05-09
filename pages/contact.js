import Head from 'next/head';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Creative Portfolio</title>
        <meta name="description" content="Get in touch with me for your next project" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <div className="pt-16 lg:pt-20">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
