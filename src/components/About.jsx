// src/components/About.jsx
import { Camera, User } from 'lucide-react';
import { motion } from 'framer-motion';
import fotoPerro from '../../public/fotoPerro.jpeg';



const About = () => {
  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        staggerChildren: 0.2, // Escalonamiento de los elementos hijos
        delayChildren: 0.3    // Espera un poco antes de empezar a animar los textos
      } 
    }
  };

  // Variantes para los textos que entran desde la derecha
  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 bg-[#f9f9f9] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Principal Animado */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#f9f9f9]/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-gray-100"
        >
          
          {/* Brillo decorativo sutil de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2b220]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {/* Área de la Foto (Placeholder) */}
          <div className="md:w-2/5 bg-[#f9f9f9]/10 min-h-[350px] flex items-center justify-center relative overflow-hidden group border-r border-gray-100/50">
            <div className="text-gray-400 flex flex-col items-center transition-transform duration-500 group-hover:scale-110">
              <Camera className="w-16 h-16 mb-4" strokeWidth={1} />
              <p className="text-sm px-10 text-center font-medium">
                Foto de tu papá con un perrito aquí
              </p>
            </div>
            <img src={fotoPerro} alt="Fundador de Doggofitve" className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-105" /> 
          </div>

          {/* Área de Texto */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-10">
            
            <motion.h2 variants={textVariants} className="text-3xl font-bold text-gray-700 mb-6 flex flex-wrap items-center gap-2">
              Detrás de  
              <span className="font-extrabold sm:text-3xl tracking-tight">
                <span className="text-[#4c4c4c]">DOGGO</span><span className="text-[#e2b220]">FIT</span>
                <span className="text-[#4c4c4c]"> VE</span>
              </span>
            </motion.h2>
            
            <motion.p variants={textVariants} className="text-gray-600 text-lg mb-6 leading-relaxed">
              Sabemos lo que significa amar a un canino y querer darle la mejor calidad de vida. Doggofitve nace de la necesidad de ofrecer una solución real, segura y conveniente para los dueños de mascotas en Caracas. 
            </motion.p>
            
            <motion.p variants={textVariants} className="text-gray-600 text-lg leading-relaxed mb-10">
              Nuestro equipo está capacitado para tratar a tu peludo con el mismo amor y paciencia que tú le das en casa. ¡Estamos emocionados de conocerlos!
            </motion.p>
            
            {/* Tarjeta del Fundador (Bento style interior) */}
            <motion.div variants={textVariants} className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm w-fit backdrop-blur-sm">
              <div className="w-14 h-14 bg-[#0c62d6] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#0c62d6]/30">
                <User className="w-7 h-7" strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-700 font-bold text-lg">Nestor Gomes</p>
                <p className="text-gray-500 text-sm font-medium tracking-wide">El rostro detrás de la Van</p>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;