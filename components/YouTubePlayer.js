"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
/**
 * The YT.ListType provided by the community looks to have a typo in the "playlist" value.
 * Accodring to the docs (https://developers.google.com/youtube/player_parameters?hl=pl#listtype)
 * the correct value is "playlist" not "player" *
 */
var ListType;
(function (ListType) {
    ListType["search"] = "search";
    ListType["userUploads"] = "user_uploads";
    ListType["playlist"] = "playlist";
})(ListType = exports.ListType || (exports.ListType = {}));
var YoutubePlayer = /** @class */ (function (_super) {
    __extends(YoutubePlayer, _super);
    function YoutubePlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            playerName: "youtube_player_" + Math.random(),
            isMuted: false,
            volume: 100,
            availablePlaybackRates: [],
            playbackRate: 1,
            playbackQuality: 'large',
            currentTime: 0,
            duration: 0,
            videoUrl: '',
            videoEmbedCode: '',
            playerState: -1,
            playlist: [],
            playlistIndex: 0,
            videoLoadedFraction: 0
        };
        _this.callbackObject = {
            iframe: React.createElement("div", { id: _this.state.playerName }),
            loadVideoById: function (videoId, start, quality) {
                _this.proxyToPlayer('loadVideoById', [videoId, start, quality]);
            },
            cueVideoById: function (videoId, start, quality) {
                _this.proxyToPlayer('cueVideoById', [videoId, start, quality]);
            },
            loadVideoByUrl: function (videoUrl, start, quality) {
                _this.proxyToPlayer('videoUrl', [videoUrl, start, quality]);
            },
            cueVideoByUrl: function (videoId, start, quality) {
                _this.proxyToPlayer('loadVideoById', [videoId, start, quality]);
            },
            loadPlaylist: function (playlistIdOrItems, index, start, quality) {
                if (typeof playlistIdOrItems === 'string') {
                    _this.proxyToPlayer('loadPlaylist', [{
                            list: playlistIdOrItems,
                            listType: ListType.playlist,
                            index: index.toString(),
                            startSeconds: start || 0,
                            suggestedQuality: quality
                        }]);
                }
                else {
                    _this.proxyToPlayer('loadPlaylist', [playlistIdOrItems, index, start, quality]);
                }
            },
            cuePlaylist: function (playlistId, index, start, quality) {
                _this.proxyToPlayer('cuePlaylist', [playlistId, index, start, quality]);
            },
            pauseVideo: function () { return _this.proxyToPlayer('pauseVideo'); },
            playVideo: function () { return _this.proxyToPlayer('playVideo'); },
            stopVideo: function () { return _this.proxyToPlayer('stopVideo'); },
            clearVideo: function () { return _this.proxyToPlayer('clearVideo'); },
            nextVideo: function () { return _this.proxyToPlayer('nextVideo'); },
            previousVideo: function () { return _this.proxyToPlayer('previousVideo'); },
            playVideoAt: function (index) { return _this.proxyToPlayer('playVideoAt', [index]); },
            seekTo: function (seekTo, allowSeek) { return _this.proxyToPlayer('seekTo', [seekTo, allowSeek]); },
            mute: function () {
                _this.proxyToPlayer('mute');
                _this.setState({ isMuted: true });
            },
            unMute: function () {
                _this.proxyToPlayer('unMute');
                _this.setState({ isMuted: false });
            },
            isMuted: function () { return _this.state.isMuted; },
            setVolume: function (volume) {
                _this.proxyToPlayer('setVolume', [volume]);
                _this.setState({
                    volume: 50
                });
            },
            getVolume: function () { return _this.state.volume; },
            getPlaybackRate: function () { return _this.state.playbackRate; },
            setPlaybackRate: function (rate) {
                if (_this.player.getAvailablePlaybackRates().indexOf(rate) !== -1) {
                    _this.proxyToPlayer('setPlaybackRate', [rate]);
                    _this.setState({ playbackRate: rate });
                }
            },
            getAvailablePlaybackRates: function () { return _this.state.availablePlaybackRates; },
            setLoop: function (loop) { return _this.proxyToPlayer('setLoop', [loop]); },
            setShuffle: function (shuffle) { return _this.proxyToPlayer('setShuffle', [shuffle]); },
            getVideoLoadedFraction: function () { return _this.state.videoLoadedFraction; },
            getPlayerState: function () { return _this.state.playerState; },
            getCurrentTime: function () { return _this.state.currentTime; },
            getPlaybackQuality: function () { return _this.state.playbackQuality; },
            setPlaybackQuality: function (quality) {
                _this.proxyToPlayer('setPlaybackQuality', [quality]);
                _this.setState({ playbackQuality: quality });
            },
            getDuration: function () { return _this.state.duration; },
            getVideoUrl: function () { return _this.state.videoUrl; },
            getVideoEmbedCode: function () { return _this.state.videoEmbedCode; },
            getPlaylist: function () {
                if (_this.props.listType === ListType.playlist && Array.isArray(_this.props.listType)) {
                    return _this.props.listType;
                }
                else if (Array.isArray(_this.state.playlist) && _this.state.playlist.length !== 0) {
                    return _this.state.playlist;
                }
                return [];
            },
            getPlaylistIndex: function () { return _this.state.playlistIndex; },
            addEventListener: function (event, listener) { return _this.proxyToPlayer('addEventListener', [listener]); },
            removeEventListener: function (event, listener) { return _this.proxyToPlayer('removeEventListener', [listener]); },
            player: _this.player
        };
        _this.proxyToPlayer = function (functionName, data) {
            if (data === void 0) { data = []; }
            if (_this.player && _this.player[functionName] && typeof _this.player[functionName] === 'function') {
                return (_a = _this.player[functionName]).call.apply(_a, [_this.player].concat(data));
            }
            else {
                console.warn('Tried to proxy an function call to a player that is not yet ready.');
                return undefined;
            }
            var _a;
        };
        _this.callEventIfBound = function (eventName, eventData) {
            if (_this.props.events && _this.props.events[eventName]) {
                _this.props.events[eventName](eventData);
            }
        };
        /**
         * Since we are using render props we would not have the data for selected
         * state of the player updated in realtime. Instead we need to persist this sort
         * of data in component state.
         *
         * The data is then synced:
         *
         * - in an interval assuming the video is playing
         * - in response to specific user interaction
         * - in response to player event
         */
        _this.sync = function () {
            _this.setState({
                isMuted: _this.player.isMuted(),
                volume: _this.player.getVolume(),
                availablePlaybackRates: _this.player.getAvailablePlaybackRates(),
                playerState: _this.player.getPlayerState(),
                playbackRate: _this.player.getPlaybackRate(),
                playbackQuality: _this.player.getPlaybackQuality(),
                currentTime: Math.round(_this.player.getCurrentTime()),
                duration: Math.round(_this.player.getDuration()),
                videoUrl: _this.player.getVideoUrl(),
                videoEmbedCode: _this.player.getVideoEmbedCode(),
                playlist: _this.player.getPlaylist(),
                playlistIndex: _this.player.getPlaylistIndex(),
                videoLoadedFraction: _this.player.getVideoLoadedFraction()
            });
        };
        _this.startSync = function () {
            if (!_this.syncInterval) {
                _this.syncInterval = window.setInterval(_this.sync, 1000);
            }
        };
        _this.stopSync = function () {
            window.clearInterval(_this.syncInterval);
            _this.syncInterval = 0;
        };
        _this.handleReady = function (data) {
            _this.sync();
            _this.callEventIfBound('onReady', data);
            _this.forceUpdate();
        };
        _this.handleStateChange = function (data) {
            if (data.data === 1) {
                _this.startSync();
            }
            else {
                _this.stopSync();
            }
            _this.sync();
            _this.callEventIfBound('onStateChange', data);
            _this.forceUpdate();
        };
        _this.handlePlaybackQualityChange = function (data) {
            _this.callEventIfBound('onPlaybackQualityChange', data);
            _this.forceUpdate();
        };
        _this.handlePlaybackRateChange = function (data) {
            _this.callEventIfBound('onPlaybackRateChange', data);
            _this.forceUpdate();
        };
        _this.handleError = function (data) {
            _this.callEventIfBound('onError', data);
            _this.forceUpdate();
        };
        _this.handleApiChange = function (data) {
            _this.callEventIfBound('onApiChange', data);
            _this.forceUpdate();
        };
        _this.initPlayer = function () {
            var playerConfig = {
                videoId: '',
                playerVars: _this.getPlayerVars(),
                events: {
                    onReady: _this.handleReady,
                    onStateChange: _this.handleStateChange,
                    onPlaybackQualityChange: _this.handlePlaybackQualityChange,
                    onPlaybackRateChange: _this.handlePlaybackRateChange,
                    onError: _this.handleError,
                    onApiChange: _this.handleApiChange
                },
                height: 160,
                width: 310
            };
            if (_this.props.list && (_this.props.listType === ListType.playlist ||
                _this.props.listType === ListType.search ||
                _this.props.listType === ListType.userUploads)) {
                delete playerConfig.videoId;
            }
            else {
                if (typeof _this.props.videoId !== 'string') {
                    throw new Error('Please make sure to either specify the videoId or list and listType props');
                }
                playerConfig.videoId = _this.props.videoId;
            }
            _this.player = new YT.Player(_this.state.playerName, playerConfig);
            _this.forceUpdate();
        };
        return _this;
    }
    YoutubePlayer.prototype.getPlayerVars = function () {
        var playerVars = {};
        if (this.props.autoplay !== undefined) {
            playerVars.autoplay = (this.props.autoplay ? '1' : '0');
        }
        if (this.props.ccLoadPolicy !== undefined) {
            playerVars.cc_load_policy = (this.props.autoplay ? '1' : '0');
        }
        if (this.props.color !== undefined) {
            playerVars.color = this.props.color;
        }
        if (this.props.controls !== undefined) {
            playerVars.controls = this.props.controls;
        }
        if (this.props.disablekb !== undefined) {
            playerVars.disablekb = (this.props.disablekb ? '1' : '0');
        }
        if (this.props.enableJsApi !== undefined) {
            playerVars.enablejsapi = (this.props.enableJsApi ? '1' : '0');
        }
        if (this.props.end !== undefined) {
            playerVars.end = this.props.end;
        }
        if (this.props.fs !== undefined) {
            playerVars.fs = this.props.fs ? '1' : '0';
        }
        if (this.props.hl !== undefined) {
            playerVars.hl = this.props.hl;
        }
        if (this.props.ivLoadPolicy !== undefined) {
            playerVars.iv_load_policy = this.props.ivLoadPolicy;
        }
        if (this.props.list !== undefined) {
            playerVars.list = this.props.list;
        }
        if (this.props.listType !== undefined) {
            playerVars.listType = this.props.listType;
        }
        if (this.props.loop !== undefined) {
            playerVars.loop = (this.props.loop ? '1' : '0');
        }
        if (this.props.modestbranding !== undefined) {
            playerVars.modestbranding = (this.props.modestbranding ? '1' : '0');
        }
        if (this.props.origin !== undefined) {
            playerVars.origin = this.props.origin;
        }
        if (this.props.playlist !== undefined) {
            playerVars.playlist = (this.props.playlist ? '1' : '0');
        }
        if (this.props.playsinline !== undefined) {
            playerVars.playsinline = (this.props.playsinline ? '1' : '0');
        }
        if (this.props.rel !== undefined) {
            playerVars.rel = (this.props.rel ? '1' : '0');
        }
        if (this.props.showinfo !== undefined) {
            playerVars.showinfo = (this.props.showinfo ? '1' : '0');
        }
        if (this.props.start !== undefined) {
            playerVars.start = this.props.start;
        }
        return playerVars;
    };
    YoutubePlayer.prototype.componentWillReceiveProps = function (nextProps) {
        /**
         * There are a few props that we do want to support in a particular way:
         *
         * - videoId - if changed, play the single video specified
         * - list + listType - if changed, play the selected playlist / search result / user upload
         * - autoplay - if changed, pause or resume the video playback
         * - events - this is handled internally and does not require us updating anything
         *
         * All other props would require changing the IFRAME and force a re-render of the component
         * which we want to disencourage.
         */
        if (nextProps.videoId && nextProps.videoId !== this.props.videoId) {
            this.player.cueVideoById(nextProps.videoId, nextProps.start);
            if (nextProps.autoplay) {
                this.player.playVideo();
            }
        }
        if (nextProps.list && nextProps.list !== this.props.list) {
            this.proxyToPlayer('cuePlaylist', [{
                    list: nextProps.list,
                    listType: ListType.playlist,
                    index: '0',
                    startSeconds: nextProps.start || 0
                }]);
            if (nextProps.autoplay) {
                this.player.playVideo();
            }
        }
        if (nextProps.autoplay !== this.props.autoplay) {
            if (nextProps.autoplay) {
                this.player.playVideo();
            }
            else {
                this.player.pauseVideo();
            }
        }
    };
    YoutubePlayer.prototype.render = function () {
        if (!this.props.render) {
            return React.createElement("div", { id: this.state.playerName });
        }
        else {
            return this.props.render(this.callbackObject);
        }
    };
    YoutubePlayer.prototype.componentDidMount = function () {
        var _this = this;
        if (document.querySelector('[data-youtube]')) {
            YoutubePlayer.loadPromise.then(this.initPlayer);
            return;
        }
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.dataset.youtube = 'true';
        var firstScriptTag = document.getElementsByTagName('head')[0];
        firstScriptTag.appendChild(tag);
        YoutubePlayer.loadPromise = new Promise(function (res) {
            window.onYouTubeIframeAPIReady = function () {
                _this.initPlayer();
                res();
            };
        });
    };
    YoutubePlayer.prototype.componentWillUnmount = function () {
        if (this.player) {
            this.player.destroy();
        }
        this.stopSync();
    };
    return YoutubePlayer;
}(React.Component));
exports["default"] = YoutubePlayer;
