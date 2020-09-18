window.onload=function () {
    //单位换算函数
    function setHtmlFont() {
        document.documentElement.style.fontSize = window.innerWidth /15.36   + 'px'
    }
    setHtmlFont();
    window.addEventListener('resize',setHtmlFont);
};