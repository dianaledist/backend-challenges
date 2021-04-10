let fromEvent= rxjs.fromEvent;
import { map } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';

const textInput =document.querySelector(".textInput");
const spanMirror =document.querySelector(".spanMirror");
const observable = fromEvent(textInput, 'keyup');
const time=30*1000;
const clean = () => {
    textInput.value = ''
    spanMirror.textContent = ''
    textInput.disabled = true
}

console.log(`Inicio. Una vez que ingreses texto, tienes ${time/1000} segundos para escribir y ver las palabras en espejo. Apurate!`);
const suscriber = observable
    .pipe(
        map( event => {
            spanMirror.textContent = (textInput.value).split("").reverse().join("");
            console.log((event.target.value).split("").reverse().join(""))
        })
    )
    .subscribe( () => {
        if (textInput.value === 'error') {
            suscriber.error("error")
            console.error("Como ha escrito la palabra 'error', se ha finalizado la función en modo error");
            clean();
        }

        if (textInput.value === 'complete') {
            suscriber.complete();
            console.warn("Como ha escrito la palabra 'complete', se ha finalizado la función de forma completa");
            clean();
        }
        setTimeout(() => {
            suscriber.unsubscribe();
            clean();
        }, time)    

    },
        error => {
            console.log(error)
            clean();
        },
        () => {
            console.log('Observable completado')
            clean();
        }
    )
