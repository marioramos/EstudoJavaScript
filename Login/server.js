const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'XXXXXXXXXX',
    user: 'XXXXXXXX',
    password: 'XXXXXXX',
    database: 'XXXXXXXXX'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Rota para o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM tb_usuarios WHERE email_operador = ? AND senha_operador = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Erro no servidor' });
            return;
        }

        if (result.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
