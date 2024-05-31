import { useState } from 'react';
import '../extra/effects.css';
import customerImg from '../media/user-icon.jpeg';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const testimonialArray = [
    {
        review: 'Our previous purchase exceeded our expectations. The quality and service were exceptional. We are very happy with it.',
        name: 'Shakib',
        img: customerImg,
        statType: 'Customer',
    },
    {
        review: 'We had a previous purchase that we are extremely satisfied with. The product was exactly as described. We are delighted with our experience.',
        name: 'Rahim',
        img: customerImg,
        statType: 'Customer',
    },
    {
        review: 'With another purchase, we are very satisfied. The consistency and reliability are commendable. We highly recommend this service.',
        name: 'Karim',
        img: customerImg,
        statType: 'Customer',
    }    
];

function TestimonialCon() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex === 0 ? testimonialArray.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === testimonialArray.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="slider relative">
            <div className="slider-content flex justify-center items-center h-56">
                {testimonialArray.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        name={testimonial.name}
                        review={testimonial.review}
                        img={testimonial.img}
                        type={testimonial.statType}
                        isCurrent={index === currentIndex}
                        position={index - currentIndex}
                    />
                ))}
            </div>
            <button className="slider-button left" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="slider-button right" onClick={nextSlide}><FaChevronRight /></button>
        </div>
    );
}

function Testimonial({ name, review, img, type, isCurrent, position }) {
    let offsetStyle = {};

    if (position !== 0) {
        offsetStyle = {
            transform: `translateX(${position * 20}%) scale(0.8)`,
            zIndex: -Math.abs(position),
            opacity: 0,
        };
    }

    return (
        <div
            className={`testimonial ${isCurrent ? 'current' : ''}`}
            style={offsetStyle}
        >
            <p className="block text-lg font-normal px-2 text-center">{review}</p>
            <div className="grid grid-cols-2 content-around">
                <div className="flex justify-center">
                    <img className="test-img w-1/2 rounded-full" src={img} alt="customer" />
                </div>
                <div className='flex flex-col items-center'>
                    <p className="text-lg font-medium">{name}</p>
                    <p className="text-sm">{type}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCon;
