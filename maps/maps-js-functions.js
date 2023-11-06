const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('end-message');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
    selectedId = this.id;
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragDrop() {
    dropTargetId = this.id;

    if (checkForMatch(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    } else if (checkForMatch2(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    }

    if (matchingCounter === 9) {
        endMessage.style.display = 'block';
    }

    this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'e1':
            return dropTarget === 's1';

        case 'e2':
            return dropTarget === 's2';

        case 'e3':
            return dropTarget === 's3';

        case 'e4':
            return dropTarget === 's4';

        case 'e5':
            return dropTarget === 's5';

        case 'e6':
            return dropTarget === 's6';

        case 'e7':
            return dropTarget === 's7';

        case 'e8':
            return dropTarget === 's8';

        case 'e9':
            return dropTarget === 's9';

        default:
            return false;
    }
}

function checkForMatch2(selected, dropTarget) {
    switch (selected) {
        case 's1':
            return dropTarget === 'e1';

        case 's2':
            return dropTarget === 'e2';

        case 's3':
            return dropTarget === 'e3';

        case 's4':
            return dropTarget === 'e4';

        case 's5':
            return dropTarget === 'e5';

        case 's6':
            return dropTarget === 'e6';

        case 's7':
            return dropTarget === 'e7';

        case 's8':
            return dropTarget === 'e8';

        case 's9':
            return dropTarget === 'e9';

        default:
            return false;
    }
}

function playAgain() {
    matchingCounter = 0;
    endMessage.style.display = 'none';
    draggableListItems.forEach(item => {
        document.getElementById(item.id).style.display = 'block';
    })
}

function addEventListeners() {
    draggableListItems.forEach (item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}


function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

let closeBtn = document.querySelector(".close");
closeBtn.onclick = function () {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


