import React from 'react';
import { Code2, Frame, SearchCheck, Eye, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code2 size={32} className="text-primary" />,
    title: 'Frontend Development',
    description: 'Creating stellar user interfaces and web experiences using the latest technologies.',
  },
  {
    icon: <Frame size={32} className="text-primary" />,
    title: 'UX Design',
    description: 'Building intuitive, user-centric designs that drive engagement and conversion.',
  },
  {
    icon: <SearchCheck size={32} className="text-primary" />,
    title: 'SEO Optimization',
    description: "Enhancing your website's visibility in search engines for increased organic traffic.",
  },
  {
    icon: <MonitorSmartphone size={32} className="text-primary" />,
    title: 'Responsive Design',
    description: 'Designing websites that look and perform equally well on all devices and screen sizes.',
  },
  {
    icon: <Eye size={32} className="text-primary" />,
    title: 'Backend Development',
    description: 'Developing robust, scalable server-side logic for a wide range of web applications.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, type: 'spring' }
  })
};

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 px-4 max-w-4xl mx-auto">
    <div className="mb-12">
      <h2 className="text-3xl font-bold clash-grotesk text-gradient mb-2 text-left">Need more info?</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
      <div className="text-lg text-muted-foreground mb-2 font-semibold">I got you.</div>
      <p className="text-muted-foreground max-w-2xl mb-0 text-left">Here are some of the services I offer. If you have any questions, feel free to reach out.</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          className="flex flex-col items-start bg-white/10 dark:bg-zinc-900/40 rounded-2xl p-8 shadow group hover:shadow-xl border border-border/60 transition-all min-h-[220px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={idx}
          variants={cardVariants}
        >
          <div className="mb-4">{service.icon}</div>
          <div className="text-lg font-bold clash-grotesk text-gradient mb-2">{service.title}</div>
          <div className="text-sm text-muted-foreground leading-relaxed">{service.description}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection; 