'use strict';

app.dash = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('dash');

(function (parent) {
    
    var dashModel = kendo.observable({
        logout: function () {
            localStorage.clear();
            app.mobileApp.navigate("components/home/view.html");
        }
    });

    parent.set('dashModel', dashModel);
    var groupedData = [
       { name: "Refrigerated Temp Check", timing: "6am to 10am Daily", dept: "Dairy", task: "Dairy Temperature Check", limit: "4°C" }
    ];

    var weightageData = [
        { name: "Chicken Cook", timing: "6am to 8pm Rotisserie", dept: "Deli", task: "Cook Temp bird", limit: "Less Than 85°C" }
    ];

    var hiFiData = [
        { name: "Refrigerated Temp Check", timing: "6am to 10am Daily", dept: "Dairy", task: "Dairy Temperature Check", limit: "Greater than 4°C" },
        { name: "Refrigerated Temp Check", timing: "6am to 10am Daily", dept: "Deli ", task: "Service Deli Temperature Check", limit: "Greater than 4°C" }
    ];

    var focusData = [
        { name: "Thermometer Calibration", timing: "8 am to 11 pm Monthly", dept: "All", task: "TMD #1 Infra-red", limit: "Less than minus 1°C or more than plus 1°C" }
    ];

    var criticalData = [
       { name: "Frozen Temp Check", timing: "6am to 11pm Daily", dept: "Meat/Sea Food", task: "Freezer Temperature Check", limit: "-18°C" },
    ];

    function critical() {
        var template = kendo.template($("#criticalTemplate").html());
        var result = template({ data: criticalData });
        $("#critical-listview").html(result);
    }

    function assignment() {

        var template = kendo.template($("#customListViewTemplate").html());
        var result = template({ data: groupedData });
        $("#custom-listview").html(result);
    }

    function assignmentWeightage() {

        var template = kendo.template($("#weightageListViewTemplate").html());
        var result = template({ data: weightageData });
        $("#Weightage-listview").html(result);
    }

    function assignmentHiFi() {
        var template = kendo.template($("#hiFiListViewTemplate").html());
        var result = template({ data: hiFiData });
        $("#Hi-fi-listview").html(result);

    }

    function assignmnetFocus() {

        var template = kendo.template($("#focusListViewTemplate").html());
        var result = template({ data: focusData });
        $("#focus-listview").html(result);
    }

    parent.set("onShow", function () {
        critical();
        assignment();
        assignmentWeightage();
        assignmentHiFi();
        assignmnetFocus();
    });

})(app.dash);
