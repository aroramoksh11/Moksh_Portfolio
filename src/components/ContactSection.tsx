import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection: React.FC = () => (
  <section id="contact" className="py-16 px-4 max-w-3xl mx-auto text-center">
    <motion.h2
      className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
  Let&apos;s Work Together
    </motion.h2>
    <motion.p
      className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
  I&apos;m always open to discussing new opportunities, interesting projects, and creative ideas.
    </motion.p>
    <motion.a
      href="mailto:aroramoksh11@gmail.com"
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Mail className="w-5 h-5" />
      Contact Me
    </motion.a>
  </section>
);

export default ContactSection;
