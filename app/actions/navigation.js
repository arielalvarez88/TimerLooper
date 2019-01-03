// @flow

const Actions = Object.freeze({
  NAVIGATE: 'navigate'
});

export type NAVIGATE = {
  type: typeof Actions.NAVIGATE,
  sectionName: string
};
