import * as types from 'store/types/vote';

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
}

const initialState: IinitialState = {
  votes: [],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addVote = (state: IinitialState, action: IAction) => {
  return { ...state, votes: [...state.votes, action.payload] };
};

const reducer = (state = initialState, action: IAction): IinitialState => {
  switch (action.type) {
    case types.ADD_VOTE:
      return addVote(state, action);
    default:
      return state;
  }
};

export default reducer;
