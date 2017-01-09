'use strict';

import React from 'react';
import CommonHead from 'components/common/head/Head.js';

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
            <div>
                <CommonHead />
            </div>
        );
    }
}

export default App;
