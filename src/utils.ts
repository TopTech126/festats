export const obj2query = (obj: Record<string, string>) => {
  return Object.keys(obj)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    })
    .join("&");
};