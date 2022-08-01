// function to add items on the list
// if the input field is left empty it shows an error

var form = document.getElementById('item-entry')
var unorderedList = document.createElement('ul')
unorderedList.setAttribute('id', 'list')
// document.appendChild(unorderedList)
form.parentNode.insertBefore(unorderedList, form.nextSibling)

var x = 1

function add() {
    var inputItem = document.getElementById('item')

    if (inputItem.value < 1) {
        var p = document.getElementById('no-item')
        p.classList.remove('hide')
        p.classList.add('show')
    }
    else {
        var p = document.getElementById('no-item')
        p.classList.remove('show')
        p.classList.add('hide')

        var list = document.getElementById('list')
        var li = document.createElement('li')
        var p = document.createElement('p')
        var btn = document.createElement('button')

        // capture all click events and check their id
        document.addEventListener('click', function (e) {
            if (e.target.id !== 'add') {
                remove(e.target.id)
            }
        })
        btn.textContent = "Remove"
        btn.setAttribute('id', x)
        li.setAttribute('id', x)

        var text = document.createTextNode(inputItem.value)
        p.appendChild(text)

        li.appendChild(p)
        li.appendChild(btn)
        list.appendChild(li)
        inputItem.value = ' '
        x++
    }
}


function remove(id) {
    var li = document.getElementById(id)
    var ul = document.getElementById('list')
    ul.removeChild(li)
    console.log(`Removed item with id ${id}`);
}
// add event listener to button add
// document.getElementById('add').addEventListener('click', add)

document.getElementById('add').onclick = add