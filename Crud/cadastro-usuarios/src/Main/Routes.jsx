import React from "react";
import {Routes, Route, Navigate} from "react-router";

import Main from "../Components/Template/Main";
import UserCrud from "../Components/User/UserCrud";

const rotasApp = (props) => {
    <Routes>
        <Route path="/" element={<Main />} /> {/* Usando 'element' ao invés de 'Component' */}
        <Route path="/user" element={<UserCrud />} /> {/* Usando 'element' ao invés de 'Component' */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Usando 'Navigate' para redirecionar */}
    </Routes>
}


export default rotasApp;