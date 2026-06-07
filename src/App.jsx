// src/App.jsx
import logoIcon from './assets/logoIcon.png';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Steps from './components/Steps';
import About from './components/About';
import LeadForm from './components/LeadForm';
import { CircleStar, Mail, Phone } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Navbar Minimalista */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
  <div className=" mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <div className="flex items-center gap-2"> 
      <img
                src={logoIcon} 
                alt="Perro feliz"
                className="mx-auto w-[60px] h-auto object-contain "
              />
      <span className="font-extrabold text-lg sm:text-2xl tracking-tight">
       
        <span className="text-[#4c4c4c]">DOGGO</span><span className="text-[#e2b220]">FIT</span>
        <span className="text-[#4c4c4c]"> VE</span>
      </span>
    </div>
    
    {/* Botón VIP ahora en Azul Sólido */}
    <button 
      onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
      className="flex flex-row gap-x-1 px-2 pb-2 pt-2  text-sm font-bold text-white bg-[#0551ad] rounded-md hover:bg-[#094ca8] transition-all shadow-sm hover:shadow-md"
    >
      <CircleStar className="pb-[1px] w-6 h-6" />
      Lista VIP
    </button>
    
  </div>
</nav>

      <main>
        <Hero />
        <Problem />
        <Steps />
        <About />
        <LeadForm />
      </main>

      {/* Footer */}
      <footer className="bg-[#f9f9f9] py-8 border-t border-[#f9f9f9]">
       <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 max-w-full justify-center px-4">
  {/* Instagram */}
  <a 
    href="https://instagram.com/doggofitve" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
    aria-label="Síguenos en Instagram"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
    <span className="text-sm font-medium">@doggofitve</span>
  </a>
  
  {/* TikTok */}
  <a 
    href="https://tiktok.com/@doggofitve" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
    aria-label="Síguenos en TikTok"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
    </svg>
    <span className="text-sm font-medium">doggofitVE</span>
  </a>

  {/* Gmail */}
  <a 
    href="mailto:contacto@doggofitve.com" 
    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
    aria-label="Envíanos un correo"
  >
    <Mail className="w-5 h-5" />
    <span className="text-sm font-medium">infodoggofit@gmail.com</span>
  </a>
  <a 
    href="tel:+584141234567" 
    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all duration-300 transform hover:scale-105"
    aria-label="Llámanos"
  >
    <Phone className="w-5 h-5" />
    <span className="text-sm font-medium">+58 414-1234567</span>
  </a>
</div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Doggofitve. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Vitalidad para tu mascota, tranquilidad para ti.
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default App;