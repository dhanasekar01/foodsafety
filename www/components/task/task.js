'use strict';

app.task = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('task');

(function (parent) {

    var taskModel = kendo.observable({
        taskname: "",
        tasktype :""
    });

    var data = [
       {
           name: "Frozen Temp Check",
           timing: "6am to 11pm Daily",
           dept: "Meat/Sea Food",
           task: "Freezer Temperature Check",
           limit: "-18°C",
           type:"normal",
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
           type:"iot",
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
           type:"iot",
           items: [
               { name: "Service Case salad" },
               { name: "Packaged Sliced Meat" },
               { name: "Pizzas/Pasta" },
               { name: "Dips/Salad" }
           ]
       },
       {
           name: "Chicken Cook",
           timing: "6am to 8pm Rotisserie",
           dept: "Deli",
           task: "Cook Temperature",
           limit: "Less Than 85°C",
           type:"normal",
           items: [
               { name: "Cook Temp bird 1" },
               { name: "Cook Temp bird 2" }
           ]
       }
    ];

    function navigate(e) {
        var target = $(e.touch.target);
        var outerText = target.closest("[data-role=listview-link]").context.outerText;
        outerText = outerText.replace(/(\r\n|\n|\r)/gm, "");
        app.mobileApp.navigate("components/subtask/view.html?name=" + outerText + "&type=" + taskModel.tasktype);
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
                taskModel.set("tasktype", val.type);
                listViewInit(e, val.items);

            }
        });
    });


    parent.set('taskModel', taskModel);

})(app.task);
