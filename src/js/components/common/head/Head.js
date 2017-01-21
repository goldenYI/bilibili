'use strict';

import React from 'react';
import styles from 'style/common/head/index.css';
import assets from 'assets';
import GooeyMenu from 'components/common/gooeyMenu/gooeyMenu';
import {autobind} from 'components/common/util.js';

class CommonHead extends React.Component {
    constructor(props) {
        super(props);
        // 定义 state
        this.state = {};
        autobind([
            'handleGooeyMenuClick'
        ],this);
    }

    // 生命周期方法
    componentWillMount() {}
    componentDidMount() {}
    componentWillUnmount() {}
    onClickSubmit() {

    }
    handleGooeyMenuClick() {
        this.refs.GooeyMenu.handleClick();
        console.log(this.refs.GooeyMenu);
    }
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.left}>
                    <img
                        className={styles.logoImg}
                        src={require('assets/common/logo.png')} />
                </div>
                <div className={styles.middle}>
                    <form
                        action=""
                        method="post"
                        id="searchForm"
                        className={styles.formFiled} >
				        <div className={styles.inputFiled} >
					        <input
                                className={styles.searchField}
                                type="text"
                                placeholder="Type to search..."
                                name="search" />
					        <img
                                className={styles.searchImg}
                                src={assets.searchSvg}
                                onClick={this.onClickSubmit()} />
				        </div>
			        </form>
                    <div className={styles.fillField}></div>
                </div>

                <div className={styles.right}>
                    <GooeyMenu ref='GooeyMenu'/>
                    <img
                        onClick={this.handleGooeyMenuClick}
                        className={styles.userImg} src={assets.logo} />
                </div>
            </div>
        );
    }
}

export default CommonHead;
