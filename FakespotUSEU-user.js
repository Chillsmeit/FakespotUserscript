// ==UserScript==
// @name     Fakespot Amazon
// @version  2
// @match    https://*.amazon.com/*
// @match    https://*.amazon.de/*
// @match    https://*.amazon.es/*
// @match    https://*.amazon.fr/*
// @match    https://*.amazon.it/*
// @match    https://*.amazon.jp/*
// @match    https://*.amazon.nl/*
// @match    https://*.amazon.se/*
// @match    https://*.amazon.co.uk/*
// @homepage     https://github.com/Chillsmeit/FakespotUserscript
// @homepageURL  https://github.com/Chillsmeit/FakespotUserscript
// @source       github:Chillsmeit/FakespotUserscript
// @supportURL   https://github.com/Chillsmeit/FakespotUserscript/issues
// @downloadURL  https://raw.githack.com/Chillsmeit/FakespotUserscript/main/blob/FakespotUS&EU.js
// ==/UserScript==

const url = "https://www.fakespot.com/analyze?url="+ encodeURIComponent(window.location)
window.addEventListener('load', () => {

  let ratings = document.getElementById("averageCustomerReviews_feature_div");
  let a = document.createElement('a')
  a.href = url
  a.innerText = "Fakespot"
  a.target="_blank"

  let askPipe = document.createElement('span')
  askPipe.className = "askPipe"
  askPipe.innerText = "|"

  ratings.append(askPipe)
  ratings.append(a)

}, false);
