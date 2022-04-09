
function Model(text) {
    this.text = text;
    this.observers = [];
}

Model.prototype.changeText = function (txt){ this.text = txt; this.notifyObservers();}

Model.prototype.addObserver = function (callback) {
    this.observers = [callback]//[...this.observers, callback];
}

Model.prototype.removeObserver = function(callback){
    this.observers = this.observers.filter(cb => cb.name != callback); // possibly change this, only works if observers have unique name;
}

Model.prototype.notifyObservers = function() {
    this.observers.forEach(cb => fun(cb));

    function fun(cback) {
        try {
            cback();
        } catch (exception) {
            console.log("Error: " + exception);
        }
    }
}

const currModel = new Model();
export default currModel;