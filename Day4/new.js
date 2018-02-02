var dialog = {
  success : function (message,url) {
      layui.open({
          icon : 1,
          content : message,
          title : '提示',
          btn :['OK','Cancel'],
          yes: function () {
              window.location.href = url
          },
          btn2 : function(){
              alert('Canceled');
              return;
          }
      })
  },

  Error : function (message) {
      layui.open({
          icon : 2,
          content : message,
          title : '错误提示',
          btn :['OK'],
          yes:function () {
              alert('Error');
              return;
          }
      })

  }
};