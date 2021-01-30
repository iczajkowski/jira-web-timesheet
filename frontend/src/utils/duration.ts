export interface SimpleDuration {
  hours: number;
  minutes: number;
}

export const formatSecondsAsDuration = (seconds: number): string =>
  formatDuration(toSimpleDuration(seconds));

export const formatDuration = ({ minutes, hours }: SimpleDuration): string => {
  const stringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${stringMinutes}`;
};

export const toSimpleDuration = (seconds: number): SimpleDuration => {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: (seconds / 60) % 60
  };
};
