import React from 'react';
import { Container } from 'react-bootstrap';
import Passenger from './Passenger';
import staticData from './StaticData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: [],
    };
  }

  getPassengers = () => {};

  render() {
    const { passengers } = this.state;

    return (
      <Container className="d-flex flex-wrap">
        {passengers.map((passenger) => (
          <Passenger key={passenger._id} passenger={passenger} />
        ))}
      </Container>
    );
  }
}
export default App;
