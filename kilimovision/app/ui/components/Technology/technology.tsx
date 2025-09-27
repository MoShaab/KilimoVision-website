import React from 'react';
import { Brain, Cloud, Smartphone, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Machine learning algorithms for crop prediction, yield optimization, and automated decision-making.',
    image: 'https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure for data processing, storage, and real-time farm management.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'User-friendly mobile apps for field monitoring, data collection, and farm management on the go.',
    image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Zap,
    title: 'IoT Integration',
    description: 'Internet of Things sensors and devices for real-time environmental monitoring and automation.',
    image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-lg text-yellow-300 max-w-3xl mx-auto">
            We leverage the latest technologies to create powerful, scalable, and user-friendly 
            agricultural solutions that drive real results for modern farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index}
                className="group flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
              >
                <div className="relative flex-shrink-0">
                  <img 
                    src={tech.image}
                    alt={tech.title}
                    className="w-48 h-48 md:w-32 md:h-32 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-yellow-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Farm?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are already using our technology to increase yields, 
              reduce costs, and build sustainable farming operations.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;