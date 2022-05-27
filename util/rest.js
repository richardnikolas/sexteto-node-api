const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

const post = async (url, data, successCallback, errorCallback) => {
    console.log("url", url);
    console.log("data", data);

    console.log("fetch", fetch);

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(successCallback)
        .catch((e) => {
            console.log("e", e);
            errorCallback();
        })
};

const get = async (url, successCallback, errorCallback) => {
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
