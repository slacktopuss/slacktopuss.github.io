function FindProxyForURL(url, host) {

var regexpr_ua = /(^|\.)(rus\.delfi\.lt|epravda\.com\.ua|thetruestory\.news|eurointegration\.com\.ua|postimees\.ee|unian\.ua|liga\.net|delfi\.lt|err\.ee|svoboda\.org|nv\.ua|tjournal\.ru|bbc\.com|yle\.fi|zona\.media|zerkalo\.io|rutracker\.org|pravda\.com\.ua|meduza\.io)$/;
if (regexpr_ua.test(host))
{

return "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";
};

var regexpr_ru  = /(^|\.)(2ip\.ru|youdo\.com)$/;
if(regexpr_ru.test(host))
{

return "SOCKS zerosevenseven.keenetic.link:7777";
};

return "DIRECT";
}
