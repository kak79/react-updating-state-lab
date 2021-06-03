// Code YouTubeDebugger Component Here
import React from 'react' 

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  onClickHandler1 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
          bitrate: 12
      }
    })
  }

  onClickHandler2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
          video: {
            resolution: '720p'
          }
      }
    })
  }

  render(){
    return(
      <div>
        <button 
          onClick={this.onClickHandler1}
          className="bitrate"
          >
          {this.state.settings.bitrate}
        </button>
        <button 
          onClick={this.onClickHandler2}
          className="resolution"
          >
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;