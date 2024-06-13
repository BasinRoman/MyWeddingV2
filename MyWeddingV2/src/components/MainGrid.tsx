import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LetterBox from "./LetterBox";
import Contact from "./Contact";
import WeddingPlan from "./Wedding_plan";

export default function MainGrid() {
    return (
        <>
            <BrowserRouter>
                <div id="item-0">
                    <Routes>
                        <Route path='/' element={<LetterBox />} />
                        <Route path='/Invite' element={<LetterBox />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/Ceremony_plan' element={<WeddingPlan />} />
                    </Routes>
                </div>
                <div id="item-1"></div>
                <div id="item-2"><NavigationBar /></div>
                <div id="item-3"></div>
            </BrowserRouter>
        </>
    );
}