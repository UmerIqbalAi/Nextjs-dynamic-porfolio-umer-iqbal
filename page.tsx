// page.tsx
import Image from 'next/image';
import profilePic from '../public/profile.png';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src={profilePic}
              alt="Umer Iqbal"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl shadow-purple-900/30"
              priority
            />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Frontend & AI Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Crafting intelligent interfaces and next-generation web experiences
            </p>
            <div className="flex gap-4">
              <Link href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition hover:scale-105">
                Let's Collaborate
              </Link>
              <Link href="/resume.pdf" target="_blank" className="px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full text-gray-300 hover:bg-gray-900 transition">
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Python Data Analysis Streamlit App',
                tech: ['React', 'TensorFlow', 'D3.js'],
                image: '/data.png',
                link: 'https://umer-iqbal-data-app.streamlit.app/'
              },
              {
                title: 'Data Sweeper Streamlit App',
                tech: ['Streamlit', 'Pandas', 'Python'],
                image: '/sweep.png',
                link: 'https://umer-iqbal-data-sweeper-app-growth-mindset.streamlit.app/'
              },
              {
                title: 'Grades Calculator App',
                tech: ['Python', 'Streamlit', 'Pandas'],
                image: '/project3.jpg',
                link: '#'
              }
            ].map((project, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex gap-3 flex-wrap mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/70 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-400 hover:text-blue-300 transition">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', level: '95%' },
              { name: 'TypeScript', level: '90%' },
              { name: 'React', level: '95%' },
              { name: 'Next.js', level: '90%' },
              { name: 'Python', level: '85%' },
              { name: 'TensorFlow', level: '80%' },
              { name: 'Node.js', level: '85%' },
              { name: 'Solidity', level: '75%' }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Image 
              src={profilePic}
              alt="Umer Iqbal"
              width={400}
              height={400}
              className="rounded-3xl shadow-xl shadow-purple-900/30"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              About Me
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Passionate frontend developer and AI enthusiast with 1+ years of experience building intelligent web applications. 
              Specializing in creating human-centric interfaces powered by machine learning models and blockchain technologies.
            </p>
            <p className="text-gray-300 text-lg">
              Currently focusing on: 
              <span className="bg-gray-800/70 rounded-full px-3 py-1 ml-2">Generative AI Integration</span>
              <span className="bg-gray-800/70 rounded-full px-3 py-1 ml-2">Web3 Development</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Let's Build Something Great
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>Email: freelancerumeriqbal@gmail.com</p>
                <p>Location: Karachi, Pakistan</p>
              </div>
            </div>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-purple-600 transition"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-purple-600 transition"
                required
              />
              <textarea 
                placeholder="Project Details"
                className="w-full px-6 py-4 bg-gray-900/50 rounded-lg border border-gray-800 focus:border-purple-600 transition"
                rows={4}
                required
              />
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center text-gray-500">
          © 2025 Umer Iqbal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}