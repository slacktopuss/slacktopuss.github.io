function FindProxyForURL(url, host) {

var regexpr_torrent = /(^|\.)(meduza\.io|youdo\.com)$/;
if (regexpr_torrent.test(host)) {return "SOCKS5 194.61.2.102:7497";};
return "DIRECT";

}
