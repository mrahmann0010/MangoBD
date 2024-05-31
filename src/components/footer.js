import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



export default function Footer () {
    return(
        <footer className="footer px-10 mx-auto flex justify-center md:justify-items-center md:block md:py-10 md:px-20 md:m-auto">
            <div>
                <div className="foot-con-g grid gap-8 grid-cols-1 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <span className="block logo text-xl font-bold pt-6 pb-2 md:pt-0">MangoBD</span>
                        <p className="text-base md:text-base font-normal">Supplying the finest summer mangoes, ensuring quality and convenience with every delivery.</p>
                        <div className="foot-icons flex gap-2 text-2xl text-yellow-500">
                        <FaFacebook />
                        <FaInstagram />
                        </div>
                    </div>
                    <FooterCom title='For Users' link1='Be a member' link2='My Cart' href1='/user' href2='/cart'/>
                    <FooterCom title='About Us' link1='How We Work' link2='Our Mission' href1='/aboutus' href2='aboutus'/>
                    <FooterComContact />
                </div>

                <Copyrights/>
            </div>
            
        </footer>
    )

};

function FooterCom({title, link1, link2, href1, href2}) {
    return(
        <div className="foot-con-f flex flex-col gap-4">
                    <span className="block text-lg font-semibold">{title}</span>
                    <div className="flex flex-col gap-2 text-lg">
                        <Link className="text-base" to={href1}>{link1}</Link>
                        <Link className="text-base" to={href2}>{link2}</Link>
                        
                    </div>
        </div>
    )
}

function FooterComContact() {
    return(
        <div className="flex flex-col gap-2">
                    <span className="block text-lg font-semibold">Contact Us</span>
                    <div className="flex flex-col gap-2 text-lg">
                        <p className="text-base">285/2, Sopura<br>
                        </br>
                        Salbagan - 6203 <br></br>
                        Rajshahi
                        </p>
                    </div>
        </div>
    )
}

function Copyrights () {
    return (
        <div className="flex justify-center py-8">
            <p className="text-center w-2/3 py-4 border-t-2">CopyRights 2020</p>
        </div>
        
    )
}