import "../styles/carta.css";

import { useState } from "react";

const Carta = () => {
    const texto = "Hola mi amor, espero que está página que hice para ti con mucho cariño te haya gustado tanto como a mi me gustó hacertela, no sabes lo feliz que me haces, estar contigo es lo más bonito que me pudo haber pasado en la vida. Se que no soy el mejor del mundo, pero siempre trato de dar lo mejor de mi para ti, espero que en un futuro podamos estar juntos para siempre, se que puede sonar difícil el que vayamos a estar a tantos kilometros de distancia por tanto tiempo en unos meses (si diosito quiere), pero de verdad te juro y prometo que vamos a disfrutar cada segundo y minuto que nos quede juntos mientras eso sucede, además que cuando regrese vamos a ser felices juntitos ahora si para toda la vida (o hasta que te manden a bochil). Te juro que todos los momentos que recuerdo a tu lado me parecen bonitos, extraño tanto los últimos días de la prepa, las tardes en casa de tu hermana, las veces que te iba a ver a escondidas al parque, las primeras veces que llegaste a mi casa o la de mis abues. Me encanta estar contigo, nunca me aburriría de eso, me encanta verte, besarte, abrazarte, molestarte mucho mamoi awww. Solo quería agradecerte por siempre ser la niña comprensible, dulce, bonita, tierna e inteligente que eres, no cambiaría nada de ti, te amo con todo mi corazón, mi vida, mi amor, mi todo, mi Ale bonita.";
    const [isZoomed, setIsZoomed] = useState(false);

    const openLetter = () => {
        document.querySelector(".envelope-wrapper").classList.toggle("flap");
    };

    const zoomLetter = () => {
        setIsZoomed(true);
    };

    const closeLetter = () => {
        setIsZoomed(false);
        const element = document.getElementById("dibujo");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <div className="flex justify-items-start items-center h-screen">
            <div className="container">
                <div className="envelope-wrapper">
                    <div className="envelope">
                        <div className="letter">
                            <div className="text cursor-pointer" onClick={zoomLetter}>
                                <strong>Mi hermosa Ale.</strong>
                                <p>
                                    {texto}
                                </p>
                                <br />
                                <p>Con todo el amor y cariño del mundo<br />Julian</p>

                            </div>
                        </div>
                    </div>
                    <div className="heart" onClick={openLetter}></div>
                </div>
            </div>

            {/* Carta agrandada con fondo oscuro */}
            {isZoomed && (
                <div>
                    <div className="fixed inset-0 bg-black opacity-50 h-full z-40"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
                            onClick={closeLetter}

                        >
                            X
                        </button>
                        <div className="relative bg-white p-6 w-11/12 max-w-lg  shadow-lg text-center">

                            <h2 className="text-xl font-bold">Mi hermosa Ale.</h2>
                            <p className="mt-4 text-gray-700">
                                {texto}
                            </p>
                            <br />
                            <p>Con todo el amor y cariño del mundo<br />Julian</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carta;
