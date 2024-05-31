import ShippingForm from "../components/Cart/billAddress";
import BillingInf from "../components/Cart/billingInf";

export default function OrderPage({orderPrice}) {
    return (
        <div>
            <ShippingForm/>
            <div className="wrapper3">
            <BillingInf showButton={false} toTargetPath='/payment' orderPrice={orderPrice}/>
            </div>
        </div>
        

    );
};