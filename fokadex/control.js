var currentFoka = 0;
var totalFokas = 0;

function ChangeFoka() {
    var name = "f" + currentFoka;
    console.log(name);

    for (let index = 0; index < totalFokas; index++) {
        if (index != currentFoka) {
            var element = document.getElementsByClassName("post-foka")[index];
            element.classList.add("hide");
        } else {
            var element = document.getElementsByClassName("post-foka")[index];
            element.classList.remove("hide");
        }

    }
}

function GetTotalFokas() {
    totalFokas = document.getElementsByClassName("post-foka").length;
    ChangeFoka();
    ReadUrl();
}

function Next() {
    if (currentFoka == totalFokas - 1) {
        currentFoka = 0;
        ChangeFoka();
    } else {
        currentFoka++;
        ChangeFoka();

    }
}

function Last() {
    if (currentFoka == 0) {
        currentFoka = totalFokas - 1;
        ChangeFoka();
    } else {
        currentFoka--;
        ChangeFoka();
    }
}

function ReadUrl() {
    var url = window.location.search;
    var num = url.match("[0-9]");

    if (num == null) {
        ChangeFoka();
    } else {
        if (num > totalFokas - 1) {
            ChangeFoka();
        } else {
            if (num < 0) {
                currentFoka = 0;
                ChangeFoka();
            } else {
                currentFoka = num;
                ChangeFoka();
            }
        }
    }


}