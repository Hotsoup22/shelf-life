const { DateTime } = require("luxon");

module.exports = {
    formatDate: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },

    formatSequelDate: (date) => {
        return DateTime.fromISO(date).toFormat('M-d-yyyy');
    },

    expiredCheck: (date) => {
        expired = DateTime.fromISO(date);
        today = DateTime.now();

        dateDifference = (expired.diff(today)).as('days');

        if (dateDifference < 0) return true;
    }
};