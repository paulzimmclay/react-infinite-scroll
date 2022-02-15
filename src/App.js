import React from 'react';
import Passenger from './Passenger';
import staticData from './StaticData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: staticData.data,
    };
  }

  render() {
    const { passengers } = this.state;
    console.log(passengers);
    return <div className="" />;
  }
}
export default App;
