'use strict';

app.pin = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('pin');

(function (parent) {
    var
        pinModel = kendo.observable({
            
        });

    parent.set('pinModel', pinModel);

    parent.set('onShow', function (e) {
        
    });

    $(".pinkeyboard").on("click", function (e) {
        alert(1);
    })

    parent.set('afterShow', function (e) {

    });
})(app.pin);
