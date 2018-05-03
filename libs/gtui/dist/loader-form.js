!(function () {
            window.STATIC_RESOURCES_PATH = window.STATIC_RESOURCES_PATH == null ? './gt-ui/' : window.STATIC_RESOURCES_PATH;
            var cssPaths = [];
            var jsPaths = [];
            var ii = 0;
            var element = null;
            var targetElement = null;
        
jsPaths.push('dist/form-44834.bundle.js?eaffd67eca20f75f5134ead6577f12e1')

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
        