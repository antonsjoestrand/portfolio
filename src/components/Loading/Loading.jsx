import React, { Component } from "react";
import './Loading.scss';
import LoadingLogo from "./LoadingLogo";

export default class Loading extends Component {
  render() {
    return (
     <div className="container container--loading">
         <LoadingLogo />
     </div>
    );
  }
}
