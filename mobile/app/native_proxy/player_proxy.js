'use strict';
import loggerCreator from '../utils/logger'
var moduleLogger = loggerCreator("player_proxy");

class PlayerProxy {

  changePlaylist(playlistName) {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.changePlaylist(playlistName));
  }

  play() {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.play());
  }

  pause() {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.pause());
  }

  playNext() {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.playNext());
  }

  getPlayerStatus() {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.getPlayerStatus());
  }

  stopPlayer() {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.stopPlayer());
  }

  updateSettings(host, user, password) {
    return this._resolveWhenPlayerAvailable().then(() => this.proxy.updateSettings(host, user, password));
  }
}

export default new PlayerProxy();