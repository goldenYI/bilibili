import React from 'react';
import VideoPlayButton from './video_playbutton/VideoPlayButton.js';
import ProgressBar from './../progressbar/ProgressBar.js';


import styles from 'style/videoplayer/video/index.css';

class Controls extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div
                className={styles.container}>
                <div className={styles.divleft}></div>
                <div className={styles.controlsField}>
                    <VideoPlayButton
                        paused={this.props.paused}
                        togglePlay={this.props.togglePlay}/>
                    
                </div>
                <div className={styles.divright}></div>
            </div>
        );
    }
}

Controls.propTypes = {
    paused: React.PropTypes.bool,
    togglePlay: React.PropTypes.func,
}

export default Controls;
