// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Error } from '../components/Error';

type Props = {
  children: React.Node
};

export class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Error />
        {children}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(App);
