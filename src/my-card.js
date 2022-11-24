import { LitElement, html, css } from 'lit';


export class MyCard extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
               

               
            }
            
            .cardContainer{
                display: flex;
                border : solid 3px #302f31;
                background: #c2c0c0;
                border-radius: 10px;
                width: 450px;
                height: 200px;
                text-align: center;

            }

        `
    ];

    render() {
        return html`
        <div class= "cardContainer">
                <slot name="slot1">Saludos</slot>
                <slot name="slot2">Bye</slot>
            </div>
       
        `;
    }
}
customElements.define('my-card', MyCard);

