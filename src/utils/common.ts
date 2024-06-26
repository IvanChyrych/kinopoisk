export const buildUrl = (url, params) => {
    let urlWithParams = url;
  
    Object.entries(params).forEach(([key, value], i) => {
      const sign = "&";
      urlWithParams += `${sign}${key}=${value}`;
    });
  
    return urlWithParams;
  };