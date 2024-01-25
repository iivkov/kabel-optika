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
import slika11 from '../assets/Radovi na izgradnji nasipa u Petrinji/2.jpg'
import slika12 from '../assets/Radovi na izgradnji nasipa u Petrinji/4.jpg'
import slika13 from '../assets/Radovi na izgradnji nasipa u Petrinji/5.jpg'
import slika14 from '../assets/Radovi na izgradnji nasipa u Petrinji/7.jpg'
import slika15 from '../assets/Radovi na izgradnji nasipa u Petrinji/9.jpg'
import slika16 from '../assets/Radovi na izgradnji nasipa u Petrinji/13.jpg'
import slika17 from '../assets/Radovi na izgradnji nasipa u Petrinji/15.jpg'
import slika18 from '../assets/Radovi na izgradnji Retail parka PIGIK Petrinja/3.jpg'
import slika19 from '../assets/Radovi na izgradnji Retail parka PIGIK Petrinja/8.jpg'
import slika20 from '../assets/Radovi na izgradnji Retail parka PIGIK Petrinja/10.jpg'
import slika21 from '../assets/Radovi na izgradnji Retail parka PIGIK Petrinja/12.jpg'
import slika22 from '../assets/Radovi na izgradnji stambenog objekta/1.jpg'
import slika23 from '../assets/Radovi na izgradnji stambenog objekta/2.jpg'
import slika24 from '../assets/Radovi na izgradnji stambenog objekta/4.jpg'
import slika25 from '../assets/Radovi na revitalizaciji vrelovodne mreže/2.jpg'
import slika26 from '../assets/Radovi na revitalizaciji vrelovodne mreže/3.jpg'
import slika27 from '../assets/Radovi na revitalizaciji vrelovodne mreže/5.jpg'
import slika28 from '../assets/Radovi na revitalizaciji vrelovodne mreže/7.jpg'
import slika29 from '../assets/Radovi na revitalizaciji vrelovodne mreže/8.jpg'
import slika30 from '../assets/Sanacija naftovoda/1.jpg'
import slika31 from '../assets/Sanacija naftovoda/2.jpg'
import slika32 from '../assets/Sanacija naftovoda/3.jpg'
import slika33 from '../assets/Sanacija naftovoda/4.jpg'
import slika34 from '../assets/Sanacija naftovoda/7.jpg'
import slika35 from '../assets/Sanacija naftovoda/9.jpg'
import slika36 from '../assets/Sanacija naftovoda/12.jpg'
import slika37 from '../assets/Sanacija naftovoda/13.jpg'
import slika38 from '../assets/Sanacija naftovoda/15.jpg'
import slika39 from '../assets/Uklanjanje objekata stradalih u potresu/2.jpg'
import slika40 from '../assets/Uklanjanje objekata stradalih u potresu/3.jpg'
import slika41 from '../assets/Uklanjanje objekata stradalih u potresu/5.jpg'
import slika42 from '../assets/Uklanjanje objekata stradalih u potresu/7.jpg'
import slika43 from '../assets/Uklanjanje objekata stradalih u potresu/10.jpg'


const images = [
    { src: slika1, alt: "Izvanredni prijevoz" },
    // { src: slika2, alt: "Izvanredni prijevoz" },
    { src: slika3, alt: "Izvanredni prijevoz" },
    { src: slika4, alt: "Izvanredni prijevoz" },
    { src: slika5, alt: "Izvanredni prijevoz" },
    { src: slika6, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika7, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika8, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika9, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika10, alt: "Radovi na izgradnji proizvodne hale u Lekeniku" },
    { src: slika11, alt: "Radovi na izgradnji nasipa u Petrinji"},
    // { src: slika12, alt: "Radovi na izgradnji nasipa u Petrinji"},
    // { src: slika13, alt: "Radovi na izgradnji nasipa u Petrinji"},
    { src: slika14, alt: "Radovi na izgradnji nasipa u Petrinji"},
    // { src: slika15, alt: "Radovi na izgradnji nasipa u Petrinji"},
    { src: slika16, alt: "Radovi na izgradnji nasipa u Petrinji"},
    { src: slika17, alt: "Radovi na izgradnji nasipa u Petrinji"},
    { src: slika18, alt: "Radovi na izgradnji Retail parka PIGIK Petrinja"},
    { src: slika19, alt: "Radovi na izgradnji Retail parka PIGIK Petrinja"},
    { src: slika20, alt: "Radovi na izgradnji Retail parka PIGIK Petrinja"},
    { src: slika21, alt: "Radovi na izgradnji Retail parka PIGIK Petrinja"},
    { src: slika22, alt: "Radovi na izgradnji stambenog objekta"},
    // { src: slika23, alt: "Radovi na izgradnji stambenog objekta"},
    { src: slika24, alt: "Radovi na izgradnji stambenog objekta"},
    { src: slika25, alt: "Radovi na revitalizaciji vrelovodne mreže"},
    { src: slika26, alt: "Radovi na revitalizaciji vrelovodne mreže"},
    { src: slika27, alt: "Radovi na revitalizaciji vrelovodne mreže"},
    { src: slika28, alt: "Radovi na revitalizaciji vrelovodne mreže"},
    { src: slika29, alt: "Radovi na revitalizaciji vrelovodne mreže"},
    { src: slika30, alt: "Sanacija naftovoda"},
    { src: slika31, alt: "Sanacija naftovoda"},
    { src: slika32, alt: "Sanacija naftovoda"},
    { src: slika33, alt: "Sanacija naftovoda"},
    { src: slika34, alt: "Sanacija naftovoda"},
    // { src: slika35, alt: "Sanacija naftovoda"},
    { src: slika36, alt: "Sanacija naftovoda"},
    { src: slika37, alt: "Sanacija naftovoda"},
    { src: slika38, alt: "Sanacija naftovoda"},
    { src: slika39, alt: "Uklanjanje objekata stradalih u potresu"},
    { src: slika40, alt: "Uklanjanje objekata stradalih u potresu"},
    // { src: slika41, alt: "Uklanjanje objekata stradalih u potresu"},
    { src: slika42, alt: "Uklanjanje objekata stradalih u potresu"},
    // { src: slika43, alt: "Uklanjanje objekata stradalih u potresu"}

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