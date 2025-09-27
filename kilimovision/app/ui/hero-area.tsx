import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 leading-tight">
                Revolutionizing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-300">
                  {' '}Agriculture
                </span>
                <br />
                Through Technology
              </h1>
              <p className="text-lg md:text-xl text-yellow-300 leading-relaxed max-w-lg">
                We combine cutting-edge technology with agricultural expertise to help farmers increase productivity, 
                reduce costs, and build sustainable farming operations for the future.
              </p>
            </div>


            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-yellow-300">Farms Optimized</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">25%</div>
                <div className="text-sm text-yellow-300">Avg. Yield Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">30%</div>
                <div className="text-sm text-yellow-300">Cost Reduction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern farming technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;