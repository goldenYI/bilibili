'use strict';

import React from 'react';
import style from 'style/common/head/index.css'
class CommonHead extends React.Component {
    constructor(props) {
        super(props)
        // 定义 state
        this.state = {};
        console.log(style.haha);
    }
    // 生命周期方法
    componentWillMount() {}
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return(
            <h1 className={style.haha}>hello world</h1>
        );
    }
}

export default CommonHead;
