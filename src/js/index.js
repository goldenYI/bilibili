'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CommonHead from 'js/common/head/head.js';
import 'style/common/index.css'

class Index extends React.Component {
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

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
