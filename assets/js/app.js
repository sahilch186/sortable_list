const items = document.querySelectorAll('.item');
const sortableList = document.querySelector('.sortable-list');

items.forEach(function(item){
    item.addEventListener("dragstart", function(){
        setTimeout(function(){item.classList.add('dragging');}, 0)
    })
    item.addEventListener("dragend", function(){
        item.classList.remove('dragging');
    })
})

const initSortableList = (e) => {
    e.preventDefault();
    
    const draggingItem = sortableList.querySelector('.dragging');
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })

    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());