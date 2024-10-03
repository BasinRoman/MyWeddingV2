//import { useEffect, useRef, useState } from "react";

import romashka_margaritka from '../assets/icons/romashka_margaritka.png'

export default function LetterBox() {

    //const envelopeRef = useRef<HTMLDivElement>(null);
    //const letterRef = useRef<HTMLDivElement>(null);


    //const letterObj = document.querySelector(".letter");
    //const [isOpen, setIsOpen] = useState(false);
    //const isClosing = useRef(false);

    const handleOpen = () => {
        const envelopeObj = document.getElementById("envelope");
        if (envelopeObj) {
            envelopeObj.classList.add("open");
            envelopeObj.classList.remove("close");
            envelopeObj.style.animation = "none";

            //setIsOpen(true);
        }
    };

    const handleClose = () => {
        const envelopeObj = document.getElementById("envelope");
        if (envelopeObj) {
            //isClosing.current = true;
            envelopeObj.classList.remove("open");
            envelopeObj.classList.add("close");
            envelopeObj.style.animation = "wobble 5s ease infinite";

            //setIsOpen(false);
            // setTimeout(() => {
            //     isClosing.current = false;
            // }, 100);
        }
    };

    // useEffect(() => {
    //     return () => {
    //         if (isOpen) {
    //             envelopeRef.current?.removeEventListener("click", handleOpen);
    //             letterRef.current?.addEventListener("click", handleClose);
    //             setIsOpen(false);
    //         }
    //         else {
    //             envelopeRef.current?.addEventListener("click", handleOpen);
    //             letterRef.current?.addEventListener("click", handleClose);
    //             setIsOpen(true);
    //         }
    //     };
    // }, [envelopeRef, letterRef]);

    return (
        <>
            <div  className="envelope" id="envelope" onClick={handleOpen}>
                <div className="front flap"></div>
                <div className="front pocket">
                    <img src={romashka_margaritka}
                        alt="romashka_margaritka"
                        className="romashka_margaritka" />
                </div>
                <div  className="letter" id="letter" onClick={handleClose}>
                </div>
            </div>
        </>
    );
}