let dropdown = document.getElementById("dropdown");
let open1 = document.getElementById("open");
let close1 = document.getElementById("close");

let flag = false;
const dropdownHandler = () => {
    if (!flag) {
        dropdown.classList.add("hidden");
        open1.classList.add("hidden");
        close1.classList.remove("hidden");
        flag = true;
    } else {
        dropdown.classList.remove("hidden");
        close1.classList.add("hidden");
        open1.classList.remove("hidden");
        flag = false;
    }
};
const toggleSubDir = (check) => {
    let subList1 = document.getElementById("sublist1");
    let subList2 = document.getElementById("sublist2");
    let subList3 = document.getElementById("sublist3");
    switch (check) {
        case 1:
            subList3.classList.add("hidden");
            subList2.classList.add("hidden");
            subList1.classList.remove("hidden");
            break;
        case 2:
            subList3.classList.add("hidden");
            subList2.classList.remove("hidden");
            subList1.classList.add("hidden");
            break;
        case 3:
            subList3.classList.remove("hidden");
            subList2.classList.add("hidden");
            subList1.classList.add("hidden");
            break;
    }
};