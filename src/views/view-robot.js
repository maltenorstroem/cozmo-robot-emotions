import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

import '@furo/layout/furo-app-bar-top.js'
import '@furo/layout/furo-empty-spacer.js'
import "@furo/layout/furo-vertical-flex.js"
import "@furo/input/furo-icon-button.js"

import "../../project_components/robot-emotions.js";

/**
 * `view-robot`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-robot
 * @appliesMixin FBP
 */
class ViewRobot extends FBP(LitElement) {

  constructor() {
    super();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100vh;
            overflow: hidden;
            background-color: var(--surface);
            color: var(--on-surface);
        }

        :host([hidden]) {
            display: none;
        }

        .content {
            padding: 0;
            box-sizing: border-box;
        }
        
        .form {
            padding: var(--spacing-s);
        }
        
        .action {
            padding: var(--spacing-s) var(--spacing-s) var(--spacing-xs) var(--spacing-s);
        }
        
        /** set the banner icon color to danger color */
        furo-banner-display{
            --furo-icon-fill-color:var(--danger);
        }

        .btn{
          border: 2px solid #444;
          border-radius: 4px;
          background: white;
          font-family: var(--fonts-sans);
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          cursor: pointer;
          height: 40px;
          min-width: 100px;
          vertical-align: middle;
          margin-top: 8px;
          padding: 0.375em 0.5em 0.1875em;
        }

        .btn:hover {
          background: aquamarine;
        }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <furo-app-bar-top drawer="main-drawer">
          <div>A robot shows feelings. </div>
          <furo-empty-spacer></furo-empty-spacer>
          <furo-icon-button icon="check" @-click="--pin"></furo-icon-button>
        </furo-app-bar-top>
        <furo-vertical-flex flex class="content">
          <robot-emotions class="form" ƒ-reset="--btnReset"
                          ƒ-smile="--btnSmile"
                          ƒ-kill-all-the-humans="--btnKill"
                          ƒ-check-right="--btnChkRight"
                          ƒ-check-left="--btnChkLeft"
                          ƒ-giggle="--btnGiggling" 
                          ƒ-dubiative="--btnDubiative" 
                          ƒ-sad="--btnSad" 
                          ƒ-really-sad="--btnRSad" 
                          ƒ-bored="--btnBored"></robot-emotions>

          <furo-button-bar class="action">
            <button class="btn" @-click="--btnReset">reset</button>
            <button class="btn" @-click="--btnSmile">smile</button>
            <button class="btn" @-click="--btnChkRight">check Right</button>
            <button class="btn" @-click="--btnChkLeft">check Left</button>
            <button class="btn" @-click="--btnGiggling">giggling</button>
            <button class="btn" @-click="--btnDubiative">dubitaive</button>
            <button class="btn" @-click="--btnSad">sad</button>
            <button class="btn" @-click="--btnRSad">really sad</button>
            <button class="btn" @-click="--btnBored">bored</button>
            <button class="btn" @-click="--btnKill">kill all the humans</button>
          </furo-button-bar>

        </furo-vertical-flex>
      </furo-vertical-flex>
        
    `;
  }
}

window.customElements.define('view-robot', ViewRobot);
