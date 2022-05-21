const post = (url, data, successCallback, errorCallback) =>  {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(successCallback)
        .catch(errorCallback)
};

const get = (url, successCallback, errorCallback) =>  {
    await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(successCallback)
        .catch(errorCallback)
};

module.exports = {
    post, 
    get
};
