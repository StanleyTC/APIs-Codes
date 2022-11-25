# Objetivo - Criar API que disponibiliza a consulta, criação, edição e exclusão de livros   
# URL base
# Endpoints
"""
    -localhost/livros (GET)
    -localhost/livros (POST)
    -localhost/livros/id para um livro especifico (GET)
    -localhost/livros/id para modificar um livro especifico (INPUT)
    -localhost/livros/id para deletar um livro específico (DELETE)
"""
# Quais recursos queremos disponibilizar - livros

from flask import Flask, jsonify, request

app = Flask(__name__)

livros = [
    {
        'id': 1,
        'titulo': 'O Diário de Anne Frank',
        'autor': 'Anne Frank'
    },

    {
        'id': 2,
        'titulo': 'Drácula',
        'autor': 'Bran Stocker'
    },

    {
        'id': 3,
        'titulo': 'Frankenstein',
        'autor': 'Mary Shelley'
    }
]

@app.route('/livros', methods=['GET'])
def obterLivros():
    return jsonify(livros)

app.run(port=5000, host = 'localhost', debug=True)