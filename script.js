const addElementButton = document.getElementById('addElement');
const removeElementButton = document.getElementById('removeElement');
const elementContainer = document.getElementById('elementContainer');
const memoryValue = document.getElementById('memoryValue');
const alertBox = document.getElementById('alert');

let elementCount = 0;
const MAX_MEMORY_LIMIT_MB = 100;

addElementButton.addEventListener('click', addElement);
removeElementButton.addEventListener('click', removeElement);

function addElement() {
    const newElement = document.createElement('div');
    newElement.className = 'element';
    newElement.textContent = `Element ${++elementCount}`;
    elementContainer.appendChild(newElement);
    updateMemoryUsage();
}

function removeElement() {
    if (elementContainer.lastElementChild) {
        elementContainer.removeChild(elementContainer.lastElementChild);
        elementCount--;
        updateMemoryUsage();
    }
}

function updateMemoryUsage() {
    const estimatedMemoryUsage = elementCount * 2; 
    memoryValue.textContent = estimatedMemoryUsage;

    if (estimatedMemoryUsage > MAX_MEMORY_LIMIT_MB) {
        alertBox.classList.remove('hidden');
    } else {
        alertBox.classList.add('hidden');
    }
}

setInterval(updateMemoryUsage, 5000);
