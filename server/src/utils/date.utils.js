/**
 * Parse a date string in YYYY-MM-DD format
 * @param {string} dateStr
 * @returns {Date}
 */
export const parseDateString = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') {
    const error = new Error('Invalid scheduled date');
    error.status = 400;
    throw error;
  }

  const dateParts = dateStr.split('-');
  if (dateParts.length !== 3) {
    const error = new Error('Invalid date format. Expected YYYY-MM-DD');
    error.status = 400;
    throw error;
  }

  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Months are 0-indexed
  const day = parseInt(dateParts[2], 10);

  if (year < 2020 || year > 2100) {
    const error = new Error('Invalid year in scheduled date');
    error.status = 400;
    throw error;
  }

  const parsedDate = new Date(year, month, day);

  if (isNaN(parsedDate.getTime())) {
    const error = new Error('Invalid scheduled date');
    error.status = 400;
    throw error;
  }

  return parsedDate;
};
