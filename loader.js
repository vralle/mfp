/**
 * Description:	Magnific Popup support for phpBBex
 * URI:	http://phpbbex.com/forum/viewtopic.php?t=562
 * Author: Vitaliy Ralle
 * Email: email4vit [] gmail.com
 * License:	MIT
 * License URI:	http://www.gnu.org/licenses/gpl-3.0.html
 */

/*yepnope1.5.x|WTFPL*/
(function(k,f,O){function D(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function q(){var a=t.shift();u=1;a?a.t?s(function(){("c"==a.t?e.injectCss:e.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),q()):u=0}function P(a,d,Q,g,R,p,b){function h(b){if(!E&&D(l.readyState)&&(F.r=E=1,!u&&q(),b)){"img"!=a&&s(function(){G.removeChild(l)},50);for(var c in m[d])if(m[d].hasOwnProperty(c))m[d][c].onload();l.onload=l.onreadystatechange=null}}b=b||e.errorTimeout;var l=f.createElement(a),E=0,z=0,F={t:Q,s:d,
e:R,a:p,x:b};1===m[d]&&(z=1,m[d]=[]);"object"==a?(l.data=d,l.setAttribute("type","text/css")):(l.src=d,l.type=a);l.width=l.height="0";l.onerror=l.onload=l.onreadystatechange=function(){h.call(this,z)};t.splice(g,0,F);"img"!=a&&(z||2===m[d]?(A(),G.insertBefore(l,H?null:n),s(h,b)):m[d].push(l))}function S(a,d,f,g,e){u=0;d=d||"j";v(a)?P("c"==d?T:I,a,d,this.i++,f,g,e):(t.splice(this.i++,0,a),1==t.length&&q());return this}function J(){var a=e;a.loader={load:S,i:0};return a}var r=f.documentElement,s=k.setTimeout,
n=f.getElementsByTagName("script")[0],B={}.toString,t=[],u=0,w=function(){},K="MozAppearance"in r.style,H=K&&!!f.createRange().compareNode,G=H?r:n.parentNode,x=k.opera&&"[object Opera]"==B.call(k.opera),x=!!f.attachEvent&&!x,r="webkitAppearance"in r.style&&!("async"in f.createElement("script")),I=K?"object":x||r?"script":"img",T=x?"script":r?"img":I,L=Array.isArray||function(a){return"[object Array]"==B.call(a)},v=function(a){return"string"==typeof a},y=function(a){return"[object Function]"==B.call(a)},
A=function(){n&&n.parentNode||(n=f.getElementsByTagName("script")[0])},C=[],m={},M={timeout:function(a,d){d.length&&(a.timeout=d[0]);return a}},N,e;e=function(a){function d(a){a=a.split("!");var d=C.length,b=a.pop(),f=a.length,b={url:b,origUrl:b,prefixes:a},g,c,e;for(c=0;c<f;c++)e=a[c].split("="),(g=M[e.shift()])&&(b=g(b,e));for(c=0;c<d;c++)b=C[c](b);return b}function f(a){a=a.split("?")[0];return a.substr(a.lastIndexOf(".")+1)}function g(a,b,g,e,h){var c=d(a),n=c.autoCallback;f(c.url);if(!c.bypass){b&&
(b=y(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(c.instead)return c.instead(a,b,g,e,h);m[c.url]&&!0!==c.reexecute?c.noexec=!0:m[c.url]=1;a&&g.load(c.url,c.forceCSS||!c.forceJS&&"css"==f(c.url)?"c":O,c.noexec,c.attrs,c.timeout);(y(b)||y(n))&&g.load(function(){J();b&&b(c.origUrl,h,e);n&&n(c.origUrl,h,e);m[c.url]=2})}}function n(a,b){function d(a,e){if(""!==a&&!a)!e&&p();else if(v(a))e||(c=function(){var a=[].slice.call(arguments);h.apply(this,a);p()}),g(a,c,b,0,f);else if(Object(a)===a)for(k in m=
function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(k)&&(e||--m||(y(c)?c=function(){var a=[].slice.call(arguments);h.apply(this,a);p()}:c[k]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b);p()}}(h[k])),g(a[k],c,b,k,f))}var f=!!a.test,e=a.load||a.both,c=a.callback||w,h=c,p=a.complete||w,m,k;d(f?a.yep:a.nope,!!e||!!a.complete);e&&d(e);!e&&a.complete&&d("")}var p,b,h=this.yepnope.loader;if(v(a))g(a,0,h,0);else if(L(a))for(p=0;p<a.length;p++)b=
a[p],v(b)?g(b,0,h,0):L(b)?e(b):Object(b)===b&&n(b,h);else Object(a)===a&&n(a,h)};e.addPrefix=function(a,d){M[a]=d};e.addFilter=function(a){C.push(a)};e.errorTimeout=1E4;null==f.readyState&&f.addEventListener&&(f.readyState="loading",f.addEventListener("DOMContentLoaded",N=function(){f.removeEventListener("DOMContentLoaded",N,0);f.readyState="complete"},0));k.yepnope=J();k.yepnope.executeStack=q;k.yepnope.injectJs=function(a,d,k,g,m,p){var b=f.createElement("script"),h,l;g=g||e.errorTimeout;b.src=
a;for(l in k)b.setAttribute(l,k[l]);d=p?q:d||w;b.onreadystatechange=b.onload=function(){!h&&D(b.readyState)&&(h=1,d(),b.onload=b.onreadystatechange=null)};s(function(){h||(h=1,d(1))},g);A();m?b.onload():n.parentNode.insertBefore(b,n)};k.yepnope.injectCss=function(a,d,e,g,k,m){g=f.createElement("link");var b;d=m?q:d||w;g.href=a;g.rel="stylesheet";g.type="text/css";for(b in e)g.setAttribute(b,e[b]);k||(A(),n.parentNode.insertBefore(g,n),s(d,0))}})(this,document);

!function ($) {
	$(function(){
		function getImgWidth(img) {
			var t = new Image()
			t.src = (img.getAttribute ? img.getAttribute("src") : false) || img.src
			return t.width
		}

		function pushLightbox(img) {
				var lightboxLink = []
				for (var i=0;i<img.length;i++) {
					var p = img[i]
					var parentEl = p.parentNode
					if (parentEl.tagName && parentEl.tagName.toLowerCase() !== "a") {
						if (getImgWidth(p) > 400) {
							var link = document.createElement("a")
							link.href = p.src
							link.appendChild(p.cloneNode(true))
							parentEl.replaceChild(link, p)
							lightboxLink.push(link);
						}
					} else if (parentEl.tagName && parentEl.tagName.toLowerCase() === "a") {
						/\.(jpe?g|png|gif|bmp)(&.*)?$/ig.test(parentEl.href) && lightboxLink.push(parentEl)
					}
				}
			return lightboxLink
		}

		function addZoomIcon(arr) {
			for (i in arr) {
				var linkStyle = arr[i].style
				linkStyle.position = "relative"
				linkStyle.display = "inline-block"
				var icon = document.createElement('i')
				icon.classList ? icon.classList.add("icon-zoom-large") : icon.className += "icon-zoom-large"
				arr[i].appendChild(icon)
			}
		}

		$(window).on('load', function () {
			var img = pushLightbox(document.getElementById("page-body").getElementsByTagName("img"))
			if (img) {
				addZoomIcon(img)
				var targetFolder = document.getElementById("mfp-loader").getAttribute("data-path") + "mfp/" 
				yepnope.injectCss(targetFolder + "mfp.min.css");
				yepnope.injectJs(targetFolder + "jquery.magnific-popup.min.js", function () {
					if (document.documentElement.lang == 'ru') {
							$.extend(true, $.magnificPopup.defaults, {
								tClose: "Закрыть (Esc)", // Alt text on close button
								tLoading: "Загрузка...", // Text that is displayed during loading. Can contain %curr% and %total% keys
								gallery: {
									tPrev: "Назад (Клв. Влево)", // Alt text on left arrow
									tNext: "Вперед (Клв. Вправо)", // Alt text on right arrow
									tCounter: "%curr% из %total%" // Markup for "1 of 7" counter
								},
								image: {
									tError: '<a href="%url%">Изображение</a> не загружено.' // Error message when image could not be loaded
								}
							});
						}
						$(img).magnificPopup({
							gallery: {
								enabled: true
							},
							image: {
								titleSrc: function(item) {
									var $title = "picture";
									if( item.el.find("img").attr("title") ) {
										$title = item.el.find("img").attr("title");
									} else if ( item.el.find("img").attr("alt") ) {
										$title = item.el.find("img").attr("alt");
									}
									return $title +' <a href="' + item.src + '" target="_blank"><i class="icon-link-ext-white"></i></a>';
								}
							},
							type: 'image'
						});
				}, {
					charset: "utf-8"
				});
			}
		})
	})
}(window.jQuery)