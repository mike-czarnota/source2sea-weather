import format from 'date-fns/format';

export const formatTime = (date: Date): string => format(date, 'HH:mm');
