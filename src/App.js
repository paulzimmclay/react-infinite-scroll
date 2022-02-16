import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Passenger from './Passenger';
import staticData from './StaticData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: [],
    };
  }

  componentDidMount() {
    this.getPassengers(3);
  }

  getPassengers(page) {
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=50`)
      .then((res) => {
        this.setState({ passengers: res.data.data });
      });
  }

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
