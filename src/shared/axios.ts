import axios from 'axios';

import { signature, appKey, baseUrl } from 'shared/config';

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    signature,
    appKey,
  },
});

export default instance;
