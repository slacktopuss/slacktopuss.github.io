function FindProxyForURL(url, host) {

var regexpr_torrent = /(^|\.)(2ip\.io|2ip\.ru|meduza\.io|youdo\.com)$/;
if (regexpr_torrent.test(host)) {return "PROXY zerosevenseven.keenetic.link:33311";};
return "DIRECT";

}
