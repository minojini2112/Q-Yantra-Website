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
      image: "/QuantumCom.jpeg"
    },
    {
      title: "Generative AI Solutions",
      description: "Custom generative AI models and automation tailored to your needs.",
      color: "#635bff",
      delay: 0.2,
      image: "/genAI.jpeg"
     
    },
    {
      title: "Web Development",
      description: "We provide decated teams to build Full stack Websites for Personal and Business purposes",
      color: "#635bff",
      delay: 0.4,
      image: "/WebDev.jpeg"
     
    },
    {
      title: "App Development",
      description: "We make most scalable Mobile Applications for your business",
      color: "#635bff",
      delay: 0.6,
      image: "/AppDev.jpeg"
     
    }
  ];

  const products = [
    {
      title: "Business and Product Website",
      description: "Transform your business with a custom-built, full-stack website. Our solutions include responsive design, secure payment integration, user authentication, and advanced analytics. Perfect for businesses looking to establish a strong online presence.",
      icon: "/icon-incorporate.svg",
      tag: "Website",
      price: "Rs.80,000"
    },
    {
      title: "RAG and LLM based Services",
      description: "Leverage the power of advanced AI with our custom RAG and LLM solutions. We build intelligent chatbots and AI services that understand context, provide accurate responses, and continuously learn from interactions. Ideal for customer service and business automation.",
      icon: "/icon-validate.svg",
      tag: "Chatbot",
      price: "Rs.40,000"
    },
    {
      title: "Agents and MCPs for Business",
      description: "Automate and optimize your business processes with our intelligent agents and Multi-Channel Platforms. Our solutions streamline operations, reduce manual work, and provide real-time insights for better decision-making.",
      icon: "/icon-sell.svg",
      tag: "Agents",
      price: "Rs.15,000"
    },
    {
      title: "Apps for Business",
      description: "Get a custom mobile application tailored to your business needs. Our apps feature intuitive interfaces, offline capabilities, push notifications, and seamless integration with your existing systems. Available for both iOS and Android platforms.",
      icon: "/icon-pricing.svg",
      tag: "Apps",
      price: "Rs.5,000"
    },
    {
      title: "Edge AI products",
      description: "Deploy AI solutions directly on edge devices for faster processing and reduced latency. Our Edge AI products are perfect for real-time applications, IoT devices, and scenarios requiring local processing capabilities.",
      icon: "/icon-pricing.svg",
      tag: "Edge AI",
      price: "Rs.5,000"
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
                src="/Designer (2).jpeg" 
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
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black tracking-tight text-gray-900 mb-2 md:mb-0 md:mr-6 drop-shadow-sm pl-10"
              >
                Services
              </motion.h2>
            </div>
            <div className="flex gap-3 justify-center md:justify-end mt-4 md:mt-0 md:mr-17">
              <button className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-lg hover:bg-[#fa326c]/10 hover:text-[#fa326c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#fa326c]" onClick={() => scroll(-1)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-lg hover:bg-[#a960ee]/10 hover:text-[#a960ee] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a960ee]" onClick={() => scroll(1)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto pb-8 px-4 scrollbar-hide scroll-container">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 min-w-max px-4 justify-center"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={service.delay}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="relative w-[400px] h-[450px] bg-gradient-to-br from-[#ffbe40] via-[#fa326c] to-[#a960ee] rounded-3xl shadow-lg flex flex-col justify-between border border-gray-300 scroll-snap-align-center"
                >
                  {/* Image on top */}
                  <div className="w-full flex justify-center pt-6 pb-3">
                    <img src={service.image} alt={service.title} className="h-70 w-70 object-cover rounded-xl shadow-lg" />
                  </div>
                  <div className="px-8 pb-3 flex-1 flex flex-col bg-white/80 rounded-b-3xl">
                    <h3 className="font-bold text-2xl pt-2 mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 mb-2 flex-1">{service.description}</p>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-[#a960ee] to-[#fa326c] text-white font-bold text-base rounded-full px-6 py-2 text-center shadow-xl border border-[#a960ee]/40 hover:from-[#7f5af0] hover:to-[#ff4f81] hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a960ee] focus:ring-offset-2 mx-auto mt-2"
                    >
                      Get a Custom Plan
                    </a>
                  </div>
                 
                </motion.div>
              ))}
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
      {/* Products Section */}
      <section className="relative w-full bg-[#f8fafc] py-24 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black tracking-tight text-gray-900 mb-2"
          >
            Products
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a960ee] via-[#ffbe40] to-[#fa326c] rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16 w-full">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative bg-gradient-to-br from-white to-white/90 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 h-[400px]"
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-[#a960ee]/10 to-[#fa326c]/10 rounded-full text-[#a960ee]">
                      {product.tag}
                    </span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#a960ee] to-[#fa326c] bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <a href="#" className="w-full mt-auto bg-gradient-to-r from-[#a960ee] to-[#fa326c] text-white font-semibold rounded-full px-6 py-3 text-center shadow-lg hover:scale-105 transition-transform duration-200">
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full bg-gradient-to-tr from-indigo-700 via-purple-800 to-pink-800 py-20 px-6 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Title and Description */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
              What Drives Qyantra
            </h2>
            <p className="text-lg text-purple-100 mb-10 leading-relaxed">
              Qyantra it&apos;s a launchpad for the next intelligence revolution. We fuse quantum computing, generative AI, machine learning, deep learning, and powerful web technologies to build solutions that push boundaries and break norms. We exist to arm creators, disruptors, and pioneers with the tools to shape tomorrow — faster, smarter!
            </p>
            <div className="w-full border-t border-purple-400/30 pt-8">
              <p className="text-sm text-purple-200 tracking-wide">
                Forged at the frontier by Qyantra innovators
              </p>
            </div>
          </div>

          {/* Right Column - Statement */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-200/50">
              <p className="text-2xl text-gray-800 font-medium italic max-w-md leading-relaxed">
                Where others see algorithms, we see sparks of intelligence being born !
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function scroll(direction: number) {
  const container = document.querySelector('.scroll-container');
  if (container) {
    const scrollAmount = 400;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}