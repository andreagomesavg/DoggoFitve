// src/components/Pricing.jsx

import { CheckCircle2, CreditCard, Users, Info, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  // Variantes de animación para Framer Motion
 const navigate = useNavigate();

  // NUEVO: Ahora la función recibe el nombre del plan
  const handleAgendar = (nombrePlan) => {
    // Enviamos al usuario a la Home, pasamos el plan por la URL, y bajamos al form
    navigate(`/?plan=${nombrePlan}#lead-form`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="pricing" className="py-24 bg-white font-sans relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#f9f9f9] to-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-extrabold text-[#4c4c4c] sm:text-4xl tracking-tight mb-4">
            Planes de Entrenamiento Móvil
          </h2>
          <p className="text-xl text-[#4c4c4c]/80 mb-4">
            Elige el ritmo ideal para la vitalidad de tu mascota.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-semibold text-gray-600 border border-gray-200">
            <Info className="w-4 h-4 mr-2" />
            Todos los precios no incluyen IVA
          </span>
        </motion.div>

        {/* Grid de Precios */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-center"
        >
          
          {/* Plan 1: IMPULSO */}
          <motion.div variants={cardVariants} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all relative flex flex-col h-full">
            <h3 className="text-xl font-bold text-[#4c4c4c] mb-2 uppercase tracking-wide">Impulso</h3>
            <p className="text-[#4c4c4c]/60 text-sm font-medium mb-6 h-10">Sesión Única de Evaluación</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-[#4c4c4c]">$15</span>
            </div>
            <p className="text-[#4c4c4c]/80 leading-relaxed mb-8 flex-grow">
              Sesión inicial para evaluar al perro y determinar el plan de entrenamiento ideal.
            </p>
            <button 
              className="w-full py-3 px-4 rounded-xl font-bold text-[#4c4c4c] bg-gray-50 border-2 border-gray-200  transition-colors hover:cursor-pointer  hover:bg-[#e2b220] hover:text-white hover:border-[#e2b220] shadow-sm hover:shadow-md"
              onClick={() => handleAgendar('Impulso')}
                        >
              Agendar Evaluación
            </button>
          </motion.div>

          {/* Plan 2: BIENESTAR (Destacado en Azul) */}
          <motion.div variants={cardVariants} className="bg-[#0c62d6] rounded-3xl p-8 border-2 border-[#0c62d6] shadow-2xl hover:-translate-y-2 transition-transform relative flex flex-col h-full md:scale-105 z-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#e2b220] text-[#4c4c4c] text-xs font-extrabold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
              Más Popular
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Bienestar</h3>
            <p className="text-white/80 text-sm font-medium mb-6 h-10">Mantenimiento Mensual <br/>(4 Sesiones)</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold">$40</span>
              <span className="text-white/70 font-medium"> / mes</span>
            </div>
            <p className="text-white/90 leading-relaxed mb-8 flex-grow">
              Enfocado en el mantenimiento físico y mental para mejorar la salud general de la mascota.
            </p>
            <button 
              className="w-full py-3 px-4 rounded-xl font-bold text-[#0c62d6] bg-white  shadow-lg shadow-black/10 transition-colors hover:cursor-pointer hover:bg-[#e2b220] hover:text-[#4c4c4c] hover:border-[#e2b220] border-2 border-white"
              onClick={() => handleAgendar('Bienestar')}
            >
              Elegir Bienestar
            </button>
          </motion.div>

          {/* Plan 3: KINETIC */}
          <motion.div variants={cardVariants} className="bg-[#4c4c4c] rounded-3xl p-8 border-2 border-[#4c4c4c] shadow-lg hover:shadow-xl transition-all relative flex flex-col h-full text-white">
            <h3 className="text-xl font-bold text-[#e2b220] mb-2 uppercase tracking-wide">Kinetic</h3>
            <p className="text-white/60 text-sm font-medium mb-6 h-10">Alto Rendimiento <br/>(8 Sesiones)</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold">$66</span>
              <span className="text-white/50 font-medium"> / mes</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-8 flex-grow">
              Diseñado para perros de alto rendimiento, buscando resultados óptimos en cada sesión.
            </p>
            <button 
              className="w-full py-3 px-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#e2b220] hover:bg-[#e2b220] transition-colors hover:cursor-pointer"
              onClick={() => handleAgendar('Kinetic')}
            >
              Elegir Kinetic
            </button>
          </motion.div>

        </motion.div>

        {/* Sección de Descuentos y Pagos (Bento Style Bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Descuentos Multiperro */}
          <div className="bg-[#e2b220]/10 rounded-3xl p-8 border border-[#e2b220]/20">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-[#e2b220] mr-3" />
              <h4 className="text-2xl font-bold text-[#4c4c4c]">Descuentos Multiperro</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-[#0c62d6] mr-3 shrink-0" />
                <div>
                  <h5 className="font-bold text-[#4c4c4c]">Plan Hermano <span className="text-[#0c62d6] ml-1">-20%</span></h5>
                  <p className="text-sm text-gray-500">Descuento aplicable a la mensualidad del segundo perro.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-[#0c62d6] mr-3 shrink-0" />
                <div>
                  <h5 className="font-bold text-[#4c4c4c]">Plan Familiar <span className="text-[#0c62d6] ml-1">-30%</span></h5>
                  <p className="text-sm text-gray-500">Descuento aplicable a partir del tercer perro en adelante.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Comercial y Pagos */}
          <div className="bg-[#f9f9f9] rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <CreditCard className="w-8 h-8 text-[#4c4c4c] mr-3" />
              <h4 className="text-2xl font-bold text-[#4c4c4c]">Información Comercial</h4>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#e2b220] mr-3 mt-0.5 shrink-0" />
                <p className="text-[#4c4c4c]/80 text-sm leading-relaxed">
                  <strong className="text-[#4c4c4c]">Formas de pago aceptadas:</strong> Efectivo (USD / EUR / BS), Transferencias Bancarias (BS / USD) y Pago Móvil.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#e2b220] mr-3 mt-0.5 shrink-0" />
                <p className="text-[#4c4c4c]/80 text-sm leading-relaxed">
                  <strong className="text-[#4c4c4c]">Tasa oficial:</strong> Para los pagos realizados en Bolívares (BS), se aplica estrictamente la Tasa Oficial del Banco Central de Venezuela (BCV).
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;