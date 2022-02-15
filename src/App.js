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

    return (
      <div className="">
        {passengers.map((passenger) => (
          <Passenger key={passenger._id} passenger={passenger} />
        ))}
      </div>
    );
  }
}
export default App;
