import App from "../App";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export function Home(){
    return (
        <App/>
    );
}

export function About(){
    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Back</Link>
                    <Link to="/about/history">history</Link>
                </nav>
            </div>
            <h1>About Us</h1>
            <Outlet></Outlet>
        </div>
    );
}

export function History(){
    return (
        <div>
            <h1>Our History</h1>
        </div>
    );
}
export function Contact(){
    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Back</Link>
                </nav>
            </div>
            <h1>Contact Us</h1>
        </div>
    );
}