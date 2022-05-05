
export class ObserverModel {
    constructor (){
        this.observers = [];
    }

    addObserver(callback){
        this.observers = [...this.observers, callback];
    }

    removeObserver (callback){
        this.observers = this.observers.filter(cb => !(Object.is(cb, callback)));
    }

    notifyObservers (){
        this.observers.forEach(cb => fun(cb));

        function fun(cback) {
            try {
                cback();
            } catch (exception) {
                console.log("Error: " + exception);
            }
        }
    }
}