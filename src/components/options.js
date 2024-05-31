import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaAmazonPay } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";



function Options() {

    const optionsArray = [
        {title:'Browse & Select',
        subtitle:'Choose your favorite fruits and add them to your cart with just a click.',
        icon: MdOutlineScreenSearchDesktop,
        background:'#7e4ff3',
        },
        {title:'Place Order',
        subtitle:'Review your selection and confirm your order effortlessly.',
        icon: IoCartOutline,
        background:'#70ab5d',
        },
        {title:'Secure Payment',
        subtitle:'Pay securely through our easy and reliable payment options.',
        icon: FaAmazonPay,
        background:'#ff8009',
        },
        {title:'Fresh Delivery',
        subtitle:'Sit back and relax as we deliver fresh fruits right to your doorstep.',
        icon: GrDeliver,
        background:'#ffd400',
        },
    ]

    
    return (
        <ul className="options-con flex flex-col gap-4 md:gap-6">
                {optionsArray.map((option, index)=> {
                   return <Option key={index} title={option.title} subtitle={option.subtitle} icon={option.icon} background={option.background}/>
                })}
        </ul>
    )
}


function Option ({title, subtitle, icon:Icon, background}) {

    
    return(
        <li className="option flex gap-4 items-center">
            <span className="block text-white icon" style={{background:background}}>
                <Icon />
            </span>
            <span className="description block flex flex-col gap-1">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="text-base">{subtitle}</p>
            </span>
            
        </li>
    )
}

export default Options;
