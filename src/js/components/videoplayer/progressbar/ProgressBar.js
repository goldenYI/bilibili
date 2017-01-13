import React from 'react';
import InputRange from 'components/react-input-range/InputRange.js';
import styles from 'style/videoplayer/progressbar/index.css';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultProps() {
        return {
            orientation: 'horizontal',
            step: 0.1,
            progress: 0,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
        };
    }
    componentDidMount() {
        // 'orient' is not supported by React but
        // is required for Firefox. Setting manually.
        // https://github.com/facebook/react/issues/2453
        this.refs.input.setAttribute('orient', this.props.orientation);
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

    render() {
        return (
            <div className={styles.container}>
                <InputRange />
            </div>

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
