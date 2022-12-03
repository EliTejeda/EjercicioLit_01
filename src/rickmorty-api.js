//componente padre
import { LitElement, html, css } from 'lit';
import './components/get-data';


export class Rickandmortyapi extends LitElement {
    static properties () {
        return{
            wiki: {type: Array},
            
        };
    }

    static get styles () {
        return css`
        :host{
            display:block;
        }

        .container {
            text-align: center;
        }

        get-data {
            display: none;

        }

        .card {
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            height: 300px;
            width: 200px;
            margin: 1rem;
            position: relative;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0,12), 0 1px 2px rgba(0,0,0,0,24);
            transition: all 0.3s cubic-beizer(0.25, 0.8, 0.25, 1);
        }

        .card:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0,25), 0 10px 10px rgba(0,0,0,0,24);
        }

        .card img {
            width: 70%;
        }
        
        `;
    }

    constructor() {
        super();
        this.wiki = [];

        this.addEventListener('ApiData', (e) => {//recibimos data del hijo
            console.log(e.detail.data)
            this._dataFormat(e.detail.data);// dar forma a la data
        })
    }
    firstUpdated() { //cuando nuestro componente este inicializado y propiedades cargadas se llama a este metodo
        this.characters; //
   }

    _dataFormat(data) { //array de mis personajes/ dale forma a la data
        
        console.log(data["results"])
        data["results"].forEach((character)=>{
          this.wiki.push({
            image: character.image,
            name: character.name,
            species: character.species,
            status: character.status
          })

        })
       console.log(this.wiki);
       this.requestUpdate()//orden para actualizar
    }

    render(){ //desde donde llamamos al metodo pasamos los parametros url y method
        return html`
        ${console.log("component")}
        <get-data url= "https://rickandmortyapi.com/api/character"> </get-data>
        ${this.dataTemplate()}  
        `;
    }
    dataTemplate(){
        return html`
            ${this.wiki.map(character => html`
            <div class ="card">
                <div class="card-content">
                <h2>${character.name}</h2>
                <img src="${character.image}">
                <p>${character.species} | ${character.status}</p>
                </div> 
            </div>
           `)}
        `;
     }
    }
    customElements.define('rickmorty-api', Rickandmortyapi);