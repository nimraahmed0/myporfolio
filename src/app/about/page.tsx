// components/About.js
import Image from 'next/image'; // For optimized image loading

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-teal-400 mb-4">About Me</h2>
        
      

        {/* Introduction */}
        <h3 className="text-5xl mb-4 font-serif font-extrabold">Hello, I'm Nimra Ahmed</h3>
        <p className="max-w-lg mx-auto text-gray-400 mb-6">
          I'm a passionate web developer with expertise in building beautiful and functional websites.
          I specialize in using modern web technologies like React, Next.js, and Tailwind CSS to create seamless and interactive web experiences.
        </p>

        {/* Skills or Tools */}
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-teal-400 text-lg font-semibold">Frontend</p>
            <p className="text-gray-400">HTML, CSS, JavaScript, React, Next.js</p>
          </div>
          <div className="text-center">
            <p className="text-teal-400 text-lg font-semibold">Backend</p>
            <p className="text-gray-400">Node.js, Express.js, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
