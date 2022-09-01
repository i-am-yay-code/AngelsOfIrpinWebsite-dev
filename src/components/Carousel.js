import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';

const items = [
    {
        src: require('../assets/item1.jpg'),
        altText: 'Допомога військовим',
        key: 1
    },
    {
        src: require('../assets/item2.jpg'),
        altText: 'Роздача продуктових наборів',
        key: 2
    },
    {
        src: require('../assets/item3.jpg'),
        altText: 'Роздача продуктових наборів',
        key: 3
    },
    {
        src: require('../assets/item4.jpg'),
        altText: 'Допомога військовим',
        key: 4
    },
    {
        src: require('../assets/item5.jpg'),
        altText: 'Роздача продуктових наборів',
        key: 5
    }
];

const CarouselComponent = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className='d-block w-100' src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>



    );
}

export default CarouselComponent;