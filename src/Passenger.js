import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class Passenger extends React.Component {
  render() {
    const { passenger } = this.props;
    const { _id, name, trips, airline, __v } = passenger;
    const { id, airlineName, country, logo, slogan, website, established } =
      airline[0];
    return (
      <Card className="m-3" style={{ width: '12rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Trips: {trips}</Card.Text>
          <Card.Text>Country: {country}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

Passenger.propTypes = {
  passenger: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    trips: PropTypes.number,
    airline: {
      id: PropTypes.number,
      name: PropTypes.string,
      country: PropTypes.string,
      logo: PropTypes.string,
      slogan: PropTypes.string,
      head_quaters: PropTypes.string,
      website: PropTypes.string,
      established: PropTypes.string,
    },
    __v: PropTypes.number,
  }),
};

export default Passenger;
