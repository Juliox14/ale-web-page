import { useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="top-0 left-0 right-0 z-50 flex items-center justify-end px-4 py-5 bg-[#29185d] shadow-lg transition-all duration-300 relative w-full md:justify-center">
            {/* Logo */}
            {/* <a href="/" className="text-5xl font-bold text-[#7d58df] absolute left-2 top-2">Logo</a> */}

            {/* Menú Desktop */}
            <div className="hidden md:flex justify-center gap-4 font-mono">
                <a href="#inicio" className="text-lg text-white hover:text-[#ecebfc] hover:underline transition-transform duration-100 hover:scale-110">Inicio</a>
                <a href="#fotos" className="text-lg text-white hover:text-[#ecebfc] hover:underline transition-transform duration-100 hover:scale-110">Fotos</a>
                <a href="#regalos" className="text-lg text-white hover:text-[#ecebfc] hover:underline transition-transform duration-100 hover:scale-110">Regalos</a>
                <a href="#carta" className="text-lg text-white hover:text-[#ecebfc] hover:underline transition-transform duration-100 hover:scale-110">Carta</a>
                <a href="#dibujo" className="text-lg text-white hover:text-[#ecebfc] hover:underline transition-transform duration-100 hover:scale-110">Dibujo</a>
            </div>

            {/* Botón Menú */}
            <button className="lg:hidden p-2 rounded-full text-primary-foreground hover:text-foreground transition-transform duration-300" onClick={handleMenu} aria-label="Toggle Menu">
                <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
            </button>

            {/* Menú Móvil */}
            <div className={`fixed inset-0 bg-[#2e214a] bg-opacity-95 lg:hidden flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {/* Botón de Cerrar */}
                <button className="absolute top-4 right-4 p-2 hover:text-gray-300 transition-transform duration-300" onClick={handleMenu} aria-label="Close Menu">
                    <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 352 512" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                    </svg>
                </button>

                {/* Opciones del Menú */}
                <a className="block py-4 font-medium text-white hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" href="#inicio" onClick={handleMenu}>Inicio</a>
                <a className="block py-4 font-medium text-white hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" href="#fotos" onClick={handleMenu}>Fotos</a>
                <a className="block py-4 font-medium text-white hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" href="#regalos" onClick={handleMenu}>Carta</a>
                <a className="block py-4 font-medium text-white hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" href="#carta" onClick={handleMenu}>Regalos</a>
                <a className="block py-4 font-medium text-white hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200" href="#dibujo" onClick={handleMenu}>Dibujo</a>
            </div>
        </header>
    );
};

export default Header;
