import React, { Component } from 'react';
import '../App.scss';

export const ColorChangeHoc = () =>
  (BaseComponent) =>
    class extends Component {

      constructor(props) {
        super(props);
        this.state = {
          className: ""
        }
      }

      componentDidMount() {
        console.log("color change mounted")
        setTimeout(() => {
          this.setState((state) =>
            ({...state, className: "mounted"})
          )
        })
      }

      render() {
        return <BaseComponent {...this.props} className={`${this.props.className} ${this.state.className}`}/>
      }

    };
