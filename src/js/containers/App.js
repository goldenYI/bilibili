'use strict';

import React from 'react';
import CommonHead from 'components/common/head/Head.js';
import VideoPlayer from 'components/videoplayer/VideoPlayer.js';

import 'style/common/index.css'
import styles from 'style/containers/app.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        // 定义 state
        this.state = {};
    }
    // 生命周期方法
    componentWillMount() {}
    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        return(
            <div className={styles.container} >
                <div className={styles.apphead} ><CommonHead /></div>
                <div className={styles.appbody} ><VideoPlayer /></div>


            </div>
        );
    }
}

export default App;
