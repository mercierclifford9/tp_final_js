

class UrlPush {
    constructor() {
        this.params = new URLSearchParams(window.location.search);
    }

    push(kle, vale) {
        this.params.set(kle, vale);
        this.updateURL();
    }
    update(kle, vale){
        this.params.set(kle, vale);
        this.updateURL();
        
    }
    get(kle) {
        return this.params.get(kle);
    }

    remove(kle) {
        this.params.delete(kle);
        this.updateURL();
    }
   
    getParamKeys() {
        return Array.from(this.params.keys());
    }
    updateURL() {
        let nouvelleUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', nouvelleUrl);
    }
    
}

