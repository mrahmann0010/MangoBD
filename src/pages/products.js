import ProductDes from "../components/product";
import PageNav from "../components/pageNav";
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";



export default function Products({orderProduct, handleOrderClick, productList, showNot}) {
    
    const secProducts = {
        secTitle:'Our Collection',
        secSub: 'Explore our diverse collection of premium mangoes, each handpicked to ensure the highest quality and sweetness. From the rich and juicy Amrapali to the unique flavor of Katimon, discover the perfect mango for every palate. Enjoy the taste of freshness delivered straight from our orchards to your doorstep.'
    }



    return (
        <section>
            <PageNav orderProduct={orderProduct}/>
            <div className="wrapper2">
                <div>
                <PageTitle secTitle={secProducts.secTitle} secSub={secProducts.secSub} subTextAlign='text-center'/>
                </div>
                <ul className="products flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-6 md:justify-items-center">   
                    {productList.map((product)=> <ProductDes showNot={showNot} product={product} onOrderClick={handleOrderClick}/>)}      
                </ul>
            </div>
            <Footer />
        </section>
    );
};