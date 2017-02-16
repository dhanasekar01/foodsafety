'use strict';

app.heat = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('heat');

(function (parent) {
    
    var
     heatModel = kendo.observable({
         createSparklines : function(e) {

             // User-set Sparkline type
             $("#temp-log").kendoSparkline({
                 type: "column",
                 data: [
                     16, 17, 18, 19, 20, 21, 21, 22, 23, 22,
                     20, 18, 17, 17, 16, 16, 17, 18, 19, 20,
                     21, 22, 23, 25, 24, 24, 22, 22, 23, 22,
                     22, 21, 16, 15, 15, 16, 19, 20, 20, 21
                 ],
                 tooltip: {
                     format: "{0} &deg;F"
                 }
             });

             $("#hum-log").kendoSparkline({
                 type: "area",
                 data: [
                     71, 70, 69, 68, 65, 60, 55, 55, 50, 52,
                     73, 72, 72, 71, 68, 63, 57, 58, 53, 55,
                     63, 59, 61, 64, 58, 53, 48, 48, 45, 45,
                     63, 64, 63, 67, 58, 56, 53, 59, 51, 54
                 ],
                 tooltip: {
                     format: "{0} %"
                 }
             });

             $("#temp-range").kendoSparkline({
                 type: "bullet",
                 data: [10, 5],
                 valueAxis: {
                     min: 0,
                     max: 30,
                     plotBands: [
                         {
                             from: 0, to: 3, color: "#787878", opacity: 0.15
                         },{
                         from: 3, to: 7, color: "#787878", opacity: 0.3
                     }, {
                         from: 7, to: 22, color: "#787878", opacity: 0.15
                     }, {
                         from: 22, to: 30, color: "#787878", opacity: 0.15
                     }]
                 },
                 tooltip: {
                     visible: true
                 }
             });

             // Pie "sparklines"
             $("#stats-mon").kendoSparkline({
                 type: "pie",
                 data: [14, 10]
             });

             $("#stats-tue").kendoSparkline({
                 type: "pie",
                 data: [16, 8]
             });

             $("#stats-wed").kendoSparkline({
                 type: "pie",
                 data: [16, 5]
             });

             $("#stats-thu").kendoSparkline({
                 type: "pie",
                 data: [12, 12]
             });

             $("#stats-fri").kendoSparkline({
                 type: "pie",
                 data: [18, 6]
             });

             $("#stats-sat").kendoSparkline({
                 type: "pie",
                 data: [23, 1]
             });

             $("#stats-sun").kendoSparkline({
                 type: "pie",
                 data: [19, 5]
             });
         }

     });

    parent.set('heatModel', heatModel);

    parent.set("onShow", function () {
        heatModel.createSparklines();

    });



})(app.heat);
