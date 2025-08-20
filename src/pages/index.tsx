import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import PositionOfResponsibilitySection from "@/components/PositionOfResponsibilitySection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import EducationSection from "@/components/EducationSection";
import ProjectSection from "@/components/ProjectSection";


const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>


        {/* Modern Hero Section */}
        <section
          id="home"
          data-scroll-section
          className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background px-4 overflow-hidden"
        >
          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">


            {/* Tech Stack Badges */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                PyTorch
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                TensorFlow
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                OpenCV
              </span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                YOLO
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold clash-grotesk text-center mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-foreground">Hello, I&apos;m </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Moksh Arora
              </span>
            </motion.h1>

            <motion.div 
              className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              AI/ML & Computer Vision Enthusiast
            </motion.div>

            {/* Value Proposition */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground text-center max-w-3xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Pioneering intelligent solutions through advanced machine learning and computer vision. 
              Specialized in developing AI-powered applications, deep learning models, 
              and computer vision systems that solve real-world problems with precision and efficiency.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <a 
                href="https://github.com/aroramoksh11" 
                target="_blank" 
                rel="noopener" 
                aria-label="GitHub"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/aroramoksh" 
                target="_blank" 
                rel="noopener" 
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:aroramoksh11@gmail.com" 
                aria-label="Email"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Link href="#projects" passHref legacyBehavior>
                <Button 
                  size="lg" 
                  className="text-base px-8 py-4 font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-4 font-semibold border-2 border-white/20 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 group"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/1unk6uAyAD_PsiXHJ84-tZia2XnW4GJW8"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center"
                >
                  <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-scroll-section className="py-8 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <AboutSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-scroll-section className="py-8 px-4 relative bg-gradient-to-b from-transparent to-background/50">
          <div className="max-w-6xl mx-auto">
            <SkillSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-scroll-section className="py-8 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <ProjectSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-scroll-section className="py-8 px-4 relative bg-gradient-to-b from-transparent to-background/50">
          <div className="max-w-6xl mx-auto">
            <ExperienceSection />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" data-scroll-section className="py-8 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <EducationSection />
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" data-scroll-section className="py-8 px-4 relative bg-gradient-to-b from-transparent to-background/50">
          <div className="max-w-6xl mx-auto">
            <CertificatesSection />
          </div>
        </section>

        {/* Positions of Responsibility Section */}
        <section id="por" data-scroll-section className="py-8 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <PositionOfResponsibilitySection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-scroll-section className="py-8 px-4 relative bg-gradient-to-b from-transparent to-background/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold clash-grotesk text-gradient mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, and creative ideas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="mailto:aroramoksh11@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1unk6uAyAD_PsiXHJ84-tZia2XnW4GJW8"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:border-primary/40 hover:bg-white/5 transition-all duration-300 group hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex justify-center gap-6"
            >
              <a
                href="https://github.com/aroramoksh11"
                target="_blank"
                rel="noopener"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/aroramoksh"
                target="_blank"
                rel="noopener"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </section>

        
      </div>
    </Container>
  );
}


