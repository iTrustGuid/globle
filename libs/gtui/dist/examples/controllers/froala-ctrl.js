//主控制器
angular.module('frameApp').controller('froalaCtrl', ['$scope', function($scope) {
    //富文本配置
    $scope.froalaOptions = {
        //是否隐藏工具栏
        toolbarInline: false,
        //无文本时提示语
        placeholderText: '请再此处输入文本!',
        //设置高度
        height: '300px',
        //设置语言
        language: 'zh_cn',
        //设置工具 xs模式
        pastePlain: true,
        imageUploadURL: '',
        imageUploadParam: 'imageFile',
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        //imageUploadParams: {id: "my_editor"},
        fontSizeSelection: true,
        toolbarButtons: ['fullscreen', 'insertImage', 'bold', 'italic',
            'underline', 'strikeThrough', 'subscript',
            'superscript', 'fontFamily', 'fontSize',
            'color', 'emoticons', 'inlineStyle',
            'paragraphStyle', 'paragraphFormat',
            'align', 'formatOL', 'formatUL', 'outdent',
            'indent', 'insertTable',
            'quote', 'insertHR', 'undo', 'redo',
            'clearFormatting', 'selectAll', 'html'
        ],
        pluginsEnabled: null,
        events: {
            'froalaEditor.image.uploaded': function(e, editor, response) {
                // Use the methods like this.
                console.log(response);
            },
            'froalaEditor.image.inserted': function(e, editor, $img, response) {
                // Do something here.
                var result = JSON.parse(response);
                console.log(result);
                arrayImageData.push({ src: result.link, id: result.id });
                console.log(arrayImageData);
            },
            'froalaEditor.image.replaced': function(e, editor, $img, response) {
                var result = JSON.parse(response);
                arrayImageData.push({ src: result.link, id: result.id });
                console.log(arrayImageData);
            },
            'froalaEditor.image.error': function(e, editor, error, response) {
                // Bad link.
                if (error.code == 1) { console.log('Bad link'); }

                // No link in upload response.
                else if (error.code == 2) { console.log('No link in upload response'); }

                // Error during image upload.
                else if (error.code == 3) { console.log('Error during image upload'); }

                // Parsing response failed.
                else if (error.code == 4) { console.log('Parsing response failed'); }

                // Image too text-large.
                else if (error.code == 5) { console.log('Image too text-large'); }

                // Invalid image type.
                else if (error.code == 6) { console.log('Invalid image type'); }

                // Image can be uploaded only to same domain in IE 8 and IE 9.
                else if (error.code == 7) { console.log('Image can be uploaded only to same domain in IE 8 and IE 9'); }

                // Response contains the original server response to the request if available.
            },
            'froalaEditor.image.removed': function(e, editor, $img) {
                var imageId = '';
                for (var i = 0; i < arrayImageData.length; i++) {
                    if ($img.attr('src') == arrayImageData[i].src) {
                        imageId = arrayImageData[i].id;
                        arrayImageData[i].src = 'delete';
                    }
                }
                var res = GM.CommonOper.ajaxRequest(RESTURL.message.imgDel, {
                    id: imageId
                }, {
                    type: 'GET'
                });
            }
        }
    };
}]);
