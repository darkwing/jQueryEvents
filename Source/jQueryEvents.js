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
  - Element.click (etc.)
...
*/
//hash the element.natives so we can do stuff with it
var hash = new Hash(Element.NativeEvents);
//remove items that need to be replaced, add their replacements
hash.erase('mouseover').erase('mouseout').erase('DOMMouseScroll');
hash.include('mouseenter',1).include('mouseleave',1);
//initialize this
var eventHash = new Hash({});
//for every event type, add to our hash
hash.getKeys().each(function(event){
	eventHash[event] = function(fn) {
		this.addEvent(event,fn);
		return this;
	};
});
//make it happen
Element.implement(eventHash);