// @flow
import type { Alarm } from './Alarm';

export type Timer = {
  name: string,
  alarm: Alarm,
  durationInSeconds: number
};
