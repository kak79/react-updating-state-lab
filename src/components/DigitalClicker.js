// Code DigitalClicker Component Here
import React from 'react' 

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  onClickHandler = () => {
    let timesClickedMore = this.state.timesClicked + 1
    this.setState({
      timesClicked: timesClickedMore
    })
  }

  render(){
    return(
      <div>
        <button 
          onClick={this.onClickHandler}
          >
          {this.state.timesClicked}
        </button>
      </div>
    );
  }
}

export default DigitalClicker;