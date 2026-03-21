function showModalFromElement(el) {
    document.getElementById('modal-title').textContent = el.dataset.title;
    document.getElementById('modal-date').textContent = "Date: " + el.dataset.date;
    document.getElementById('modal-category').textContent = "Category: " + el.dataset.category;
    document.getElementById('modal-body').innerHTML = el.dataset.content;
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 350);
}

