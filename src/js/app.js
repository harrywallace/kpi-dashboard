'use strict';

import firebase from 'firebase';

import React from "react";
import ReactDOM from "react-dom";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCittNEnyew7n3TEB9RKKdCsHynlV6dO1M",
  authDomain: "myfinance-kpi-dashboard.firebaseapp.com",
  databaseURL: "https://myfinance-kpi-dashboard.firebaseio.com",
  storageBucket: "myfinance-kpi-dashboard.appspot.com",
  messagingSenderId: "510199120451"
};
firebase.initializeApp(config);

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode = document.getElementById("root");

ReactDOM.render(<HelloMessage name="MyFinance" />, mountNode);
