import React from 'react';
import { Target, Award, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Locations Served', value: '5' },
  { label: 'Successful Projects', value: '10+' },
  { label: 'Team Members', value: '20+' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly push the boundaries of agricultural technology to deliver cutting-edge solutions.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Our commitment to quality ensures that every solution meets the highest standards of performance.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'We develop environmentally conscious solutions that promote sustainable farming practices.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We help farmers achieve measurable improvements in productivity and profitability.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leading Agricultural Innovation Since 2023
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AgriTech Solutions was founded with a vision to bridge the gap between traditional farming 
              and modern technology. We believe that by empowering farmers with the right tools and 
              knowledge, we can create a more sustainable and productive agricultural future.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of agricultural experts, engineers, and data scientists work together to develop 
              practical solutions that address real-world farming challenges. From small family farms 
              to large commercial operations, we tailor our technology to meet diverse needs.
            </p>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Agricultural technology team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl opacity-90"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;