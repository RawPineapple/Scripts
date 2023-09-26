# China Mobile
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject
^https?:\/\/clientaccess\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject
^https?:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query url reject

# --- (Alibaba) ---
# > Taobao url gw.alicdn.com heic.alicdn.com
^https?:\/\/(gw|heic)\.alicdn\.com\/\w{2}s\/.+\.jpg_(9\d{2}|\d{4}) url reject
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/.+\d{4}-\d{4}\.jpg_(9\d{2}|\d{4}) url reject
# > Xianyu url acs.m.taobao.com
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject
# > Fliggy url acs.m.taobao.com
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject
# > Taopiaopiao url acs.m.taobao.com
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject

# > Weidian url thor.weidian.com
^https?:\/\/thor\.weidian\.com\/ares\/home\.splash\/ url reject