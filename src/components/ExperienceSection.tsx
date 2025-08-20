import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Users, Zap } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  logo: string;
  technologies: string[];
  impact: {
    metric: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

const experiences: Experience[] = [
  {
    company: "WIMD TECHNOLOGIES PRIVATE LIMITED",
    position: "Software Development Engineer Intern – AI Systems",
    duration: "May 2025 – Present",
    location: "Bangalore, India",
    description: "Engineered an AI pipeline processing over 100,000 telematics records to identify risky driving behavior; deployed with a Flask API achieving 87% accuracy and sub-300ms latency.",
    achievements: [
      "Engineered an AI pipeline processing over 100,000 telematics records to identify risky driving behavior; deployed with a Flask API achieving 87% accuracy and sub-300ms latency",
      "Developed a browser-based dashboard using React and Redux for monitoring live vehicle data; integrated Redis and MongoDB to reduce API latency by 41%",
      "Refined backend cache architecture to support concurrent requests and reduce server-side delays by 35%"
    ],
    logo: "/images/companies/WIMD.jpeg",
    technologies: ["Flask", "React", "Redux", "Redis", "MongoDB"],
    impact: {
      metric: "API Latency",
      value: "41%",
      icon: TrendingUp
    }
  },
  {
    company: "Physics Wallah Private Limited",
    position: "MERN Stack Developer Intern",
    duration: "Mar 2024 – Sep 2024",
    location: "Noida, India",
    description: "Implemented a geo-location tracking system serving 2,500+ personnel, achieving 99.9% uptime and enhanced position accuracy.",
    achievements: [
      "Implemented a geo-location tracking system serving 2,500+ personnel, achieving 99.9% uptime and enhanced position accuracy",
      "Reworked Express.js middleware and introduced Redis caching, reducing API response time by 30%",
      "Delivered modular REST APIs to support a 25% traffic increase and enable future service expansion"
    ],
    logo: "/images/companies/pw.jpg",
    technologies: ["Express.js", "Redis", "REST APIs", "Geo-location"],
    impact: {
      metric: "API Response",
      value: "30%",
      icon: Users
    }
  },
  {
    company: "MentorX",
    position: "Frontend Developer",
    duration: "Mar 2023 - May 2023",
    location: "Remote",
    description: "Created responsive user interfaces and enhanced user experience for the mentoring platform.",
    achievements: [
      "Redesigned 3 key user flows improving conversion by 25%",
      "Implemented responsive design for mobile users",
      "Reduced bundle size by 30% through code optimization"
    ],
    logo: "/images/companies/MentorX.jpeg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Webpack"],
    impact: {
      metric: "Performance",
      value: "-30%",
      icon: Zap
    }
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Award className="w-4 h-4" />
          Professional Journey
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold clash-grotesk mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-foreground">My </span>
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A journey through diverse roles and impactful contributions in software engineering, 
          AI development, and creating exceptional digital experiences.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <motion.div 
                  className="absolute left-16 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-secondary/50"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              )}

                             <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Company Logo & Timeline Dot */}
                <motion.div 
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 shadow-2xl backdrop-blur-sm border border-white/10">
                      <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full rounded-2xl transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    
                    {/* Impact Badge */}
                    <motion.div 
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="flex items-center gap-1">
                        <exp.impact.icon className="w-3 h-3" />
                        <span>{exp.impact.value}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Experience Content */}
                <motion.div
                  className="flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                                         {/* Header */}
                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <span className="text-lg">{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                                         {/* Description */}
                     <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                                         {/* Technologies */}
                     <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                                         {/* Achievements */}
                     <div>
                       <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start gap-3 group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default ExperienceSection; 