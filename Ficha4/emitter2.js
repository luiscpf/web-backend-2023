class Emitter{
    constructor(){
        this.events = {};
    }
    
}

//Vai haver cópias para todas as instancias não é eficiente

Emitter.prototype.on = function(type, listener){
    if(this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);

}

Emitter.prototype.emit = function(type){
    if(this.events[type] != undefined){
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;