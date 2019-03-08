var edit_id;
var delete_id;

function Burger(name, eaten) {
    this.name = name;
    this.eaten = eaten;
};

$("#submitButton").on("click", function (e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let devoured = $(".form-control-inline");

    for (i = 0; i < devoured.length; i++) {
        if (devoured[i].checked === true) {
            console.log("This burger has been", devoured[i].value);
            var devouredResult = devoured[i].value;
        }
    }

    // ajax call to eventually print new burger to screen
    var burger = new Burger(name, devouredResult);
    var burgersArr = [];
    burgersArr.push(burger);

    $.ajax({
        method: "POST",
        url: "/api/burgers",
        datatype: "text",
        data: burger,
        success: "Success"
    }).then(function (burgerObj) {
        console.log(burgerObj);
        newBurgers(burgerObj);
        $("#name").val("");
    });

});


function newBurgers(burgerObj) {

    var burgersArr = [];
    burgersArr.push(burgerObj);

    var burgerDiv = $("#burgerDisplay");
    var list = $("<ul>");
    burgerDiv.append(list);

    for (i = 0; i < burgersArr.length; i++) {
        var listItem = "<li>" + "Burger Name: " + burgersArr[i].name + "</li>";
        if (burgersArr[i].devoured === 1) {
            listItem += "<li>Burger Status: Eaten</li>";
        } else {
            listItem += "<li>Burger Status: Still Here</li>";
        }

        var fullList = list.append(listItem);
        var editButton = $("<button>").html("Edit").addClass("btn btn-primary").css("margin-top", "8px").attr("id", "editButton").attr("data-burger", burgersArr[i].name);
        var deleteButton = $("<button>").html("Delete").addClass("btn btn-primary").css("margin-left", "12px").css("margin-top", "8px").attr("id", "deleteButton");
        fullList.append(editButton, deleteButton);
        fullList.css("border", "1px solid #d9d9d9").css("padding", "15px").css("background-color", "#fafafa").css("border-radius", "4px");

    }
};


$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: '/api/burgers/all',
        success: function (data) {
            displayAll(data);
        }
    });
});

function displayAll(burgerListArr) {

    var burgersArr = [];
    for (i = 0; i < burgerListArr.length; i++) {
        burgersArr.push(burgerListArr[i]);
    }

    var burgerDiv = $("#burgerDisplay");
    for (i = 0; i < burgerListArr.length; i++) {
        var list = $("<ul>");
        burgerDiv.append(list);

        var listItem = "<li>" + "Burger Name: " + burgerListArr[i].burger_name + "</li>";

        if (burgerListArr[i].devoured === 1) {
            listItem += "<li>Burger Status: Eaten</li>";
        } else {
            listItem += "<li>Burger Status: Still Here</li>";
        }

        var fullList = list.prepend(listItem);
        // Save the id of the burger to the edit button, so we can use that later.
        var editButton = $("<button>").html("Edit").addClass("btn btn-primary editButton").css("margin-top", "8px").attr("data-id", burgerListArr[i].id).attr("data_name", burgerListArr[i].burger_name);
        var deleteButton = $("<button>").html("Delete").addClass("btn btn-primary").css("margin-left", "12px").css("margin-top", "8px").attr("id", "deleteButton").attr("data-id", burgerListArr[i].id);

        fullList.append(editButton, deleteButton);
        fullList.css("border", "1px solid #d9d9d9").css("padding", "15px").css("background-color", "#fafafa").css("border-radius", "4px");

    }
};

function submitEdit(e) {
    e.preventDefault();
    var name = $("#editInput").val().trim();

    var burger = {
        name: name,
        id: edit_id
    }
    // Should be good to test now ;)
    $.ajax({
        method: "PUT",
        url: '/api/burgers/update',
        data: burger
    }).then(function (response) {
        console.log("Get One Response = ", response);
    });
    location.reload();
}

$(document).on("click", ".editButton", function () {
    $("#editInput, #editLabel, #submitNew").removeClass("d-none");
    $("#editInput")
        .val($(this).data('name'))
        .focus();

    // Dont' think we'll need the name actually, except to show it in the input
    edit_id = $(this).data('id');
    console.log(edit_id);

    // This will keep adding the click event over and over, so we should set the callback
    // up as a named function, so we can "unbind" the click event.
    $(document).unbind('click', submitEdit);
    $(document).on("click", "#submitNew", submitEdit);
});


$(document).on("click", "#deleteButton", function () {

    // Dont' think we'll need the name actually, except to show it in the input
    delete_id = $(this).data('id');
    
    // This will keep adding the click event over and over, so we should set the callback
    // up as a named function, so we can "unbind" the click event.
    var removeObj = {
        id: delete_id
    }

    $.ajax({
        method:"DELETE",
        url: "/api/burgers/delete",
        data: removeObj
    }).then(function(data){
        
    });
    location.reload();
});