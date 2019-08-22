var Translation={
	'pt-br':{
		/* texts into HTML entities */
		'goto_about':'Ver informações sobre o projeto e a equipe.',
		'goto_video':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1c':'Informações de ajuda para uso do painel',
		'txt1d':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1e':'Fechar',
		'txt1':'Painel DETER - mensal',
		'txt2':'Abrir o Painel Diário',
		'txt2a':'Informações gerais',
		'txt2b':'<h3>Sobreposição PRODES Amazônia x Cerrado</h3>'+
		'<br /><br />'+
		'O Mapeamento do cerrado é realizado para toda extensão do Bioma, o que inclui uma zona de sobreposição com os limites da Amazônia Legal Brasileira. Ocorre que as áreas de florestas, dentro da zona de sobreposição entre os limites do Bioma Cerrado e os limites da Amazônia Legal, 7% da área total, já são mapeadas, desde 1988, pelo projeto PRODES Amazônia. Nesta área de sobreposição o INPE utilizou os dados  já mapeados pelo PRODES Amazônia, para evitar resultados discrepantes entre os dois produtos. Apesar dos dois mapeamentos possuírem a mesma legenda (i.e. desmatamento do tipo corte raso) existe uma peculiaridade em relação ao início de suas séries históricas e frequências de mapeamento.'+
		'<br /><br />'+
		'O PRODES Cerrado tem uma série histórica com início no ano 2000 e possui frequência de mapeamento bianual até 2012 e anual desde 2013 até 2017. O PRODES Amazônia tem sua série histórica com início em 1988 e possui frequência anual de mapeamento, entretanto durante esse período foi necessário fazer um ajuste geométrico na máscara de desmatamento para corrigir deslocamentos causados por diferentes processos de georreferenciamento das imagens adotados ao longo da vida do projeto. <a href="http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes/pdfs/nt_deslocamentomascara.pdf" target="_blank">Acesse este link para mais detalhes.</a>'+
		'<br /><br />'+
		'Este ajuste na máscara de desmatamento do PRODES Amazônia resultou em uma agregação de todos os anos mapeados até 2008 em um único plano de informação, não sendo possível separar a geometria do desmatamento dos anos anteriores. Uma vez que os números computados pelo PRODES Cerrado são referentes ao desmatamento mapeado a partir da máscara agregada do ano 2000, início de sua série histórica, os mesmos não consideram a área de desmatamento acumulado até o ano 2000.'+
		'<br /><br />'+
		'Por essa razão, ainda que esta diferença ocorra apenas na área de sobreposição (7% da área total), os números do desmatamento anual publicados no dashboard do TerraBrasilis (www.dpi.inpe.br/fipcerrado/dashboard/) não são iguais aos dados geográficos disponibilizados para download no mesmo site, exclusivamente para os anos 2000 até 2008.',
		'txt2c':'Fechar',
		'txt3':'Baixar dados',
		'downloadBtn':'Baixar os dados em formato CSV.',
		'txt4':'Imprimir Gráficos',
		'txt4p':'Imprimir Gráficos',
		'txt5':'Escurecer/clarear',
		'txt6':'Entrar',
		'txt7':'Problema na comunicação com o servidor.<br>Aguarde alguns minutos e recarregue a página.',
		'txt8':'Filtro:',
		'txt9':'Filtro:',
		'txt10':'Filtro:',
		'txt11':'Filtro:',
		'txt30':'A impressão deste documento utiliza os recursos do navegador e pode apresentar diferenças entre eles.<br />'+
		'A impressão acomoda bem os gráficos quando as configurações são as seguintes:<br />'+
		'&nbsp;&nbsp;&nbsp;- A orientação do papel é do tipo paisagem;<br />'+
		'&nbsp;&nbsp;&nbsp;- O tamanho de papel é A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- E margens padrão do navegador.<br />',
		'txt13':'Aviso',
		'txt14':'Este painel não é afetado pelos filtros definidos no mapa.',
		'txt15':'Análise - Cerrado',
		'title-chart-agreg':'Variação da detecção de área do projeto DETER com granularidade mensal e sazonalidade anual do PRODES (Agosto a Julho)',
		'title-chart-by-state':'Área por Estados',
		'title-chart-by-year':'Área por Anos',
		'txt16':'Filtros por Estados e ano PRODES (Agosto a Julho)',
		'txt17':'A classe <b>Corte Seletivo</b> refere-se ao somatório das classes Corte Seletivo Geométrico e Corte Seletivo Desordenado para o ano PRODES 2015/2016, quando estas classes ainda não eram discretizadas.',
		'txt18':'Limpar este filtro.',
		'txt19':'Limpar este filtro.',
		'txt20':'Limpar este filtro.',
		'txt21':'Limpar este filtro.',
		'txt22':'Informações complementares',
		'txt23':'As classes que representam alertas de desmatamento são Mineração, Desmatamento com vegetação e Desmatamento com solo exposto.',
		'txt24':'Informações completas sobre o projeto DETER',
		'txt25':'Fechar',
		'txt26':'Baixar a tabela com os alertas em formato CSV.',
		'txt27':'Com filtros.',
		'txt28':'Sem filtros.',
		'txt29':'Fechar',
		'header-panel':'| DETER (Alertas)',
		'header-menu':'DETER (Alertas)',
		'maps-sup':'Mapas',
		'analysis-sup':'Gráficos',
		'analysis-des':'PRODES (Desmatamento)',
		'analysis-war':'DETER (Alertas)',
		'map-des':'PRODES (Desmatamento)',
		'map-war':'DETER (Alertas)',
		'goto_video_sup':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'help-sup':'Ajuda',
		'updated':'Atualizado em:',
		/* titles for HTML entities */
		'aggregate_daily':'Alternar para o painel de consulta de dados diários.',
		'prepare_print':'Imprimir esta página utilizando o recurso do navegador.',
		'change_style':'Alternar o estilo de apresentação claro/escuro.',
		'print_page':'Imprimir esta página utilizando o recurso do navegador.',
		'display_warning':'Mais informações sobre as classes.',
		/* Texts inside javascript. */
		'refresh_data':'Tentar carregar os dados.',
		'months_of_prodes_year':['Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
		'footer1':'Gerado pelo INPE/OBT/DPI/TerraBrasilis em',
		'footer2':'sob licença <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">CC BY-SA 4.0</a>',
		'failure_load_data':'Falhou ao carregar os dados.',
		'focus_y_label':'Área (km²)',
		'focus_x_label':'Meses considerando a Sazonalidade Anual do PRODES (Agosto - Julho)',
		'overview_x_label':'Seleção temporal (granularidade mensal)',
		'area': 'Área Agregada',
		'unit': 'km²',
		'warning_class':'Classe válida apenas para o ano PRODES 2015/2016',
		'barArea_x_label':'Sazonalidade Anual do PRODES',
		'tools': 'Ferramentas',
		'help' : 'Ajuda',
		'video': 'Video Introdutório',
		'about': 'Sobre',
		'contactus': 'Contato',
		'nv-chart-day':'Gráficos - Alertas Diários',
		'nv-daily-amz':'Amazônia Legal',
		'nv-aggreg-amz':'Amazônia Legal',
		'nv-chart-agg':'Gráficos - Agregado de Alertas',
		'nv-daily-cer':'Bioma Cerrado',
		'nv-aggreg-cer':'Bioma Cerrado',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Páginas relacionadas',
		'nv-map':'Mapa Interativo',
		'toMap': 'Abrir o mapa interativo',
		'toHome': 'Abrir a página inicial com informações sobre o projeto de monitoramento do Cerrado.',
		'tt-contactus': 'Envie sugestões ou perguntas para:',
		'tt-contactus-menu': 'Envie-nos um e-mail com sugestões e dúvidas sobre o projeto PRODES (prodes@dpi.inpe.br)',
		'about-menu':'Sobre',
		'contactus-menu':'Contato',
		'toDailyChart-amz':'Abrir o painel alertas diários para a Amazônia Legal.',
		'toAggregatedChart-amz':'Abrir o painel agregado mensal de alertas para a Amazônia Legal.',
		'toDailyChart-cer':'Abrir o painel alertas diários para o Bioma Cerrado.',
		'toAggregatedChart-cer':'Abrir o painel agregado mensal de alertas para o Bioma Cerrado.',
		'tituloprint': ' | Variação da detecção de área do projeto DETER com granularidade mensal e sazonalidade anual do PRODES (Agosto a Julho).',
		/* For about modal window  */
		'andre-role':'Desenvolvedor de Software Sênior',
        'co-team-role':'EQUIPE DE COORDENADORES',
        'contrib':'Ex-Colaboradores',
        'fabio-role':'Administrador de Banco de Dados',
        'ney-role':'Web Designer Sênior',
        'adeline-role':'Bolsista de Pesquisa',
        'jether-role':'Desenvolvedor de Software Sênior',
        'karine-role':'Pesquisadora da Divisão de Processamento de Imagens (DIDPI) do INPE',
        'license':'Essas aplicações são oferecidas e distribuídas por terceiros sob seus próprios termos de licença.',
        'lubia-role':'Pesquisadora da Divisão de Processamento de Imagens (DIDPI) do INPE',
        'luiz-role':'Desenvolvedor de Software Pleno',
        'maurano-role':'Tecnologista Sênior da Divisão de Processamento de Imagens (DIDPI) do INPE',
        'support-bndes':'Banco Nacional de Desenvolvimento Econômico e Social (BNDES)',
        'support-inpe':'Instituto Nacional de Pesquisas Espaciais (INPE)',
        'support-funcate':'Fundação de Ciência Aplicações e Tecnologia Espaciais (FUNCATE)',
        'support-fundep':'Fundação de Desenvolvimento da Pesquisa (FUNDEP)',
        'support-world-bank':'Grupo do Banco Mundial',
        'tb-support':'Suporte',
        'tb-view':'Visão',
        'tb-view-text':'O TerraBrasilis é uma plataforma desenvolvida pelo INPE para organização, acesso e uso através de um portal web dos dados geográficos produzidos pelos seus programas de monitoramento ambiental. Em um primeiro momento visa atender principalmente ao Programa Amazônia, mas o conceito e os pacotes de software produzidos podem ser adaptados e customizados para atender a outros projetos que produzam dados geográficos e que pretendem que esses possam ser acessados no ambiente da internet.',
        'link-homepage':'Leia mais informações sobre o TerraBrasilis',
        'tech':'Tecnologias',
        'tech-plat':'Platformas/Software/Bibliotecas ',
        'ti-team-role':'EQUIPE DE T.I.',
		'ab-close-modal':'Fechar',
		'about_technology': 'Tecnologias ',
        'about_technology_languages': 'JavaScript (D3, DC, CrossFilter, Leaflet, Angular 5), Python, PHP, Java',
        'about_technology_heterogeneous': 'Docker Swarm (clusterização de contêineres), Redis MongoDB, PostgreSQL, Nginx HTTP Server (balanceamento de carga e proxy reverso). ',
		'about_technology_services': 'Servidor de compartilhamento de dados geoespaciais (Geoserver) e catálogo de busca de metadados (Geonetwork).',
		'about-modal':'Sobre ',
		'description-modal':'O TerraBrasilis é uma plataforma desenvolvida pelo INPE para organização, acesso e uso através de um portal web dos dados geográficos produzidos pelos seus programas de monitoramento ambiental.',
		'option-modal':'Não mostrar novamente.'
	},
	'en':{
		/* texts into HTML entities */
		'goto_about':'See informations about the project and team.',
		'goto_video':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1c':'Helpful informations about how to use the panel.',
		'txt1d':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1e':'Close',
		'txt1':'DETER panel - monthly',
		'txt2':'Open the Daily Panel',
		'txt3':'Download data',
		'downloadBtn':'Download data in CSV format.',
		'txt4':'Print Graphics',
		'txt4p':'Print Graphics',
		'txt5':'Darken/Enlighten',
		'txt6':'Login',
		'txt7':'Failure on loading data from server.<br>Try reload after some minutes.',
		'txt8':'Filter:',
		'txt9':'Filter:',
		'txt10':'Filter:',
		'txt11':'Filter:',
		'txt30':'The print this document use the browser resources and may have differences among themselves.<br />'+
		'The charts stay well arranged over the print document when the following configurations is defined:<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper orientation is landscape;<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper size is A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- And the margins is the default of the browser.<br />',
		'txt13':'Warning',
		'txt14':'The map filters isn\'t applied in this panel.',
		'txt15':'Analyses - Cerrado',
		'title-chart-agreg':'Area detection variation of DETER project with monthly granularity and PRODES Annual Seasonality (August to July)',
		'title-chart-by-state':'Area by States',
		'title-chart-by-year':'Area by Years',
		'txt16':'Filters by States and year PRODES (August to July).',
		'txt17':'The <strong>Selective Logging</strong> class refers to the sum of the classes Geometric Selective Logging and Disordered Selective Logging for the year PRODES 2015/2016, when these classes were not yet discretized.',
		'txt18':'Clean this filter.',
		'txt19':'Clean this filter.',
		'txt20':'Clean this filter.',
		'txt21':'Clean this filter.',
		'txt22':'Complementar informations',
		'txt23':'The classes representing deforestation alerts are Mining, Deforestation with vegetation and Deforestation with exposed soil.',
		'txt24':'Complete informations about the DETER project.',
		'txt25':'Close',
		'txt26':'Download table with the alerts in CSV format.',
		'txt27':'With filters.',
		'txt28':'Without filters.',
		'txt29':'Close',
		'header-panel':'| DETER (Alerts)',
		'header-menu':'DETER (Alerts)',
		'maps-sup':'Maps',
		'analysis-sup':'Graphics',
		'analysis-des':'PRODES (Deforestation)',
		'analysis-war':'DETER (Alerts)',
		'map-des':'PRODES (Deforestation)',
		'map-war':'DETER (Alerts)',
		'goto_video_sup':'Watch the introductory video to see how an user interact with dashboard tools.',
		'help-sup':'Help',
		'updated':'Updated at:',
		/* titles for HTML entities */
		'aggregate_daily':'Exchange by the analysis panel to daily data.',
		'prepare_print':'Print this page using the browser resources.',
		'change_style':'Exchange the presentation style dark/clear.',
		'print_page':'Print this page using the browser resources.',
		'display_warning':'More informations about the classes.',
		/* Texts inside javascript. */
		'refresh_data':'Retry the data load.',
		'months_of_prodes_year':['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'],
		'footer1':'Generated by the INPE/OBT/DPI/TerraBrasilis in',
		'footer2':'under license <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>',
		'failure_load_data':'Failure in data loading.',
		'focus_y_label':'Area (km²)',
		'focus_x_label':'Months considering PRODES Annual Seasonality (August - July)',
		'overview_x_label':'Temporal selection (monthly granularity)',
		'area': 'Aggregated Area',
		'unit': 'km²',
		'warning_class':'Class valid only for year PRODES 2015/1016',
		'barArea_x_label':'PRODES Annual Seasonality',
		'tools': 'Tools',
		'help' : 'Help',
		'video': 'Introductory Video',
		'about': 'About',
		'contactus': 'Contact us',
		'nv-chart-day':'Graphics - Daily Alerts',
		'nv-daily-amz':'Legal Amazon',
		'nv-aggreg-amz':'Legal Amazon',
		'nv-chart-agg':'Graphics - Aggregate Alerts',
		'nv-daily-cer':'Cerrado Biome',
		'nv-aggreg-cer':'Cerrado Biome',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Related pages',
		'nv-map':'Interactive Map',
		'toMap': 'Open the interactive map.',
		'toHome': 'Open the start page with informations about the Cerrado monitoring project.',
		'tt-contactus': 'Send suggestions or questions to:',
		'tt-contactus-menu': 'Send us an e-mail with suggestions or questions about the PRODES project (prodes@dpi.inpe.br)',
		'about-menu':'About',
		'contactus-menu':'Contact',
		'toDailyChart-amz':'Open the panel daily alerts for Legal Amazon.',
		'toAggregatedChart-amz':'Open the panel aggregate monthly alerts for Legal Amazon.',
		'toDailyChart-cer':'Open the panel daily alerts for Cerrado Biome.',
		'toAggregatedChart-cer':'Open the panel aggregate monthly alerts for Cerrado Biome.',
		'tituloprint': ' | Area detection variation of DETER project with monthly granularity and PRODES Annual Seasonality (August to July).',
		/* For about modal window  */
		'andre-role':'Senior Software Development',
		'co-team-role':'Team of Coordinators',
		'contrib':'Contributors and former members',
		'fabio-role':'Database Administrator',
		'ney-role':'Senior Web Designer',
		'adeline-role':'Research Fellow',
		'jether-role':'Senior Software Development',
		'karine-role':'Researcher of the Division of Image Processing (DIDPI) at INPE',
		'license':'Those applications are offered and distributed by third parties under their own license terms',
		'lubia-role':'Researcher of the Division of Image Processing (DIDPI) of INPE',
		'luiz-role':'Software developer',
		'maurano-role':'Senior Technologist of the Division of Image Processing (DIDPI) at INPE',
		'support-bndes':'Brazilian Development Bank (BNDES)',
		'support-inpe':'National Institute for Space Research (INPE)',
		'support-funcate':'Foundation for Space Science, Technology and Applications (FUNCATE)',
		'support-fundep':'Research Development Foundation (FUNDEP)',
		'support-world-bank':'World Bank Group',
		'tb-support':'Support',
		'tb-view':'Vision',
		'tb-view-text':'TerraBrasilis is a platform developed by INPE to organize, access and use throughout a web portal of geographical data produced by its environmental monitoring programs. At first, it focus mainly on the Amazon Program, but the concept and software packages produced can be adapted and customized to meet other projects that produce geographic data and aim to be accessible in the internet environment.',
		'link-homepage':'More information about TerraBrasilis',
		'tech':'Technology',
		'tech-plat':'Platforms/Software/Libraries',
		'ti-team-role':'IT team',
		'ab-close-modal':'Close',
		'about_technology': 'Technologies ',
        'about_technology_languages': 'JavaScript (D3, DC, CrossFilter, Leaflet, Angular 5), Python, PHP, Java',
        'about_technology_heterogeneous': 'Docker Swarm (containers cluster), Redis MongoDB, PostgreSQL, Nginx HTTP Server (load balancer and reverse proxy).',
		'about_technology_services': 'Server for sharing geospatial data (Geoserver) and metadata search and catalogue (Geonetwork).',
		'about-modal':'About ',
		'description-modal':'TerraBrasilis is a platform developed by INPE for the organization, access and use through a web portal of the geographic data produced by its environmental monitoring programs.',
		'option-modal':'Do not show again.'
	}
};