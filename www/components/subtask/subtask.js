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


    var subtask = [
    {
        name: "Service Case salad",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Packaged Sliced Meat",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Pizzas/Pasta",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Dips/Salad",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Cook Temp bird 1",
        limit: "Less Than 85°C",
        action: ["Continue to cook product to 85°C", "Contact management"]
    },
    {
        name: "Cook Temp bird 2",
        limit: "Less Than 85°C",
        action: ["Continue to cook product to 85°C", "Contact management"]
    },
    {
        name: "Milk",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]

    },
    {
        name: "Juice",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Yogurt",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Hard cheese",
        limit: "Greater Than 4°C",
        action: ["Re-temp product with Probe", "Above 4°C Contact Management", "Discard product above 7°C", "Refer to Refrigeration Trouble Shooting Guide"]
    },
    {
        name: "Fish Filets",
        limit: "-18°C",
        action: ["Check by touch if product is frozen solid", "Discard product above 4°C", "Contact management"]
    },
    {
        name: "Turkeys",
        limit: "-18°C",
        action: ["Check by touch if product is frozen solid", "Discard product above 4°C", "Contact management"]
    },
    {
        name: "Meatballs",
        limit: "-18°C",
        action: ["Check by touch if product is frozen solid", "Discard product above 4°C", "Contact management"]
    },
    {
        name: "Crab",
        limit: "-18°C",
        action: ["Check by touch if product is frozen solid", "Discard product above 4°C", "Contact management"]
    }
    ];

    function createSubtask(data,type) {
        var subdata = {
            data: data,
            type: type
        }
        var template = kendo.template($("#subtasktemplate").html());
        var result = template(subdata);
        $("#subtaskaction").html(result);
    }

    parent.set("onShow", function (e) {
        var name = e.view.params.name;
        var type = e.view.params.type;
        subtaskModel.set("subtaskname", name);

        $.each(subtask, function (k, v) {
            if (v.name == name) {
                createSubtask(v, type);
            }
        });
    });


    parent.set('subtaskModel', subtaskModel);

})(app.subtask);
