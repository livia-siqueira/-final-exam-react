import { Home } from "../pages/Home";
import { Registration } from "../pages/Registration";
import { ResetPassword } from "../pages/ResetPassword";
import { BrowserRouter, Routes, Route} from 'react-router-dom';



export function RoutesProject() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Registration" element={<Registration/>} />
                    <Route path="/ResetPassword" element={<ResetPassword/>} />
                </Routes>
        </BrowserRouter>
    )
}

