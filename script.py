from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# Dicionário simulando um banco de dados de usuários e senhas
usuarios = {'usuario': 'senha'}

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/verificar_credenciais', methods=['POST'])
def verificar_credenciais():
    username = request.form['usuario']
    password = request.form['password']

    if username in usuarios and usuarios[username] == password:
        return redirect(url_for('pagina_selecao'))
    else:
        return 'Credenciais inválidas. Tente novamente.'
    
app = Flask(__name__)

@app.route('/')
def index():
    imagens = ['Assets/Fotos_UFVs/bg1.jpg', 'Assets/Fotos_UFVs/bg2.jpg', 'Assets/Fotos_UFVs/bg3.jpg', 'Assets/Fotos_UFVs/bg4.jpg', 'Assets/Fotos_UFVs/bg5.jpg', 'Assets/Fotos_UFVs/bg6.jpg', 'Assets/Fotos_UFVs/bg7.jpg', 'Assets/Fotos_UFVs/bg8.jpg', 'Assets/Fotos_UFVs/bg9.jpg', 'Assets/Fotos_UFVs/bg10.jpg', 'Assets/Fotos_UFVs/bg11.jpg']
    background = random.choice(imagens)
    return render_template('/Assets/styles.css', background=background)

if __name__ == '__main__':
    app.run(debug=True)