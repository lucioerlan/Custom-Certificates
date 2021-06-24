import moment from 'moment-timezone';

export const DateTime = (value) => {
  const formattedDT = moment
    .tz(value, 'America/Sao_Paulo').format('DD MMMM YYYY');

  return formattedDT;
};
