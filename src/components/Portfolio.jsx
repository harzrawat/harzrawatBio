import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profilePic from '../assets/profilepic.jpeg';


const Portfolio = () => {
  const projects = [
    {
      title: "Code Cash",
      description: "A full-stack web application built with React and Django",
      tags: ["React", "Django", "MongoDB"],
      link: "#"
    },
    {
      title: "Smart University Assistant",
      description: "Chatbot to resolve queries about Sitare University",
      tags: ["Python", "Streamlit", "MongoDB"],
      link: "#"
    },
    {
      title: "HeartCheckAuto",
      description: "Web portal to check heart health based on ML model and platform for service",
      tags: ["Flask", "Python", "JavaScript"],
      link: "#"
    }
    {
      title: "Smart University Assistant",
      description: "Chatbot to resolve queries about Sitare University",
      tags: ["Python", "Streamlit", "MongoDB"],
      link: "#"
    },
    {
      title: "HeartCheckAuto",
      description: "Web portal to check heart health based on ML model and platform for service",
      tags: ["Flask", "Python", "JavaScript"],
      link: "#"
    }
  ];

  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "HTML/CSS", "Git", "SQL", "MongoDB"];

  return (
    // <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-black via-blue-950 to-purple-600 animate-gradient-x">
  <div className="">


        {/* Navigation */}
      
      <nav className=" shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white-800">My Portfolio</span>
            <div className="space-x-6">
              <a href="#about" className="text-black hover:text-blue-700">About</a>
              <a href="#projects" className="text-black hover:text-blue-700">Projects</a>
              <a href="#contact" className="text-black hover:text-blue-700">Contact</a>
            </div>
          </div>
          </div>
        </div>
      </nav>
      

      <div className="m-10 backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:transform">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-center">
          <img 
            src={profilePic} 
            alt="Harsh Rawat"
            className="w-40 h-40 mx-auto rounded-full border-4 border-gray-300 shadow-lg"
          />
            <h1 className="text-5xl font-bold text-black mb-6">
              Hey, I'm Harsh Rawat
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Data Science Enthusiast | Problem Solver | Full Stack Developer 
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/harzrawat" target="_blank" className="p-2 text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/harzrawat/" target="_blank" className="p-2 text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=harzrawat@gmail.com" target="_blank" className="p-2 text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-1">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            I'm a passionate full-stack developer with experience in building modern web applications.
            I love solving complex problems and creating intuitive user experiences.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-r from-pink-950 via-black via-blue-800 via-purple-500 via-pink-500 via-blue-950 via-black to-blue-950 animate-gradient-layers py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-blue-700"
                  >
                    <u>View Project</u> <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-pink-950 via-black via-blue-800 via-purple-500 via-pink-500 via-blue-950 via-black to-blue-950 animate-gradient-layers py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    
    </div>
  );
};

export default Portfolio;