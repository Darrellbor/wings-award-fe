import axios from 'shared/axios';
import * as types from 'store/types/vote';
import { RootState } from 'store';
import categoryInterface from 'types/category';

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

export const fetchCategories =
  () =>
  async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: (e: { type: string; payload: any }) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getState: () => RootState
  ): Promise<categoryInterface[]> => {
    const categories = await axios.get('/category/v1/categories');
    dispatch({
      type: types.FETCH_CATEGORIES,
      payload: { categories: categories.data.data },
    });
    return categories.data.data;
  };
