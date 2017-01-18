import React from 'react';
import VideoPlayer from 'components/videoplayer/VideoPlayer.js';

import styles from 'style/containers/videoPage.css';

class VideoPage extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className={styles.container} >
                <div className={styles.templeft}></div>
                <div className={styles.tempright}>
                    <div className={styles.playerField}>
                        <VideoPlayer src={'http://www.bilibilijj.com/FreeDown/DownLoad/1484744830/mp4/12994573.2F2E74C00AC9084A84F59763A30C95C3'}/>
                    </div>
                    <p>Brandy - I Wanna Be Down (Grades Remix)</p>
                </div>
            </div>
        );
    }
}

export default VideoPage;
