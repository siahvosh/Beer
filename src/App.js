import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './App.css';
import {Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";

function App() {
    const bottles = ["orange", "blue", "red", 'green'];
    const texts = [
        {
            title: "Pure",
            label: "Beer",
            title2: "Pleasure",
            desc: "Where every sip becomes a moment to savor, indulging in a symphony of flavors that will leave a lasting impression.",
            color: '#F19F00'
        },
        {
            title: "Crafted",
            label: "For",
            title2: "Moments",
            desc: "Elevate your experiences with our thoughtfully crafted brews, tailored to create unforgettable memories.",
            color: '#00B4C1'
        },
        {
            title: "Indulge",
            label: "Enjoy",
            title2: "Repeat",
            desc: "Let Sunshine Craft Beer Transport You to a Realm of Taste and Pleasure",
            color: '#F91D00'
        },
        {
            title: "Tradition",
            label: "And",
            title2: "Innovation",
            desc: "Embrace the perfect blend of heritage and forward-thinking to savor unrivaled taste and craftsmanship.",
            color: '#4CD964'
        }
    ];
    const media = [
        {
            video: "/beer-video.mp4",
        },
        {
            video: "/blue-video.mp4",
            backgroundClass: "friends-img"

        },
        {
            video: "/red-video.mp4",
            backgroundClass: "burger-img"

        },
        {
            video: "/green-video.mp4",
            backgroundClass: "slide4-img"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [textAnimationClass, setTextAnimationClass] = useState("");



    useEffect(() => {
        const handleScroll = (e) => {
            if (isAnimating) return;

            if (e.deltaY > 0) {
                handleNext();
            } else if (e.deltaY < 0) {
                handlePrev();
            }
        };

        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [isAnimating, currentIndex]);


    const handleNext = () => {
        if (isAnimating || currentIndex >= bottles.length - 1) return;

        setIsAnimating(true);
        setAnimationDirection("up");
        setTextAnimationClass("text-exit-up");

        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setAnimationDirection("down");
            setTextAnimationClass("text-enter-bottom");

            setTimeout(() => {
                setIsAnimating(false);
            }, 200);
        }, 200);
    };
    const handlePrev = () => {
        if (isAnimating || currentIndex <= 0) return;

        setIsAnimating(true);
        setAnimationDirection("down-exit");
        setTextAnimationClass("text-exit-down");

        setTimeout(() => {
            setCurrentIndex((prev) => prev - 1);
            setAnimationDirection("up-enter");
            setTextAnimationClass("text-enter-top");

            setTimeout(() => {
                setIsAnimating(false);
            }, 200);
        }, 200);
    };

    return (
    <div className="App">
      <header className="App-header">
       <div className={'container'}>
           <Grid container spacing={1}>
               <Grid size={6}>
                   <img src='/beer-logo.png' alt={''} className={'logo'}/>
                   <div >
                       {media[currentIndex].video === '/beer-video.mp4' &&
                         (  < video
                           key={media[currentIndex].video}
                           src={media[currentIndex].video}
                           autoPlay
                           loop
                           muted
                           playsInline
                           className={'video'}
                           />)
                       }
                       <div className={`images ${media[currentIndex].backgroundClass}`} />
                   </div>
                   <div  className={'social-media'}>
                      <InstagramIcon fontSize={'large'}/>
                      <LinkedInIcon fontSize={'large'}/>
                      <GitHubIcon fontSize={'large'}/>
                   </div>
               </Grid>
               <Grid size={6}>
                   <div className={'developer-name'}>
                       <span style={{fontSize: 12, color: 'gray', fontWeight: 100}}>MADE WITH</span> <br/>
                       <span style={{fontSize: 35}}>MirZad</span>
                   </div>
                   <div className={'image-container'}>
                       <img
                           key={bottles[currentIndex]}
                           className={`img-animation ${bottles[currentIndex]} ${animationDirection} floating`}
                           src={`/${bottles[currentIndex]}-beer.png`}
                           alt={`${bottles[currentIndex]} beer`}
                       />
                   </div>
                   <div className={'text-container'}>
                       <div className={`text-animation ${textAnimationClass}`}>
                           <span>
                               {texts[currentIndex].title}
                           </span>
                           <span className={'label-font'} style={{color: `${texts[currentIndex].color}` }}>
                               {texts[currentIndex].label}
                           </span>
                           <span style={{ marginTop: '-3rem'}}>
                               {texts[currentIndex].title2}
                           </span>
                           <p style={{color: 'gray', marginTop: '1rem'}}>
                               {texts[currentIndex].desc}
                           </p>
                           <Button style={{ fontWeight: 500, background: `${texts[currentIndex].color}`, borderRadius: '14px', width: '200px', marginTop: '1rem', color: 'black' }}>
                               Learn More
                           </Button>
                       </div>
                   </div>
                   <div className={'slider-icon'}>
                      <KeyboardArrowUpIcon fontSize={'large'} onClick={handlePrev} style={{ cursor: 'pointer' }} />
                      <KeyboardArrowDownIcon fontSize={'large'} onClick={handleNext} style={{ cursor: 'pointer' }} />
                   </div>
               </Grid>
           </Grid>
       </div>
      </header>
    </div>
  );
}

export default App;
