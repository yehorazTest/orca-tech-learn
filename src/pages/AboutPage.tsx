
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import { Target, Users, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe in democratizing tech education and making high-quality learning accessible to everyone.'
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Our platform is built around fostering collaboration, peer learning, and professional networking.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in curriculum design, content quality, and learning outcomes.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our platform with cutting-edge learning technologies and methodologies.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About ORCATech - Transforming Tech Education</title>
        <meta name="description" content="Learn about ORCATech's mission to democratize tech education through cutting-edge learning platforms and industry-focused curricula." />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About ORCATech
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform tech education by creating immersive, 
              hands-on learning experiences that prepare students for real-world challenges.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-slate-900/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed text-center mb-12">
                At ORCATech, we believe that everyone deserves access to world-class tech education. 
                Our platform combines cutting-edge learning technologies with industry-proven curricula 
                to create transformative educational experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-slate-900/50 rounded-lg border border-slate-800">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-slate-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  ORCATech was born from a simple observation: traditional tech education wasn't keeping pace 
                  with industry demands. As senior DevOps engineers and educators, we saw talented individuals 
                  struggling to bridge the gap between theoretical knowledge and practical skills.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  We set out to create something different—a learning platform that emphasizes hands-on experience, 
                  real-world projects, and industry best practices. Our curricula are designed by practitioners 
                  who understand what it takes to succeed in today's fast-paced tech environment.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  We're currently building our community and developing comprehensive learning paths that will help 
                  aspiring technologists master the skills they need to succeed in their careers. Our goal is to 
                  create the most practical and effective tech education platform available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Hands-On Labs</div>
                <div className="text-slate-400">Practical exercises and real-world scenarios</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Expert-Led</div>
                <div className="text-slate-400">Curriculum designed by industry professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Open Source</div>
                <div className="text-slate-400">All learning materials available on GitHub</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Have questions about our platform or want to contribute to our mission? 
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
              <a 
                href="https://github.com/study-ORCATech-cloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300">
                  Join Our Community
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
