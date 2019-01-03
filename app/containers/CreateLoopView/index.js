import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoopActionCreator from '../../actions/creators/LoopActionCreator';

type Props = {
  newLoop: Loop,
  update: Function,
  dispatch: Function
};

class CreateLoopView extends React.Component<Props> {
  createLoop = () => {
    this.props.dispatch(LoopActionCreator.createLoop(this.props.newLoop));
  };

  render() {
    return (
      <div className="containers-createloopview">
        <form onSubmit={this.createLoop}>
          <input
            type="text"
            name="name"
            value={this.props.newLoop.name}
            onChange={this.props.update}
          />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newLoop: {
      name: state.loop.CreateLoopView.name
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    update: e => {
      dispatch(
        LoopActionCreator.updateCreateForm({
          [e.target.name]: e.target.value
        })
      );
    }
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateLoopView)
);
