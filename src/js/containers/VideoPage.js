import React from 'react';
import VideoPlayer from 'components/videoplayer/VideoPlayer';
import {autobind} from 'components/common/util';
import cs from 'classnames'
import styles from 'style/containers/videoPage.css';
import assets from 'assets';
class VideoPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            marginTop: 0,
            isWheelChange: false
        };
        autobind([
            'handleWheel'
        ], this);
    }
    /**
    * Return the clientRect of the component
    * @member {ClientRect}
    */
    get clientRect() {
       const {rightContainer} = this.refs;
       const clientRect = rightContainer.getBoundingClientRect();
       return clientRect;
    }
    handleWheel(event) {

        if(event.deltaY > 0 && !this.state.isWheelChange) {
            this.setState({
                marginTop: -(this.clientRect.height),
                isWheelChange: true
            });
        }
        if(event.deltaY < 0 && this.state.isWheelChange) {
            this.setState({
                marginTop: 0,
                isWheelChange: false
            });
        }

    }
    numberFormat(number) {
        return number.toString().replace(/\d(?=(?:\d{3})+\b)/g,'$&,');
    }
    render() {
        return(
            <div
                onWheel={this.handleWheel}
                className={styles.container} >
                <div className={styles.templeft}></div>
                <div
                    ref="rightContainer"
                    className={styles.tempright}>
                    <div
                        style={{marginTop: this.state.marginTop}}
                        className={styles.playerField}>
                        <VideoPlayer src={'http://www.bilibilijj.com/FreeDown/DownLoad/1484744830/mp4/12994573.2F2E74C00AC9084A84F59763A30C95C3'}/>
                    </div>
                    <div className={styles.videoInfo}>
                        <div className={styles.head}>
                            <div className={styles.title}>Brandy - I Wanna Be Down (Grades Remix)</div>
                            <div className={styles.videocount}>{this.numberFormat(9832471)}</div>
                        </div>
                        <div className={styles.videouserinfo}>
                            <img className={styles.userImg} src={assets.logo} />
                            <div className={styles.username}>Casual</div>
                        </div>
                        <div className={styles.videoshare}>
                            <div className={styles.selectbutton}>
                                <ul>
                                    <li>About</li>
                                    <li>Share</li>
                                    <li>More</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPage;
