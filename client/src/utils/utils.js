export const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return newDate;
};

export const formatTime = (date, time) => {
  const newTime = new Date(`${date?.split("T")[0]}T${time}`).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },
  );

  return newTime;
};
