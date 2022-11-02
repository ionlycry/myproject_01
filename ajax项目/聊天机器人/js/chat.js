$(function () {
  // 初始化右侧滚动条
  resetui();
  // 点击发送，发送信息到聊天窗口，渲染，重置滚动条
  $("#btnSend").on("click", function () {
    var txt = $("#ipt").val().trim();
    // 空值返回，重置输入文本框
    if (txt.length <= 0) return $("#ipt").val("");
    // 有值，渲染到 页面
    $("#talk_list").append(
      `<li class="right_word">
            <img src="img/person02.png" /> <span>${txt}</span>
          </li>`
    );
    $("#ipt").val("");
    // 重置滚动条
    resetui();
    // 调用获取服务器消息
    getMsg(txt);
  });

  //回车发送消息
  $("#ipt").on("keyup", function (e) {
    if (e.key === "Enter") {
      $("#btnSend").click();
    }
  });

  //   获取服务器返回的数据，参数{spken:text}
  function getMsg(text) {
    myAjax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/robot",
      data: {
        spoken: text,
      },
      success: function (res) {
        if (res.message === "success") {
          var msg = res.data.info.text;
          $("#talk_list").append(
            `<li class="left_word">
                      <img src="img/person01.png" /> <span>${msg}</span>
                    </li>`
          );
          resetui();
          getVoice(msg);
        }
      },
    });
  }

  //获取语音播报
  function getVoice(text) {
    myAjax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/synthesize",
      data: {
        text: text,
      },
      success: function (res) {
        if (res.status === 200) {
          $("#voice").attr("src", res.voiceUrl);
        }
      },
    });
  }
});
