export const convertMinutes = (minutes) => {
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const mins = Math.floor(minutes % 60);
  const secs = Math.floor((minutes * 60) % 60);

  const timeString = [
    days > 0 ? `${days}d` : "",
    hours > 0 ? `${hours}h` : "",
    mins > 0 ? `${mins}m` : "",
    secs > 0 ? `${secs}s` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return timeString || "---";
};
