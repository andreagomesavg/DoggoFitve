// src/components/Problem.jsx

import { AlertTriangle, ShieldCheck, X, Truck, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-extrabold text-[#4c4c4c] sm:text-4xl tracking-tight">
            ¿Tu canino tiene demasiada energía y tú <span className="text-[#0551ad]">poco tiempo?</span>
          </h2>
          <p className="mt-5 text-xl text-[#4c4c4c]/80 leading-relaxed">
            Vivir en un apartamento en Caracas puede ser estresante para tu mascota. La falta de ejercicio adecuado genera ansiedad, destrozos en casa y problemas de salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Tarjeta del Problema (Entra desde la izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c4c4c]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <AlertTriangle className="w-12 h-12 text-[#4c4c4c] mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-[#4c4c4c] mb-6 relative z-10">
              El Problema
            </h3>
            
            <ul className="space-y-5 text-[#4c4c4c]/80 relative z-10 text-lg">
              <li className="flex items-start">
                <X className="w-6 h-6 text-[#4c4c4c] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Paseos cortos que no logran drenar toda su energía.</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-[#4c4c4c] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Comportamientos destructivos por aburrimiento y encierro.</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-[#4c4c4c] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Falta de tiempo por el tráfico y las responsabilidades diarias.</span>
              </li>
            </ul>
          </motion.div>

          {/* Tarjeta de la Solución (Entra desde la derecha) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0551ad] rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-white group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <ShieldCheck className="w-12 h-12 text-[#e2b220] mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-6 relative z-10">
              La Solución: Doggofitve
            </h3>
            
            <ul className="space-y-5 text-white/90 relative z-10 text-lg">
              <li className="flex items-start">
                <Truck className="w-6 h-6 text-[#e2b220] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Vamos directo a tu edificio o casa, ahorrándote el tráfico.</span>
              </li>
              <li className="flex items-start">
                <Activity className="w-6 h-6 text-[#e2b220] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Cintas no motorizadas seguras, que van al ritmo de tu perro.</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-[#e2b220] mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                <span>Drena toda su energía en sesiones intensivas de 30 minutos.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Problem;