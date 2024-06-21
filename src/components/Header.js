import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom"; // A component used instead of anchor tag
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-yellow-300 shadow-lg  font-[500]">
            <div className="logo-container">
                <img className="w-16 mx-6 mt-2" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

                    {/* <link></link> this helps in routing to diffrent pages without reloading whole page */}
                    {/* In html output it behave/show as an anchor tag */}
                    <li className="px-4"> <Link to="/">Home</Link> </li>
                    <li className="px-4"> <Link to="/about">About Us</Link> </li>
                    <li className="px-4"> <Link to="/contact">Contact Us</Link> </li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link> </li>
                    <li className="px-4"> <Link to="/cart">Cart</Link> </li>
                    <button 
                        className="Login"
                        onClick = {() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;