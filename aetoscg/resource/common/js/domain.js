
var pathname = window.location.pathname;

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
var domain = window.location.origin + "/" + window.location.pathname.split("/")[1];

// var domain = "http://192.168.8.148:8080/front"