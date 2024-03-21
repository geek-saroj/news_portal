import React from "react";

const RelativeTime: React.FC<{ date: string }> = ({ date }) => {
    const convertToRelativeTime = (date: string) => {
        const createdDate = new Date(date);
        const currentDate = new Date();
        const differenceInSeconds = Math.floor((currentDate.getTime() - createdDate.getTime()) / 1000);

        const secondsInMinute = 60;
        const secondsInHour = 3600;
        const secondsInDay = 86400;

        if (differenceInSeconds < secondsInMinute) {
            return `${Math.floor(differenceInSeconds)} seconds ago`;
        } else if (differenceInSeconds < secondsInHour) {
            const minutesAgo = Math.floor(differenceInSeconds / secondsInMinute);
            const remainingSeconds = differenceInSeconds % secondsInMinute;
            return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ${remainingSeconds} ${remainingSeconds === 1 ? 'second' : 'seconds'} ago`;
        } else if (differenceInSeconds < secondsInDay) {
            const hoursAgo = Math.floor(differenceInSeconds / secondsInHour);
            const remainingMinutes = Math.floor((differenceInSeconds % secondsInHour) / secondsInMinute);
            return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'} ago`;
        } else {
            const daysAgo = Math.floor(differenceInSeconds / secondsInDay);
            return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
        }
    };

    return <>{convertToRelativeTime(date)}</>;
};

export default RelativeTime;
