import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";

interface Certificate {
  logo: string;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    logo: "/images/companies/Packt.jpeg",
    name: "Mastering Multi-Agent Development with AutoGen",
    issuer: "Packt",
    date: "December 2024",
    skills: ["AutoGen", "AI", "Multi-Agent Systems", "Python"],
    credentialUrl: "https://example.com/cert1"
  },
  {
    logo: "/images/companies/Standford.png",
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera (Andrew Ng)",
    date: "November 2024",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Statistics"],
    credentialUrl: "https://example.com/cert2"
  },
  {
    logo: "/images/companies/udemy.png",
    name: "Complete React Developer Course",
    issuer: "Udemy",
    date: "October 2024",
    skills: ["React", "JavaScript", "Redux", "Web Development"],
    credentialUrl: "https://example.com/cert3"
  },
  {
    logo: "/images/companies/Google Cloud.webp",
    name: "Google Cloud Platform Fundamentals",
    issuer: "Google Cloud",
    date: "August 2024",
    skills: ["GCP", "Cloud Computing", "Docker", "Kubernetes"],
    credentialUrl: "https://example.com/cert5"
  }
];

const CertificatesSection: React.FC = () => (
  <section id="certificates" className="py-8 px-4 max-w-6xl mx-auto">
    <div className="flex flex-col items-center mb-8">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Licenses & Certifications
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
        Professional certifications and achievements that validate my expertise 
        in various technologies and methodologies.
      </motion.p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          className="group relative p-6 rounded-2xl glass glass-hover overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Header */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 shadow-2xl backdrop-blur-sm border border-white/10">
                <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={64}
                    height={64}
                    className={`object-contain w-full h-full rounded-2xl transition-all duration-500 ${cert.logo.includes('Standford') ? 'p-0 scale-110 hover:scale-125' : cert.issuer === 'Udemy' ? 'p-0 scale-110 hover:scale-125' : 'p-2 hover:scale-105'}`}
                  />
                </div>
              </div>
              <Award className="w-6 h-6 text-primary opacity-60" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-1">
                {cert.issuer}
              </p>
              <p className="text-muted-foreground text-sm">
                {cert.date}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Show Credential
              </a>
            )}
          </div>
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
        Continuously expanding my knowledge and skills through certifications
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://linkedin.com/in/aroramoksh"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
        >
          <Award className="w-5 h-5" />
          View All Certifications
        </a>
        <a
          href="https://drive.google.com/drive/folders/1unk6uAyAD_PsiXHJ84-tZia2XnW4GJW8?usp=sharing"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:border-primary/40 hover:bg-white/5 transition-all duration-300 group hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  </section>
);

export default CertificatesSection; 