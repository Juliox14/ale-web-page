const BtnWhatsapp = () => {
    return (
        <div className="relative w-full">
            <div className="fixed bottom-4 right-4 z-50 text-[#321f4d] rounded-full transition-all duration-600 bg-[#7d58df] group/whatsapp flex items-center w-10 h-10 md:w-14 md:h-14 hover:w-[380px] hover:cursor-pointer hover:pl-2">
                <a
                    href="https://wa.me/9612668500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center min-w-[56px]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" strokeWidth="2">
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </svg>
                </a>
                {/* Texto con animación de aparición */}
                <p className="absolute left-20 pr-4 opacity-0 whitespace-nowrap transition-all duration-300 ease-in-out group-hover/whatsapp:opacity-100 group-hover/whatsapp:left-16">
                    ¿Por qué no me has enviado unos wasap?
                </p>
            </div>
        </div>
    );
};

export default BtnWhatsapp;
