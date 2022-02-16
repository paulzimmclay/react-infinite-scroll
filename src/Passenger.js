import React from 'react';
import PropTypes from 'prop-types';

class Passenger extends React.Component {
  render() {
    const { passenger } = this.props;
    const { _id, name, trips, airline, __v } = passenger;
    return (
      <div className="">
        {name}, {trips}
      </div>
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
