// const tela = document.getElementById('tela')
// const ctx = tela.getContext("2d")


// let circle = {
//    x: 250,
//    y: 250,
//    raio: 100,
//    inicio: 0,
//    fim: 0,
//    antiHor: true,
// }

// function drawCircle(c) {
//   ctx.beginPath()
//   ctx.rect(0,0, 500, 500)
//   ctx.fillStyle = 'beige'
//   ctx.fill()


//   ctx.beginPath()
//   ctx.strokeStyle = 'red'
//   ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor)
  
//   ctx.fillStyle = 'blue'
//   ctx.fill()
//   ctx.stroke()
// }

// setInterval(function() {
//   if (circle.fim < 2 * Math.PI) {
//     circle.fim += 0.3
//     circle.x += 3
//   }
//   drawCircle(circle)
// }, 100)

// // ctx.beginPath()

// // ctx.lineWidth = 4;
// // ctx.strokeStyle = 'red';
// // ctx.moveTo(10, 10)
// // ctx.lineTo(400,300)
// // ctx.stroke()

// // ctx.beginPath()

// // ctx.lineWidth = 4;
// // ctx.strokeStyle = 'blue';
// // ctx.moveTo(10, 10)
// // ctx.lineTo(300,300)
// // ctx.stroke()

// // ctx.rect(10, 10, 100,200)

// // ctx.fillStyle = 'red'
// // // ctx.fillRect(10, 10, 100, 200)
// // ctx.lineWidth = 5
// // ctx.strokeStyle = 'blue'
// // // ctx.strokeRect(10, 10, 100, 200)

// // ctx.fill()
// // ctx.stroke()

// // ctx.clearRect(20,20, 30, 30)

// // let jogador = document.getElementById('jogador')

// // let xInicial = 0;
// // let yInicial = 0;


// // function moverJogador(x, y) {

// //   let posX = x + 'px';
// //   let posY = y + 'px'

// //   jogador.style.top = posX;
// //   jogador.style.left = posY;

// // }

// // setInterval(function(){
// //   moverJogador(xInicial++, yInicial++)
 
// // }, 14);

// function speakGeneric() {
//   console.log(this.sound)
// }

// let dog = {
//   sound: 'Au Au',
//   speak: speakGeneric,
// }
// let cat = {
//   sound: 'Miauw',
//   speak: speakGeneric,
// }


// let bindedFunction = speakGeneric.bind(cat);
// bindedFunction()
// function dobro(x) {
//   console.log(2*x)
// }
// dobro(4)

// let usuarios = ['Adriano','Marcia' ,'josé']

// function inserirUsuario(nome, callBack) {

//   setTimeout(
//     () => {
//       usuarios.push(nome)
//     callBack()
//   },1000
//     )
  
// }

// function listarUsuarios() {
//   console.log(usuarios)
// }
// inserirUsuario("Igor", listarUsuarios) //FORMA 1 CALLBACK

//FORMA 2 CALLBACK

// let usuarios = ['Adriano','Marcia' ,'josé']

// function inserirUsuario(nome) {
  
//   let promise = new Promise(function(resolve, reject){
//     setTimeout(
//     () => {
//       usuarios.push(nome)
//       let error = true;

//       if (!error) {
//         resolve()
//       }else {
//         reject({msg:"Erro de qualquer coisa"})
//       }
//   },1000
//     )
//   })

//   return promise
  
// }

// function listarUsuarios() {
//   console.log(usuarios)
// }
// inserirUsuario("Igor")
// .then(listarUsuarios)
// .catch((error) => {
//   console.log(error.msg)
// })

// forma 3 de callback

// let usuarios = ['Adriano','Marcia' ,'josé']

// function inserirUsuario(nome) {
  
//   let promise = new Promise(function(resolve, reject){
//     setTimeout(
//     () => {
//       usuarios.push(nome)
//       let error = false;

//       if (!error) {
//         resolve()
//       }else {
//         reject({msg:"Erro de qualquer coisa"})
//       }
//   },1000
//     )
//   })

//   return promise
  
// }

