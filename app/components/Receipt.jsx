import React from 'react';
import { connect } from 'react-redux';

const Receipt = () => {
  return (
    <div>
      <h3>Thank you for juuling! Your order is being processed.</h3>
    </div>
  );
};

const mapState = ({ orders }) => ({ orders });

export default connect(mapState)(Receipt);
