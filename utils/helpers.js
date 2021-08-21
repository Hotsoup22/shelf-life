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
        expiration = DateTime.fromISO(date);
        today = DateTime.now();

        dateDifference = (expiration.diff(today)).as('days');

        if (dateDifference <= 0) return true;
    },

    weekCheck: (date) => {
        expiration = DateTime.fromISO(date);
        today = DateTime.now();

        dateDifference = (expiration.diff(today)).as('days');

        if (dateDifference > 0 && dateDifference <= 7) return true;
    },

    monthCheck: (date) => {
        expiration = DateTime.fromISO(date);
        today = DateTime.now();

        dateDifference = (expiration.diff(today)).as('days');

        if (dateDifference > 7 && dateDifference <= 30) return true;
    }
};