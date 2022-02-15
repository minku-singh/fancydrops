function fancyDrops(){
    let element = document.querySelector(".fancyDrops");

    element.addEventListener("hover", addDropdown);

    function addDropdown(){
        let ol = document.createElement("ol");

        let li = document.createElement("li");
        li.innerText = "Minku";
        ol.appendChild(li);

    }
}

export default fancyDrops;