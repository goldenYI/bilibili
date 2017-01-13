import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    outputUpdate() {
        this.refs.volume.value = this.refs.fader.value;
        console.log(vol);
    }
    render() {
        return(
            <span>
                <label for="fader">Volume</label>
                <a type="range"
                  id="fader"
                  ref="fader"
                  min="1"
                  max="100"

                  step="1"
                  aria-valuemin="1"
                  aria-valuemax="100"
                  aria-valuenow="20"
                  onMouseUp={this.outputUpdate.bind(this)}/>
              <output for="fader" id="volume" ref="volume">50</output>
            </span>
        );
    }
}


export default Slider;
