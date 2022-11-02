// 调用myAjax(options) options=>{method,url,data:{},success:function(){}}
function myAjax(options) {
  const xhr = new XMLHttpRequest();
  // 打开链接
  // get
  let dataStr = null;
  if (typeof options.data === "string") {
    dataStr = options.data;
  } else {
    dataStr = getQuery(options.data);
  }
  if (options.method.toUpperCase() === "GET") {
    xhr.open(options.method, `${options.url}?${dataStr}`);
    xhr.send();
  } else if (options.method.toUpperCase() === "POST") {
    xhr.open(options.method, options.url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 发送数据
    console.log(dataStr);
    xhr.send(dataStr);
  }
  // 监听事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      options.success(res);
    }
  };
}

function getQuery(data) {
  let queryArr = [];
  for (let k in data) {
    queryArr.push(`${k}=${data[k]}`);
  }
  return queryArr.join("&");
}
