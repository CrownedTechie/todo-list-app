const ul = document.querySelector('#list-box');
const textField = document.querySelector('#text-input');
const addBtn = document.querySelector('.add-btn');
const listItems = document.querySelectorAll('.list-item');

const addToDOM = () =>  {
    if (textField.value === '') {
        alert ("Input a list")
    }

    else {
        const li = document.createElement('li');
        li.classList.add('list-item');
        // li.appendChild(inputText);

        const itemList = createCheckBox();
        const deleteButton = createDeleteButton();

        li.appendChild(itemList);
        li.appendChild(deleteButton);

        ul.appendChild(li);

        textField.value = '';

    }
                
}

const createCheckBox = () => {
    const div = document.createElement('div');
        div.classList.add('item-box');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('class', 'list-check');

        
        checkBox.addEventListener('change', e => {
            e.target.parentElement.classList.toggle('done')
        })

        const newList = document.createElement('input');
        newList.setAttribute('type', 'text')
        newList.value = textField.value;

        div.appendChild(checkBox);
        div.appendChild(newList);
    
    return div;
}

const createDeleteButton = () => {
    const button = document.createElement('button')
        button.classList.add('delete-btn');

        const span = document.createElement('span');
        span.classList.add('material-symbols-outlined');
        span.innerText = "delete";

        button.appendChild(span)

        button.addEventListener('click', deleteList);

    return button;
}



const deleteList = (e) => {
        if (e.target.parentElement.classList.contains('delete-btn')) {
            e.target.parentElement.parentElement.remove()
        }
}

listItems.forEach(list => {
    list.addEventListener('click', deleteList)
});



addBtn.addEventListener('click', addToDOM);

textField.addEventListener('keypress', e => {
    e.key === 'Enter'
        ? addToDOM()
        : null;
});