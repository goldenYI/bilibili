import React from 'react';
import styles from 'style/react-input-range/Label.css';
class Label extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div
                className={styles.container}
                style={{...this.props.style}}>
                {this.props.value}
            </div>
        );
    }
}

export default Label;
