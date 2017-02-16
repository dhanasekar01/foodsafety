'use strict';

app.subtask = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('subtask');

(function (parent) {

    var subtaskModel = kendo.observable({
        subtaskname: ""
    });

    parent.set("onShow", function (e) {
        var name = e.view.params.name;
        subtaskModel.set("subtaskname", name);
 
    });


    parent.set('subtaskModel', subtaskModel);

})(app.subtask);
