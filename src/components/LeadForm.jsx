// src/components/LeadForm.jsx
import { useState } from 'react';
import { supabase } from '../config/supabase';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const LeadForm = () => {
  const [countryCode, setCountryCode] = useState('+58');
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    zone: '',
    dog_breed: ''
  });
  
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  // Manejador de inputs genérico
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sanitizador básico para evitar HTML tags (<script>, <b>, etc.)
  const sanitizeInput = (str) => {
    return str.replace(/<[^>]*>?/gm, '').trim();
  };

  // Validaciones del Frontend
  const validateForm = () => {
    // 1. Sanitizar todos los campos
    const cleanName = sanitizeInput(formData.name);
    const cleanZone = sanitizeInput(formData.zone);
    const cleanBreed = sanitizeInput(formData.dog_breed);
    const cleanPhone = formData.whatsapp.replace(/\D/g, ''); // Solo números

    if (!cleanName || !cleanPhone || !cleanZone || !cleanBreed) {
      return { isValid: false, error: "Todos los campos son obligatorios y no pueden contener código HTML." };
    }

    // 2. Validación específica para Venezuela (+58)
    if (countryCode === '+58') {
      // Acepta 10 dígitos (ej: 4121234567) o 11 dígitos con el 0 (ej: 04121234567)
      if (cleanPhone.length !== 10 && cleanPhone.length !== 11) {
        return { isValid: false, error: "El número de Venezuela debe tener 10 u 11 dígitos (Ej: 0412 1234567)." };
      }
    } else if (cleanPhone.length < 8) {
      return { isValid: false, error: "Por favor, ingresa un número de teléfono válido." };
    }

    return { 
      isValid: true, 
      data: { name: cleanName, zone: cleanZone, dog_breed: cleanBreed, whatsapp: `${countryCode}${cleanPhone}` } 
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const validation = validateForm();
    if (!validation.isValid) {
      setStatus({ loading: false, error: validation.error, success: false });
      return;
    }

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: validation.data.name, 
            whatsapp: validation.data.whatsapp, 
            zone: validation.data.zone, 
            dog_breed: validation.data.dog_breed 
          }
        ]);

      if (error) throw error;

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', whatsapp: '', zone: '', dog_breed: '' });
      
    } catch (error) {
      console.error('Error guardando el lead:', error);
      setStatus({ loading: false, error: 'Hubo un problema de conexión. Intenta de nuevo.', success: false });
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-white font-sans relative">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#4c4c4c]/10 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Panel Izquierdo (Info) */}
          <div className="md:w-5/12 bg-[#e2b220]/90 p-10 text-white/90 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Únete a la<br/>Lista VIP
            </h2>
            <p className="text-white/60 text-lg mb-8 font-medium">
              Asegura tu cupo en el pre-lanzamiento y obtén un descuento exclusivo en tu primera sesión.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center font-bold">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#0c62d6]" strokeWidth={2.5} /> Cupos limitados
              </li>
              <li className="flex items-center font-bold">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#0c62d6]" strokeWidth={2.5} /> Prioridad de reserva
              </li>
              <li className="flex items-center font-bold">
                <CheckCircle2 className="w-5 h-5 mr-3 text-[#0c62d6]" strokeWidth={2.5} /> Descuento fundador
              </li>
            </ul>
          </div>

          {/* Panel Derecho (Formulario) */}
          <div className="md:w-7/12 p-10 md:p-12">
            {status.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#4c4c4c] mb-4">¡Ya estás en la lista!</h3>
                <p className="text-[#4c4c4c]/80 text-lg mb-8">
                  Hemos guardado tus datos de forma segura. Nos pondremos en contacto contigo por WhatsApp muy pronto para los detalles.
                </p>
                <button 
                  onClick={() => setStatus({ ...status, success: false })}
                  className="text-[#0c62d6] font-bold hover:underline"
                >
                  Registrar otro perrito
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#4c4c4c] mb-2">Nombre del dueño <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-[#0c62d6] focus:ring-[#0c62d6] focus:bg-white sm:text-sm px-4 py-3 border transition-colors outline-none"
                    placeholder="Ej. María Pérez"
                  />
                </div>

                {/* WhatsApp Compuesto (Select + Input) */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-[#4c4c4c] mb-2">WhatsApp <span className="text-red-500">*</span></label>
                  <div className="flex shadow-sm rounded-lg">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-gray-100 border border-gray-300 text-[#4c4c4c] text-sm rounded-l-lg focus:ring-[#0c62d6] focus:border-[#0c62d6] block p-3 outline-none font-medium border-r-0"
                    >
                      <option value="+58">🇻🇪 +58</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+57">🇨🇴 +57</option>
                      {/* Puedes agregar más códigos aquí si lo necesitas */}
                    </select>
                    <input
                      type="tel"
                      name="whatsapp"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="block w-full rounded-r-lg border-gray-300 bg-gray-50 focus:border-[#0c62d6] focus:ring-[#0c62d6] focus:bg-white sm:text-sm px-4 py-3 border transition-colors outline-none"
                      placeholder="0414 1992774"
                    />
                  </div>
                </div>

                {/* Fila: Zona y Raza */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="zone" className="block text-sm font-bold text-[#4c4c4c] mb-2">Zona de Caracas <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="zone"
                      id="zone"
                      required
                      value={formData.zone}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-[#0c62d6] focus:ring-[#0c62d6] focus:bg-white sm:text-sm px-4 py-3 border transition-colors outline-none"
                      placeholder="Ej. Chacao"
                    />
                  </div>

                  <div>
                    <label htmlFor="dog_breed" className="block text-sm font-bold text-[#4c4c4c] mb-2">Raza del perrito <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="dog_breed"
                      id="dog_breed"
                      required
                      value={formData.dog_breed}
                      onChange={handleChange}
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-[#0c62d6] focus:ring-[#0c62d6] focus:bg-white sm:text-sm px-4 py-3 border transition-colors outline-none"
                      placeholder="Ej. Golden"
                    />
                  </div>
                </div>

                {/* Mensaje de Error */}
                {status.error && (
                  <div className="flex items-start text-red-600 text-sm bg-red-50 p-4 rounded-lg border border-red-200">
                    <AlertCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                    <p className="font-medium">{status.error}</p>
                  </div>
                )}

                {/* Botón Submit */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-lg shadow-[#0c62d6]/30 text-lg font-bold text-white bg-[#0c62d6] hover:bg-[#094ca8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0c62d6] disabled:opacity-70 transition-all transform hover:-translate-y-0.5"
                >
                  {status.loading ? 'Enviando...' : (
                    <>
                      Quiero mi descuento VIP <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;