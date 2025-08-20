import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Star } from "lucide-react";

interface Position {
  title: string;
  organization: string;
  duration: string;
  description: string;
  achievements: string[];
  logo?: string;
  impact?: string;
}

const positions: Position[] = [
  {
    title: "Technical Lead",
    organization: "Microsoft Learn Student Ambassadors",
    duration: "Sep 2024 - Aug 2025",
    description: "As a Technical Lead for the MLSA Chapter at IIITV, I leverage industry insights and technical expertise to empower the student community through impactful initiatives focused on Microsoft technologies.",
    achievements: [
      "Leading technical workshops and hackathons for Microsoft technologies",
      "Mentoring peers on Azure, Power Platform, and Microsoft tools",
      "Organizing community events and knowledge sharing sessions",
      "Driving adoption of Microsoft technologies in student community"
    ],
    logo: "/images/companies/MLSA.jpeg",
    impact: "Delivering Thoughts to the student community through Microsoft technologies"
  },
  {
    title: "Founder & Secretary",
    organization: "Droid- Robotics Club IIITVICD",
    duration: "Sep 2023 - May 2025",
    description: "It's a privilege to lead The Droid, our institute's official Robotics Club, where I oversee strategic planning, operations, and community engagement to foster a strong culture of innovation and technical excellence.",
    achievements: [
      "Founded and established the official Robotics Club at IIITV",
      "Leading robotics workshops and competitions for 50+ members",
      "Managing club operations, events, and member engagement",
      "Providing technical mentorship in C/C++, Arduino, and robotics"
    ],
    logo: "/images/companies/Droid.jpeg",
    impact: "Fostering innovation and technical excellence in robotics"
  },
  {
    title: "Core Team Member",
    organization: "Google Developer Student Clubs IIIT Vadodara ICD",
    duration: "Sep 2023 - Aug 2024",
    description: "Actively contributing to the growth, outreach, and innovation at GDSC through a blend of strategic, technical, and community-focused initiatives.",
    achievements: [
      "Building partnerships with industry leaders and securing sponsorships",
      "Managing club visibility and student engagement strategies",
      "Coordinating with leadership team for successful initiatives",
      "Creating content and expanding network in tech community"
    ],
    logo: "/images/companies/GDSC.jpeg",
    impact: "Driving growth and innovation in the tech community"
  }
];

const PositionOfResponsibilitySection: React.FC = () => {
  return (
    <section id="por" className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Positions of Responsibility
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
          Leadership roles and positions of responsibility that demonstrate my ability to lead teams, 
          organize events, and make a positive impact in technical communities.
        </motion.p>
      </div>

      <div className="space-y-6">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Icon/Logo Section */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    {position.logo ? (
                      <Image
                        src={position.logo}
                        alt={`${position.organization} logo`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-primary" />
                    )}
                  </div>
                </div>
                {/* Connection Line */}
                <div className="absolute top-10 left-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2"></div>
              </motion.div>

              {/* Content Card */}
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
                        {position.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">
                        {position.organization}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {position.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        Leadership
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {position.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      Key Achievements:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {position.achievements.map((achievement, achievementIndex) => (
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

                  {/* Impact */}
                  {position.impact && (
                    <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-semibold text-foreground">
                          Impact: {position.impact}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PositionOfResponsibilitySection; 