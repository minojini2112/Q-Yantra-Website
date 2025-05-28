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

  const builtProducts = [
    {
      title: "Document Intelligence Platform",
      description: "Developed an advanced document processing system that transforms traditional documents into AI-understandable formats. The solution enables intelligent document analysis, automated data extraction, and context-aware processing, significantly reducing manual document handling time.",
      client: "Enterprise Solutions",
      technologies: ["OCR", "RAG", "Multi-model AI", "LLM"],
      year: "2024"
    },
    {
      title: "Venture Capital Connect Platform",
      description: "Built a comprehensive full-stack platform connecting entrepreneurs with venture capitalists. Features include intelligent matching algorithms, secure communication channels, and automated pitch deck analysis, streamlining the funding process for startups.",
      client: "Startup Ecosystem",
      technologies: ["Next.js", "Supabase", "Generative AI"],
      year: "2024",
      price: "Rs.17,500"
    },
    {
      title: "AI-Powered Trading Automation System",
      description: "Created an advanced trading platform powered by multi-model Generative AI. The system automates trading tasks, analyzes market patterns, and executes trades with precision, while maintaining compliance and risk management protocols.",
      client: "Financial Services",
      technologies: ["Next.js", "Supabase", "Generative AI"],
      year: "2025",
      price: "Rs.20,000"
    },
    {
      title: "MCP and Agents Automation Suite",
      description: "Implemented a sophisticated Model Context Protocol (MCP) with AI agents for enterprise workflow automation. The solution seamlessly integrates with existing applications, enabling natural language-based task automation and process optimization.",
      client: "Enterprise Client",
      technologies: ["MCP", "Agent Systems", "Generative AI"],
      year: "2025",
      price: "Rs.30,000"
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
                  className="relative w-[400px] h-[450px] bg-gradient-to-br from-[#ffbe40] via-[#fa326c] to-[#a960ee] rounded-t-3xl shadow-lg flex flex-col justify-between border border-gray-300 scroll-snap-align-center"
                >
                  {/* Image on top */}
                  <div className="w-full flex justify-center pt-6 pb-6">
                    <img src={service.image} alt={service.title} className="h-70 w-70 object-cover rounded-xl shadow-lg" />
                  </div>
                  <div className="px-8 pb-3 flex-1 flex flex-col bg-white/80 rounded-b-3xl"
                  >
                    <h3 className="font-bold text-2xl pt-2 mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 mb-2 flex-1">{service.description}</p>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-[#a960ee] to-[#fa326c] text-white font-bold text-base rounded-full px-6 py-2 mt-2 mb-2 text-center shadow-xl border border-[#a960ee]/40 hover:from-[#7f5af0] hover:to-[#ff4f81] hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a960ee] focus:ring-offset-2 mx-auto mt-2"
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
      {/* Success Stories Section */}
      <section className="relative w-full bg-gradient-to-br from-[#f6f9fc] to-white py-24 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black tracking-tight text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a960ee] via-[#ffbe40] to-[#fa326c] rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped organizations transform their operations with cutting-edge technology solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {builtProducts.map((product, index) => (
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
                className="group relative bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-[#a960ee] font-medium text-sm">
                      {product.client}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-medium px-4 py-1.5 bg-gradient-to-r from-[#a960ee]/10 to-[#fa326c]/10 rounded-full text-[#a960ee]">
                      {product.year}
                    </span>
                    {product.price && (
                      <span className="text-sm font-bold text-gray-900">
                      {product.price}
                    </span>
                    )}
                  </div>
                </div>

                {/* Description Section */}
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technologies Section */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                  {product.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-sm px-3 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="relative w-full bg-[#f8fafc] py-24 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-black tracking-tight text-gray-900 mb-4">
              Products
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a960ee] via-[#ffbe40] to-[#fa326c] rounded-full mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-xl p-12 max-w-2xl w-full text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Yet to Come Here!
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                We're brewing something exciting. Stay tuned for our upcoming product launches.
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-3 h-3 bg-[#a960ee] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-3 h-3 bg-[#ffbe40] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 bg-[#fa326c] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Technical Resources Section */}
      <section className="relative w-full bg-gradient-to-br from-white to-[#f6f9fc] py-24 px-4 md:px-0 flex flex-col items-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#a960ee]/10 to-[#fa326c]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#ffbe40]/10 to-[#a960ee]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#a960ee] font-semibold tracking-wider uppercase text-sm mb-4 block">Knowledge Hub</span>
            <h2 className="text-5xl font-black tracking-tight text-gray-900 mb-4">
              Technical Resources
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a960ee] via-[#ffbe40] to-[#fa326c] rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of technical insights, research papers, and industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Research Papers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">Research Papers</h3>
              </div>
              <p className="text-gray-600 relative z-10">Access our latest research findings and technical papers on quantum computing and AI advancements.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                Explore Papers
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* White Papers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">White Papers</h3>
              </div>
              <p className="text-gray-600 relative z-10">In-depth analysis and technical documentation of our solutions and methodologies.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                Read White Papers
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Technical Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">Technical Blog</h3>
              </div>
              <p className="text-gray-600 relative z-10">Latest insights, tutorials, and technical discussions from our expert team.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                Read Blog
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">Publications</h3>
              </div>
              <p className="text-gray-600 relative z-10">Our published works in leading journals and technical publications.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                View Publications
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Research Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">Research Blog</h3>
              </div>
              <p className="text-gray-600 relative z-10">Deep dives into our ongoing research and experimental findings.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                Explore Research
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col gap-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a960ee]/5 to-[#fa326c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#a960ee] to-[#fa326c] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a960ee] transition-colors duration-300">Case Studies</h3>
              </div>
              <p className="text-gray-600 relative z-10">Detailed analysis of our successful implementations and solutions.</p>
              <a href="#" className="text-[#a960ee] font-medium hover:text-[#fa326c] transition-colors duration-200 flex items-center gap-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                View Case Studies
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Floating action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="mt-12"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a960ee] to-[#fa326c] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>View All Resources</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
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