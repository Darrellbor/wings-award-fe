import * as types from 'store/types/vote';
import { RootState } from 'store';

export const addVote =
  (category: string, nominee: string) =>
  async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: (e: { type: string; payload: any }) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getState: () => RootState
  ): Promise<void> => {
    dispatch({ type: types.ADD_VOTE, payload: { category, nominee } });
  };

export const clearVotes =
  () =>
  (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: (e: { type: string; payload?: any }) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getState: () => RootState
  ): void => {
    dispatch({ type: types.CLEAR_VOTES });
  };
