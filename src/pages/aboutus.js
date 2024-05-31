import PageNav from "../components/pageNav";
import aboutUsHero from '../media/about-us-hero.jpg';
import Footer from "../components/footer";
export default function AboutUs({orderProduct}) {

    const secAboutUs = {
        
        secTitle:'About Us',
        secSub1:'Welcome to MangoBD, your trusted source for the freshest, highest-quality mangoes. Based in the heart of Rajshahi, Bangladesh, we take pride in offering mangoes cultivated naturally in our own gardens. Our commitment to using no preservatives ensures that you enjoy the pure, unadulterated taste of natures bounty.', 
        secSub2:'At MangoBD, quality and freshness are at the core of everything we do. We handpick mangoes directly from our farms and expedite the delivery process to get them to your doorstep without delay. This ensures that you receive the freshest mangoes, bursting with flavor and nutrients, just as nature intended.',
        secSub3: 'Our mission is simple: to serve the best quality and fresh foods to our customers at a reasonable price. We believe that everyone deserves to enjoy the delightful taste of premium mangoes, and we strive to make this experience as convenient as possible through our online platform.',
        secSub4:'Rajshahi is renowned for its mangoes, and we are proud to be a part of this legacy. By choosing MangoBD, you are not only supporting local agriculture but also experiencing the rich tradition of mango cultivation that our region is famous for. Thank you for being a part of our journey and allowing us to bring the finest mangoes from our gardens to your table.',
    }
    return (
        <section>
            <PageNav orderProduct={orderProduct}/>
            <div className="wrapper3">
                <PageIntro title={secAboutUs.secTitle} s1={secAboutUs.secSub1}
                s2={secAboutUs.secSub2} s3={secAboutUs.secSub3} s4={secAboutUs.secSub4}
                />
            </div>
            <Footer />
            
        </section>
    )
}

function PageIntro({title, s1,s2,s3,s4}) {
    return(
        <div>
            <div className="flex justify-center pb-8">
                <img src={aboutUsHero} className=""></img>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-0 justify-items-center">
                <h2 className="col-span-1 p-0">{title}</h2>
                <div className="col-span-4 flex flex-col gap-3">
                    <p className="text-base">{s1}</p>
                    <p className="text-base">{s2}</p>
                    <p className="text-base">{s3}</p>
                    <p className="text-base">{s4}</p>
                </div>
                

            </div>
        </div>
        
    )
};