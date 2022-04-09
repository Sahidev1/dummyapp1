
function Model(text="Hi there! :)") {
    this.text = text;
    this.observers = [];
}

Model.prototype.changeText = function (txt){ this.text = txt; this.notifyObservers();}

Model.prototype.addObserver = function (callback) {
    this.observers = [...this.observers, callback];
}

Model.prototype.removeObserver = function(callback){
    this.observers = this.observers.filter(cb => !(Object.is(cb, callback))); // fixed
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