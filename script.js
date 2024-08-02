const generateButton = document.getElementById('generate');
const removeButton = document.getElementById('remove');
const elementContainer = document.getElementById('elementContainer');
const memoryValue = document.getElementById('memoryValue');
const alertBox = document.getElementById('alert');

let elementCount = 0;
const MAX_ELEMENTS = 10000;
const MEMORY_PER_ELEMENT_MB = 0.005;
const MEMORY_LIMIT_MB = 50;

generateButton.addEventListener('click', generateElements);
removeButton.addEventListener('click', removeElements);

function generateElements() {
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        const newElement = document.createElement('div');
        newElement.className = 'element';
        newElement.textContent = `#${i + 1}`;
        elementContainer.appendChild(newElement);
    }
    elementCount = MAX_ELEMENTS;
    updateMemoryUsage();
}

function removeElements() {
    while (elementContainer.firstChild) {
        elementContainer.removeChild(elementContainer.firstChild);
    }
    elementCount = 0;
    updateMemoryUsage();
}

function updateMemoryUsage() {
    const estimatedMemoryUsage = elementCount * MEMORY_PER_ELEMENT_MB;
    memoryValue.textContent = estimatedMemoryUsage.toFixed(2);

    if (estimatedMemoryUsage > MEMORY_LIMIT_MB) {
        alertBox.classList.remove('hidden');
        alert(`Memory usage has exceeded ${MEMORY_LIMIT_MB} MB. Please optimize your actions to reduce memory consumption.`);
    } else {
        alertBox.classList.add('hidden');
    }
}
