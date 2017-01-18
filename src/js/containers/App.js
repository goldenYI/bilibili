'use strict';

import React from 'react';
import CommonHead from 'components/common/head/Head.js';
import VideoPage from 'containers/VideoPage.js';

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
                <VideoPage />


            </div>
        );
    }
}

export default App;
