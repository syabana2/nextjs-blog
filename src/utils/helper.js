const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};


const formatDate = (date) => {
  return new Date(date).toLocaleString(
    "id-ID",
    dateOptions
  );
};

export default formatDate;