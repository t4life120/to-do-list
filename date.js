const getDate = () => {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString('en-US', options);
    return day;
}

// just like above, different form of declaration
function getDay() {
    const today = new Date();
    const options = {
        weekday: "long",
    };

    const day = today.toLocaleDateString('en-US', options);
    return day;
}

// module.exports = getDate;
export default {getDate, getDay};