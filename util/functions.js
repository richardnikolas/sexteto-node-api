const defaultModelFieldValidation = (message) => {
    return {
        notEmpty: {
            msg: message
        },
        notNull: {
            msg: message
        }
    };
};

module.exports = {
    defaultModelFieldValidation
};
