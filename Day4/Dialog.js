var dialog = {
    success : function (message,URL) {
        layer.open({
            icon : 1,
            title : '提示',
            content : message,
            yes : function () {
                window.location.href=URL;
            }
        });
    },

    error : function (message) {
        layer.open({
            icon : 2,
            title : '错误提示',
            content : message
        });
    }
};