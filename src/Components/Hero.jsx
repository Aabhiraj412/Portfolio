import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div>
      {/* Anchor for Navigation */}
      <div id="home" className="mt-0 w-100 h-1"></div>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] p-10 md:p-16 rounded-lg shadow-lg text-center mt-14 md:mt-18 overflow-hidden"
      >
        {/* Rotating Background Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#00FF66] via-[#8A2BE2] to-[#3700FF] opacity-10 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero Content */}
        <div className="relative z-10">
          {/* Title */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#8A2BE2] mb-4"
          >
            Abhiraj Dixit
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300"
          >
            Crafting seamless code, breaking barriers, and embracing the future
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="text-sm md:text-lg text-[#00FF66] font-semibold">
              Full Stack Developer | AI Enthusiast | Security Explorer
            </p>
          </motion.div>
        </div>
      </motion.header>
    </div>
  );
};
