/**
 * @module InputRange
 */

import React from 'react';
import Slider from './Slider.js';
class InputRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Slider />
        );
    }
}

export default InputRange;
