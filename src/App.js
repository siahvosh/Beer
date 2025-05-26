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
            label: "beer",
            title2: "Pleasure",
            desc: "Discover your new favorite beer, where every sip becomes a moment to savor, indulging in a symphony of flavors that will leave a lasting impression.",
            color: '#F19F00'
        },
        {
            title: "Crafted",
            label: "for",
            title2: "Moments",
            desc: "Elevate your experiences with our thoughtfully crafted brews, tailored to create unforgettable memories.",
            color: '#00B4C1'
        },
        {
            title: "Indulge",
            label: "enjoy",
            title2: "Repeat",
            desc: "Let Sunshine Craft Beer Transport You to a Realm of Taste and Pleasure",
            color: '#F91D00'
        },
        {
            title: "Tradition",
            label: "and",
            title2: "Innovation",
            desc: "Embrace the perfect blend of heritage and forward-thinking to savor unrivaled taste and craftsmanship.",
            color: '#4CD964'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(""); // "up" | "down"
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
           <div className={'labels'}>
               <span style={{fontSize: 44, zIndex: '1',  position: 'absolute', left: '2.5rem', fontWeight: 800}}>Sunshine</span> <br/>
               <span style={{fontSize: 12, zIndex: '1',  position: 'absolute', left: '9rem', top: '3rem'}}>CRAFT BEER</span>
               <span style={{fontSize: 12, zIndex: '1', position: 'absolute', right: '2.5rem', top: '1.5rem', color: 'gray', fontWeight: 800}}>MADE WITH</span> <br/>
               <span style={{fontSize: 25, zIndex: '1', position: 'absolute', right: '2.5rem', top: '2.4rem'}}>MirZad</span>
               <div style={{position: 'absolute', zIndex: '1', bottom: '2.5rem', left: '2.5rem', display: 'flex', gap: 10}}>
                   <InstagramIcon fontSize={'large'}/>
                   <LinkedInIcon fontSize={'large'}/>
                   <GitHubIcon fontSize={'large'}/>
               </div>
               <div style={{ position: 'absolute', zIndex: '1', bottom: '2.5rem', right: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                   <KeyboardArrowUpIcon fontSize={'large'} onClick={handlePrev} style={{ cursor: 'pointer' }} />
                   <KeyboardArrowDownIcon fontSize={'large'} onClick={handleNext} style={{ cursor: 'pointer' }} />
               </div>
           </div>
           <Grid container spacing={1}>
               <Grid size={6}>
                   <div>
                       <video
                           src="/beer-video.mp4"
                           autoPlay
                           loop
                           muted
                           playsInline
                           // width={1000}
                           style={{
                               position: 'absolute',
                               top: 0,
                               left: 0,
                               width: '50%',
                               height: '100%',
                               objectFit: 'cover',
                           }}
                       />
                   </div>
               </Grid>
               <Grid size={6}>
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
                           <span style={{ fontSize: '5rem', fontWeight: 800 }}>{texts[currentIndex].title}</span>
                           <span className={'label-font'} style={{color: `${texts[currentIndex].color}` }}>{texts[currentIndex].label}</span>
                           <span style={{ fontSize: '5rem', fontWeight: 800,}}>{texts[currentIndex].title2}</span>
                           <p style={{ marginTop: '1rem', fontWeight: 300 }}>{texts[currentIndex].desc}</p>
                           <Button style={{ fontWeight: 700, background: `${texts[currentIndex].color}`, borderRadius: '14px', width: '200px', marginTop: '1rem', color: 'black' }}>
                               Learn More
                           </Button>
                       </div>
                   </div>
               </Grid>
           </Grid>
       </div>
      </header>
    </div>
  );
}

export default App;
