import { motion } from "framer-motion";
import Image from "next/image";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  logo: string;
}

const educationList: Education[] = [
  {
    institution: "Indian Institute of Information Technology, Vadodara",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2022 - 2026",
    location: "Dadra and Nagar Haveli",
    description: "Comprehensive computer science education with focus on software engineering, algorithms, and modern technologies.",
    achievements: [
      "Specialized in AI/ML and Web Development",
      "Active member of robotics clubs and hackathons",
      "Completed 10+ technical projects"
    ],
    logo: "/images/universities/IIITVICD.jpg"
  },
  {
    institution: "Salwan Public School",
    degree: "Class XII, Physics-Chemistry-Mathematics-Computer Science",
    duration: "2021 - 2022",
    location: "Delhi, India",
    description: "Completed higher secondary education with focus on science and mathematics.",
    achievements: [
      "School topper in Computer Science",
      "Participated in national science competitions",
      "Led school's tech club"
    ],
    logo: "/images/universities/Salwan.png"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Education
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
          My academic journey and educational background that has shaped my technical expertise 
          and problem-solving approach.
        </motion.p>
      </div>

      <div className="space-y-8">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline Line */}
            {index < educationList.length - 1 && (
              <motion.div 
                className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            )}

            <div className="flex items-start gap-6">
              {/* Institution Logo */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-white overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full rounded-2xl transition-all duration-300 hover:scale-105 p-2"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                className="flex-1 p-6 rounded-2xl glass glass-hover group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 flex-shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 