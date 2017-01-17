/**
 * @module InputRange
 */
import cs from 'classnames'
import React from 'react';
import Slider from './Slider.js';
import valueTransformer from './valueTransformer.js';
import Track from './Track.js';
import {autobind} from 'components/common/util.js';
import styles from 'style/react-input-range/InputRange.css'
class InputRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue * (this.trackClientRect().width / (this.props.maxValue - this.props.minValue)),
        }
        // auto bind function
        autobind([
            'handleSliderMouseMove',
            'handleTrackMouseDown',
            'updatePosition',
            'componentDidMount',
            'trackMoveStartEventListener',
            'trackMoveEndEventListener'
        ],this);

    }
    componentDidMount() {
        // update default value
        this.setState({
            value: this.props.defaultValue * (this.trackClientRect().width / (this.props.maxValue - this.props.minValue))
        });
    }
    handleTrackMouseDown(event, track, position) {
        if (this.props.disabled) {
            return;
        }
        event.preventDefault();
        this.updatePosition(position);
    }


    /**
     * handle any mousemove received by the silder
     * @param {SyntheticEvent} event - User event
     * @param {Slider} Slider element(Object) - React component
     */
    handleSliderMouseMove(event, slider) {
        if (this.props.disabled) {
            return;
        }

        const position = valueTransformer.positionFromEvent(this, event);
        this.updatePosition(position);
    }
    /**
    * Update the position of a slider
    * @param {Point} position x/y
    */
    updatePosition(position) {
        const changeValue = valueTransformer.valueFromPosition(this, position);
        this.setState({
            value: changeValue * (this.trackClientRect().width / (this.props.maxValue - this.props.minValue))
        });
        this.props.onChange(changeValue);
    }
    /**
     * Return the clientRect of the component's track
     * @member {ClientRect}
     */
    trackClientRect() {
        const {track} = this.refs;
        if (track) {
            return track.clientRect;
        }
        return {height: 0, left: 0, top: 0, width: 0};
    }
    trackMoveStartEventListener() {
        const {slider} = this.refs;
        if (slider) {
            slider.handleMouseDown();
        }
    }
    trackMoveEndEventListener() {
        const {slider} = this.refs;
        if (slider) {
            slider.handleMouseUp();
        }
    }
    render() {
        return (
            <div className={cs(styles.container, this.props.className)}>
                <Track
                    trackMoveStartEventListener={this.trackMoveStartEventListener}
                    trackMoveEndEventListener={this.trackMoveEndEventListener}
                    style={this.props.trackStyles}
                    trackBackColor={this.props.trackBackColor}
                    trackChangeColor={this.props.trackChangeColor}
                    orient={this.props.orient}
                    ref="track"
                    positionValue={this.state.value}
                    onTrackMouseDown={this.handleTrackMouseDown}>
                    <Slider
                        ref='slider'
                        labelDisable={this.props.labelDisable}
                        buttonStyles={this.props.buttonStyles}
                        orient={this.props.orient}
                        buttonheight={this.props.buttonheight}
                        buttonwidth={this.props.buttonwidth}
                        buttonColor={this.props.buttonColor}
                        positionValue={this.state.value}
                        value={this.props.value}
                        onSliderMouseMove={this.handleSliderMouseMove}
                        />
                </Track>
            </div>


        );
    }
}
InputRange.defaultProps = {
    className: null,
    orient: 'horizontal',
    defaultValue: 0,
    disabled: false,
    buttonheight: '15px',
    buttonwidth: '15px',
    buttonColor: 'black',
    buttonStyles: null,
    trackStyles: null,
    labelDisable: false,
    trackBackColor: '#eeeeee',
    trackChangeColor: '#e03d3d',
    maxValue: 10,
    minValue: 0,
    step: 1,
    value: null
};

export default InputRange;
