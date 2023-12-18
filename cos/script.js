function dodajTresc() {
    let listaZadan = document.querySelector("#listaZadan");
    let zadajZadanie = document.querySelector("#zadajZadanie").value;
    let przycisk = document.querySelector("#przycisk")

    let spanZad = document.createElement('span')
    spanZad.classList.add("spanZad")
    spanZad.innerHTML = zadajZadanie;

    if (spanZad.innerHTML === '') {
        alert("Podaj zadanie");
        return;
    }

    let checkbox = document.createElement('input');
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";

    let edytor = document.createElement('button');
    edytor.classList.add("edytor");
    edytor.type = "edytor";
    edytor.textContent = "Edytuj";

    edytor.addEventListener("click", (e) => {
        spanZad.contentEditable = true;
        spanZad.focus();

        spanZad.addEventListener("focusout", (e) => {
            spanZad.contentEditable = false;
        })
    })

    let usuwacz = document.createElement('button');
    usuwacz.classList.add("usuwacz");
    usuwacz.type = "button";
    usuwacz.textContent = "Usuń";

    usuwacz.addEventListener("click", (e) => {
        spanZad.remove();
        checkbox.remove();
        usuwacz.remove();
        edytor.remove();
    })

    checkbox.addEventListener("change", (e) => {
        if (checkbox.checked) {
            spanZad.style.background = "green";
            spanZad.style.color = "white"
        } else {
            spanZad.style.background = '';
            spanZad.style.color = ""
        }
    })

    listaZadan.appendChild(spanZad);
    listaZadan.appendChild(usuwacz);
    listaZadan.appendChild(edytor);
    listaZadan.appendChild(checkbox);
}