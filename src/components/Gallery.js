import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

import slika1 from '../assets/Izvanredni prijevoz/1.jpg'
import slika2 from '../assets/Izvanredni prijevoz/3.jpg'
import slika3 from '../assets/Izvanredni prijevoz/5.jpg'
import slika4 from '../assets/Izvanredni prijevoz/6.jpg'
import slika5 from '../assets/Izvanredni prijevoz/7.jpg'
import slika6 from '../assets/Radovi na izgradnji proizvodne hale u Lekeniku/3.jpg'
import slika7 from '../assets/Radovi na izgradnji proizvodne hale u Lekeniku/6.jpg'
import slika8 from '../assets/Radovi na izgradnji proizvodne hale u Lekeniku/7.jpg'
import slika9 from '../assets/Radovi na izgradnji proizvodne hale u Lekeniku/9.jpg'
import slika10 from '../assets/Radovi na izgradnji proizvodne hale u Lekeniku/10.jpg'


const images = [
    { src: slika1, alt: "Izvanredni prijevoz" },
    { src: slika2, alt: "Izvanredni prijevoz" },
    { src: slika3, alt: "Izvanredni prijevoz" },
    { src: slika4, alt: "Izvanredni prijevoz" },
    { src: slika5, alt: "Izvanredni prijevoz" },
    { src: slika6, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika7, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika8, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika9, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika10, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img class="gallery-img" alt={image.alt} src={image.src} />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
}