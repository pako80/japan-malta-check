// Content for the guide pages. build-guides.js turns each entry into an English page (/<slug>.html)
// and a Maltese page (/mt/<slug>.html). In the text, {home}, {jevic}, {auction}, {tampered}, {faq} become
// links to the other pages in the same language, and {ecert} becomes a link to JEVIC's e-certificate page.
// The Maltese text should be reviewed by a native speaker.

module.exports = [
  {
    slug: 'jevic-check-malta',
    en: {
      title: 'How to Check a Japanese Car’s Mileage on JEVIC | JapanMaltaCheck',
      desc: 'Step-by-step guide for Maltese buyers: look up a Japanese import’s chassis number on the JEVIC website and compare the mileage with the certificate, logbook and dashboard.',
      h1: 'How to check a Japanese car’s mileage on JEVIC',
      intro: 'JEVIC records a car’s mileage before it leaves Japan, and that record is the most reliable figure a buyer in Malta can check. This guide shows how to look it up and what to compare it with.',
      sections: [
        { h: 'What is JEVIC?', p: ['JEVIC is a Japanese company that certifies second-hand cars before they are exported. Its inspectors write a certificate on the condition of the car, including its mileage, and the records are kept in an online database that can be searched with the car’s chassis number.'] },
        { h: 'What you need', p: ['You only need the car’s chassis (frame) number. Japanese domestic-market cars usually have a short number made of a model code, a dash and a serial number, for example NHP10-1234567, instead of a 17-character VIN.', 'Find it in three places and make sure they all match: on the plate in the engine bay or door pillar of the car, on the Maltese logbook, and on the import papers and the JEVIC certificate. If the number on the car does not match the paperwork, stop.'] },
        { h: 'Step by step', ol: ['Read the chassis number from the plate on the car itself, not only from the documents the dealer gives you.', 'Open the {ecert}.', 'Enter the chassis number (or VIN) and submit.', 'Write down the mileage the record shows.', 'Compare it with the mileage on the paper JEVIC certificate, the Japanese auction sheet, the export (deregistration) certificate, the Maltese logbook and the dashboard.'] },
        { h: 'What a good result looks like', p: ['The online figure should match the paper JEVIC certificate. Readings taken later, such as the logbook when the car was registered in Malta and the dashboard today, should be the same or slightly higher. A later reading that is lower than the JEVIC figure means the odometer may have been wound back.'] },
        { h: 'Why not trust the paper certificate alone?', p: ['In the Maltese odometer fraud cases reported in 2022, a forged JEVIC certificate showing the fake mileage was used. The only way to be sure is to look the figure up yourself on JEVIC’s website, as described above.', 'One reported example: a Mazda Demio was registered in Malta with 38,887 km, while its original JEVIC certificate showed 109,785 km.'] },
        { h: 'If the numbers do not match', p: ['Treat any mismatch as a red flag. Do not pay, ask the dealer to explain in writing, and have an independent mechanic inspect the car. If you have already bought the car, read {tampered}.', 'You can also read the {auction} and the {faq}.'] }
      ]
    },
    mt: {
      title: 'Kif Tiċċekkja l-Kilometraġġ ta’ Karozza Ġappuniża mal-JEVIC | JapanMaltaCheck',
      desc: 'Gwida pass pass għax-xerrejja Maltin: fittex in-numru tax-xassi ta’ karozza importata mill-Ġappun fuq is-sit tal-JEVIC u qabbel il-kilometraġġ maċ-ċertifikat, il-logbook u d-dashboard.',
      h1: 'Kif tiċċekkja l-kilometraġġ ta’ karozza Ġappuniża mal-JEVIC',
      intro: 'Il-JEVIC jirreġistra l-kilometraġġ tal-karozza qabel ma titlaq mill-Ġappun, u dan huwa l-aktar ċifra affidabbli li xerrej f’Malta jista’ jivverifika. Din il-gwida turik kif issibha u b’xiex tqabbilha.',
      sections: [
        { h: 'X’inhu l-JEVIC?', p: ['Il-JEVIC hija kumpanija Ġappuniża li tiċċertifika l-karozzi użati qabel jiġu esportati. L-ispetturi tagħha jikkompilaw ċertifikat dwar il-kundizzjoni tal-karozza, inkluż il-kilometraġġ, u r-rekords jinżammu f’database onlajn li tista’ tfittex bin-numru tax-xassi tal-karozza.'] },
        { h: 'X’għandek bżonn', p: ['Għandek bżonn biss in-numru tax-xassi (frame) tal-karozza. Il-karozzi għas-suq domestiku Ġappuniż normalment ikollhom numru qasir magħmul minn kodiċi tal-mudell, sing u numru serjali, per eżempju NHP10-1234567, minflok VIN ta’ 17-il karattru.', 'Sibu fi tliet postijiet u żgura li jaqblu t-tlieta: fuq il-plakka fil-kompartiment tal-magna jew fuq il-pilastru tal-bieb tal-karozza, fuq il-logbook Malti, u fuq id-dokumenti tal-importazzjoni u ċ-ċertifikat tal-JEVIC. Jekk in-numru fuq il-karozza ma jaqbilx mad-dokumenti, waqqaf.'] },
        { h: 'Pass pass', ol: ['Aqra n-numru tax-xassi mill-plakka fuq il-karozza nnifisha, mhux biss mid-dokumenti li jagħtik id-dealer.', 'Iftaħ il-{ecert}.', 'Ikteb in-numru tax-xassi (jew il-VIN) u ibgħat.', 'Ikteb il-kilometraġġ li juri r-rekord.', 'Qabbru mal-kilometraġġ fuq iċ-ċertifikat stampat tal-JEVIC, il-folja tal-irkant Ġappuniża, iċ-ċertifikat tal-esportazzjoni (deregistrazzjoni), il-logbook Malti u d-dashboard.'] },
        { h: 'Kif jidher riżultat tajjeb', p: ['Iċ-ċifra onlajn għandha taqbel maċ-ċertifikat stampat tal-JEVIC. Il-qari li ttieħed aktar tard, bħall-logbook meta l-karozza ġiet irreġistrata f’Malta u d-dashboard illum, għandu jkun l-istess jew ftit ogħla. Qari aktar tard li huwa aktar baxx miċ-ċifra tal-JEVIC ifisser li l-kontakilometri jista’ jkun inġieb lura.'] },
        { h: 'Għaliex ma tafdax iċ-ċertifikat stampat biss?', p: ['Fil-każijiet ta’ frodi fuq il-kontakilometri f’Malta rrappurtati fl-2022, intuża ċertifikat tal-JEVIC falz li wera l-kilometraġġ falz. L-unika mod biex tkun żgur huwa li tfittex iċ-ċifra inti stess fuq is-sit tal-JEVIC, kif deskritt hawn fuq.', 'Eżempju rrappurtat: Mazda Demio ġiet irreġistrata f’Malta b’38,887 km, filwaqt li ċ-ċertifikat oriġinali tal-JEVIC wera 109,785 km.'] },
        { h: 'Jekk in-numri ma jaqblux', p: ['Ittratta kwalunkwe differenza bħala sinjal ta’ periklu. Tħallasx, itlob lid-dealer jispjega bil-miktub, u ħalli mekkanik indipendenti jispezzjona l-karozza. Jekk diġà xrajt il-karozza, aqra {tampered}.', 'Tista’ taqra wkoll il-{auction} u l-{faq}.'] }
      ]
    }
  },
  {
    slug: 'auction-sheet-japanese-car',
    en: {
      title: 'Japanese Auction Sheet Explained: Use It to Check Mileage | JapanMaltaCheck',
      desc: 'What a Japanese auction sheet is, what it shows, how to get one from the chassis number, and how to use it as an independent cross-check on the mileage of a Japanese import.',
      h1: 'What is a Japanese auction sheet and how do you use it?',
      intro: 'Most Japanese cars that are exported have been through an auction in Japan first. The sheet produced there is one of the best independent ways to check a car’s mileage and condition.',
      sections: [
        { h: 'What it shows', p: ['An auction sheet shows the mileage when the car was inspected, an inspection grade, and a diagram of dents, scratches, rust and repairs on the body.'] },
        { h: 'How to get one', ul: ['Ask the dealer for a copy.', 'Or use one of the online services that find the sheet from the chassis number for a small fee. This is the safer route, because it does not depend on a document the seller handed you.'] },
        { h: 'How to use it', ol: ['Compare the mileage on the sheet with the figure you found on the JEVIC website. They should match or be very close.', 'Compare it with the export (deregistration) certificate, the Maltese logbook and the dashboard. Later readings should never be lower.', 'Look at the body diagram and then at the car. Repairs, dents or rust that the sheet does not mention, or marks on the sheet that you cannot find on the car, are worth asking about.'] },
        { h: 'What it cannot tell you', p: ['An auction sheet is a cross-check, not proof. Paper documents can be forged, and the sheet only describes the car on the day it was inspected. Use it together with the JEVIC online record, the logbook, the export certificate and an independent mechanic.'] },
        { h: 'If the sheet does not match', p: ['A mismatch between the sheet and any other document is a red flag. Do not pay until the dealer explains it in writing. For the full process, see {jevic}, {faq} and {tampered}.'] }
      ]
    },
    mt: {
      title: 'Il-Folja tal-Irkant Ġappuniża Spjegata: Uża-ha biex Tiċċekkja l-Kilometraġġ | JapanMaltaCheck',
      desc: 'X’inhi l-folja tal-irkant Ġappuniża, x’turi, kif tikseb waħda min-numru tax-xassi, u kif tużaha bħala verifika indipendenti tal-kilometraġġ ta’ karozza importata mill-Ġappun.',
      h1: 'X’inhi l-folja tal-irkant Ġappuniża u kif tużaha?',
      intro: 'Il-biċċa l-kbira tal-karozzi Ġappuniżi li jiġu esportati jkunu diġà għaddew minn irkant fil-Ġappun. Il-folja li tinħareġ hemm hija waħda mill-aħjar modi indipendenti biex tiċċekkja l-kilometraġġ u l-kundizzjoni tal-karozza.',
      sections: [
        { h: 'X’turi', p: ['Il-folja tal-irkant turi l-kilometraġġ meta l-karozza ġiet spezzjonata, grad tal-ispezzjoni, u dijagramma tal-ħabtiet, il-grif, il-ħadid u t-tiswijiet fuq il-karrozzerija.'] },
        { h: 'Kif tikseb waħda', ul: ['Itlob kopja mid-dealer.', 'Jew uża wieħed mis-servizzi onlajn li jsibu l-folja min-numru tax-xassi għal ħlas żgħir. Din hija r-rotta aktar sigura, għax ma tiddependix minn dokument li tak il-bejjiegħ.'] },
        { h: 'Kif tużaha', ol: ['Qabbel il-kilometraġġ fuq il-folja maċ-ċifra li sibt fuq is-sit tal-JEVIC. Għandhom jaqblu jew ikunu qrib ħafna.', 'Qabbilha maċ-ċertifikat tal-esportazzjoni (deregistrazzjoni), il-logbook Malti u d-dashboard. Il-qari aktar tard ma għandux ikun qatt aktar baxx.', 'Ħares lejn id-dijagramma tal-karrozzerija u mbagħad lejn il-karozza. Tiswijiet, ħabtiet jew ħadid li l-folja ma semmietx, jew marki fuq il-folja li ma ssibhomx fuq il-karozza, jixirqilhom mistoqsija.'] },
        { h: 'X’ma tistax tgħidlek', p: ['Il-folja tal-irkant hija verifika inkroċjata, mhux prova. Id-dokumenti stampati jistgħu jiġu ffalsifikati, u l-folja tiddeskrivi l-karozza biss fil-jum li ġiet spezzjonata. Użaha flimkien mar-rekord onlajn tal-JEVIC, il-logbook, iċ-ċertifikat tal-esportazzjoni u mekkanik indipendenti.'] },
        { h: 'Jekk il-folja ma taqbilx', p: ['Differenza bejn il-folja u kwalunkwe dokument ieħor hija sinjal ta’ periklu. Tħallasx sakemm id-dealer ma jispjegax bil-miktub. Għall-proċess sħiħ, ara {jevic}, {faq} u {tampered}.'] }
      ]
    }
  },
  {
    slug: 'tampered-mileage-malta',
    en: {
      title: 'Bought a Japanese Car With Tampered Mileage in Malta? What to Do | JapanMaltaCheck',
      desc: 'If you think the mileage on your Japanese import in Malta was wound back: how to confirm it, what evidence to keep, and who to report it to.',
      h1: 'Bought a car with tampered mileage in Malta? What to do',
      intro: 'In 2022, MaltaToday reported that hundreds of consumers in Malta had been sold second-hand Japanese cars with tampered mileage. If you think this happened to you, these are the practical first steps.',
      sections: [
        { h: 'Background', p: ['According to the reports, high-mileage cars were bought cheaply at Japanese auctions and sold in Malta with a low figure on the dashboard. Dealers were later charged with odometer fraud and money laundering. The case is for the courts to decide.'] },
        { h: '1. Confirm the real mileage', ol: ['Get your car’s chassis number from the plate on the car and from the logbook.', 'Look it up on the {ecert} and note the mileage.', 'Compare it with the mileage in your Maltese logbook and on the dashboard. A JEVIC figure that is clearly higher than the logbook is the pattern seen in the reported cases.', 'Transport Malta has also published a page on how to check whether the mileage in your logbook matches the JEVIC database: {tm}.'] },
        { h: '2. Keep all the evidence', ul: ['A screenshot or printout of the JEVIC record, with the date.', 'Your logbook, the sales contract, the receipt, and the JEVIC certificate the dealer gave you.', 'Photos of the dashboard showing the mileage.', 'All messages, emails and adverts from the seller.'] },
        { h: '3. Report it', p: ['Affected buyers have been advised to report their case to the Consumers Authority and to the police. Do this as soon as you have confirmed a mismatch.'] },
        { h: '4. Get independent advice', p: ['Consider getting legal advice before negotiating with the dealer. Do not sign anything that waives your rights. This page is general information, not legal advice.'] },
        { h: 'Avoiding it next time', p: ['See {jevic} and the {faq} to learn how to check the real mileage before you pay.'] }
      ]
    },
    mt: {
      title: 'Xrajt Karozza Ġappuniża b’Kilometraġġ Immanipulat f’Malta? X’għandek Tagħmel | JapanMaltaCheck',
      desc: 'Jekk taħseb li l-kilometraġġ tal-karozza importata mill-Ġappun tiegħek f’Malta nġieb lura: kif tikkonfermah, liema evidenza żżomm, u lil min tirrapporta.',
      h1: 'Xrajt karozza b’kilometraġġ immanipulat f’Malta? X’għandek tagħmel',
      intro: 'Fl-2022, MaltaToday irrapporta li mijiet ta’ konsumaturi f’Malta nbigħulhom karozzi użati Ġappuniżi b’kilometraġġ immanipulat. Jekk taħseb li dan ġara lilek, dawn huma l-ewwel passi prattiċi.',
      sections: [
        { h: 'Sfond', p: ['Skont ir-rapporti, karozzi b’ħafna kilometri nxtraw bi prezz rħis fl-irkantijiet Ġappuniżi u nbiegħu f’Malta b’ċifra baxxa fuq id-dashboard. Id-dilers wara ġew akkużati b’frodi fuq il-kontakilometri u ħasil tal-flus. Il-każ huwa għall-qrati biex jiddeċiedu.'] },
        { h: '1. Ikkonferma l-kilometraġġ veru', ol: ['Ikseb in-numru tax-xassi tal-karozza tiegħek mill-plakka fuq il-karozza u mill-logbook.', 'Fittxu fuq il-{ecert} u ikteb il-kilometraġġ.', 'Qabbru mal-kilometraġġ fil-logbook Malti tiegħek u fuq id-dashboard. Ċifra tal-JEVIC li hija ċarament ogħla mil-logbook hija l-mudell li deher fil-każijiet irrapportati.', 'Transport Malta ippubblikat ukoll paġna dwar kif tara jekk il-kilometraġġ fil-logbook jaqbilx mad-database tal-JEVIC: {tm}.'] },
        { h: '2. Żomm l-evidenza kollha', ul: ['Screenshot jew printout tar-rekord tal-JEVIC, bid-data.', 'Il-logbook tiegħek, il-kuntratt tal-bejgħ, ir-riċevuta, u ċ-ċertifikat tal-JEVIC li tak id-dealer.', 'Ritratti tad-dashboard li juru l-kilometraġġ.', 'Il-messaġġi, l-emails u r-riklami kollha mingħand il-bejjiegħ.'] },
        { h: '3. Irrapporta', p: ['Ix-xerrejja affettwati ġew avżati jirrappurtaw il-każ tagħhom lill-Awtorità għall-Konsumatur u lill-pulizija. Agħmel dan hekk kif tikkonferma differenza.'] },
        { h: '4. Ikseb pariri indipendenti', p: ['Ikkunsidra li tikseb parir legali qabel ma tinnegozja mad-dealer. Issinjax xejn li jċedi d-drittijiet tiegħek. Din il-paġna hija informazzjoni ġenerali, mhux parir legali.'] },
        { h: 'Kif tevitaha fil-futur', p: ['Ara {jevic} u l-{faq} biex titgħallem kif tiċċekkja l-kilometraġġ veru qabel ma tħallas.'] }
      ]
    }
  },
  {
    slug: 'faq-japanese-car-mileage-malta',
    en: {
      title: 'Japanese Car Mileage in Malta: Frequently Asked Questions | JapanMaltaCheck',
      desc: 'Answers to common questions from Maltese buyers: JEVIC, chassis numbers, auction sheets, export certificates, the Maltese logbook and what to do about a mismatch.',
      h1: 'Japanese car mileage in Malta: frequently asked questions',
      intro: 'Short answers to the questions buyers ask most when they are about to pay for a Japanese import.',
      faq: [
        ['What is a chassis (frame) number?', 'It is the car’s unique ID. On Japanese domestic-market cars it is usually a model code, a dash and a serial number, such as NHP10-1234567. It is on a plate in the engine bay or door pillar, on the Maltese logbook and on the import papers, and all of them must match.'],
        ['What is JEVIC?', 'JEVIC is a Japanese company that inspects and certifies second-hand cars before export. It records the car’s condition and mileage in an online database that can be searched by chassis number.'],
        ['Is the paper JEVIC certificate enough?', 'No. In the fraud cases reported in Malta, a forged JEVIC certificate showing the fake mileage was used. Always look up the figure yourself on the JEVIC website. See {jevic}.'],
        ['What is an auction sheet?', 'It is the inspection sheet from the Japanese auction where the car was sold. It shows mileage, a condition grade and a diagram of dents and repairs, and it is a good independent cross-check. See {auction}.'],
        ['What is the export (deregistration) certificate?', 'It is the official Japanese document that records the car’s registration history and its odometer readings at past inspections. Ask the dealer for a copy and check that the mileage rises sensibly over time.'],
        ['Does the Maltese logbook show the real mileage?', 'No, it shows the mileage declared when the car was registered in Malta. It is issued by Transport Malta and handed to you by the dealer, and it should never be lower than the JEVIC figure.'],
        ['Should the dashboard match JEVIC exactly?', 'The dashboard will normally show the same or slightly more, because the car has been shipped and driven since it was inspected. It should never show less.'],
        ['What if the car came via the UK?', 'You can also check its free UK MOT history on GOV.UK with the UK registration number. It shows the mileage at every test.'],
        ['Do I still need a mechanic?', 'Yes. An independent mechanic can compare the wear on the pedals, steering wheel, seats and gear knob with the claimed mileage, and some garages can read mileage stored in other control units.'],
        ['What if the numbers do not match?', 'Treat it as a red flag and do not pay. If you have already bought the car, see {tampered}.']
      ],
      sections: []
    },
    mt: {
      title: 'Kilometraġġ ta’ Karozza Ġappuniża f’Malta: Mistoqsijiet Frekwenti | JapanMaltaCheck',
      desc: 'Tweġibiet għal mistoqsijiet komuni mingħand ix-xerrejja Maltin: JEVIC, numri tax-xassi, folji tal-irkant, ċertifikati tal-esportazzjoni, il-logbook Malti u x’tagħmel jekk in-numri ma jaqblux.',
      h1: 'Kilometraġġ ta’ karozza Ġappuniża f’Malta: mistoqsijiet frekwenti',
      intro: 'Tweġibiet qosra għall-mistoqsijiet li x-xerrejja jistaqsu l-aktar meta jkunu se jħallsu għal karozza importata mill-Ġappun.',
      faq: [
        ['X’inhu n-numru tax-xassi (frame)?', 'Huwa l-ID uniku tal-karozza. Fuq il-karozzi għas-suq domestiku Ġappuniż normalment ikun kodiċi tal-mudell, sing u numru serjali, bħal NHP10-1234567. Jidher fuq plakka fil-kompartiment tal-magna jew fuq il-pilastru tal-bieb, fuq il-logbook Malti u fuq id-dokumenti tal-importazzjoni, u t-tlieta jridu jaqblu.'],
        ['X’inhu l-JEVIC?', 'Il-JEVIC hija kumpanija Ġappuniża li tispezzjona u tiċċertifika l-karozzi użati qabel l-esportazzjoni. Tirreġistra l-kundizzjoni u l-kilometraġġ tal-karozza f’database onlajn li tista’ tfittex bin-numru tax-xassi.'],
        ['Iċ-ċertifikat stampat tal-JEVIC huwa biżżejjed?', 'Le. Fil-każijiet ta’ frodi rrappurtati f’Malta, intuża ċertifikat tal-JEVIC falz li wera l-kilometraġġ falz. Dejjem fittex iċ-ċifra inti stess fuq is-sit tal-JEVIC. Ara {jevic}.'],
        ['X’inhi l-folja tal-irkant?', 'Hija l-folja tal-ispezzjoni mill-irkant Ġappuniż fejn inbigħet il-karozza. Turi l-kilometraġġ, grad tal-kundizzjoni u dijagramma tal-ħabtiet u tat-tiswijiet, u hija verifika indipendenti tajba. Ara {auction}.'],
        ['X’inhu ċ-ċertifikat tal-esportazzjoni (deregistrazzjoni)?', 'Huwa d-dokument uffiċjali Ġappuniż li jirreġistra l-istorja tar-reġistrazzjoni tal-karozza u l-qari tal-kontakilometri fl-ispezzjonijiet preċedenti. Itlob kopja mid-dealer u ara li l-kilometraġġ jogħla b’mod loġiku maż-żmien.'],
        ['Il-logbook Malti juri l-kilometraġġ veru?', 'Le, juri l-kilometraġġ iddikjarat meta l-karozza ġiet irreġistrata f’Malta. Huwa maħruġ minn Transport Malta u mogħti lilek mid-dealer, u ma għandu jkun qatt aktar baxx miċ-ċifra tal-JEVIC.'],
        ['Id-dashboard għandu jaqbel eżatt mal-JEVIC?', 'Normalment id-dashboard juri l-istess jew ftit aktar, għax il-karozza ġiet ittrasportata u misjuqa wara l-ispezzjoni. Ma għandux juri qatt inqas.'],
        ['U jekk il-karozza waslet mir-Renju Unit?', 'Tista’ tiċċekkja wkoll l-istorja tal-MOT b’xejn fuq GOV.UK bin-numru tar-reġistrazzjoni Ingliż. Turi l-kilometraġġ f’kull test.'],
        ['Għadni neħtieġ mekkanik?', 'Iva. Mekkanik indipendenti jista’ jqabbel il-ħsara fuq il-pedali, l-isteering wheel, is-sits u l-gear knob mal-kilometraġġ dikjarat, u xi garaxxijiet jistgħu jaqraw kilometraġġ maħżun fi unitajiet oħra tal-kontroll.'],
        ['U jekk in-numri ma jaqblux?', 'Ittratta dan bħala sinjal ta’ periklu u tħallasx. Jekk diġà xrajt il-karozza, ara {tampered}.']
      ],
      sections: []
    }
  }
];
