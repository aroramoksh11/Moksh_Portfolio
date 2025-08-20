import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[0.08] via-primary/[0.03] to-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          className="flex items-center justify-center space-x-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-muted-foreground text-lg font-medium">Made with</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-6 h-6 text-red-500 fill-current drop-shadow-lg" />
          </motion.div>
          <span className="text-white text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Moksh Arora
          </span>
        </motion.div>
        
        <motion.div 
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
