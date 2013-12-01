/**
 * Description:	Magnific Popup support for phpBBex
 * URI:	https://github.com/vralle/mfp
 * Author: Vitaliy Ralle
 * Email: email4vit [] gmail.com
 * License:	MIT
 */

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
		
		var loader = function(d) {
			var js, css,
			where = d.getElementsByTagName('script')[0]
			function isFileReady( readyState ) {
				return ( ! readyState || readyState == "loaded" || readyState == "complete" || readyState == "uninitialized" )
			}
			return {
				addCss: function(url) {
					css = d.createElement('link');
					css.rel = 'stylesheet';
					css.href = url;
					where.parentNode.insertBefore(css, where);
				},
				addJs: function(url, cb) {
					var done
					js = d.createElement('script');
					js.onreadystatechange = js.onload = function () {
						if ( ! done && isFileReady( js.readyState ) ) {
							done = 1
							cb()
							js.onload = js.onreadystatechange = null;
						}
					}
					js.src = url;
					where.parentNode.insertBefore(js, where);
				}
			}
		}(document)

		$(window).on('load', function () {
			var img = pushLightbox(document.getElementById("page-body").getElementsByTagName("img"))
			if (typeof img !== 'undefined' && img.length > 0) {
				addZoomIcon(img)
				var targetFolder = document.getElementById("mfp-loader").getAttribute("data-path") + "mfp/" 
				loader.addCss(targetFolder + "mfp.min.css");
				loader.addJs(targetFolder + "jquery.magnific-popup.min.js", function () {
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
									var $title = "picture"
									if( item.el.find("img").attr("title") ) {
										$title = item.el.find("img").attr("title")
									} else if ( item.el.find("img").attr("alt") ) {
										$title = item.el.find("img").attr("alt")
									}
									return $title +' <a href="' + item.src + '" target="_blank"><i class="icon-link-ext-white"></i></a>'
								}
							},
							type: 'image'
						})
				})
			}
		})
	})
}(window.jQuery)
