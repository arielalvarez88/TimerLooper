// @flow

const NotificationActions = Object.freeze({
  SHOW_ERROR: 'show_error',
  LOADING: 'loading'
});

export type SHOW_ERROR = {
  type: typeof NotificationActions.SHOW_ERROR,
  message: string,
  error: Error
};

export type LOADING = {
  type: typeof NotificationActions.LOADING,
  loading: boolean
};

export default NotificationActions;
