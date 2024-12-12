// components/Contact.js
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-8 font-serif">Contact Me</h2>

        

        <p className="text-gray-400 mb-8">I’d love to hear from you! Please fill out the form below to get in touch with me.</p>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <form className="bg-gray-700 p-8 rounded-lg shadow-lg space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-teal-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-teal-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-teal-400 mb-2">Your Message</label>
              <textarea
                id="message"
                
                className="bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 py-3 rounded-lg text-white font-semibold focus:outline-none hover:bg-teal-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
