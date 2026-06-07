import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white w-full font-sans">
      <main className="flex flex-col items-center justify-center w-full">
        
        {/* GRID PRINCIPAL SUPERIOR */}
        <div className="grid justify-center w-full grid-cols-1 md:grid-cols-2">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="w-full mx-auto bg-white">
            {/* Bloque Superior Amarillo */}
            <div className="grid justify-center grid-cols-1 bg-[#e2b220] rounded-sm z-20 relative shadow-lg">
              <h1 className="pt-[clamp(3rem,3vw+1.2rem,6rem)] font-bold leading-none text-center text-white text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight px-4">
                Vitalidad para <br /> tu mascota
              </h1>
              {/* Reemplaza el src con la foto de un perro corriendo o tu papá */}
              <img
                src="src\assets\dogwalk2.png" 
                alt="Perro feliz"
                className="mx-auto w-[300px] h-auto object-contain mt-4"
              />
            </div>
            
            {/* Bloque Inferior Blanco (con margen negativo para superposición) */}
            <div className="flex flex-col bg-white justify-center pt-32 -mt-[110px] pb-[clamp(3rem,3vw+1.2rem,6rem)] z-10 relative">
              <h2 className="text-[#e2b220] pt-2 font-bold leading-none text-center text-[36px] sm:text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight">
                Pre-lanzamiento
              </h2>
              <button 
                onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
                className="z-10 px-6 py-3 mt-6 mx-auto rounded-md font-semibold text-lg text-white bg-[#e2b220] border-2 border-transparent hover:bg-[#3a3a3a] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Lista VIP Exclusiva
              </button>
            </div>
          </div>
          
          {/* COLUMNA DERECHA */}
          <div className="bg-[#f9f9f9] w-full relative">
            <div className="max-w-[1000px] px-[clamp(1rem,5vw,8rem)] mx-auto h-full flex flex-col justify-between">
              
              <div className="z-10 w-full p-2 px-5 pt-12 md:pt-[clamp(3rem,3vw+1.2rem,6rem)] pb-28 sm:p-6 md:p-8">
                <h1 className="text-[#4c4c4c] font-bold leading-none text-left text-[clamp(2.5rem,3vw+0.5rem,4.5rem)] tracking-tight">
                  Tranquilidad <br /> para ti
                </h1>
                <p className="pb-6 mt-4 text-xl text-[#4c4c4c]/80 max-w-md">
                  El primer gimnasio móvil en Caracas que va directo a tu puerta para que tu perro drene su energía.
                </p> 
                <button 
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                  className="z-10 px-8 py-3 rounded-md font-semibold text-lg text-[#e2b220] bg-white border-2 border-[#e2b220] hover:bg-[#e2b220]/10 transition-all duration-300 shadow-sm w-fit"
                >
                  ¿Cómo funciona?
                </button>
              </div>

              {/* Imagen decorativa abajo a la derecha */}
              <div className="absolute bottom-0 right-0  lg:right-20 opacity-80 sm:mr-0 pointer-events-none hidden md:block ">
                <img
                  src="src\assets\heroVan.png" 
                  alt="Van de Doggofitve"
                  className="w-auto h-auto max-h-full md:w-[28rem] lg:w-[32rem] object-contain"
                />
              </div>
            </div>
          </div> 
        </div>

        {/* TARJETAS DE PASOS */}
       
      </main>
    </div>
  );
};

export default Hero;