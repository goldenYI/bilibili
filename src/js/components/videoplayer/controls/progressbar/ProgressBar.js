import React from 'react';
import InputRange from 'components/react-input-range/InputRange.js';
import styles from 'style/videoplayer/controls/progressbar.css';
import {autobind} from 'components/common/util.js';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputRangeValue: 0,
        };
        // auto bind function
        autobind([
            'onChange',
            'onBlur',
            'onFocus',
            'handleInputRangeChange'
        ], this);
    }
    componentDidMount() {

    }

    onChange() {
        // Placeholder
    }

    onFocus() {
        // Placeholder
    }

    onBlur() {
        // Placeholder
    }
    handleInputRangeChange(changeValue) {
        this.setState({
            inputRangeValue: changeValue
        });
    }
    render() {
        return (
            <InputRange
                className={this.props.className}
                defaultValue={0}
                disabled={false}
                buttonColor={'#5caf9e'}
                buttonwidth={0}
                maxValue={100}
                minValue={0}
                buttonStyles={{
                    borderRadius: '10%',
                }}
                labelDisable={true}
                value={this.state.inputRangeValue}
                onChange={this.handleInputRangeChange} />
        );
    }
}

ProgressBar.propTypes = {
    orientation: React.PropTypes.string,
    step: React.PropTypes.number,
    progress: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
}

export default ProgressBar;
