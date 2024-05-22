import Logo from "./assets/Logo.svg";
import Nav from "./Nav";

function Header (){
    return (
        <header className="maxWidth">
            <img src={Logo} alt="Logo"/>
            <Nav/>
        </header>
    )
}
export default Header;