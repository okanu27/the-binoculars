import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "contact@thebinoculars.com";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-[#181818] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500";

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get in Touch
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Contact The Binoculars
          </h1>

          <p className="mb-8 leading-8 text-gray-400">
            Have a question, story suggestion, news tip, feedback, or correction
            request? We would like to hear from you.
          </p>

          <div className="mb-6 flex items-start gap-4 rounded-xl border border-white/10 p-5">
            <FiMail className="mt-1 shrink-0 text-2xl text-blue-400" />

            <div>
              <h2 className="mb-2 font-semibold">Email Us</h2>

              <p className="text-sm leading-6 text-gray-400">
                For general enquiries, editorial feedback, and correction
                requests, use our contact form.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-white/10 p-5">
            <FiMessageSquare className="mt-1 shrink-0 text-2xl text-blue-400" />

            <div>
              <h2 className="mb-2 font-semibold">Send a News Tip</h2>

              <p className="text-sm leading-6 text-gray-400">
                Share the details of a potential story. Please include relevant
                dates, locations, supporting information, and source links
                where available. Do not send confidential or sensitive
                information through this general form.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="News Tip">News Tip</option>
                <option value="Correction Request">Correction Request</option>
                <option value="Feedback">Feedback</option>
                <option value="Business Enquiry">Business Enquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                placeholder="Write your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Open Email App
            </button>

            {submitted && (
              <p className="text-sm leading-6 text-gray-400" role="status">
                Your email application should open with your message prepared.
                Send the email there to complete delivery.
              </p>
            )}
          </form>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;