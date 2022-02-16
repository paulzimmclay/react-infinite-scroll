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
      loading: 'true',
      // page: 0,
      // prevY: 0,
    };
  }

  componentDidMount() {
    this.getPassengers(3);
  }

  getPassengers(page) {
    this.setState({ loading: 'true' });
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=50`)
      .then((res) => {
        this.setState({ passengers: res.data.data });
        this.setState({ loading: 'false' });
      });
  }

  render() {
    const { passengers } = this.state;

    const loadingCSS = {
      height: '100px',
      margin: '30px',
    };

    const loadingTextCSS = { display: this.state.loading ? 'block' : 'none' };

    return (
      <Container className="d-flex flex-wrap">
        {passengers.map((passenger) => (
          <Passenger key={passenger._id} passenger={passenger} />
        ))}
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </Container>
    );
  }
}
export default App;

// Previous commit loads, started to work through this:
// https://www.pluralsight.com/guides/how-to-implement-infinite-scrolling-with-reactjs
