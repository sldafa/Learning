var JRE = {
    creatElement : function (tagname,innerHtml,parentEle) {

        var ele = document.createElement(tagname);

        ele.innerHTML = innerHtml;

        parentELe.appendChild(ele);

    }

};
