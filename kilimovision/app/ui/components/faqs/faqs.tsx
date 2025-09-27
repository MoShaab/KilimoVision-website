// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';// Optional: install lucide-react icons
import { PlusIcon } from '@heroicons/react/24/outline';

const faqData = [
    {
      question: "What types of farms can benefit from your agricultural technology solutions?",
      answer: "Our solutions are designed to scale from small family farms to large commercial operations. Whether you're growing crops, raising livestock, or managing orchards, our technology adapts to your specific needs. We work with farms of all sizes, from 10 acres to 10,000+ acres, across various agricultural sectors including row crops, specialty crops, dairy, and livestock operations."
    },
    {
      question: "How long does it take to implement your smart farming systems?",
      answer: "Implementation timelines vary based on the scope and complexity of your project. Simple IoT sensor installations can be completed in 1-2 weeks, while comprehensive smart farming systems typically take 4-8 weeks. We provide a detailed timeline during our initial consultation and work closely with you to minimize disruption to your farming operations."
    },
    {
      question: "What kind of ROI can I expect from investing in agricultural technology?",
      answer: "Our clients typically see a return on investment within 12-18 months. On average, farms experience a 25% increase in yields, 30% reduction in input costs, and 20% improvement in resource efficiency. The exact ROI depends on your current operations, farm size, and which solutions you implement. We provide detailed ROI projections during our consultation process."
    },
    {
      question: "Do I need technical expertise to use your systems?",
      answer: "No technical expertise is required. Our systems are designed with user-friendly interfaces that farmers can easily navigate. We provide comprehensive training for you and your team, along with detailed user manuals and video tutorials. Our 24/7 support team is always available to help with any questions or technical issues."
    },
    {
      question: "How do your IoT sensors work in areas with poor internet connectivity?",
      answer: "Our IoT sensors are designed to work in rural environments with limited connectivity. They can store data locally and sync when connectivity is available. We also offer cellular-enabled sensors and can install dedicated wireless networks on your property. Our systems are built to be resilient and continue operating even with intermittent internet access."
    },
    {
      question: "What data security measures do you have in place?",
      answer: "Data security is our top priority. We use enterprise-grade encryption for all data transmission and storage, comply with industry security standards, and regularly conduct security audits. Your farm data is stored on secure cloud servers with multiple backup systems. We never share your data with third parties without your explicit consent."
    },
    {
      question: "Can your systems integrate with equipment I already own?",
      answer: "Yes, our solutions are designed to integrate with most existing farm equipment and management systems. We support integration with major brands of tractors, irrigation systems, and farm management software. During our assessment, we'll identify compatibility options and recommend the best integration approach for your current setup."
    },
    {
      question: "What ongoing support and maintenance do you provide?",
      answer: "We provide comprehensive ongoing support including 24/7 technical assistance, regular system updates, preventive maintenance, and annual system health checks. Our support team includes agricultural experts and technical specialists who understand both farming operations and technology. We also offer training refreshers and updates on new features."
    },
    {
      question: "How accurate are your crop monitoring and prediction systems?",
      answer: "Our AI-powered crop monitoring systems achieve 90-95% accuracy in yield predictions and pest/disease detection. The accuracy improves over time as the system learns from your specific farm conditions and historical data. We use satellite imagery, ground sensors, and weather data to provide the most accurate insights possible."
    },
    {
      question: "What happens if equipment fails during critical farming periods?",
      answer: "We understand that timing is crucial in agriculture. We maintain emergency response protocols with 4-hour response times during critical periods like planting and harvest. We stock replacement parts locally and have backup systems available. Our service level agreements guarantee maximum uptime during your most important farming operations."
    },
    {
      question: "Do you offer financing options for your technology solutions?",
      answer: "Yes, we offer flexible financing options including equipment leasing, seasonal payment plans, and partnerships with agricultural lenders. We understand that cash flow in farming can be seasonal, so we work with you to create payment structures that align with your harvest cycles and revenue patterns."
    },
    {
      question: "How do you ensure your solutions comply with organic farming standards?",
      answer: "Our systems are fully compatible with organic farming practices. We help organic farmers maintain detailed records required for certification, monitor soil health without synthetic inputs, and optimize natural pest management strategies. Our solutions actually help many farms transition to or maintain organic certification more easily."
    }
  ];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className=" py-16 text-yellow-300">
            <div className="container">
                <div className=" mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-yellow-400 uppercase text-sm">Frequently Asked Questions</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Learn more about KilimoVision</h2>
                        <p className="text-orange-300 mt-2">Get answers to common questions about our agricultural technology solutions, implementation process, and ongoing support services.</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>

                                    <
                                    PlusIcon
                                    className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    width = {20}
                                    height = {20}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 visible' : 'max-h-0 hidden'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
