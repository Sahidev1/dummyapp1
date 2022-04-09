
function Model() {
    this.observers = [];
}

Model.prototype.addObserver = (callback) => {
    this.observers = [...this.observers, callback];
}

Model.prototype.removeObserver = (callback) => {
    this.observers = this.observers.filter(cb => cb.name != callback);
}

Model.prototype.notifyObservers(){
    this.observers.forEach(cb => fun(cb));

    function fun(cback) {
        try {
            cback();
        } catch (exception) {
            console.log("Error: " + exc);
        }
    }
}