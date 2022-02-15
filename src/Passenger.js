import React from 'react';

class Passenger extends React.Component {
  render() {
    const { passenger } = this.props;
    return <div className="">{passenger.name}</div>;
  }
}
export default Passenger;
