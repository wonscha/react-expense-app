const moment = jest.requireActual('moment');

export default (timestamep = 0) => {
  return moment(timestamep);
};