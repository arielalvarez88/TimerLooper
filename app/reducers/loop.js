import LoopActions from '../actions/loopActions';

const defaultAction = {
  loops: null,
  CreateLoopView: {
    name: '',
    showingSuccessMessage: false,
    successMessage: 'Loop Created Successfully'
  }
};

export default function(state, action) {
  const actionType = action ? action.type : null;
  const actionCopy = { ...action };
  delete actionCopy.type;

  switch (actionType) {
    case LoopActions.CREATE_LOOP_SUCCESS:
      return {
        ...state,
        CreateLoopView: {
          ...state.CreateLoopView,
          showingSuccessMessage: true,
          successMessage: 'Loop Created Successfully'
        }
      };

    case LoopActions.SET_LOOPS:
      return {
        ...state,
        loops: action.loops
      };

    case LoopActions.UPDATE_CREATE_FORM:
      return {
        ...state,
        CreateLoopView: {
          ...state.CreateLoopView,
          ...actionCopy
        }
      };
    default:
      return defaultAction;
  }
}
