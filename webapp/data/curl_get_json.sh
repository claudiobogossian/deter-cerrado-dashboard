#!/bin/bash
# download daily data to work local
#URL="http://terrabrasilis.dpi.inpe.br/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=deter-cerrado:deter_daily_d&OUTPUTFORMAT=application%2Fjson"
#URL="http://terrabrasilis.dpi.inpe.br/download/deter-cerrado/deter_cerrado_all_d.json"
#curl "$URL" -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en,en-US;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: _ga=GA1.2.1567183574.1532107992; __utma=135147689.1567183574.1532107992.1539981172.1539981172.1; __utmz=135147689.1539981172.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)' -H 'Upgrade-Insecure-Requests: 1' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' > deter-cerrado-daily.json

# download month aggregated data to work local
#URL="http://terrabrasilis.dpi.inpe.br/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=deter-cerrado:deter_cerrado_month_d&OUTPUTFORMAT=application%2Fjson"
#URL="http://terrabrasilis.dpi.inpe.br/download/deter-cerrado/deter_cerrado_month_d.json"
#curl "$URL" -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en,en-US;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: _ga=GA1.2.1567183574.1532107992; __utma=135147689.1567183574.1532107992.1539981172.1539981172.1; __utmz=135147689.1539981172.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)' -H 'Upgrade-Insecure-Requests: 1' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' > deter-cerrado-month.json

# download the json for updated date information
URL="http://terrabrasilis.dpi.inpe.br/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=deter-cerrado:updated_date&OUTPUTFORMAT=application%2Fjson"
curl "$URL" -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en,en-US;q=0.5' --compressed -H 'Connection: keep-alive' -H 'Cookie: _ga=GA1.2.1567183574.1532107992; __utma=135147689.1567183574.1532107992.1539981172.1539981172.1; __utmz=135147689.1539981172.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)' -H 'Upgrade-Insecure-Requests: 1' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' > updated-date.json