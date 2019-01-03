/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

type Props = {
  showingError: boolean,
  errorMessage: string
};

export class Error extends React.Component<Props> {
  render() {
    return (
      <div
        hidden={!this.props.showingError}
        className="alert alert-primary"
        role="alert"
      >
        {this.props.errorMessage}
        <br />
      </div>
    );
  }
}
const mapStateToProps = function(state: Object) {
  return {
    errorMessage: state.notification.errorMessage,
    showingError: state.notification.showingError
  };
};

export default connect(
  mapStateToProps,
  null
)(Error);
