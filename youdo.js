function FindProxyForURL(url, host) {
var regexpr_rus  = /(^|\.)(music\.yandex\.ru|youdo\.com)$/;
if(regexpr_rus.test(host))
{
return "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";
};
return "DIRECT";
}