// src/components/Steps.jsx
import { Smartphone, Truck, Dog } from 'lucide-react';
import { motion } from 'framer-motion';

const Steps = () => {

  // Definimos las reglas de animación para el contenedor (Padre)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Tiempo de espera entre la aparición de cada tarjeta (0.2s)
      }
    }
  };

  // Definimos las reglas de animación para cada tarjeta (Hijos)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Empiezan invisibles y un poco más abajo
    visible: {
      opacity: 1,
      y: 0, // Suben a su posición original
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      id="how-it-works" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Se activa cuando entra en pantalla
      className="grid gap-6 px-5 py-12 lg:grid-cols-1 xl:grid-cols-3 lg:gap-8 max-w-[1200px] mx-auto items-stretch relative z-30 -mt-10 md:-mt-20"
    >
      
      {/* Tarjeta 1 - Acento sutil amarillo */}
      <motion.div variants={cardVariants} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100">
        <div className="aspect-[16/9] w-full bg-[#e2b220]/10 flex items-center justify-center">
          <Smartphone className="w-20 h-20 text-[#e2b220]" strokeWidth={1.5} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-[22px] font-bold text-[#4c4c4c] mb-2">1. Reservas tu sesión</h3>
          <p className="text-[#4c4c4c]/80 flex-grow">Nos escribes por WhatsApp, eliges el día y la hora que mejor te convenga en Caracas.</p>
        </div>
      </motion.div>

      {/* Tarjeta 2 - Acento fuerte amarillo */}
      <motion.div variants={cardVariants} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100">
        <div className="aspect-[16/9] w-full bg-[#e2b220] flex items-center justify-center">
          <Truck className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-[22px] font-bold text-[#4c4c4c] mb-2">2. Vamos a tu puerta</h3>
          <p className="text-[#4c4c4c]/80 flex-grow">Llegamos a tu domicilio con nuestra Van equipada, segura y climatizada.</p>
        </div>
      </motion.div>

      {/* Tarjeta 3 - Acento color corporativo secundario (#4c4c4c) */}
      <motion.div variants={cardVariants} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-100">
        <div className="aspect-[16/9] w-full bg-[#4c4c4c] flex items-center justify-center">
          <Dog className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-[22px] font-bold text-[#4c4c4c] mb-2">3. Corre feliz</h3>
          <p className="text-[#4c4c4c]/80 flex-grow">Tu perro hace ejercicio en cintas especiales con supervisión constante.</p>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Steps;