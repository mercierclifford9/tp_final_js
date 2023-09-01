

class URLPush  {
    constructor() {
        this.params = new URLSearchParams(window.location.search);
    }

    push(kle, vale) {
        if (!this.params.has(kle)) {
        this.params.set(kle, vale);
        let nouvelleUrl = `${window.location.pathname}?${this.params.toString()}`;
        window.history.pushState({}, '', nouvelleUrl);
        }else{
            throw new Error (`la cles"${kle}" existe deja`);
        }
    }
    
    update(kle, vale){
        if (this.params.has(kle)) {
            this.params.set(kle, vale);
            let nouvelleUrl = `${window.location.pathname}?${this.params.toString()}`;
            window.history.pushState({}, '', nouvelleUrl);
        
        }else{
            throw new Error (`la cles"${kle}" n'existe pas`);
        }
        
    }
    get(kle) {
        if (this.params.has(kle)){
            return this.params.get(kle);
        }else{
            throw new Error (`la cles"${kle}" n'existe pas`);
        }
        
    }

    remove(kle) {
        if (this.params.has(kle)) {
            this.params.delete(kle);
            let nouvelleUrl = `${window.location.pathname}?${this.params.toString()}`;
            window.history.pushState({}, '', nouvelleUrl);
        
        }else{
            throw new Error (`la cles"${kle}" n'existe pas`);
        }
       
    }
}

let url = new URLPush()
// url.push('.', 'Value');
url.update('.', 'messi')
// url.get('search')
// url.remove('go')
// console.log(url);