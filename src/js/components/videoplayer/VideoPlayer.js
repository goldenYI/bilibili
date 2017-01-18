import React from 'react';
import styles from 'style/videoplayer/index.css';
import {
    default as Video,
    Controls,
    Overlay
} from './video/Video.js'


class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Video
                src={this.props.src}
                controls autoPlay loop muted>
            </Video>
        );
    }
}

export default VideoPlayer;
