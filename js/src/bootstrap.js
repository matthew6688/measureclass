// build time:Mon Jul 03 2017 11:13:49 GMT+1000 (AEST)
$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerESCKeyEvent();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav");var t="site-nav-on";var o=e.hasClass(t);var a=o?"slideUp":"slideDown";var i=o?"removeClass":"addClass";e.stop()[a]("fast",function(){e[i](t)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});
//rebuild by neat 