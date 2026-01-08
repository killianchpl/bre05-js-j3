/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1() {
    let sections = document.querySelectorAll("section");
    let divs = sections[0].querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "#020e13";
    }
}

function grid2() {
    let sections = document.querySelectorAll("section");
    let divs = sections[1].querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {

        if (i % 2 === 0) {
            divs[i].style.backgroundColor = "#4cee7e";
        }
        else {
            divs[i].style.backgroundColor = "#efec4f";
        }
    }
}

function grid3() {
    let sections = document.querySelectorAll("section");
    let divs = sections[2].querySelectorAll("div");
    let color = ["#e85b69", "#eca45c", "#efec4f", "#4cee7e", "#427cf5", "#956caf"]
    for (let i = 0; i < 6; i++) {
        divs[i].style.backgroundColor = color[i]
    }
}

function grid4() {
    let sections = document.querySelectorAll("section");
    let divs = sections[3].querySelectorAll("div");
    divs[0].style.backgroundColor = "#020e13";
    divs[1].style.backgroundColor = "#020e13";
    divs[2].style.backgroundColor = "#020e13";
    divs[3].style.backgroundColor = "#020e13";
    divs[4].style.backgroundColor = "#4cee7e";
    divs[5].style.backgroundColor = "#020e13";
    divs[6].style.backgroundColor = "#020e13";
    divs[7].style.backgroundColor = "#020e13";
    divs[8].style.backgroundColor = "#020e13";

}

function grid5() {
    let sections = document.querySelectorAll("section");
    let divs = sections[4].querySelectorAll("div");
    divs[0].style.backgroundColor = "#427cf5";
    divs[1].style.backgroundColor = "#427cf5";
    divs[2].style.backgroundColor = "#427cf5";
    divs[3].style.backgroundColor = "#956caf";
    divs[4].style.backgroundColor = "#e85b69";
    divs[5].style.backgroundColor = "#956caf";
    divs[6].style.backgroundColor = "#020e13";
    divs[7].style.backgroundColor = "#eca45c";
    divs[8].style.backgroundColor = "#efec4f";
    divs[9].style.backgroundColor = "#eca45c";
}

function grid6() {

}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();
