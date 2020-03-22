import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
  
  class Design extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        package: "Photoshop",
        specicifity: "Graphics design: raster. ",
        usability: " easier",
        rate: 3
      };
    }
    changeRate = () => {
        this.setState({rate: 6});
      }

      componentDidMount() {
             
      }

    render() {
      return (
        <div>
          <h1>I use {this.state.package}</h1>
          <span>
            to do alot of {this.state.specicifity}
          </span>
          <span>
              It is {this.state.usability}
          </span>
          <p>
              My rate is:{this.state.rate}
          </p>

          <button type="button" onClick={this.changeRate} >Change rate</button>

        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root1'));
  ReactDOM.render(<Design />, document.getElementById('root2'));
  
 
  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
