// @flow

import type { Loop } from '../types/models/Loop';

const LoopActions = Object.freeze({
  CREATE_LOOP: 'create_loop',
  CREATE_LOOP_SUCCESS: 'create_loop_success',
  CREATE_LOOP_FAILURE: 'create_loop_failure',
  UPDATE_CREATE_FORM: 'update_create_form',
  IPC_READ_LOOPS: 'ipc_read_loops',
  IPC_READ_LOOPS_SUCCESSFULL: 'ipc_read_loops_succesfull',
  IPC_READ_LOOPS_FAILURE: 'ipc_read_loops_failure',
  SET_LOOPS: 'set_loops'
});

export type CREATE_LOOP = {
  type: typeof LoopActions.CREATE_LOOP,
  loopData: Loop
};

export type CREATE_LOOP_SUCCESS = {
  type: typeof LoopActions.CREATE_LOOP_SUCCESS,
  loopData: Loop
};

export type CREATE_LOOP_FAILURE = {
  type: typeof LoopActions.CREATE_LOOP_SUCCESS,
  loopData: Loop,
  error: Error
};

export type UPDATE_CREATE_FORM = {
  type: typeof LoopActions.UPDATE_CREATE_FORM
};

export type IPC_READ_LOOPS = {
  type: typeof LoopActions.IPC_READ_LOOPS
};

export type IPC_READ_LOOPS_SUCCESSFULL = {
  type: typeof LoopActions.IPC_READ_LOOPS_SUCCESSFULL
};

export type IPC_READ_LOOPS_FAILURE = {
  type: typeof LoopActions.IPC_READ_LOOPS_FAILURE,
  error: Error
};

export type SET_LOOPS = {
  type: typeof LoopActions.SET_LOOPS,
  loops: Loop[]
};

export default LoopActions;
