class Url {
  constructor(urlString) {
    this.url = new URL(urlString);
  }

  getScheme() {
    return this.url.protocol.slice(0, -1);
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    const params = new URLSearchParams(this.url.search);
    return Object.fromEntries(params.entries());
  }

  getQueryParam(key, defaultValue = null) {
    const params = new URLSearchParams(this.url.search);
    return params.get(key) ?? defaultValue;
  }

  equals(otherUrl) {
    return this.url.toString() === otherUrl.url.toString();
  }
}
const url1 = new Url('http://yandex.ru:80?key=value&key2=value2');
console.log(url1.getScheme());
console.log(url1.getHostName());
console.log(url1.getQueryParams());
console.log(url1.getQueryParam('key'))
console.log(url1.getQueryParam('key2', 'lala'))
console.log(url1.equals(new Url('http://yandex.ru:80?key=value&key2=value2')))