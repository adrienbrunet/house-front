const TwoWeeksInMilliseconds = 12096e5;

const setCookie = (name, value, timeOffset) => {
  let domain = window.location.hostname;
  let expires = new Date(new Date().getTime() + timeOffset).toUTCString();
  let cookie = name + "=" + value + "; Expires=" + expires + ";";

  if (domain !== "localhost") {
    cookie += " Path=/; Domain=" + domain + ";";
  }

  document.cookie = cookie;
};

const set = (name, value) => {
  if (value) {
    setCookie(name, value, TwoWeeksInMilliseconds);
  }
};

const get = name => {
  let counter;
  let cookieLength;
  let cookie = document.cookie;

  cookie = cookie
    .replace(/;\s+/g, ";")
    .split(";")
    .map(function(s) {
      return s.replace(/\s+=\s+/g, "=").split("=");
    });

  for (
    counter = 0, cookieLength = cookie.length;
    counter < cookieLength;
    counter++
  ) {
    if (cookie[counter][0] && cookie[counter][0] === name) {
      return cookie[counter][1];
    }
  }

  return null;
};

const remove = name => {
  setCookie.call(this, name, "", -TwoWeeksInMilliseconds);
};

export default {
  setCookie,
  set,
  get,
  remove
};
