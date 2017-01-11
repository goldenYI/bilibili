import React from 'react';

import assets from 'assets.js';

import styles from 'style/videoplayer/controls/play_button.css';

class VideoPlayButton extends React.Component {
    constructor(props) {
        super(props);
    }


    /**
    * As controls receive all props for extensibility, we do a quick
    * check and make sure only the props we care about have changed.
    * @param  {object} nextProps The next props from parent
    * @return {boolean}          Whether we re-render or not
    */

    shouldComponentUpdate(nextProps) {
        return this.props.paused !== nextProps.paused ||
              this.props.togglePlay !== nextProps.togglePlay;
    }
    render() {
        return(
            <button
                onClick={this.props.togglePlay}
                className={styles.playbutton}>
                {this.props.paused ? <img src={assets.play_button}/> : <img src={assets.pause_button}/>}
            </button>
        )
    }
}
VideoPlayButton.propTypes = {
   copyKeys: React.PropTypes.object,
   togglePlay: React.PropTypes.func,
   paused: React.PropTypes.bool
}

export default VideoPlayButton;
