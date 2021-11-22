import { Home } from "../pages/Home";
import { Registration } from "../pages/Registration";
import { ResetPassword } from "../pages/ResetPassword";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PageBet  from "@components/PageGame/PageBet/index";




export function RoutesProject() {
    return (
        <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Registration" element={<Registration/>} />
                    <Route path="/ResetPassword" element={<ResetPassword/>} />
                    <Route path="/PageBet" element={<PageBet/>} />
                </Routes>
        </BrowserRouter>
    )
}

