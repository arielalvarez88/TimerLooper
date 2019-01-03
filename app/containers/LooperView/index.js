// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Loop } from '../../types/models/Loop';
import LoopActionCreator from '../../actions/creators/LoopActionCreator';

type Props = {
  loops: Loop[],
  readLoops: Function
};

export class LooperView extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.loops) {
      this.props.readLoops();
    }
  }

  render() {
    let { loops } = this.props;
    loops = loops || [];
    return (
      <div>
        <div className="row">
          <Link to="/create">Create New Loop</Link>
        </div>
        <br />
        <div className="row">
          <select className="col-sm-6 offset-sm-3">
            {loops.map(loop => (
              <option key={loop.name}>{loop.name}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Object) => ({
  loops: state.loop.loops
});
const mapDispatchToProps = (dispatch: Function) => ({
  readLoops: () => {
    dispatch(LoopActionCreator.readLoops());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LooperView)
);
