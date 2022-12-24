// import * as dotenv from 'dotenv';
// dotenv.config();

export const environment = process.env.NODE_ENV;
export const signature = process.env.REACT_APP_SIGNATURE;
export const appKey = process.env.REACT_APP_KEY;
export const baseUrl = process.env.REACT_APP_BASE_URL;
export const classSet = process.env.REACT_APP_CLASS_SET;
export const votingEnded =
  process.env.REACT_APP_VOTING_ENDED && process.env.REACT_APP_VOTING_ENDED === 'true'
    ? true
    : false;
