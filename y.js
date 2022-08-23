// http прокси берем по ссылке http://hideip.me/ru/proxy/httplist
// return "PROXY 161.97.130.154:3128"

// socks 4 прокси берем по ссылке http://hideip.me/ru/proxy/socks4list
// return "SOCKS 82.204.141.94:4145"

// socks 5 прокси берем по ссылке http://hideip.me/ru/proxy/socks5list
// return "SOCKS5 13.68.221.22:1080"

function FindProxyForURL(url, host) {

var regexpr_torrent = /(^|\.)(meduza\.io|youdo\.com)$/;
if (regexpr_torrent.test(host)) {return "PROXY 176.31.68.254:20415";};
return "DIRECT";

}
