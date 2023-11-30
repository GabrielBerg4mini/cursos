// enqueue() -> adicionar um elemento ao final da fila
// dequeue() -> remover o primeiro elemento a entrar na fila

// Passo 1: Modelagem

class Queue {
  constructor() {
    this.data = []
  }
  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  }
  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

// Passo 2: Utilizando

const fila = new Queue()

fila.enqueue("Mariana")
fila.enqueue("Joao")
fila.enqueue("Ariel")
fila.dequeue()
fila.dequeue()
fila.dequeue()
