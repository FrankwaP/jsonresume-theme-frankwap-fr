const moment = require('moment');

// Use French month names, such as "sept." for September.
moment.locale('fr');

const formatDate = date => {
  // Convert the input to text so we can check its format.
  const dateText = date.toString();

  let inputFormat;
  let outputFormat;

  // A year on its own stays a year: 2019 -> 2019.
  if (/^\d{4}$/.test(dateText)) {
    inputFormat = 'YYYY';
    outputFormat = 'YYYY';
  // A year and month show the abbreviated month and year.
  } else if (/^\d{4}-\d{2}$/.test(dateText)) {
    inputFormat = 'YYYY-MM';
    outputFormat = 'MMM YYYY';
  // A complete date shows the day, abbreviated month, and year.
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateText)) {
    inputFormat = 'YYYY-MM-DD';
    outputFormat = 'D MMM YYYY';
  } else {
    // Report unexpected input instead of silently displaying a wrong date.
    throw new Error(`Unsupported date format: ${dateText}`);
  }

  // Parse strictly so invalid dates are not treated as valid ones.
  const parsedDate = moment(dateText, inputFormat, 'fr', true);

  if (!parsedDate.isValid()) {
    throw new Error(`Invalid date: ${dateText}`);
  }

  // Format the date
  const formattedDate = parsedDate.format(outputFormat);
  return formattedDate
};

module.exports = { formatDate };
