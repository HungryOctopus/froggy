import api from './api';

export const addStatistic = (body) => {
  api.post('/stats', body).then((response) => {
    const data = response.data;
    const femaleFrogsWayIn = data.femaleFrogsWayIn;
    return femaleFrogsWayIn;
  });
};
