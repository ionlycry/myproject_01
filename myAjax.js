function myAjax(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          reject(new Error());
        }
      }
    };
    xhr.open("get", url);
    xhr.send();
  });
}
