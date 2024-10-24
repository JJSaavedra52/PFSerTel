function getUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            // Handle data
            console.log(data);

            // Get table body
            var userListBody = document.querySelector('#user-list tbody');
            userListBody.innerHTML = ''; // Clear previous data

            // Loop through users and populate table rows
            data.forEach(user => {
                var row = document.createElement('tr');

                // Name
                var nameCell = document.createElement('td');
                nameCell.textContent = user.name;
                row.appendChild(nameCell);

                // Email
                var emailCell = document.createElement('td');
                emailCell.textContent = user.email;
                row.appendChild(emailCell);

                // Username
                var usernameCell = document.createElement('td');
                usernameCell.textContent = user.username;
                row.appendChild(usernameCell);

                // Actions
                var actionsCell = document.createElement('td');

                // Edit link
                var editLink = document.createElement('a');
                editLink.href = `/edit/${user.id}`;
	        //editLink.href = `edit.html?id=${user.id}`;
                editLink.textContent = 'Edit';
                editLink.className = 'btn btn-primary mr-2';
                actionsCell.appendChild(editLink);

                // Delete link
                var deleteLink = document.createElement('a');
                deleteLink.href = '#';
                deleteLink.textContent = 'Delete';
                deleteLink.className = 'btn btn-danger';
                deleteLink.addEventListener('click', function() {
                    deleteUser(user.id);
                });
                actionsCell.appendChild(deleteLink);

                row.appendChild(actionsCell);

                userListBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

function createUser() {
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}

function updateUser() {
    var userId = document.getElementById('user-id').value;
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log(data);
        // Optionally, redirect to another page or show a success message
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}



function deleteUser(userId) {
    console.log('Deleting user with ID:', userId);
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/api/users/${userId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success
            console.log('User deleted successfully:', data);
            // Reload the user list
            getUsers();
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    }
}

function loginUser() {
    var data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.message === 'Login successful') {
            window.location.href = `/books`;
        } else {
            alert('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



// Book functions
// Fetch all books
function getBooks() {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => {
            // Handle data
            console.log(data);

            // Get table body
            var bookListBody = document.querySelector('#book-list tbody');
            bookListBody.innerHTML = ''; // Clear previous data

            // Loop through books and populate table rows
            data.forEach(book => {
                var row = document.createElement('tr');

                // ID
                var idCell = document.createElement('td');
                idCell.textContent = book.id;
                row.appendChild(idCell);

                // Title
                var titleCell = document.createElement('td');
                titleCell.textContent = book.title;
                row.appendChild(titleCell);

                // Author
                var authorCell = document.createElement('td');
                authorCell.textContent = book.author;
                row.appendChild(authorCell);

                // Year
                var yearCell = document.createElement('td');
                yearCell.textContent = book.year;
                row.appendChild(yearCell);

                // Synopsis
                var synopsisCell = document.createElement('td');
                synopsisCell.textContent = book.synopsis;
                row.appendChild(synopsisCell);

                // Editorial
                var editorialCell = document.createElement('td');
                editorialCell.textContent = book.editorial;
                row.appendChild(editorialCell);

                // Actions
                var actionsCell = document.createElement('td');

                // Edit link
                var editLink = document.createElement('a');
                editLink.href = `/editbook/${book.id}`;
                editLink.textContent = 'Edit';
                editLink.className = 'btn btn-primary mr-2';
                actionsCell.appendChild(editLink);

                // Delete link
                var deleteLink = document.createElement('a');
                deleteLink.href = '#';
                deleteLink.textContent = 'Delete';
                deleteLink.className = 'btn btn-danger';
                deleteLink.addEventListener('click', function() {
                    deleteBook(book.id);
                });
                actionsCell.appendChild(deleteLink);

                row.appendChild(actionsCell);

                bookListBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Create a new book
function createBook() {
    var data = {
        userid: document.getElementById('userid').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value,
        synopsis: document.getElementById('synopsis').value,
        editorial: document.getElementById('editorial').value
    };

    fetch('/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log(data);
        // Optionally, reload the book list
        getBooks();
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}

// Delete a book
function deleteBook(id) {
    console.log('Deleting book with ID:', id);
    if (confirm('Are you sure you want to delete this book?')) {
        fetch(`/api/books/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success
            console.log('Book deleted successfully:', data);
            // Reload the book list
            getBooks();
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    }
}

// Update a book
function updateBook() {
    var bookId = document.getElementById('book-id').value;
    var data = {
        userid: document.getElementById('userid').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value,
        synopsis: document.getElementById('synopsis').value,
        editorial: document.getElementById('editorial').value
    };

    fetch(`/api/books/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log(data);
        // Optionally, reload the book list
        getBooks();
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
}
