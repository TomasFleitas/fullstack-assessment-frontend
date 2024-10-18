import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export const calculateTimeDifference = (hireDate: string): string => {
  const hire = dayjs(hireDate);
  const now = dayjs();

  const years = now.diff(hire, 'year');
  const months = now.diff(hire.add(years, 'year'), 'month');
  const days = now.diff(hire.add(years, 'year').add(months, 'month'), 'day');

  return `${years}y - ${months}m - ${days}d`;
};
