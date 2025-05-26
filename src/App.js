import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';
import {Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className={'container'}>
          <div style={{position: 'absolute', zIndex: '1', padding: '1.8rem 0 0 2.5rem'}}>
              <span style={{fontSize: 44, fontWeight: 800}}>Sunshine</span> <br/>
              <span style={{fontSize: 12, position: 'absolute', margin: '-10px 0 0 15px'}}>CRAFT BEER</span>
          </div>
          <Grid container>
             <Grid style={{ height: '100vh'}} size={6}>
                 <video
                     src="/beer-video.mp4"
                     autoPlay
                     loop
                     muted
                     playsInline
                     width={1000}
                     style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         width: '50%',
                         height: '100%',
                         objectFit: 'cover',
                     }}
                 />
             </Grid>
             <Grid style={{}} size={6}> 2</Grid>
          </Grid>
          <div style={{position: 'absolute', zIndex: '1', bottom: '2.5rem', left: '2.5rem', display: 'flex', gap: 10}}>
            <InstagramIcon fontSize={'large'}/>
            <LinkedInIcon fontSize={'large'}/>
            <GitHubIcon fontSize={'large'}/>
          </div>
       </div>
      </header>
    </div>
  );
}

export default App;
