// Google AdSense setup.
// 1. Fill in ADSENSE_CLIENT (looks like "ca-pub-1234567890123456") once your AdSense account is approved.
// 2. Optional: create ad units in AdSense and put their numeric slot IDs below. Leave a slot ID empty to skip it
//    (if you use Auto ads, the script alone is enough and you can leave both empty).
// 3. Update ads.txt with the same publisher ID (without the "ca-" prefix).
// While ADSENSE_CLIENT is empty nothing is loaded and no ad boxes are shown.
(function () {
  'use strict';

  var ADSENSE_CLIENT = 'ca-pub-2401669527240130';
  var SLOT_IDS = { a: '2089381714', b: '2089381714' };

  if (!ADSENSE_CLIENT) return;

  // The AdSense script is already in each page's <head> (needed for site verification); only add it if missing.
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    var s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(ADSENSE_CLIENT);
    document.head.appendChild(s);
  }

  document.querySelectorAll('.ad-slot').forEach(function (box) {
    var id = SLOT_IDS[box.getAttribute('data-slot')];
    if (!id) return;
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', ADSENSE_CLIENT);
    ins.setAttribute('data-ad-slot', id);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    box.appendChild(ins);
    box.hidden = false;
    // hide the whole box (label and spacing included) if Google has no ad to show
    new MutationObserver(function () {
      if (ins.getAttribute('data-ad-status') === 'unfilled') box.hidden = true;
    }).observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] });
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { /* ad blocker or script not loaded */ }
  });
})();
