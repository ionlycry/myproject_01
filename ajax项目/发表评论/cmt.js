// 渲染列表
function getcmtList() {
  // ajax获取评论列表
  myAjax({
    method: "GET",
    url: "http://www.liulongbin.top:3006/api/cmtlist",
    success: function (res) {
      if (res.status !== 200) return alert("获取列表失败");
      var rows = [];
      $.each(res.data, function (i, item) {
        rows.push(`
        <li class="list-group-item">
        <span class="badge" style="background-color: rgb(227, 176, 53)"
          >评论时间：${item.time}</span
        >
        <span class="badge" style="background-color: rgb(74, 176, 208)"
          >评论人：${item.username}</span
        >
        ${item.content}
      </li>
        `);
      });
      $("#cmtList").empty().append(rows.join(""));
    },
  });
}
getcmtList();

$(function () {
  $("#formAddCmt").submit(function (e) {
    e.preventDefault();
    var data = $(this).serialize();
    // console.log(data);
    myAjax({
      method: "POST",
      url: "http://www.liulongbin.top:3006/api/addcmt",
      data: data,
      success: function (res) {
        if (res.status !== 201) {
          return alert("添加失败");
        }
        getcmtList();
        // 重置表单
        // console.log($("#formAddCmt")[0]);
        // console.log($("#formAddCmt"));
        $("#formAddCmt")[0].reset();
      },
    });
  });
});
