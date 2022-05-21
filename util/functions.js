
const addDays = Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

const isToday = (date) => {
    const today = new Date()
    return date.getDate() == today.getDate() &&
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear();
};

const formatReais = (value) => {
    return 'R$' + value.toFixed(2);
};

const iterateThroughArray = Array.prototype.iterate = function(executable) {
    for (let index = 0; index < array.length; index++) {
        executable(array[index]);
    }
};

const defaultModelFieldValidation = (message) => {
    return {
        notEmpty: {
            msg: message
        },
        notNull: {
            msg: message
        }
    };

}

module.exports = {
    addDays,
    iterateThroughArray,
    formatReais,
    isToday,
    defaultModelFieldValidation
};
