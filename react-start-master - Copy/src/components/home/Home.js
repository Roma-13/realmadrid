import React, { useState } from 'react';
import "./style.css";
import Homekit1 from "./assets/photo1.webp";
import Homekit2 from "./assets/photo2.webp";
import Homekit3 from "./assets/photo3.webp";
import Homekit4 from "./assets/photo4.webp";


const imagesHome = [Homekit1, Homekit2, Homekit3, Homekit4];
const imagesAway = [Homekit2, Homekit1, Homekit3, Homekit4];
const imagesThird = [Homekit3, Homekit1, Homekit2, Homekit4];

export const Home = () => {
    const [currentTab, setCurrentTab] = useState("Home");
    const [isHomeOpen, setIsHomeOpen] = useState(true);
    const [isAwayOpen, setIsAwayOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState("M");


    const HomeSizes = {
        size1: false,
        size2: true,
        size3: true,
        size4: false,
        size5: false,
        size6: true,
        size7: false,
    };
      
    const AwaySizes = {
        size1: false,
        size2: true,
        size3: true,
        size4: false,
        size5: false,
        size6: false,
        size7: false,
    };
      
    const ThirdSizes = {
        size1: true,
        size2: true,
        size3: true,
        size4: false,
        size5: false,
        size6: false,
        size7: false,
    };

    const maisuri = [
        { form1: "Home", color1: "White" },
        { form2: "Away", color2: "Navy" },
        { form3: "Third", color3: "Black" }
    ];

    const renderBadge = (isActive, label) => (
        <div className={`badge ${isActive ? 'active' : ''}`}>
            {label}
        </div>
    );
    
    const handleHomeOpen = () => {
        setIsHomeOpen(true);
        setIsAwayOpen(false);
        setIsThirdOpen(false);
        setCurrentTab("Home");
    }

    const handleAwayOpen = () => {
        setIsHomeOpen(false);
        setIsAwayOpen(true);
        setIsThirdOpen(false);
        setCurrentTab("Away");
    }

    const handleThirdOpen = () => {
        setIsHomeOpen(false);
        setIsAwayOpen(false);
        setIsThirdOpen(true);
        setCurrentTab("Third");
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }

    
    const [badges, setBadges] = useState({
        badge1: false,
        badge2: false,
        badge3: false,
      });
      
      

    const NewTitle = ({ sizes, saxeli, color }) => {
        const renderSize = (size, label) => (
            <div 
                className={`${size ? "radial" : "radial crossed"} ${selectedSize === label ? "active-size" : ""}`} 
                onClick={size ? () => handleSizeClick(label) : null}
            >
                {label}
            </div>

            
        );
        return (
            <div>
                <div className='fonttitle'>
                    Mens {saxeli} Jersey 23/24 {color}
                </div>
                <div className="price">
                    $125.00
                </div>
                <div className="size">
                    Size:
                </div>
                <div className='mysize windowsize'>
                    {renderSize(sizes.size1, 'XS')}
                    {renderSize(sizes.size2, 'S')}
                    {renderSize(sizes.size3, 'M')}
                    {renderSize(sizes.size4, 'L')}
                    {renderSize(sizes.size5, 'XL')}
                    {renderSize(sizes.size6, '2XL')}
                    {renderSize(sizes.size7, '3XL')}
                </div>
                <div className="badge">
                    Badge:
                </div>
                <div className="badge">
                    <button className="badge-button">None</button>
                    <button className="badge-button">Champions League Pack +$25.00</button>
                    <button className="badge-button">La Liga +$15.00</button>
                </div>
            </div>
        );
    }
    

    const Carousel = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
    
        const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
    
       
    
        return (
            <div className="carousel-container">
                <div className="main-image">
                    <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
                </div>
                <div className="controls">
                    <button className="prev" onClick={prevSlide}>&lt;</button>
                    <button className="next" onClick={nextSlide}>&gt;</button>
                </div>
            </div>
        );
    };

    return (
        <div className='container'>
            <div className='title'>
                Create your own
            </div>

            <div className='tab'>
                <div className={`item ${isHomeOpen ? "active" : ""}`} onClick={handleHomeOpen}>Home</div>
                <div className={`item ${isAwayOpen ? "active" : ""}`} onClick={handleAwayOpen}>Away</div>
                <div className={`item ${isThirdOpen ? "active" : ""}`} onClick={handleThirdOpen}>Third</div>
            </div>
            <div className="inside-card">
                <div className="card">
                    {currentTab === "Home" && (
                        <>
                            <Carousel images={imagesHome} />
                            <NewTitle saxeli={maisuri[0].form1} color={maisuri[0].color1} sizes={HomeSizes} className="windowsize" />
                        </>
                    )}
                    {currentTab === "Away" && (
                        <>
                            <Carousel images={imagesAway} />
                            <NewTitle saxeli={maisuri[1].form2} color={maisuri[1].color2} sizes={AwaySizes} className="windowsize" />
                        </>
                    )}
                    {currentTab === "Third" && (
                        <>
                            <Carousel images={imagesThird} />
                            <NewTitle saxeli={maisuri[2].form3} color={maisuri[2].color3} sizes={ThirdSizes} className="windowsize" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
