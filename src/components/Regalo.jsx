import { useState, useId, useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";
import "../styles/gift.css";

const Regalo = ({ imagen, descripcion, color = "#e9c46a", cinta = "#e76f51" , fade = "fade-left", width = "120px", margin_left= 0}) => {
    const [open, setOpen] = useState(false);
    const [shadow, setShadow] = useState("rgb(0, 0, 0, 0.3)");
    const uniqueId = useId(); // Genera un ID único para cada regalo

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setShadow(open ?  "none" : "block");
    }, [open]);

    const isMobile = useIsMobile();

    return (
        <div className="flex flex-col justify-center items-center mt-8 md:mt-0" data-aos={isMobile ? fade : "fade-up"}>
            <div className="relative w-[200px] h-[120px] max-sm:flex max-sm:justify-center max-sm:mr-[50%]">
                <div
                    className="giftcontainer"
                    style={{
                        "--color-gift": color,
                        "--color-ribbon": cinta,
                        "--shadow": shadow
                    }}
                >
                    <div className="gift">
                        <input type="checkbox" className="checkbox" onChange={handleClick} checked={open} id={uniqueId} aria-label="abrir regalo" />
                        <label htmlFor={uniqueId} className={`click ${open ? "opened" : ""}`}></label>
                        <div className={`wishes ${open ? "opened" : ""}`}>
                            <img
                                src={imagen}
                                alt="regalo"
                                className="img-shake"
                                style={{ width: width, marginLeft: margin_left }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-[#1c0e32] w-full text-center mr-14">{descripcion}</p>
        </div>
    );
};

export default Regalo;
