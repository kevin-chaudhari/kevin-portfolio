import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //service_erm4z5s

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-[#0a0a0a] text-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-semibold mb-4">Contact</h2>
        <p className="text-neutral-400 mb-10 max-w-3xl">
          Feel free to reach out for collaborations, queries, or opportunities to work together on 
          exciting software engineering or AI/ML projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT INFO CARD */}
          <div className="bg-[#111111] border border-neutral-800 rounded-xl p-8 shadow-lg">
            
            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl">
                <MapPin className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-neutral-400">Stony Brook, New York, USA</p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl">
                <Phone className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Me</h3>
                <p className="text-neutral-400">+1 307 478 7906</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl">
                <Mail className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Me</h3>
                <p className="text-neutral-400">chaudharikevin21@gmail.com</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-neutral-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48213.79916806215!2d-73.1565!3d40.9257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e854d795d29979%3A0xacf680cfb9fc5fbd!2sStony%20Brook%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="260"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="bg-[#111111] border border-neutral-800 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-6">
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows="7"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
