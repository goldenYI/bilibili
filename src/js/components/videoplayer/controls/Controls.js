import React from 'react';
import cs from 'classnames';
import VideoPlayButton from './video_playbutton/VideoPlayButton.js';
import ProgressBar from './progressbar/ProgressBar.js';
import InputRange from 'components/react-input-range/InputRange.js';

import styles from 'style/videoplayer/controls/index.css';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputRangeValue: 0,
        }
    }
    handleInputRangeChange(changeValue) {
        this.setState({
            inputRangeValue: changeValue
        });
    }
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.divleft}></div>
                <div className={cs(styles.controlsField, this.props.className)}>
                    <ProgressBar className={styles.progressbar}/>
                    <VideoPlayButton
                        paused={this.props.paused}
                        togglePlay={this.props.togglePlay}/>
                    <InputRange
                        className={styles.inputRange}
                        defaultValue={5}
                        disabled={false}
                        buttonColor={'#5caf9e'}
                        buttonwidth={'8px'}
                        buttonStyles={{
                            borderRadius: '10%',
                        }}
                        labelDisable={true}
                        value={this.state.inputRangeValue}
                        onChange={this.handleInputRangeChange.bind(this)}/>
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
