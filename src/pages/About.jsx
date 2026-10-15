import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiEye, FiGlobe, FiShield } from "react-icons/fi";

const values = [
  {
    icon: FiGlobe,
    title: "Global Perspective",
    description:
      "We cover stories from around the world to help readers understand events, people, and issues shaping our shared future.",
  },
  {
    icon: FiShield,
    title: "Responsible Reporting",
    description:
      "We aim to present information accurately, distinguish facts from opinion, and provide sources so readers can explore stories further.",
  },
  {
    icon: FiEye,
    title: "Clarity and Context",
    description:
      "We believe news should do more than report what happened. It should help readers understand why it matters.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Us
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            A wider view of the world.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            The Binoculars is an independent digital news publication built to
            help readers explore important events, understand global
            developments, and see beyond the headlines.
          </p>
        </motion.section>

        <section className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="leading-8 text-gray-400">
              Our mission is to make news accessible, informative, and useful.
              We cover developments across world affairs, politics, business,
              technology, science, sports, culture, and entertainment, helping
              readers connect events with the bigger picture.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Approach</h2>
            <p className="leading-8 text-gray-400">
              We aim to publish clear, original summaries of important
              developments, rely on credible reporting, and link to sources
              whenever possible. Accuracy matters, and significant errors
              should be corrected transparently.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">What We Stand For</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <Icon className="mb-5 text-3xl text-blue-400" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="mb-4 text-2xl font-bold">Join the Conversation</h2>

          <p className="mb-6 leading-7 text-gray-400">
            Have a news tip, a question, feedback, or a correction to suggest?
            We welcome messages from our readers.
          </p>

          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
};

export default About;