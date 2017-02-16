'use strict';

app.task = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('task');

(function (parent) {

    var taskModel = kendo.observable({
        taskname: ""
    });

    var data = [
       {
           name: "Frozen Temp Check",
           timing: "6am to 11pm Daily",
           dept: "Meat/Sea Food",
           task: "Freezer Temperature Check",
           limit: "-18°C",
           items: [
               { name: "Fish Filets" },
               { name: "Turkeys" },
               { name: "Meatballs" },
               { name: "Crab" }
           ]
       },
       {
           name: "Refrigerated Temp Check",
           timing: "6am to 10am Daily",
           dept: "Dairy",
           task: "Dairy Temperature Check",
           limit: "Greater than 4°C",
           items: [
               { name: "Milk" },
               { name: "Juice" },
               { name: "Yogurt" },
               { name: "Hard cheese" }
           ]
       },
       {
           name: "Refrigerated Temp Check",
           timing: "6am to 10am Daily",
           dept: "Deli",
           task: "Service Deli Temperature Check",
           limit: "Greater than 4°C",
           items: [
               { name: "Service Case salad" },
               { name: "Packaged Sliced Meat" },
               { name: "Pizzas/Pasta" },
               { name: "Dips/Salad" }
           ]
       }
    ];

    function navigate(e) {
        var target = $(e.touch.target);
        var outerText = target.closest("[data-role=listview-link]").context.outerText;
        app.mobileApp.navigate("components/subtask/view.html?name=" + outerText);
    }

    function listViewInit(e, items) {
        if ($("#list-edit-listview").data("kendoMobileListView")) {
            var listView = $("#list-edit-listview").data("kendoMobileListView");
            listView.destroy();
        }

        e.view.element.find("#list-edit-listview").kendoMobileListView({
            dataSource: items,
            template: $("#itemTemplate").html()
        })
        .kendoTouch({
            filter: ">li",
            tap: navigate
        });
    }

    parent.set("onShow", function (e) {
        var dept = e.view.params.dept;
        var name = e.view.params.name;
        taskModel.set("taskname", name + " - " + dept);
        $.each(data, function (key, val) {
            if (val.name == name && val.dept == dept) {
                listViewInit(e, val.items)
            }
        });
    });


    parent.set('taskModel', taskModel);

})(app.task);
