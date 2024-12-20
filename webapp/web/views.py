from flask import Flask, render_template, redirect, url_for, session
from users.controllers.user_controller import user_controller
from books.controllers.book_controller import book_controller 
from db.db import db

app = Flask(__name__)
app.config.from_object('config.Config')
db.init_app(app)

# Registrando los blueprints de los controladores
app.register_blueprint(user_controller)
app.register_blueprint(book_controller)  # Registrando el controlador de productos

# Ruta para renderizar el template index.html
@app.route('/')
def auto_redirect():
    return redirect('/users')

@app.route('/users')
def index():
    return render_template('index.html')

@app.route('/edit/<string:id>')
def edit_user(id):
    print("id recibido", id)
    return render_template('edit.html', id=id)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/books')
def books():
    return render_template('books.html')

@app.route('/editbook/<string:id>')
def edit_book(id):
    print("Referencia recibida", id)
    return render_template('editbook.html', id=id)

if __name__ == '__main__':
    app.run(host='0.0.0.0')  # Escuchar en todas las direcciones IP