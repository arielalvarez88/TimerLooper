import NotificationActions from '../actions/notificationActions';

const defaultState = {
  loading: false,
  showingError: false,
  errorMessage: '',
  error: null
};

export default function notification(state, action) {
  const actionType = action ? action.type : null;
  switch (actionType) {
    case NotificationActions.SHOW_ERROR:
      return {
        ...state,
        showingError: true,
        errorMessage: action.message,
        error: action.error
      };
    case NotificationActions.LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return defaultState;
  }
}
