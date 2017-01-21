import React from 'react';
import assets from 'assets';
import {autobind} from 'components/common/util.js';
import styles from 'style/common/gooeyMenu/gooeyMenu.css';
class GooeyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            margin: 0,
            isbuttonclick: false,
        };
        autobind([
            'handleClick',
            'setRefFromProps'
        ],this);
    }
    setRefFromProps() {

    }
    handleClick() {


    }
    handleGooeyMenuClick() {
        if(!this.state.isbuttonclick) {
            this.setState({
                margin: 50,
                isbuttonclick: true
            });
        }
        if(this.state.isbuttonclick) {
            this.setState({
                margin: 0,
                isbuttonclick: false
            });
        }
    }
    renderButton() {
        let content = Array(this.props.buttonNum);
        let counter = this.props.buttonNum + 1;
        while (--counter) {
            content.push(
                <div
                    onClick={this.handleClick}
                    key={'menuButton_'+counter}
                    ref={'menuButton_'+counter}
                    className={styles.selectButton}
                    style={{
                        marginRight: this.state.margin*counter+'px',
                        backgroundColor: eval('this.props.buttonColor_'+counter)
                    }}>
                    <img src={eval('this.props.buttonSvg_'+counter)}/>
                </div>
            );
        }
        return content;
    }
    render() {
        return(
            <div
                className={styles.menu}>
                {this.renderButton()}
                <svg
                    style={{height: 0, width: 0}}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
                            <feBlend in2="goo" in="SourceGraphic" result="mix" />
                        </filter>
                    </defs>
                </svg>
            </div>
        );
    }
}

GooeyMenu.defaultProps = {
    buttonNum: 3,
    buttonSvg: assets.searchSvg,
    buttonSvg_1: assets.settting_button,
    buttonSvg_2: assets.multiple_users_silhouette,
    buttonSvg_3: assets.chat_button,
    buttonColor_1: '#329ee4',
    buttonColor_2: '#0db4a7',
    buttonColor_3: '#f28f1c',
}



export default GooeyMenu;
