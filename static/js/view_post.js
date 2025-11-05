document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const tableBody = document.querySelector('.post-table tbody');
    const paginationContainer = document.getElementById('pagination');

    if (!tableBody) return;

    function textFromRow(row, selector, indices = []) {
        const el = row.querySelector(selector);
        if (el && el.textContent) return el.textContent.trim().toLowerCase();
        for (const i of indices) {
            if (row.cells[i] && row.cells[i].textContent) return row.cells[i].textContent.trim().toLowerCase();
        }
        return '';
    }

    function applyFilter(q) {
        const rows = Array.from(tableBody.querySelectorAll('tr'));
        rows.forEach(row => {
            const name = textFromRow(row, '.post-name', [1, 0]);
            const category = textFromRow(row, '.post-category', [4, 3, 2]);
            const match = !q || name.includes(q) || category.includes(q);
            row.style.display = match ? '' : 'none';
        });
        
        if (typeof refreshPaginationAfterFilter === 'function') refreshPaginationAfterFilter();
    }

    if (searchInput) {
        let timer = null;
        searchInput.addEventListener('input', function () {
            clearTimeout(timer);
            const q = this.value.trim().toLowerCase();
            timer = setTimeout(() => applyFilter(q), 180);
        });
    }

    if (!paginationContainer) {
        
        return;
    }

    const rowsPerPage = 10;
    let currentPage = 1;

    function visibleRows() {
        return Array.from(tableBody.querySelectorAll('tr')).filter(r => r.style.display !== 'none');
    }

    function showPage(page) {
        const vr = visibleRows();
        const total = Math.max(1, Math.ceil(vr.length / rowsPerPage));
        page = Math.min(Math.max(1, page), total);
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        vr.forEach((row, i) => {
            row.style.display = (i >= start && i < start + rowsPerPage) ? '' : 'none';
        });
        renderPagination(total);
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Back';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => showPage(currentPage - 1));
        paginationContainer.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.disabled = i === currentPage;
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => showPage(currentPage + 1));
        paginationContainer.appendChild(nextBtn);
    }

    window.refreshPaginationAfterFilter = function () {
        showPage(1);
    };

    applyFilter('');
    showPage(1);
});

document.addEventListener('DOMContentLoaded', () => {
    const rowsPerPage = 10; 
    const table = document.querySelector('.post-table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
    const paginationContainer = document.getElementById('pagination');

    let currentPage = 1;
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });

        renderPagination();
    }

    function renderPagination() {
        paginationContainer.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Back';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) showPage(currentPage - 1);
        });
        paginationContainer.appendChild(prevBtn);

        for(let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.disabled = i === currentPage;
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) showPage(currentPage + 1);
        });
        paginationContainer.appendChild(nextBtn);
    }

    showPage(1);
});