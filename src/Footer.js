import WhiteLogo from "./assets/logo-white.png"
function Footer (){
    return (
        <footer>
            <div className="maxWidth footerContainer">
                <img src={WhiteLogo} alt="Logo" width="90px"/>
                <div className="footerSitemap">
                    <div>
                        <p>Sitemap</p>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Reserve a table</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Socials</p>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;