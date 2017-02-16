'use strict';

app.pinlogin = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('pinlogin');

(function (parent) {
    var
        pinloginModel = kendo.observable({
            
        });

    parent.set('pinloginModel', pinloginModel);

    parent.set('onShow', function (e) {
 
        
    });

    parent.set('afterShow', function (e) {

    });
})(app.pinlogin);
