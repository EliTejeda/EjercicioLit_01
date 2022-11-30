//1.este componente pedira satos a la API y una vez que los traiga los tiene que devolver a nuestro componente padre
import { LitElement }from 'lit';

export class GetData extends LitElement {

    static properties(){
        return {
            url: { type: String },
            

        }
    }
 //hacer uso del ciclo de vida de los componentes, usando metodo firstUpdated
   firstUpdated() { //cuando nuestro componente este inicializado y propiedades cargadas se llama a este metodo
        this.getData(); //se lamza el evento _sendData
   }
 
 
 
 /* constructor () {
        super();
        this.getData();
    }*/


//2.Para esto tendremos que comunicarnos mediante un evento comunicacion única de hijos a padres, para mandar los datos que recibira la informacion de la consulta
    _sendData(data) { //aqui se recibe los datos de la consulta
        this.dispatchEvent(new CustomEvent('ApiData' , { //definiendo nuestro propio evento customEvent
            detail: { data }, bubbles: true, composed: true //valores para que el evento suba de hijos a padres

        }));

    }
//3.Funcion que manda la informacion al metodo que lanza el evento (_sendData)
    // Solicitud GET (Request).
getData(){
fetch('https://rickandmortyapi.com/api/character')
// Exito
.then(response => response.json())  // convertir a json
.then(json => console.log(json))    //imprimir los datos en la consola
.catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}
/*getData(){
        fetch(this.url) //promesa
            .then((response) =>{
                if(response.ok) return response.json();
                return Promise.reject(response);
            })
            .then((data) => { this._sendData(data);  })
            .catch((error)  => { console.warn('Something went wrong', error); }) 
    }*/
}

customElements.define('get-data', GetData);
