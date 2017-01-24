'use strict';

import React from "react";
import ReactDOM from "react-dom";

import firebase from 'firebase';

import ReactFireMixin from 'reactfire'

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
    return <div>{key}: {value}</div>;
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
      <div>
        { this.state.items.map(ms => <MapState key={ms.key} mapState={ms} />) }
      </div>
    );
  }
  componentWillMount() {
    this.firebaseRef = firebase.database().ref("map_states");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.items.push({key: dataSnapshot.key, value: dataSnapshot.val()});
      this.setState({
        items: this.items
      });
    }.bind(this));
    this.firebaseRef.on("child_changed", function(dataSnapshot) {
      var item = this.items.find(x => x.key == dataSnapshot.key);
      item.value = dataSnapshot.val();
      this.setState({
        items: this.items
      });
    }.bind(this));
  }
}

const mountNode = document.getElementById("root");

ReactDOM.render(<HeatMap />, mountNode);
