

export default function ProductDes({product, onOrderClick, showNot}) {
    return (
        <li className="product">
                            <img className="prod-img" src={product.prodImgSrc} alt={product.prodName}></img>
                            <div className="product-des">
                                <h6 className='text-lg font-bold'>{product.prodName}</h6>
                                <h6 className='text-lg font-normal'>{product.prodSize}</h6>
                            </div>
                            <div className="product-cta md:mt-2">
                                <h6 className='text-base'>BDT {product.prodPrice}</h6>
                                <button onClick={()=> {onOrderClick(product); showNot();}} className="cta2">Order</button>
                            </div>

        </li>
    )
};
