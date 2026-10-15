import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "The Binoculars respects your privacy. This policy explains what information may be collected when you visit our website, how that information may be used, and the choices available to you.",
      "By using this website, you acknowledge this policy. If you do not agree with it, please discontinue using the website.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "You can browse our publicly available articles without creating an account.",
      "If you contact us, we may receive the information you choose to provide, such as your name, email address, subject, and message.",
      "Our hosting provider and technical service providers may process technical information such as IP addresses, browser type, device information, requested pages, and server logs as part of operating and protecting the website.",
    ],
  },
  {
    title: "3. How We Use Information",
    content: [
      "Information you provide may be used to respond to enquiries, review news tips, investigate correction requests, improve our website, maintain security, and comply with applicable legal obligations.",
      "We do not claim ownership of the information you submit. Please avoid sending passwords, financial account details, confidential records, or other sensitive personal information through general contact channels.",
    ],
  },
  {
    title: "4. Cookies and Similar Technologies",
    content: [
      "The website or its service providers may use cookies or similar technologies for essential functionality, security, performance measurement, or other features that may be introduced in the future.",
      "You can manage or block cookies through your browser settings. Blocking certain cookies may affect how some website features work.",
      "If analytics, advertising, or other non-essential tracking tools are added, this policy should be updated to identify the relevant tools and explain the available choices before they are used where required by law.",
    ],
  },
  {
    title: "5. Sharing of Information",
    content: [
      "We may share information with service providers who help us host, secure, maintain, or operate the website, where necessary for those services.",
      "Information may also be disclosed where required by law, to respond to valid legal requests, or to protect the rights, safety, and security of the website and its users.",
      "We do not sell personal information as a stated business practice. Any future advertising, analytics, or data-sharing arrangements should be disclosed in an updated policy.",
    ],
  },
  {
    title: "6. External Links",
    content: [
      "Our articles may link to external websites, news organisations, research publications, and other resources. These websites operate under their own privacy policies and practices.",
      "We are not responsible for the privacy, security, or content practices of external websites. Review their policies before submitting information to them.",
    ],
  },
  {
    title: "7. Data Retention and Security",
    content: [
      "We retain information for as long as reasonably necessary to respond to enquiries, maintain business records, protect the website, resolve disputes, and meet applicable legal obligations.",
      "We take reasonable steps to protect information, but no internet transmission or electronic storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "8. Your Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights to request access to, correction of, deletion of, or restrictions on the processing of your personal information.",
      "To make a privacy-related request, contact us through the Contact page and describe your request. We may need to verify your identity before acting on it.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "This website is intended for a general audience and is not specifically directed at children. Please contact us if you believe a child has provided personal information that should be reviewed or removed.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this policy when our practices, services, or legal obligations change. Updates will be published on this page with a revised effective date.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "For questions about this policy or requests concerning your personal information, please use the Contact page on The Binoculars website.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Legal
          </p>

          <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500">
            Effective date: October 13, 2026
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            This policy describes how The Binoculars handles information
            associated with your use of our website.
          </p>
        </motion.header>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
            >
              <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.content.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="leading-8 text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;