import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { notification } from 'antd';
import { DEFAULT_NOTIFICAION_PROPS } from './const';

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

export const showNoti = (type: 'error' | 'success', message: string) =>
  notification[type]({
    message,
    ...DEFAULT_NOTIFICAION_PROPS,
  });

export const disableFutureDates = (current: dayjs.Dayjs) => {
  return current && current.isAfter(dayjs().endOf('day'));
};
