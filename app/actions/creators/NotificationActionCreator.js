// @flow
import NotificationActions from '../notificationActions';

export default class NotificationActionCreator {
  static showError(message: ?string, error: Error) {
    return function(dispatch: Function) {
      dispatch({ type: NotificationActions.SHOW_ERROR, message, error });
    };
  }

  static setLoading(loading: boolean = true) {
    return function(dispatch: Function) {
      dispatch({ type: NotificationActions.LOADING, loading });
    };
  }
}
