export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - date.getTime();
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const millisecondsPerDay = 24 * millisecondsPerHour;

    if (timeDifference < millisecondsPerDay) {
        const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
        if (minutesAgo < 1) {
            return 'Just now';
        } else if (minutesAgo < 60) {
            return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else {
            const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
            return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
        }
    } else {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString(undefined, options);
    }
};
