import PageNav from "../components/pageNav";
import BillingInf from "../components/Cart/billingInf";
import CartProducts from "../components/Cart/cartProducts";
import Footer from "../components/footer";


export default function Cart({orderProduct, setOrderProduct, orderPrice, setOrderPrice}) {

    const cartItemNum = orderProduct.reduce((acc, item)=> {
        return acc + item.prodQuan;
    }, 0);
  
    const cartHasItem = cartItemNum > 0? true : false;


    return (
        <>
            <section id='cart'>
                <PageNav orderProduct={orderProduct}/>
                <div className="wrapper3">
                    <CartProducts cartHasItem={cartHasItem} orderProduct={orderProduct} setOrderProduct={setOrderProduct}
                    orderPrice={orderPrice} setOrderPrice={setOrderPrice}/>
                    <BillingInf cartHasItem={cartHasItem} showButton={true} orderPrice={orderPrice}/>    
                </div>
                <Footer />
            </section>
        </>
    );
};