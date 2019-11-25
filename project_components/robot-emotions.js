import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `robot-emotions`
 * Anki cozmo eye emotions
 *
 * @summary
 * @customElement
 * @demo demorobot-emotions Sample
 * @appliesMixin FBP
 */
class RobotEmotions extends FBP(LitElement) {

    /**
     * turns robot to the default emotion
     */
    reset(){
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "";
        lEyelid.style = "";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * turns to smiling
     */
    smile() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "";
        lEyelid.style = "border-top-left-radius: 20px; border-top-right-radius: 20px;";
        llwEyelid.style="height: 10px; border-top-left-radius: 100%; border-top-right-radius: 100%;";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "";
        rEyelid.style = "border-top-left-radius: 20px; border-top-right-radius: 20px;";
        rlwEyelid.style= "height: 10px; border-top-left-radius: 100%; border-top-right-radius: 100%;";

    }

    /**
     * looks to the right
     * with a big right eye
     */
    checkRight() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "right: -20px; bottom: -10px; height: 39px;";
        lEyelid.style = "";
        llwEyelid.style= "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "width: 40px; top: -11px; right: -20px; height: 60px;";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * looks to the left
     * with a big left eye
     */
    checkLeft() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "width: 40px; top: -11px; left: -20px; height: 60px;";
        lEyelid.style = "";
        llwEyelid.style= "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "left: -20px; bottom: -10px; height: 39px;";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * robot is giggling
     */
    giggle() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.add('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "height: 20px;";
        lEyelid.style = "";
        llwEyelid.style= "height: 10px; border-top-left-radius: 100%; border-top-right-radius: 100%;";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "height: 20px;";
        rEyelid.style = "";
        rlwEyelid.style= "height: 10px; border-top-left-radius: 100%; border-top-right-radius: 100%;";
    }

