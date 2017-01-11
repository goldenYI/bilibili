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
            <div className={styles.container} >
                <div className={styles.templeft}></div>
                <div className={styles.tempright}>
                    <div className={styles.playerField}>
                        <Video
                            src='http://www.bilibilijj.com/FreeDown/DownLoad/1484138094/mp4/12580318.79A806DDD175534C9360F84D9CAF2F1D'
                            controls autoPlay loop muted>
                        </Video>
                    </div>
                </div>
            </div>

        );
    }
}

export default VideoPlayer;
