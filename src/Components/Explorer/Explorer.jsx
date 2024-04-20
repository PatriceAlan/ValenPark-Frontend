import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Explorer.css';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import Navbar from '../Navbar/Navbar';

const explorer = () => {
    return (
        <div className="explorer-carousel">
            <Navbar />
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={image6} alt="Premiere Slide" />
                    <Carousel.Caption>
                        <h3>Titre de la premiere slide</h3>
                        <p>Description de la premiere slide</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img src={image7} alt="Deuxieme Slide" />
                    <Carousel.Caption>
                        <h3>Titre de la deuxieme slide</h3>
                        <p>Description de la deuxieme slide</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img src={image8} alt="Troisieme Slide" />
                    <Carousel.Caption>
                        <h3>Titre de la troisieme slide</h3>
                        <p>Description de la troisieme slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default explorer;