// function listarUsuarios() {
//   console.log(usuarios)
// }

// async function executar() {
//   await inserirUsuario('Igor')
//   listarUsuarios()
// }
// executar()

// function novoAluno(nome, idade) {
//   return {
//     nome,
//     idade
//   }
// }

// let alunos = [
//   novoAluno('Mario', 23),
//   novoAluno('José', 45),
//   novoAluno('Marcia', 32),
//   novoAluno('João', 19)
// ];

// let jogadores = [
//   novoAluno('Igor', 23),
//   novoAluno('Leo', 35),
//   novoAluno('Mario', 45),
//   novoAluno('José', 26)
// ]

// function temMenosDe30(aluno) {
//   return aluno.idade < 30
// }

// function temMaisDe30(aluno) {
//   return aluno.idade > 30
// }

// function filtro(callBack) {
//   let alunosFiltrados = []

// for(let aluno of this) {
//   if(callBack(aluno)) {
//     alunosFiltrados.push(aluno)
//   }
// }
//   return alunosFiltrados
// }

// alunos.filtro = filtro

// jogadores.filtro = filtro

// console.log(jogadores.filtro(temMaisDe30))

// let alunosComMenosDe30 = alunos.filter(temMaisDe30)
// console.log(alunosComMenosDe30)


// function novoAluno(nome, idade) {
//   return {nome,idade}
// }

// let alunos = [
//   novoAluno('Mario', 23),
//   novoAluno('José', 45),
//   novoAluno('Marcia', 32),
//   novoAluno('João', 19)
// ];

// // function temMenosDe30(aluno) {
// //   return aluno.idade < 30
// // }

// function alunoDaquiA5Anos(aluno) {
//   let novoAluno = aluno;
//   aluno.idade += 5;
//   return aluno
// }

// console.log(alunos.map(alunoDaquiA5Anos))

// let pessoa = {
//   name: 'José Silva',
//   idade: 32,
// }

// let contato = {
//   telefone: 8765432,
//   email: 'jose@gmail.com',
// }

// let copia = {...pessoa, ...contato} //Object.assign({}, pessoa) 
// copia.idade = 88;

// console.log(pessoa)
// console.log(copia)

// let notas_turma1 = [ 10, 8, 4, 3]
// let notas_turma2 = [4, 5, 6, 4]

// let todas_notas = [...notas_turma1, ...notas_turma2]
// console.log(todas_notas)

// let aluno = {
//   matricula: 1234,
//   nome: 'Carlos',
//   telefone: 98039239,
//   cidade: 'Campinas',
// }
// let aluno1 = {
//   matricula: 4321,
//   nome: 'Marco',
//   telefone: 92439239,
//   cidade: 'Paulínia',
// }
// let aluno2 = {
//   matricula: 4321,
//   nome: 'josé',
//   telefone: 92439239,
//   cidade: 'Paulínia',
// }

// let alunos = [aluno, aluno1, aluno2]
// let [ carlos, ...outros ] = alunos
// console.log(carlos)
// console.log(outros)

// let { nome, ...copia } = aluno;
// copia.matricula = 6424
// console.log(copia)
// console.log(aluno)
// console.log(nome)

// const { matricula, nome, ...resto } = aluno

// console.log(resto)


// function novoAluno(nome, idade) {
//   return { nome, idade }
// }

// let alunos = [
//   novoAluno('Mario', 23),
//   novoAluno('José', 45),
//   novoAluno('Marcia', 29),
//   novoAluno('Joao', 35)
// ]

// function idadeDaTurma(nomezao, aluno) {
//   return nomezao + aluno.nome;
// }
// console.log(alunos.reduce(idadeDaTurma, ''))

// let url = ' https://economia.awesomeapi.com.br/last/USD-BRL'



// function converter() {
//   let input = document.getElementById('valor')
//   let valor = input.value

//   fetch(url).then((res) => {
//   return res.json()
// }).then((data) => {
//   let rate = data.USDBRL.bid
//   let resultado = `${valor} dolares = ${rate * valor} em reais`
//   document.getElementById('resultado').innerHTML = resultado
// })

// }