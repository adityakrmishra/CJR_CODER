import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Laptop, Paintbrush, Globe, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Creating responsive, modern websites with cutting-edge technologies'
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Crafting beautiful interfaces with intuitive user experiences'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Boosting your online presence with strategic digital solutions'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Creating memorable brand identities with unique, professional logos'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-purple-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
