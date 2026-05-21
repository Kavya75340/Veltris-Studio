import { Routes, Route } from "react-router-dom";
import { Index } from "./Index"; // Ensure path is correct

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    );
};

export default AppRoute;
