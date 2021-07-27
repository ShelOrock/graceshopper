import React from 'react';
import { connect } from 'react-redux';
import { statusMessage } from '../redux/actions.jsx';

import { SUCCESS, FAIL } from '../redux/thunks/utils.jsx';

export const ToastComponent = props => {
  const { status, message } = props;
  switch (status) {
    case SUCCESS:
      return (
        <div
          style={
            {
              position: 'fixed',
              left: '90%',
              zIndex: '10'
            }
          }
          onClose={() => props.resetStatus()}
        >
          <h1 className="bg-success">
            <strong className="mr-auto text-white">Success!</strong>
          </h1>
          <p className="text-success">{message}</p>
        </div>
      );
    case FAIL:
      return (
        <Toast
          style={{ position: 'fixed', left: '90%', zIndex: '10' }}
          onClose={() => props.resetStatus()}
        >
          <Toast.Header className="bg-danger">
            <strong className="mr-auto text-white">Error!</strong>
          </Toast.Header>
          <Toast.Body className="text-danger">{message}</Toast.Body>
        </Toast>
      );
    default:
      return null;
  }
};

const mapDispatch = dispatch => {
  return {
    resetStatus: () =>
      dispatch(
        statusMessage({
          status: null,
          text: ''
        })
      )
  };
};

export default connect(null, mapDispatch)(ToastComponent);
