import React from 'react';

import styles from 'style/videoplayer/controls/overlay.css';
import assets from 'assets.js';
class Overlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={styles.container}>
                <div onClick={this.props.togglePlay}
                    className={styles.overlayPauseField}>
                    <img src={assets.pause_button}/>
                </div>
            </div>
        );
    }
}

export default Overlay;
