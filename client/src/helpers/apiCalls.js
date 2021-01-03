/**
 * Helper methods for api calls
 */

const urlPrefix = process.env.REACT_APP_BASE_SERVER;

const postData = (token, url, data = {}) => {
  return window.fetch(urlPrefix + url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

const getData = (token, url) => {
  return window.fetch(urlPrefix + url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(response => response.json());
};

const deleteData = (token, url, data = {}) => {
  return window.fetch(urlPrefix + url, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export {
  postData,
  getData,
  deleteData
};