    /**
     * doubting / dubiative
     */
    dubiative() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "height: 39px;";
        lEyelid.style = "";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * sad
     */
    sad() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "";
        lEyelid.style = "height: 10px; border-bottom-right-radius: 100%;";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "";
        rEyelid.style = "height: 10px; border-bottom-left-radius: 100%;";
        rlwEyelid.style= "";
    }

    /**
     * really sad
     */
    reallySad() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "height: 20px; left: -20px; bottom: -40px;";
        lEyelid.style = "height: 10px;";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "height: 20px; left: -20px; bottom: -40px;";
        rEyelid.style = "height: 10px;";
        rlwEyelid.style= "";
    }

    /**
     * bored
     */
    bored() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "bottom: -30px; height: 20px; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%;";
        lEyelid.style = "";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "bottom: -30px; height: 20px; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%;";
        rEyelid.style = "height: 10px;";
        rlwEyelid.style= "";
    }

    /**
     * chocked
     */
    chock() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "transform: matrix(1, 0, 0, 1, 0, 0);";
        lEyelid.style = "";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        righteye.style = "transform: matrix(1, 0, 0, 1, 0, 0);";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * suspicious
     */
    suspicious() {
    }

    /**
     * satisfied
     */
    satisfied() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefthr.forEach((item)=>{
            item.style.borderTop = '';
            item.style.borderBottom = '';
        });
        lefteye.style = "border-top-left-radius: 30px; border-top-right-radius: 30px; height: 20px; top: -20px;";
        lEyelid.style = "height: 10px; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: -3px; transform: matrix(0.99756, 0.06976, -0.06976, 0.99756, 0, 0);";
        llwEyelid.style = "";

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');
        righthr.forEach((item)=>{
            item.style.borderTop = '1px solid rgb(74, 74, 74)';
            item.style.borderBottom = '1px solid rgb(255, 64, 64);';
        });
        righteye.style = "border-top-left-radius: 30px; border-top-right-radius: 30px; height: 20px; top: -20px;";
        rEyelid.style = "";
        rlwEyelid.style= "";
    }

    /**
     * kill mode
     */
    killAllTheHumans() {
        let eyes = this.shadowRoot.querySelector('.eyes');
        eyes.classList.remove('topdown');
        let lefteye = this.shadowRoot.querySelector('div.left');
        let lEyelid = lefteye.querySelector('.eyelid');
        let llwEyelid = lefteye.querySelector('.lowereyelid');
        let lefthr = lefteye.querySelectorAll('hr');
        lefteye.style = "";
        lEyelid.style = "height: 20px; border-bottom-left-radius: 100%;";
        llwEyelid.style= "";
        lefthr.forEach((item)=>{
           item.style= "border-top: 1px solid rgb(74, 74, 74); border-bottom: 1px solid rgb(255, 64, 64);";
        });

        let righteye = this.shadowRoot.querySelector('div.right');
        let rEyelid = righteye.querySelector('.eyelid');
        let rlwEyelid = righteye.querySelector('.lowereyelid');
        let righthr = righteye.querySelectorAll('hr');

        righteye.style = "";
        rEyelid.style = "height: 20px; border-bottom-right-radius: 100%;";
        rlwEyelid.style= "";
        righthr.forEach((item)=>{
            item.style= "border-top: 1px solid rgb(74, 74, 74); border-bottom: 1px solid rgb(255, 64, 64);";
        });
    }

    /**
     * Hybrid Assistive Limb
     */
    hal() {
    }


    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires()
    }

    static get properties() {
        return {};
    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }
                .container {
                    display: inline-block;
                    border-radius: 37px;
                    background: var(--surface, #ffffff);
                    background: -moz-linear-gradient(top, var(--surface, #ffffff) 0%, #f3f3f3 50%, #ededed 51%, var(--surface, #ffffff) 100%);
                    /* FF3.6-15 */
                    background: -webkit-linear-gradient(top, var(--surface, #ffffff) 0%, #f3f3f3 50%, #ededed 51%, var(--surface, #ffffff) 100%);
                    /* Chrome10-25,Safari5.1-6 */
                    background: linear-gradient(to bottom, var(--surface, #ffffff) 0%, #f3f3f3 50%, #ededed 51%, var(--surface, #ffffff) 100%);
                    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0);
                    /* IE6-9 */
                }
                .screen {
                    border-radius: 25px;
                    position: relative;
                    overflow: hidden;
                    width: 180px;
                    margin: auto;
                }
                .screen .left,
                .screen .right {
                    /*transition: 0.2s;*/
                    width: 50px;
                    height: 50px;
                    float: left;
                    margin: 10px 5px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                .screen:before {
                    float: left;
                    content: '';
                    height: 10px;
                    width: 180px;
                    background: #040404;
                    border-top-right-radius: 100%;
                    border-top-left-radius: 100%;
                }
                .screen:after {
                    float: left;
                    content: '';
                    height: 10px;
                    width: 180px;
                    background: #040404;
                    border-bottom-right-radius: 100%;
                    border-bottom-left-radius: 100%;
                }
                hr {
                    border-bottom: 1px solid #38CFE4;
                    border-top: 1px solid rgba(56, 207, 228, 0.3);
                    margin: 0 0 1px 0;
                }
                .left .eyelid,
                .right .eyelid {
                    left: 0;
                    top: 0;
                    height: 0;
                    width: 100%;
                    position: absolute;
                    background: #040404;
                }
                .left .lowereyelid,
                .right .lowereyelid {
                    transition: 0.2s;
                    left: 0;
                    bottom: -1px;
                    height: 0;
                    width: 100%;
                    position: absolute;
                    background: #040404;
                }
                .topdown .left,
                .topdown .right {
                    -webkit-animation: topdown 0.2s infinite;
                    animation: topdown 0.2s infinite;
                }
                
                @keyframes topdown {
                    0% {
                        bottom: 5px;
                    }
                    50% {
                        bottom: auto;
                    }
                    100% {
                        bottom: -5px;
                    }
                }
                @-webkit-keyframes topdown {
                    0% {
                        bottom: 5px;
                    }
                    50% {
                        bottom: auto;
                    }
                    100% {
                        bottom: -5px;
                    }
                }
                .eyes {
                    background: #040404;
                    padding: 35px 30px 20px;
                    width: 120px;
                    height: 70px;
                    float: left;
                    position: relative;
                }
                
                .eyes:before {
                    content: '';
                    position: absolute;
                    top: -5px;
                    right: 5px;
                    width: 85px;
                    height: 80%;
                    background-size: cover;
                    background-position: top right;
                    background-image: url('data:image/png;base64,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');
                }
                .eyes:after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 5px;
                    width: 50px;
                    height: 50%;
                    background-size: cover;
                    background-position: bottom;
                    opacity: 0.5;
                    background-image: url('data:image/png;base64,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');
                }
               

            `
        ];
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <div class="container">
                <div class="screen">
                    <div class="eyes" class="">
                        <div class="left"><div class="eyelid"></div><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><div class="lowereyelid"></div></div>
                        <div class="right"><div class="eyelid"></div><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><div class="lowereyelid"></div></div>
                    </div>
                </div>
            </div>
        `;
    }

}

window.customElements.define('robot-emotions', RobotEmotions);
