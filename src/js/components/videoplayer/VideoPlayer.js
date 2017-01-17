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
                            src='http://www.bilibilijj.com/FreeDown/DownLoad/1484575494/mp4/12994573.3E58501038C1E6A5A96BEE33471964A1'
                            controls autoPlay loop muted>
                        </Video>
                    </div>
                </div>
            </div>

        );
    }
}

export default VideoPlayer;
