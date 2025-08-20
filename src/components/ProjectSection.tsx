import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  github?: string;
}

const projects: ProjectItem[] = [
  {
    title: "AgriVision – Plant Disease Classification and Severity Estimation",
    description: "Trained a ResNet model with 95.2% accuracy across 12 crop disease classes using a dataset of 20,000 labeled images. Applied Grad-CAM and IoU-based mapping to localize infected regions, increasing diagnostic clarity by 30%. Created a severity classifier for categorizing infection levels, reducing evaluation time by 40%.",
    technologies: ["PyTorch", "OpenCV", "Grad-CAM"],
    link: "https://github.com/aroramoksh11/AgriVision-AI-Advanced-Plant-Disease-Detection-System",
    image: "/assets/Plant.png",
    github: "https://github.com/aroramoksh11/AgriVision-AI-Advanced-Plant-Disease-Detection-System"
  },
  {
    title: "EaglEye – Road Surface Fault Identifier",
    description: "Designed an object detection model to recognize potholes and cracks with 90% precision on edge devices. Configured TensorFlow Lite inference for local execution, decreasing model runtime by 25%. Introduced an auto-retraining pipeline that improved detection accuracy by 18% over deployment iterations.",
    technologies: ["YOLOv3", "TensorFlow Lite", "OpenCV"],
    link: "https://github.com/aroramoksh11/EaglEye-RoadDefectDetection",
    image: "/assets/EaglEye.png",
    github: "https://github.com/aroramoksh11/EaglEye-RoadDefectDetection"
  },
  {
    title: "TravelBliss – Trip Management Application",
    description: "Built a comprehensive travel planner tool that reduced itinerary setup effort by 35% and improved usage metrics. Integrated payment services using Razorpay API, minimizing transaction failures by 25%. Secured user accounts using JWT-based authentication, increasing revisit frequency by 15%.",
    technologies: ["MERN Stack", "Razorpay API", "JWT"],
    link: "https://github.com/aroramoksh11/Tour-Travel-Booking-System",
    image: "/assets/Travel.png",
    github: "https://github.com/aroramoksh11/Tour-Travel-Booking-System"
  }
];

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-8 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
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
          Here are some of my recent projects that showcase my skills in full-stack development, 
          UI/UX design, and innovative problem-solving.
        </motion.p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`grid lg:grid-cols-2 gap-6 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <motion.div
              className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  {project.image.endsWith('.webm') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={project.image} type="video/webm" />
                    </video>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Connection Line */}
              <div className="absolute top-8 left-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2"></div>
            </motion.div>

            {/* Project Content */}
            <motion.div
              className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-lg font-semibold hover:border-primary/40 hover:bg-white/5 transition-all duration-300 group hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-muted-foreground mb-6">
          Interested in seeing more of my work?
        </p>
        <a
          href="https://github.com/aroramoksh11"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
        >
          <Github className="w-5 h-5" />
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectSection; 