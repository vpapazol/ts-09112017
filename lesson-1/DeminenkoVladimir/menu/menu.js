"use strict";
var menuList = [
    { title: 'JavaScript', items: ['React', 'Angular', 'Cycle.js'] },
    { title: 'Dart', items: ['Flutter', 'Angular', 'Polymer'] },
];
function generateMenu(list) {
    var content = "<ul>";
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var a = list_1[_i];
        content += "<li><a class='title'>" + a.title + "</a><ul>";
        for (var _a = 0, _b = a.items; _a < _b.length; _a++) {
            var item = _b[_a];
            content += "<li><a >" + item + "</a></li>";
        }
        content += "</li></ul>";
    }
    content += "</ul>";
    return content;
}
var navMenuList = document.querySelector('.menu');
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = function (ev) {
    var el = ev.target;
    var classlist = el.classList;
    if (!classlist.contains('title')) {
        return;
    }
    var parentLi = el.parentNode;
    parentLi.classList.toggle('menu-open');
};
//# sourceMappingURL=menu.js.map