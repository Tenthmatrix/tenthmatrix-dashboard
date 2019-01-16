tinymce.PluginManager.add("customimage", function(e, b) {
    e.addButton("image", {
        icon: "image",
        tooltip: "Insert image",
        onclick: function() {
            e.windowManager.open({
              title: 'Insert image',
              url: '/insert_image',
              width: 600,
              height: 500,
              buttons: [{
                  text: 'Ok',
                  classes: 'widget btn primary',
                  onclick: function(e) {
                      var d = [];
                      for (var i=0; i<tinymce.activeEditor.d.length; i++) {
                          tinymce.activeEditor.insertContent('<img src="' + tinymce.activeEditor.d[i] + '">');
                      }
                      tinymce.activeEditor.windowManager.close();
                  }
              },{
                  text: 'Cancel',
                  onclick: 'close'
              }]
            })
        },
        stateSelector: "img:not([data-mce-object],[data-mce-placeholder])"
    }), e.addMenuItem("image", {
        icon: "image",
        text: "Insert image",
        onclick: function() {
            e.windowManager.open({
              title: 'Insert image',
              url: '/insert_image',
              width: 600,
              height: 500,
              buttons: [{
                  text: 'Ok',
                  classes: 'widget btn primary',
                  onclick: function(e) {
                      var d = [];
                      for (var i=0; i<tinymce.activeEditor.d.length; i++) {
                          tinymce.activeEditor.insertContent('<img src="' + tinymce.activeEditor.d[i] + '">');
                      }
                      tinymce.activeEditor.windowManager.close();
                  }
              },{
                  text: 'Cancel',
                  onclick: 'close'
              }]
            })
        },
        context: "insert",
        prependToContext: !0
    })
});
