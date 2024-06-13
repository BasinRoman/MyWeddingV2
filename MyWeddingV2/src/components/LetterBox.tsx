import { useEffect, useRef, useState } from "react";

export default function LetterBox() {

    const envelopeRef = useRef<HTMLDivElement>(null);
    const letterRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const isClosing = useRef(false);

    const handleOpen = () => {
        if (envelopeRef.current && letterRef.current && !isClosing.current) {
            envelopeRef.current.classList.add("open");
            envelopeRef.current.classList.remove("close");
            envelopeRef.current.style.animation = "none";

            setIsOpen(true);
        }
    };

    const handleClose = () => {
        if (envelopeRef.current && letterRef.current) {
            isClosing.current = true;
            envelopeRef.current.classList.remove("open");
            envelopeRef.current.classList.add("close");
            envelopeRef.current.style.animation = "wobble 5s ease infinite";

            setIsOpen(false);
            setTimeout(() => {
                isClosing.current = false;
            }, 100);
        }
    };

    useEffect(() => {
        return () => {
            if (isOpen) {
                envelopeRef.current?.removeEventListener("click", handleOpen);
                letterRef.current?.addEventListener("click", handleClose);
                setIsOpen(false);
            }
            else {
                envelopeRef.current?.addEventListener("click", handleOpen);
                letterRef.current?.addEventListener("click", handleClose);
                setIsOpen(true);
            }
        };
    }, [envelopeRef, letterRef]);

    return (
        <>
            <div ref={envelopeRef} id="envelope">
                <div className="front flap"></div>
                <div className="front pocket">
                    <img src="./src/icons/romashka_margaritka.png"
                        alt="romashka_margaritka"
                        className="romashka_margaritka" />
                </div>
                <div ref={letterRef} className="letter" id="letter">
                </div>
            </div>
        </>
    );
}