import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LetterBox from "./LetterBox";
import Contact from "./Contact/Contact";
import WeddingPlan from "./WeddingPlan";
import FAQ from "./FAQ";
import Photos from "./Photos/Photos";

export default function MainGrid() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<StaticLayout><Outlet /></StaticLayout>}>
                    <Route path='/' element={<LetterBox />} />
                    <Route path='/Invite' element={<LetterBox />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Ceremony_plan' element={<WeddingPlan />} />
                    <Route path='/FAQ' element={<FAQ />} />
                    <Route path='/Photos' element={<Photos/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function StaticLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div id="item-2"><NavigationBar /></div>
            <div id="item-0">{children} </div>
            <div id="item-3"></div>
            <div id="item-1"></div>
        </>
    )
}