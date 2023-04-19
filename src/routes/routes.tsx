import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Classificado } from "../pages/classificados/Classificados";
import { NovoClassificados } from "../pages/novoclassificados/NovoClassificados";


export const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Classificado/>}/>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;