import React from 'react';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

import {Motion, spring} from 'react-motion';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  render () {
    return (
      <div id='app'>
        <Motion
          style={{x: spring(
            this.state.open ? 400 : 0,
            {stiffness: 160, damping: 13}
          )}}
        >
          {(spring) => {
            console.log(spring.x);
              return (
                <div
                  id='box'
                  style={{
                    left: `${spring.x}px`,
                    top: `${spring.x/4}px`
                  }}
                  onClick={this.toggle}
                >
                  {spring.x}
                </div>
              )
            }
          }
        </Motion>
      </div>
    )
  }
}

