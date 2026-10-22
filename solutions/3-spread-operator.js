const convert = (...dates) => dates.map(([year, month, day]) => new Date(year, month, day).toDateString());

export default convert;