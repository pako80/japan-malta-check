// English text lives in index.html (and EN_JS below). This file holds the Maltese
// translations and the language switching. Maltese copy should be reviewed by a native speaker.
(function () {
  'use strict';

  var MT = {
    'brand': 'Kontroll tal-Kilometraġġ',
    'nav.check': 'Kif tixtri',
    'nav.sources': 'Terminoloġija',
    'nav.flags': 'Sinjali ta\' periklu',
    'nav.checklist': 'Lista',
    'hero.h1': 'Kif tixtri karozza Ġappuniża f\'Malta',
    'hero.sub': 'Mingħajr ma tiġi mqarraq mid-dealers',
    'jevic.h': 'Iċċekkja l-kilometraġġ fuq is-sit tal-JEVIC',
    'jevic.sub': 'Il-JEVIC jiċċertifika l-karozzi użati qabel l-esportazzjoni u jirreġistra l-kundizzjoni u l-kilometraġġ f\'database onlajn li tista\' tfittex bin-numru tax-xassi. Din hija l-aktar verifika importanti.',
    'lookup.btn': 'Sit tal-JEVIC ↗',
    's1.link': 'Verifika uffiċjali tal-e-ċertifikat tal-JEVIC ↗',
    'step1.alt': 'Ċertifikat tal-JEVIC miżmum maġenb il-plakka fil-kompartiment tal-magna, b\'vleġġa li turi li ż-żewġ numri tax-xassi jaqblu.',
    'step1.h': 'Fittex in-numru tax-xassi u itlob iċ-ċertifikat tal-JEVIC',
    'step1.p': 'Peress li ċ-ċertifikat tal-JEVIC li jagħtik il-bejjiegħ jista\' jiġi ffalsifikat faċilment, żgura li tieħu n-numru tax-xassi mill-karozza nnifisha (minn plakka fil-kompartiment tal-magna jew fuq il-pilastru tal-bieb) u kkonferma li jaqbel man-numru tax-xassi fuq iċ-ċertifikat tal-JEVIC. Imbagħad ivverifika l-kilometraġġ tal-JEVIC onlajn inti stess billi tikteb in-numru tax-xassi fuq <a href="https://ecert.jenesis-it.com/odo" target="_blank" rel="noopener">is-sit tal-JEVIC</a> u żgura li jaqblu jew huma simili.',
    'step2.alt': 'Xerrej iżomm il-folja tal-irkant, iċ-ċertifikat tal-esportazzjoni (deregistrazzjoni) u ċ-ċertifikat tal-JEVIC, kollha b\'75,000 km, li jaqblu mal-logbook Malti u mad-dashboard.',
    'step2.h': 'Itlob il-folja tal-irkant u ċ-ċertifikat tal-esportazzjoni (deregistrazzjoni)',
    'step2.p': 'Il-kilometraġġ li tikseb mis-sit tal-JEVIC għandu jaqbel mal-kilometraġġ fuq il-folja tal-irkant u fuq iċ-ċertifikat tal-esportazzjoni (deregistrazzjoni) u ma\' dak fuq id-dashboard, u jogħla b\'mod loġiku maż-żmien. Qabbilhom ukoll mal-logbook Malti (maħruġ minn Transport Malta u mogħti lilek mid-dealer). Jekk ikun hemm differenza f\'kwalunkwe wieħed mid-dokumenti, dan huwa sinjal ta\' periklu.',
    'step3.alt': 'Mekkanik indipendenti jispezzjona l-magna ta\' karozza b\'torċa waqt li x-xerrej jaraha u l-bejjiegħ iħares b\'dirgħajh maqsuma.',
    'step3.h': 'Itlob li mekkanik indipendenti jispezzjona l-karozza',
    'step3.p': 'Il-ħsara fuq il-pedali, l-isteering wheel, is-sits u l-gear knob għandha taqbel mal-kilometraġġ. Jekk il-bejjiegħ jirrifjuta kwalunkwe wieħed minn dawn il-passi, tixtrix il-karozza.',
    'tm.h': 'Paġna uffiċjali ta\' Transport Malta',
    'tm.sub': 'Jekk għandek bżonn aktar informazzjoni mur fuq is-sit uffiċjali ta\' TM',
    'tm.btn': 'Mur fuq il-paġna ta\' Transport Malta ↗',
    'ad.label': 'Riklam',
    'foot.privacy': 'Politika tal-privatezza',
    'pv.h1': 'Politika tal-privatezza',
    'pv.updated': 'L-aħħar aġġornament: 20 ta\' Ottubru 2026',
    'pv.who.h': 'Min imexxi dan is-sit',
    'pv.who.p': 'Dan is-sit huwa gwida indipendenti għax-xerrejja ta\' karozzi użati Ġappuniżi f\'Malta. Imexxih [isem l-operatur]. Kuntatt: [email tal-kuntatt].',
    'pv.data.h': 'X\'niġbru',
    'pv.data.p': 'Is-sit m\'għandux kontijiet jew formoli. Ma nitolbux u ma naħżnux ismek, l-indirizz tal-email tiegħek jew xi numru tax-xassi li tfittex. Meta tagħfas link lejn il-JEVIC, il-browser tiegħek imur direttament fuq is-sit tal-JEVIC; aħna ma nidħlu xejn f\'dak li tikteb hemm.',
    'pv.local.h': 'X\'jinħażen fuq l-apparat tiegħek',
    'pv.local.p': 'L-għażla tal-lingwa tiegħek u l-punti li timmarka fuq il-lista jinħażnu fl-archiviju lokali tal-browser tiegħek, fuq l-apparat tiegħek biss. Qatt ma jintbagħtu lilna. Tista\' tneħħihom meta trid billi tnaddaf id-data tas-siti tal-browser tiegħek.',
    'pv.ads.h': 'Riklamar',
    'pv.ads.p': 'Dan is-sit jista\' juri riklami mogħtija minn Google AdSense. Google u s-sħab tagħha jistgħu jużaw cookies u teknoloġiji simili biex juru u jkejlu r-riklami, inklużi riklami personalizzati jekk taqbel. Fejn meħtieġ, l-ewwel se jintalab il-kunsens tiegħek u tista\' tbiddel l-għażla tiegħek aktar tard. Tista\' taqra kif Google tuża l-informazzjoni minn siti li jużaw is-servizzi tagħha fuq <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.',
    'pv.links.h': 'Siti oħra',
    'pv.links.p': 'Dan is-sit jirrimanda għal siti oħra bħall-JEVIC, Transport Malta, GOV.UK u MaltaToday. Dawn għandhom il-politiki tal-privatezza tagħhom stess, u aħna mhux responsabbli għalihom.',
    'pv.rights.h': 'Id-drittijiet tiegħek',
    'pv.rights.p': 'Taħt il-GDPR tista\' tistaqsi liema data personali hija miżmuma dwarek, u titlob li tiġi korretta jew imħassra. Tista\' tressaq ilment ukoll quddiem l-Uffiċċju tal-Kummissarju għall-Informazzjoni u l-Protezzjoni tad-Data (IDPC) f\'Malta.',
    'pv.back': '← Lura għall-gwida',
    'why.h': 'Għaliex',
    'why.alt': 'Bejjiegħ tal-karozzi juri dokument tal-kilometraġġ b\'180,000 km imsewwed u 75,000 km miktub minflok, waqt li xerrej inkwetat jaraha.',
    'nav.why': 'Għaliex',
    'why.lead': 'Il-frodi fuq il-kontakilometri tal-karozzi importati mill-Ġappun kellha prezz għoli għax-xerrejja Maltin. Mijiet ta\' konsumaturi nbigħulhom karozzi b\'kontakilometri mmanipulati, u d-dilers wara ġew akkużati b\'frodi fuq il-kontakilometri u ħasil tal-flus. Din il-gwida turik kif tivverifika l-kilometraġġ veru qabel ma tħallas.',
    'case.l1': 'Murija fil-logbook ta\' Malta',
    'case.l2': 'Ċertifikat oriġinali tal-JEVIC',
    'case.note': 'Mazda Demio, kif irrappurtat minn MaltaToday. Dawn huma 70,898 km li sparixxew.',
    'chassis.alt': 'Kompartiment tal-magna ta\' karozza Ġappuniża b\'vleġġa tindika l-plakka tan-numru tal-frame li tgħid NHP10-1234567.',
    'chassis.h': 'Għaliex in-numru tax-xassi huwa importanti',
    'chassis.p1': 'Kważi kull verifika tiddependi minnu. Il-karozzi għas-suq domestiku Ġappuniż spiss ikollhom numru tal-frame qasir minflok VIN ta\' 17-il karattru: kodiċi tal-mudell, sing, u numru serjali, per eżempju <code>NHP10-1234567</code>.',
    'chassis.p2': 'Sib tliet postijiet fejn jidher u żgura li t-tlieta jaqblu:',
    'chassis.l1': 'Il-logbook Malti',
    'chassis.l2': 'Il-plakka fil-kompartiment tal-magna jew fuq il-pilastru tal-bieb',
    'chassis.l3': 'Iċ-ċertifikat tal-JEVIC u d-dokumenti tal-importazzjoni',
    'chassis.note': 'Jekk in-numru fuq il-karozza ma jaqbilx mad-dokumenti, waqqaf. Tkomplix bix-xiri.',
    'src.h': 'Terminoloġija',
    'src.sub': 'Ikseb id-dokumentazzjoni kollha li tista\'. Dokument stampat falsifikat jista\' jqarraq bik; diversi sorsi indipendenti li jaqblu huma ħafna aktar diffiċli biex jiġu ffalsifikati.',
    's1.h': 'Ċertifikat u database tal-JEVIC',
    's1.p': 'Il-JEVIC jiċċertifika l-karozzi użati qabel l-esportazzjoni u jirreġistra l-kundizzjoni u l-kilometraġġ f\'database onlajn li tista\' tfittex bin-numru tax-xassi. Din hija l-aktar verifika importanti.',
    's1.warn': 'Titkellimx fuq il-kopja stampata biss. Fil-każijiet ta\' frodi, id-dilers użaw ċertifikat tal-JEVIC falz li wera l-kilometraġġ falz. Dejjem ikkonferma ċ-ċifra inti stess fir-rekord onlajn.',
    's1.need': '<strong>Għandek bżonn:</strong> numru tax-xassi, marka, mudell u sena approssimattiva. In-numru tač-ċertifikat tal-JEVIC jekk għandek il-kopja stampata.',
    's2.h': 'Transport Malta jew il-Logbook Malti',
    's2.p': 'Il-logbook Malti huwa d-dokument tar-reġistrazzjoni tal-karozza maħruġ minn Transport Malta. Juri l-kilometraġġ iddikjarat meta l-karozza ġiet irreġistrata f\'Malta, li ma għandux ikun qatt aktar baxx miċ-ċifra tal-JEVIC. Transport Malta tispjega wkoll kif ix-xerrejja jistgħu jaraw jekk il-kilometraġġ tal-logbook jaqbilx mad-database tal-JEVIC.',
    's2.need': '<strong>Għandek bżonn:</strong> in-numru tar-reġistrazzjoni Malti, id-dettalji tal-logbook u n-numru tax-xassi.',
    's2.link': 'MaltaToday: Lista ta\' Transport Malta għax-xerrejja ↗',
    's3.h': 'Folja tal-irkant Ġappuniż',
    's3.p': 'Il-biċċa l-kbira tal-karozzi esportati jgħaddu minn irkantijiet Ġappuniżi. Il-folja turi l-kilometraġġ, grad tal-ispezzjoni, u dijagramma tal-ħabtiet, il-grif, il-ħadid u t-tiswijiet. Diversi servizzi onlajn isibuha bin-numru tax-xassi għal ħlas żgħir. Verifika indipendenti tajba kontra l-JEVIC.',
    's3.need': '<strong>Għandek bżonn:</strong> in-numru tax-xassi.',
    's4.h': 'Ċertifikat tal-esportazzjoni (deregistrazzjoni)',
    's4.p': 'Dan id-dokument uffiċjali Ġappuniż jirreġistra l-istorja tar-reġistrazzjoni u l-qari tal-kontakilometri fl-ispezzjonijiet preċedenti. Itlob kopja mid-dealer u ara li l-kilometraġġ jiżdied b\'mod loġiku maż-żmien.',
    's4.need': '<strong>Għandek bżonn:</strong> kopja mid-dealer.',
    's5.h': 'Storja tal-MOT tar-Renju Unit <span class="opt">(jekk rilevanti)</span>',
    's5.p': 'Xi karozzi "Ġappuniżi" jaslu Malta mir-Renju Unit. L-istorja tal-MOT b\'xejn tal-gvern Ingliż turi l-kilometraġġ f\'kull test.',
    's5.need': '<strong>Għandek bżonn:</strong> in-numru tar-reġistrazzjoni Ingliż.',
    's5.link': 'GOV.UK: Iċċekkja l-istorja tal-MOT ↗',
    'flags.alt': 'Xerrej jgħolli idu biex iwaqqaf bejjiegħ tal-karozzi aggressiv, b\'bandiera ħamra fuq rasu.',
    'flags.h': 'Itlaq jekk',
    'flags.1': '<strong>Il-bejjiegħ ma jistax jew ma jridx juri ċ-ċertifikat tal-JEVIC.</strong>',
    'flags.2': '<strong>Il-kilometraġġ ivarja</strong> bejn il-logbook, il-JEVIC, il-folja tal-irkant u d-dashboard.',
    'flags.3': '<strong>Il-karozza turi ħafna aktar użu</strong> milli jissuġġerixxi l-kilometraġġ tagħha.',
    'flags.4': '<strong>In-numru tax-xassi fuq il-karozza</strong> ma jaqbilx mad-dokumenti.',
    'flags.5': '<strong>Il-prezz huwa tajjeb wisq.</strong> Fir-racket irrappurtat, karozzi b\'ħafna kilometri nxtraw bi prezz rħis fl-irkantijiet Ġappuniżi u nbiegħu Malta b\'kilometraġġ baxx.',
    'flags.ch': 'Diġà xrajt u sibt problema?',
    'flags.cp': 'Ix-xerrejja affettwati ġew avżati jirrappurtaw il-każ tagħhom lill-<strong>Awtorità għall-Konsumatur</strong> u lill-<strong>pulizija</strong>. Żomm il-logbook, ir-rekord tal-JEVIC, il-kuntratt tal-bejgħ u l-messaġġi kollha mal-bejjiegħ.',
    'chk.h': 'Il-lista tax-xiri tiegħek',
    'chk.sub': 'Immarka l-punti hekk kif tlestihom. Il-progress tiegħek jinħażen f\'dan il-browser biss.',
    'chk.print': 'Stampa l-lista',
    'chk.reset': 'Reset',
    'about.h': 'Sorsi u dikjarazzjoni',
    'about.p': 'Ibbażat fuq ir-rappurtaġġ ta\' MaltaToday:',
    'about.l1': 'Mijiet ġew ingannati f\'racket ta\' kilometraġġ mmanipulat fuq karozzi użati importati mill-Ġappun ↗',
    'about.l2': 'Transport Malta tipproduċi lista għax-xerrejja ta\' karozzi użati Ġappuniżi ↗',
    'about.small': 'Dan is-sit huwa gwida indipendenti, mhux affiljat mal-JEVIC, ma\' Transport Malta jew ma\' xi korp governattiv. L-għodda tat-tqabbil hija indikattiva biss u ma tistax tipprova jew teskludi manipulazzjoni. Ma tissostitwixxix il-verifika tar-rekords uffiċjali u spezzjoni mekkanika indipendenti.',
    'foot': 'Kontroll tal-Kilometraġġ · Gwida b\'xejn għax-xerrejja Maltin tal-karozzi',
    'meta.title': 'Kif Tixtri Karozza Ġappuniża f\'Malta | JapanMaltaCheck',
    'meta.desc': 'Gwida b\'xejn għax-xerrejja Maltin: iċċekkja l-kilometraġġ veru ta\' karozza importata mill-Ġappun biċ-ċertifikat tal-JEVIC, il-folja tal-irkant u l-logbook qabel ma tħallas.',

    // strings used by app.js
    'js.chk.1': 'Itlob iċ-ċertifikat tal-JEVIC mingħand il-bejjiegħ',
    'js.chk.2': 'In-numru tax-xassi fuq il-karozza jaqbel mal-logbook u mad-dokumenti tal-importazzjoni',
    'js.chk.3': 'Fittixt ir-rekord tal-JEVIC onlajn bin-numru tax-xassi jien stess',
    'js.chk.4': 'Il-kilometraġġ tal-JEVIC jaqbel mal-kilometraġġ tal-logbook Malti mar-reġistrazzjoni',
    'js.chk.5': 'Sibt il-folja tal-irkant Ġappuniż u qabbilt il-kilometraġġ',
    'js.chk.6': 'Kisbt kopja taċ-ċertifikat tal-esportazzjoni (deregistrazzjoni); il-kilometraġġ jogħla b\'mod loġiku maż-żmien',
    'js.chk.7': 'Jekk waslet mir-Renju Unit: iċċekkjajt l-istorja tal-MOT fuq GOV.UK',
    'js.chk.8': 'Mekkanik indipendenti spezzjona l-karozza (mhux il-garaxx tal-bejjiegħ)',
    'js.chk.9': 'Is-sorsi kollha jaqblu, u għandi kopja tad-dokumenti kollha'
  };

  var EN_JS = {
    'js.chk.1': 'Ask seller for the JEVIC certificate',
    'js.chk.2': 'Chassis number on the car matches the logbook and import papers',
    'js.chk.3': 'Looked up the JEVIC record online by chassis number myself',
    'js.chk.4': 'JEVIC mileage matches the Maltese logbook mileage at registration',
    'js.chk.5': 'Found the Japanese auction sheet and compared the mileage',
    'js.chk.6': 'Got a copy of the export (deregistration) certificate; mileage rises sensibly over time',
    'js.chk.7': 'If it came via the UK: checked the GOV.UK MOT history',
    'js.chk.8': 'Independent mechanic inspected the car (not the seller\'s garage)',
    'js.chk.9': 'All sources agree, and I have copies of every document'
  };

  // Each language is its own static page (/ for English, /mt/ for Maltese), so the language
  // comes from the <html lang> attribute. Only the checklist is filled in by script.
  var lang = document.documentElement.lang === 'mt' ? 'mt' : 'en';
  var listeners = [];

  function t(key, vars) {
    var s = lang === 'mt' ? MT[key] : EN_JS[key];
    if (s === undefined) s = EN_JS[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  window.I18N = {
    t: t,
    get lang() { return lang; },
    onChange: function (fn) { listeners.push(fn); },
    init: function () { listeners.forEach(function (fn) { fn(); }); }
  };
})();
