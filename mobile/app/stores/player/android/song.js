import loggerCreator from '../../../utils/logger'
//noinspection JSUnresolvedVariable
const moduleLogger = loggerCreator("song");

import {observable} from "mobx";

import {getArtistImage} from '../../../utils/backend_lastfm_api'

export default class Song {
  @observable id = null;
  @observable title = null;
  @observable artist = null;
  @observable album = null;
  @observable playcount = null;
  @observable lastplayed = null;
  @observable path = null;
  @observable rating = null;

  @observable isMarkedAsPlayed = false;
  markingAsPlayedPromise = null;

  @observable loadedSound = null;
  @observable loadedImageUrl = null;

  constructor({id, artist, title, album, rating}) {
    let logger = loggerCreator("constructor", moduleLogger);

    this.id = id;
    this.artist = artist;
    this.title = title;
    this.album = album;
    this.rating = rating;
    this.loadedImageUrl = null;

    getArtistImage(this.artist).then(imageUri => {
      logger.info(`got album art uri: ${imageUri}`);
      this.loadedImageUrl = imageUri;
    })
  }

  toString() {
    return `Song[Artist=${this.artist} Title=${this.title}]`;
  }
}