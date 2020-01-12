export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = (seconds / 60) % 60;
  const stringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${stringMinutes}`;
};
