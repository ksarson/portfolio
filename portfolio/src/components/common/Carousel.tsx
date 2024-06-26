import '../../styles/Carousel.scss';
import PropTypes from 'prop-types';

interface CarouselItem {
    imgUrl: string;
    title: string | undefined;
    techStack: string[] | undefined;
    description: string | undefined;
}

interface CarouselProps {
    hasHoverEffect: boolean;
    carouselItemList: CarouselItem[];
}

import { useState } from 'react';

const Carousel: React.FC<CarouselProps> = ({
    hasHoverEffect,
    carouselItemList,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItemList.length - 1 : prevIndex - 1,
        );
    };

    const handleNext = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % carouselItemList.length,
        );
    };

    return (
        <div className="carousel">
            <button onClick={handlePrev} className="prev-button">
                &lt;
            </button>
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItemList.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div
                            className={`carousel-img-container${hasHoverEffect ? '-hover' : ''}`}
                        >
                            <img
                                src={item.imgUrl}
                                alt="Carousel Item"
                                className="carousel-img"
                            />
                            <div
                                className="carousel-item-info"
                                style={{
                                    display:
                                        index === currentIndex
                                            ? 'block'
                                            : 'none',
                                }}
                            >
                                <div className="carousel-item-title">
                                    {item.title}
                                </div>
                                <div className="carousel-item-tech-stack">
                                    {item.techStack
                                        ? item.techStack.join(' | ')
                                        : ''}
                                </div>
                                <div className="carousel-item-description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleNext} className="next-button">
                &gt;
            </button>
        </div>
    );
};

Carousel.propTypes = {
    hasHoverEffect: PropTypes.bool.isRequired,
    carouselItemList: PropTypes.array.isRequired,
};

export default Carousel;
