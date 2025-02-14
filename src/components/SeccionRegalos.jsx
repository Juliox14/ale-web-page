import Regalo from "./Regalo";

const SeccionRegalos = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white z-20 max-sm:mt-20" id="regalos">
            <h1 className="text-2xl md:text-5xl font-arial uppercase font-bold text-center text-[#1c0e32] justify-center mb-6" data-aos="fade-up">
                🎁 Abre y descubre tus regalos 🎁
            </h1>
            <p className="text-[#1c0e32] w-full text-center md:mr-14" data-aos="fade-up">
                ¡Hola mi amor, tienes que hacer click en la tapa de cada regalo para descubrir lo que hay dentro! 🎉
            </p>

            <div className="flex gap-y-20 gap-x-12 flex-col md:flex-row w-full md:w-[60%] justify-center items-center h-full mt-28 md:mt-64 mr-10 md:mr-0 flex-wrap">
                
                {/* Primer regalo */}
                <Regalo imagen="/argan.png" color="#FFB6C5" cinta="#FF93B1" width="200px" fade="fade-left" />
                
                {/* Segundo regalo */}
                <Regalo imagen="/serum_dove.png" color="#C4E1FF" cinta="#FFB2B2" width="200px"  fade="fade-right" />
                
                {/* Tercer regalo */}
                <Regalo imagen="/brochas_maange.png" color="#A7D8FF" cinta="#FFC9B7" width="150px" fade="fade-left"/>
                
                {/* Cuarto regalo */}
                <Regalo imagen="/enchinador.png" color="#E7D4FF" cinta="#D4B3FF" width="120px"  fade="fade-right" />
                
                {/* Quinto regalo */}
                <Regalo imagen="/cejas.png" color="#FFD1FF" cinta="#FF9EEC" width="100px" margin_left="24px"  fade="fade-left"/>
                
                {/* Sexto regalo */}
                <Regalo imagen="/shampoo.png" color="#FFB6C5" cinta="#FD93AF" width="90px" margin_left="30px" fade="fade-right" />
                
            </div >
        </div >
    );
};

export default SeccionRegalos;
