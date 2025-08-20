import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.p 
          className="text-xl text-muted-foreground text-center max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Final Year B.Tech student at IIIT Vadodara, passionate about AI/ML and Full Stack Development.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                <Image
                  src="/images/profile/Moksh Arora.png"
                  alt="Moksh Arora"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-1 lg:order-2 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              AI/ML & Full Stack Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Specialized in building intelligent, scalable applications using MERN Stack and AI/ML technologies. Experienced in developing AI-enhanced solutions, competitive programming (500+ Problems Solved), and open-source contributions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Certified in Machine Learning (Stanford & DeepLearning.AI), Deep Learning (NVIDIA), and Google Cloud Platform. Passionate about solving real-world challenges through innovative technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open to exciting opportunities in AI/ML, Full Stack Development, and Software Engineering. Let&apos;s build something amazing together!
            </p>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 