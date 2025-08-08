const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conection = require('./databases/database');
const perguntas = require('./databases/questions');
const respostas = require('./databases/resposta');

//Database
conection.authenticate().then(() => {
    console.log('conectou chefe')
}).catch((erro) => {
    console.log(erro)
});

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//Estou informando que o ejs é minha view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Rotas
app.get('/' ,(req,res) =>{
    perguntas.findAll({raw: true, order:[['id', 'DESC']]}).then(perguntas => {
        
        res.render('index', {
            perguntas : perguntas
        })
    })
});

app.get('/perguntar',(req,res) =>{

    res.render('perguntar')
});

app.get('/respostas/:id', (req, res) => {
    const id = req.params.id;

    perguntas.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
        if (pergunta != undefined) {

            respostas.findAll({
                where: {
                idPergunta: pergunta.id
                },
                order: [['id', 'DESC']]
            }).then( respostas => {
                res.render('respostas', {
                pergunta: pergunta,
                resposta: respostas
            });
            })

        } else {
            res.redirect('/');
        }
    });
});

app.post("/armazenarPergunta",async (req,res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    try{
        await perguntas.create({titulo,descricao})
            .then(() =>{
                res.redirect("/")
            }).catch((e) =>{
                console.log('é aqui')
            })
    }catch(e){
        console.log('nao deu pra adicionar na tabela')
    }
})

app.post('/armazenarResposta' , async(req, res) => {
    const { corpo , idPergunta} = req.body
    try {
        await respostas.create({corpo , idPergunta}).then(() =>{
            res.redirect('/respostas/' + idPergunta)
        }).catch( (e) => {
            console.log('nao deu para responder')
        })
    }catch(e){
        console.log("nao consegui armazenar a resposta")
    }
})


app.listen(2121);