import { LitElement, html, css } from 'lit';
import './components/get-data'


export class Rickandmortyapi extends LitElement {
    static properties () {
        return{
            wiki: {type: Array},
            
        };
    }

    static get styles () {
        return css`
        
        `;
    }

    constructor(){
        super();

        this.wiki = [];

        this.addEventListener('ApiData', (e) => {
            this._dataFormat(e.detail.data);
        })
    }

    _dataFormat(data) { //array de mis personajes
        let characters = [];

        data["results"].forEach((character)=>{
          character.push({
            image: character.image,
            name: character.name,
            species: character.species,
            status: character.status
          })

          this.wiki = characters;

        })
        console.log(characters);
    }

    render(){ //desde donde llamamos al metodo pasamos los parametros url y method
        return html`
        <get-data url= "https://rickandmortyapi.com/api/character"> </get-data>
        ${this.dataTemplate}  
        `;
    }
     get dataTemplate(){
        return html`
            ${this.wiki.map(character => html`
            <div class ="card">
                <div class="card-content">
                <h2>${character.name}</h2>
                <img src="${character.img}">
                <p>${character.species | character.status}</p>
                </div> 
            </div>
           `)}
        `;
     }
    }
    customElements.define('rickmorty-api', Rickandmortyapi);