from flask import Blueprint, request, jsonify
from users.models.db import db
from books.models.book_model import Book

book_controller = Blueprint('book_controller', __name__)

# Obtener todos los libros
@book_controller.route('/api/books', methods=['GET'])
def get_books():
    print("listado de libros")
    books = Book.query.all()
    result = [{'code': book.code, 'userid': book.userid, 'title': book.title, 'author': book.author, 'year': book.year, 'synopsis': book.synopsis, 'editorial': book.editorial} for book in books]
    return jsonify(result)

# Obtener un libro por código
@book_controller.route('/api/books/<string:code>', methods=['GET'])
def get_book(code):
    print("obteniendo libro")
    book = Book.query.get_or_404(code)
    return jsonify({'code': book.code, 'userid': book.userid, 'title': book.title, 'author': book.author, 'year': book.year, 'synopsis': book.synopsis, 'editorial': book.editorial})

# Crear un nuevo libro
@book_controller.route('/api/books', methods=['POST'])
def create_book():
    print("creando libro")
    data = request.json
    new_book = Book(code=data['code'], userid=data['userid'], title=data['title'], author=data['author'], year=data['year'], synopsis=data['synopsis'], editorial=data['editorial'])
    db.session.add(new_book)
    db.session.commit()
    return jsonify({'message': 'Libro creado exitosamente'}), 201

# Actualizar un libro existente
@book_controller.route('/api/books/<string:code>', methods=['PUT'])
def update_book(code):
    print("actualizando libro")
    book = Book.query.get_or_404(code)
    data = request.json
    book.userid = data['userid']
    book.title = data['title']
    book.author = data['author']
    book.year = data['year']
    book.synopsis = data['synopsis']
    book.editorial = data['editorial']
    db.session.commit()
    return jsonify({'message': 'Libro actualizado exitosamente'})

# Eliminar un libro existente
@book_controller.route('/api/books/<string:code>', methods=['DELETE'])
def delete_book(code):
    book = Book.query.get_or_404(code)
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Libro eliminado exitosamente'})