const Content = document.getElementById('Content');
const Title = document.getElementById('Title');
const Btn = document.getElementById('AddTask');
const Close = document.getElementsByClassName('CloseIcon');
const ListContainer = document.getElementById('ListContainer');
var i = 0;

Content.addEventListener("blur", DefaultValue);
Content.addEventListener("click", ClearValue);
Close[0].addEventListener("click", CloseAlert);
Close[1].addEventListener("click", CloseAlert);

function CloseAlert() {
    document.getElementById('TitleAlert').style.display = "none";
    document.getElementById('ContentAlert').style.display = "none";
    document.getElementById('LabelContent').style.paddingTop = "1%";
}

function DefaultValue() {
    if(Content.value === "") {
        Content.style.color = "grey";
        Content.value = "Zadanie do wykonania...";
    }
}

function ClearValue() {
    if(Content.value === "Zadanie do wykonania..." ) {
        Content.style.color = "black";
        Content.value = "";
    }
}

function AddTask() {
    const Div = document.createElement("div");
    Div.className = 'TaskContainer';
    Div.id = i;
    if(Title.value === "") {
        document.getElementById('LabelContent').style.paddingTop = "8%";
        document.getElementById('TitleAlert').style.display = "block";
    } else if (Content.value === "" || Content.value === "Zadanie do wykonania...") {
        document.getElementById('ContentAlert').style.display = "block";
    } else {
        ListContainer.appendChild(Div);
        i++;
        Div.innerHTML = '<div class="TaskTitle" id="t' + i + '">' + Title.value + '</div><div class="TaskContent">' + Content.value + '</div>';
        localStorage.setItem(localStorage.length - 2, JSON.stringify(Div.innerHTML));
        document.getElementById('ContentAlert').style.display = "none";
        document.getElementById('TitleAlert').style.display = "none";
        if(Title.value.length > 16 && Title.value.length < 35) {
            document.getElementById("t" + i).style.fontSize = "100%";
        } else if (Title.value.length > 35) {
            document.getElementById("t" + i).style.fontSize = "70%";
    }
        Title.value = "";
        Content.style.color = "grey";
        Content.value = "Zadanie do wykonania...";
    }
    Div.addEventListener('click', function() {
        if(Div.style.textDecoration === "line-through") {
            Div.style.textDecoration = "none";
        } else {
            Div.style.textDecoration = "line-through";
        }
    });
    Div.addEventListener('dblclick', function() {
        ListContainer.removeChild(Div);
        for(p = 0;p < localStorage.length - 2;p++) {
            if(document.getElementById(p) === null) {
                localStorage.removeItem(p);
            }
        }
    });
}

function GetItems() {
    for(j = 0;;j++) {
        let ii = 0;
        for(jj = 0; ii < localStorage.length - 2;jj++) {
            if(j != 0) {
                break;
            } else if (localStorage.getItem(jj) === null) {
                continue;
            } else {
                object = localStorage.getItem(jj);
                localStorage.removeItem(jj);
                localStorage.setItem(ii, object);
                ii++;
            }
        }
        const Div = document.createElement("div");
        Div.className = 'TaskContainer';
        Div.id = i;
        if(localStorage.getItem(j) === null ) {
            break;
        }
        ListContainer.appendChild(Div);
        i++;
        Div.innerHTML = JSON.parse(localStorage.getItem(j));
        document.getElementsByClassName('TaskTitle')[i - 1].id = "t" + i;
        if(document.getElementById("t" + i).innerHTML.length > 16 && document.getElementById("t" + i).innerHTML.length < 35) {
            document.getElementById("t" + i).style.fontSize = "100%";
        } else if(document.getElementById("t" + i).innerHTML.length > 35) {
            document.getElementById("t" + i).style.fontSize = "70%";
        }
        Div.addEventListener('click', function() {
            if(Div.style.textDecoration === "line-through") {
                Div.style.textDecoration = "none";
            } else {
                Div.style.textDecoration = "line-through";
            }
        });
        Div.addEventListener('dblclick', function() {
            ListContainer.removeChild(Div);
            for(pp = 0;pp < localStorage.length - 2;pp++) {
                if(document.getElementById(pp) === null) {
                    localStorage.removeItem(pp);
                }
            }
        });
    }
    
}

window.onload = GetItems();
