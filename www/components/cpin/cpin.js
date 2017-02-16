'use strict';

app.cpin = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('cpin');

(function (parent) {
    var
        cpinModel = kendo.observable({
            
        });

    parent.set('cpinModel', cpinModel);

    parent.set('onShow', function (e) {
 
        
    });

    parent.set('afterShow', function (e) {

    });
})(app.cpin);
