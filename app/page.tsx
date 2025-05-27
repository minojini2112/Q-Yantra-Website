"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Quantum Computing Service",
      description: "Provide most powerful solutions for your business problems  ",
      color: "#635bff",
      delay: 0,
      image: "/services/quantum-consulting.jpg",
      logos: ["/logos/openai.svg", "/logos/cursor.svg", "/logos/anthropic.svg"]
    },
    {
      title: "Generative AI Solutions",
      description: "Custom generative AI models and automation tailored to your needs.",
      color: "#635bff",
      delay: 0.2,
      image: "/services/ai-solutions.jpg",
      logos: ["/logos/slack.svg", "/logos/twilio.svg", "/logos/linear.svg"]
    },
    {
      title: "Web Development",
      description: "We provide decated teams to build Full stack Websites for Personal and Business purposes",
      color: "#635bff",
      delay: 0.4,
      image: "/services/data-analytics.jpg",
      logos: ["/logos/bloomnation.svg", "/logos/stripe.svg", "/logos/other.svg"]
    },
    {
      title: "App Development",
      description: "We make most scalable Mobile Applications for your business",
      color: "#635bff",
      delay: 0.6,
      image: "/services/secure-solutions.jpg",
      logos: ["/logos/lock.svg", "/logos/shield.svg", "/logos/security.svg"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      x: 100,
      opacity: 0,
      scale: 0.8
    },
    visible: (delay: number) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay
      }
    })
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#a960ee] via-[#ffbe40] via-40% to-[#fa326c] to-90% animate-wave-mix -z-10" />
      {/* Navbar */}
      <nav className="sticky top-0 z-30 flex justify-between items-center m-0 px-8 py-4 max-w-7xl mx-auto bg-white/70 dark:bg-white/20 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-lg rounded-2xl mt-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-[#a960ee] to-[#fa326c] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span className="font-extrabold text-2xl text-gray-900 tracking-tight">Yantra</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-800 font-medium text-base">
          <a href="#" className="hover:text-[#a960ee] transition-colors duration-200">Services</a>
          <a href="#" className="hover:text-[#a960ee] transition-colors duration-200">Products</a>
          <a href="#" className="hover:text-[#a960ee] transition-colors duration-200">Research</a>
          <a href="#" className="hover:text-[#a960ee] transition-colors duration-200">Publications</a>
          <a href="#" className="hover:text-[#a960ee] transition-colors duration-200">About Us</a>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="bg-gradient-to-tr from-[#a960ee] to-[#fa326c] text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Contact sales
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-17 pb-32 md:pb-48 px-4 md:px-0 mx-auto w-full gap-10 overflow-visible">
        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Headline and description */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <h1 className="pl-10 text-5xl md:text-5xl font-extrabold leading-tight text-black bg-clip-text mb-6">
              Providing Scalable Quantum Computing and Generative AI Solutions
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-xl mb-10 pl-10">
              We are a team of quantum computing and Generative AI experts who are dedicated to providing scalable solutions for your business.
            </p>
          </div>
          {/* Right: White background box */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="bg-white/90 rounded-3xl shadow-xl p-2 min-h-[260px] min-w-[300px] w-full max-w-md flex items-center justify-center">
              {/* You can add an image, illustration, or content here */}
              <img 
                src="/braingenerated.jpg" 
                alt="AI Brain" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* Wavy image at the bottom of hero section */}
        <img
          src="/layered-waves-haikei.svg"
          alt="Wavy layered background"
          className="absolute left-0 bottom-0 w-screen max-w-none pointer-events-none select-none z-0"
          style={{ transform: "translateY(15%)" }}
        />
      </section>
      {/* Services Section */}
      <section className="relative w-full bg-[#f6f9fc] py-20 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-[2000px] w-full mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-4 text-center"
          >
            Support for any business type
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 text-center max-w-2xl"
          >
            From global AI companies to category-defining marketplaces, successful businesses across industries grow and scale with us.
          </motion.p>
          <div className="w-full overflow-x-auto pb-8 px-4 scrollbar-hide">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 min-w-max px-4 justify-center"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {/* Add left padding to start the first card slightly left of center */}
              <div className="shrink-0" style={{ width: 'calc(35vw - 200px)' }} />
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={service.delay}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="relative w-[370px] h-[420px] bg-white rounded-2xl shadow-md flex flex-col justify-between border border-gray-100 scroll-snap-align-center"
                  style={{ borderTop: `6px solid ${service.color}` }}
                >
                  {/* Image on top */}
                  <div className="w-full flex justify-center pt-6 pb-3">
                    <img src={service.image} alt={service.title} className="h-24 w-24 object-cover rounded-xl shadow" />
                  </div>
                  <div className="px-8 pb-3 flex-1 flex flex-col">
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 mb-2 flex-1">{service.description}</p>
                    <a href="#" className="text-[#635bff] font-semibold hover:underline text-base">Learn more &rarr;</a>
                  </div>
                 
                </motion.div>
              ))}
              {/* Add right padding to allow last card to center */}
              <div className="shrink-0" style={{ width: 'calc(50vw - 200px)' }} />
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex items-center gap-2 mt-8 text-gray-500">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span>Scroll to explore more</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-900 py-20 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">About Us</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            Q-Yantra is dedicated to pioneering advancements in Quantum Computing and Generative AI. Our mission is to empower businesses with scalable, innovative solutions that drive growth and efficiency. With a team of passionate experts, we blend cutting-edge technology with deep industry knowledge to deliver impactful results for our clients worldwide.
          </p>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
            <div className="bg-white/10 rounded-2xl p-8 shadow-lg flex-1 min-w-[250px]">
              <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-blue-100">To be a global leader in quantum and AI-driven transformation, shaping the future of technology and business.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 shadow-lg flex-1 min-w-[250px]">
              <h3 className="text-2xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-blue-100">Innovation, Integrity, Collaboration, and Excellence drive everything we do at Q-Yantra.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}