import CtaProceedButton from "./ctaProceedButton";
export default function BillingInf({cartHasItem, orderPrice, showButton}) {

    const buttonName = cartHasItem? 'Proceed to Order Now': 'Shop';


    return (
        <div className="bill flex flex-col">
            <div className="flex justify-between my-2">
                <span>Subtotal:</span>
                <span>BDT {orderPrice}</span>
            </div>
            <div className="flex justify-between my-2">
                <span>Shipping:</span>
                <span>0</span>
            </div>
            <div className="flex justify-between my-2">
                <span>Total:</span>
                <span>BDT {orderPrice}</span>
                {/* <span>{total.toFixed(2)}</span> */}
            </div>
            {cartHasItem?
            <CtaProceedButton showButton={showButton} toTargetPath='/order' buttonName={buttonName}/>
            :
            <CtaProceedButton showButton={showButton} toTargetPath='/' buttonName={buttonName}/>
            }
            
        </div>
    )
}