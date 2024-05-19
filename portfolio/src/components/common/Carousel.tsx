import '../../styles/Carousel.scss';
import PropTypes from 'prop-types';

interface CarouselItem {
    imgUrl: string;
    title: string;
    techStack: string[];
    description: string;
}

interface CarouselProps {
    carouselItemList: CarouselItem[];
}

import { useState } from 'react';

const Carousel: React.FC<CarouselProps> = ({ carouselItemList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItemList.length - 1 : prevIndex - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItemList.length - 1 ? 0 : prevIndex + 1,
        );
    };

    return (
        <div>
            {carouselItemList.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: index === currentIndex ? 'block' : 'none',
                    }}
                    className="carousel-item"
                >
                    <button onClick={handlePrev} className="prev-button">
                        &lt;
                    </button>
                    <div className="carousel-img-container">
                        <img
                            src={item.imgUrl}
                            alt="Carousel Item"
                            className="carousel-img"
                        />
                        <div
                            className="carousel-item-info"
                            style={{
                                display:
                                    index === currentIndex ? 'block' : 'none',
                            }}
                        >
                            <div className="carousel-item-title">
                                {item.title}
                            </div>
                            <div className="carousel-item-tech-stack">
                                {item.techStack.join(' | ')}
                            </div>
                            <div className="carousel-item-description">
                                {item.description}
                            </div>
                        </div>
                    </div>
                    <button onClick={handleNext} className="next-button">
                        &gt;
                    </button>
                </div>
            ))}
        </div>
    );
};

Carousel.propTypes = {
    carouselItemList: PropTypes.array.isRequired,
};

export default Carousel;
