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