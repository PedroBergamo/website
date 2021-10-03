
import React from 'react';
import Hero from './Hero.js';
import ImageGrid from './ImageGrid.js';
import MusicPlayer from './MusicPlayer.js';
import VideoPlayer from './VideoPlayer.js';
import SocialMedia from './SocialMedia.js';
import Projects from './Projects.js';
import About from './About.js';
import Newsletter from './Newsletter'
const style = {
    height: 'auto',
    position: 'relative'
};

export default class Container extends React.Component {

    render(){

        return (

            <div className="container-fluid main" style={style}>
                <Hero/>
                <MusicPlayer/>
                <VideoPlayer/>
                <About/>
                <SocialMedia/>
                <ImageGrid/>
                <Projects/>
                <Newsletter />
            </div>
        );
    }
}
