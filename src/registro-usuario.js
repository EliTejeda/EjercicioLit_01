import { LitElement, html, css } from 'lit';
import './my-card.js'

export class RegistroUsuario extends LitElement {
    
    //Propiedades reactivas
    static get properties() {
        return{
            validAge: {type: Boolean},
        };
    }
    constructor(){
        super();
        this.name = "";
        this.birthDate = "";
    }
   
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction:column;
                padding: 15px;
                align-items: center;
                justify-content: space-around;
                height:80vh;
               
            }
            
            .container {
                display: flex;
                flex-direction:column;
                right: 38%;
                top: 10%;
                border : solid 3px #302f31;
                background: #c2c0c0;
                border-radius: 10px;
                width: 450px;
                height: 500px;
                text-align: center;
            }
            input {
                width: 90%;
                height: 30px;
                margin-top: 5vh;
                margin-left: 4%;
                border: solid 1px #302f31;
                border-top: 0px;
                border-radius: 5px;
                font-size: 20px;
            
            }
            h1{
                color: grey;
                font-family: Arial;
                text-align: center;
                width: 90%;
                margin: 2vh;
                 
            }
            h2{
                color: grey;
                font-family: Arial;
                
                
            }
            button{
                
                font-family: Arial;
                display: inline-block;
                background-color: #515052;
                border-radius: 10px;
                border: 3px double #cccccc;
                color: #eeeeee;
                text-align: center;
                font-size: 25px;
                padding: 10px;
                width: 60%;
                -webkit-transition: all 0.5s;
                -moz-transition: all 0.5s;
                -o-transition: all 0.5s;
                transition: all 0.5s;
                cursor: pointer;
                margin-top: 2vh;
                margin-bottom: 2vh;
                margin-left: 20%;
                
            }

            p{
                color: #302f31;
                font-family: Arial  
            }
        `
       
    ];

      
    render() {
        return html`
        
            <div class="container">
                <h1>Componente Acceso +18</h1>
                <input id="name" type= "text" placeholder="Escribe tu nombre">
                <input id="birthDate" type="date" placeholder ="">
                <button type="button" @click="${this._validAccess}">Consultar</button>
                
                <!--<div class="bannerAccess">
                    ${this.validAge?
                    html`
                    <p class= "messageWelcome">Bienvenido</p>
                    `:
                    html`
                    <p class= "messageForbiden">Lo sentímos debes ser mayor de 18 años para acceder</p>
                    `
                }
                
                </div>-->
    
            </div>
            <my-card>
                    
                    <div>
                        <p slot= "slot1">Lo sentimos (°ー°〃)</p>
                       <button>clic</button>
                    </div>
                    <div slot= "slot2">
                    <p>Debes ser mayor de 18 años para acceder</p>
                    </div>
                </my-card>
        `;
    }

    get nameIn(){
        return this.renderRoot?.querySelector('#name') ?? null;
    }
    get birthDateIn(){
        return this.renderRoot?.querySelector('#birthDate') ?? null;
    }
    _validAccess(e){
        if(this.nameIn.value != "" && this.birthDateIn.value){
            let age = this.ageValidator(this.birthDateIn.value);
            this.validAge = (age >= 18)? true: false;
           
        }
    }
    ageValidator(birthDate){
        let todayDate = new Date ();
        let bDay = new Date(birthDate);
        let timeResult = (todayDate.getTime() -bDay.getTime()) /1000 / (3600 *24);

        return Math.abs(Math.round(timeResult / 365.25));
    }
}
  
customElements.define('registro-usuario', RegistroUsuario);
