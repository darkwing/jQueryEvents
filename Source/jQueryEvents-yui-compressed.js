/*
---
description:     jQueryEvents

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Element.click
  - Element.mouseenter
  - (etc.)
...
*/
var hash=new Hash(Element.NativeEvents);hash.erase("mouseover").erase("mouseout").erase("DOMMouseScroll");hash.include("mouseenter",1).include("mouseleave",1);var eventHash=new Hash({});hash.getKeys().each(function(a){eventHash[a]=function(b){this.addEvent(a,b);return this;};});Element.implement(eventHash);