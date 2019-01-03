/* eslint-disable import/no-named-as-default-member */
import electron from 'electron';
import type { Loop } from '../../types/models/Loop';
import LoopActions from '../loopActions';
import IPCMessages from '../../constants/IPCMessages';

const ipc = electron.ipcRenderer;

export default class LoopActionCreator {
  static createLoop(data: Loop) {
    return function(dispatch: Function) {
      ipc.sendSync(IPCMessages.CREATE_LOOP, data);

      ipc.once('loopCreated', (error: Error) => {
        if (error) {
          dispatch({
            type: LoopActions.CREATE_LOOP_FAILURE,
            loopData: data,
            error
          });
        } else {
          dispatch({ type: LoopActions.CREATE_LOOP_SUCCESS, loopData: data });
        }
      });
    };
  }

  /**
   *
   * @param data A map from fiupdateCreateFormeldName in the form, to it's value.
   * @return {Function}
   */
  static updateCreateForm(data: any) {
    return function(dispatch: Function) {
      dispatch({ type: LoopActions.UPDATE_CREATE_FORM, ...data });
    };
  }

  static readLoops() {
    return function(dispatch: Function) {
      return new Promise((resolve, reject) => {
        dispatch({ type: LoopActions.IPC_READ_LOOPS });
        ipc.send(IPCMessages.READ_LOOPS);

        ipc.once(
          IPCMessages.READ_LOOPS_SUCCESSFULL,
          (event: any, loops: Loop[]) => {
            dispatch({ type: LoopActions.IPC_READ_LOOPS_SUCCESSFULL });
            dispatch(LoopActionCreator.setLoops(loops));
            resolve(loops);
          }
        );

        ipc.once(IPCMessages.READ_LOOPS_FAILURE, (event: any, error: Error) => {
          reject(error);
          dispatch({ type: LoopActions.IPC_READ_LOOPS_FAILURE, error });
          dispatch(
            Notification.showError(
              'Error reading loops from file system. The file where the loops are saved (loops.json) is probably corrupt. The next time you save a loop it will completely overwritten.',
              error
            )
          );
        });
      });
    };
  }

  static setLoops(loops: Loop[]) {
    return function(dispatch: Function) {
      dispatch({ type: LoopActions.SET_LOOPS, loops });
    };
  }
}
