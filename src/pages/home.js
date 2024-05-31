import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// Components
import PageNav from "../components/pageNav";
import ProductDes from "../components/product";
import PageTitle from "../components/pageTitle";
import Options from "../components/options";
import CtaButton from '../components/ctaButton';
import TestimonialCon from "../components/testimonial";
import Footer from "../components/footer";
import CartUpdMess from "../components/cartUpdMess";
import { scrollToSection } from "../components/Utility/scrollToSection";

// Media
import howBrowse from '../media/howitworks/browse.jpg';
import howPayment from '../media/howitworks/payment.jpg';
import howFruit from '../media/howitworks/fruit2.jpg';
import howDeliver from '../media/howitworks/deliver.jpg';
import heroImg from '../media/mango2.jpg';
import aboutUsPic from '../media/general/mangogarden.png';


export default function Home({handleOrderClick, productList, orderProduct, setOrderProduct, showNot, showCartUpNot}) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const optionPicArray = [
        {src:howFruit,
         class:'tall'   
        },
        {src:howBrowse,
            class:'short'   
        },
        {src:howDeliver,
            class:'short'   
        },
        {src:howPayment,
            class:'tall'   
        },
    ];


    
    useEffect(()=> {
        const handleResize = ()=> setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const secHowItWorks = {
        secTitle:'How It Works',
        secSub:'Discover how simple it is to enjoy the freshest summer fruits delivered right to your doorstep. Follow our easy four-step process and relish the convenience and quality of our service.'
    }

    const secAboutUs = {
        secTitle:'About Us',
        secSub:'At MangoBD, we are dedicated to delivering the freshest and finest summer fruits directly to your doorstep. Our commitment to quality ensures that you enjoy handpicked, seasonal fruits at their peak ripeness. Experience the convenience and joy of healthy, delicious fruit with every delivery.'
    }

    
    const handleBtnAbout = () => {
        navigate('/aboutus');
    }
    return (

        <>  
            {/* If Product is Added to Cart */}
            {showCartUpNot && <CartUpdMess />}
            <section id="home">
                <div>
                <PageNav orderProduct={orderProduct}/>
                </div>
                
                <div className="wrapper w-full grid grid-cols-1 gap-10 items-center md:grid-cols-2" id="home-wrap">
                <div className="content flex flex-col gap-5 items-center pt-10 md:pt-14">
                    <h1>
                        <span className="text-yellow-400 text-center">Organic<br></br></span>
                        <span className="">Healthy Fresh <br></br></span>
                        <span className="">Mangoes For You <br></br></span>
                    </h1>

                    <p className="text-center text-lg">
                    Discover the finest, handpicked mangoes, delivered fresh from the lush orchards of Bangladesh to your doorstep. Experience the unmatched sweetness and quality of MangoBD – your ultimate destination for the best mangoes in the world.
                    </p>

                    <CtaButton onClick={()=> scrollToSection('featured-products')} buttonName='Order Now'/>
                </div>

                <div className="hero-img flex justify-center md:pt-14">
                    <img src={heroImg} alt="Mango"></img>
                </div>
            </div>
        </section>

            <section id="featured-products">
                <div className="wrapper2">
                    <h2>Featured Products</h2>
                    {/* Depending on the product number, grid cols is determined,
                    since there is only 3 products, grid cols is 3. Default is 4 */}
                    <ul className="products flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-6 md:justify-items-center">
                        {windowWidth<768?
                        productList.slice(0,3).map((product)=> <ProductDes showNot={showNot} product={product} onOrderClick={handleOrderClick}/>):
                        productList.map((product)=> <ProductDes showNot={showNot} product={product} onOrderClick={handleOrderClick}/>)
                        }
                    </ul>

                </div>
            </section>

            <section id="how-it-works">
                <div className="wrapper2 flex flex-col gap-5 md:grid md:grid-cols-2">
                    <div>
                    <PageTitle secTitle={secHowItWorks.secTitle} secSub={secHowItWorks.secSub}/>
                    <Options/>
                    </div>

                    <div className="options-pic-con gap-3">
                        <div className="flex flex-col gap-3">
                            {optionPicArray.slice(0,2).map((pic, index)=>{
                            return <img className={`${pic.class} options-pic`} key={index} src={pic.src} alt={index}></img>    
                            })}
                        </div>

                        <div className="flex flex-col gap-3">
                            {optionPicArray.slice(-2).map((pic, index)=>{
                            return <img className={`${pic.class} options-pic`} key={index} src={pic.src} alt={index}></img>    
                            })}
                        </div>
                        
                    </div>
                    
                </div>
            </section>


            <section id="about-us">
            <div className="wrapper2 grid gap-10 md:grid-cols-2">
                    <div className="flex flex-col">
                        <PageTitle secTitle={secAboutUs.secTitle} secSub={secAboutUs.secSub} subTextAlign='text-center'/>
                        <CtaButton onClick={()=> handleBtnAbout()} buttonName='Learn More'/>
                    </div>

                    <div>
                        <img className="rounded-lg" src={aboutUsPic} alt="our-garden"></img>
                    </div>
   
                </div>
            </section>


            <section id="cus-rev">
                <div className="wrapper3">
                    <h2 className="text-center py-3">Customer Review</h2>
                    <TestimonialCon />
                </div>
            </section>

            <section>
                <Footer />
            </section>

        </>
        
    );
};