document.addEventListener('DOMContentLoaded', () => {
  fetch('/json/philosophy.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load JSON file');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('books-container');

      data.books.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book-card';

        div.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Publisher:</strong> ${book.publisher}</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p>${book.description}</p>
          <a href="${book.website}" target="_blank">Visit Website</a>
        
        `;

        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
