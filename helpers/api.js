export const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const loadPageContent = async promises => {
  const results = await Promise.all(promises);
  return Object.assign({}, ...results);
};

export const getUrlWithParams = (url, paramsObject) => {
  return `${url}?${new URLSearchParams(paramsObject)}`;
};
