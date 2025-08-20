import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Database, Cloud, Cpu, Globe, Shield } from "lucide-react";

interface Skill {
  name: string;
  logo: string;
  category: string;
  proficiency: number; // 1-5 scale
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    description: "Core programming languages and frameworks I use for development",
    skills: [
      { name: "Python", logo: "/images/skills/python.svg", category: "Programming", proficiency: 5 },
      { name: "JavaScript", logo: "/images/skills/javascript.svg", category: "Programming", proficiency: 5 },
      { name: "TypeScript", logo: "/images/skills/typescript.svg", category: "Programming", proficiency: 4 },
      { name: "C/C++", logo: "/images/skills/cpp.svg", category: "Programming", proficiency: 4 },
      { name: "SQL", logo: "/images/skills/sql.svg", category: "Programming", proficiency: 4 },
      { name: "Java", logo: "/images/skills/java.svg", category: "Programming", proficiency: 3 }
    ]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    description: "Modern frontend technologies and frameworks",
    skills: [
      { name: "React", logo: "/images/skills/react.svg", category: "Frontend", proficiency: 5 },
      { name: "Next.js", logo: "/images/skills/nextjs.svg", category: "Frontend", proficiency: 5 },
      { name: "Tailwind CSS", logo: "/images/skills/tailwind.svg", category: "Frontend", proficiency: 5 },
      { name: "HTML5", logo: "/images/skills/html5.svg", category: "Frontend", proficiency: 5 },
      { name: "CSS3", logo: "/images/skills/css3.svg", category: "Frontend", proficiency: 4 },
      { name: "Redux", logo: "/images/skills/redux.svg", category: "Frontend", proficiency: 4 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    description: "Server-side technologies and database management",
    skills: [
      { name: "Node.js", logo: "/images/skills/nodejs.svg", category: "Backend", proficiency: 5 },
      { name: "Express.js", logo: "/images/skills/express.svg", category: "Backend", proficiency: 4 },
      { name: "MongoDB", logo: "/images/skills/mongodb.svg", category: "Backend", proficiency: 4 },
      { name: "PostgreSQL", logo: "/images/skills/postgresql.svg", category: "Backend", proficiency: 4 },
      { name: "Firebase", logo: "/images/skills/firebase.svg", category: "Backend", proficiency: 4 },
      { name: "Redis", logo: "/images/skills/redis.svg", category: "Backend", proficiency: 3 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    description: "Artificial intelligence and machine learning technologies",
    skills: [
      { name: "TensorFlow", logo: "/images/skills/tensorflow.svg", category: "AI/ML", proficiency: 4 },
      { name: "PyTorch", logo: "/images/skills/pytorch.svg", category: "AI/ML", proficiency: 4 },
      { name: "Scikit-learn", logo: "/images/skills/scikit-learn.svg", category: "AI/ML", proficiency: 4 },
      { name: "OpenCV", logo: "/images/skills/opencv.svg", category: "AI/ML", proficiency: 4 },
      { name: "YOLOv8", logo: "/images/skills/yolo.svg", category: "AI/ML", proficiency: 4 },
      { name: "Pandas", logo: "/images/skills/pandas.svg", category: "AI/ML", proficiency: 5 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud platforms and development operations",
    skills: [
      { name: "AWS", logo: "/images/skills/aws.svg", category: "Cloud", proficiency: 4 },
      { name: "Docker", logo: "/images/skills/docker.svg", category: "Cloud", proficiency: 4 },
      { name: "Kubernetes", logo: "/images/skills/kubernetes.svg", category: "Cloud", proficiency: 3 },
      { name: "Git", logo: "/images/skills/git.svg", category: "Cloud", proficiency: 5 },
      { name: "CI/CD", logo: "/images/skills/cicd.svg", category: "Cloud", proficiency: 4 },
      { name: "Azure", logo: "/images/skills/azure.svg", category: "Cloud", proficiency: 3 }
    ]
  },
  {
    title: "Tools & Others",
    icon: Shield,
    description: "Development tools and additional technologies",
    skills: [
      { name: "Postman", logo: "/images/skills/postman.svg", category: "Tools", proficiency: 4 },
      { name: "Jupyter", logo: "/images/skills/jupyter.svg", category: "Tools", proficiency: 4 },
      { name: "VS Code", logo: "/images/skills/vscode.svg", category: "Tools", proficiency: 5 },
      { name: "Figma", logo: "/images/skills/figma.svg", category: "Tools", proficiency: 3 },
      { name: "NumPy", logo: "/images/skills/numpy.svg", category: "Tools", proficiency: 5 },
      { name: "Linux", logo: "/images/skills/linux.svg", category: "Tools", proficiency: 4 }
    ]
  }
];

const SkillSection: React.FC = () => {
  const getProficiencyColor = (level: number) => {
    if (level >= 5) return "from-green-400 to-emerald-500";
    if (level >= 4) return "from-blue-400 to-cyan-500";
    if (level >= 3) return "from-yellow-400 to-orange-500";
    return "from-gray-400 to-slate-500";
  };

  const getProficiencyText = (level: number) => {
    if (level >= 5) return "Expert";
    if (level >= 4) return "Advanced";
    if (level >= 3) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
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
          A comprehensive toolkit of technologies and frameworks I use to build 
          innovative solutions and deliver exceptional user experiences.
        </motion.p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="group relative p-4 rounded-xl glass glass-hover text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Skill Logo */}
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-2 flex items-center justify-center">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Skill Name */}
                  <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>

                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>



      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-muted-foreground mb-6">
          Want to see these skills in action?
        </p>
        <a
          href="https://github.com/aroramoksh11"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
        >
          <Code className="w-5 h-5" />
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default SkillSection; 