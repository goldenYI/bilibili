import lodash from 'lodash';

/**
 * [positionFromEvent description]
 * @param  {InputRange} inputRange [React component]
 * @param  {event} event      [User event]
 * @return {position}            [Slider position]
 */
function positionFromEvent(inputRange, event) {
    const trackClientRect = inputRange.trackClientRect();
    const length = trackClientRect.width;
    const {clientX} = event.touches ? event.touches[0] : event;
    const position = {
        x: Math.min(Math.max(clientX - trackClientRect.left, 0), length),
        y: 0
    };
    return position;
};
function stepValueFromValue(inputRange, value) {
    return Math.round(value / inputRange.props.step) * inputRange.props.step;
}
/**
 * [percentageFromPosition description]
 * @param  {[type]} inputRange [description]
 * @param  {[type]} position   [description]
 * @return {[type]}            [description]
 */
function percentageFromPosition(inputRange, position) {
    if(inputRange.props.orient == 'horizontal') {
        const length = inputRange.trackClientRect().width;
        const sizePerc = position.x / length;
        return sizePerc || 0;
    } else {
        const length = inputRange.trackClientRect().height;
        const sizePerc = position.y / length;
        return sizePerc || 0;
    }
}

/**
 * [valueFromPosition description]
 * @param  {[type]} inputRange [description]
 * @param  {[type]} position   [description]
 * @return {[type]}            [description]
 */
function valueFromPosition(inputRange, position) {
    const sizePerc = percentageFromPosition(inputRange, position);
    const valueDiff = inputRange.props.maxValue - inputRange.props.minValue;
    let value = inputRange.props.minValue + valueDiff * sizePerc;
    value = stepValueFromValue(inputRange, value);
    return value;
}

/**
 * Extract values from props
 * @static
 * @param {InputRange} inputRange
 * @param {Point} [props=inputRange.props]
 * @return {Range} Range values
 */
function valuesFromProps(inputRange, { props } = inputRange) {

};


export default {
    positionFromEvent,
    valuesFromProps,
    valueFromPosition,
    stepValueFromValue
};
