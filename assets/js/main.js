const Fuse = require('./fuse.basic.min.js');

document.querySelector('.menu-btn').addEventListener('click', (function () {
  document.body.classList.toggle('sidebar-open'),
  this.innerHTML = 'show all lists' == this.innerHTML ? 'hide all lists' : 'show all lists'
}));
let e = document.querySelector('.search-field'),
t = document.querySelectorAll('.grid .list-container'),
n = [
];
t.forEach((function (e) {
  n.push({
    attribute: e.dataset.search,
    item: e
  })
}));
let i = new Fuse(n, {
  caseSensitive: !1,
  shouldSort: !1,
  threshold: 0.2,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    'attribute'
  ]
});
e.addEventListener('keyup', (function (e) {
  let n = i.search(this.value);
  0 != n.length ? (t.forEach((function (e) {
    e.style.display = 'none'
  })), n.forEach((function (e) {
    e.item.item.style.display = 'block'
  })))  : t.forEach((function (e) {
    e.style.display = 'initial'
  }))
}))
