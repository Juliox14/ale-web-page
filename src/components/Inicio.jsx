import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

export const Inicio = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const h1Ref = useRef(null);

    useEffect(() => {

        const typed = new Typed(h1Ref.current, {
            strings: ["Esta página es para ti 💘", "Te amo con todo el corazón 💗", "Eres mi vida entera", "Eres mi credo ⛪", "Mi religión 🛐🛐🙏😝"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row max-sm:items-center md:justify-center py-6 md:py-32 min-h-screen w-full md:px-8 px-4 relative text-[#1c0e32]">
            {/* Imagen de perfil */}

            <div className="heart-container w-[200px] h-[200px] md:w-[350px] md:h-[350px]" data-aos="fade-up">
                <img
                    src="/fotoCircular.png"
                    alt="Foto de corazón"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col items-center h-full md:max-w-[60%]">
                {/* Título */}
                <h1 className="text-3xl mt-3 md:mt-0 md:text-6xl text-[#45288a] font-bold font-mono text-center" data-aos="fade-up">
                    ¡Hola, mi Ale bonita!
                </h1>

                {/* Texto animado */}
                <div className="flex max-sm:mt-6">
                    <h1 ref={h1Ref} className="md:text-3xl text-[1rem] text-[#1c0e32] md:mt-8 font-mono w-full inline-block text-center" data-aos="fade-up"></h1>
                </div>

                {/* Párrafo descriptivo */}
                <p className="text-sm sm:text-lg text-[#1c0e32] w-full md:w-[65%] font-mono mt-4 text-center md:text-justify" data-aos="fade-up">
                    Todo este tiempo juntos ha sido lo más bonito, todo gracias a ti. Eres la persona más increíble que he conocido, y espero pasar el resto de mi vida contigo. Te amo con todo mi corazón, espero que te guste esta página que hice para ti.
                </p>

                {/* Botones */}
                <div className="flex gap-4 md:mt-6 mt-2 w-full sm:w-auto justify-center" data-aos="fade-up">
                    <a href="#fotos" className="bg-[#45288a] text-white text-sm sm:text-base px-6 py-2 rounded text-center hover:bg-[#7d58df] transition-all duration-300  sm:w-auto">
                        Nosotros
                    </a>
                    <a href="#carta" className="bg-[#5b5863] text-white text-sm sm:text-base px-6 py-2 rounded text-center hover:bg-[#7d58df] transition-all duration-300 sm:w-auto">
                        Cartita
                        
                    </a>
                </div>
            </div>
            <div className="scroll-down-container mt-4 hidden md:block">
                <p className="text-sm">Deslizar</p>
                <div className="mouse-icon mt-2">
                    <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
