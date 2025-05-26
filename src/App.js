import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './App.css';
import {Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className={'container'}>
           <div className={'labels'}>
               <span style={{fontSize: 44, zIndex: '1',  position: 'absolute', left: '2.5rem', fontWeight: 800}}>Sunshine</span> <br/>
               <span style={{fontSize: 12, zIndex: '1',  position: 'absolute', left: '9rem', top: '3rem'}}>CRAFT BEER</span>
               <span style={{fontSize: 14, zIndex: '1', position: 'absolute', right: '2.5rem', top: '1.5rem', color: 'gray', fontWeight: 800}}>MADE WITH</span> <br/>
               <span style={{fontSize: 25, zIndex: '1', position: 'absolute', right: '2.5rem', top: '2.3rem'}}>Siavash Mir</span>
               <div style={{position: 'absolute', zIndex: '1', bottom: '2.5rem', left: '2.5rem', display: 'flex', gap: 10}}>
                   <InstagramIcon fontSize={'large'}/>
                   <LinkedInIcon fontSize={'large'}/>
                   <GitHubIcon fontSize={'large'}/>
               </div>
               <div style={{position: 'absolute', zIndex: '1', bottom: '2.5rem', right: '2.5rem'}}>
                   <KeyboardArrowUpIcon fontSize={'large'}/>
                   <KeyboardArrowDownIcon fontSize={'large'}/>
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
                   <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                       <img className={'img-animation'} src="/orange-beer.png" alt=""/>
                   </div>
                   <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                       <img className={'img-animation'} src="/blue-beer.png" alt=""/>
                   </div>
                   <div style={{marginTop: '20rem'}}>Lorem ipsum dolor sit amet,o.</div>
                   <div>Lorem ipsumdset,o.</div>
                   <div>Lorem ipsumsad amet,o.</div>
                   <div>sdfsd Lorem ipsumdset,o.</div>

               </Grid>
           </Grid>



       </div>
      </header>
    </div>
  );
}

export default App;
