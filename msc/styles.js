(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Add application styles & imports to this file! */\r\n/* W3.CSS 4.13 June 2019 by Jan Egil and Borge Refsnes */\r\nhtml{box-sizing:border-box}\r\n*,*:before,*:after{box-sizing:inherit}\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\r\nbody{margin:0}\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}\r\nsummary{display:list-item}\r\naudio,canvas,progress,video{display:inline-block}\r\nprogress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden],template{display:none}\r\na{background-color:transparent}\r\na:active,a:hover{outline-width:0}\r\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\r\nb,strong{font-weight:bolder}\r\ndfn{font-style:italic}\r\nmark{background:#ff0;color:#000}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}\r\nsup{top:-0.5em}\r\nfigure{margin:1em 40px}\r\nimg{border-style:none}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\r\nhr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea,optgroup{font:inherit;margin:0}\r\noptgroup{font-weight:bold}\r\nbutton,input{overflow:visible}\r\nbutton,select{text-transform:none}\r\nbutton,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\r\ntextarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\nhtml,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}\r\nhtml{overflow-x:hidden}\r\nh1{font-size:36px}\r\nh2{font-size:30px}\r\nh3{font-size:24px}\r\nh4{font-size:20px}\r\nh5{font-size:18px}\r\nh6{font-size:16px}\r\n.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}\r\n.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}\r\nimg{vertical-align:middle}\r\na{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}\r\n.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}\r\n.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}\r\n.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}\r\n.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}\r\n.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}\r\n.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}\r\n.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}\r\n.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}\r\n.w3-tooltip .w3-text{display:none}\r\n.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}\r\n.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}\r\n.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}\r\n.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}\r\n.w3-col.s2{width:16.66666%}\r\n.w3-col.s3{width:24.99999%}\r\n.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}\r\n.w3-col.s6{width:49.99999%}\r\n.w3-col.s7{width:58.33333%}\r\n.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}\r\n.w3-col.s10{width:83.33333%}\r\n.w3-col.s11{width:91.66666%}\r\n.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-rest{overflow:hidden}\r\n.w3-stretch{margin-left:-16px;margin-right:-16px}\r\n.w3-content,.w3-auto{margin-left:auto;margin-right:auto}\r\n.w3-content{max-width:980px}\r\n.w3-auto{max-width:1140px}\r\n.w3-cell-row{display:table;width:100%}\r\n.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}\r\n.w3-cell-middle{vertical-align:middle}\r\n.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}\r\n.w3-show-block,.w3-show{display:block!important}\r\n.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:1205px){.w3-auto{max-width:95%}}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}\r\n.w3-top{top:0}\r\n.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}\r\n.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}\r\n.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}\r\n.w3-display-container:hover span.w3-display-hover{display:inline-block}\r\n.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}\r\n.w3-round,.w3-round-medium{border-radius:4px}\r\n.w3-round-large{border-radius:8px}\r\n.w3-round-xlarge{border-radius:16px}\r\n.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}\r\n@-webkit-keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\r\n@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}\r\n@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}\r\n@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}\r\n@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}\r\n@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}\r\n@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}\r\n@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}\r\n@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}\r\n@-webkit-keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}\r\n@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}\r\n.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}\r\n.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}\r\n.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}\r\n.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}\r\n.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}\r\n.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}\r\n.w3-small{font-size:12px!important}\r\n.w3-medium{font-size:15px!important}\r\n.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}\r\n.w3-xxlarge{font-size:36px!important}\r\n.w3-xxxlarge{font-size:48px!important}\r\n.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}\r\n.w3-right-align{text-align:right!important}\r\n.w3-justify{text-align:justify!important}\r\n.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}\r\n.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}\r\n.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}\r\n.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}\r\n.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}\r\n.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}\r\n.w3-margin-top{margin-top:16px!important}\r\n.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}\r\n.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}\r\n.w3-padding{padding:8px 16px!important}\r\n.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}\r\n.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}\r\n.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}\r\n.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}\r\n.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}\r\n.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}\r\n/* You can add global styles to this file, and also import other style files */\r\nbody{\r\n    margin: 0px;\r\n   \r\n}\r\n/* For All Header so in Global Style Sheet  */\r\n.topHeader{\r\n   /* top:0; */\r\n   /* position: absolute; */\r\n\r\n}\r\n/* *{\r\n    font-size: 8px !important;\r\n} */\r\np {\r\n  font-family: Lato;\r\n}\r\n.faceBorder {\r\n    position: fixed;\r\n    top: 10;\r\n    left: 10;\r\n    height: 15px;\r\n    width: 15px;\r\n    border: 2px solid black;\r\n    /* {\"total\":11,\"width\":104,\"height\":104,\"x\":48,\"y\":34} */\r\n}\r\n.mainDiv {\r\n    position: relative;\r\n    /* height: 300px; */\r\n    /* width: 300px; */\r\n    /* align-items: center; */\r\n    /* margin: 10px; */\r\n    border: 1px solid black;\r\n}\r\n.faceRecogDiv {\r\n    position: absolute;\r\n    border: 2px solid green;\r\n    color: white ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2Fzc2V0cy9jc3MvdzMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQ0FwRCx5REFBeUQ7QUFDekQsS0FBSyxxQkFBcUIsQ0FBQztBQUFBLG1CQUFtQixrQkFBa0IsQ0FBQztBQUNqRSx3RkFBd0Y7QUFDeEYsS0FBSywwQkFBMEIsNkJBQTZCLENBQUM7QUFBQSxLQUFLLFFBQVEsQ0FBQztBQUMzRSw0RUFBNEUsYUFBYSxDQUFDO0FBQUEsUUFBUSxpQkFBaUIsQ0FBQztBQUNwSCw0QkFBNEIsb0JBQW9CLENBQUM7QUFBQSxTQUFTLHVCQUF1QixDQUFDO0FBQ2xGLHNCQUFzQixhQUFhLFFBQVEsQ0FBQztBQUFBLGtCQUFrQixZQUFZLENBQUM7QUFDM0UsRUFBRSw0QkFBNEIsQ0FBQztBQUFBLGlCQUFpQixlQUFlLENBQUM7QUFDaEUsWUFBWSxtQkFBbUIsMEJBQTBCLHlDQUFnQyxBQUFoQyxnQ0FBZ0MsQ0FBQztBQUMxRixTQUFTLGtCQUFrQixDQUFDO0FBQUEsSUFBSSxpQkFBaUIsQ0FBQztBQUFBLEtBQUssZ0JBQWdCLFVBQVUsQ0FBQztBQUNsRixNQUFNLGFBQWEsQ0FBQztBQUFBLFFBQVEsY0FBYyxjQUFjLGtCQUFrQix1QkFBdUIsQ0FBQztBQUNsRyxJQUFJLGNBQWMsQ0FBQztBQUFBLElBQUksVUFBVSxDQUFDO0FBQUEsT0FBTyxlQUFlLENBQUM7QUFBQSxJQUFJLGlCQUFpQixDQUFDO0FBQy9FLGtCQUFrQixnQ0FBZ0MsYUFBYSxDQUFDO0FBQUEsR0FBRyx1QkFBdUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUNwSCxzQ0FBc0MsYUFBYSxRQUFRLENBQUM7QUFBQSxTQUFTLGdCQUFnQixDQUFDO0FBQ3RGLGFBQWEsZ0JBQWdCLENBQUM7QUFBQSxjQUFjLG1CQUFtQixDQUFDO0FBQ2hFLGdEQUFnRCx5QkFBeUIsQ0FBQztBQUMxRSx3SEFBd0gsa0JBQWtCLFNBQVMsQ0FBQztBQUNwSiw0R0FB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Q0FFM0I7QUFDRDs7SUFFSTtBQUNKO0VBQ0Usa0JBQWtCO0NBQ25CO0FBSUQ7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix5REFBeUQ7Q0FDNUQ7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYXBwbGljYXRpb24gc3R5bGVzICYgaW1wb3J0cyB0byB0aGlzIGZpbGUhICovXHJcbkBpbXBvcnQgdXJsKFwiYXNzZXRzL2Nzcy93My5jc3NcIik7XHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuYm9keXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICBcclxufVxyXG5cclxuLyogRm9yIEFsbCBIZWFkZXIgc28gaW4gR2xvYmFsIFN0eWxlIFNoZWV0ICAqL1xyXG4udG9wSGVhZGVye1xyXG4gICAvKiB0b3A6MDsgKi9cclxuICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cclxufVxyXG4vKiAqe1xyXG4gICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcclxufSAqL1xyXG5wIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG5cclxuXHJcblxyXG4uZmFjZUJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwO1xyXG4gICAgbGVmdDogMTA7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLyoge1widG90YWxcIjoxMSxcIndpZHRoXCI6MTA0LFwiaGVpZ2h0XCI6MTA0LFwieFwiOjQ4LFwieVwiOjM0fSAqL1xyXG59XHJcblxyXG4ubWFpbkRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZmFjZVJlY29nRGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlIDtcclxufSIsIi8qIFczLkNTUyA0LjEzIEp1bmUgMjAxOSBieSBKYW4gRWdpbCBhbmQgQm9yZ2UgUmVmc25lcyAqL1xyXG5odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLCo6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fVxyXG4vKiBFeHRyYWN0IGZyb20gbm9ybWFsaXplLmNzcyBieSBOaWNvbGFzIEdhbGxhZ2hlciBhbmQgSm9uYXRoYW4gTmVhbCBnaXQuaW8vbm9ybWFsaXplICovXHJcbmh0bWx7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfVxyXG5hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixtYWluLG1lbnUsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfVxyXG5hdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2t9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9XHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9W2hpZGRlbl0sdGVtcGxhdGV7ZGlzcGxheTpub25lfVxyXG5he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9YTphY3RpdmUsYTpob3ZlcntvdXRsaW5lLXdpZHRoOjB9XHJcbmFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfVxyXG5iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfW1hcmt7YmFja2dyb3VuZDojZmYwO2NvbG9yOiMwMDB9XHJcbnNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9XHJcbnN1Yntib3R0b206LTAuMjVlbX1zdXB7dG9wOi0wLjVlbX1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWltZ3tib3JkZXItc3R5bGU6bm9uZX1cclxuY29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1cclxuYnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYSxvcHRncm91cHtmb250OmluaGVyaXQ7bWFyZ2luOjB9b3B0Z3JvdXB7Zm9udC13ZWlnaHQ6Ym9sZH1cclxuYnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfVxyXG5idXR0b24sW3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9XHJcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fVxyXG5maWVsZHNldHtib3JkZXI6MXB4IHNvbGlkICNjMGMwYzA7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfVxyXG5sZWdlbmR7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31cclxuW3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXXtwYWRkaW5nOjB9XHJcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31cclxuW3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9XHJcblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9XHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9XHJcbi8qIEVuZCBleHRyYWN0ICovXHJcbmh0bWwsYm9keXtmb250LWZhbWlseTpWZXJkYW5hLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MS41fWh0bWx7b3ZlcmZsb3cteDpoaWRkZW59XHJcbmgxe2ZvbnQtc2l6ZTozNnB4fWgye2ZvbnQtc2l6ZTozMHB4fWgze2ZvbnQtc2l6ZToyNHB4fWg0e2ZvbnQtc2l6ZToyMHB4fWg1e2ZvbnQtc2l6ZToxOHB4fWg2e2ZvbnQtc2l6ZToxNnB4fS53My1zZXJpZntmb250LWZhbWlseTpzZXJpZn1cclxuaDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1mYW1pbHk6XCJTZWdvZSBVSVwiLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO21hcmdpbjoxMHB4IDB9LnczLXdpZGV7bGV0dGVyLXNwYWNpbmc6NHB4fVxyXG5ocntib3JkZXI6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO21hcmdpbjoyMHB4IDB9XHJcbi53My1pbWFnZXttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b31pbWd7dmVydGljYWwtYWxpZ246bWlkZGxlfWF7Y29sb3I6aW5oZXJpdH1cclxuLnczLXRhYmxlLC53My10YWJsZS1hbGx7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7d2lkdGg6MTAwJTtkaXNwbGF5OnRhYmxlfS53My10YWJsZS1hbGx7Ym9yZGVyOjFweCBzb2xpZCAjY2NjfVxyXG4udzMtYm9yZGVyZWQgdHIsLnczLXRhYmxlLWFsbCB0cntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkfS53My1zdHJpcGVkIHRib2R5IHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9XHJcbi53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZmZmfS53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1cclxuLnczLWhvdmVyYWJsZSB0Ym9keSB0cjpob3ZlciwudzMtdWwudzMtaG92ZXJhYmxlIGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2NjY30udzMtY2VudGVyZWQgdHIgdGgsLnczLWNlbnRlcmVkIHRyIHRke3RleHQtYWxpZ246Y2VudGVyfVxyXG4udzMtdGFibGUgdGQsLnczLXRhYmxlIHRoLC53My10YWJsZS1hbGwgdGQsLnczLXRhYmxlLWFsbCB0aHtwYWRkaW5nOjhweCA4cHg7ZGlzcGxheTp0YWJsZS1jZWxsO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi53My10YWJsZSB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQsLnczLXRhYmxlLWFsbCB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUtYWxsIHRkOmZpcnN0LWNoaWxke3BhZGRpbmctbGVmdDoxNnB4fVxyXG4udzMtYnRuLC53My1idXR0b257Ym9yZGVyOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo4cHggMTZweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcH1cclxuLnczLWJ0bjpob3Zlcntib3gtc2hhZG93OjAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSl9XHJcbi53My1idG4sLnczLWJ1dHRvbnstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LWtodG1sLXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9ICAgXHJcbi53My1kaXNhYmxlZCwudzMtYnRuOmRpc2FibGVkLC53My1idXR0b246ZGlzYWJsZWR7Y3Vyc29yOm5vdC1hbGxvd2VkO29wYWNpdHk6MC4zfS53My1kaXNhYmxlZCAqLDpkaXNhYmxlZCAqe3BvaW50ZXItZXZlbnRzOm5vbmV9XHJcbi53My1idG4udzMtZGlzYWJsZWQ6aG92ZXIsLnczLWJ0bjpkaXNhYmxlZDpob3Zlcntib3gtc2hhZG93Om5vbmV9XHJcbi53My1iYWRnZSwudzMtdGFne2JhY2tncm91bmQtY29sb3I6IzAwMDtjb2xvcjojZmZmO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnczLWJhZGdle2JvcmRlci1yYWRpdXM6NTAlfVxyXG4udzMtdWx7bGlzdC1zdHlsZS10eXBlOm5vbmU7cGFkZGluZzowO21hcmdpbjowfS53My11bCBsaXtwYWRkaW5nOjhweCAxNnB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9LnczLXVsIGxpOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbTpub25lfVxyXG4udzMtdG9vbHRpcCwudzMtZGlzcGxheS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LnczLXRvb2x0aXAgLnczLXRleHR7ZGlzcGxheTpub25lfS53My10b29sdGlwOmhvdmVyIC53My10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG4udzMtcmlwcGxlOmFjdGl2ZXtvcGFjaXR5OjAuNX0udzMtcmlwcGxle3RyYW5zaXRpb246b3BhY2l0eSAwc31cclxuLnczLWlucHV0e3BhZGRpbmc6OHB4O2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYzt3aWR0aDoxMDAlfVxyXG4udzMtc2VsZWN0e3BhZGRpbmc6OXB4IDA7d2lkdGg6MTAwJTtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjfVxyXG4udzMtZHJvcGRvd24tY2xpY2ssLnczLWRyb3Bkb3duLWhvdmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyfVxyXG4udzMtZHJvcGRvd24taG92ZXI6aG92ZXIgLnczLWRyb3Bkb3duLWNvbnRlbnR7ZGlzcGxheTpibG9ja31cclxuLnczLWRyb3Bkb3duLWhvdmVyOmZpcnN0LWNoaWxkLC53My1kcm9wZG93bi1jbGljazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7Y29sb3I6IzAwMH1cclxuLnczLWRyb3Bkb3duLWhvdmVyOmhvdmVyID4gLnczLWJ1dHRvbjpmaXJzdC1jaGlsZCwudzMtZHJvcGRvd24tY2xpY2s6aG92ZXIgPiAudzMtYnV0dG9uOmZpcnN0LWNoaWxke2JhY2tncm91bmQtY29sb3I6I2NjYztjb2xvcjojMDAwfVxyXG4udzMtZHJvcGRvd24tY29udGVudHtjdXJzb3I6YXV0bztjb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7bWluLXdpZHRoOjE2MHB4O21hcmdpbjowO3BhZGRpbmc6MDt6LWluZGV4OjF9XHJcbi53My1jaGVjaywudzMtcmFkaW97d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6NnB4fVxyXG4udzMtc2lkZWJhcntoZWlnaHQ6MTAwJTt3aWR0aDoyMDBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O3otaW5kZXg6MTtvdmVyZmxvdzphdXRvfVxyXG4udzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1ob3ZlciwudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1jbGlja3t3aWR0aDoxMDAlfVxyXG4udzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1ob3ZlciAudzMtZHJvcGRvd24tY29udGVudCwudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1jbGljayAudzMtZHJvcGRvd24tY29udGVudHttaW4td2lkdGg6MTAwJX1cclxuLnczLWJhci1ibG9jayAudzMtZHJvcGRvd24taG92ZXIgLnczLWJ1dHRvbiwudzMtYmFyLWJsb2NrIC53My1kcm9wZG93bi1jbGljayAudzMtYnV0dG9ue3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpsZWZ0O3BhZGRpbmc6OHB4IDE2cHh9XHJcbi53My1tYWluLCNtYWlue3RyYW5zaXRpb246bWFyZ2luLWxlZnQgLjRzfVxyXG4udzMtbW9kYWx7ei1pbmRleDozO2Rpc3BsYXk6bm9uZTtwYWRkaW5nLXRvcDoxMDBweDtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzphdXRvO2JhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwKTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC40KX1cclxuLnczLW1vZGFsLWNvbnRlbnR7bWFyZ2luOmF1dG87YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MDtvdXRsaW5lOjA7d2lkdGg6NjAwcHh9XHJcbi53My1iYXJ7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59LnczLWNlbnRlciAudzMtYmFye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG99XHJcbi53My1iYXIgLnczLWJhci1pdGVte3BhZGRpbmc6OHB4IDE2cHg7ZmxvYXQ6bGVmdDt3aWR0aDphdXRvO2JvcmRlcjpub25lO2Rpc3BsYXk6YmxvY2s7b3V0bGluZTowfVxyXG4udzMtYmFyIC53My1kcm9wZG93bi1ob3ZlciwudzMtYmFyIC53My1kcm9wZG93bi1jbGlja3twb3NpdGlvbjpzdGF0aWM7ZmxvYXQ6bGVmdH1cclxuLnczLWJhciAudzMtYnV0dG9ue3doaXRlLXNwYWNlOm5vcm1hbH1cclxuLnczLWJhci1ibG9jayAudzMtYmFyLWl0ZW17d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDE2cHg7dGV4dC1hbGlnbjpsZWZ0O2JvcmRlcjpub25lO3doaXRlLXNwYWNlOm5vcm1hbDtmbG9hdDpub25lO291dGxpbmU6MH1cclxuLnczLWJhci1ibG9jay53My1jZW50ZXIgLnczLWJhci1pdGVte3RleHQtYWxpZ246Y2VudGVyfS53My1ibG9ja3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9XHJcbi53My1yZXNwb25zaXZle2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteDphdXRvfVxyXG4udzMtY29udGFpbmVyOmFmdGVyLC53My1jb250YWluZXI6YmVmb3JlLC53My1wYW5lbDphZnRlciwudzMtcGFuZWw6YmVmb3JlLC53My1yb3c6YWZ0ZXIsLnczLXJvdzpiZWZvcmUsLnczLXJvdy1wYWRkaW5nOmFmdGVyLC53My1yb3ctcGFkZGluZzpiZWZvcmUsXHJcbi53My1jZWxsLXJvdzpiZWZvcmUsLnczLWNlbGwtcm93OmFmdGVyLC53My1jbGVhcjphZnRlciwudzMtY2xlYXI6YmVmb3JlLC53My1iYXI6YmVmb3JlLC53My1iYXI6YWZ0ZXJ7Y29udGVudDpcIlwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH1cclxuLnczLWNvbCwudzMtaGFsZiwudzMtdGhpcmQsLnczLXR3b3RoaXJkLC53My10aHJlZXF1YXJ0ZXIsLnczLXF1YXJ0ZXJ7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlfVxyXG4udzMtY29sLnMxe3dpZHRoOjguMzMzMzMlfS53My1jb2wuczJ7d2lkdGg6MTYuNjY2NjYlfS53My1jb2wuczN7d2lkdGg6MjQuOTk5OTklfS53My1jb2wuczR7d2lkdGg6MzMuMzMzMzMlfVxyXG4udzMtY29sLnM1e3dpZHRoOjQxLjY2NjY2JX0udzMtY29sLnM2e3dpZHRoOjQ5Ljk5OTk5JX0udzMtY29sLnM3e3dpZHRoOjU4LjMzMzMzJX0udzMtY29sLnM4e3dpZHRoOjY2LjY2NjY2JX1cclxuLnczLWNvbC5zOXt3aWR0aDo3NC45OTk5OSV9LnczLWNvbC5zMTB7d2lkdGg6ODMuMzMzMzMlfS53My1jb2wuczExe3dpZHRoOjkxLjY2NjY2JX0udzMtY29sLnMxMnt3aWR0aDo5OS45OTk5OSV9XHJcbkBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXsudzMtY29sLm0xe3dpZHRoOjguMzMzMzMlfS53My1jb2wubTJ7d2lkdGg6MTYuNjY2NjYlfS53My1jb2wubTMsLnczLXF1YXJ0ZXJ7d2lkdGg6MjQuOTk5OTklfS53My1jb2wubTQsLnczLXRoaXJke3dpZHRoOjMzLjMzMzMzJX1cclxuLnczLWNvbC5tNXt3aWR0aDo0MS42NjY2NiV9LnczLWNvbC5tNiwudzMtaGFsZnt3aWR0aDo0OS45OTk5OSV9LnczLWNvbC5tN3t3aWR0aDo1OC4zMzMzMyV9LnczLWNvbC5tOCwudzMtdHdvdGhpcmR7d2lkdGg6NjYuNjY2NjYlfVxyXG4udzMtY29sLm05LC53My10aHJlZXF1YXJ0ZXJ7d2lkdGg6NzQuOTk5OTklfS53My1jb2wubTEwe3dpZHRoOjgzLjMzMzMzJX0udzMtY29sLm0xMXt3aWR0aDo5MS42NjY2NiV9LnczLWNvbC5tMTJ7d2lkdGg6OTkuOTk5OTklfX1cclxuQG1lZGlhIChtaW4td2lkdGg6OTkzcHgpey53My1jb2wubDF7d2lkdGg6OC4zMzMzMyV9LnczLWNvbC5sMnt3aWR0aDoxNi42NjY2NiV9LnczLWNvbC5sM3t3aWR0aDoyNC45OTk5OSV9LnczLWNvbC5sNHt3aWR0aDozMy4zMzMzMyV9XHJcbi53My1jb2wubDV7d2lkdGg6NDEuNjY2NjYlfS53My1jb2wubDZ7d2lkdGg6NDkuOTk5OTklfS53My1jb2wubDd7d2lkdGg6NTguMzMzMzMlfS53My1jb2wubDh7d2lkdGg6NjYuNjY2NjYlfVxyXG4udzMtY29sLmw5e3dpZHRoOjc0Ljk5OTk5JX0udzMtY29sLmwxMHt3aWR0aDo4My4zMzMzMyV9LnczLWNvbC5sMTF7d2lkdGg6OTEuNjY2NjYlfS53My1jb2wubDEye3dpZHRoOjk5Ljk5OTk5JX19XHJcbi53My1yZXN0e292ZXJmbG93OmhpZGRlbn0udzMtc3RyZXRjaHttYXJnaW4tbGVmdDotMTZweDttYXJnaW4tcmlnaHQ6LTE2cHh9XHJcbi53My1jb250ZW50LC53My1hdXRve21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG99LnczLWNvbnRlbnR7bWF4LXdpZHRoOjk4MHB4fS53My1hdXRve21heC13aWR0aDoxMTQwcHh9XHJcbi53My1jZWxsLXJvd3tkaXNwbGF5OnRhYmxlO3dpZHRoOjEwMCV9LnczLWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfVxyXG4udzMtY2VsbC10b3B7dmVydGljYWwtYWxpZ246dG9wfS53My1jZWxsLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnczLWNlbGwtYm90dG9te3ZlcnRpY2FsLWFsaWduOmJvdHRvbX1cclxuLnczLWhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudH0udzMtc2hvdy1ibG9jaywudzMtc2hvd3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH0udzMtc2hvdy1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMjA1cHgpey53My1hdXRve21heC13aWR0aDo5NSV9fVxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7LnczLW1vZGFsLWNvbnRlbnR7bWFyZ2luOjAgMTBweDt3aWR0aDphdXRvIWltcG9ydGFudH0udzMtbW9kYWx7cGFkZGluZy10b3A6MzBweH1cclxuLnczLWRyb3Bkb3duLWhvdmVyLnczLW1vYmlsZSAudzMtZHJvcGRvd24tY29udGVudCwudzMtZHJvcGRvd24tY2xpY2sudzMtbW9iaWxlIC53My1kcm9wZG93bi1jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlfVx0XHJcbi53My1oaWRlLXNtYWxse2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnczLW1vYmlsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCUhaW1wb3J0YW50fS53My1iYXItaXRlbS53My1tb2JpbGUsLnczLWRyb3Bkb3duLWhvdmVyLnczLW1vYmlsZSwudzMtZHJvcGRvd24tY2xpY2sudzMtbW9iaWxle3RleHQtYWxpZ246Y2VudGVyfVxyXG4udzMtZHJvcGRvd24taG92ZXIudzMtbW9iaWxlLC53My1kcm9wZG93bi1ob3Zlci53My1tb2JpbGUgLnczLWJ0biwudzMtZHJvcGRvd24taG92ZXIudzMtbW9iaWxlIC53My1idXR0b24sLnczLWRyb3Bkb3duLWNsaWNrLnczLW1vYmlsZSwudzMtZHJvcGRvd24tY2xpY2sudzMtbW9iaWxlIC53My1idG4sLnczLWRyb3Bkb3duLWNsaWNrLnczLW1vYmlsZSAudzMtYnV0dG9ue3dpZHRoOjEwMCV9fVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7LnczLW1vZGFsLWNvbnRlbnR7d2lkdGg6NTAwcHh9LnczLW1vZGFse3BhZGRpbmctdG9wOjUwcHh9fVxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTNweCl7LnczLW1vZGFsLWNvbnRlbnR7d2lkdGg6OTAwcHh9LnczLWhpZGUtbGFyZ2V7ZGlzcGxheTpub25lIWltcG9ydGFudH0udzMtc2lkZWJhci53My1jb2xsYXBzZXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KSBhbmQgKG1pbi13aWR0aDo2MDFweCl7LnczLWhpZGUtbWVkaXVte2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7LnczLXNpZGViYXIudzMtY29sbGFwc2V7ZGlzcGxheTpub25lfS53My1tYWlue21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50O21hcmdpbi1yaWdodDowIWltcG9ydGFudH0udzMtYXV0b3ttYXgtd2lkdGg6MTAwJX19XHJcbi53My10b3AsLnczLWJvdHRvbXtwb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO3otaW5kZXg6MX0udzMtdG9we3RvcDowfS53My1ib3R0b217Ym90dG9tOjB9XHJcbi53My1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjUpO3otaW5kZXg6Mn1cclxuLnczLWRpc3BsYXktdG9wbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LnczLWRpc3BsYXktdG9wcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH1cclxuLnczLWRpc3BsYXktYm90dG9tbGVmdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjB9LnczLWRpc3BsYXktYm90dG9tcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MH1cclxuLnczLWRpc3BsYXktbWlkZGxle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9XHJcbi53My1kaXNwbGF5LWxlZnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCUsLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoLTAlLC01MCUpfVxyXG4udzMtZGlzcGxheS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCUsLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoMCUsLTUwJSl9XHJcbi53My1kaXNwbGF5LXRvcG1pZGRsZXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6MDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCUpfVxyXG4udzMtZGlzcGxheS1ib3R0b21taWRkbGV7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7Ym90dG9tOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDAlKX1cclxuLnczLWRpc3BsYXktY29udGFpbmVyOmhvdmVyIC53My1kaXNwbGF5LWhvdmVye2Rpc3BsYXk6YmxvY2t9LnczLWRpc3BsYXktY29udGFpbmVyOmhvdmVyIHNwYW4udzMtZGlzcGxheS1ob3ZlcntkaXNwbGF5OmlubGluZS1ibG9ja30udzMtZGlzcGxheS1ob3ZlcntkaXNwbGF5Om5vbmV9XHJcbi53My1kaXNwbGF5LXBvc2l0aW9ue3Bvc2l0aW9uOmFic29sdXRlfVxyXG4udzMtY2lyY2xle2JvcmRlci1yYWRpdXM6NTAlfVxyXG4udzMtcm91bmQtc21hbGx7Ym9yZGVyLXJhZGl1czoycHh9LnczLXJvdW5kLC53My1yb3VuZC1tZWRpdW17Ym9yZGVyLXJhZGl1czo0cHh9LnczLXJvdW5kLWxhcmdle2JvcmRlci1yYWRpdXM6OHB4fS53My1yb3VuZC14bGFyZ2V7Ym9yZGVyLXJhZGl1czoxNnB4fS53My1yb3VuZC14eGxhcmdle2JvcmRlci1yYWRpdXM6MzJweH1cclxuLnczLXJvdy1wYWRkaW5nLC53My1yb3ctcGFkZGluZz4udzMtaGFsZiwudzMtcm93LXBhZGRpbmc+LnczLXRoaXJkLC53My1yb3ctcGFkZGluZz4udzMtdHdvdGhpcmQsLnczLXJvdy1wYWRkaW5nPi53My10aHJlZXF1YXJ0ZXIsLnczLXJvdy1wYWRkaW5nPi53My1xdWFydGVyLC53My1yb3ctcGFkZGluZz4udzMtY29se3BhZGRpbmc6MCA4cHh9XHJcbi53My1jb250YWluZXIsLnczLXBhbmVse3BhZGRpbmc6MC4wMWVtIDE2cHh9LnczLXBhbmVse21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9XHJcbi53My1jb2RlLC53My1jb2Rlc3Bhbntmb250LWZhbWlseTpDb25zb2xhcyxcImNvdXJpZXIgbmV3XCI7Zm9udC1zaXplOjE2cHh9XHJcbi53My1jb2Rle3dpZHRoOmF1dG87YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6OHB4IDEycHg7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkICM0Q0FGNTA7d29yZC13cmFwOmJyZWFrLXdvcmR9XHJcbi53My1jb2Rlc3Bhbntjb2xvcjpjcmltc29uO2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTtwYWRkaW5nLWxlZnQ6NHB4O3BhZGRpbmctcmlnaHQ6NHB4O2ZvbnQtc2l6ZToxMTAlfVxyXG4udzMtY2FyZCwudzMtY2FyZC0ye2JveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjE2KSwwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjEyKX1cclxuLnczLWNhcmQtNCwudzMtaG92ZXItc2hhZG93OmhvdmVye2JveC1zaGFkb3c6MCA0cHggMTBweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDRweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KX1cclxuLnczLXNwaW57YW5pbWF0aW9uOnczLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyfUBrZXlmcmFtZXMgdzMtc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1cclxuLnczLWFuaW1hdGUtZmFkaW5ne2FuaW1hdGlvbjpmYWRpbmcgMTBzIGluZmluaXRlfUBrZXlmcmFtZXMgZmFkaW5nezAle29wYWNpdHk6MH01MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1cclxuLnczLWFuaW1hdGUtb3BhY2l0eXthbmltYXRpb246b3BhYyAwLjhzfUBrZXlmcmFtZXMgb3BhY3tmcm9te29wYWNpdHk6MH0gdG97b3BhY2l0eToxfX1cclxuLnczLWFuaW1hdGUtdG9we3Bvc2l0aW9uOnJlbGF0aXZlO2FuaW1hdGlvbjphbmltYXRldG9wIDAuNHN9QGtleWZyYW1lcyBhbmltYXRldG9we2Zyb217dG9wOi0zMDBweDtvcGFjaXR5OjB9IHRve3RvcDowO29wYWNpdHk6MX19XHJcbi53My1hbmltYXRlLWxlZnR7cG9zaXRpb246cmVsYXRpdmU7YW5pbWF0aW9uOmFuaW1hdGVsZWZ0IDAuNHN9QGtleWZyYW1lcyBhbmltYXRlbGVmdHtmcm9te2xlZnQ6LTMwMHB4O29wYWNpdHk6MH0gdG97bGVmdDowO29wYWNpdHk6MX19XHJcbi53My1hbmltYXRlLXJpZ2h0e3Bvc2l0aW9uOnJlbGF0aXZlO2FuaW1hdGlvbjphbmltYXRlcmlnaHQgMC40c31Aa2V5ZnJhbWVzIGFuaW1hdGVyaWdodHtmcm9te3JpZ2h0Oi0zMDBweDtvcGFjaXR5OjB9IHRve3JpZ2h0OjA7b3BhY2l0eToxfX1cclxuLnczLWFuaW1hdGUtYm90dG9te3Bvc2l0aW9uOnJlbGF0aXZlO2FuaW1hdGlvbjphbmltYXRlYm90dG9tIDAuNHN9QGtleWZyYW1lcyBhbmltYXRlYm90dG9te2Zyb217Ym90dG9tOi0zMDBweDtvcGFjaXR5OjB9IHRve2JvdHRvbTowO29wYWNpdHk6MX19XHJcbi53My1hbmltYXRlLXpvb20ge2FuaW1hdGlvbjphbmltYXRlem9vbSAwLjZzfUBrZXlmcmFtZXMgYW5pbWF0ZXpvb217ZnJvbXt0cmFuc2Zvcm06c2NhbGUoMCl9IHRve3RyYW5zZm9ybTpzY2FsZSgxKX19XHJcbi53My1hbmltYXRlLWlucHV0e3RyYW5zaXRpb246d2lkdGggMC40cyBlYXNlLWluLW91dH0udzMtYW5pbWF0ZS1pbnB1dDpmb2N1c3t3aWR0aDoxMDAlIWltcG9ydGFudH1cclxuLnczLW9wYWNpdHksLnczLWhvdmVyLW9wYWNpdHk6aG92ZXJ7b3BhY2l0eTowLjYwfS53My1vcGFjaXR5LW9mZiwudzMtaG92ZXItb3BhY2l0eS1vZmY6aG92ZXJ7b3BhY2l0eToxfVxyXG4udzMtb3BhY2l0eS1tYXh7b3BhY2l0eTowLjI1fS53My1vcGFjaXR5LW1pbntvcGFjaXR5OjAuNzV9XHJcbi53My1ncmV5c2NhbGUtbWF4LC53My1ncmF5c2NhbGUtbWF4LC53My1ob3Zlci1ncmV5c2NhbGU6aG92ZXIsLnczLWhvdmVyLWdyYXlzY2FsZTpob3ZlcntmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpfVxyXG4udzMtZ3JleXNjYWxlLC53My1ncmF5c2NhbGV7ZmlsdGVyOmdyYXlzY2FsZSg3NSUpfS53My1ncmV5c2NhbGUtbWluLC53My1ncmF5c2NhbGUtbWlue2ZpbHRlcjpncmF5c2NhbGUoNTAlKX1cclxuLnczLXNlcGlhe2ZpbHRlcjpzZXBpYSg3NSUpfS53My1zZXBpYS1tYXgsLnczLWhvdmVyLXNlcGlhOmhvdmVye2ZpbHRlcjpzZXBpYSgxMDAlKX0udzMtc2VwaWEtbWlue2ZpbHRlcjpzZXBpYSg1MCUpfVxyXG4udzMtdGlueXtmb250LXNpemU6MTBweCFpbXBvcnRhbnR9LnczLXNtYWxse2ZvbnQtc2l6ZToxMnB4IWltcG9ydGFudH0udzMtbWVkaXVte2ZvbnQtc2l6ZToxNXB4IWltcG9ydGFudH0udzMtbGFyZ2V7Zm9udC1zaXplOjE4cHghaW1wb3J0YW50fVxyXG4udzMteGxhcmdle2ZvbnQtc2l6ZToyNHB4IWltcG9ydGFudH0udzMteHhsYXJnZXtmb250LXNpemU6MzZweCFpbXBvcnRhbnR9LnczLXh4eGxhcmdle2ZvbnQtc2l6ZTo0OHB4IWltcG9ydGFudH0udzMtanVtYm97Zm9udC1zaXplOjY0cHghaW1wb3J0YW50fVxyXG4udzMtbGVmdC1hbGlnbnt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS53My1yaWdodC1hbGlnbnt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH0udzMtanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fS53My1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLTB7Ym9yZGVyOjAhaW1wb3J0YW50fS53My1ib3JkZXJ7Ym9yZGVyOjFweCBzb2xpZCAjY2NjIWltcG9ydGFudH1cclxuLnczLWJvcmRlci10b3B7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYyFpbXBvcnRhbnR9LnczLWJvcmRlci1ib3R0b217Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItbGVmdHtib3JkZXItbGVmdDoxcHggc29saWQgI2NjYyFpbXBvcnRhbnR9LnczLWJvcmRlci1yaWdodHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjY2MhaW1wb3J0YW50fVxyXG4udzMtdG9wYmFye2JvcmRlci10b3A6NnB4IHNvbGlkICNjY2MhaW1wb3J0YW50fS53My1ib3R0b21iYXJ7Ym9yZGVyLWJvdHRvbTo2cHggc29saWQgI2NjYyFpbXBvcnRhbnR9XHJcbi53My1sZWZ0YmFye2JvcmRlci1sZWZ0OjZweCBzb2xpZCAjY2NjIWltcG9ydGFudH0udzMtcmlnaHRiYXJ7Ym9yZGVyLXJpZ2h0OjZweCBzb2xpZCAjY2NjIWltcG9ydGFudH1cclxuLnczLXNlY3Rpb24sLnczLWNvZGV7bWFyZ2luLXRvcDoxNnB4IWltcG9ydGFudDttYXJnaW4tYm90dG9tOjE2cHghaW1wb3J0YW50fVxyXG4udzMtbWFyZ2lue21hcmdpbjoxNnB4IWltcG9ydGFudH0udzMtbWFyZ2luLXRvcHttYXJnaW4tdG9wOjE2cHghaW1wb3J0YW50fS53My1tYXJnaW4tYm90dG9te21hcmdpbi1ib3R0b206MTZweCFpbXBvcnRhbnR9XHJcbi53My1tYXJnaW4tbGVmdHttYXJnaW4tbGVmdDoxNnB4IWltcG9ydGFudH0udzMtbWFyZ2luLXJpZ2h0e21hcmdpbi1yaWdodDoxNnB4IWltcG9ydGFudH1cclxuLnczLXBhZGRpbmctc21hbGx7cGFkZGluZzo0cHggOHB4IWltcG9ydGFudH0udzMtcGFkZGluZ3twYWRkaW5nOjhweCAxNnB4IWltcG9ydGFudH0udzMtcGFkZGluZy1sYXJnZXtwYWRkaW5nOjEycHggMjRweCFpbXBvcnRhbnR9XHJcbi53My1wYWRkaW5nLTE2e3BhZGRpbmctdG9wOjE2cHghaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjE2cHghaW1wb3J0YW50fS53My1wYWRkaW5nLTI0e3BhZGRpbmctdG9wOjI0cHghaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjI0cHghaW1wb3J0YW50fVxyXG4udzMtcGFkZGluZy0zMntwYWRkaW5nLXRvcDozMnB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTozMnB4IWltcG9ydGFudH0udzMtcGFkZGluZy00OHtwYWRkaW5nLXRvcDo0OHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTo0OHB4IWltcG9ydGFudH1cclxuLnczLXBhZGRpbmctNjR7cGFkZGluZy10b3A6NjRweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206NjRweCFpbXBvcnRhbnR9XHJcbi53My1sZWZ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50fS53My1yaWdodHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9XHJcbi53My1idXR0b246aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojY2NjIWltcG9ydGFudH1cclxuLnczLXRyYW5zcGFyZW50LC53My1ob3Zlci1ub25lOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fVxyXG4udzMtaG92ZXItbm9uZTpob3Zlcntib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fVxyXG4vKiBDb2xvcnMgKi9cclxuLnczLWFtYmVyLC53My1ob3Zlci1hbWJlcjpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxMDchaW1wb3J0YW50fVxyXG4udzMtYXF1YSwudzMtaG92ZXItYXF1YTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMwMGZmZmYhaW1wb3J0YW50fVxyXG4udzMtYmx1ZSwudzMtaG92ZXItYmx1ZTpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMyMTk2RjMhaW1wb3J0YW50fVxyXG4udzMtbGlnaHQtYmx1ZSwudzMtaG92ZXItbGlnaHQtYmx1ZTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM4N0NFRUIhaW1wb3J0YW50fVxyXG4udzMtYnJvd24sLnczLWhvdmVyLWJyb3duOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6Izc5NTU0OCFpbXBvcnRhbnR9XHJcbi53My1jeWFuLC53My1ob3Zlci1jeWFuOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzAwYmNkNCFpbXBvcnRhbnR9XHJcbi53My1ibHVlLWdyZXksLnczLWhvdmVyLWJsdWUtZ3JleTpob3ZlciwudzMtYmx1ZS1ncmF5LC53My1ob3Zlci1ibHVlLWdyYXk6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNjA3ZDhiIWltcG9ydGFudH1cclxuLnczLWdyZWVuLC53My1ob3Zlci1ncmVlbjpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTAhaW1wb3J0YW50fVxyXG4udzMtbGlnaHQtZ3JlZW4sLnczLWhvdmVyLWxpZ2h0LWdyZWVuOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzhiYzM0YSFpbXBvcnRhbnR9XHJcbi53My1pbmRpZ28sLnczLWhvdmVyLWluZGlnbzpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjUhaW1wb3J0YW50fVxyXG4udzMta2hha2ksLnczLWhvdmVyLWtoYWtpOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2YwZTY4YyFpbXBvcnRhbnR9XHJcbi53My1saW1lLC53My1ob3Zlci1saW1lOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2NkZGMzOSFpbXBvcnRhbnR9XHJcbi53My1vcmFuZ2UsLnczLWhvdmVyLW9yYW5nZTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZjk4MDAhaW1wb3J0YW50fVxyXG4udzMtZGVlcC1vcmFuZ2UsLnczLWhvdmVyLWRlZXAtb3JhbmdlOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2ZmNTcyMiFpbXBvcnRhbnR9XHJcbi53My1waW5rLC53My1ob3Zlci1waW5rOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2U5MWU2MyFpbXBvcnRhbnR9XHJcbi53My1wdXJwbGUsLnczLWhvdmVyLXB1cnBsZTpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM5YzI3YjAhaW1wb3J0YW50fVxyXG4udzMtZGVlcC1wdXJwbGUsLnczLWhvdmVyLWRlZXAtcHVycGxlOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzY3M2FiNyFpbXBvcnRhbnR9XHJcbi53My1yZWQsLnczLWhvdmVyLXJlZDpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzYhaW1wb3J0YW50fVxyXG4udzMtc2FuZCwudzMtaG92ZXItc2FuZDpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZGY1ZTYhaW1wb3J0YW50fVxyXG4udzMtdGVhbCwudzMtaG92ZXItdGVhbDpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDk2ODghaW1wb3J0YW50fVxyXG4udzMteWVsbG93LC53My1ob3Zlci15ZWxsb3c6aG92ZXJ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmZlYjNiIWltcG9ydGFudH1cclxuLnczLXdoaXRlLC53My1ob3Zlci13aGl0ZTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50fVxyXG4udzMtYmxhY2ssLnczLWhvdmVyLWJsYWNrOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzAwMCFpbXBvcnRhbnR9XHJcbi53My1ncmV5LC53My1ob3Zlci1ncmV5OmhvdmVyLC53My1ncmF5LC53My1ob3Zlci1ncmF5OmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzllOWU5ZSFpbXBvcnRhbnR9XHJcbi53My1saWdodC1ncmV5LC53My1ob3Zlci1saWdodC1ncmV5OmhvdmVyLC53My1saWdodC1ncmF5LC53My1ob3Zlci1saWdodC1ncmF5OmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMSFpbXBvcnRhbnR9XHJcbi53My1kYXJrLWdyZXksLnczLWhvdmVyLWRhcmstZ3JleTpob3ZlciwudzMtZGFyay1ncmF5LC53My1ob3Zlci1kYXJrLWdyYXk6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNjE2MTYxIWltcG9ydGFudH1cclxuLnczLXBhbGUtcmVkLC53My1ob3Zlci1wYWxlLXJlZDpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkZGQhaW1wb3J0YW50fVxyXG4udzMtcGFsZS1ncmVlbiwudzMtaG92ZXItcGFsZS1ncmVlbjpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNkZGZmZGQhaW1wb3J0YW50fVxyXG4udzMtcGFsZS15ZWxsb3csLnczLWhvdmVyLXBhbGUteWVsbG93OmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2ZmZmZjYyFpbXBvcnRhbnR9XHJcbi53My1wYWxlLWJsdWUsLnczLWhvdmVyLXBhbGUtYmx1ZTpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNkZGZmZmYhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1hbWJlciwudzMtaG92ZXItdGV4dC1hbWJlcjpob3Zlcntjb2xvcjojZmZjMTA3IWltcG9ydGFudH1cclxuLnczLXRleHQtYXF1YSwudzMtaG92ZXItdGV4dC1hcXVhOmhvdmVye2NvbG9yOiMwMGZmZmYhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1ibHVlLC53My1ob3Zlci10ZXh0LWJsdWU6aG92ZXJ7Y29sb3I6IzIxOTZGMyFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWxpZ2h0LWJsdWUsLnczLWhvdmVyLXRleHQtbGlnaHQtYmx1ZTpob3Zlcntjb2xvcjojODdDRUVCIWltcG9ydGFudH1cclxuLnczLXRleHQtYnJvd24sLnczLWhvdmVyLXRleHQtYnJvd246aG92ZXJ7Y29sb3I6Izc5NTU0OCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWN5YW4sLnczLWhvdmVyLXRleHQtY3lhbjpob3Zlcntjb2xvcjojMDBiY2Q0IWltcG9ydGFudH1cclxuLnczLXRleHQtYmx1ZS1ncmV5LC53My1ob3Zlci10ZXh0LWJsdWUtZ3JleTpob3ZlciwudzMtdGV4dC1ibHVlLWdyYXksLnczLWhvdmVyLXRleHQtYmx1ZS1ncmF5OmhvdmVye2NvbG9yOiM2MDdkOGIhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1ncmVlbiwudzMtaG92ZXItdGV4dC1ncmVlbjpob3Zlcntjb2xvcjojNENBRjUwIWltcG9ydGFudH1cclxuLnczLXRleHQtbGlnaHQtZ3JlZW4sLnczLWhvdmVyLXRleHQtbGlnaHQtZ3JlZW46aG92ZXJ7Y29sb3I6IzhiYzM0YSFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWluZGlnbywudzMtaG92ZXItdGV4dC1pbmRpZ286aG92ZXJ7Y29sb3I6IzNmNTFiNSFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWtoYWtpLC53My1ob3Zlci10ZXh0LWtoYWtpOmhvdmVye2NvbG9yOiNiNGFhNTAhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1saW1lLC53My1ob3Zlci10ZXh0LWxpbWU6aG92ZXJ7Y29sb3I6I2NkZGMzOSFpbXBvcnRhbnR9XHJcbi53My10ZXh0LW9yYW5nZSwudzMtaG92ZXItdGV4dC1vcmFuZ2U6aG92ZXJ7Y29sb3I6I2ZmOTgwMCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWRlZXAtb3JhbmdlLC53My1ob3Zlci10ZXh0LWRlZXAtb3JhbmdlOmhvdmVye2NvbG9yOiNmZjU3MjIhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1waW5rLC53My1ob3Zlci10ZXh0LXBpbms6aG92ZXJ7Y29sb3I6I2U5MWU2MyFpbXBvcnRhbnR9XHJcbi53My10ZXh0LXB1cnBsZSwudzMtaG92ZXItdGV4dC1wdXJwbGU6aG92ZXJ7Y29sb3I6IzljMjdiMCFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWRlZXAtcHVycGxlLC53My1ob3Zlci10ZXh0LWRlZXAtcHVycGxlOmhvdmVye2NvbG9yOiM2NzNhYjchaW1wb3J0YW50fVxyXG4udzMtdGV4dC1yZWQsLnczLWhvdmVyLXRleHQtcmVkOmhvdmVye2NvbG9yOiNmNDQzMzYhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1zYW5kLC53My1ob3Zlci10ZXh0LXNhbmQ6aG92ZXJ7Y29sb3I6I2ZkZjVlNiFpbXBvcnRhbnR9XHJcbi53My10ZXh0LXRlYWwsLnczLWhvdmVyLXRleHQtdGVhbDpob3Zlcntjb2xvcjojMDA5Njg4IWltcG9ydGFudH1cclxuLnczLXRleHQteWVsbG93LC53My1ob3Zlci10ZXh0LXllbGxvdzpob3Zlcntjb2xvcjojZDJiZTBlIWltcG9ydGFudH1cclxuLnczLXRleHQtd2hpdGUsLnczLWhvdmVyLXRleHQtd2hpdGU6aG92ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnR9XHJcbi53My10ZXh0LWJsYWNrLC53My1ob3Zlci10ZXh0LWJsYWNrOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1ncmV5LC53My1ob3Zlci10ZXh0LWdyZXk6aG92ZXIsLnczLXRleHQtZ3JheSwudzMtaG92ZXItdGV4dC1ncmF5OmhvdmVye2NvbG9yOiM3NTc1NzUhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1saWdodC1ncmV5LC53My1ob3Zlci10ZXh0LWxpZ2h0LWdyZXk6aG92ZXIsLnczLXRleHQtbGlnaHQtZ3JheSwudzMtaG92ZXItdGV4dC1saWdodC1ncmF5OmhvdmVye2NvbG9yOiNmMWYxZjEhaW1wb3J0YW50fVxyXG4udzMtdGV4dC1kYXJrLWdyZXksLnczLWhvdmVyLXRleHQtZGFyay1ncmV5OmhvdmVyLC53My10ZXh0LWRhcmstZ3JheSwudzMtaG92ZXItdGV4dC1kYXJrLWdyYXk6aG92ZXJ7Y29sb3I6IzNhM2EzYSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItYW1iZXIsLnczLWhvdmVyLWJvcmRlci1hbWJlcjpob3Zlcntib3JkZXItY29sb3I6I2ZmYzEwNyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItYXF1YSwudzMtaG92ZXItYm9yZGVyLWFxdWE6aG92ZXJ7Ym9yZGVyLWNvbG9yOiMwMGZmZmYhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWJsdWUsLnczLWhvdmVyLWJvcmRlci1ibHVlOmhvdmVye2JvcmRlci1jb2xvcjojMjE5NkYzIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1saWdodC1ibHVlLC53My1ob3Zlci1ib3JkZXItbGlnaHQtYmx1ZTpob3Zlcntib3JkZXItY29sb3I6Izg3Q0VFQiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItYnJvd24sLnczLWhvdmVyLWJvcmRlci1icm93bjpob3Zlcntib3JkZXItY29sb3I6Izc5NTU0OCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItY3lhbiwudzMtaG92ZXItYm9yZGVyLWN5YW46aG92ZXJ7Ym9yZGVyLWNvbG9yOiMwMGJjZDQhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLWJsdWUtZ3JleSwudzMtaG92ZXItYm9yZGVyLWJsdWUtZ3JleTpob3ZlciwudzMtYm9yZGVyLWJsdWUtZ3JheSwudzMtaG92ZXItYm9yZGVyLWJsdWUtZ3JheTpob3Zlcntib3JkZXItY29sb3I6IzYwN2Q4YiFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItZ3JlZW4sLnczLWhvdmVyLWJvcmRlci1ncmVlbjpob3Zlcntib3JkZXItY29sb3I6IzRDQUY1MCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItbGlnaHQtZ3JlZW4sLnczLWhvdmVyLWJvcmRlci1saWdodC1ncmVlbjpob3Zlcntib3JkZXItY29sb3I6IzhiYzM0YSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItaW5kaWdvLC53My1ob3Zlci1ib3JkZXItaW5kaWdvOmhvdmVye2JvcmRlci1jb2xvcjojM2Y1MWI1IWltcG9ydGFudH1cclxuLnczLWJvcmRlci1raGFraSwudzMtaG92ZXItYm9yZGVyLWtoYWtpOmhvdmVye2JvcmRlci1jb2xvcjojZjBlNjhjIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1saW1lLC53My1ob3Zlci1ib3JkZXItbGltZTpob3Zlcntib3JkZXItY29sb3I6I2NkZGMzOSFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItb3JhbmdlLC53My1ob3Zlci1ib3JkZXItb3JhbmdlOmhvdmVye2JvcmRlci1jb2xvcjojZmY5ODAwIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1kZWVwLW9yYW5nZSwudzMtaG92ZXItYm9yZGVyLWRlZXAtb3JhbmdlOmhvdmVye2JvcmRlci1jb2xvcjojZmY1NzIyIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1waW5rLC53My1ob3Zlci1ib3JkZXItcGluazpob3Zlcntib3JkZXItY29sb3I6I2U5MWU2MyFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXItcHVycGxlLC53My1ob3Zlci1ib3JkZXItcHVycGxlOmhvdmVye2JvcmRlci1jb2xvcjojOWMyN2IwIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1kZWVwLXB1cnBsZSwudzMtaG92ZXItYm9yZGVyLWRlZXAtcHVycGxlOmhvdmVye2JvcmRlci1jb2xvcjojNjczYWI3IWltcG9ydGFudH1cclxuLnczLWJvcmRlci1yZWQsLnczLWhvdmVyLWJvcmRlci1yZWQ6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmNDQzMzYhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLXNhbmQsLnczLWhvdmVyLWJvcmRlci1zYW5kOmhvdmVye2JvcmRlci1jb2xvcjojZmRmNWU2IWltcG9ydGFudH1cclxuLnczLWJvcmRlci10ZWFsLC53My1ob3Zlci1ib3JkZXItdGVhbDpob3Zlcntib3JkZXItY29sb3I6IzAwOTY4OCFpbXBvcnRhbnR9XHJcbi53My1ib3JkZXIteWVsbG93LC53My1ob3Zlci1ib3JkZXIteWVsbG93OmhvdmVye2JvcmRlci1jb2xvcjojZmZlYjNiIWltcG9ydGFudH1cclxuLnczLWJvcmRlci13aGl0ZSwudzMtaG92ZXItYm9yZGVyLXdoaXRlOmhvdmVye2JvcmRlci1jb2xvcjojZmZmIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1ibGFjaywudzMtaG92ZXItYm9yZGVyLWJsYWNrOmhvdmVye2JvcmRlci1jb2xvcjojMDAwIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1ncmV5LC53My1ob3Zlci1ib3JkZXItZ3JleTpob3ZlciwudzMtYm9yZGVyLWdyYXksLnczLWhvdmVyLWJvcmRlci1ncmF5OmhvdmVye2JvcmRlci1jb2xvcjojOWU5ZTllIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1saWdodC1ncmV5LC53My1ob3Zlci1ib3JkZXItbGlnaHQtZ3JleTpob3ZlciwudzMtYm9yZGVyLWxpZ2h0LWdyYXksLnczLWhvdmVyLWJvcmRlci1saWdodC1ncmF5OmhvdmVye2JvcmRlci1jb2xvcjojZjFmMWYxIWltcG9ydGFudH1cclxuLnczLWJvcmRlci1kYXJrLWdyZXksLnczLWhvdmVyLWJvcmRlci1kYXJrLWdyZXk6aG92ZXIsLnczLWJvcmRlci1kYXJrLWdyYXksLnczLWhvdmVyLWJvcmRlci1kYXJrLWdyYXk6aG92ZXJ7Ym9yZGVyLWNvbG9yOiM2MTYxNjEhaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLXBhbGUtcmVkLC53My1ob3Zlci1ib3JkZXItcGFsZS1yZWQ6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmZmU3ZTchaW1wb3J0YW50fS53My1ib3JkZXItcGFsZS1ncmVlbiwudzMtaG92ZXItYm9yZGVyLXBhbGUtZ3JlZW46aG92ZXJ7Ym9yZGVyLWNvbG9yOiNlN2ZmZTchaW1wb3J0YW50fVxyXG4udzMtYm9yZGVyLXBhbGUteWVsbG93LC53My1ob3Zlci1ib3JkZXItcGFsZS15ZWxsb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZmY2MhaW1wb3J0YW50fS53My1ib3JkZXItcGFsZS1ibHVlLC53My1ob3Zlci1ib3JkZXItcGFsZS1ibHVlOmhvdmVye2JvcmRlci1jb2xvcjojZTdmZmZmIWltcG9ydGFudH0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hitesh\Desktop\angular-jjiwxy\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map