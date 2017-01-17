import React from 'react';
import {autobind} from 'components/common/util.js';
import styles from 'style/react-input-range/Track.css';
class Track extends React.Component {
    constructor(props) {
        super(props);

        autobind([
            'handleMouseDown',
            'handleMouseUp'
        ], this);

    }
    /**
    * Handle any mousedown event received by the component
    * @param {SyntheticEvent} event - User event
    */
    handleMouseDown(event) {
        const trackClientRect = this.clientRect;
        const {clientX} = event.touches
            ? event.touches[0]
            : event;
        const position = {
            x: clientX - trackClientRect.left,
            y: 0
        };
        this.props.onTrackMouseDown(event, this, position);
        this.props.trackMoveStartEventListener();
    }
    handleMouseUp(event) {
        this.props.trackMoveEndEventListener();
    }
    /**
    * Return the clientRect of the component
    * @member {ClientRect}
    */
    get clientRect() {
       const {track} = this.refs;
       const clientRect = track.getBoundingClientRect();
       return clientRect;
    }

    render() {
        return(
            <div
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                ref="track"
                className={styles.container}>

                <div
                    className={styles.track}
                    style={{
                        width: this.props.positionValue + 'px',
                        backgroundColor: this.props.trackChangeColor,
                        ...this.props.style
                    }}></div>
                <div
                    className={styles.backtrack}
                    style={{backgroundColor:this.props.trackBackColor}}></div>
                {this.props.children}
            </div>
        );
    }
}

export default Track;
