import * as types from 'store/types/vote';
import categoriesInterface from 'types/category';

interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export interface IinitialState {
  votes: {
    category: string;
    nominee: string;
  }[];
  categories: categoriesInterface[];
}

const initialState: IinitialState = {
  votes: [],
  categories: [],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addVote = (state: IinitialState, action: IAction) => {
  return { ...state, votes: [...state.votes, action.payload] };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clearVotes = (state: IinitialState, action: IAction) => {
  return { ...state, votes: [] };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchCategories = (state: IinitialState, action: IAction) => {
  return { ...state, categories: action.payload.categories };
};

const reducer = (state = initialState, action: IAction): IinitialState => {
  switch (action.type) {
    case types.ADD_VOTE:
      return addVote(state, action);
    case types.CLEAR_VOTES:
      return clearVotes(state, action);
    case types.FETCH_CATEGORIES:
      return fetchCategories(state, action);
    default:
      return state;
  }
};

export default reducer;
