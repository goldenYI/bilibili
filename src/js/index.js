import React from 'react';
import ReactDOM from 'react-dom';
import CommonHead from 'js/common/head/head.js';

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
            <CommonHead />
        );
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
