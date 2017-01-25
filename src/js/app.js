'use strict';

import React from "react";
import ReactDOM from "react-dom";

import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCittNEnyew7n3TEB9RKKdCsHynlV6dO1M",
  authDomain: "myfinance-kpi-dashboard.firebaseapp.com",
  databaseURL: "https://myfinance-kpi-dashboard.firebaseio.com",
  storageBucket: "myfinance-kpi-dashboard.appspot.com",
  messagingSenderId: "510199120451"
};
firebase.initializeApp(config);

class MapState extends React.Component {
  render() {
    const {key, value} = this.props.mapState;
    return <li>{key}: {value}</li>;
  }
}

class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {items: this.items};
  }
  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h2>Traffic Heat Map</h2>
        </div>
        <ul>
          {
            this.state.items.map(ms => <MapState key={ms.key} mapState={ms} />)
          }
        </ul>
      </div>
    );
  }
  componentWillMount() {
    this.firebaseRef = firebase.database().ref("map_states");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      this.items.push({key: dataSnapshot.key, value: dataSnapshot.val()});
      this.setState({
        items: this.items
      });
    });
    this.firebaseRef.on("child_changed", (dataSnapshot) => {
      var item = this.items.find(x => x.key == dataSnapshot.key);
      item.value = dataSnapshot.val();
      this.setState({
        items: this.items
      });
    });
  }
}

const mountNode = document.getElementById("root");

ReactDOM.render(<HeatMap />, mountNode);

import 'bootstrap-loader';
