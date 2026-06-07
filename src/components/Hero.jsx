
import { motion } from 'framer-motion';
import dogwalk2 from '../assets/dogwalk2.png';
import heroVan from '../assets/heroVan.png';

const Hero = () => {
  return (
    <div className="bg-white w-full font-sans overflow-hidden">
      <main className="flex flex-col items-center justify-center w-full">
        
        {/* GRID PRINCIPAL SUPERIOR */}
        <div className="grid justify-center w-full grid-cols-1 md:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="w-full mx-auto bg-white">
            {/* Bloque Superior Amarillo */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid justify-center grid-cols-1 bg-[#e2b220] rounded-sm z-20 relative shadow-lg"
            >
              <h1 className="pt-[clamp(3rem,3vw+1.2rem,6rem)] font-bold leading-none text-center text-white text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight px-4">
                Vitalidad para <br /> tu mascota
              </h1>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.4 }}
                src={dogwalk2}
                alt="Perro feliz"
                className="mx-auto w-[300px] h-auto object-contain mt-4"
              />
            </motion.div>
            
            {/* Bloque Inferior Blanco */}
            <div className="flex flex-col bg-white justify-center pt-32 -mt-[110px] pb-[clamp(3rem,3vw+1.2rem,6rem)] z-10 relative">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[#e2b220] pt-2 font-bold leading-none text-center text-[36px] sm:text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight"
              >
                Pre-lanzamiento
              </motion.h2>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
                className="z-10 px-6 py-3 mt-6 mx-auto rounded-md font-semibold text-lg text-white bg-[#e2b220] border-2 border-transparent hover:bg-[#3a3a3a] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Lista VIP Exclusiva
              </motion.button>
            </div>
          </div>
          
          {/* COLUMNA DERECHA */}
          <div className="bg-[#f9f9f9] w-full relative">
            <div className="max-w-[1000px] px-[clamp(1rem,5vw,8rem)] mx-auto h-full flex flex-col justify-between">
              
              <div className="z-10 w-full p-2 px-5 pt-12 md:pt-[clamp(3rem,3vw+1.2rem,6rem)] pb-28 sm:p-6 md:p-8">
                <motion.h1 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#4c4c4c] font-bold leading-none text-left text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight"
                >
                  Tranquilidad <br /> para ti
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="pb-6 mt-4 text-xl text-[#4c4c4c]/80 max-w-md"
                >
                  El primer gimnasio móvil en Caracas que va directo a tu puerta para que tu canino drene su energía.
                </motion.p> 
                <motion.button 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="z-10 px-8 py-3 rounded-md font-semibold text-lg text-[#e2b220] bg-white border-2 border-[#e2b220] hover:bg-[#e2b220]/10 transition-all duration-300 shadow-sm w-fit"
                >
                  ¿Cómo funciona?
                </motion.button>
              </div>

              {/* Imagen decorativa abajo a la derecha */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 50 }}
                className="absolute bottom-0 right-0 lg:right-10 opacity-80 sm:mr-0 pointer-events-none hidden md:block"
              >
                <img
                  src={heroVan}
                  alt="Van de Doggofitve"
                  className="w-auto h-auto max-h-full md:w-[28rem] lg:w-[32rem] object-contain"
                />
              </motion.div>
            </div>
          </div> 
        </div>

        {/* TARJETAS DE PASOS */}
       
      </main>
    </div>
  );
};

export default Hero;