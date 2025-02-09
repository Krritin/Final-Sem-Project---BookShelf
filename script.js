const API_URL = 'https://openlibrary.org/search.json?q=';
const bookshelf = document.getElementById('bookshelf');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const loading = document.getElementById('loading');
const genreFilter = document.getElementById('genreFilter');
const readingStatusFilter = document.getElementById('readingStatusFilter');


let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};

function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

async function fetchBooks(query) {
    try {
        loading.style.display = 'block';
        const response = await fetch(`${API_URL}${query}`);
        const data = await response.json();
        displayBooks(data.docs);
    } catch (error) {
        console.error('Error fetching books:', error);
    } finally {
        loading.style.display = 'none';
    }
}

function createProgressBar(bookId) {
    const progress = myLibrary[bookId]?.progress || 0;
    return `
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            `;
}

function updateProgress(bookId, progress) {
    if (!myLibrary[bookId]) {
        myLibrary[bookId] = { status: 'reading', progress: 0 };
    }
    myLibrary[bookId].progress = progress;
    if (progress >= 100) {
        myLibrary[bookId].status = 'completed';
    }
    saveLibrary();
    displayBooks(currentBooks); 
}

function toggleBookStatus(bookId, status) {
    if (!myLibrary[bookId]) {
        myLibrary[bookId] = { status, progress: 0 };
    } else {
        myLibrary[bookId].status = status;
    }
    saveLibrary();
    displayBooks(currentBooks); 
}

let currentBooks = []; 

function displayBooks(books) {
    currentBooks = books; 
    bookshelf.innerHTML = '';

    const currentFilter = readingStatusFilter.value;
    const currentGenre = genreFilter.value;

    books.forEach(book => {
        const bookId = book.key || book.id;
        const bookData = myLibrary[bookId] || { status: '', progress: 0 };


        if (currentFilter && bookData.status !== currentFilter) return;
        if (currentGenre && !book.subject?.includes(currentGenre)) return;

        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        const coverId = book.cover_i;
        const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover';

        bookCard.innerHTML = `
                    <img src="${coverUrl}" alt="${book.title}" class="book-cover">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author_name?.[0] || 'Unknown Author'}</p>
                    <p class="book-year">${book.first_publish_year || 'Unknown Year'}</p>
                    ${bookData.status === 'reading' ? createProgressBar(bookId) : ''}
                    <div class="book-actions">
                        <button class="book-action-btn" onclick="toggleBookStatus('${bookId}', 'to-read')">
                            Want to Read
                        </button>
                        <button class="book-action-btn" onclick="toggleBookStatus('${bookId}', 'reading')">
                            Start Reading
                        </button>
                        ${bookData.status === 'reading' ? `
                            <button class="book-action-btn" onclick="updateProgress('${bookId}', Math.min(100, (myLibrary['${bookId}'].progress || 0) + 10))">
                                Update Progress
                            </button>
                        ` : ''}
                    </div>
                `;
        bookshelf.appendChild(bookCard);
    });
}


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) fetchBooks(query);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) fetchBooks(query);
    }
});

genreFilter.addEventListener('change', () => {
    displayBooks(currentBooks);
});

readingStatusFilter.addEventListener('change', () => {
    displayBooks(currentBooks);
});

document.querySelectorAll('.section-button').forEach(button => {
    button.addEventListener('click', (e) => {

        document.querySelectorAll('.section-button').forEach(btn =>
            btn.classList.remove('active'));
        e.target.classList.add('active');


        const section = e.target.dataset.section;
        readingStatusFilter.value = section === 'all' ? '' : section;
        displayBooks(currentBooks);
    });
});


fetchBooks('popular');
