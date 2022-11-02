// 正则查找 {{name}},{{  name}},{{name  }}
// 提取name
// 替换name ,replace()
const mydata = {
  name: "陈荣艳",
  title: "标题",
};
let str = "<div>{{name  }}<h3>{{title}}</h3></div>";
const reg = /{{\s*([a-zA-Z]+)\s*}}/;
console.log(reg.exec(str));
let data = reg.exec(str); //匹配出的数组
str = str.replace(data[0], mydata[data[1]]); //执行替换
data = reg.exec(str);
str = str.replace(data[0], mydata[data[1]]);
console.log(str);
