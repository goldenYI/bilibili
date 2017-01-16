import React from 'react';
import {autobind} from 'components/common/util.js';
import Label from './Label.js';
import styles from 'style/react-input-range/Slider.css';
class Slider extends React.Component {
    constructor(props) {
        super(props);
        // Auto-bind
        autobind([
            'handleClick',
            'handleMouseDown',
            'handleMouseUp',
            'handleMouseMove',
        ], this);
    }
    /**
     * label value update
     * @param {ref} ref - Label's ref
     */
    outputUpdate() {
        this.refs.volume.value = this.refs.fader.value;
    }
    /**
    * Handle any click event received by the component
    * @param {SyntheticEvent} event - User event
    */
    handleClick(event) {
        //prevent any default event
        event.preventDefault();
    }
    /**
    * handle any mousemove event received by the component
    * @param {SyntheticEvent} event - User event
    */
    handleMouseMove(event) {
        // use props event
        this.props.onSliderMouseMove(event, this);
    }
    /**
     * handle any mouseup event received by the component
     * @param {SyntheticEvent} event - User event
     */
    handleMouseUp(event) {
        // remove EventListener
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }


    /**
    * handle any mousedown event received by the component
    * @param {SyntheticEvent} event - user event
    */
    handleMouseDown(event) {
        // add EventListener
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }
    /**
    * Render method of the component
    * @return {string} Component JSX
    */
    render() {
        return(
            <span
                className={styles.container}
                style={{
                    left:this.props.positionValue+'px',
                    position: 'absolute',
                    marginLeft: '-' + this.props.buttonwidth,
                    width:this.props.buttonwidth,
                    height:this.props.buttonheight
                }}>
                <Label
                    style={{
                        marginTop: '-' + this.props.buttonheight,
                        display: this.props.labelDisable ? 'none' : 'inline'
                    }}
                    value={this.props.value}/>
                <a
                    className={styles.slider}
                    style={{
                        ...this.props.buttonStyles,
                        backgroundColor: this.props.buttonColor,
                        width:this.props.buttonwidth,
                        height:this.props.buttonheight,
                    }}
                    type="range"
                    id="fader"
                    ref="fader"
                    min="1"
                    max="100"
                    step="1"
                    aria-valuemin="1"
                    aria-valuemax="100"
                    aria-valuenow="20"
                    onClick={this.handleClick}
                    onMouseDown={this.handleMouseDown}/>

            </span>
        );
    }
}


export default Slider;
