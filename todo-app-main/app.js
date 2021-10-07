const input = document.querySelector('.container-header input')
const container = document.querySelector('.container-items-item')
const count = document.querySelector('.count')

window.addEventListener('keypress', (event)=>{
    if (event.keyCode == 13) {
        if (input.value !== "") {
            event.preventDefault();
            const newItem = document.createElement('div');
            newItem.classList.add('container-items-item-items')
            newItem.innerHTML = input.value;
            
            const check = document.createElement('div');
            check.classList.add('check')
            const checked = document.createElement('button');
            checked.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>';
            const unchecked = document.createElement('button');
            unchecked.innerHTML = '<ion-icon name="ellipse-outline"></ion-icon>';
            check.appendChild(checked)
            check.appendChild(unchecked)

            newItem.appendChild(check)

            container.appendChild(newItem);

            number_count();
        }
        else{
            alert('le champ est vide !')
            return
        }
    }
})

function number_count() {
    count.innerHTML = parseInt(count.textContent) + 1;
}