// class Emitter{
//     constructor(){
//         this.events = {};
//     }
    
//     on(type, listener){
//         //verifica se a propriedade events já tem uma propriedade com o nome type do evento que queremos registar
//         //Se essa propriedade ainda não existe, o código cria uma nova propriedade com o nome type e define seu valor como um array vazio.
//         if (!this.events[type]) {
//             this.events[type] = [];
//         }
//         //Em seguida, adiciona a função listener ao array correspondente à propriedade type no objeto events
//         //Isso é feito usando o método push() do array.
//         this.events[type].push(listener);

//         //Quando o evento ocorrer, todas as funções registradas como listeners para esse evento serão executadas.
//     }
//     emit(type) {
//         //O código verifica se a propriedade events tem uma propriedade com o nome type do evento que queremos emitir
//         //Se essa propriedade existe, isso significa que pelo menos um listener foi registrado para esse evento.
//         if (this.events[type]) {
//         //usa o método forEach() do array correspondente à propriedade type no objeto events, para iterar sobre cada listener e invocá-lo 
//         //passando como argumento o objeto data que representa os dados do evento
//           this.events[type].forEach(listener => {
//             listener();
//           });
//         }
//         //O objeto data pode ser criado dentro do método emit, ou passado como argumento para o método emit. 
//         //Ele contém as informações que os listeners podem precisar para executar suas ações, como por exemplo, 
//         //os valores dos parâmetros que foram passados quando o evento foi emitido.
//         //Assim, quando o método emit é chamado com um nome de evento, todas as funções registradas como listeners para esse evento 
//         //serão executadas com os dados fornecidos pelo objeto data.

//     }
// }

// module.exports = Emitter;