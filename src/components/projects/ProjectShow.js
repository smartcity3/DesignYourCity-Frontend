import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <div className="ui two stackable cards">
          <div className="ui card" to="/project/show">
            <div className="content">
              <div className="card header">Parko</div>
              <div class="meta">
                Dimos Kavalas
              </div>
            </div>
            <div className="image">
              <img alt="" src="../parko.jpg" />
            </div>
          </div>
          <div className="ui card" to="/project/show">
            <div className="content">
              <div className="center aligned card header">Vote</div>
              <div class="center aligned meta">
                Parko by Dimos Kavalas
              </div>
              <div style={{ marginTop: '5rem' }} class="center aligned description">
                Would you like to see this happen?
              </div>
              <div style={{ marginTop: '1rem' }} class="extra content">
                <div class="ui two buttons">
                  <div class="ui positive button"><i className="large thumbs up icon" /></div>
                  <div class="ui negative button"><i className="large thumbs down icon" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui piled segment">
          <h4 class="ui header">Description</h4>
          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
          <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
          <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
        </div>
      </div>
    );
  }
}

export default ProjectShow;