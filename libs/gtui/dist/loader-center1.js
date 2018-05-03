!(function () {
            window.STATIC_RESOURCES_PATH = window.STATIC_RESOURCES_PATH == null ? './gt-ui/' : window.STATIC_RESOURCES_PATH;
            var cssPaths = [];
            var jsPaths = [];
            var ii = 0;
            var element = null;
            var targetElement = null;
        
cssPaths.push('dist/dll/angular-busy.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/angular-carousel.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/angular-ui-tree.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/bootstrap-datetimepicker.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/froala_editor.pkgd.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/froala_style.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/fullcalendar.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/loading-bar.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/loading-bar.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/me-pageloading.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/ngDialog-theme-default.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/ngDialog.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/select.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/vs2015.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/dll/zui.min.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/vendor-eaffd.css?eaffd67eca20f75f5134ead6577f12e1')
cssPaths.push('dist/center1-eaffd.css?eaffd67eca20f75f5134ead6577f12e1')
jsPaths.push('dist/dll/base.dll.js?eaffd67eca20f75f5134ead6577f12e1')
jsPaths.push('dist/dll/ngs.dll.js?eaffd67eca20f75f5134ead6577f12e1')
jsPaths.push('dist/dll/ngui.dll.js?eaffd67eca20f75f5134ead6577f12e1')
jsPaths.push('dist/vendor-fa015.bundle.js?eaffd67eca20f75f5134ead6577f12e1')
jsPaths.push('dist/center1-8eb20.bundle.js?eaffd67eca20f75f5134ead6577f12e1')

                //写入js
                for (ii = 0; ii < jsPaths.length; ii++) {
                    document.write('<script type="text/javascript" src="' + STATIC_RESOURCES_PATH + jsPaths[ii] + '"></script>');
                }

                //写入css
                var elements = document.head.querySelectorAll('style,link');
                targetElement = elements != null && elements.length > 0 ? elements[0] : null;
                for (ii = 0; ii < cssPaths.length; ii++) {
                    element = document.createElement('link');
                    element.setAttribute('rel', 'stylesheet');
                    element.setAttribute('href', STATIC_RESOURCES_PATH + cssPaths[ii]);
                    if (targetElement !== null) {
                        targetElement.insertAdjacentElement('beforebegin', element);
                    } else {
                        document.head.insertAdjacentElement('beforeend', element);
                    }
                }
            }());
        