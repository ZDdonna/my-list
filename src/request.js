import 'whatwg-fetch';

function parseJSON(response) {
    return response.json().catch(() => {
      const error = new Error('网络异常');
      throw error;
    });
  }

export function get(url, options) {
    const defaultOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      const mergeOptions = Object.assign({}, defaultOptions, options);
      return fetch(url, mergeOptions)
      .then(parseJSON)
}
