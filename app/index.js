import React from 'react';

import './stylesheets/normalize.scss';
import './stylesheets/app.scss';

import {Motion, spring} from 'react-motion';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      open: false,
      hover: false,
    };
    this.toggle = this.toggle.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  mouseEnter() {
    this.setState({hover: !this.state.hover});
  }

  mouseLeave() {
    this.mouseEnter();
  }

  boxStyles(boxSpring) {
    const {open, hover} = boxSpring;
    let boxSize = `${open}px`;

    if (!this.state.open) {
      boxSize = `${open * hover}px`;
    }

    return {
      width: boxSize,
      height: boxSize,
    }
  }

  render () {
    return (
      <div id='app'>
        <Motion
          style={{
            open: spring(
              this.state.open ? 200 : 300,
              {stiffness: 160, damping: 14}),
            hover: spring(
              this.state.hover ? 1.2 : 1,
              {stiffness: 160, damping: 13}),
          }}
        >
          {(boxSpring) =>
            <div
              id='box'
              onClick={this.toggle}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              style={this.boxStyles(boxSpring)}
            >
              <Motion
                style={{x: spring(
                  this.state.open ? 300 : 50,
                  {stiffness: 60, damping: 13}
                )}}
              >
                {(minis) =>
                  <div>
                    <div
                      id='mini-1'
                      className='mini'
                      style={{
                        left: `${minis.x}px`,
                        top: `${minis.x/6}px`
                      }}
                    ></div>
                    <div
                      id='mini-2'
                      className='mini'
                      style={{
                        left: `${minis.x/6}px`,
                        top: `${minis.x}px`
                      }}
                    ></div>
                    <div
                      id='mini-3'
                      className='mini'
                      style={{
                        left: `${minis.x/6}px`,
                        bottom: `${minis.x}px`
                      }}
                    ></div>
                    <div
                      id='mini-4'
                      className='mini'
                      style={{
                        right: `${minis.x}px`,
                        top: `${minis.x/6}px`
                      }}
                    ></div>
                  </div>
                }
              </Motion>
            </div>
          }
        </Motion>
      </div>
    )
  }
}

