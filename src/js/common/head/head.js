'use strict';

import React from 'react';
import styles from 'style/common/head/index.css'

class CommonHead extends React.Component {
    constructor(props) {
            super(props)
            // 定义 state
            this.state = {};

        }
        // 生命周期方法
    componentWillMount() {}
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.left}>logo</div>
                <div className={styles.middle}>search</div>
                <div className={styles.right}>user</div>
            </div>
        );
    }
}

export default CommonHead;
