import React from 'react';
import Controls from './../controls/Controls';
import throttle from 'lodash';
import Overlay from './../controls/overlay/Overlay';
import styles from 'style/videoplayer/video/index.css';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Set state from props and always use these
            // to check state of video as they will update
            // on the video events. Changing this state however will not
            // change the video. The API methods must be used.
            networkState: 0,
            paused: true,
            muted: !!this.props.muted,
            volume: 1,
            playbackRate: 1,
            error: false,
            loading: false,
            focused: false,

        };
        this.EVENTS = [
            'onAbort',
            'onCanPlay',
            'onCanPlayThrough',
            'onDurationChange',
            'onEmptied',
            'onEncrypted',
            'onEnded',
            'onError',
            'onLoadedData',
            'onLoadedMetadata',
            'onLoadStart',
            'onPause',
            'onPlay',
            'onPlaying',
            'onProgress',
            'onRateChange',
            'onSeeked',
            'onSeeking',
            'onStalled',
            'onSuspend',
            'onTimeUpdate',
            'onVolumeChange',
            'onWaiting'
        ];
    }
    /**
     * Creates a throttle update method.
     * @return {undefined}
     */
    componentWillMount() {
        this._updateStateFromVideo = throttle(this.updateStateFromVideo, 100);
        // Set up all React media events and call method
        // on props if provided.
        this.mediaEventProps = this.EVENTS.reduce((p, c) => {
            p[c] = (e) => {
                if (c in this.props && typeof this.props[c] === 'function') {
                    // A prop exists for this mediaEvent, call it.
                    this.props[c](e);
                }
                this._updateStateFromVideo();
            };
            return p;
        }, {});
    }

    /**
     * Bind eventlisteners not supported by React's synthetic events
     * https://facebook.github.io/react/docs/events.html
     * @return {undefined}
     */
    componentDidMount() {
        // Listen to error of last source.
        //this.videoEl.children[this.videoEl.children.length - 1].addEventListener('error', this._updateStateFromVideo);
    }

    /**
     * Removes event listeners bound outside of React's synthetic events
     * @return {undefined}
     */
    componentWillUnmount() {
        // Remove event listener from video.
        this.videoEl.children[this.videoEl.children.length - 1].removeEventListener('error', this._updateStateFromVideo);
        // Cancel the throttled function from being called once
        // the video has been unmounted.
        // https://github.com/mderrick/react-html5video/issues/35
        this._updateStateFromVideo.cancel();
    }

    /**
     * Toggles the video to play and pause.
     * @return {undefined}
     */
    togglePlay() {
        console.log(this.videoEl.currentTime);
        if (this.state.paused) {
            this.play();
            this.setState({
                paused: false
            });
        } else {
            this.pause();
            this.setState({
                paused: true
            });
        }
    }

    /**
     * Toggles the video to mute and unmute.
     * @return {undefined}
     */
    toggleMute() {
        if (this.state.muted) {
            this.unmute();
        } else {
            this.mute();
        }
    }

    /**
     * Loads video.
     * @return {undefined}
     */
    load() {
        this.videoEl.load();
    }

    /**
     * Sets the video to fullscreen.
     * @return {undefined}
     */
    fullscreen() {
        if (this.videoEl.requestFullscreen) {
            this.videoEl.requestFullscreen();
        } else if (this.videoEl.msRequestFullscreen) {
            this.videoEl.msRequestFullscreen();
        } else if (this.videoEl.mozRequestFullScreen) {
            this.videoEl.mozRequestFullScreen();
        } else if (this.videoEl.webkitRequestFullscreen) {
            this.videoEl.webkitRequestFullscreen();
        }
    }

    /**
     * Plays the video.
     * @return {undefined}
     */
    play() {
        this.videoEl.play();
    }

    /**
     * Pauses the video.
     * @return {undefined}
     */
    pause() {
        this.videoEl.pause();
    }

    /**
     * Unmutes video.
     * @return {undefined}
     */
    unmute() {
        this.videoEl.muted = false;
    }

    /**
     * Mutes the video.
     * @return {undefined}
     */
    mute() {
        this.videoEl.muted = true;
    }

    /**
     * Seeks the video timeline.
     * @param  {number} time The value in seconds to seek to
     * @param  {bool}   forceUpdate Forces a state update without waiting for
     *                              throttled event.
     * @return {undefined}
     */
    seek(time, forceUpdate) {
        this.videoEl.currentTime = time;
        // In some use cases, we wish not to wait for `onSeeked` or `onSeeking`
        // throttled event to update state so we force it. This is because
        // this method is often triggered when dragging a bar and can feel janky.
        // See https://github.com/mderrick/react-html5video/issues/43
        if (forceUpdate) {
            this.updateStateFromVideo();
        }
    }

    /**
     * Sets the video volume.
     * @param  {number} volume The volume level between 0 and 1.
     * @param  {bool}   forceUpdate Forces a state update without waiting for
     *                              throttled event.
     * @return {undefined}
     */
    setVolume(volume, forceUpdate) {
        this.videoEl.volume = volume;
        // In some use cases, we wish not to wait for `onVolumeChange`
        // throttled event to update state so we force it. This is because
        // this method is often triggered when dragging a bar and can feel janky.
        // See https://github.com/mderrick/react-html5video/issues/43
        if (forceUpdate) {
            this.updateStateFromVideo();
        }
    }

    /**
     * Sets the video playback rate.
     * @param  {number} rate The playback rate (default 1.0).
     * @return {undefined}
     */
    setPlaybackRate(rate) {
        this.videoEl.playbackRate = rate;
        this.updateStateFromVideo();
    }

    /**
     * Updates the React component state from the DOM video properties.
     * This is where the magic happens.
     * @return {undefined}
     */
    updateStateFromVideo() {
        this.setState({
            // Standard video properties
            duration: this.videoEl.duration,
            currentTime: this.videoEl.currentTime,
            buffered: this.videoEl.buffered,
            paused: this.videoEl.paused,
            muted: this.videoEl.muted,
            volume: this.videoEl.volume,
            playbackRate: this.videoEl.playbackRate,
            readyState: this.videoEl.readyState,

            // Non-standard state computed from properties
            percentageBuffered: this.videoEl.buffered.length && this.videoEl.buffered.end(this.videoEl.buffered.length - 1) / this.videoEl.duration * 100,
            percentagePlayed: this.videoEl.currentTime / this.videoEl.duration * 100,
            error: this.videoEl.networkState === this.videoEl.NETWORK_NO_SOURCE,
            loading: this.videoEl.readyState < this.videoEl.HAVE_ENOUGH_DATA
        });

    }

    /**
     * Returns everything but 'source' nodes from children
     * and extends props so all children have access to Video API and state.
     * If there are no controls provided, returns default Controls.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderControls() {
        var extendedProps = Object.assign({
            // The public methods that all controls should be able to
            // use.
            togglePlay: this.togglePlay,
            toggleMute: this.toggleMute,
            play: this.play,
            pause: this.pause,
            mute: this.mute,
            unmute: this.unmute,
            seek: this.seek,
            fullscreen: this.fullscreen,
            setVolume: this.setVolume,
            setPlaybackRate: this.setPlaybackRate
        }, this.state, {copyKeys: this.props.copyKeys});

        var controls = React.Children.map(this.props.children, (child) => {
            if (child.type === 'source') {
                return void 0;
            }
            return React.cloneElement(child, extendedProps);
        });

        if (!controls.length) {
            controls = (
                <div>
                    <Overlay {...extendedProps}/>
                    <Controls {...extendedProps}/>
                </div>
            );
        }
        return controls;
    }

    /**
     * Returns video 'source' nodes from children.
     * @return {Array.<ReactElement>} An array of components.
     */
    renderSources() {
        return React.Children.map(this.props.children, (child) => {
            if (child.type !== 'source') {
                return void 0;
            }
            return child;
        });
    }

    /**
     * Gets the video class name based on its state
     * @return {string} Class string
     */
    getVideoClassName() {
        var {className} = this.props;
        var classString = 'video';

        if (this.state.error) {
            classString += ' video--error';
        } else if (this.state.loading) {
            classString += ' video--loading';
        } else if (this.state.paused) {
            classString += ' video--paused';
        } else {
            classString += ' video--playing';
        }

        if (this.state.focused) {
            classString += ' video--focused';
        }
        if (className) {
            classString += ' ' + className;
        }
        return classString;
    }

    /**
     * Sets state to show focused class on video player.
     * @return {undefined}
     */
    onFocus() {
        this.setState({focused: true});
    }

    /**
     * Sets state to not be focused to remove class form video
     * player.
     * @return {undefined}
     */
    onBlur() {
        this.setState({focused: false});
    }
    render() {
        // If controls prop is provided remove it
        // and use our own controls.
        // Leave `copyKeys` here even though not used
        // as per issue #36.
        var {
            controls,
            copyKeys,
            style,
            ...otherProps,
        } = this.props;
        return (
            <div
                className={styles.videoField}
                tabIndex="0"
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)} >
                <video
                    src={this.props.src}
                    ref={(el) => {
                        this.videoEl = el;
                    }}
                    onClick={this.togglePlay.bind(this)}></video>
                {this.state.paused ? <Overlay togglePlay={this.togglePlay.bind(this)} /> : <div></div> }
                <Controls
                    className={styles.controlsField}
                    paused={this.state.paused}
                    togglePlay={this.togglePlay.bind(this)}/>
            </div>
        );
    }
}

Video.propTypes = {
    // Non-standard props
    copyKeys: React.PropTypes.object,
    children: React.PropTypes.node,
    className: React.PropTypes.string,

    // HTML5 Video standard attributes
    autoPlay: React.PropTypes.bool,
    muted: React.PropTypes.bool,
    controls: React.PropTypes.bool
}

export {Video as default, Controls, Overlay};
