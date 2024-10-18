import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
    return (
        <div className="outer-pokedex ">
            <h1 id="-heading">
                <Link to="/" className=" text-3xl tracking-wide underline font-semibold  font-sans mt-4 ">
                    Pokedex
                </Link>
            </h1>
            <CustomRoutes />
        </div>
    );
}

export default App;
