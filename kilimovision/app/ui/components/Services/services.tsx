import React from 'react';
import { Cpu, Droplets, BarChart3, Satellite, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Smart Farming Solutions',
    description: 'AI-powered crop monitoring and automated farming systems that optimize resource usage and maximize yields.',
    features: ['IoT Sensors', 'Automated Irrigation', 'Crop Analytics']
  },
  {
    icon: Satellite,
    title: 'Precision Agriculture',
    description: 'Satellite imaging and GPS-guided equipment for precise field mapping, soil analysis, and targeted treatments.',
    features: ['Field Mapping', 'Soil Analysis', 'Variable Rate Application']
  },
  {
    icon: BarChart3,
    title: 'Data Analytics Platform',
    description: 'Comprehensive data collection and analysis tools to make informed decisions and track farm performance.',
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Custom Reports']
  },
  {
    icon: Droplets,
    title: 'Water Management',
    description: 'Advanced irrigation systems with smart water usage optimization to conserve resources and reduce costs.',
    features: ['Smart Irrigation', 'Water Conservation', 'Usage Monitoring']
  },
  {
    icon: Shield,
    title: 'Crop Protection',
    description: 'Early detection systems for pests and diseases with targeted treatment recommendations.',
    features: ['Pest Detection', 'Disease Monitoring', 'Treatment Planning']
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Comprehensive training programs and ongoing support to help farmers adopt and master new technologies.',
    features: ['Technical Training', '24/7 Support', 'Best Practices']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Our Technology Solutions
          </h2>
          <p className="text-lg text-yellow-300 max-w-3xl mx-auto">
            We offer comprehensive agricultural technology solutions designed to transform traditional farming 
            into smart, sustainable, and profitable operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;