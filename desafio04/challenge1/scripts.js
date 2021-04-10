let Observable = rxjs.Observable;
let fromEvent= rxjs.fromEvent;

const clock = new Observable(suscriber => {
    const textInput =document.querySelector(".textInput");
    const spanMirror =document.querySelector(".spanMirror");

    const time=30*1000;
    const clean = () => {
        textInput.value = ''
        spanMirror.textContent = ''
        textInput.disabled = true
    }

    console.log(`Inicio. Tienes ${time/1000} segundos para escribir un texto y ver las palabras en espejo. Apurate!`);
    

    fromEvent(textInput,'keyup').subscribe(() => {
        
        spanMirror.textContent = (textInput.value).split("").reverse().join("");
        console.log((textInput.value).split("").reverse().join(""))

        if(textInput.value==="error"){
            suscriber.error("error")
            console.error("Como ha escrito la palabra 'error', se ha finalizado la función en modo error")
            clean();
        }
        if(textInput.value==="complete"){
            suscriber.complete();
            console.warn("Como ha escrito la palabra 'complete', se ha finalizado la función de forma completa")
            clean();
        }
    })
    
    const interval = setInterval(() => {
        suscriber.next(`Se ha finalizado el tiempo disponible (${time/1000}s)`);
        subscription.unsubscribe();
        clean();
    }, time);

    return () => { // unsubscribe
        console.log('Desuscripción del evento')
        clearInterval(interval)
        clean();
    }
});

const subscription = clock.subscribe(
  response => console.log(response), // next()
  error => console.log(error), // error()
  () => {
    console.log('Observable completo') // complete()
  }
);
