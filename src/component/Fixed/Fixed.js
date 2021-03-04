import React from 'react';
import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player';
import './Fixed.css';
import tracks from '../../assets/tracks';

const AudioPlayer = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
    <div className="fixed container">
        <div className="controls">
            <i className="fa fa-step-backward" onClick={prev} />
            <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} onClick={play} />
            <i className="fa fa-stop" onClick={stop} />
            <i className="fa fa-step-forward" onClick={next} />
        </div>
        <TitleMarquee className="marquee" duration={20} />
        <TimeSlider className="time-slider" />
        <div className="time">{timeElapsed}</div>
    </div>
);

export default connectAudioPlayer(AudioPlayer, tracks);