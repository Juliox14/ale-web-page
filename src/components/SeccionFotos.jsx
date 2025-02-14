import { useEffect, useRef, useState } from "react";
import Carousel from "./Carrusel";
import AOS from "aos";
import "aos/dist/aos.css";

export const SeccionFotos = () => {
  const textos = ["Comer", "Dormir", "Reír", "Bailar", "Cantar", "Llorar", "Todo"];
  const images = [
    "/imagen1.jpg", "/imagen2.jpg", "/imagen3.jpg", "/imagen4.jpg", "/imagen5.jpg", "/imagen6.jpg",
    "/imagen7.jpg", "/imagen8.jpg", "/imagen9.jpg", "/imagen10.jpg", "/imagen11.jpg", "/imagen12.jpg",
    "/imagen13.jpg", "/imagen15.jpg", "/imagen16.jpg", "/imagen17.jpg", "/imagen18.jpg", "/imagen19.jpg"
  ];
  const descriptions = [
    { date: "Parque Bicentenario with my girlfriend 🤙🤙😝😛", text: "Siempre me la paso muy bien contigo ahí mi amor, ojalá nos hubieramos tomado foto la primera vez que fuimos" },
    { date: "Monkey Papas with my freakin love 🤙😝🍗🍟", text: "Pobechita mi niña, quiere comer monkey papas todos los días de su fukin life y su novio nunca la lleva pobechita 😿" },
    { date: "Que feliz soy amor de verdad", text: "De verdad mi amor que me haces muy feliz, como se ve que te amo" },
    { date: "Mi niña con su bracito pintado", text: "Te amo mucho, desde que estamos pollos encontramos la manera de vernos" },
    { date: "Somosh Guaposh losh dosh", text: "Siempre me la paso muy bien contigo, te amo mucho" },
    { date: "Besito sabor KFC mamoi", text: "Aww mi amor que bonito recuerdo ese día te amo, hay que ir por un kfc" },
    { date: "Gracias por querer tanto a mi abue ❤️", text: "Él siempre se la pasa bien chido contigo, te quiere mucho, gracias por quererlo y platicar con el desde el primer día, eres la mejor." },
    { date: "Con mi yayita ❤️", text: "Aww mamoi como queremos a mi yayita, gracias por quererla tanto y darle la mano y molestarla jejeje" },
    { date: "Breakfast with my girlfriend 🤙🤙😛🥓🍳", text: "Desayunando juntos, siempre es muy bonito comer contigo mi vida" },
    { date: "En un pachangón 🤙😛", text: "Te veías preciosa ese día de bombín, te amo mucho, guapa 😘" },
    { date: "Felices bajo la lluvia 🌧️", text: "Somos felices hasta empapandonos aww mamoi, eres mi sunshine after the storm ⛈️🌈😛🤙" },
    { date: "Pobechita mamoi", text: "Qué ternura me das mamoi, eres la niña más chiquita y pobecita" },
    { date: "Simplemente bella bella 😛😘", text: "Me encanta como te queda esa blusa" },
    { date: "De bombín 👔👗", text: "Hay que vestirnos de bombín otra vez mi amor, te amo mucho"   },
    { date: "En la playa con el amor de mi vida 🏖️🌅", text: "Uno de los mejores días de mi vida, ojalá se repita, te amo con todo mi ser"  },
    { date: "Pollitos 🐥🐥", text: "Que pollos nos vemos ahí amor la neta, como extraño esas tardes a tu lado en casa de tu hermana" },
    { date: "El primer día que fuiste a casa de mis abues", text: "Que bonito día mi amor, lo recuerdo con mucho cariño" },
    { date: "En sancris", text: "Hay que escaparnos a sancris un día tu y yo solos amor, locura total 😛🤙😝" },
    
  ];

  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(false);
  const h1Ref = useRef(null); // Referencia al <h1>

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Se activa cuando el 50% del h1 es visible
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      setIndice(0);
      return;
    } // No hacer nada si el <h1> no está en pantalla
    if (indice >= textos.length - 1) return; // Detenerse si ya llegó al final del array

    const timeout = setTimeout(() => {
      setIndice((prev) => prev + 1);
    }, 300);

    return () => clearTimeout(timeout); // Limpiar el timeout al desmontar o actualizar
  }, [visible, indice]);

  return (
    <div data-aos="fade-up" className="flex flex-col justify-center items-center p-4 w-full min-h-screen gap-4 bg-white relative" id="fotos">
      <h1 ref={h1Ref} className="text-5xl font-arial leading-10 uppercase font-bold text-center text-[#45288a] justify-center mb-8">
        A tu lado<br />{textos[indice]}<br />es bonito
      </h1>
      <Carousel images={images} descriptions={descriptions} />
    </div>
  );
};

export default SeccionFotos;
