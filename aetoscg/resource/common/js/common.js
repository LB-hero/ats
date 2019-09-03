
var pathname = window.location.pathname;

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
var domain = window.location.origin + "/" + window.location.pathname.split("/")[1];

// var domain = "http://192.168.8.148:8080/front"

var requires = {
	// 服务器地址
	HOME: 'laundry_front',
	EXAMPLE: '/example.do'
};
var appDomain = 'http://localhost:8080';
var appName = appDomain + '/laundry_front';
var routes = {
	gateRefreshPc: domain + '/c/gate/refresh-pc.do',

}