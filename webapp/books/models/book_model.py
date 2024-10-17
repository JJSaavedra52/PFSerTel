from db.db import db
class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    userid = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=True)
    year = db.Column(db.Integer, nullable=True)
    synopsis = db.Column(db.String, nullable=True)
    editorial = db.Column(db.String, nullable=True)

    def __init__(self, userid, title, author, year, synopsis, editorial):
        self.userid = userid
        self.title = title
        self.author = author
        self.year = year
        self.synopsis = synopsis
        self.editorial = editorial