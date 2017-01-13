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
                            src='http://www.bilibilijj.com/FreeDown/DownLoad/1484151127/mp4/12994573.5CBA8A4588626537F875DCBB4D2088F5'
                            controls autoPlay loop muted>
                        </Video>
                    </div>
                </div>
            </div>

        );
    }
}

export default VideoPlayer;
