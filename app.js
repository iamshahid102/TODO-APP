var a = document.getElementById('main');
var user = document.getElementById("demo");

function inp() {
    var newElement = document.createElement('p');
    var text = user.value;
    var text = document.createTextNode(text);
    newElement.appendChild(text)
    a.appendChild(newElement)

    var btn = document.createElement("button")
    var btn_text = "Edit";
    btn_text = document.createTextNode(btn_text)
    btn.appendChild(btn_text);
    btn.setAttribute("onclick","edittodo(this)")
    btn.setAttribute("class","edittodo")
    newElement.appendChild(btn)

    var btn1 = document.createElement("button")
    var btn_text1 = "Delete";
    btn_text1 = document.createTextNode(btn_text1)
    btn1.appendChild(btn_text1);
    btn1.setAttribute("onclick","deletetodo(this)");
    btn1.setAttribute("class","deletetodo");
    newElement.appendChild(btn1)
    user.value = ""

}

function deletetodo(e) {
    e.parentNode.remove();
}

function edittodo(e) {
    e.parentNode.firstChild.nodeValue  = prompt("Enter new text", e.parentNode.firstChild.nodeValue)
}
function deleteall() {
    a.innerHTML = ""
}