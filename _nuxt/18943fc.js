(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{386:function(t,e,n){t.exports=n.p+"img/ouen3.6a1ad9f.JPG"},387:function(t,e,n){t.exports=n.p+"img/ouen1.38b1dc5.jpeg"},388:function(t,e,n){t.exports=n.p+"img/ouen2.a0de78d.JPG"},389:function(t,e,n){t.exports=n.p+"img/ouen4.39509a7.JPG"},390:function(t,e,n){t.exports=n.p+"img/ouen5.66585a3.JPG"},391:function(t,e,n){t.exports=n.p+"img/ouen6.c1f6520.JPG"},547:function(t,e,n){"use strict";n.r(e);n(18),n(8),n(61);e.default={name:"TopSection",data:function(){return{currentSlide:0,slides:[{id:0,img:n(386)},{id:1,img:n(387)},{id:2,img:n(388)},{id:3,img:n(389)},{id:4,img:n(390)},{id:5,img:n(391)}],fade:"next",show:!0,timer:0}},computed:{Slides:function(){var t=this;return this.slides.filter((function(e){return e.id===t.currentSlide}))}},created:function(){var t=this;this.timer=setInterval((function(){t.autoPlay()}),3e3)},methods:{autoPlay:function(){this.currentSlide++,this.currentSlide===this.slides.length&&(this.currentSlide=0)}}}}}]);