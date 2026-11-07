// Marks the section being read in the contents list. The page works without it.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  var targets = links.map(function (a) {
    var id = decodeURIComponent(a.getAttribute("href").slice(1));
    byId[id] = a;
    return document.getElementById(id);
  }).filter(Boolean);

  var current = null;
  function mark(id) {
    if (current) { current.classList.remove("is-current"); current.removeAttribute("aria-current"); }
    current = byId[id] || null;
    if (current) { current.classList.add("is-current"); current.setAttribute("aria-current", "location"); }
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.dataset.seen = e.isIntersecting ? "1" : ""; });
    var last = null;
    targets.forEach(function (t) {
      if (t.getBoundingClientRect().top < window.innerHeight * 0.35) last = t;
    });
    if (last) mark(last.id);
  }, { rootMargin: "0px 0px -65% 0px" });

  targets.forEach(function (t) { observer.observe(t); });
})();
