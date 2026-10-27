/* Project switcher (research.html, news.html): marks the section at the top of the screen as current, and sets --progress
   (0 to 1) for how far through it you are. Each link's href must match the id of a section on the page.
   Without this script the bar still sticks and the links still work; only the highlight and the progress line are missing. */
(function () {
  var bar = document.querySelector('.project-switch');
  if (!bar) return;
  var links = Array.prototype.slice.call(bar.querySelectorAll('a'));
  var sections = links.map(function (a) { return document.querySelector(a.hash); });

  function update() {
    var line = bar.offsetHeight + 1;
    var i = 0;
    sections.forEach(function (s, n) { if (s.getBoundingClientRect().top <= line) i = n; });
    // Progress runs from the section reaching the bar to the next one reaching it. The last section has no next one,
    // so it counts as done when its bottom reaches the bottom of the screen.
    var box = sections[i].getBoundingClientRect();
    var span = i < sections.length - 1 ? box.height : Math.max(1, box.height - window.innerHeight + line);
    var progress = Math.min(1, Math.max(0, (line - box.top) / span));
    links.forEach(function (a, n) {
      if (n === i) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
    bar.style.setProperty('--progress', progress);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
