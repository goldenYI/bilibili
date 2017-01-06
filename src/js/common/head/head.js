import React from 'react';
import 'style/common/head/index.less';

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
            <h1 >hello world</h1>
        );
    }

}

export default CommonHead;
