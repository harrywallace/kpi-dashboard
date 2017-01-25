'use strict';

// import Bootstrap
import 'bootstrap-loader';
// import app styles
import '../stylesheets/main.scss';

import React from "react";
import ReactDOM from "react-dom";

import firebase from 'firebase';
import config from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(config);

function MapState(props) {
  const {key, value} = props.mapState;
  return <li>{key}: {value}</li>;
}

class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {items: this.items};
  }
  render() {
    return (
      <ul>
        {
          this.state.items.map(ms => <MapState key={ms.key} mapState={ms} />)
        }
      </ul>
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

function StatCard(props) {
  return (
    <div className='col-sm-6'>
      <div className='card'>
        <div className='card-header'>
          {props.header}
        </div>
        <div className='card-body'>
          {props.body}
        </div>
      </div>
    </div>
  );
}

const mountNode = document.getElementById("root");

const dashboard = (
  <StatCard header='Traffic Heat Map' body={<HeatMap />}/>
);

ReactDOM.render(dashboard, mountNode);
