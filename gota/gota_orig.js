const build = 2103232;
var version, showSideMenu, hideSideMenu;
(function () {
    var _0xFF0A = ["gota.io", "", ":", "split", "/", "://", "href", "location", ",", "length", ".", "error", "3.3.7", "#", "display", "css", "none", "show", "block", "hide", "each", "children", "#main-right", "PIXI", "Container", "EMPTY", "Texture", "Sprite", "addChild", "PI", "https://discord.com/channels/166703751053312000/630428963889741854", "GoogleAuthProvider", "auth", "https://accounts.gota.io", "halloween2020", "enabled", "endDate", "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM", "accounts.gota.io", "https://gota-io.firebaseio.com", "gota-io", "gota-io.appspot.com", "570450309042", "1:570450309042:web:380ab6c94d44de2f", "initializeApp", "All", "Party", "ALL", "AUTO", "NONE", "ULTRA", "DEFAULT", "360px", "250px", "stringify", "parse", "assign", "rgb(255, 255, 255)", "rgba(23, 22, 23, 0.9)", "rgba(255, 255, 255, .2)", "rgb(14, 14, 14)", "rgba(50, 50, 50, 0.8)", "#121212", "rgba(170, 170, 170, .25)", "#ff0000", "#ffaaaa", "#ffff00", "#00ffff", "#00ff00", "canvas", "getElementById", "minimap-canvas", "2d", "getContext", "#main", "#party-panel", ".hud-panel", "#score-panel", "#main-scrimmage", "#context-menu", "#chat-input", "#leaderboard-header", "#scrimmage-custom", "mouseFrozenDiv", "#score-mouse", "playerScore", "#playerScore", "playerCells", "#playerCells", "playerFps", "#playerFps", "resetInfo", "#extra-reset-timer", "resetTime", "#resetTime", "respawnInfo", "#extra-respawn-cooldown", "respawnCooldown", "#respawnCooldown", "spectatorCount", "#spectatorCount", "playerCellCount", "minimapCoords", "#minimap-coordinates", "partyPanel", "onmousemove", "mouseRawX", "clientX", "mouseRawY", "clientY", "onkeydown", "which", "keyCode", "charCode", "preventDefault", ":focus", "is", "input", "#popup-profile", "#popup-account-username", "handleKey", "onkeyup", "kEjectMass", "sendEjectMass", "sendPacket", "onmousedown", "button", "onmouseup", "onblur", "cPersistEjectMass", "mousewheel", "id", "target", "wheelDelta", "originalEvent", "deltaY", "mouseZoom", "on", "contextmenu", "addEventListener", "&", "join", "slice", "toLowerCase", "toUpperCase", "name", "region", "value", "val", "version", "Woah! Version ", " is now available. Press Ctrl+R to update!", "selfMsg", "motd", "listRefresh", "titles", "/game", "ref", "database", "POST", "json", "/api/v1/utilities/servers", "servers", "players", "playersMax", "address", "gamemode", "ssl", "order", "playersCurrent", "push", "sort", "ajax", "eu", "Vendetta", "NOT_LOADED", "unload", "init", "sRenderType", "CANVAS", "cDisableAA", "autoDetectRenderer", "resize", "now", "Welcome to Gota.io!", "particles", "cDisableEventSkins", "particlesMax", "GET", "jsonp", "https://gamedata.gota.io/skinData.php", "get", "names", "log", "Text status: ", "Error thrown: ", "width", "innerWidth", "resolution", "height", "innerHeight", "renderer", "x", "position", "stage", "y", "charAt", "u", "rAnimationDelay", "min", "foodObjects", "steps", "animate", "handleFood", "bucket", "handle", "myCells", "size", "centerX", "centerY", "centerSteps", "cDisableAutoZoom", "scale_base", "max", "pow", "centerX_", "centerY_", "scale", "pivot", "isConnected", "mouseFrozen", "sendMouse", "cHideMinimap", "cShowCoordinates", "update", "buffHolder", "render", "html", "resetType", "serverData", "floor", "ceil", "NEVER", "handleUpdatedPlayers", "playerRegistry", "cShowBorder", "border", "removeChild", "parent", "destroy", "Graphics", "rBorderSize", "toHexString", "uiGameBorderColor", "string2hex", "utils", "lineStyle", "left", "top", "drawRect", "visible", "uiForegroundColor", "X: ", "toFixed", " Y: ", "clearRect", "font", "12px Calibri", "party", "state", "ALIVE", "playerId", "mmColor", "x_", "y_", "#fefefe", "socket", "currentServer", "currentServerName", "spectate", "scale_", "offsetX", "offsetY", "mouseX", "mouseY", "partyIds", "subPanelOverride", "score", "customGameMap", "accountListeners", "clearStats", "bind", "sendPing", "prototype", "stats", "An unnamed cell", "play", "No server selected!", "#name-box", "#playerServer", "ip", "setName", "connect", "send", "event", "Game", "webMenu", "Play", "spec", "sendSpectate", "Spectate", "nextUrl", "disconnect", "Connecting to ", "...", "wss://", "ws://", "binaryType", "arraybuffer", "onopen", "onConnect", "onmessage", "onMessage", "onclose", "reset", "You have been disconnected from the server. Reason: ", "reason", "Unknown", "onerror", "Error connecting to server... Retrying every second.", "hide-captcha-badge", "add", "classList", "body", "close", "clearBuckets", "onDelete", "clear", "clearParty", "clearBuffs", "hasSentSubPanel", "#playerId", "kSplit", "sendKey", "kToggleSpec", "kDoubleSplit", "kTripleSplit", "kQuadSplit", "kHexaSplit", "kFreezeMouse", "kContextMenu", "readyState", "connectionStart", "sendOptions", "currentUser", "catch", "sendAuthToken", "then", "getIdToken", "td", "createElement", "span", "color", "style", "#DDDD00", "innerHTML", "[System] ", "appendChild", "SYSTEM", "selfMsgWithJoinCode", "pointerEvents", "all", "userSelect", "partyLeader", "partyIndex", "handleCustomGameLeave", "partyCode", "page", " ", "pushState", "history", "isPartyLeader", "getServerMaxCells", "maxCells", "bonusMaxCells", "data", "getUint8", "offset", "handleUpdate", "handlePosition", "handleStats", "showSubPanel", "updateSubPanel", "handleInvite", "handlePartyInfo", "handlePartyData", "handlePartyJoinCode", "handleLeaderboard", "handleLeaderboardCustom", "handleRespawnCooldown", "handleMapData", "handleClearNodes", "handleUpdateBorder", "handleResetTime", "handleSpectators", "handleSystemMsg", "handlePing", "handleChat", "handleWhisper", "handleShowScrimmageMenu", "handleQueueData", "handleQueueLeave", "handleMatchState", "handleScrimmageData", "handleCustomGameShow", "handleCustomGameUpdate", "handleShowCustomGameLobbies", "handleAddBuff", "handleRemoveBuff", "handleClearBuffs", "handleAuthenticated", "handleProfile", "getUint16", "getPlayer", "cellColor", "setFlags", "flags", "nameColor", "parseEffect", "setSkin", "skin", "updatePlayer", "setType", "getInt16", "setX", "setY", "setSize", "parsedColor", "buff", "onCreate", "updateX", "updateY", "size_", "remove", "type", "keys", "cAutoRespawn", "GOT_gota-io_336x280", "refresh", "cmd", "sortCells", "getFloat32", "getFloat64", "updateCellCounter", "sendPartyJoin", "#scrimmage-btn-leave", "right", "bottom", "spectators", "updateSpectators", "leaderboard-canvas", "Leaderboard", "text", "getUint32", "16px Calibri", "fillStyle", "uiLeaderboardHighlightSelf", "uiLeaderboardHighlightParty", ". ", "fillText", "cColoredPing", "uiGameColorSuccess", "#playerPing", "uiGameColorWarning", "uiGameColorError", "ms", "rgb(", ")", "includes", "PARTY", "Admin", "ADMIN", " - ", "[", "] ", "innerText", "dataset", "className", "chat-name", "oncontextmenu", "div", "chat-text", ": ", " effect_ice", "effect_snow", " effect_fire", " > ", "WHISPER", "SUCCESS", "Invalid authentication token! Please logout and try again!", "FAILURE", "cAutoDecline", "sendInviteResponse", "popup-party-text", " has invited you to a party.", "#popup-party", "isLeader", "cache", "team", "UNKNOWN", "checkLeader", "drawParty", "getInt32", "#popup-party-code-content input", "#popup-party-code", "alive", "eatenFood", "eatenEject", "eatenVirus", "eatenPlayer", "gainFood", "gainEject", "gainVirus", "gainPlayer", "#main-stats", "empty", "<span>Name: ", " (", ")</span><br>", "append", "<span>Alive: ", "</span><br>", "<span>Food eaten: ", "<span>Ejected mass eaten: ", "<span>Viruses eaten: ", "<span>Player cells eaten: ", "uid", "onAddBuff", "onRemoveBuff", "parentCell", "updateScorePanel", "getRealMass", "toLocaleString", "cColoredCellCount", "cHidePartyPanel", "party-canvas", "measureText", "scoreText", "DEAD", "SPECTATE", "SPEC", "uiPartyLeaderColor", "Total:", "stop", "byteLength", "Queue", "Mode: ", "Time: ", "Queued players: ", "You have left the queue for [", "]", "A match has been found. Good luck and have fun!", "#scrimmage-mode-select", "#scrimmage-mode-info", "option", "scrimmage-info-", "modes", "sizes", "startmass", "respawnDelay", "teams", "maps", "#scrimmage-custom-btn-container", "#scrimmage-map", "<option value=\'", "\'>", "</option>", "change", "trigger", "selectedIndex", "prop", "updateMap", "MAP", "updateMode", "MODE", "updateSize", "SIZE", "updateStartMass", "STARTMASS", "updateLock", "LOCK", "updatePlayerById", "PLAYER_UPDATE", "updatePlayers", "PLAYER_LIST", "updateVirusDensity", "VIRUS_DENSITY", "updateRespawnDelay", "RESPAWN_DELAY", "updateAutoSplit", "AUTOSPLIT", "updatePublic", "PUBLIC", "updatePassword", "PASSWORD", "updateName", "NAME", ".scrimmage-full", "#scrimmage-menu", "#scrimmage-lobbies", "#scrimmage-lobbies-tbody", "leaderId", "leaderName", "map", "mode", "maxSize", "hasPasscode", "<div class=\'scrimmage-lock\'></div>", "<tr partyId=\'", "\'><td><span>", "</span></td><td><span>", "</span></td></tr>", "click", "custom-game-selected", "removeClass", ".custom-game-selected", "partyId", "attr", "addClass", "#scrimmage-lobbies-tbody tr", "#scrimmage-name", "selected", "#scrimmage-map option[value=\'", "\']", "#scrimmage-mapmode", "#scrimmage-mapsize", "placeholder", "#scrimmage-startmass", "#scrimmage-mapmode option[value=\'", "#scrimmage-mapsize option[value=\'", "#scrimmage-virusDensity", "#scrimmage-respawnDelay", "checked", "#scrimmage-autoSplit", "#scrimmage-public", "#scrimmage-password", "#scrimmage-lockteams", "checkLock", "disabled", "#cgp-", "removeAttr", ".custom-game", " option[value=\'", "#cgp-name-", "#scrimmage-custom-players", "<tr><td><span id=\'cgp-name-", "</span></td>", "getTeamOptions", "</tr>", "\\d+", "match", "option:selected", "find", "sendCustomGameUpdate", "<td><select class=\'custom-game\' id=\'cgp-", "\'><option value=\'0\'>Spectator</option>", "\' class=\'t", "</select></td>", "nameCache", "massLastAmount", "getMass", "round", "getSizeCache", "massType", "toShortString", "toString", "getNumber", "create", "RenderTexture", "cacheContainer", "getSizeCacheSprite", "texture", "clearCacheContainer", "K", "M", "B", "sprites", "spritesIndex", "buildSizeCache", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Verdana", "bold", "#fff", "black", "textOutlineSize", "Text", "needsPixiUpdate", "container", "cThemeEnabled", "beginFill", "drawCircle", "endFill", "set", "cHideFood", "drawSpikeData", "spiked", "spikeSprite", "anchor", "addChildAt", "circle", "aCustomSpike", "aCustomMother", "naturalHeight", "skinId", "ejectedMassSprite", "getSkin", "getPlayerById", "SELF", "skinsContainer", "needsPixiSkinUpdate", "massSprite", "cacheUpdate", "getNameCache", "nameSprite", "nameEffectSprite", "levelSkins", "skinSprite", "isGif", "getTexture", "cDisableAutoNameHiding", "levelNames", "lowerName", "effect", "cShowMass", "debuffSprite", "shieldSprite", "sprite", "motherCustomEnabled", "motherCustom", "setDefaultSpriteAnchor", "defaultData", "updatedPlayers", "shift", "skinCache", "fill", "updateText", "indexOf", "substring", "replace", "LOADING", "loadFromFrameData", "LOADED", "https://gamedata.gota.io/gifs/", ".gif", "crossOrigin", "load", "beginPath", "arc", "closePath", "clip", "drawImage", "fromCanvas", "src", "https://gamedata.gota.io/skins/", ".png", "createMaskCache", "count", "globalCompositeOperation", "source-in", "rect", "from", "cacheAsBitmap", "Gota Web ", "setUint8", "cSilentLogin", "setInt32", "setUint16", "sendChat", "sendPartyAction", "setUint32", "sendShowProfile", "sendWhisper", "sendSubPanel", "skinName", "r", "g", "b", "chatColor", "rViewDistance", "sendQueue", "sendCustomGame", "sendLeaveMatch", "sendShowLobbies", "sendJoinLobby", "sendCaptcha", "setInt16", "sendCustomGameUpdateString", "charCodeAt", "fromCharCode", "message", "code", "This account has been permanently suspended by an administrator.", "auth/user-disabled", "auth/popup-closed-by-user", "Classic", "classic", "Instant Merge", "instant", "Mega Split", "megasplit", "white", "STAFF", "Gota.io Staff", "build", "royalblue", "VERIFIED", "Verified Player", "check_circle", "i", "material-icons", "user-badge", "data-balloon", "data-balloon-pos", "up", "setAttribute", "li", "user-embed", "img", "avatar", "alt", "username", "info", "server", "presence", "timestamp", "getTime", "status offline", "Not playing on any server", "status ", "status", "ONLINE", "online", "Playing ", "Spectating ", " on ", " (ID ", "status pending", "Pending Friend Request", "actions", "face", "View Profile", "#main-social", "Join Server", "\'s ID is ", "done", "Add as Friend", "isHandlingRequest", "/api/v1/social/friends", "application/json", "Remove Friend", "Are you sure you want to remove \"", "\" as your friend?", "off", "callbacks", "elements", "#profile-username", "#profile-avatar", "Level ", "level", "levelData", "&nbsp;&nbsp;&nbsp;[", "xp_current", "xp_needed", "#profile-level", "title", "#profile-title", "#profile-name", "cursor", "pointer", "default", "spin", "#profile-close-btn", "#social-friends .user-list", "#social-uid", "title-text center", "You have no friends 😥", "pendingFriends", "replaceChild", "forEach", "profiles", "/api/v1/social/friends/pending", "/users/", "timestamps", "/friendships/", "hasOwnProperty", "balloon", "event-", "key", "toggleClass", ".server-tab", "incrementPlay", "undefined", "startPreRoll", "player", "#btn-play", "main-servers", "#btn-servers", "main-options", "#btn-options", "main-themes", "#btn-themes", "main-subpanel", "#btn-cellpanel", "https://www.reddit.com/r/PlayGotaIO/", "_blank", "open", "#btn-reddit", "https://gota.io/discord", "#btn-discord", "keypress", "#btn-spec", "endsWith", "#autocomplete-panel", "startsWith", "<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>", "findIndex", "triggers", "<tr><td>", "</td><td>", "description", "</td></tr>", "#autocomplete-panel tbody", "values", "filter", "<h3>Emotes</h3>", "<img name=\'", "\' title=\'", "\' src=\'https://gamedata.gota.io/emotes/", ".png\' />", "<h3>Gifs</h3>", "\' src=\'https://gamedata.gota.io/emotes/gifs/", ".gif\' />", "keyup", "nodeName", "TD", "parentElement", "focus", "IMG", "nodeValue", "attributes", "#animationDelay", "#rAnimationDelay", "#viewDistance", "#rViewDistance", "rUiScale", "parseFloat", "#uiScale", "#rUiScale", "transform", "scale(", ".ui-scale", "background-image", "url(https://gamedata.gota.io/emotes/", "random", ".png)", "#chat-emote-btn", "toggle", "#emote-panel", "#emote-panel ul li img", "chat-panel", "mousedown", "chat-resize", "getComputedStyle", "defaultView", "mousemove", "documentElement", "mouseup", "px", "removeEventListener", ".checkbox-options", ".options-container select", ".options-container input[type=range]", "#popup-changelog", "#btn-changelog", "#btn-close-changelog", "#btn-accept", "#btn-decline", "select", "Copy", "execCommand", "#popup-party-code-content button", "#menu-invite", "/t ", "#menu-whisper", "#menu-profile", "Private", "#menu-pu_pr span", "Public", "#menu-pu_pr", "#menu-promote", "#menu-kick", "#menu-spectate", "#menu-block", "chat-emote-btn", "popup-party-code", "#popup-chat-tab-editor", "#aEditChatTabs", "#cte-tab-selector", "#btn-chat-tab-editor-add", "#btn-chat-tab-editor-remove", "#btn-chat-tab-editor-update", "#popup-asset-skinner .title-text", "asset", "#input-asset-skinner", "#popup-asset-skinner", ".custom-asset-skinner", "a", "#popup-asset-skinner .back-button", "#btn-custom-asset-set", "#btn-custom-asset-clear", "drop", "test", "result", "readAsDataURL", "dragover", "#popup-food-colors", "#btn-food-colors", "theme.json", "text/plain", "#btn-theme-export", "#theme-import", "#btn-theme-import", "files", "#main-themes .options-container", "/api/v1/options/setFlags", "#cGlobalLeaderboard", "consented", "signOut", "users/", "#account-loader", "#authed", "display: flex;", "#account-avatar", "#account-username", "&nbsp;&nbsp;&nbsp;&nbsp;", " XP", "#account-level", "%", ".xp-meter > span", "loadServers", "port", "?", "servers/account/", "DISCORD_LINKED", "loadDiscord", "exists", "Your account is linked with ", "discrim", "#discordLinkStatus", "#discordLink", "#discordUnlink", "padding", "15px", ".discord-login-container", "30px", "onSnapshot", "doc", "discord", "collection", "firestore", "tokens", "getMonth", "setMonth", "#redeem-tokens", "You have 0 tokens.", "#token-amount", "You have ", " tokens, maximum expiry date: ", "#redeem-spend", "#account-titles", "loadPrivateData", "<option value=\'0\'>Default Title</option>", "inline-block", "content", "read", "#popup-message-title", "#popup-message-content", "#popup-message", "private/", "#guest", "#no_cookie_consent", "onAuthStateChanged", "signInWithPopup", "#account-login", "#account-logout", "https://trello.com/c/Hdnxuxuc/2-account-system", "#account-shop", "#account-social", "#social-back-button", "#account-profile", "#food-colors-close-btn", "Set", "/api/v1/options/setTitle", "/api/v1/options/markAsRead", "#popup-message-read-btn", "#account-username-input", "trim", "Please provide a username!", "/api/v1/social/username", "#account-set-username-btn", ".popup-panel .back-button", "https://accounts.gota.io/api/v1/options/discord/redirect?token=", "popup", "width=600,height=700", "/api/v1/options/discord/unlink", "By redeeming, you are agreeing the locked name rules linked below the form.\x0A\x0AABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\x0A\x0APress OK to redeem.", "#redeem-name", "/api/v1/options/redeem", "submit", ".error-banner", "Enter friend\'s UID (found above add friend button)", "string", "Please enter a valid UID", "#btn-add-friend", "tagName", "activeElement", "INPUT", "setSelectionRange", "blur", "beforeunload", "Are you sure you want to leave Gota.io?", "keybinds-btn-selected", ".keybinds-btn", "#btn-reset-keybinds", "#scrimmage-info-", "#btn-queue", "#btn-leave-match", "#btn-custom-create", "#btn-custom-return", "#btn-custom-start", "#btn-custom-lobbies", "#btn-lobbies-refresh", "Enter the password to join this game", "#btn-lobbies-join", "#btn-lobbies-return", "Enter a password to join your game (32 max characters)", "Enter a new name for your game (32 max characters)", "grecaptcha", "ready", "6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", "login", "execute", "hex", "toRgbString", "spectrum", "showAlpha", "#uiGameBackgroundColor", "#uiGameBorderColor", "Add", "_FoodColors", "#pFoodColors", "#food-color-list", "<div c=\'", "\' style=\'background:", ";color:", ";\'><span>", "</span><div><button class=\'btn-food-color\'>X</button></div></div>", "c", "eq", "parents", "splice", ".btn-food-color", ".keybinds-btn-selected", "first", "&nbsp;", "logo", "backgroundImage", "url(\'images/logo.png\')", "url(\'images/events/", "/logo.png\')", "<li><img name=\'", ".png\' /></li>", ".emote-list", ".gif\' /></li>", ".gif-list", "<option value=\"", "\">", "#spEffect", "images/ejectedmass_skins/", "customEjectedMass", "images/events/", "/ejected_mass.png", "images/effects/", "/spike_mother_happy.png", "images", "/spike_mother.png", "/spike.png", "table-row", "#performance-refresh", "cHideId", ".pID", "cHideServerDisplay", ".psvr", "alpha", "cTransCells", "cHideChat", "#chat-panel", "#minimap-panel", "cHideScorePanel", "cHideLeaderboard", "#leaderboard-panel", "cHideExtraPanel", "#extra-panel", "disable", "enable", "cResizableChat", "#chat-resize", "sShowNames", "sShowSkins", "sMassType", "sTextOutlines", "strokeThickness", "sQuality", ".fg-interface-color", ".interface-color", "border-color", ".gota-btn", ".popup-panel", ".main", ".main-bottom-stats", "background-color", ".ui-pane", "#chat-tab-container", ".chat-tab", ".options-container", ".server-active", "#server-content", "#main-account", "getAlpha", "setAlpha", ".server-table tbody", "background", "#borderSize", "rBackgroundOpacity", "#backgroundOpacity", "opacity", "canvas-background", "url(\'", "\')", "backgroundSize", "100% 100%", "Unable to load custom theme virus.", "Unable to load custom theme mother cell.", "#minimap-canvas", "2px solid rgba(255, 255, 255, .2)", "270px", "Enter new locked name!", "Please enter a valid name!", "Locked names must be 2 or more characters long.", "Locked names must be 20 or less characters long.", "You are about to change your locked name to: \'", "\'.\x0ALocked names can only be changed once per week.\x0A\x0AAre you sure you wish to continue?", "#btn-chg-ln", "#btn-updateSP", "rules", "#btn-subpanel-rules", "rgb", "#spNameColor", "#spChatColor", "#spSkinName", "#spLowerName", "#spEffect select", "toRgb", ".subpanel-name-dashboard", "#subpanel-rules", "#subpanel-content", "loadSubPanel", "locked", "#main-subpanel", "#spLockedName", "lastChange", "Last Changed: ", "expiry", "seconds", "#spExpiry", "Never", "accounts", "#servers-body-eu", "#servers-body-na", "#servers-body-ap", "<tr id=\"s_", "\" class=\"server-row\" server=\"", "\"><td class=\"server-table-name\">", "</td><td class=\"server-table-players\">", "</td><td class=\"server-table-mode\">", "#servers-body-", "\" class=\"account-server server-row\" server=\"", "prepend", ".server-row", "server-selected", "#s_", "#server-tab-", "inherit", "server-active", "#server-tab-container", "uiMenuSubBackgroundColor", "#servers-", "_ChatTabs", "#chat-body-", " tr", "maxMessages", " tr:first-child", "cloneNode", "tr", "chat-body-", "#chat-container-", "scrollHeight", "scrollTop", "outerHeight", "action", "Invalid command!", "#chat-container", "Unnamed", "<li class=\'chat-tab\' id=\'chat-tab-", "\' name=\'", "\'><span>", "</span></li>", "<div class=\'chat-inner-container\' id=\'chat-container-", "\'><table class=\'chat-table\'><tbody id=\'chat-body-", "\'></tbody></table></div>", "uiBorderColor", "#chat-tab-", "<span>", "</span>", "chat-active-tab", "chat-active-container", ".chat-inner-container", "#cte-tab-name", "#cte-type-", "#cte-max-messages", "New", "context-name", ".context-action", "&gt;", "&lt;", "iChatWidth", "iChatHeight", "options", "setItem", "localStorage", "keybinds", "theme", "subpanel", "getItem", "isInteger", "s", "lockedName", "readAsText", "#cThemeEnabled", "<img src=\"https://gamedata.gota.io/emotes/", ".png\" height=\"17\" width=\"17\" alt=\"", "<img src=\"https://gamedata.gota.io/emotes/gifs/", ".gif\" height=\"17\" width=\"17\" alt=\"", "MAX_PARTICLES", "/particles.png", "onTick", "draw", "image", "frame", "speed", "angle", "sin", "cos", "Random", "Maximum Cells Upgrade", "extracells", "MODIFIER", "Extra Consumable Slot", "extraconsumable", "Merge", "merge", "PASSIVE", "Grow", "grow", "Speed", "Shield", "shield", "Virus", "spike", "CONSUMABLE", "Disrupt", "disrupt", "Teleport", "teleport", "_disrupt", "DEBUFF", "Silver", "phoenix", "Consumable Shield", "_shield", "Magnet", "magnet", "Decay", "decay", "_decay", "images/powerups/", "images/shield.png", "images/debuff.png", "passiveBuffs", "passiveSortedBuffs", "consumableBuffs", "nextCacheUpdate", "sortPassiveBuffs", "onPassiveBuffsUpdate", "markCacheForUpdate", "Recieved buff: ", "powerup", "Lost buff: ", "stack", "updateCache", "#222", "bold 16pt Calibri", "startTime", "expireTime", "getCooldown", "#000", "moveTo", "globalAlpha", "hearts", "delay", "frames", "getFrame", "getLength", "getImage", "frameInfo", "foodColors", "#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614", "You cannot block that player.", "Unblocked player with ID: ", "Blocked player with ID: ", "Whisper a player by ID", "whisper", "t", "w", "Invalid player id.", "Reply to previous whisper", "reply", "/r ", "Send a message to other party members", "p", "/p ", "Invite a player to the party", "invite", "Invalid ID.", "Leave your current party", "leave", "l", "Promote a party member to leader", "promote", "Kick a player from the party", "kick", "Clear the chat", "chat-body", "firstChild", "Get your current ID", "Your id is ", "You need to be connected to a server to use this command.", "Show the scrimmage menu", "scrimmenu", "Join a party with a code", "j", "Set the party to private", "private", "Allow players to join the party without an invite", "public", "Reset chat size", "resetchat", "Reset chat tab settings", "resetchattabs", "Spectate a player", "Disconnect from the server", "Get Account UID", "account", "You are not logged in.", "UID: ", "Block or unblock a player by ID", "Reloads the skin list", "reloadskins", "4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "sodaWut", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP", "Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap", "A", "C", "D", "E", "F", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "BACK_SPACE", "TAB", "CLEAR", "ENTER", "ENTER_SPECIAL", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", ";", "<", "=", ">", "AT", "G", "H", "I", "J", "L", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "CONTEXT_MENU", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "META", "ALTGR", "WIN_ICO_HELP", "WIN_ICO_00", "WIN_ICO_CLEAR", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "PA1", "WIN_OEM_CLEAR", "heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "flower2", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "0:00", "Invalid HEX color.", "#000000", "items", "dataTransfer", "kind", "file", "getAsFile", "msSaveOrOpenBlob", "navigator", "createObjectURL", "download", "revokeObjectURL", "URL", "regex", "Spectator", "Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "#25f", "#f31", "green", "yellow", "purple", "orange", "Notification", "permission", "granted", "Your match has started.", "https://gota.io/assets/images/favicon.png", "policyID", "CP_0918_01", "policyLink", "https://gota.io/policies/privacy?v=", "#cookies", "consentOption", "#cc_acceptCookies", "consentCookie", "cookieConsent", "yes+", "/web", "cookieBanner", "#cookie-banner", "#declineCookies", "#acceptCookies", "backwardsCompatable", "consentHandler", "getConsentCookie", "showCookieBanner", "deleteConsentCookie", "createConsentCookie", "handlersBound", "bindBannerHandlers", "slideDown", "banner", "slideUp", "decline", "accept", " <a href=\"", "\" target=\"_blank\">Our Cookie Policy!</a>", "#cookie-banner .description", "exdays", "setTime", "expires=", "toUTCString", "cookie", ";path=", "path", "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=", "cookieconsent_status", "allow", "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;", "playCounter", "deathCounter", "Advertisement Loading...", "preroll"];

    function _0xFF2F(_0xFF79, _0x1000D, _0xFFE8) {
        if (!_0xFF79) {
            return
        };
        var _0xFF9E = this[_0xFF0A[7]][_0xFF0A[6]][_0xFF0A[3]](_0xFF0A[5])[1][_0xFF0A[3]](_0xFF0A[4])[0][_0xFF0A[3]](_0xFF0A[2])[0];
        var _0xFF2F = _0xFF79[_0xFF0A[3]](_0xFF0A[8]);
        for (var _0xFFC3 = 0; _0xFFC3 < _0xFF2F[_0xFF0A[9]]; _0xFFC3++) {
            var _0xFF54 = _0xFF2F[_0xFFC3];
            if (_0xFF54 == _0xFF9E) {
                return
            };
            if (!_0x1000D) {
                continue
            };
            _0xFF54 = _0xFF9E[_0xFF0A[3]](_0xFF0A[10] + _0xFF54);
            if (_0xFF54[_0xFF0A[9]] == 2 && !_0xFF54[1]) {
                return
            }
        };
        throw (_0xFFE8 || _0xFF0A[11])
    }

    function _0xFF54(_0xFF54) {
        var _0xFF2F = $(_0xFF0A[13] + _0xFF54);
        if (_0xFF2F[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16]) {
            _0xFF79();
            _0xFF2F[_0xFF0A[17]](500)
        }
    }

    function _0xFF79() {
        $(_0xFF0A[22])[_0xFF0A[21]]()[_0xFF0A[20]](function () {
            if ($(this)[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[18]) {
                $(this)[_0xFF0A[19]](500)
            }
        })
    }

    function _0xFF9E() {
        var _0x114DD = window[_0xFF0A[23]];
        const _0x116E3 = _0x114DD;
        window[_0xFF0A[23]] = null;
        var _0x11708;
        const _0x1172D = new _0x116E3[_0xFF0A[24]]();
        const _0x10057 = new _0x116E3[_0xFF0A[24]]();
        const _0x10110 = new _0x116E3[_0xFF0A[24]]();
        const _0x112FC = new _0x116E3[_0xFF0A[24]]();
        const _0x109E1 = new _0x116E3[_0xFF0A[24]]();
        const _0x10316 = new _0x116E3[_0xFF0A[24]]();
        const _0x11855 = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
        var _0x100EB;
        _0x112FC[_0xFF0A[28]](_0x10110);
        _0x112FC[_0xFF0A[28]](_0x109E1);
        _0x112FC[_0xFF0A[28]](_0x10316);
        _0x1172D[_0xFF0A[28]](_0x10057);
        _0x1172D[_0xFF0A[28]](_0x112FC);
        _0x1172D[_0xFF0A[28]](_0x11855);
        var _0x101EE, _0x11346, _0x11390, _0x11752, _0x11502, _0x10FCE, _0x11DF8, _0x11E42, _0x11E1D, _0x116BE, _0x11EB1, _0x11ED6, _0x11EFB, _0x11B83, _0x11B5E, _0x11321, _0x11674, _0x10DED, _0x11018, _0x11ACA, _0x105D5, _0x1033B, _0x121BA, _0x10903, _0x10032, _0x115BB, _0x11AA5, _0x1076C, _0x10747, _0x11A80, _0x10FF3, _0x112D7 = false,
            _0x10ABF = 0,
            _0x10A9A = 0,
            _0x12195 = null,
            _0x12170 = null,
            _0x10CC5 = false,
            _0x1206D = {
                elements: [],
                callbacks: [],
                pendingFriends: [],
                timestamps: []
            },
            _0x100A1 = [],
            _0x10AE4 = false,
            _0x10238 = null,
            _0x10EA6 = true,
            _0x10800;
        const _0x11699 = Math[_0xFF0A[29]] * 2;
        const _0x102CC = 32,
            _0x10282 = _0x102CC * 2,
            _0x102A7 = (_0x102CC + 6) * 2,
            _0x102F1 = _0x102CC / 2;
        const _0x10825 = {};
        const _0x12092 = _0xFF0A[30];
        const _0xFFE8 = new firebase[_0xFF0A[32]][_0xFF0A[31]]();
        const _0xFF2F = _0xFF0A[33];
        var _0x10972 = {
            key: _0xFF0A[34],
            foodColors: [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
            customEjectedMass: false,
            particles: false,
            particlesMax: 100,
            motd: _0xFF0A[1],
            endDate: 1604188800000,
            enabled: false,
            motherCustomEnabled: false,
            motherCustom: function (_0xFF0A) {},
            happyMotherCells: []
        };
        _0x10972[_0xFF0A[35]] = new Date() < _0x10972[_0xFF0A[36]];
        firebase[_0xFF0A[44]]({
            apiKey: _0xFF0A[37],
            authDomain: _0xFF0A[38],
            databaseURL: _0xFF0A[39],
            projectId: _0xFF0A[40],
            storageBucket: _0xFF0A[41],
            messagingSenderId: _0xFF0A[42],
            appId: _0xFF0A[43]
        });
        var _0x11C61 = {};
        var _0xFF79 = {};
        var _0x114B8 = {
            levelNames: 3,
            levelSkins: 3,
            textOutlineSize: 0,
            resolution: 1
        };
        var _0x10791 = [{
            name: _0xFF0A[45],
            flags: 255,
            maxMessages: 100
        }, {
            name: _0xFF0A[46],
            flags: 2,
            maxMessages: 100
        }];
        var _0x11B39 = 0;
        var _0x11493 = {
            cDisableAA: false,
            cAutoRespawn: false,
            cHideId: false,
            cHideServerDisplay: true,
            sShowNames: _0xFF0A[47],
            sShowSkins: _0xFF0A[47],
            sRenderType: _0xFF0A[48],
            sTextOutlines: _0xFF0A[49],
            sQuality: _0xFF0A[50],
            sMassType: _0xFF0A[51],
            cTransCells: false,
            cShowMass: false,
            cShowBorder: false,
            cSilentLogin: false,
            cHideChat: false,
            cHideMinimap: false,
            cShowCoordinates: false,
            cHideFood: false,
            cColoredPing: false,
            cColoredCellCount: false,
            cThemeEnabled: false,
            cDisableAutoZoom: false,
            cAutoDecline: false,
            cDisableEventSkins: false,
            cResizableChat: false,
            cDisableAutoNameHiding: false,
            cPersistEjectMass: true,
            iChatWidth: _0xFF0A[52],
            iChatHeight: _0xFF0A[53],
            rUiScale: 1.0,
            rAnimationDelay: 90,
            rViewDistance: 100,
            _ChatTabs: JSON[_0xFF0A[55]](JSON[_0xFF0A[54]](_0x10791))
        };
        var _0x10F5F = {
            kContextMenu: 3,
            kEjectMass: 87,
            kSplit: 32,
            kToggleSpec: 81,
            kDoubleSplit: -1,
            kTripleSplit: -1,
            kQuadSplit: -1,
            kHexaSplit: -1,
            kFreezeMouse: -1
        };
        var _0x10F3A = false;
        const _0x107B6 = Object[_0xFF0A[56]]({}, _0x10F5F);
        const _0x11FD9 = {
            uiForegroundColor: _0xFF0A[57],
            uiBackgroundColor: _0xFF0A[58],
            uiBorderColor: _0xFF0A[59],
            uiMenuBackgroundColor: _0xFF0A[60],
            uiMenuSubBackgroundColor: _0xFF0A[61],
            uiGameBackgroundColor: _0xFF0A[62],
            uiGameGridColor: _0xFF0A[63],
            uiGameBorderColor: _0xFF0A[64],
            uiLeaderboardHighlightSelf: _0xFF0A[65],
            uiLeaderboardHighlightParty: _0xFF0A[66],
            uiPartyLeaderColor: _0xFF0A[67],
            uiGameColorSuccess: _0xFF0A[68],
            uiGameColorWarning: _0xFF0A[66],
            uiGameColorError: _0xFF0A[64],
            _FoodColors: [],
            aCustomBackground: _0xFF0A[1],
            aCustomSpike: _0xFF0A[1],
            aCustomMother: _0xFF0A[1],
            rBorderSize: 64,
            rBackgroundOpacity: 1
        };
        const _0x107DB = {};
        for (var _0x10F15 in _0x11FD9) {
            _0x107DB[_0x10F15] = _0x11FD9[_0x10F15]
        };
        const _0x106B3 = {
            aCustomSpike: null,
            aCustomMother: null
        };
        var _0x106D8 = [];
        var _0x11F8F = {
            rules: false,
            nameColor: {
                r: 0,
                g: 255,
                b: 255
            },
            chatColor: 0,
            lowerName: false,
            skinName: _0xFF0A[1],
            effect: 0
        };
        var _0x10E5C = null;
        var _0x11C3C = null;
        var _0x1103D = 0;

        function _0x11F20() {
            _0x101EE = document[_0xFF0A[70]](_0xFF0A[69]);
            _0x11346 = document[_0xFF0A[70]](_0xFF0A[71]);
            _0x11390 = _0x11346[_0xFF0A[73]](_0xFF0A[72]);
            _0x11321 = $(_0xFF0A[74]);
            _0x11674 = $(_0xFF0A[75]);
            _0x10DED = $(_0xFF0A[76]);
            _0x11A80 = $(_0xFF0A[77]);
            _0x11ACA = $(_0xFF0A[78]);
            _0x105D5 = $(_0xFF0A[79]);
            _0x1033B = $(_0xFF0A[80]);
            _0x11018 = $(_0xFF0A[81]);
            _0x10747 = $(_0xFF0A[82]);
            _0x10825[_0xFF0A[83]] = $(_0xFF0A[84]);
            _0x10825[_0xFF0A[85]] = $(_0xFF0A[86]);
            _0x10825[_0xFF0A[87]] = $(_0xFF0A[88]);
            _0x10825[_0xFF0A[89]] = $(_0xFF0A[90]);
            _0x10825[_0xFF0A[91]] = $(_0xFF0A[92]);
            _0x10825[_0xFF0A[93]] = $(_0xFF0A[94]);
            _0x10825[_0xFF0A[95]] = $(_0xFF0A[96]);
            _0x10825[_0xFF0A[97]] = $(_0xFF0A[98]);
            _0x10825[_0xFF0A[99]] = $(_0xFF0A[100]);
            _0x10825[_0xFF0A[101]] = 0;
            _0x10825[_0xFF0A[102]] = $(_0xFF0A[103]);
            _0x10825[_0xFF0A[104]] = _0x11674;
            _0x10D34();
            _0x121BA = false;
            window[_0xFF0A[105]] = function (_0xFF2F) {
                _0x11752[_0xFF0A[106]] = _0xFF2F[_0xFF0A[107]];
                _0x11752[_0xFF0A[108]] = _0xFF2F[_0xFF0A[109]]
            };
            window[_0xFF0A[110]] = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F[_0xFF0A[111]] || _0xFF2F[_0xFF0A[112]] || _0xFF2F[_0xFF0A[113]];
                if (_0xFF54 <= 5) {
                    return
                };
                if (_0x10F3A) {
                    _0x1007C(_0xFF54);
                    _0xFF2F[_0xFF0A[114]]();
                    return
                };
                if ($(_0xFF0A[117])[_0xFF0A[116]](_0xFF0A[115])) {
                    return
                };
                if (_0xFF54 == 27) {
                    _0x12048(_0x11321);
                    if (_0x10EF0($(_0xFF0A[118]) || _0x10EF0($(_0xFF0A[119])))) {
                        _0x10D59($(_0xFF0A[118]));
                        _0x10D59($(_0xFF0A[119]))
                    }
                };
                if (_0x11321[_0xFF0A[15]](_0xFF0A[14]) != _0xFF0A[16]) {
                    return
                };
                _0x11752[_0xFF0A[120]](_0xFF54)
            };
            window[_0xFF0A[121]] = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F[_0xFF0A[111]] || _0xFF2F[_0xFF0A[112]] || _0xFF2F[_0xFF0A[113]];
                if (_0xFF54 == _0x10F5F[_0xFF0A[122]]) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[123]](false))
                    }
                }
            };
            window[_0xFF0A[125]] = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F[_0xFF0A[126]] + 1;
                if (_0x10F3A) {
                    _0x1007C(_0xFF54);
                    _0xFF2F[_0xFF0A[114]]();
                    return
                };
                if ($(_0xFF0A[117])[_0xFF0A[116]](_0xFF0A[115]) || _0x11321[_0xFF0A[15]](_0xFF0A[14]) != _0xFF0A[16]) {
                    return
                };
                _0x11752[_0xFF0A[120]](_0xFF54)
            };
            window[_0xFF0A[127]] = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F[_0xFF0A[126]] + 1;
                if (_0xFF54 == _0x10F5F[_0xFF0A[122]]) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[123]](false))
                    }
                }
            };
            window[_0xFF0A[128]] = function (_0xFF2F) {
                if (_0x121BA && !_0x11493[_0xFF0A[129]]) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[123]](false))
                    }
                }
            };
            $(document)[_0xFF0A[137]](_0xFF0A[130], function (_0xFF54) {
                if (_0x11321[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16] && _0xFF54[_0xFF0A[132]][_0xFF0A[131]] == _0xFF0A[69]) {
                    var _0xFF2F = _0xFF54[_0xFF0A[134]][_0xFF0A[133]] || (_0xFF54[_0xFF0A[134]][_0xFF0A[135]] * -1);
                    if (_0xFF2F > 0) {
                        _0x11752[_0xFF0A[136]] *= 1.1
                    } else {
                        _0x11752[_0xFF0A[136]] *= 0.9
                    };
                    _0x11752[_0xFF0A[136]] = _0x11752[_0xFF0A[136]] > 3 ? 3 : (_0x11752[_0xFF0A[136]] < 0.2 ? 0.2 : _0x11752[_0xFF0A[136]])
                }
            });
            document[_0xFF0A[139]](_0xFF0A[138], function (_0xFF2F) {
                _0xFF2F[_0xFF0A[114]]()
            });
            _0x110D1();
            _0x110AC();
            var _0xFF9E = window[_0xFF0A[7]][_0xFF0A[6]][_0xFF0A[3]](_0xFF0A[13])[_0xFF0A[142]](1)[_0xFF0A[141]](_0xFF0A[13])[_0xFF0A[3]](_0xFF0A[140]);
            var _0xFFE8 = _0xFF0A[1];
            if (_0xFF9E[0]) {
                _0xFFE8 = _0xFF9E[0][_0xFF0A[143]]()
            };
            if (_0xFF9E[1]) {
                _0x10032 = _0xFF9E[1]
            };
            if (_0xFFE8 != null && _0xFFE8 != _0xFF0A[1]) {
                _0xFFE8 = _0xFFE8[0][_0xFF0A[144]]() + _0xFFE8[_0xFF0A[142]](1);
                _0x11C3C = function () {
                    var _0xFF2F = null;
                    if ((_0xFF2F = _0x10BE7(_0xFFE8)) != null) {
                        _0x11BCD(_0xFF2F[_0xFF0A[145]]);
                        _0x11BA8(_0xFF2F[_0xFF0A[146]])
                    } else {
                        _0xFF54()
                    }
                }
            } else {
                _0x11C3C = _0xFF54
            };
            firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0xFF0A[156])[_0xFF0A[137]](_0xFF0A[147], function (_0xFF9E) {
                var _0xFF2F = _0xFF9E[_0xFF0A[148]]();
                if (_0xFF2F[_0xFF0A[149]] !== version) {
                    _0x11752[_0xFF0A[152]](_0xFF0A[150] + _0xFF2F[_0xFF0A[149]] + _0xFF0A[151])
                };
                if (_0x10FF3 != _0xFF2F[_0xFF0A[153]] && _0xFF2F[_0xFF0A[153]] !== _0xFF0A[1]) {
                    _0x10FF3 = _0xFF2F[_0xFF0A[153]];
                    _0x11752[_0xFF0A[152]](_0xFF2F[_0xFF0A[153]])
                };
                if (_0xFF2F[_0xFF0A[154]] != _0x1103D) {
                    _0x1103D = _0xFF2F[_0xFF0A[154]];
                    _0x11C61 = {};
                    _0xFF79(_0x11C3C);
                    clearInterval(_0x10E5C);
                    _0x10E5C = setInterval(() => {
                        _0xFF79()
                    }, _0xFF2F[_0xFF0A[154]])
                };
                for (var _0xFF54 in _0xFF2F[_0xFF0A[155]]) {
                    _0x12023[_0xFF54] = _0xFF2F[_0xFF0A[155]][_0xFF54]
                }
            });

            function _0xFF79(_0xFF54) {
                jQuery[_0xFF0A[172]]({
                    type: _0xFF0A[159],
                    dataType: _0xFF0A[160],
                    url: _0xFF2F + _0xFF0A[161],
                    success: function (_0xFF2F) {
                        for (var _0xFFE8 of _0xFF2F) {
                            var _0x10032 = [];
                            for (var _0xFF9E of _0xFFE8[_0xFF0A[162]]) {
                                var _0xFFC3 = _0xFF9E[_0xFF0A[163]] + _0xFF0A[4] + _0xFF9E[_0xFF0A[164]];
                                var _0x1000D = new _0x11C17(_0xFF9E[_0xFF0A[145]], _0xFF9E[_0xFF0A[165]], _0xFFC3, _0xFF9E[_0xFF0A[166]], _0xFFE8[_0xFF0A[146]], _0xFF9E[_0xFF0A[167]], _0xFF9E[_0xFF0A[168]]);
                                _0x1000D[_0xFF0A[169]] = _0xFF9E[_0xFF0A[163]];
                                _0x10032[_0xFF0A[170]](_0x1000D)
                            };
                            _0x10032[_0xFF0A[171]]((_0xFF2F, _0xFF54) => {
                                return _0xFF2F[_0xFF0A[168]] - _0xFF54[_0xFF0A[168]]
                            });
                            _0x11C61[_0xFFE8[_0xFF0A[146]]] = {};
                            for (var _0xFF79 = 0; _0xFF79 < _0x10032[_0xFF0A[9]]; _0xFF79++) {
                                var _0x1000D = _0x10032[_0xFF79];
                                _0x11C61[_0xFFE8[_0xFF0A[146]]][_0x1000D[_0xFF0A[145]]] = _0x1000D
                            }
                        };
                        _0x1118A();
                        if (_0xFF54 != null) {
                            _0xFF54()
                        } else {
                            if (_0x11B83 != null) {
                                _0x11BCD(_0x11B83[_0xFF0A[145]])
                            }
                        }
                    },
                    error: function (_0xFF0A) {
                        _0x1118A()
                    }
                })
            }

            function _0xFF54() {
                if (_0x11B83 != null) {
                    _0x11BCD(_0x11B83[_0xFF0A[145]]);
                    return
                };
                _0x11BA8(_0xFF0A[173]);
                _0x11BCD(_0xFF0A[174])
            }
            _0x11DF8 = {};
            _0x11E42 = {};
            _0x11E1D = _0x11E67[_0xFF0A[175]];
            _0x111AF();
            _0x1128D();
            $(window)[_0xFF0A[176]](_0x11424);
            _0x11752 = new _0x10541();
            _0x11502 = new _0x11527();
            _0x11062();
            _0x105FA[_0xFF0A[177]]();
            _0x1197D();
            var _0xFFC3 = {
                view: _0x101EE,
                transparent: true,
                forceCanvas: _0x11493[_0xFF0A[178]] === _0xFF0A[179],
                antialias: !_0x11493[_0xFF0A[180]]
            };
            _0x11708 = {
                renderer: _0x116E3[_0xFF0A[181]](_0xFFC3),
                stage: _0x1172D
            };
            $(window)[_0xFF0A[182]](_0x11449);
            _0x11449();
            _0x10FCE = Date[_0xFF0A[183]]();
            fps = 0;
            _0x11752[_0xFF0A[152]](_0xFF0A[184]);
            if (_0x10972[_0xFF0A[35]] && _0x10972[_0xFF0A[153]] !== _0xFF0A[1]) {
                _0x11752[_0xFF0A[152]](_0x10972[_0xFF0A[153]])
            };
            if (_0x10972[_0xFF0A[35]] && _0x10972[_0xFF0A[185]] && !_0x11493[_0xFF0A[186]]) {
                _0x115BB = new _0x115E0(_0x10972[_0xFF0A[187]])
            };
            _0x12101();
            requestAnimationFrame(_0x11FFE)
        }

        function _0x111AF() {
            if (_0x11E1D != _0x11E67[_0xFF0A[175]]) {
                return
            };
            jQuery[_0xFF0A[172]]({
                type: _0xFF0A[188],
                dataType: _0xFF0A[189],
                crossDomain: true,
                url: _0xFF0A[190],
                data: {
                    "action": _0xFF0A[191]
                },
                async: false,
                success: function (_0xFF2F) {
                    var _0xFF79 = JSON[_0xFF0A[55]](JSON[_0xFF0A[55]](_0xFF2F[_0xFF0A[160]])[_0xFF0A[192]]);
                    for (var _0xFF54 in _0xFF79) {
                        var _0xFF9E = _0xFF79[_0xFF54];
                        if (_0x11E42[_0xFF9E] === undefined) {
                            _0x11E42[_0xFF9E] = _0x11E67[_0xFF0A[175]]
                        }
                    }
                },
                error: function (_0xFF2F, _0xFF79, _0xFF54) {
                    console[_0xFF0A[193]](_0xFF2F);
                    console[_0xFF0A[193]](_0xFF0A[194] + _0xFF79);
                    console[_0xFF0A[193]](_0xFF0A[195] + _0xFF54)
                }
            })
        }

        function _0x11449() {
            _0x101EE[_0xFF0A[196]] = window[_0xFF0A[197]] * _0x114B8[_0xFF0A[198]];
            _0x101EE[_0xFF0A[199]] = window[_0xFF0A[200]] * _0x114B8[_0xFF0A[198]];
            _0x11708[_0xFF0A[201]][_0xFF0A[182]](_0x101EE[_0xFF0A[196]], _0x101EE[_0xFF0A[199]]);
            _0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[202]] = (window[_0xFF0A[197]] * _0x114B8[_0xFF0A[198]]) / 2;
            _0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[205]] = (window[_0xFF0A[200]] * _0x114B8[_0xFF0A[198]]) / 2
        }

        function _0x10A2B(_0xFF2F) {
            for (var _0xFF54 in _0x11FD9) {
                if (_0xFF54[_0xFF0A[206]](0) == _0xFF0A[207]) {
                    _0xFF2F(_0xFF54)
                }
            }
        }

        function _0x11FFE() {
            var _0xFF79 = (Date[_0xFF0A[183]]() - _0x10FCE);
            _0x10FCE = Date[_0xFF0A[183]]();
            var _0xFF54 = Math[_0xFF0A[209]](_0xFF79 / _0x11493[_0xFF0A[208]], 1.0);
            _0x10ABF += _0xFF79;
            for (var _0xFF9E in _0x11752[_0xFF0A[210]]) {
                _0x1007C = _0x11752[_0xFF0A[210]][_0xFF9E];
                if (_0x1007C[_0xFF0A[211]] > 0) {
                    _0x1007C[_0xFF0A[212]](_0xFF54)
                };
                _0x1007C[_0xFF0A[213]]()
            };
            for (var _0xFF9E in _0x11752[_0xFF0A[214]]) {
                _0x1007C = _0x11752[_0xFF0A[214]][_0xFF9E];
                if (_0x1007C[_0xFF0A[211]] > 0) {
                    _0x1007C[_0xFF0A[212]](_0xFF54)
                };
                _0x1007C[_0xFF0A[215]]()
            };
            var _0x10032 = 0,
                _0x10057 = 0,
                _0xFF2F = 0,
                _0x100C6 = 0,
                _0x1007C = null;
            for (var _0xFF9E in _0x11752[_0xFF0A[216]]) {
                _0x1007C = _0x11752[_0xFF0A[216]][_0xFF9E];
                if (_0x1007C != null) {
                    _0x10032 += _0x1007C[_0xFF0A[202]];
                    _0x10057 += _0x1007C[_0xFF0A[205]];
                    _0x100C6 += _0x1007C[_0xFF0A[217]];
                    _0xFF2F++
                }
            };
            if (_0xFF2F != 0) {
                _0x11752[_0xFF0A[218]] = _0x10032 / _0xFF2F;
                _0x11752[_0xFF0A[219]] = _0x10057 / _0xFF2F;
                _0x11752[_0xFF0A[220]] = 0;
                if (_0x11493[_0xFF0A[221]]) {
                    _0x11752[_0xFF0A[222]] = 0.2 * Math[_0xFF0A[223]](_0x101EE[_0xFF0A[199]] / 1080, _0x101EE[_0xFF0A[196]] / 1920)
                } else {
                    _0x11752[_0xFF0A[222]] = Math[_0xFF0A[224]](Math[_0xFF0A[209]](64.0 / _0x100C6, 1), 0.4) * Math[_0xFF0A[223]](_0x101EE[_0xFF0A[199]] / 1080, _0x101EE[_0xFF0A[196]] / 1920)
                }
            };
            if (_0x11752[_0xFF0A[220]] > 0) {
                _0x11752[_0xFF0A[218]] += (_0x11752[_0xFF0A[225]] - _0x11752[_0xFF0A[218]]) * _0xFF54;
                _0x11752[_0xFF0A[219]] += (_0x11752[_0xFF0A[226]] - _0x11752[_0xFF0A[219]]) * _0xFF54
            };
            var _0x1000D = _0x11752[_0xFF0A[222]] * _0x11752[_0xFF0A[136]];
            _0x11752[_0xFF0A[227]] = (9 * _0x11752[_0xFF0A[227]] + _0x1000D) / 10;
            _0x112FC[_0xFF0A[227]][_0xFF0A[202]] = _0x11752[_0xFF0A[227]];
            _0x112FC[_0xFF0A[227]][_0xFF0A[205]] = _0x11752[_0xFF0A[227]];
            _0x112FC[_0xFF0A[228]][_0xFF0A[202]] = _0x11752[_0xFF0A[218]];
            _0x112FC[_0xFF0A[228]][_0xFF0A[205]] = _0x11752[_0xFF0A[219]];
            if (_0x11752[_0xFF0A[229]]() && _0x11321[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16]) {
                if (!_0x11752[_0xFF0A[230]]) {
                    var _0xFFC3 = _0x112FC[_0xFF0A[228]][_0xFF0A[202]] - (_0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[202]] / _0x11752[_0xFF0A[227]]) + ((_0x11752[_0xFF0A[106]] * _0x114B8[_0xFF0A[198]]) / _0x11752[_0xFF0A[227]]);
                    var _0xFFE8 = _0x112FC[_0xFF0A[228]][_0xFF0A[205]] - (_0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[205]] / _0x11752[_0xFF0A[227]]) + ((_0x11752[_0xFF0A[108]] * _0x114B8[_0xFF0A[198]]) / _0x11752[_0xFF0A[227]]);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[231]](_0xFFC3, _0xFFE8))
                }
            };
            if (!_0x11493[_0xFF0A[232]]) {
                _0x10894(_0xFF54)
            };
            if (_0x11493[_0xFF0A[233]]) {
                _0x1086F()
            };
            _0x11752[_0xFF0A[235]][_0xFF0A[234]]();
            _0x11708[_0xFF0A[201]][_0xFF0A[236]](_0x11708[_0xFF0A[204]]);
            _0x10A9A++;
            if (_0x10ABF >= 1000) {
                _0x10825[_0xFF0A[89]][_0xFF0A[237]](_0x10A9A);
                var _0x100EB = Date[_0xFF0A[183]]();
                if (_0x11752[_0xFF0A[239]][_0xFF0A[238]] > 0 && _0x11752[_0xFF0A[239]][_0xFF0A[93]] > 0) {
                    _0x10825[_0xFF0A[91]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                    var _0x100A1 = Math[_0xFF0A[223]](0, Math[_0xFF0A[240]]((_0x11752[_0xFF0A[239]][_0xFF0A[93]] - _0x100EB) / 1000));
                    _0x10825[_0xFF0A[93]][_0xFF0A[237]](_0x10A75(_0x100A1))
                } else {
                    _0x10825[_0xFF0A[91]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                };
                if (_0x11752[_0xFF0A[97]] > 0 && _0x11752[_0xFF0A[97]] >= _0x100EB) {
                    _0x10825[_0xFF0A[95]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                    var _0x100A1 = Math[_0xFF0A[223]](0, Math[_0xFF0A[241]]((_0x11752[_0xFF0A[97]] - _0x100EB) / 1000));
                    _0x10825[_0xFF0A[97]][_0xFF0A[237]](_0x10A75(_0x100A1))
                } else {
                    if (_0x11752[_0xFF0A[97]] < 0) {
                        _0x10825[_0xFF0A[95]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                        _0x10825[_0xFF0A[97]][_0xFF0A[237]](_0xFF0A[242])
                    } else {
                        _0x10825[_0xFF0A[95]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                    }
                };
                _0x10ABF = 0;
                _0x10A9A = 0
            };
            _0x11752[_0xFF0A[244]][_0xFF0A[243]]();
            requestAnimationFrame(_0x11FFE)
        }

        function _0x10C7B() {
            if (_0x11493[_0xFF0A[245]] && _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[35]]) {
                if (_0x100EB != null) {
                    _0x100EB[_0xFF0A[248]][_0xFF0A[247]](_0x100EB);
                    _0x100EB[_0xFF0A[249]]();
                    _0x100EB = null
                };
                _0x100EB = new _0x116E3[_0xFF0A[250]]();
                _0x100EB[_0xFF0A[256]](_0x11FD9[_0xFF0A[251]], _0x116E3[_0xFF0A[255]][_0xFF0A[254]](tinycolor(_0x11FD9[_0xFF0A[253]])[_0xFF0A[252]]()));
                _0x100EB[_0xFF0A[259]](_0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[257]], _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[258]], _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[196]], _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[199]]);
                _0x10110[_0xFF0A[28]](_0x100EB);
                _0x100EB[_0xFF0A[260]] = true
            } else {
                if (_0x100EB != null) {
                    _0x100EB[_0xFF0A[248]][_0xFF0A[247]](_0x100EB);
                    _0x100EB[_0xFF0A[249]]();
                    _0x100EB = null
                }
            }
        }

        function _0x1086F() {
            _0x10825[_0xFF0A[102]][_0xFF0A[15]]({
                "color": _0x11FD9[_0xFF0A[261]]
            });
            _0x10825[_0xFF0A[102]][_0xFF0A[237]](_0xFF0A[262] + _0x11752[_0xFF0A[218]][_0xFF0A[263]](0) + _0xFF0A[264] + _0x11752[_0xFF0A[219]][_0xFF0A[263]](0))
        }

        function _0x10894(_0xFF2F) {
            if (!_0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[35]]) {
                return
            };
            _0x11390[_0xFF0A[265]](0, 0, _0x11346[_0xFF0A[196]], _0x11346[_0xFF0A[199]]);
            _0x11390[_0xFF0A[266]] = _0xFF0A[267];
            for (var _0xFF54 = 0; _0xFF54 < _0x11752[_0xFF0A[268]][_0xFF0A[9]]; _0xFF54++) {
                var _0xFF79 = _0x11752[_0xFF0A[268]][_0xFF54];
                if (_0xFF79[_0xFF0A[269]] === _0x1164F[_0xFF0A[270]] && _0xFF79[_0xFF0A[131]] != _0x11752[_0xFF0A[271]]) {
                    _0x113B5(_0x11390, _0xFF79[_0xFF0A[145]], _0xFF79[_0xFF0A[202]], _0xFF79[_0xFF0A[205]], 4, _0xFF79[_0xFF0A[272]], true);
                    _0xFF79[_0xFF0A[202]] += (_0xFF79[_0xFF0A[273]] - _0xFF79[_0xFF0A[202]]) * _0xFF2F;
                    _0xFF79[_0xFF0A[205]] += (_0xFF79[_0xFF0A[274]] - _0xFF79[_0xFF0A[205]]) * _0xFF2F
                }
            };
            _0x113B5(_0x11390, _0x11752[_0xFF0A[145]], _0x11752[_0xFF0A[218]], _0x11752[_0xFF0A[219]], 6, _0xFF0A[275], false)
        }

        function _0x11424() {
            _0x11A5B()
        }

        function _0x10541() {
            this[_0xFF0A[276]] = null;
            this[_0xFF0A[277]] = null;
            this[_0xFF0A[278]] = null;
            this[_0xFF0A[279]] = false;
            this[_0xFF0A[145]] = _0xFF0A[1];
            this[_0xFF0A[271]] = 0;
            this[_0xFF0A[214]] = {};
            this[_0xFF0A[210]] = {};
            this[_0xFF0A[216]] = {};
            this[_0xFF0A[244]] = new _0x1179C();
            this[_0xFF0A[235]] = new _0x1017F();
            this[_0xFF0A[218]] = 0;
            this[_0xFF0A[219]] = 0;
            this[_0xFF0A[225]] = 0;
            this[_0xFF0A[226]] = 0;
            this[_0xFF0A[220]] = 0;
            this[_0xFF0A[227]] = 1.0;
            this[_0xFF0A[280]] = 1.0;
            this[_0xFF0A[222]] = 1.0;
            this[_0xFF0A[136]] = 1.0;
            this[_0xFF0A[281]] = 0;
            this[_0xFF0A[282]] = 0;
            this[_0xFF0A[106]] = 0;
            this[_0xFF0A[108]] = 0;
            this[_0xFF0A[283]] = 0;
            this[_0xFF0A[284]] = 0;
            this[_0xFF0A[230]] = false;
            this[_0xFF0A[268]] = [];
            this[_0xFF0A[285]] = {};
            this[_0xFF0A[286]] = false;
            this[_0xFF0A[239]] = {
                hasSentSubPanel: false,
                border: {},
                maxCells: 16
            };
            this[_0xFF0A[287]] = 0;
            this[_0xFF0A[97]] = 0;
            this[_0xFF0A[288]] = null;
            this[_0xFF0A[289]] = {};
            this[_0xFF0A[290]]();
            setInterval(this[_0xFF0A[292]][_0xFF0A[291]](this), 30000)
        }
        _0x10541[_0xFF0A[293]][_0xFF0A[290]] = function () {
            this[_0xFF0A[294]] = {
                name: _0xFF0A[295],
                alive: 0,
                eatenFood: 0,
                eatenEject: 0,
                eatenVirus: 0,
                eatenPlayer: 0,
                gainFood: 0,
                gainEject: 0,
                gainVirus: 0,
                gainPlayer: 0
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[296]] = function () {
            if (_0x11B83 == null) {
                this[_0xFF0A[152]](_0xFF0A[297]);
                return
            };
            this[_0xFF0A[145]] = $(_0xFF0A[298])[_0xFF0A[148]]();
            this[_0xFF0A[279]] = false;
            this[_0xFF0A[278]] = _0x11B83[_0xFF0A[145]];
            $(_0xFF0A[299])[_0xFF0A[237]](this[_0xFF0A[278]]);
            _0x11165();
            if (this[_0xFF0A[229]]() && this[_0xFF0A[277]] == _0x11B83[_0xFF0A[300]]) {
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[301]](this[_0xFF0A[145]]))
            } else {
                this[_0xFF0A[302]](_0x11B83[_0xFF0A[300]])
            };
            _0x11D3F();
            _0x10D59(_0x11321);
            ga(_0xFF0A[303], _0xFF0A[304], _0xFF0A[305], _0xFF0A[306], _0xFF0A[307])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[308]] = function () {
            if (_0x11B83 == null) {
                this[_0xFF0A[152]](_0xFF0A[297]);
                return
            };
            this[_0xFF0A[279]] = true;
            _0x11165();
            if (this[_0xFF0A[229]]() && this[_0xFF0A[277]] == _0x11B83[_0xFF0A[300]]) {
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[309]]())
            } else {
                this[_0xFF0A[302]](_0x11B83[_0xFF0A[300]])
            };
            _0x11D3F();
            _0x10D59(_0x11321);
            ga(_0xFF0A[303], _0xFF0A[304], _0xFF0A[305], _0xFF0A[306], _0xFF0A[310])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[302]] = function (_0xFF54) {
            if (this[_0xFF0A[276]] != null) {
                this[_0xFF0A[276]][_0xFF0A[311]] = _0xFF54;
                this[_0xFF0A[312]](_0xFF54);
                return
            };
            this[_0xFF0A[277]] = _0xFF54;
            this[_0xFF0A[278]] = _0x11B83[_0xFF0A[145]];
            this[_0xFF0A[152]](_0xFF0A[313] + this[_0xFF0A[278]] + _0xFF0A[314]);
            if (_0x11B83[_0xFF0A[167]] == 1) {
                this[_0xFF0A[276]] = new WebSocket(_0xFF0A[315] + _0xFF54)
            } else {
                this[_0xFF0A[276]] = new WebSocket(_0xFF0A[316] + _0xFF54)
            };
            this[_0xFF0A[276]][_0xFF0A[317]] = _0xFF0A[318];
            var _0xFF2F = this;
            this[_0xFF0A[276]][_0xFF0A[319]] = this[_0xFF0A[320]][_0xFF0A[291]](this);
            this[_0xFF0A[276]][_0xFF0A[321]] = this[_0xFF0A[322]][_0xFF0A[291]](this);
            this[_0xFF0A[276]][_0xFF0A[323]] = function (_0xFF54) {
                _0xFF2F[_0xFF0A[324]]();
                _0xFF2F[_0xFF0A[152]](_0xFF0A[325] + (_0xFF54[_0xFF0A[326]] === _0xFF0A[1] ? _0xFF0A[327] : _0xFF54[_0xFF0A[326]]));
                if (this[_0xFF0A[311]] != null) {
                    _0xFF2F[_0xFF0A[302]](this[_0xFF0A[311]])
                }
            };
            this[_0xFF0A[276]][_0xFF0A[328]] = function (_0xFF79) {
                _0xFF2F[_0xFF0A[324]]();
                this[_0xFF0A[311]] = null;
                _0xFF2F[_0xFF0A[152]](_0xFF0A[329]);
                setTimeout(function () {
                    if (_0xFF2F[_0xFF0A[229]]() == false && _0xFF2F[_0xFF0A[276]] == null) {
                        _0xFF2F[_0xFF0A[302]](_0xFF54)
                    }
                }, 1000)
            };
            document[_0xFF0A[333]][_0xFF0A[332]][_0xFF0A[331]](_0xFF0A[330])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[312]] = function (_0xFF2F) {
            if (this[_0xFF0A[276]] != null) {
                this[_0xFF0A[276]][_0xFF0A[334]]()
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[335]] = function () {
            for (var _0xFF2F in this[_0xFF0A[214]]) {
                this[_0xFF0A[214]][_0xFF2F][_0xFF0A[336]]();
                delete this[_0xFF0A[214]][_0xFF2F]
            };
            for (var _0xFF2F in this[_0xFF0A[210]]) {
                this[_0xFF0A[210]][_0xFF2F][_0xFF0A[336]]();
                delete this[_0xFF0A[210]][_0xFF2F]
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[324]] = function () {
            this[_0xFF0A[335]]();
            this[_0xFF0A[216]] = {};
            this[_0xFF0A[244]][_0xFF0A[337]]();
            this[_0xFF0A[271]] = 0;
            this[_0xFF0A[287]] = 0;
            this[_0xFF0A[97]] = 0;
            this[_0xFF0A[288]] = null;
            this[_0xFF0A[277]] = null;
            this[_0xFF0A[290]]();
            this[_0xFF0A[338]]();
            this[_0xFF0A[235]][_0xFF0A[339]]();
            this[_0xFF0A[239]][_0xFF0A[340]] = false;
            this[_0xFF0A[239]][_0xFF0A[238]] = 0;
            if (this[_0xFF0A[276]] != null) {
                this[_0xFF0A[276]] = null
            };
            $(_0xFF0A[341])[_0xFF0A[237]](this[_0xFF0A[271]]);
            if (this[_0xFF0A[286]]) {
                this[_0xFF0A[286]] = false;
                _0x1214B()
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[120]] = function (_0xFF54) {
            if (_0xFF54 == _0x10F5F[_0xFF0A[122]]) {
                _0x121BA = true;
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[123]](true))
            } else {
                if (_0xFF54 == _0x10F5F[_0xFF0A[342]]) {
                    this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17))
                } else {
                    if (_0xFF54 == _0x10F5F[_0xFF0A[344]]) {
                        this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](18))
                    } else {
                        if (_0xFF54 == _0x10F5F[_0xFF0A[345]]) {
                            this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17));
                            this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17))
                        } else {
                            if (_0xFF54 == _0x10F5F[_0xFF0A[346]]) {
                                for (var _0xFF2F = 0; _0xFF2F < 3; _0xFF2F++) {
                                    this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17))
                                }
                            } else {
                                if (_0xFF54 == _0x10F5F[_0xFF0A[347]]) {
                                    for (var _0xFF2F = 0; _0xFF2F < 4; _0xFF2F++) {
                                        this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17))
                                    }
                                } else {
                                    if (_0xFF54 == _0x10F5F[_0xFF0A[348]]) {
                                        for (var _0xFF2F = 0; _0xFF2F < 6; _0xFF2F++) {
                                            this[_0xFF0A[124]](new _0x11502[_0xFF0A[343]](17))
                                        }
                                    } else {
                                        if (_0xFF54 == 38) {
                                            this[_0xFF0A[136]] *= 1.025;
                                            this[_0xFF0A[136]] = _0x11752[_0xFF0A[136]] > 3 ? 3 : (this[_0xFF0A[136]] < 0.2 ? 0.2 : this[_0xFF0A[136]])
                                        } else {
                                            if (_0xFF54 == 40) {
                                                this[_0xFF0A[136]] *= 0.975;
                                                this[_0xFF0A[136]] = _0x11752[_0xFF0A[136]] > 3 ? 3 : (this[_0xFF0A[136]] < 0.2 ? 0.2 : this[_0xFF0A[136]])
                                            } else {
                                                if (_0xFF54 == _0x10F5F[_0xFF0A[349]]) {
                                                    this[_0xFF0A[230]] = !this[_0xFF0A[230]];
                                                    if (this[_0xFF0A[230]]) {
                                                        _0x10825[_0xFF0A[83]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                                                    } else {
                                                        _0x10825[_0xFF0A[83]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                                                    }
                                                } else {
                                                    if (_0xFF54 == _0x10F5F[_0xFF0A[350]]) {
                                                        _0x104AD()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[229]] = function () {
            if (this[_0xFF0A[276]] == null) {
                return false
            } else {
                return this[_0xFF0A[276]][_0xFF0A[351]] == 1
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[124]] = function (_0xFF2F) {
            if (this[_0xFF0A[229]]()) {
                this[_0xFF0A[276]][_0xFF0A[303]](_0xFF2F)
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[320]] = function () {
            _0x100A1 = [];
            _0x109BC();
            this[_0xFF0A[124]](new _0x11502[_0xFF0A[352]]());
            this[_0xFF0A[292]]();
            this[_0xFF0A[353]]();
            if (firebase[_0xFF0A[32]]()[_0xFF0A[354]] !== null) {
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]](true)[_0xFF0A[357]]((_0xFF2F) => {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[356]](_0xFF2F))
                })[_0xFF0A[355]]((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                });
                return
            } else {
                if (!this[_0xFF0A[279]]) {
                    this[_0xFF0A[124]](new _0x11502[_0xFF0A[301]](this[_0xFF0A[145]]))
                } else {
                    this[_0xFF0A[124]](new _0x11502[_0xFF0A[309]]())
                }
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[292]] = function () {
            if (this[_0xFF0A[229]]()) {
                _0x116BE = +new Date;
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[292]]())
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[353]] = function () {
            if (this[_0xFF0A[229]]()) {
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[353]]())
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[152]] = function (_0xFF54) {
            var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[359]);
            var _0xFF79 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0xFF79[_0xFF0A[363]][_0xFF0A[362]] = _0xFF0A[364];
            _0xFF79[_0xFF0A[365]] = _0xFF0A[366] + _0x11596(_0xFF54);
            _0xFF2F[_0xFF0A[367]](_0xFF79);
            _0xFF9E(_0x10463[_0xFF0A[368]], _0xFF2F)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[369]] = function (_0xFFC3, _0xFF2F) {
            var _0xFF79 = document[_0xFF0A[360]](_0xFF0A[359]);
            var _0xFFE8 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0xFFE8[_0xFF0A[363]][_0xFF0A[362]] = _0xFF0A[364];
            _0xFFE8[_0xFF0A[365]] = _0xFF0A[366] + _0x11596(_0xFFC3);
            _0xFF79[_0xFF0A[367]](_0xFFE8);
            var _0xFF54 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0xFF54[_0xFF0A[363]][_0xFF0A[362]] = _0xFF0A[364];
            _0xFF54[_0xFF0A[365]] = _0xFF2F;
            _0xFF54[_0xFF0A[363]][_0xFF0A[370]] = _0xFF0A[371];
            _0xFF54[_0xFF0A[363]][_0xFF0A[372]] = _0xFF0A[371];
            _0xFF79[_0xFF0A[367]](_0xFF54);
            _0xFF9E(_0x10463[_0xFF0A[368]], _0xFF79)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[338]] = function (_0xFF2F) {
            this[_0xFF0A[268]] = [];
            this[_0xFF0A[285]] = {};
            this[_0xFF0A[373]] = -1;
            this[_0xFF0A[374]] = -1;
            $(_0xFF0A[75])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            if (_0x10747[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[18]) {
                this[_0xFF0A[375]]()
            };
            if (this[_0xFF0A[376]] != null || _0x10032 != null) {
                this[_0xFF0A[376]] = _0x10032 = null;
                window[_0xFF0A[380]][_0xFF0A[379]](_0xFF0A[377], _0xFF0A[1], _0xFF0A[378])
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[381]] = function () {
            return this[_0xFF0A[373]] == this[_0xFF0A[271]]
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[382]] = function () {
            return this[_0xFF0A[239]][_0xFF0A[383]] + this[_0xFF0A[235]][_0xFF0A[384]]
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[322]] = function (_0xFF54) {
            var _0xFF2F = new DataView(_0xFF54[_0xFF0A[385]]);
            var _0xFF79 = _0xFF2F[_0xFF0A[386]](0);
            _0xFF2F[_0xFF0A[387]] = 1;
            switch (_0xFF79) {
            case 2:
                this[_0xFF0A[388]](_0xFF2F);
                break;
            case 10:
                this[_0xFF0A[389]](_0xFF2F);
                break;
            case 21:
                this[_0xFF0A[390]](_0xFF2F);
                break;
            case 22:
                this[_0xFF0A[391]](_0xFF2F);
                break;
            case 23:
                this[_0xFF0A[392]](_0xFF2F);
                break;
            case 40:
                this[_0xFF0A[393]](_0xFF2F);
                break;
            case 41:
                this[_0xFF0A[394]](_0xFF2F);
                break;
            case 45:
                this[_0xFF0A[395]](_0xFF2F);
                break;
            case 43:
                this[_0xFF0A[396]](_0xFF2F);
                break;
            case 49:
                this[_0xFF0A[397]](_0xFF2F);
                break;
            case 50:
                this[_0xFF0A[398]](_0xFF2F);
                break;
            case 63:
                this[_0xFF0A[399]](_0xFF2F);
                break;
            case 64:
                this[_0xFF0A[400]](_0xFF2F);
                break;
            case 65:
                this[_0xFF0A[401]]();
                break;
            case 66:
                this[_0xFF0A[402]](_0xFF2F);
                break;
            case 68:
                this[_0xFF0A[403]](_0xFF2F);
                break;
            case 69:
                this[_0xFF0A[404]](_0xFF2F);
                break;
            case 70:
                this[_0xFF0A[405]](_0xFF2F);
                break;
            case 71:
                this[_0xFF0A[406]]();
                break;
            case 72:
                this[_0xFF0A[407]](_0xFF2F);
                break;
            case 73:
                this[_0xFF0A[408]](_0xFF2F);
                break;
            case 80:
                this[_0xFF0A[409]]();
                break;
            case 81:
                this[_0xFF0A[410]](_0xFF2F);
                break;
            case 82:
                this[_0xFF0A[411]](_0xFF2F);
                break;
            case 83:
                this[_0xFF0A[412]](_0xFF2F);
                break;
            case 90:
                this[_0xFF0A[413]](_0xFF2F);
                break;
            case 91:
                this[_0xFF0A[414]](_0xFF2F);
                break;
            case 92:
                this[_0xFF0A[415]](_0xFF2F);
                break;
            case 93:
                this[_0xFF0A[375]]();
                break;
            case 94:
                this[_0xFF0A[416]](_0xFF2F);
                break;
            case 100:
                this[_0xFF0A[417]](_0xFF2F);
                break;
            case 101:
                this[_0xFF0A[418]](_0xFF2F);
                break;
            case 102:
                this[_0xFF0A[419]](_0xFF2F);
                break;
            case 103:
                this[_0xFF0A[420]](_0xFF2F);
                break;
            case 104:
                this[_0xFF0A[421]](_0xFF2F);
                break
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[388]] = function (_0x1000D) {
            while (true) {
                var _0xFF79 = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                _0x1000D[_0xFF0A[387]] += 2;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFFC3 = this[_0xFF0A[244]][_0xFF0A[423]](_0xFF79);
                var _0xFF54 = false;
                if (_0xFFC3 == null) {
                    _0xFFC3 = new _0x11777(_0xFF79)
                } else {
                    _0xFF54 = true
                };
                _0xFFC3[_0xFF0A[424]] = (_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++) << 16) + (_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++) << 8) + _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++);
                _0xFFC3[_0xFF0A[145]] = _0x11933(_0x1000D);
                _0xFFC3[_0xFF0A[425]](_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++));
                if ((_0xFFC3[_0xFF0A[426]] & 2) == 2) {
                    _0xFFC3[_0xFF0A[427]] = _0xFF0A[13] + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++)) + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++)) + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++));
                    _0xFFC3[_0xFF0A[428]](_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++));
                    _0xFFC3[_0xFF0A[429]](_0x11958(_0x1000D), true)
                };
                if (_0xFFC3[_0xFF0A[430]] == null) {
                    _0xFFC3[_0xFF0A[429]](_0xFFC3[_0xFF0A[145]])
                };
                if (!_0xFF54) {
                    _0x11752[_0xFF0A[244]][_0xFF0A[331]](_0xFFC3)
                } else {
                    _0x11752[_0xFF0A[244]][_0xFF0A[431]](_0xFFC3)
                }
            };
            while (true) {
                var _0xFF79 = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                _0x1000D[_0xFF0A[387]] += 2;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFFE8 = _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++);
                var _0xFF9E;
                if (_0xFFE8 == 0) {
                    _0xFF9E = this[_0xFF0A[210]][_0xFF79]
                } else {
                    _0xFF9E = this[_0xFF0A[214]][_0xFF79]
                };
                if (_0xFF9E == null) {
                    _0xFF9E = new _0x1025D(_0xFF79);
                    _0xFF9E[_0xFF0A[432]](_0xFFE8);
                    _0xFF9E[_0xFF0A[434]](_0x1000D[_0xFF0A[433]](_0x1000D[_0xFF0A[387]], true));
                    _0xFF9E[_0xFF0A[435]](_0x1000D[_0xFF0A[433]](_0x1000D[_0xFF0A[387]] + 2, true));
                    _0x1000D[_0xFF0A[387]] += 4;
                    switch (_0xFFE8) {
                    case 0:
                        _0xFF9E[_0xFF0A[362]] = _0x10B9D(_0xFF9E[_0xFF0A[131]]);
                        break;
                    case 1:
                        _0xFF9E[_0xFF0A[436]](_0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true));
                        _0x1000D[_0xFF0A[387]] += 2;
                        _0xFF9E[_0xFF0A[437]] = _0xFF0A[13] + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]])) + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]] + 1)) + _0x101C9(_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]] + 2));
                        _0xFF9E[_0xFF0A[362]] = (_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++) << 16) + (_0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++) << 8) + _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++);
                        _0xFF9E[_0xFF0A[430]] = _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++) - 1;
                        break;
                    case 2:
                        _0xFF9E[_0xFF0A[436]](_0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true));
                        _0x1000D[_0xFF0A[387]] += 2;
                        _0xFF9E[_0xFF0A[271]] = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 3:
                        _0xFF9E[_0xFF0A[436]](_0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true));
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 4:
                        _0xFF9E[_0xFF0A[436]](_0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true));
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 5:
                        _0xFF9E[_0xFF0A[436]](80);
                        _0xFF9E[_0xFF0A[438]] = _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]++);
                        break
                    };
                    _0xFF9E[_0xFF0A[439]]();
                    if (_0xFFE8 == 0) {
                        this[_0xFF0A[210]][_0xFF79] = _0xFF9E
                    } else {
                        this[_0xFF0A[214]][_0xFF79] = _0xFF9E
                    };
                    if (_0xFF9E[_0xFF0A[271]] == this[_0xFF0A[271]]) {
                        this[_0xFF0A[216]][_0xFF79] = _0xFF9E
                    }
                } else {
                    _0xFF9E[_0xFF0A[440]](_0x1000D[_0xFF0A[433]](_0x1000D[_0xFF0A[387]], true));
                    _0xFF9E[_0xFF0A[441]](_0x1000D[_0xFF0A[433]](_0x1000D[_0xFF0A[387]] + 2, true));
                    _0x1000D[_0xFF0A[387]] += 4;
                    switch (_0xFFE8) {
                    case 0:
                        break;
                    case 1:
                        _0xFF9E[_0xFF0A[442]] = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                        _0x1000D[_0xFF0A[387]] += 2;
                        _0x1000D[_0xFF0A[387]] += 4;
                        break;
                    case 2:
                        _0xFF9E[_0xFF0A[442]] = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                        _0x1000D[_0xFF0A[387]] += 2;
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 3:
                        _0xFF9E[_0xFF0A[442]] = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 4:
                        _0xFF9E[_0xFF0A[442]] = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                        _0x1000D[_0xFF0A[387]] += 2;
                        break;
                    case 5:
                        _0x1000D[_0xFF0A[387]]++;
                        break
                    };
                    _0xFF9E[_0xFF0A[211]] = 30
                }
            };
            var _0xFF2F = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
            _0x1000D[_0xFF0A[387]] += 2;
            while (_0xFF2F > 0) {
                var _0xFF79 = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                _0x1000D[_0xFF0A[387]] += 2;
                _0x11752[_0xFF0A[244]][_0xFF0A[443]](_0xFF79);
                _0xFF2F--
            };
            _0xFF2F = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
            _0x1000D[_0xFF0A[387]] += 2;
            while (_0xFF2F > 0) {
                var _0xFF79 = _0x1000D[_0xFF0A[422]](_0x1000D[_0xFF0A[387]], true);
                _0x1000D[_0xFF0A[387]] += 2;
                var _0xFF9E = this[_0xFF0A[214]][_0xFF79] || this[_0xFF0A[210]][_0xFF79];
                if (_0xFF9E != null) {
                    if (_0xFF9E[_0xFF0A[444]] == 0) {
                        delete this[_0xFF0A[210]][_0xFF79]
                    } else {
                        delete this[_0xFF0A[214]][_0xFF79]
                    };
                    if (_0xFF9E[_0xFF0A[271]] == this[_0xFF0A[271]]) {
                        delete this[_0xFF0A[216]][_0xFF79];
                        if (Object[_0xFF0A[445]](this[_0xFF0A[216]])[_0xFF0A[9]] == 0) {
                            if (_0x11493[_0xFF0A[446]]) {
                                if ($(_0xFF0A[74])[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16]) {
                                    _0x11752[_0xFF0A[296]]()
                                }
                            } else {
                                if (_0x11ACA[_0xFF0A[15]](_0xFF0A[14]) != _0xFF0A[18]) {
                                    _0x11D64(_0x11321)
                                };
                                aiptag[_0xFF0A[449]][_0xFF0A[14]][_0xFF0A[170]](function () {
                                    aipDisplayTag[_0xFF0A[448]](_0xFF0A[447])
                                })
                            }
                        }
                    };
                    _0xFF9E[_0xFF0A[336]]()
                };
                _0xFF2F--
            };
            this[_0xFF0A[450]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[389]] = function (_0xFF2F) {
            this[_0xFF0A[225]] = _0xFF2F[_0xFF0A[451]](_0xFF2F[_0xFF0A[387]], true);
            _0xFF2F[_0xFF0A[387]] += 4;
            this[_0xFF0A[226]] = _0xFF2F[_0xFF0A[451]](_0xFF2F[_0xFF0A[387]], true);
            _0xFF2F[_0xFF0A[387]] += 4;
            this[_0xFF0A[220]] = 30;
            if (!_0x11493[_0xFF0A[221]]) {
                this[_0xFF0A[222]] = _0xFF2F[_0xFF0A[451]](_0xFF2F[_0xFF0A[387]], true)
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[399]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[452]](_0xFF54[_0xFF0A[387]], true);
            this[_0xFF0A[97]] = _0xFF2F
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[400]] = function (_0xFF2F) {
            this[_0xFF0A[271]] = _0xFF2F[_0xFF0A[422]](_0xFF2F[_0xFF0A[387]], true);
            _0xFF2F[_0xFF0A[387]] += 2 + 1;
            this[_0xFF0A[402]](_0xFF2F);
            this[_0xFF0A[239]][_0xFF0A[383]] = _0xFF2F[_0xFF0A[422]](_0xFF2F[_0xFF0A[387]], true);
            _0xFF2F[_0xFF0A[387]] += 2;
            $(_0xFF0A[341])[_0xFF0A[237]](_0x11752[_0xFF0A[271]]);
            this[_0xFF0A[453]](0, true);
            if (_0x10032 != null) {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[454]](_0x10032))
            };
            _0x11ACA[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            $(_0xFF0A[455])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[402]] = function (_0xFF2F) {
            this[_0xFF0A[239]][_0xFF0A[246]] = {};
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[257]] = _0xFF2F[_0xFF0A[433]](_0xFF2F[_0xFF0A[387]], true);
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[258]] = _0xFF2F[_0xFF0A[433]](_0xFF2F[_0xFF0A[387]] + 2, true);
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[456]] = _0xFF2F[_0xFF0A[433]](_0xFF2F[_0xFF0A[387]] + 4, true);
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[457]] = _0xFF2F[_0xFF0A[433]](_0xFF2F[_0xFF0A[387]] + 6, true);
            _0xFF2F[_0xFF0A[387]] += 8;
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[196]] = this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[456]] - this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[257]];
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[199]] = this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[457]] - this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[258]];
            this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[35]] = this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[196]] != 0 && this[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[199]] != 0;
            _0x10C7B()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[403]] = function (_0xFF79) {
            var _0xFF54 = _0xFF79[_0xFF0A[386]](_0xFF79[_0xFF0A[387]]++);
            var _0xFF2F = _0xFF79[_0xFF0A[452]](_0xFF79[_0xFF0A[387]], true);
            this[_0xFF0A[239]][_0xFF0A[238]] = _0xFF54;
            this[_0xFF0A[239]][_0xFF0A[93]] = _0xFF2F
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[404]] = function (_0xFF2F) {
            this[_0xFF0A[458]] = _0xFF2F[_0xFF0A[422]](_0xFF2F[_0xFF0A[387]], true);
            this[_0xFF0A[459]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[401]] = function (_0xFF2F) {
            this[_0xFF0A[335]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[397]] = function (_0x10032) {
            var _0xFFC3 = document[_0xFF0A[70]](_0xFF0A[460]);
            var _0xFF54 = _0xFFC3[_0xFF0A[73]](_0xFF0A[72]);
            _0x11018[_0xFF0A[462]](_0xFF0A[461]);
            var _0xFF2F = _0x10032[_0xFF0A[463]](_0x10032[_0xFF0A[387]], true);
            _0x10032[_0xFF0A[387]] += 4;
            _0xFFC3[_0xFF0A[196]] = 200;
            _0xFFC3[_0xFF0A[199]] = (20 * _0xFF2F) + 5;
            _0xFF54[_0xFF0A[266]] = _0xFF0A[464];
            var _0x1000D = 20;
            for (var _0xFF79 = 0; _0xFF79 < _0xFF2F; _0xFF79++) {
                var _0xFF9E = _0x10032[_0xFF0A[422]](_0x10032[_0xFF0A[387]], true);
                _0x10032[_0xFF0A[387]] += 2;
                var _0xFFE8 = _0x11933(_0x10032) || _0xFF0A[295];
                if (_0xFF9E == this[_0xFF0A[271]]) {
                    _0xFF54[_0xFF0A[465]] = _0x11FD9[_0xFF0A[466]]
                } else {
                    if (this[_0xFF0A[285]][_0xFF9E] != null) {
                        _0xFF54[_0xFF0A[465]] = _0x11FD9[_0xFF0A[467]]
                    } else {
                        _0xFF54[_0xFF0A[465]] = _0x11FD9[_0xFF0A[261]]
                    }
                };
                _0xFF54[_0xFF0A[469]]((_0xFF79 + 1) + _0xFF0A[468] + _0xFFE8, 10, _0x1000D);
                _0x1000D += 20
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[398]] = function (_0x10057) {
            var _0xFFC3 = document[_0xFF0A[70]](_0xFF0A[460]);
            var _0xFF79 = _0xFFC3[_0xFF0A[73]](_0xFF0A[72]);
            _0x11018[_0xFF0A[237]](_0xFF0A[461]);
            var _0xFF2F = _0x10057[_0xFF0A[422]](_0x10057[_0xFF0A[387]], true);
            var _0xFF54 = _0x10057[_0xFF0A[386]](_0x10057[_0xFF0A[387]] + 2, true);
            var _0x10032 = _0x10057[_0xFF0A[386]](_0x10057[_0xFF0A[387]] + 3, true);
            _0x10057[_0xFF0A[387]] += 4;
            _0xFFC3[_0xFF0A[196]] = 200;
            _0xFFC3[_0xFF0A[199]] = (20 * _0xFF2F) + 5;
            _0xFF79[_0xFF0A[266]] = _0xFF0A[464];
            var _0x1000D = 20;
            for (var _0xFF9E = 0; _0xFF9E < _0xFF2F; _0xFF9E++) {
                var _0xFFE8 = _0x11958(_0x10057);
                if (_0xFF9E == _0xFF54) {
                    _0xFF79[_0xFF0A[465]] = _0x11FD9[_0xFF0A[466]]
                } else {
                    _0xFF79[_0xFF0A[465]] = _0x11FD9[_0xFF0A[261]]
                };
                _0xFF79[_0xFF0A[469]](_0xFFE8, 5, _0x1000D);
                _0x1000D += 20
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[406]] = function () {
            var _0xFF2F = +new Date - _0x116BE;
            if (!_0x11493[_0xFF0A[470]]) {
                if (_0xFF2F < 100) {
                    $(_0xFF0A[472])[_0xFF0A[15]]({
                        "color": _0x11FD9[_0xFF0A[471]]
                    })
                } else {
                    if (_0xFF2F < 200) {
                        $(_0xFF0A[472])[_0xFF0A[15]]({
                            "color": _0x11FD9[_0xFF0A[473]]
                        })
                    } else {
                        $(_0xFF0A[472])[_0xFF0A[15]]({
                            "color": _0x11FD9[_0xFF0A[474]]
                        })
                    }
                }
            } else {
                $(_0xFF0A[472])[_0xFF0A[15]]({
                    "color": _0x11FD9[_0xFF0A[261]]
                })
            };
            $(_0xFF0A[472])[_0xFF0A[237]](_0xFF2F + _0xFF0A[475])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[407]] = function (_0x101C9) {
            var _0xFF2F = _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++);
            var _0x100EB = _0xFF0A[476] + _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++) + _0xFF0A[8] + _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++) + _0xFF0A[8] + _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++) + _0xFF0A[477];
            var _0xFF79 = _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++);
            var _0x10135 = _0x101C9[_0xFF0A[422]](_0x101C9[_0xFF0A[387]], true);
            _0x101C9[_0xFF0A[387]] += 2;
            if (_0x100A1[_0xFF0A[478]](_0x10135)) {
                return
            };
            var _0x1017F = _0x11933(_0x101C9);
            var _0xFFC3 = _0x101C9[_0xFF0A[386]](_0x101C9[_0xFF0A[387]]++);
            var _0x100C6 = _0x11596(_0x11933(_0x101C9)) || _0xFF0A[295];
            var _0x1007C = _0x11596(_0x11933(_0x101C9));
            var _0xFFE8 = _0x10463[_0xFF0A[47]];
            var _0xFF54;
            switch (_0xFF2F) {
            case 1:
                _0xFF54 = _0xFF0A[46];
                _0xFFE8 = _0x10463[_0xFF0A[479]];
                break;
            case 2:
                _0xFF54 = _0xFF0A[480];
                _0xFFE8 = _0x10463[_0xFF0A[481]];
                break;
            default:
                _0xFF54 = _0xFF0A[45];
                break
            };
            if (_0x1017F[_0xFF0A[9]] > 0) {
                _0x11596(_0xFF54 += _0xFF0A[482] + _0x1017F)
            };
            var _0x10057 = document[_0xFF0A[360]](_0xFF0A[359]);
            var _0x1015A = document[_0xFF0A[360]](_0xFF0A[361]);
            _0x1015A[_0xFF0A[365]] = _0xFF0A[483] + _0xFF54 + _0xFF0A[484];
            _0x10057[_0xFF0A[367]](_0x1015A);
            var _0x10110 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0x10110[_0xFF0A[485]] = _0x100C6;
            _0x10110[_0xFF0A[486]][_0xFF0A[271]] = _0x10135;
            _0x10110[_0xFF0A[363]][_0xFF0A[362]] = _0x100EB;
            _0x10110[_0xFF0A[487]] = _0xFF0A[488];
            _0x10110[_0xFF0A[489]] = _0x10385;
            _0x10057[_0xFF0A[367]](_0x10110);
            var _0x101A4 = null;
            if (_0xFFC3 > 0) {
                _0x101A4 = document[_0xFF0A[360]](_0xFF0A[490]);
                _0x101A4[_0xFF0A[487]] = _0xFF0A[491];
                var _0x1000D = document[_0xFF0A[360]](_0xFF0A[361]);
                _0x1000D[_0xFF0A[365]] = _0xFF0A[492];
                _0x10057[_0xFF0A[367]](_0x1000D);
                _0x101A4[_0xFF0A[365]] = _0x11571(_0x1007C);
                switch (_0xFFC3) {
                case 1:
                    _0x101A4[_0xFF0A[487]] += _0xFF0A[493];
                    var _0x10032 = document[_0xFF0A[360]](_0xFF0A[490]);
                    _0x10032[_0xFF0A[487]] = _0xFF0A[494];
                    _0x101A4[_0xFF0A[367]](_0x10032);
                    break;
                case 2:
                    _0x101A4[_0xFF0A[487]] += _0xFF0A[495];
                    break;
                default:
                    break
                }
            } else {
                _0x101A4 = document[_0xFF0A[360]](_0xFF0A[361]);
                _0x101A4[_0xFF0A[363]][_0xFF0A[362]] = _0x10360[_0xFF79];
                if (_0xFF79 == 0) {
                    _0x101A4[_0xFF0A[365]] = _0xFF0A[492] + _0x11571(_0x1007C)
                } else {
                    var _0x1000D = document[_0xFF0A[360]](_0xFF0A[361]);
                    _0x1000D[_0xFF0A[365]] = _0xFF0A[492];
                    _0x10057[_0xFF0A[367]](_0x1000D);
                    _0x101A4[_0xFF0A[365]] = _0x11571(_0x1007C)
                }
            };
            _0x10057[_0xFF0A[367]](_0x101A4);
            _0xFF9E(_0xFFE8, _0x10057)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[408]] = function (_0x10135) {
            var _0x10057 = _0x11596(_0x11933(_0x10135)) || _0xFF0A[295];
            var _0x100C6 = _0x10135[_0xFF0A[422]](_0x10135[_0xFF0A[387]], true);
            _0x10135[_0xFF0A[387]] += 2;
            if (_0x100A1[_0xFF0A[478]](_0x100C6)) {
                return
            };
            var _0x1007C = _0xFF0A[476] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[8] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[8] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[477];
            var _0xFFC3 = _0x11596(_0x11933(_0x10135)) || _0xFF0A[295];
            var _0x1000D = _0x10135[_0xFF0A[422]](_0x10135[_0xFF0A[387]], true);
            _0x10135[_0xFF0A[387]] += 2;
            var _0xFFE8 = _0xFF0A[476] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[8] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[8] + _0x10135[_0xFF0A[386]](_0x10135[_0xFF0A[387]]++) + _0xFF0A[477];
            var _0xFF79 = _0x11596(_0x11933(_0x10135));
            var _0xFF54 = document[_0xFF0A[360]](_0xFF0A[359]);
            var _0x100EB = document[_0xFF0A[360]](_0xFF0A[361]);
            _0x100EB[_0xFF0A[485]] = _0x10057;
            _0x100EB[_0xFF0A[486]][_0xFF0A[271]] = _0x100C6;
            _0x100EB[_0xFF0A[363]][_0xFF0A[362]] = _0x1007C;
            _0x100EB[_0xFF0A[487]] = _0xFF0A[488];
            _0x100EB[_0xFF0A[489]] = _0x10385;
            _0xFF54[_0xFF0A[367]](_0x100EB);
            var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[361]);
            _0xFF2F[_0xFF0A[365]] = _0xFF0A[496];
            _0xFF54[_0xFF0A[367]](_0xFF2F);
            var _0x10032 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0x10032[_0xFF0A[485]] = _0xFFC3;
            _0x10032[_0xFF0A[486]][_0xFF0A[271]] = _0x1000D;
            _0x10032[_0xFF0A[363]][_0xFF0A[362]] = _0xFFE8;
            _0x10032[_0xFF0A[487]] = _0xFF0A[488];
            _0x10032[_0xFF0A[489]] = _0x10385;
            _0xFF54[_0xFF0A[367]](_0x10032);
            var _0x10110 = document[_0xFF0A[360]](_0xFF0A[361]);
            _0x10110[_0xFF0A[365]] = _0xFF0A[492] + _0x11571(_0xFF79);
            _0xFF54[_0xFF0A[367]](_0x10110);
            _0xFF9E(_0x10463[_0xFF0A[497]], _0xFF54)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[405]] = function (_0xFF54) {
            var _0xFF2F = _0x11933(_0xFF54);
            this[_0xFF0A[152]](_0xFF2F)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[420]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[386]](1);
            switch (_0xFF2F) {
            case _0x1000D[_0xFF0A[498]]:
                break;
            case _0x1000D[_0xFF0A[500]]:
                this[_0xFF0A[152]](_0xFF0A[499]);
                break
            };
            if (!this[_0xFF0A[279]]) {
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[301]](this[_0xFF0A[145]]))
            } else {
                this[_0xFF0A[124]](new _0x11502[_0xFF0A[309]]())
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[421]] = function (_0xFF79) {
            var _0xFF2F = _0x11958(_0xFF79);
            var _0xFF54 = JSON[_0xFF0A[55]](_0xFF2F);
            _0x11140(_0xFF54, _0x11321, true)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[393]] = function (_0xFF79) {
            if (_0x11493[_0xFF0A[501]]) {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[502]](false))
            } else {
                var _0xFF54 = _0x11596(_0x11933(_0xFF79));
                var _0xFF2F = document[_0xFF0A[70]](_0xFF0A[503]);
                _0xFF2F[_0xFF0A[485]] = _0xFF54 + _0xFF0A[504];
                _0x11D64($(_0xFF0A[505]))
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[394]] = function (_0x10057) {
            var _0xFFC3 = {};
            var _0x1000D = [];
            var _0xFFE8 = -1;
            var _0xFF2F = _0x10057[_0xFF0A[422]](_0x10057[_0xFF0A[387]], true);
            _0x10057[_0xFF0A[387]] += 2;
            for (var _0xFF79 = 0; _0xFF79 < _0xFF2F; _0xFF79++) {
                var _0xFF9E = {};
                var _0xFF54 = _0x10057[_0xFF0A[386]](_0x10057[_0xFF0A[387]]++);
                _0xFF9E[_0xFF0A[131]] = _0x10057[_0xFF0A[422]](_0x10057[_0xFF0A[387]], true);
                _0xFFC3[_0xFF9E[_0xFF0A[131]]] = _0xFF79;
                _0x10057[_0xFF0A[387]] += 2;
                if (_0xFF54 == 1) {
                    _0xFFE8 = _0xFF9E[_0xFF0A[131]];
                    _0xFF9E[_0xFF0A[506]] = true
                } else {
                    _0xFF9E[_0xFF0A[506]] = false
                };
                _0xFF9E[_0xFF0A[145]] = _0x11933(_0x10057) || _0xFF0A[295];
                _0xFF9E[_0xFF0A[202]] = 0;
                _0xFF9E[_0xFF0A[205]] = 0;
                _0xFF9E[_0xFF0A[273]] = 0;
                _0xFF9E[_0xFF0A[274]] = 0;
                _0xFF9E[_0xFF0A[287]] = 0;
                _0xFF9E[_0xFF0A[507]] = -1;
                _0xFF9E[_0xFF0A[508]] = 0;
                _0xFF9E[_0xFF0A[269]] = _0x1164F[_0xFF0A[509]];
                if (this[_0xFF0A[285]][_0xFF9E[_0xFF0A[131]]] != null) {
                    var _0x10032 = this[_0xFF0A[268]][this[_0xFF0A[285]][_0xFF9E[_0xFF0A[131]]]];
                    _0xFF9E[_0xFF0A[202]] = _0x10032[_0xFF0A[202]];
                    _0xFF9E[_0xFF0A[205]] = _0x10032[_0xFF0A[205]];
                    _0xFF9E[_0xFF0A[273]] = _0x10032[_0xFF0A[273]];
                    _0xFF9E[_0xFF0A[274]] = _0x10032[_0xFF0A[274]];
                    _0xFF9E[_0xFF0A[269]] = _0x10032[_0xFF0A[269]];
                    _0xFF9E[_0xFF0A[287]] = _0x10032[_0xFF0A[287]];
                    _0xFF9E[_0xFF0A[507]] = _0x10032[_0xFF0A[507]];
                    _0xFF9E[_0xFF0A[272]] = _0x10032[_0xFF0A[272]]
                } else {
                    _0xFF9E[_0xFF0A[272]] = _0x10B78(_0xFF9E[_0xFF0A[131]])
                };
                _0x1000D[_0xFF0A[170]](_0xFF9E)
            };
            this[_0xFF0A[268]] = _0x1000D;
            this[_0xFF0A[285]] = _0xFFC3;
            if (this[_0xFF0A[373]] != _0xFFE8) {
                this[_0xFF0A[373]] = _0xFFE8;
                if (_0x10747[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[18]) {
                    ScrimmageHelper[_0xFF0A[510]]()
                }
            };
            if (_0xFF2F > 0) {
                this[_0xFF0A[511]]()
            } else {
                this[_0xFF0A[338]]()
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[395]] = function (_0xFF9E) {
            var _0xFF2F = _0xFF9E[_0xFF0A[422]](_0xFF9E[_0xFF0A[387]], true);
            _0xFF9E[_0xFF0A[387]] += 2;
            if (_0xFF2F != this[_0xFF0A[268]][_0xFF0A[9]]) {
                return
            };
            for (var _0xFF54 = 0; _0xFF54 < _0xFF2F; _0xFF54++) {
                var _0xFF79 = this[_0xFF0A[268]][_0xFF54];
                _0xFF79[_0xFF0A[269]] = _0xFF9E[_0xFF0A[386]](_0xFF9E[_0xFF0A[387]]++);
                if (_0xFF79[_0xFF0A[269]] === _0x1164F[_0xFF0A[270]]) {
                    _0xFF79[_0xFF0A[273]] = _0xFF9E[_0xFF0A[433]](_0xFF9E[_0xFF0A[387]], true);
                    _0xFF79[_0xFF0A[274]] = _0xFF9E[_0xFF0A[433]](_0xFF9E[_0xFF0A[387]] + 2, true);
                    _0xFF79[_0xFF0A[287]] = _0xFF9E[_0xFF0A[512]](_0xFF9E[_0xFF0A[387]] + 4, true);
                    _0xFF9E[_0xFF0A[387]] += 8
                }
            };
            this[_0xFF0A[511]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[396]] = function (_0xFF79) {
            var _0xFF2F = _0x11958(_0xFF79);
            this[_0xFF0A[376]] = _0x11958(_0xFF79);
            if (this[_0xFF0A[376]][_0xFF0A[9]] != 0) {
                this[_0xFF0A[369]](_0xFF2F, this[_0xFF0A[376]]);
                $(_0xFF0A[513])[_0xFF0A[148]](this[_0xFF0A[376]]);
                $(_0xFF0A[514])[_0xFF0A[17]]();
                var _0xFF54 = _0xFF0A[13] + this[_0xFF0A[278]] + _0xFF0A[140] + this[_0xFF0A[376]];
                window[_0xFF0A[380]][_0xFF0A[379]](_0xFF0A[377], _0xFF0A[1], _0xFF54)
            } else {
                this[_0xFF0A[152]](_0xFF2F);
                this[_0xFF0A[376]] = null;
                window[_0xFF0A[380]][_0xFF0A[379]](_0xFF0A[377], _0xFF0A[1], _0xFF0A[378])
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[390]] = function (_0xFF79) {
            var _0xFF2F = _0xFF79[_0xFF0A[422]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 2;
            this[_0xFF0A[294]][_0xFF0A[145]] = _0x11933(_0xFF79) || _0xFF0A[295];
            this[_0xFF0A[294]][_0xFF0A[515]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[516]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[517]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[518]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[519]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[520]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[521]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[522]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            this[_0xFF0A[294]][_0xFF0A[523]] += _0xFF79[_0xFF0A[463]](_0xFF79[_0xFF0A[387]], true);
            _0xFF79[_0xFF0A[387]] += 4;
            var _0xFF54 = $(_0xFF0A[524]);
            _0xFF54[_0xFF0A[525]]();
            _0xFF54[_0xFF0A[529]](_0xFF0A[526] + this[_0xFF0A[294]][_0xFF0A[145]] + _0xFF0A[527] + _0xFF2F + _0xFF0A[528]);
            _0xFF54[_0xFF0A[529]](_0xFF0A[530] + _0x10A75(this[_0xFF0A[294]][_0xFF0A[515]]) + _0xFF0A[531]);
            _0xFF54[_0xFF0A[529]](_0xFF0A[532] + this[_0xFF0A[294]][_0xFF0A[516]] + _0xFF0A[527] + this[_0xFF0A[294]][_0xFF0A[520]] + _0xFF0A[528]);
            _0xFF54[_0xFF0A[529]](_0xFF0A[533] + this[_0xFF0A[294]][_0xFF0A[517]] + _0xFF0A[527] + this[_0xFF0A[294]][_0xFF0A[521]] + _0xFF0A[528]);
            _0xFF54[_0xFF0A[529]](_0xFF0A[534] + this[_0xFF0A[294]][_0xFF0A[518]] + _0xFF0A[527] + this[_0xFF0A[294]][_0xFF0A[522]] + _0xFF0A[528]);
            _0xFF54[_0xFF0A[529]](_0xFF0A[535] + this[_0xFF0A[294]][_0xFF0A[519]] + _0xFF0A[527] + this[_0xFF0A[294]][_0xFF0A[523]] + _0xFF0A[528])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[391]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[386]](_0xFF54[_0xFF0A[387]]++) == 1;
            this[_0xFF0A[286]] = _0xFF2F;
            _0x1214B();
            if (_0xFF2F) {
                if (!this[_0xFF0A[239]][_0xFF0A[340]]) {
                    _0x12126();
                    this[_0xFF0A[239]][_0xFF0A[340]] = true
                };
                document[_0xFF0A[333]][_0xFF0A[332]][_0xFF0A[331]](_0xFF0A[330])
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[392]] = function (_0xFF2F) {
            if (_0x12195) {
                _0x11087(_0x12195[_0xFF0A[536]])
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[459]] = function () {
            _0x10825[_0xFF0A[99]][_0xFF0A[237]](this[_0xFF0A[458]])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[417]] = function (_0xFF9E) {
            var _0xFF2F = _0xFF9E[_0xFF0A[386]](_0xFF9E[_0xFF0A[387]]++);
            var _0xFF79 = _0xFF9E[_0xFF0A[386]](_0xFF9E[_0xFF0A[387]]++);
            var _0xFF54 = _0xFF9E[_0xFF0A[452]](_0xFF9E[_0xFF0A[387]], true);
            _0xFF9E[_0xFF0A[387]] += 8;
            this[_0xFF0A[235]][_0xFF0A[537]](_0xFF2F, _0xFF79, _0xFF54)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[418]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[386]](_0xFF54[_0xFF0A[387]]++);
            this[_0xFF0A[235]][_0xFF0A[538]](_0xFF2F)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[419]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[386]](_0xFF54[_0xFF0A[387]]++) == 1 ? true : false;
            this[_0xFF0A[235]][_0xFF0A[339]](_0xFF2F)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[450]] = function () {
            _0x10316[_0xFF0A[21]][_0xFF0A[171]](function (_0xFF2F, _0xFF54) {
                return _0xFF2F[_0xFF0A[539]][_0xFF0A[217]] - _0xFF54[_0xFF0A[539]][_0xFF0A[217]]
            });
            this[_0xFF0A[540]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[540]] = function () {
            var _0xFF54 = 0;
            var _0xFF2F = 0;
            for (var _0xFF79 in this[_0xFF0A[216]]) {
                var _0xFF9E = this[_0xFF0A[216]][_0xFF79];
                _0xFF54 += _0xFF9E[_0xFF0A[541]]();
                _0xFF2F++
            };
            if (_0xFF54 > this[_0xFF0A[287]]) {
                this[_0xFF0A[287]] = _0xFF54;
                _0x10825[_0xFF0A[85]][_0xFF0A[237]](this[_0xFF0A[287]][_0xFF0A[542]]())
            };
            this[_0xFF0A[453]](_0xFF2F)
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[453]] = function (_0xFF2F, _0xFF54) {
            if (_0x10825[_0xFF0A[101]] != _0xFF2F || _0xFF54) {
                _0x10825[_0xFF0A[101]] = _0xFF2F;
                _0x10825[_0xFF0A[87]][_0xFF0A[237]](_0xFF2F + _0xFF0A[4] + this[_0xFF0A[382]]());
                if (!_0x11493[_0xFF0A[543]]) {
                    var _0xFF79 = _0xFF2F / this[_0xFF0A[382]]();
                    if (_0xFF79 >= 1.0) {
                        _0x10825[_0xFF0A[87]][_0xFF0A[15]]({
                            "color": _0x11FD9[_0xFF0A[474]]
                        })
                    } else {
                        if (_0xFF79 >= 0.5) {
                            _0x10825[_0xFF0A[87]][_0xFF0A[15]]({
                                "color": _0x11FD9[_0xFF0A[473]]
                            })
                        } else {
                            _0x10825[_0xFF0A[87]][_0xFF0A[15]]({
                                "color": _0x11FD9[_0xFF0A[471]]
                            })
                        }
                    }
                } else {
                    _0x10825[_0xFF0A[87]][_0xFF0A[15]]({
                        "color": _0x11FD9[_0xFF0A[261]]
                    })
                }
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[511]] = function () {
            if (this[_0xFF0A[268]][_0xFF0A[9]] == 0) {
                return
            };
            if (_0x11493[_0xFF0A[544]]) {
                _0x10825[_0xFF0A[104]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
            } else {
                if (_0x10825[_0xFF0A[104]][_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16] && _0x10DED[_0xFF0A[15]](_0xFF0A[14]) != _0xFF0A[16]) {
                    _0x10825[_0xFF0A[104]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                }
            };
            var _0x10032 = document[_0xFF0A[70]](_0xFF0A[545]);
            var _0xFF2F = _0x10032[_0xFF0A[73]](_0xFF0A[72]);
            _0xFF2F[_0xFF0A[266]] = _0xFF0A[464];
            var _0xFF79 = 0;
            var _0xFF9E = 0;
            var _0x1007C = 0;
            for (var _0xFF54 = 0; _0xFF54 < this[_0xFF0A[268]][_0xFF0A[9]]; _0xFF54++) {
                var _0xFFC3 = this[_0xFF0A[268]][_0xFF54];
                if (_0xFFC3[_0xFF0A[507]] == -1) {
                    _0xFFC3[_0xFF0A[507]] = _0xFF2F[_0xFF0A[546]]((_0xFF54 + 1) + _0xFF0A[468] + _0xFFC3[_0xFF0A[145]])[_0xFF0A[196]]
                };
                if (_0xFFC3[_0xFF0A[507]] > _0xFF79) {
                    _0xFF79 = _0xFFC3[_0xFF0A[507]]
                };
                if (_0xFFC3[_0xFF0A[269]] === _0x1164F[_0xFF0A[270]] || _0xFFC3[_0xFF0A[269]] === _0x1164F[_0xFF0A[509]]) {
                    _0xFFC3[_0xFF0A[547]] = _0xFFC3[_0xFF0A[287]][_0xFF0A[542]]();
                    _0x1007C += _0xFFC3[_0xFF0A[287]]
                } else {
                    if (_0xFFC3[_0xFF0A[269]] === _0x1164F[_0xFF0A[548]]) {
                        _0xFFC3[_0xFF0A[547]] = _0xFF0A[548]
                    } else {
                        if (_0xFFC3[_0xFF0A[269]] === _0x1164F[_0xFF0A[549]]) {
                            _0xFFC3[_0xFF0A[547]] = _0xFF0A[550]
                        }
                    }
                };
                var _0x10057 = _0xFF2F[_0xFF0A[546]](_0xFFC3[_0xFF0A[547]])[_0xFF0A[196]];
                if (_0x10057 > _0xFF9E) {
                    _0xFF9E = _0x10057
                }
            };
            var _0x100A1 = _0x1007C[_0xFF0A[542]]();
            _0xFF9E = Math[_0xFF0A[223]](_0xFF9E, _0xFF2F[_0xFF0A[546]](_0x100A1)[_0xFF0A[196]]);
            _0x10032[_0xFF0A[196]] = 15 + _0xFF79 + 50 + _0xFF9E;
            _0x10032[_0xFF0A[199]] = (20 * this[_0xFF0A[268]][_0xFF0A[9]]) + 5 + (this[_0xFF0A[268]][_0xFF0A[9]] > 1 ? 20 : 0);
            _0xFF2F[_0xFF0A[266]] = _0xFF0A[464];
            var _0x1000D = 20;
            var _0xFFE8 = 5 + _0xFF79 + 50;
            for (var _0xFF54 = 0; _0xFF54 < this[_0xFF0A[268]][_0xFF0A[9]]; _0xFF54++) {
                var _0xFFC3 = this[_0xFF0A[268]][_0xFF54];
                _0xFF2F[_0xFF0A[465]] = _0xFFC3[_0xFF0A[506]] ? _0x11FD9[_0xFF0A[551]] : _0x11FD9[_0xFF0A[261]];
                _0xFF2F[_0xFF0A[469]]((_0xFF54 + 1) + _0xFF0A[468] + _0xFFC3[_0xFF0A[145]], 5, _0x1000D);
                _0xFF2F[_0xFF0A[469]](_0xFFC3[_0xFF0A[547]], _0xFFE8, _0x1000D);
                _0x1000D += 20
            };
            if (this[_0xFF0A[268]][_0xFF0A[9]] > 1) {
                _0xFF2F[_0xFF0A[465]] = _0x11FD9[_0xFF0A[261]];
                _0xFF2F[_0xFF0A[469]](_0xFF0A[552], 5, _0x1000D);
                _0xFF2F[_0xFF0A[469]](_0x100A1, _0xFFE8, _0x1000D)
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[409]] = function () {
            _0x11321[_0xFF0A[553]](true, false);
            _0x11321[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            _0x11ACA[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
            $(_0xFF0A[455])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[35]] = false
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[410]] = function (_0x1000D) {
            var _0xFF79 = _0x11958(_0x1000D);
            var _0xFFE8 = _0x1000D[_0xFF0A[463]](_0x1000D[_0xFF0A[387]], true);
            _0x1000D[_0xFF0A[387]] += 4;
            var _0xFFC3 = _0x1000D[_0xFF0A[387]] < _0x1000D[_0xFF0A[554]] ? _0x1000D[_0xFF0A[386]](_0x1000D[_0xFF0A[387]]) : -1;
            var _0xFF54 = document[_0xFF0A[70]](_0xFF0A[460]);
            var _0xFF2F = _0xFF54[_0xFF0A[73]](_0xFF0A[72]);
            _0x11018[_0xFF0A[237]](_0xFF0A[555]);
            _0xFF54[_0xFF0A[196]] = 200;
            _0xFF54[_0xFF0A[199]] = (20 * (2 + (_0xFFC3 != -1 ? 1 : 0))) + 5;
            _0xFF2F[_0xFF0A[266]] = _0xFF0A[464];
            var _0xFF9E = 20;
            _0xFF2F[_0xFF0A[465]] = _0x11FD9[_0xFF0A[261]];
            _0xFF2F[_0xFF0A[469]](_0xFF0A[556] + _0xFF79, 5, _0xFF9E);
            _0xFF9E += 20;
            _0xFF2F[_0xFF0A[469]](_0xFF0A[557] + _0x10A75(_0xFFE8), 5, _0xFF9E);
            if (_0xFFC3 != -1) {
                _0xFF9E += 20;
                _0xFF2F[_0xFF0A[469]](_0xFF0A[558] + _0xFFC3, 5, _0xFF9E)
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[411]] = function (_0xFF9E) {
            var _0xFF79 = _0x11958(_0xFF9E);
            var _0xFF54 = document[_0xFF0A[70]](_0xFF0A[460]);
            var _0xFF2F = _0xFF54[_0xFF0A[73]](_0xFF0A[72]);
            _0xFF54[_0xFF0A[196]] = 0;
            _0xFF54[_0xFF0A[199]] = 0;
            this[_0xFF0A[152]](_0xFF0A[559] + _0xFF79 + _0xFF0A[560])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[412]] = function (_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[554]] == 1 ? 0 : _0xFF54[_0xFF0A[386]](_0xFF54[_0xFF0A[387]]++);
            if (_0xFF2F == 0) {
                this[_0xFF0A[152]](_0xFF0A[561]);
                _0x11BF2()
            } else {
                if (_0xFF2F == 1) {
                    $(_0xFF0A[455])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                }
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[413]] = function (_0x100C6) {
            var _0xFF2F = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
            var _0x10057 = $(_0xFF0A[562]);
            var _0x10032 = $(_0xFF0A[563]);
            var _0x100A1 = parseInt(_0x10057[_0xFF0A[148]]());
            _0x10057[_0xFF0A[525]]();
            _0x10032[_0xFF0A[525]]();
            var _0xFF54 = {};
            while (_0xFF2F > 0) {
                var _0xFFC3 = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                var _0x1007C = _0x11958(_0x100C6);
                var _0xFFE8 = _0x11958(_0x100C6);
                var _0xFF79 = document[_0xFF0A[360]](_0xFF0A[564]);
                _0xFF79[_0xFF0A[365]] = _0x1007C;
                _0xFF79[_0xFF0A[147]] = _0xFFC3;
                _0x10057[_0xFF0A[529]](_0xFF79);
                _0xFF79 = document[_0xFF0A[360]](_0xFF0A[490]);
                _0xFF79[_0xFF0A[365]] = _0xFFE8;
                _0xFF79[_0xFF0A[131]] = _0xFF0A[565] + _0xFFC3;
                _0xFF79[_0xFF0A[363]][_0xFF0A[14]] = _0xFF0A[16];
                _0x10032[_0xFF0A[529]](_0xFF79);
                _0xFF54[_0xFFC3] = true;
                _0xFF2F--
            };
            _0x11AA5 = {
                "modes": {},
                "sizes": {},
                "maps": []
            };
            if (_0x100C6[_0xFF0A[554]] - 1 > _0x100C6[_0xFF0A[387]]) {
                _0xFF2F = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                while (_0xFF2F > 0) {
                    var _0xFFC3 = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                    var _0x1007C = _0x11958(_0x100C6);
                    _0x11AA5[_0xFF0A[566]][_0xFFC3] = {
                        "id": _0xFFC3,
                        "name": _0x1007C
                    };
                    _0xFF2F--
                };
                _0xFF2F = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                while (_0xFF2F > 0) {
                    var _0xFFC3 = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                    var _0x1007C = _0x11958(_0x100C6);
                    _0x11AA5[_0xFF0A[567]][_0xFFC3] = {
                        "id": _0xFFC3,
                        "name": _0x1007C
                    };
                    _0xFF2F--
                };
                _0xFF2F = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                while (_0xFF2F > 0) {
                    var _0x1007C = _0x11958(_0x100C6);
                    var _0x1000D = {
                        "name": _0x1007C,
                        "startmass": 0,
                        "teams": 0,
                        "modes": [],
                        "sizes": []
                    };
                    var _0xFF9E = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                    while (_0xFF9E > 0) {
                        _0x1000D[_0xFF0A[566]][_0xFF0A[170]](_0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++));
                        _0xFF9E--
                    };
                    var _0xFF9E = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                    while (_0xFF9E > 0) {
                        _0x1000D[_0xFF0A[567]][_0xFF0A[170]](_0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++));
                        _0xFF9E--
                    };
                    _0x1000D[_0xFF0A[568]] = _0x100C6[_0xFF0A[422]](_0x100C6[_0xFF0A[387]], true);
                    _0x100C6[_0xFF0A[387]] += 2;
                    _0x1000D[_0xFF0A[569]] = _0x100C6[_0xFF0A[433]](_0x100C6[_0xFF0A[387]], true);
                    _0x100C6[_0xFF0A[387]] += 2;
                    _0x1000D[_0xFF0A[570]] = _0x100C6[_0xFF0A[386]](_0x100C6[_0xFF0A[387]]++);
                    _0x11AA5[_0xFF0A[571]][_0xFF0A[170]](_0x1000D);
                    _0xFF2F--
                }
            };
            $(_0xFF0A[572])[_0xFF0A[15]](_0xFF0A[14], _0x11AA5[_0xFF0A[571]][_0xFF0A[9]] == 0 ? _0xFF0A[16] : _0xFF0A[18]);
            $(_0xFF0A[573])[_0xFF0A[525]]();
            for (var _0xFF9E = 0; _0xFF9E < _0x11AA5[_0xFF0A[571]][_0xFF0A[9]]; _0xFF9E++) {
                $(_0xFF0A[573])[_0xFF0A[529]](_0xFF0A[574] + _0xFF9E + _0xFF0A[575] + _0x11AA5[_0xFF0A[571]][_0xFF9E][_0xFF0A[145]] + _0xFF0A[576])
            };
            if (_0xFF54[_0x100A1] != null) {
                _0x10057[_0xFF0A[148]](_0x100A1);
                _0x10057[_0xFF0A[578]](_0xFF0A[577])
            } else {
                _0x10057[_0xFF0A[580]](_0xFF0A[579], 0);
                _0x10057[_0xFF0A[578]](_0xFF0A[577])
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[415]] = function (_0xFFC3) {
            var _0xFF79 = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
            switch (_0xFF79) {
            case _0x10722[_0xFF0A[582]]:
                ScrimmageHelper[_0xFF0A[581]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++));
                break;
            case _0x10722[_0xFF0A[584]]:
                ScrimmageHelper[_0xFF0A[583]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++));
                break;
            case _0x10722[_0xFF0A[586]]:
                ScrimmageHelper[_0xFF0A[585]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++));
                break;
            case _0x10722[_0xFF0A[588]]:
                ScrimmageHelper[_0xFF0A[587]](_0xFFC3[_0xFF0A[422]](_0xFFC3[_0xFF0A[387]], true));
                _0xFFC3[_0xFF0A[387]] += 2;
                break;
            case _0x10722[_0xFF0A[590]]:
                ScrimmageHelper[_0xFF0A[589]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++) === 1 ? true : false);
                break;
            case _0x10722[_0xFF0A[592]]:
                var _0xFF54 = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                var _0xFF9E = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                _0x11752[_0xFF0A[268]][_0xFF54][_0xFF0A[508]] = _0xFF9E;
                ScrimmageHelper[_0xFF0A[591]](_0xFF54);
                break;
            case _0x10722[_0xFF0A[594]]:
                var _0xFF2F = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                var _0xFF54 = 0;
                while (_0xFF2F > 0) {
                    _0x11752[_0xFF0A[268]][_0xFF54][_0xFF0A[508]] = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                    _0xFF2F--;
                    _0xFF54++
                };
                ScrimmageHelper[_0xFF0A[593]]();
                break;
            case _0x10722[_0xFF0A[596]]:
                ScrimmageHelper[_0xFF0A[595]](_0xFFC3[_0xFF0A[422]](_0xFFC3[_0xFF0A[387]], true));
                _0xFFC3[_0xFF0A[387]] += 2;
                break;
            case _0x10722[_0xFF0A[598]]:
                ScrimmageHelper[_0xFF0A[597]](_0xFFC3[_0xFF0A[433]](_0xFFC3[_0xFF0A[387]], true));
                _0xFFC3[_0xFF0A[387]] += 2;
                break;
            case _0x10722[_0xFF0A[600]]:
                ScrimmageHelper[_0xFF0A[599]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++) === 1 ? true : false);
                break;
            case _0x10722[_0xFF0A[602]]:
                ScrimmageHelper[_0xFF0A[601]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++) === 1 ? true : false);
                break;
            case _0x10722[_0xFF0A[604]]:
                ScrimmageHelper[_0xFF0A[603]](_0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++) === 1 ? true : false);
                break;
            case _0x10722[_0xFF0A[606]]:
                ScrimmageHelper[_0xFF0A[605]](_0x11933(_0xFFC3));
                break
            }
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[414]] = function (_0x100EB) {
            $(_0xFF0A[607])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            $(_0xFF0A[82])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
            var _0x1000D = _0x11933(_0x100EB);
            var _0xFFC3 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++);
            var _0xFFE8 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++);
            var _0x100A1 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++);
            var _0x100C6 = _0x100EB[_0xFF0A[422]](_0x100EB[_0xFF0A[387]], true);
            _0x100EB[_0xFF0A[387]] += 2;
            var _0x10110 = _0x100EB[_0xFF0A[422]](_0x100EB[_0xFF0A[387]], true);
            _0x100EB[_0xFF0A[387]] += 2;
            var _0x1007C = _0x100EB[_0xFF0A[433]](_0x100EB[_0xFF0A[387]], true);
            _0x100EB[_0xFF0A[387]] += 2;
            var _0xFF54 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++) === 1 ? true : false;
            var _0xFF9E = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++) === 1 ? true : false;
            var _0x10057 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++) === 1 ? true : false;
            var _0x10032 = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++) === 1 ? true : false;
            var _0xFF2F = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++);
            var _0xFF79 = 0;
            while (_0xFF2F > 0) {
                _0x11752[_0xFF0A[268]][_0xFF79][_0xFF0A[508]] = _0x100EB[_0xFF0A[386]](_0x100EB[_0xFF0A[387]]++);
                _0xFF2F--;
                _0xFF79++
            };
            ScrimmageHelper[_0xFF0A[605]](_0x1000D);
            ScrimmageHelper[_0xFF0A[581]](_0xFFC3);
            ScrimmageHelper[_0xFF0A[583]](_0xFFE8);
            ScrimmageHelper[_0xFF0A[585]](_0x100A1);
            ScrimmageHelper[_0xFF0A[587]](_0x100C6);
            ScrimmageHelper[_0xFF0A[595]](_0x10110);
            ScrimmageHelper[_0xFF0A[589]](_0xFF9E);
            ScrimmageHelper[_0xFF0A[597]](_0x1007C);
            ScrimmageHelper[_0xFF0A[599]](_0xFF54);
            ScrimmageHelper[_0xFF0A[601]](_0x10057);
            ScrimmageHelper[_0xFF0A[603]](_0x10032);
            ScrimmageHelper[_0xFF0A[593]]();
            ScrimmageHelper[_0xFF0A[510]]()
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[375]] = function () {
            $(_0xFF0A[607])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            $(_0xFF0A[608])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
        };
        _0x10541[_0xFF0A[293]][_0xFF0A[416]] = function (_0xFFC3) {
            $(_0xFF0A[607])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            $(_0xFF0A[609])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
            _0x1076C = {};
            var _0xFF9E = $(_0xFF0A[610]);
            _0xFF9E[_0xFF0A[525]]();
            while (true) {
                var _0xFF79 = _0xFFC3[_0xFF0A[463]](_0xFFC3[_0xFF0A[387]], true);
                _0xFFC3[_0xFF0A[387]] += 4;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFF2F = {};
                _0xFF2F[_0xFF0A[131]] = _0xFF79;
                _0xFF2F[_0xFF0A[145]] = _0x11933(_0xFFC3);
                _0xFF2F[_0xFF0A[611]] = _0xFFC3[_0xFF0A[463]](_0xFFC3[_0xFF0A[387]]);
                _0xFFC3[_0xFF0A[387]] += 4;
                _0xFF2F[_0xFF0A[612]] = _0x11933(_0xFFC3) || _0xFF0A[295];
                _0xFF2F[_0xFF0A[613]] = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                _0xFF2F[_0xFF0A[614]] = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++);
                _0xFF2F[_0xFF0A[217]] = _0xFFC3[_0xFF0A[422]](_0xFFC3[_0xFF0A[387]], true);
                _0xFFC3[_0xFF0A[387]] += 2;
                _0xFF2F[_0xFF0A[615]] = _0xFFC3[_0xFF0A[422]](_0xFFC3[_0xFF0A[387]], true);
                _0xFFC3[_0xFF0A[387]] += 2;
                _0xFF2F[_0xFF0A[616]] = _0xFFC3[_0xFF0A[386]](_0xFFC3[_0xFF0A[387]]++) == 1 ? true : false;
                _0x1076C[_0xFF2F[_0xFF0A[131]]] = _0xFF2F;
                var _0xFF54 = _0xFF2F[_0xFF0A[616]] ? _0xFF0A[617] : _0xFF0A[1];
                _0xFF9E[_0xFF0A[529]](_0xFF0A[618] + _0xFF2F[_0xFF0A[131]] + _0xFF0A[619] + _0xFF54 + _0x11596(_0xFF2F[_0xFF0A[145]]) + _0xFF0A[620] + _0x11596(_0xFF2F[_0xFF0A[612]]) + _0xFF0A[620] + _0x11AA5[_0xFF0A[571]][_0xFF2F[_0xFF0A[613]]][_0xFF0A[145]] + _0xFF0A[620] + _0x11AA5[_0xFF0A[566]][_0xFF2F[_0xFF0A[614]]][_0xFF0A[145]] + _0xFF0A[620] + _0xFF2F[_0xFF0A[217]] + _0xFF0A[4] + _0xFF2F[_0xFF0A[615]] + _0xFF0A[621])
            };
            $(_0xFF0A[629])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[625])[_0xFF0A[624]](_0xFF0A[623]);
                _0x11B5E = $(this)[_0xFF0A[627]](_0xFF0A[626]);
                $(this)[_0xFF0A[628]](_0xFF0A[623])
            })
        };
        ScrimmageHelper = {
            updateName: function (_0xFF2F) {
                $(_0xFF0A[630])[_0xFF0A[462]](_0xFF2F)
            },
            updateMap: function (_0xFF54) {
                $(_0xFF0A[632] + _0xFF54 + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                var _0xFF79 = _0x11AA5[_0xFF0A[571]][_0xFF54];
                $(_0xFF0A[634])[_0xFF0A[525]]();
                for (var _0xFF2F = 0; _0xFF2F < _0xFF79[_0xFF0A[566]][_0xFF0A[9]]; _0xFF2F++) {
                    var _0xFF9E = _0x11AA5[_0xFF0A[566]][_0xFF79[_0xFF0A[566]][_0xFF2F]];
                    $(_0xFF0A[634])[_0xFF0A[529]](_0xFF0A[574] + _0xFF2F + _0xFF0A[575] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[576])
                };
                $(_0xFF0A[635])[_0xFF0A[525]]();
                for (var _0xFF2F = 0; _0xFF2F < _0xFF79[_0xFF0A[567]][_0xFF0A[9]]; _0xFF2F++) {
                    var _0xFFC3 = _0x11AA5[_0xFF0A[567]][_0xFF79[_0xFF0A[567]][_0xFF2F]];
                    $(_0xFF0A[635])[_0xFF0A[529]](_0xFF0A[574] + _0xFF2F + _0xFF0A[575] + _0xFFC3[_0xFF0A[145]] + _0xFF0A[576])
                };
                ScrimmageHelper[_0xFF0A[583]](0);
                ScrimmageHelper[_0xFF0A[585]](0);
                ScrimmageHelper[_0xFF0A[587]](_0xFF79[_0xFF0A[568]]);
                $(_0xFF0A[637])[_0xFF0A[627]](_0xFF0A[636], _0xFF79[_0xFF0A[568]]);
                ScrimmageHelper[_0xFF0A[597]](_0xFF79[_0xFF0A[569]]);
                $(_0xFF0A[573])[_0xFF0A[627]](_0xFF0A[385], _0xFF54);
                _0x11752[_0xFF0A[288]] = _0xFF79
            },
            updateMode: function (_0xFF2F) {
                $(_0xFF0A[638] + _0xFF2F + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                $(_0xFF0A[634])[_0xFF0A[627]](_0xFF0A[385], _0xFF2F)
            },
            updateSize: function (_0xFF2F) {
                $(_0xFF0A[639] + _0xFF2F + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                $(_0xFF0A[635])[_0xFF0A[627]](_0xFF0A[385], _0xFF2F)
            },
            updateStartMass: function (_0xFF2F) {
                $(_0xFF0A[637])[_0xFF0A[148]](_0xFF2F);
                $(_0xFF0A[637])[_0xFF0A[627]](_0xFF0A[385], _0xFF2F)
            },
            updateVirusDensity: function (_0xFF2F) {
                $(_0xFF0A[640])[_0xFF0A[148]](_0xFF2F);
                $(_0xFF0A[640])[_0xFF0A[627]](_0xFF0A[385], _0xFF2F)
            },
            updateRespawnDelay: function (_0xFF2F) {
                $(_0xFF0A[641])[_0xFF0A[148]](_0xFF2F);
                $(_0xFF0A[641])[_0xFF0A[627]](_0xFF0A[385], _0xFF2F)
            },
            updateAutoSplit: function (_0xFF2F) {
                $(_0xFF0A[643])[_0xFF0A[580]](_0xFF0A[642], _0xFF2F)
            },
            updatePublic: function (_0xFF2F) {
                $(_0xFF0A[644])[_0xFF0A[580]](_0xFF0A[642], _0xFF2F)
            },
            updatePassword: function (_0xFF2F) {
                $(_0xFF0A[645])[_0xFF0A[580]](_0xFF0A[642], _0xFF2F)
            },
            updateLock: function (_0xFF2F) {
                $(_0xFF0A[646])[_0xFF0A[580]](_0xFF0A[642], _0xFF2F);
                ScrimmageHelper[_0xFF0A[647]]()
            },
            checkLock: function () {
                if ($(_0xFF0A[646])[_0xFF0A[580]](_0xFF0A[642]) && !_0x11752[_0xFF0A[381]]()) {
                    $(_0xFF0A[649] + _0x11752[_0xFF0A[374]])[_0xFF0A[627]](_0xFF0A[648], _0xFF0A[648])
                } else {
                    $(_0xFF0A[649] + _0x11752[_0xFF0A[374]])[_0xFF0A[650]](_0xFF0A[648])
                }
            },
            checkLeader: function () {
                if (_0x11752[_0xFF0A[381]]()) {
                    $(_0xFF0A[651])[_0xFF0A[650]](_0xFF0A[648])
                } else {
                    $(_0xFF0A[651])[_0xFF0A[627]](_0xFF0A[648], _0xFF0A[648]);
                    ScrimmageHelper[_0xFF0A[647]]()
                }
            },
            updatePlayerById: function (_0xFF2F) {
                var _0xFF54 = _0x11752[_0xFF0A[268]][_0xFF2F];
                $(_0xFF0A[649] + _0xFF2F + _0xFF0A[652] + _0xFF54[_0xFF0A[508]] + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                $(_0xFF0A[653] + _0xFF2F)[_0xFF0A[462]](_0xFF54[_0xFF0A[145]]);
                $(_0xFF0A[653] + _0xFF2F)[_0xFF0A[15]](_0xFF0A[362], _0x106FD[_0xFF54[_0xFF0A[508]]])
            },
            updatePlayers: function () {
                $(_0xFF0A[654])[_0xFF0A[525]]();
                for (var _0xFF2F = 0; _0xFF2F < _0x11752[_0xFF0A[268]][_0xFF0A[9]]; _0xFF2F++) {
                    var _0xFF54 = _0x11752[_0xFF0A[268]][_0xFF2F];
                    if (_0xFF54[_0xFF0A[131]] == _0x11752[_0xFF0A[271]]) {
                        _0x11752[_0xFF0A[374]] = _0xFF2F
                    };
                    $(_0xFF0A[654])[_0xFF0A[529]](_0xFF0A[655] + _0xFF2F + _0xFF0A[575] + _0xFF54[_0xFF0A[145]] + _0xFF0A[656] + ScrimmageHelper[_0xFF0A[657]](_0xFF2F, _0x11752[_0xFF0A[288]][_0xFF0A[570]]) + _0xFF0A[658]);
                    $(_0xFF0A[649] + _0xFF2F + _0xFF0A[652] + _0xFF54[_0xFF0A[508]] + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                    $(_0xFF0A[653] + _0xFF2F)[_0xFF0A[15]](_0xFF0A[362], _0x106FD[_0xFF54[_0xFF0A[508]]]);
                    $(_0xFF0A[649] + _0xFF2F)[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                        var _0xFF79 = parseInt($(this)[_0xFF0A[627]](_0xFF0A[131])[_0xFF0A[660]](_0xFF0A[659])[0]);
                        var _0xFF9E = $(this)[_0xFF0A[662]](_0xFF0A[661])[_0xFF0A[148]]();
                        $(_0xFF0A[649] + _0xFF2F + _0xFF0A[652] + $(this)[_0xFF0A[627]](_0xFF0A[385]) + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[592]], _0xFF79, _0xFF9E))
                    })
                };
                ScrimmageHelper[_0xFF0A[510]]()
            },
            getTeamOptions: function (_0xFF54, _0xFF9E) {
                var _0xFF79 = _0xFF0A[1];
                if (_0xFF9E != null && _0xFF9E > 1) {
                    _0xFF79 = _0xFF0A[664] + _0xFF54 + _0xFF0A[665];
                    for (var _0xFF2F = 1; _0xFF2F <= _0xFF9E; _0xFF2F++) {
                        _0xFF79 += _0xFF0A[574] + _0xFF2F + _0xFF0A[666] + _0xFF2F + _0xFF0A[575] + _0x11AEF[_0xFF2F] + _0xFF0A[576]
                    };
                    _0xFF79 += _0xFF0A[667]
                };
                return _0xFF79
            }
        };

        function _0x1025D(_0xFF2F) {
            this[_0xFF0A[131]] = _0xFF2F;
            this[_0xFF0A[444]] = 0;
            this[_0xFF0A[668]] = null;
            this[_0xFF0A[430]] = null;
            this[_0xFF0A[271]] = 0;
            this[_0xFF0A[362]] = null;
            this[_0xFF0A[202]] = 0;
            this[_0xFF0A[205]] = 0;
            this[_0xFF0A[273]] = 0;
            this[_0xFF0A[274]] = 0;
            this[_0xFF0A[217]] = 0;
            this[_0xFF0A[442]] = 0;
            this[_0xFF0A[211]] = 0;
            this[_0xFF0A[669]] = -1;
            this[_0xFF0A[507]] = null
        }
        _0x1025D[_0xFF0A[293]][_0xFF0A[432]] = function (_0xFF2F) {
            this[_0xFF0A[444]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[434]] = function (_0xFF2F) {
            this[_0xFF0A[273]] = _0xFF2F;
            this[_0xFF0A[202]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[435]] = function (_0xFF2F) {
            this[_0xFF0A[274]] = _0xFF2F;
            this[_0xFF0A[205]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[440]] = function (_0xFF2F) {
            this[_0xFF0A[273]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[441]] = function (_0xFF2F) {
            this[_0xFF0A[274]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[436]] = function (_0xFF2F) {
            this[_0xFF0A[442]] = _0xFF2F;
            this[_0xFF0A[217]] = _0xFF2F
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[670]] = function () {
            return (this[_0xFF0A[217]] * this[_0xFF0A[217]]) / 100 >> 0
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[541]] = function () {
            return (this[_0xFF0A[442]] * this[_0xFF0A[442]]) / 100 >> 0
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[212]] = function (_0xFF2F) {
            this[_0xFF0A[202]] += Math[_0xFF0A[671]]((this[_0xFF0A[273]] - this[_0xFF0A[202]]) * _0xFF2F);
            this[_0xFF0A[205]] += Math[_0xFF0A[671]]((this[_0xFF0A[274]] - this[_0xFF0A[205]]) * _0xFF2F);
            this[_0xFF0A[217]] += Math[_0xFF0A[671]]((this[_0xFF0A[442]] - this[_0xFF0A[217]]) * _0xFF2F);
            this[_0xFF0A[211]]--
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[672]] = function () {
            var _0xFFE8 = this[_0xFF0A[670]]();
            if (_0xFFE8 != this[_0xFF0A[669]] || this[_0xFF0A[669]] < 0) {
                var _0x1000D;
                if (_0x114B8[_0xFF0A[673]] == 1) {
                    _0x1000D = this[_0xFF0A[674]](_0xFFE8)
                } else {
                    _0x1000D = _0xFFE8[_0xFF0A[675]]()
                };
                var _0x10057 = 0;
                var _0xFF79 = 0;
                for (var _0xFF9E = 0; _0xFF9E < _0x1000D[_0xFF0A[9]]; _0xFF9E++) {
                    var _0xFF2F = _0x1000D[_0xFF0A[206]](_0xFF9E);
                    var _0xFFC3 = _0x11DD3[_0xFF0A[676]](_0xFF2F);
                    _0x10057 += _0xFFC3[_0xFF0A[196]] - 2;
                    _0xFF79 = Math[_0xFF0A[223]](_0xFFC3[_0xFF0A[199]], _0xFF79)
                };
                if (this[_0xFF0A[507]] == null) {
                    this[_0xFF0A[507]] = _0x116E3[_0xFF0A[678]][_0xFF0A[677]](_0x10057, _0xFF79)
                } else {
                    if (_0x10057 != this[_0xFF0A[507]][_0xFF0A[196]] || _0xFF79 != this[_0xFF0A[507]][_0xFF0A[199]]) {
                        this[_0xFF0A[507]][_0xFF0A[249]]({
                            children: true,
                            texture: true,
                            baseTexture: true
                        });
                        this[_0xFF0A[507]] = _0x116E3[_0xFF0A[678]][_0xFF0A[677]](_0x10057, _0xFF79)
                    }
                };
                var _0xFF54 = _0x11DD3[_0xFF0A[679]];
                var _0x10032 = 0;
                for (var _0xFF9E = 0; _0xFF9E < _0x1000D[_0xFF0A[9]]; _0xFF9E++) {
                    var _0xFF2F = _0x1000D[_0xFF0A[206]](_0xFF9E);
                    var _0xFFC3 = _0x11DD3[_0xFF0A[680]]();
                    _0xFFC3[_0xFF0A[681]] = _0x11DD3[_0xFF0A[676]](_0xFF2F)[_0xFF0A[681]];
                    _0xFFC3[_0xFF0A[203]][_0xFF0A[202]] = _0x10032;
                    _0xFF54[_0xFF0A[28]](_0xFFC3);
                    _0x10032 += _0xFFC3[_0xFF0A[196]] - 2
                };
                _0x11708[_0xFF0A[201]][_0xFF0A[236]](_0xFF54, this[_0xFF0A[507]], true);
                _0x11DD3[_0xFF0A[682]]();
                this[_0xFF0A[669]] = _0xFFE8
            };
            return this[_0xFF0A[507]]
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[674]] = function (_0xFF54) {
            if (_0xFF54 < 1000) {
                return _0xFF54[_0xFF0A[675]]()
            } else {
                if (_0xFF54 < 1000000) {
                    var _0xFF2F = Math[_0xFF0A[240]](_0xFF54 / 100) / 10;
                    return _0xFF2F[_0xFF0A[263]](1) + _0xFF0A[683]
                } else {
                    if (_0xFF54 < 1000000000) {
                        var _0xFF2F = Math[_0xFF0A[240]](_0xFF54 / 100000) / 10;
                        return _0xFF2F[_0xFF0A[263]](1) + _0xFF0A[684]
                    } else {
                        if (_0xFF54 >= 1000000000) {
                            var _0xFF2F = Math[_0xFF0A[240]](_0xFF54 / 100000000) / 10;
                            return _0xFF2F[_0xFF0A[263]](1) + _0xFF0A[685]
                        }
                    }
                }
            };
            return _0xFF54[_0xFF0A[675]]()
        };

        function _0x11DAE() {
            this[_0xFF0A[507]] = {};
            this[_0xFF0A[679]] = new _0x116E3[_0xFF0A[24]]();
            this[_0xFF0A[686]] = [];
            this[_0xFF0A[687]] = 0;
            this[_0xFF0A[676]] = function (_0xFF2F) {
                return this[_0xFF0A[507]][_0xFF2F]
            };
            this[_0xFF0A[682]] = function () {
                while (this[_0xFF0A[679]][_0xFF0A[21]][0]) {
                    this[_0xFF0A[679]][_0xFF0A[247]](this[_0xFF0A[679]][_0xFF0A[21]][0])
                };
                this[_0xFF0A[687]] = 0
            };
            this[_0xFF0A[680]] = function () {
                while (this[_0xFF0A[687]] >= this[_0xFF0A[686]][_0xFF0A[9]]) {
                    this[_0xFF0A[686]][_0xFF0A[170]](new _0x116E3[_0xFF0A[27]]())
                };
                return this[_0xFF0A[686]][this[_0xFF0A[687]]++]
            };
            this[_0xFF0A[688]] = function () {
                var _0xFF2F = [_0xFF0A[689], _0xFF0A[690], _0xFF0A[691], _0xFF0A[692], _0xFF0A[693], _0xFF0A[694], _0xFF0A[695], _0xFF0A[696], _0xFF0A[697], _0xFF0A[698], _0xFF0A[10], _0xFF0A[683], _0xFF0A[685], _0xFF0A[699]];
                for (var _0xFF54 of _0xFF2F) {
                    var _0xFF79 = new _0x116E3[_0xFF0A[705]](_0xFF54, {
                        fontFamily: _0xFF0A[700],
                        fontWeight: _0xFF0A[701],
                        fontSize: 54,
                        fill: _0xFF0A[702],
                        stroke: _0xFF0A[703],
                        strokeThickness: _0x114B8[_0xFF0A[704]]
                    });
                    this[_0xFF0A[507]][_0xFF54] = _0xFF79
                }
            }
        }
        const _0x11DD3 = new _0x11DAE();
        _0x1025D[_0xFF0A[293]][_0xFF0A[213]] = function () {
            if (this[_0xFF0A[706]]) {
                while (this[_0xFF0A[707]][_0xFF0A[21]][0]) {
                    var _0xFF2F = this[_0xFF0A[707]][_0xFF0A[21]][0];
                    this[_0xFF0A[707]][_0xFF0A[247]](_0xFF2F);
                    _0xFF2F[_0xFF0A[249]]()
                };
                var _0xFF54 = new _0x116E3[_0xFF0A[250]]();
                if (_0x11493[_0xFF0A[708]] && _0x106D8[_0xFF0A[9]] > 0) {
                    _0xFF54[_0xFF0A[709]](_0x10BC2(this[_0xFF0A[131]]))
                } else {
                    _0xFF54[_0xFF0A[709]](this[_0xFF0A[362]])
                };
                _0xFF54[_0xFF0A[710]](0, 0, 1);
                _0xFF54[_0xFF0A[711]]();
                _0xFF54[_0xFF0A[227]][_0xFF0A[712]](12);
                this[_0xFF0A[707]][_0xFF0A[28]](_0xFF54);
                this[_0xFF0A[706]] = false
            };
            this[_0xFF0A[707]][_0xFF0A[260]] = !_0x11493[_0xFF0A[713]];
            this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]])
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[714]] = function (_0xFF2F) {
            if (_0xFF2F[_0xFF0A[715]] == 1) {
                if (this[_0xFF0A[716]] == null) {
                    this[_0xFF0A[716]] = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
                    this[_0xFF0A[716]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                    this[_0xFF0A[716]][_0xFF0A[196]] = _0x10282;
                    this[_0xFF0A[716]][_0xFF0A[199]] = _0x10282;
                    this[_0xFF0A[707]][_0xFF0A[718]](this[_0xFF0A[716]], 0)
                };
                this[_0xFF0A[719]][_0xFF0A[260]] = false;
                if (_0x106B3[_0xFF0A[720]]) {
                    this[_0xFF0A[716]][_0xFF0A[681]] = _0x106B3[_0xFF0A[720]]
                } else {
                    this[_0xFF0A[716]][_0xFF0A[681]] = _0x11EB1
                };
                this[_0xFF0A[716]][_0xFF0A[260]] = true
            } else {
                if (_0xFF2F[_0xFF0A[715]] == 2) {
                    if (this[_0xFF0A[716]] == null) {
                        this[_0xFF0A[716]] = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
                        this[_0xFF0A[716]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                        this[_0xFF0A[716]][_0xFF0A[196]] = _0x10282;
                        this[_0xFF0A[716]][_0xFF0A[199]] = _0x10282;
                        this[_0xFF0A[707]][_0xFF0A[718]](this[_0xFF0A[716]], 0)
                    };
                    this[_0xFF0A[719]][_0xFF0A[260]] = false;
                    if (_0x106B3[_0xFF0A[721]]) {
                        this[_0xFF0A[716]][_0xFF0A[681]] = _0x106B3[_0xFF0A[721]]
                    } else {
                        this[_0xFF0A[716]][_0xFF0A[681]] = _0x11ED6
                    };
                    this[_0xFF0A[716]][_0xFF0A[260]] = true
                } else {
                    this[_0xFF0A[719]][_0xFF0A[260]] = true;
                    if (this[_0xFF0A[716]]) {
                        this[_0xFF0A[716]][_0xFF0A[260]] = false
                    }
                }
            }
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[215]] = function () {
            switch (this[_0xFF0A[444]]) {
            case 0:
                break;
            case 1:
                if (this[_0xFF0A[706]]) {
                    if (this[_0xFF0A[430]] >= 0 && this[_0xFF0A[430]] < _0x10928[_0xFF0A[9]] && _0x10928[this[_0xFF0A[430]]][_0xFF0A[722]] > 0) {
                        this[_0xFF0A[723]] = this[_0xFF0A[430]] + _0xFF0A[2] + this[_0xFF0A[362]];
                        this[_0xFF0A[724]] = new _0x116E3[_0xFF0A[27]](_0x108B9[_0xFF0A[725]](this));
                        this[_0xFF0A[724]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                        this[_0xFF0A[724]][_0xFF0A[196]] = this[_0xFF0A[217]] * 2;
                        this[_0xFF0A[724]][_0xFF0A[199]] = this[_0xFF0A[217]] * 2;
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[724]])
                    } else {
                        var _0xFF2F = new _0x116E3[_0xFF0A[250]]();
                        _0xFF2F[_0xFF0A[709]](this[_0xFF0A[362]]);
                        _0xFF2F[_0xFF0A[710]](0, 0, 8);
                        _0xFF2F[_0xFF0A[711]]();
                        _0xFF2F[_0xFF0A[227]][_0xFF0A[712]](this[_0xFF0A[217]] / 8);
                        this[_0xFF0A[707]][_0xFF0A[28]](_0xFF2F)
                    };
                    this[_0xFF0A[706]] = false
                };
                this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]]);
                break;
            case 2:
                var _0xFF9E = _0x11752[_0xFF0A[244]][_0xFF0A[726]](this[_0xFF0A[271]]);
                var _0xFFC3 = _0x117C1[_0xFF0A[47]];
                if (_0x11752[_0xFF0A[271]] == this[_0xFF0A[271]]) {
                    _0xFFC3 = _0x117C1[_0xFF0A[727]]
                } else {
                    if (_0x11752[_0xFF0A[285]][this[_0xFF0A[271]]] != null) {
                        _0xFFC3 = _0x117C1[_0xFF0A[479]]
                    }
                };
                if (this[_0xFF0A[706]]) {
                    _0xFF2F = new _0x116E3[_0xFF0A[250]]();
                    _0xFF2F[_0xFF0A[709]](_0xFF9E[_0xFF0A[424]]);
                    _0xFF2F[_0xFF0A[710]](0, 0, _0x102CC);
                    _0xFF2F[_0xFF0A[711]]();
                    this[_0xFF0A[707]][_0xFF0A[28]](_0xFF2F);
                    this[_0xFF0A[719]] = _0xFF2F;
                    this[_0xFF0A[728]] = new _0x116E3[_0xFF0A[24]]();
                    this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[728]]);
                    this[_0xFF0A[729]] = true;
                    this[_0xFF0A[730]] = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
                    this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[730]]);
                    if (_0xFF9E[_0xFF0A[145]][_0xFF0A[9]] > 0) {
                        var _0xFF79 = _0xFF9E[_0xFF0A[732]](_0xFF9E[_0xFF0A[731]]);
                        this[_0xFF0A[733]] = new _0x116E3[_0xFF0A[27]](_0xFF79[_0xFF0A[681]]);
                        this[_0xFF0A[733]][_0xFF0A[260]] = false;
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[733]]);
                        this[_0xFF0A[734]] = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
                        this[_0xFF0A[733]][_0xFF0A[28]](this[_0xFF0A[734]])
                    };
                    this[_0xFF0A[714]](_0xFF9E);
                    this[_0xFF0A[706]] = false
                };
                this[_0xFF0A[728]][_0xFF0A[260]] = _0x114B8[_0xFF0A[735]] >= _0xFFC3 && _0xFF9E[_0xFF0A[715]] == 0;
                if (this[_0xFF0A[728]][_0xFF0A[260]]) {
                    var _0x10032 = _0xFF9E[_0xFF0A[725]]();
                    if (_0x10032 != null) {
                        if (this[_0xFF0A[729]]) {
                            this[_0xFF0A[736]] = new _0x116E3[_0xFF0A[27]](_0x116E3[_0xFF0A[26]][_0xFF0A[25]]);
                            this[_0xFF0A[736]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                            this[_0xFF0A[736]][_0xFF0A[196]] = _0x10282;
                            this[_0xFF0A[736]][_0xFF0A[199]] = _0x10282;
                            this[_0xFF0A[728]][_0xFF0A[28]](this[_0xFF0A[736]]);
                            this[_0xFF0A[729]] = false
                        };
                        if (!_0x10032[_0xFF0A[737]]) {
                            if (_0x10032 !== this[_0xFF0A[736]][_0xFF0A[681]]) {
                                this[_0xFF0A[736]][_0xFF0A[681]] = _0x10032
                            }
                        } else {
                            this[_0xFF0A[736]][_0xFF0A[681]] = _0x10032[_0xFF0A[738]]()
                        }
                    }
                };
                if (_0xFF9E[_0xFF0A[731]]) {
                    if (this[_0xFF0A[733]]) {
                        this[_0xFF0A[733]][_0xFF0A[681]] = _0xFF9E[_0xFF0A[732]](_0xFF9E[_0xFF0A[731]])[_0xFF0A[681]];
                        this[_0xFF0A[733]][_0xFF0A[681]][_0xFF0A[234]]()
                    };
                    this[_0xFF0A[714]](_0xFF9E)
                };
                var _0xFFE8 = 16 / this[_0xFF0A[217]];
                var _0x10057 = Math[_0xFF0A[223]](_0xFFE8, 0.16);
                var _0x1000D = _0x11752[_0xFF0A[227]] >= _0xFFE8 || _0x11493[_0xFF0A[739]];
                if (this[_0xFF0A[733]]) {
                    this[_0xFF0A[733]][_0xFF0A[260]] = _0x114B8[_0xFF0A[740]] >= _0xFFC3 && _0x1000D;
                    if (this[_0xFF0A[733]][_0xFF0A[260]]) {
                        this[_0xFF0A[733]][_0xFF0A[227]][_0xFF0A[712]](_0x10057);
                        this[_0xFF0A[733]][_0xFF0A[202]] = -Math[_0xFF0A[240]](this[_0xFF0A[733]][_0xFF0A[196]] / 2);
                        if (!_0xFF9E[_0xFF0A[741]]) {
                            this[_0xFF0A[733]][_0xFF0A[205]] = -Math[_0xFF0A[240]](this[_0xFF0A[733]][_0xFF0A[199]] / 2)
                        } else {
                            this[_0xFF0A[733]][_0xFF0A[205]] = _0x102F1 - Math[_0xFF0A[240]](this[_0xFF0A[733]][_0xFF0A[199]] / 2)
                        };
                        if (_0xFF9E[_0xFF0A[742]] == 1 && _0x113DA[0] != null) {
                            var _0x1007C = _0x113DA[0][_0xFF0A[738]]();
                            this[_0xFF0A[734]][_0xFF0A[227]][_0xFF0A[712]](this[_0xFF0A[733]][_0xFF0A[681]][_0xFF0A[196]] / _0x1007C[_0xFF0A[196]], this[_0xFF0A[733]][_0xFF0A[681]][_0xFF0A[199]] / _0x1007C[_0xFF0A[199]]);
                            this[_0xFF0A[734]][_0xFF0A[681]] = _0x1007C
                        }
                    }
                };
                if (_0x11493[_0xFF0A[743]] && _0xFFC3 <= _0x117C1[_0xFF0A[479]] && _0x1000D) {
                    var _0xFF54 = this[_0xFF0A[672]]();
                    this[_0xFF0A[730]][_0xFF0A[681]] = _0xFF54;
                    this[_0xFF0A[730]][_0xFF0A[227]][_0xFF0A[712]](_0x10057);
                    this[_0xFF0A[730]][_0xFF0A[202]] = -Math[_0xFF0A[240]](this[_0xFF0A[730]][_0xFF0A[196]] / 2);
                    if (this[_0xFF0A[733]] != null) {
                        this[_0xFF0A[730]][_0xFF0A[205]] = this[_0xFF0A[733]][_0xFF0A[205]] + Math[_0xFF0A[240]](this[_0xFF0A[730]][_0xFF0A[199]] / 1.2)
                    } else {
                        this[_0xFF0A[730]][_0xFF0A[205]] = -Math[_0xFF0A[240]](this[_0xFF0A[730]][_0xFF0A[199]] / 1.2)
                    };
                    this[_0xFF0A[730]][_0xFF0A[260]] = true
                } else {
                    this[_0xFF0A[730]][_0xFF0A[260]] = false
                };
                if ((_0xFF9E[_0xFF0A[426]] & 4) == 4) {
                    if (!this[_0xFF0A[744]]) {
                        this[_0xFF0A[744]] = new _0x116E3[_0xFF0A[27]](_0x1180B);
                        this[_0xFF0A[744]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                        this[_0xFF0A[744]][_0xFF0A[196]] = _0x102A7;
                        this[_0xFF0A[744]][_0xFF0A[199]] = _0x102A7;
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[744]])
                    }
                } else {
                    if (this[_0xFF0A[744]]) {
                        this[_0xFF0A[744]][_0xFF0A[248]][_0xFF0A[247]](this[_0xFF0A[744]]);
                        this[_0xFF0A[744]][_0xFF0A[249]]();
                        this[_0xFF0A[744]] = null
                    }
                };
                if ((_0xFF9E[_0xFF0A[426]] & 1) == 1) {
                    if (!this[_0xFF0A[745]]) {
                        this[_0xFF0A[745]] = new _0x116E3[_0xFF0A[27]](_0x11830);
                        this[_0xFF0A[745]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                        this[_0xFF0A[745]][_0xFF0A[196]] = _0x102A7;
                        this[_0xFF0A[745]][_0xFF0A[199]] = _0x102A7;
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[745]])
                    }
                } else {
                    if (this[_0xFF0A[745]]) {
                        this[_0xFF0A[745]][_0xFF0A[248]][_0xFF0A[247]](this[_0xFF0A[745]]);
                        this[_0xFF0A[745]][_0xFF0A[249]]();
                        this[_0xFF0A[745]] = null
                    }
                };
                this[_0xFF0A[707]][_0xFF0A[227]][_0xFF0A[712]](this[_0xFF0A[217]] / _0x102CC);
                this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]]);
                break;
            case 3:
                if (this[_0xFF0A[706]]) {
                    if (!this[_0xFF0A[746]]) {
                        this[_0xFF0A[746]] = new _0x116E3[_0xFF0A[27]]();
                        this[_0xFF0A[746]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                        this[_0xFF0A[746]][_0xFF0A[196]] = 128;
                        this[_0xFF0A[746]][_0xFF0A[199]] = 128;
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[746]])
                    };
                    if (_0x106B3[_0xFF0A[720]]) {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x106B3[_0xFF0A[720]]
                    } else {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x11EB1
                    };
                    this[_0xFF0A[706]] = false
                };
                this[_0xFF0A[707]][_0xFF0A[227]][_0xFF0A[712]](this[_0xFF0A[217]] / 64);
                this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]]);
                break;
            case 4:
                if (this[_0xFF0A[706]]) {
                    if (!this[_0xFF0A[746]]) {
                        this[_0xFF0A[746]] = new _0x116E3[_0xFF0A[27]]();
                        this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[746]])
                    };
                    if (_0x106B3[_0xFF0A[721]]) {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x106B3[_0xFF0A[721]]
                    } else {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x11ED6
                    };
                    if (_0x10972[_0xFF0A[35]] && _0x10972[_0xFF0A[747]] && !_0x11493[_0xFF0A[186]] && !_0x106B3[_0xFF0A[721]]) {
                        _0x10972[_0xFF0A[748]](this)
                    } else {
                        this[_0xFF0A[749]]()
                    };
                    this[_0xFF0A[706]] = false
                };
                if (!_0x106B3[_0xFF0A[721]] && _0x10972[_0xFF0A[35]]) {
                    if (this[_0xFF0A[217]] >= 200 && !_0x11493[_0xFF0A[186]]) {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x11EFB
                    } else {
                        this[_0xFF0A[746]][_0xFF0A[681]] = _0x11ED6
                    }
                };
                this[_0xFF0A[707]][_0xFF0A[227]][_0xFF0A[712]](this[_0xFF0A[217]] / 64);
                this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]]);
                break;
            case 5:
                if (this[_0xFF0A[706]]) {
                    this[_0xFF0A[746]] = new _0x116E3[_0xFF0A[27]](_0x1187A[this[_0xFF0A[438]]][_0xFF0A[681]]);
                    this[_0xFF0A[746]][_0xFF0A[717]][_0xFF0A[712]](0.5);
                    this[_0xFF0A[746]][_0xFF0A[196]] = this[_0xFF0A[217]] * 2;
                    this[_0xFF0A[746]][_0xFF0A[199]] = this[_0xFF0A[217]] * 2;
                    this[_0xFF0A[707]][_0xFF0A[28]](this[_0xFF0A[746]]);
                    this[_0xFF0A[706]] = false
                };
                this[_0xFF0A[707]][_0xFF0A[203]][_0xFF0A[712]](this[_0xFF0A[202]], this[_0xFF0A[205]]);
                break
            }
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[749]] = function () {
            this[_0xFF0A[746]][_0xFF0A[717]][_0xFF0A[712]](0.5);
            this[_0xFF0A[746]][_0xFF0A[196]] = 128;
            this[_0xFF0A[746]][_0xFF0A[199]] = 128
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[439]] = function () {
            if (!this[_0xFF0A[707]]) {
                this[_0xFF0A[707]] = new _0x116E3[_0xFF0A[24]]();
                this[_0xFF0A[707]][_0xFF0A[539]] = this;
                this[_0xFF0A[706]] = true;
                if (this[_0xFF0A[444]] != 0) {
                    _0x10316[_0xFF0A[28]](this[_0xFF0A[707]])
                } else {
                    _0x109E1[_0xFF0A[28]](this[_0xFF0A[707]])
                }
            }
        };
        _0x1025D[_0xFF0A[293]][_0xFF0A[336]] = function () {
            _0x108B9[_0xFF0A[336]](this);
            if (this[_0xFF0A[707]]) {
                this[_0xFF0A[707]][_0xFF0A[248]][_0xFF0A[247]](this[_0xFF0A[707]]);
                this[_0xFF0A[707]][_0xFF0A[539]] = null;
                this[_0xFF0A[707]][_0xFF0A[249]]({
                    children: true
                });
                this[_0xFF0A[707]] = null
            };
            if (this[_0xFF0A[507]]) {
                this[_0xFF0A[507]][_0xFF0A[249]]();
                this[_0xFF0A[507]] = null
            }
        };

        function _0x1179C() {
            this[_0xFF0A[214]] = {};
            this[_0xFF0A[750]];
            this[_0xFF0A[751]] = [];
            this[_0xFF0A[177]] = function () {
                this[_0xFF0A[750]] = new _0x11777(0);
                this[_0xFF0A[750]][_0xFF0A[145]] = _0xFF0A[1];
                this[_0xFF0A[750]][_0xFF0A[424]] = 0xaaaaaa
            };
            this[_0xFF0A[331]] = function (_0xFF2F) {
                this[_0xFF0A[214]][_0xFF2F[_0xFF0A[131]]] = _0xFF2F
            };
            this[_0xFF0A[443]] = function (_0xFF2F) {
                this[_0xFF0A[214]][_0xFF2F][_0xFF0A[336]]();
                delete this[_0xFF0A[214]][_0xFF2F]
            };
            this[_0xFF0A[337]] = function () {
                for (var _0xFF2F in this[_0xFF0A[214]]) {
                    this[_0xFF0A[443]](_0xFF2F)
                }
            };
            this[_0xFF0A[423]] = function (_0xFF2F) {
                return this[_0xFF0A[214]][_0xFF2F]
            };
            this[_0xFF0A[726]] = function (_0xFF54) {
                var _0xFF2F = this[_0xFF0A[214]][_0xFF54];
                return _0xFF2F != null ? _0xFF2F : this[_0xFF0A[750]]
            };
            this[_0xFF0A[431]] = function (_0xFF2F) {
                _0xFF2F[_0xFF0A[731]] = true;
                this[_0xFF0A[751]][_0xFF0A[170]](_0xFF2F)
            };
            this[_0xFF0A[243]] = function () {
                while (this[_0xFF0A[751]][_0xFF0A[9]] > 0) {
                    var _0xFF2F = this[_0xFF0A[751]][_0xFF0A[752]]();
                    _0xFF2F[_0xFF0A[731]] = false
                }
            };
            this[_0xFF0A[177]]()
        }

        function _0x11777(_0xFF2F) {
            this[_0xFF0A[131]] = _0xFF2F;
            this[_0xFF0A[145]];
            this[_0xFF0A[430]];
            this[_0xFF0A[753]];
            this[_0xFF0A[424]];
            this[_0xFF0A[427]] = _0xFF0A[702];
            this[_0xFF0A[426]] = 0;
            this[_0xFF0A[742]] = 0;
            this[_0xFF0A[741]] = false;
            this[_0xFF0A[668]] = null;
            this[_0xFF0A[731]] = false;
            this[_0xFF0A[715]] = 0;
            this[_0xFF0A[425]] = function (_0xFF2F) {
                this[_0xFF0A[426]] = _0xFF2F;
                if ((this[_0xFF0A[426]] & 8) == 8) {
                    this[_0xFF0A[715]] = 1
                } else {
                    if ((this[_0xFF0A[426]] & 16) == 16) {
                        this[_0xFF0A[715]] = 2
                    } else {
                        this[_0xFF0A[715]] = 0
                    }
                }
            };
            this[_0xFF0A[428]] = function (_0xFF2F) {
                if (_0xFF2F >= 64) {
                    _0xFF2F -= 64;
                    this[_0xFF0A[741]] = true
                } else {
                    this[_0xFF0A[741]] = false
                };
                this[_0xFF0A[742]] = _0xFF2F
            };
            this[_0xFF0A[732]] = function (_0xFF2F) {
                if (_0xFF2F || this[_0xFF0A[668]] == null) {
                    if (!this[_0xFF0A[668]]) {
                        this[_0xFF0A[668]] = new _0x116E3[_0xFF0A[705]](this[_0xFF0A[145]], {
                            fontFamily: _0xFF0A[700],
                            fontWeight: _0xFF0A[701],
                            fontSize: 54,
                            fill: this[_0xFF0A[427]],
                            stroke: _0xFF0A[703],
                            strokeThickness: _0x114B8[_0xFF0A[704]]
                        })
                    } else {
                        this[_0xFF0A[668]][_0xFF0A[462]] = this[_0xFF0A[145]];
                        this[_0xFF0A[668]][_0xFF0A[363]][_0xFF0A[754]] = this[_0xFF0A[427]];
                        this[_0xFF0A[668]][_0xFF0A[755]]()
                    };
                    this[_0xFF0A[668]][_0xFF0A[196]]
                };
                return this[_0xFF0A[668]]
            };
            this[_0xFF0A[429]] = function (_0xFF79, _0xFF54) {
                if (_0xFF79[_0xFF0A[9]] == 0) {
                    return null
                };
                var _0xFFC3 = _0xFF79[_0xFF0A[756]](_0xFF0A[483]);
                if (_0xFFC3 != -1) {
                    var _0xFF2F = _0xFF79[_0xFF0A[756]](_0xFF0A[560], _0xFFC3);
                    if (_0xFF2F != -1) {
                        _0xFF79 = _0xFF79[_0xFF0A[757]](_0xFFC3 + 1, _0xFF2F)
                    }
                };
                var _0xFF9E = _0xFF79[_0xFF0A[143]]();
                if (!_0xFF54) {
                    _0xFF9E = _0xFF9E[_0xFF0A[758]](/#/g, _0xFF0A[1])
                };
                if (_0xFF9E[_0xFF0A[9]] != 0 && _0xFF9E != this[_0xFF0A[430]]) {
                    this[_0xFF0A[430]] = _0xFF9E;
                    this[_0xFF0A[753]] = null
                }
            };
            this[_0xFF0A[725]] = function () {
                if (this[_0xFF0A[753]] != null) {
                    return this[_0xFF0A[753]]
                };
                if (this[_0xFF0A[430]] != null) {
                    if (_0x11E42[this[_0xFF0A[430]]] != null || this[_0xFF0A[430]][_0xFF0A[206]](0) == _0xFF0A[13]) {
                        if (!(_0x11E42[this[_0xFF0A[430]]] > _0x11E67[_0xFF0A[175]])) {
                            _0x11E42[this[_0xFF0A[430]]] = _0x11E67[_0xFF0A[759]];
                            if (this[_0xFF0A[430]][_0xFF0A[206]](0) == _0xFF0A[13]) {
                                var _0xFF79 = this[_0xFF0A[430]];
                                var _0xFF2F = this;
                                gifFrames({
                                    url: _0xFF0A[762] + _0xFF79[_0xFF0A[757]](1) + _0xFF0A[763],
                                    frames: _0xFF0A[371],
                                    cumulative: false,
                                    outputType: _0xFF0A[69]
                                })[_0xFF0A[357]](function (_0xFF2F) {
                                    var _0xFF54 = new _0x10C31();
                                    _0xFF54[_0xFF0A[760]](_0xFF2F);
                                    _0x11E42[_0xFF79] = _0x11E67[_0xFF0A[761]];
                                    _0x11DF8[_0xFF79] = _0xFF54
                                })[_0xFF0A[355]](function (_0xFF54) {
                                    _0xFF2F[_0xFF0A[430]] = null
                                });
                                console[_0xFF0A[193]](this[_0xFF0A[430]])
                            } else {
                                var _0xFF54 = new Image();
                                _0xFF54[_0xFF0A[764]] = _0xFF0A[1];
                                var _0xFF79 = this[_0xFF0A[430]];
                                _0xFF54[_0xFF0A[139]](_0xFF0A[765], function () {
                                    var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[69]);
                                    _0xFF2F[_0xFF0A[196]] = 512;
                                    _0xFF2F[_0xFF0A[199]] = 512;
                                    var _0xFF9E = _0xFF2F[_0xFF0A[73]](_0xFF0A[72]);
                                    _0xFF9E[_0xFF0A[766]]();
                                    _0xFF9E[_0xFF0A[767]](256, 256, 256, 0, _0x11699, false);
                                    _0xFF9E[_0xFF0A[768]]();
                                    _0xFF9E[_0xFF0A[769]]();
                                    _0xFF9E[_0xFF0A[770]](_0xFF54, 0, 0, 512, 512);
                                    var _0xFFC3 = _0x116E3[_0xFF0A[26]][_0xFF0A[771]](_0xFF2F);
                                    _0x11E42[_0xFF79] = _0x11E67[_0xFF0A[761]];
                                    _0x11DF8[_0xFF79] = _0xFFC3
                                });
                                _0xFF54[_0xFF0A[139]](_0xFF0A[11], function () {
                                    delete _0x11E42[_0xFF79]
                                });
                                _0xFF54[_0xFF0A[772]] = _0xFF0A[773] + this[_0xFF0A[430]] + _0xFF0A[774]
                            }
                        } else {
                            if (_0x11E42[this[_0xFF0A[430]]] == _0x11E67[_0xFF0A[761]]) {
                                this[_0xFF0A[753]] = _0x11DF8[this[_0xFF0A[430]]];
                                return this[_0xFF0A[753]]
                            }
                        }
                    } else {
                        this[_0xFF0A[430]] = null
                    }
                };
                return null
            };
            this[_0xFF0A[336]] = function () {
                if (this[_0xFF0A[668]]) {
                    this[_0xFF0A[668]][_0xFF0A[249]]()
                }
            }
        }

        function _0x108DE() {
            this[_0xFF0A[214]] = {};
            this[_0xFF0A[725]] = function (_0xFF2F) {
                if (!_0xFF2F[_0xFF0A[723]]) {
                    return
                };
                if (this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]] == null) {
                    this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]] = {
                        count: 1,
                        cache: this[_0xFF0A[775]](_0xFF2F)
                    }
                } else {
                    this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]][_0xFF0A[776]] = this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]][_0xFF0A[776]] + 1
                };
                return this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]][_0xFF0A[507]]
            };
            this[_0xFF0A[336]] = function (_0xFF2F) {
                if (_0xFF2F[_0xFF0A[724]]) {
                    _0xFF2F[_0xFF0A[724]][_0xFF0A[681]] = _0x116E3[_0xFF0A[26]][_0xFF0A[25]];
                    if (this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]] != null) {
                        var _0xFF54 = this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]];
                        _0xFF54[_0xFF0A[776]] = _0xFF54[_0xFF0A[776]] - 1;
                        if (_0xFF54[_0xFF0A[776]] <= 0) {
                            delete this[_0xFF0A[214]][_0xFF2F[_0xFF0A[723]]];
                            _0xFF54[_0xFF0A[507]][_0xFF0A[249]]()
                        }
                    }
                }
            };
            this[_0xFF0A[775]] = function (_0xFF9E, _0xFFC3) {
                var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[69]);
                var _0xFF79 = _0xFF2F[_0xFF0A[73]](_0xFF0A[72]);
                _0xFF2F[_0xFF0A[196]] = 32;
                _0xFF2F[_0xFF0A[199]] = 32;
                _0xFF79[_0xFF0A[770]](_0x10928[_0xFF9E[_0xFF0A[430]]], 0, 0, 32, 32);
                _0xFF79[_0xFF0A[777]] = _0xFF0A[778];
                _0xFF79[_0xFF0A[465]] = _0xFF9E[_0xFF0A[437]];
                _0xFF79[_0xFF0A[779]](0, 0, 32, 32);
                _0xFF79[_0xFF0A[754]]();
                var _0xFF54 = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF2F);
                _0xFF54[_0xFF0A[781]] = true;
                _0xFF54[_0xFF0A[196]];
                return _0xFF54
            }
        }
        const _0x108B9 = new _0x108DE();

        function _0x11527() {}
        _0x11527[_0xFF0A[293]][_0xFF0A[352]] = function () {
            var _0xFF54 = _0xFF0A[782] + version;
            var _0xFF2F = new ArrayBuffer(1 + _0xFF54[_0xFF0A[9]] + 1 + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 255);
            _0xFF79[_0xFF0A[783]](1, 6);
            _0x12204(2, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[301]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1 + ((_0xFF54[_0xFF0A[9]] + 1) * 2));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 0);
            _0x121DF(1, _0xFF79, _0xFF54);
            if (_0x11493[_0xFF0A[784]]) {
                _0xFF79[_0xFF0A[783]](2 + (_0xFF54[_0xFF0A[9]] * 2) + 1, 1)
            };
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[343]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[231]] = function (_0xFF79, _0xFF9E) {
            var _0xFF2F = new ArrayBuffer(9);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54[_0xFF0A[783]](0, 16);
            _0xFF54[_0xFF0A[785]](1, _0xFF79, true);
            _0xFF54[_0xFF0A[785]](5, _0xFF9E, true);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[123]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, _0xFF54 ? 3 : 4);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[292]] = function () {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54[_0xFF0A[783]](0, 71);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[309]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 1);
            if (_0xFF54) {
                _0xFF79[_0xFF0A[786]](1, _0xFF54, true)
            };
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[787]] = function (_0xFF79, _0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1 + ((_0xFF79[_0xFF0A[9]] + 1) * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E[_0xFF0A[783]](0, 72);
            _0xFF9E[_0xFF0A[783]](1, _0xFF54);
            _0x121DF(2, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[502]] = function (_0xFF2F) {
            var _0xFF54 = new ArrayBuffer(2);
            var _0xFF79 = new DataView(_0xFF54);
            _0xFF79[_0xFF0A[783]](0, 41);
            _0xFF79[_0xFF0A[783]](1, _0xFF2F ? 1 : 0);
            return _0xFF54
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[788]] = function (_0xFF2F, _0xFF79) {
            var _0xFF54 = new ArrayBuffer(6);
            var _0xFF9E = new DataView(_0xFF54);
            _0xFF9E[_0xFF0A[783]](0, 40);
            _0xFF9E[_0xFF0A[783]](1, _0xFF2F);
            _0xFF9E[_0xFF0A[789]](2, _0xFF79, true);
            return _0xFF54
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[454]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + _0xFF54[_0xFF0A[9]] + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 42);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[790]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 103);
            _0xFF79[_0xFF0A[786]](1, _0xFF54, true);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[791]] = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(5 + ((_0xFF79[_0xFF0A[9]] + 1) * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E[_0xFF0A[783]](0, 73);
            _0xFF9E[_0xFF0A[789]](1, _0xFF54, true);
            _0x121DF(5, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[792]] = function (_0xFF54) {
            var _0xFF79 = !_0xFF54 ? 1 : _0xFF54[_0xFF0A[9]] + 1;
            var _0xFF2F = new ArrayBuffer(1 + 6 + (_0x11F8F[_0xFF0A[793]][_0xFF0A[9]] + 1) + _0xFF79);
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E[_0xFF0A[783]](0, 10);
            _0xFF9E[_0xFF0A[783]](1, _0x11F8F[_0xFF0A[427]][_0xFF0A[794]]);
            _0xFF9E[_0xFF0A[783]](2, _0x11F8F[_0xFF0A[427]][_0xFF0A[795]]);
            _0xFF9E[_0xFF0A[783]](3, _0x11F8F[_0xFF0A[427]][_0xFF0A[796]]);
            _0xFF9E[_0xFF0A[783]](4, _0x11F8F[_0xFF0A[797]]);
            _0xFF9E[_0xFF0A[783]](5, _0x11F8F[_0xFF0A[742]]);
            _0xFF9E[_0xFF0A[783]](6, _0x11F8F[_0xFF0A[741]] ? 1 : 0);
            _0x12204(7, _0xFF9E, _0x11F8F[_0xFF0A[793]]);
            if (_0xFF79 > 1) {
                _0x12204(8 + _0x11F8F[_0xFF0A[793]][_0xFF0A[9]], _0xFF9E, _0xFF54)
            };
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[353]] = function () {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54[_0xFF0A[783]](0, 104);
            _0xFF54[_0xFF0A[786]](1, _0x11493[_0xFF0A[798]], true);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[799]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 4);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 80);
            _0xFF79[_0xFF0A[783]](1, _0xFF54);
            _0xFF79[_0xFF0A[783]](2, 0);
            _0xFF79[_0xFF0A[786]](3, 0);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[800]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 90);
            _0xFF79[_0xFF0A[783]](1, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[801]] = function () {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54[_0xFF0A[783]](0, 81);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[802]] = function () {
            var _0xFF2F = new ArrayBuffer(1 + 1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54[_0xFF0A[783]](0, 93);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[803]] = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(1 + 4 + (_0xFF79[_0xFF0A[9]] * 2) + 2);
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E[_0xFF0A[783]](0, 94);
            _0xFF9E[_0xFF0A[789]](1, _0xFF54, true);
            _0x121DF(5, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[804]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + (_0xFF54[_0xFF0A[9]] + 1));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 100);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[356]] = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + (_0xFF54[_0xFF0A[9]] + 1));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79[_0xFF0A[783]](0, 101);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[663]] = function (_0xFF54, _0xFF79, _0xFF9E) {
            var _0xFF2F = new ArrayBuffer(1 + 3);
            var _0xFFC3 = new DataView(_0xFF2F);
            _0xFFC3[_0xFF0A[783]](0, 91);
            _0xFFC3[_0xFF0A[783]](1, _0xFF54);
            if (_0xFF54 == _0x10722[_0xFF0A[588]] || _0xFF54 == _0x10722[_0xFF0A[596]]) {
                _0xFFC3[_0xFF0A[786]](2, _0xFF79, false)
            } else {
                if (_0xFF54 == _0x10722[_0xFF0A[598]]) {
                    _0xFFC3[_0xFF0A[805]](2, _0xFF79, false)
                } else {
                    _0xFFC3[_0xFF0A[783]](2, _0xFF79);
                    _0xFFC3[_0xFF0A[783]](3, _0xFF9E)
                }
            };
            return _0xFF2F
        };
        _0x11527[_0xFF0A[293]][_0xFF0A[806]] = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(1 + 3 + (_0xFF79[_0xFF0A[9]] * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E[_0xFF0A[783]](0, 92);
            _0xFF9E[_0xFF0A[783]](1, _0xFF54);
            _0x121DF(2, _0xFF9E, _0xFF79);
            return _0xFF2F
        };

        function _0x12204(_0xFF54, _0xFF9E, _0xFF79) {
            for (var _0xFF2F = 0; _0xFF2F < _0xFF79[_0xFF0A[9]]; _0xFF2F++) {
                _0xFF9E[_0xFF0A[783]](_0xFF54, _0xFF79[_0xFF0A[807]](_0xFF2F));
                _0xFF54++
            };
            _0xFF9E[_0xFF0A[783]](_0xFF54, 0)
        }

        function _0x121DF(_0xFF54, _0xFF9E, _0xFF79) {
            for (var _0xFF2F = 0; _0xFF2F < _0xFF79[_0xFF0A[9]]; _0xFF2F++) {
                _0xFF9E[_0xFF0A[786]](_0xFF54, _0xFF79[_0xFF0A[807]](_0xFF2F), true);
                _0xFF54 += 2
            };
            _0xFF9E[_0xFF0A[786]](_0xFF54, 0, true)
        }

        function _0x11958(_0xFF79) {
            var _0xFF54 = _0xFF0A[1];
            while (true) {
                var _0xFF2F = _0xFF79[_0xFF0A[386]](_0xFF79[_0xFF0A[387]]);
                _0xFF79[_0xFF0A[387]]++;
                if (_0xFF2F == 0) {
                    break
                };
                _0xFF54 += String[_0xFF0A[808]](_0xFF2F)
            };
            return _0xFF54
        }

        function _0x11933(_0xFF79) {
            var _0xFF54 = _0xFF0A[1];
            while (true) {
                var _0xFF2F = _0xFF79[_0xFF0A[422]](_0xFF79[_0xFF0A[387]], true);
                _0xFF79[_0xFF0A[387]] += 2;
                if (_0xFF2F == 0) {
                    break
                };
                _0xFF54 += String[_0xFF0A[808]](_0xFF2F)
            };
            return _0xFF54
        }

        function _0x11E8C(_0xFF54) {
            while (true) {
                var _0xFF2F = _0xFF54[_0xFF0A[422]](_0xFF54[_0xFF0A[387]], true);
                _0xFF54[_0xFF0A[387]] += 2;
                if (_0xFF2F == 0) {
                    break
                }
            }
        }

        function _0x10CA0(_0xFF2F, _0xFF54) {
            console[_0xFF0A[11]](_0xFF2F[_0xFF0A[809]], _0xFF2F[_0xFF0A[810]]);
            if (_0xFF54) {
                switch (_0xFF2F[_0xFF0A[810]]) {
                case _0xFF0A[812]:
                    alert(_0xFF0A[811]);
                    break;
                case _0xFF0A[813]:
                    break;
                default:
                    alert(_0xFF2F[_0xFF0A[809]] + _0xFF0A[527] + _0xFF2F[_0xFF0A[810]] + _0xFF0A[477]);
                    break
                }
            }
        }

        function _0x10213(_0xFF2F) {
            return _0xFF2F[_0xFF0A[206]](0)[_0xFF0A[144]]() + _0xFF2F[_0xFF0A[142]](1)
        }

        function _0x112B2(_0xFF2F) {
            switch (_0xFF2F) {
            case _0xFF0A[815]:
                return _0xFF0A[814];
                break;
            case _0xFF0A[817]:
                return _0xFF0A[816];
                break;
            case _0xFF0A[819]:
                return _0xFF0A[818];
                break;
            default:
                return _0xFF2F;
                break
            }
        }

        function _0x10669(_0xFFE8, _0xFFC3) {
            var _0xFF79 = _0xFF0A[1];
            var _0xFF9E = _0xFF0A[1];
            var _0xFF54 = _0xFF0A[820];
            if (_0xFFC3[_0xFF0A[426]][_0xFF0A[821]]) {
                _0xFF9E = _0xFF0A[822];
                _0xFF79 = _0xFF0A[823];
                _0xFF54 = _0xFF0A[824]
            } else {
                if (_0xFFC3[_0xFF0A[426]][_0xFF0A[825]]) {
                    _0xFF9E = _0xFF0A[826];
                    _0xFF79 = _0xFF0A[827]
                } else {
                    return
                }
            };
            var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[828]);
            _0xFF2F[_0xFF0A[487]] = _0xFF0A[829];
            _0xFF2F[_0xFF0A[131]] = _0xFF0A[830];
            _0xFF2F[_0xFF0A[485]] = _0xFF79;
            _0xFF2F[_0xFF0A[363]][_0xFF0A[362]] = _0xFF54;
            $(_0xFF2F)[_0xFF0A[627]](_0xFF0A[831], _0xFF9E);
            $(_0xFF2F)[_0xFF0A[627]](_0xFF0A[832], _0xFF0A[833]);
            $(_0xFFE8)[_0xFF0A[529]](_0xFF2F)
        }

        function _0x10644(_0xFF54, _0xFF79) {
            var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[828]);
            _0xFF2F[_0xFF0A[487]] = _0xFF0A[829];
            _0xFF2F[_0xFF0A[485]] = _0xFF54;
            _0xFF2F[_0xFF0A[834]](_0xFF0A[831], _0xFF79);
            _0xFF2F[_0xFF0A[834]](_0xFF0A[832], _0xFF0A[833]);
            return _0xFF2F
        }

        function _0x1068E(_0x10110, _0x1017F, _0x10032, _0xFF79) {
            var _0xFFE8 = document[_0xFF0A[360]](_0xFF0A[835]);
            _0xFFE8[_0xFF0A[487]] = _0xFF0A[836];
            var _0xFFC3 = document[_0xFF0A[360]](_0xFF0A[837]);
            _0xFFC3[_0xFF0A[772]] = _0x10110[_0xFF0A[838]];
            _0xFFC3[_0xFF0A[839]] = _0x10110[_0xFF0A[840]];
            _0xFFE8[_0xFF0A[367]](_0xFFC3);
            var _0x1000D = document[_0xFF0A[360]](_0xFF0A[490]);
            _0x1000D[_0xFF0A[487]] = _0xFF0A[841];
            var _0x10135 = document[_0xFF0A[360]](_0xFF0A[490]);
            _0x10135[_0xFF0A[487]] = _0xFF0A[840];
            _0x10135[_0xFF0A[485]] = _0x10110[_0xFF0A[840]];
            _0x1000D[_0xFF0A[367]](_0x10135);
            _0x10669(_0x10135, _0x10110);
            var _0x100EB = document[_0xFF0A[360]](_0xFF0A[490]);
            var _0x10057 = false;
            var _0x100C6 = null;
            if (_0x10032) {
                _0x100C6 = _0x10213(_0x10110[_0xFF0A[843]][_0xFF0A[842]]);
                if ((_0x10110[_0xFF0A[843]][_0xFF0A[844]] + (1000 * 60)) < new Date()[_0xFF0A[845]]() || _0x10110[_0xFF0A[843]][_0xFF0A[131]] === undefined) {
                    _0x100EB[_0xFF0A[487]] = _0xFF0A[846];
                    _0x100EB[_0xFF0A[485]] = _0xFF0A[847]
                } else {
                    _0x10057 = true;
                    _0x100EB[_0xFF0A[487]] = _0xFF0A[848] + (_0x10110[_0xFF0A[843]][_0xFF0A[849]] === _0xFF0A[850] ? _0xFF0A[851] : _0xFF0A[279]);
                    _0x100EB[_0xFF0A[485]] = (_0x10110[_0xFF0A[843]][_0xFF0A[849]] === _0xFF0A[850] ? _0xFF0A[852] : _0xFF0A[853]) + _0x10110[_0xFF0A[843]][_0xFF0A[166]] + _0xFF0A[854] + _0x100C6 + _0xFF0A[855] + _0x10110[_0xFF0A[843]][_0xFF0A[131]] + _0xFF0A[477]
                }
            } else {
                _0x100EB[_0xFF0A[487]] = _0xFF0A[856];
                _0x100EB[_0xFF0A[485]] = _0xFF0A[857]
            };
            _0x1000D[_0xFF0A[367]](_0x100EB);
            var _0xFF54 = document[_0xFF0A[360]](_0xFF0A[490]);
            _0xFF54[_0xFF0A[487]] = _0xFF0A[858];
            var _0x1015A = _0x10644(_0xFF0A[859], _0xFF0A[860]);
            _0x1015A[_0xFF0A[139]](_0xFF0A[622], function (_0xFF2F) {
                _0x11140(_0x10110, $(_0xFF0A[861]))
            });
            _0xFF54[_0xFF0A[529]](_0x1015A);
            if (_0x10032 && _0x10057) {
                var _0x1007C = _0x10644(_0xFF0A[117], _0xFF0A[862]);
                _0x1007C[_0xFF0A[139]](_0xFF0A[622], function (_0xFF2F) {
                    _0x11BCD(_0x100C6);
                    _0x11752[_0xFF0A[296]]();
                    _0x11752[_0xFF0A[152]](_0x10110[_0xFF0A[840]] + _0xFF0A[863] + _0x10110[_0xFF0A[843]][_0xFF0A[131]]);
                    _0x10D59($(_0xFF0A[861]))
                });
                _0xFF54[_0xFF0A[367]](_0x1007C)
            };
            if (!_0x10032) {
                var _0xFF9E = _0x10644(_0xFF0A[864], _0xFF0A[865]);
                _0xFF9E[_0xFF0A[866]] = false;
                _0xFF9E[_0xFF0A[139]](_0xFF0A[622], function (_0xFF54) {
                    if (_0xFF9E[_0xFF0A[866]]) {
                        return
                    };
                    _0xFF9E[_0xFF0A[866]] = true;
                    firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                        fetch(_0xFF2F + _0xFF0A[867], {
                            method: _0xFF0A[159],
                            headers: {
                                "Content-Type": _0xFF0A[868]
                            },
                            body: JSON[_0xFF0A[54]]({
                                token: _0xFF54,
                                target: _0x10110[_0xFF0A[536]],
                                action: 2
                            })
                        })[_0xFF0A[357]]((_0xFF2F) => {
                            return _0xFF2F[_0xFF0A[160]]()
                        })[_0xFF0A[357]]((_0xFF2F) => {
                            if (_0xFF2F[_0xFF0A[810]] !== 200) {
                                alert(_0xFF2F[_0xFF0A[809]])
                            };
                            _0xFF9E[_0xFF0A[866]] = false
                        })[_0xFF0A[355]]((_0xFF2F) => {
                            alert(_0xFF2F);
                            _0xFF9E[_0xFF0A[866]] = false
                        })
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        _0x10CA0(_0xFF2F, true);
                        _0xFF9E[_0xFF0A[866]] = false
                    })
                });
                _0xFF54[_0xFF0A[367]](_0xFF9E)
            };
            var _0x100A1 = _0x10644(_0xFF0A[18], _0xFF0A[869]);
            _0x100A1[_0xFF0A[866]] = false;
            _0x100A1[_0xFF0A[139]](_0xFF0A[622], function (_0xFF54) {
                if (_0x100A1[_0xFF0A[866]] || !confirm(_0xFF0A[870] + _0x10110[_0xFF0A[840]] + _0xFF0A[871])) {
                    return
                };
                _0x100A1[_0xFF0A[866]] = true;
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[867], {
                        method: _0xFF0A[159],
                        headers: {
                            "Content-Type": _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54,
                            target: _0x10110[_0xFF0A[536]],
                            action: 4
                        })
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        alert(_0xFF2F[_0xFF0A[809]]);
                        if (_0xFF2F[_0xFF0A[810]] === 200) {
                            firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0x1206D[_0xFF0A[873]][_0x10110[_0xFF0A[536]]])[_0xFF0A[872]]();
                            _0x1206D[_0xFF0A[874]][_0x10110[_0xFF0A[536]]][_0xFF0A[443]]();
                            delete _0x1206D[_0xFF0A[873]][_0x10110[_0xFF0A[536]]];
                            delete _0x1206D[_0xFF0A[874]][_0x10110[_0xFF0A[536]]]
                        };
                        _0x100A1[_0xFF0A[866]] = false
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        alert(_0xFF2F);
                        _0x100A1[_0xFF0A[866]] = false
                    })
                })[_0xFF0A[355]]((_0xFF2F) => {
                    _0x10CA0(_0xFF2F, true);
                    _0x100A1[_0xFF0A[866]] = false
                })
            });
            _0xFF54[_0xFF0A[367]](_0x100A1);
            _0x1000D[_0xFF0A[367]](_0xFF54);
            _0xFFE8[_0xFF0A[367]](_0x1000D);
            if (_0xFF79) {
                return _0x1017F[_0xFF0A[367]](_0xFFE8)
            } else {
                return _0xFFE8
            }
        }

        function _0x11140(_0xFF79, _0xFF54, _0xFF2F) {
            if (_0xFF54) {
                _0x10D59(_0xFF54)
            };
            $(_0xFF0A[875])[_0xFF0A[462]](_0xFF79[_0xFF0A[840]]);
            $(_0xFF0A[876])[_0xFF0A[627]](_0xFF0A[772], _0xFF79[_0xFF0A[838]]);
            $(_0xFF0A[876])[_0xFF0A[627]](_0xFF0A[839], _0xFF79[_0xFF0A[840]]);
            $(_0xFF0A[883])[_0xFF0A[237]](_0xFF0A[877] + _0xFF79[_0xFF0A[879]][_0xFF0A[878]] + _0xFF0A[880] + _0x10A50(_0xFF79[_0xFF0A[879]][_0xFF0A[881]]) + _0xFF0A[4] + _0x10A50(_0xFF79[_0xFF0A[879]][_0xFF0A[882]]) + _0xFF0A[560]);
            if (_0xFF79[_0xFF0A[884]] && _0xFF79[_0xFF0A[884]] > 0 && _0x12023[_0xFF79[_0xFF0A[884]]]) {
                $(_0xFF0A[885])[_0xFF0A[462]](_0x12023[_0xFF79[_0xFF0A[884]]])
            } else {
                $(_0xFF0A[885])[_0xFF0A[462]](_0xFF0A[1])
            };
            $(_0xFF0A[886])[_0xFF0A[872]](_0xFF0A[622]);
            if (_0xFF79[_0xFF0A[536]] == _0x12195[_0xFF0A[536]]) {
                $(_0xFF0A[886])[_0xFF0A[137]](_0xFF0A[622], function () {
                    $(_0xFF0A[118])[_0xFF0A[19]]();
                    _0x12048($(_0xFF0A[119]))
                });
                $(_0xFF0A[886])[_0xFF0A[15]](_0xFF0A[887], _0xFF0A[888])
            } else {
                $(_0xFF0A[886])[_0xFF0A[15]](_0xFF0A[887], _0xFF0A[889])
            };
            if (_0xFF79[_0xFF0A[426]][_0xFF0A[821]]) {
                $(_0xFF0A[876])[_0xFF0A[628]](_0xFF0A[890])
            } else {
                $(_0xFF0A[876])[_0xFF0A[624]](_0xFF0A[890])
            };
            _0x10669($(_0xFF0A[875]), _0xFF79);
            $(_0xFF0A[891])[_0xFF0A[872]](_0xFF0A[622]);
            $(_0xFF0A[891])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0xFF2F) {
                    _0x11D64(_0x11321)
                };
                _0x10D59($(_0xFF0A[118]))
            });
            _0x11D64($(_0xFF0A[118]))
        }

        function _0x111D4(_0xFF54) {
            if (_0x10CC5) {
                return
            };
            var _0xFF79 = $(_0xFF0A[892])[0];
            var _0xFF9E = $(_0xFF0A[892])[1];
            $(_0xFF0A[893])[_0xFF0A[462]](_0xFF54[_0xFF0A[536]]);
            firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0xFF0A[903] + _0xFF54[_0xFF0A[536]])[_0xFF0A[137]](_0xFF0A[147], function (_0xFFE8) {
                if (_0xFFE8[_0xFF0A[148]]() === null) {
                    var _0x1000D = document[_0xFF0A[360]](_0xFF0A[490]);
                    var _0x10032 = document[_0xFF0A[360]](_0xFF0A[361]);
                    _0x1000D[_0xFF0A[487]] = _0xFF0A[894];
                    _0x10032[_0xFF0A[485]] = _0xFF0A[895];
                    _0x1000D[_0xFF0A[367]](_0x10032);
                    _0xFF79[_0xFF0A[367]](_0x1000D);
                    return
                };
                var _0xFF54 = _0xFFE8[_0xFF0A[148]]();
                var _0xFFC3 = false;
                Object[_0xFF0A[445]](_0xFF54)[_0xFF0A[613]]((_0xFFE8) => {
                    var _0x1000D = _0xFF54[_0xFFE8];
                    if (!_0x1000D && !_0xFFC3) {
                        _0xFFC3 = true;
                        firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                            fetch(_0xFF2F + _0xFF0A[900], {
                                method: _0xFF0A[159],
                                headers: {
                                    "Content-Type": _0xFF0A[868]
                                },
                                body: JSON[_0xFF0A[54]]({
                                    token: _0xFF54
                                })
                            })[_0xFF0A[357]]((_0xFF2F) => {
                                return _0xFF2F[_0xFF0A[160]]()
                            })[_0xFF0A[357]]((_0xFF2F) => {
                                if (_0xFF2F[_0xFF0A[810]] === 200) {
                                    _0xFF2F[_0xFF0A[899]][_0xFF0A[898]]((_0xFF54) => {
                                        if (!_0x1206D[_0xFF0A[896]][_0xFF0A[478]](_0xFF54)) {
                                            _0x1206D[_0xFF0A[896]][_0xFF0A[170]](_0xFF54[_0xFF0A[536]])
                                        };
                                        if (_0x1206D[_0xFF0A[874]][_0xFF54[_0xFF0A[536]]]) {
                                            var _0xFF2F = _0x1068E(_0xFF54, _0x1206D[_0xFF0A[874]][_0xFF54[_0xFF0A[536]]], false, false);
                                            _0xFF9E[_0xFF0A[897]](_0xFF2F, _0x1206D[_0xFF0A[874]][_0xFF54[_0xFF0A[536]]]);
                                            _0x1206D[_0xFF0A[874]][_0xFFE8] = _0xFF2F;
                                            return
                                        };
                                        _0x1206D[_0xFF0A[874]][_0xFF54[_0xFF0A[536]]] = _0x1068E(_0xFF54, _0xFF9E, false, true)
                                    })
                                }
                            })
                        })[_0xFF0A[355]]((_0xFF0A) => {
                            return _0x10CA0(_0xFF0A, false)
                        });
                        return
                    };
                    if (!_0x1206D[_0xFF0A[873]][_0xFFE8]) {
                        var _0x10032 = _0xFF0A[901] + _0xFFE8;
                        _0x1206D[_0xFF0A[873]][_0xFFE8] = _0x10032;
                        firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0x10032)[_0xFF0A[137]](_0xFF0A[147], function (_0xFF9E) {
                            if (_0xFF9E[_0xFF0A[148]]() === null) {
                                return
                            };
                            var _0xFF54 = _0xFF9E[_0xFF0A[148]]();
                            _0x1206D[_0xFF0A[902]][_0xFF54[_0xFF0A[536]]] = _0xFF54[_0xFF0A[843]][_0xFF0A[844]];
                            if (_0x1206D[_0xFF0A[896]][_0xFF0A[478]](_0xFFE8)) {
                                _0x1206D[_0xFF0A[896]][_0xFF0A[142]](_0x1206D[_0xFF0A[896]][_0xFF0A[756]](_0xFFE8), 1);
                                _0x1206D[_0xFF0A[874]][_0xFFE8][_0xFF0A[443]]();
                                var _0xFF2F = _0x1068E(_0xFF54, _0x1206D[_0xFF0A[874]][_0xFFE8], true, false);
                                _0xFF79[_0xFF0A[367]](_0xFF2F);
                                _0x1206D[_0xFF0A[874]][_0xFFE8] = _0xFF2F;
                                return
                            };
                            if (_0x1206D[_0xFF0A[874]][_0xFFE8]) {
                                var _0xFF2F = _0x1068E(_0xFF54, _0x1206D[_0xFF0A[874]][_0xFFE8], true, false);
                                _0xFF79[_0xFF0A[897]](_0xFF2F, _0x1206D[_0xFF0A[874]][_0xFFE8]);
                                _0x1206D[_0xFF0A[874]][_0xFFE8] = _0xFF2F;
                                return
                            };
                            _0x1206D[_0xFF0A[874]][_0xFFE8] = _0x1068E(_0xFF54, _0xFF79, true, true)
                        })
                    }
                })
            });
            setInterval(function () {
                for (var _0xFF2F in _0x1206D[_0xFF0A[902]]) {
                    if (!_0x1206D[_0xFF0A[902]][_0xFF0A[904]](_0xFF2F)) {
                        return
                    };
                    var _0xFF9E = _0x1206D[_0xFF0A[902]][_0xFF2F];
                    if ((_0xFF9E + (1000 * 60)) < new Date()[_0xFF0A[845]]() || _0xFF9E === undefined) {
                        var _0xFF79 = _0x1206D[_0xFF0A[874]][_0xFF2F][_0xFF0A[21]][1][_0xFF0A[21]][1];
                        _0xFF79[_0xFF0A[485]] = _0xFF0A[847];
                        _0xFF79[_0xFF0A[487]] = _0xFF0A[846];
                        var _0xFF54 = _0x1206D[_0xFF0A[874]][_0xFF2F][_0xFF0A[21]][1][_0xFF0A[21]][2][_0xFF0A[21]][1];
                        if (_0xFF54[_0xFF0A[486]][_0xFF0A[905]] === _0xFF0A[862]) {
                            _0xFF54[_0xFF0A[443]]()
                        }
                    }
                }
            }, 1000 * 60);
            _0x10CC5 = true
        }

        function _0x1128D() {
            if (_0x10972[_0xFF0A[35]] && !_0x11493[_0xFF0A[186]]) {
                $(_0xFF0A[333])[_0xFF0A[908]](_0xFF0A[906] + _0x10972[_0xFF0A[907]])
            };
            $(_0xFF0A[909])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[146]);
                _0x11BA8(_0xFF2F)
            });
            $(_0xFF0A[914])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x11B83 == null || Date[_0xFF0A[183]]() < _0x10800) {
                    return
                };
                if (Object[_0xFF0A[445]](_0x11752[_0xFF0A[216]])[_0xFF0A[9]] != 0 && this[_0xFF0A[278]] == _0x11B83[_0xFF0A[145]]) {
                    _0x10D59(_0x11321);
                    return
                };
                _0x11752[_0xFF0A[279]] = false;
                if (_0x11F45[_0xFF0A[910]]() && typeof adplayer != _0xFF0A[911]) {
                    aiptag[_0xFF0A[449]][_0xFF0A[913]][_0xFF0A[170]](function () {
                        adplayer[_0xFF0A[912]]()
                    });
                    _0x10D59(_0x11321);
                    _0x10D34();
                    _0x10800 = Date[_0xFF0A[183]]() + 2000
                } else {
                    _0x11752[_0xFF0A[296]]()
                }
            });
            $(_0xFF0A[916])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0xFF54(_0xFF0A[915])
            });
            $(_0xFF0A[918])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0xFF54(_0xFF0A[917])
            });
            $(_0xFF0A[920])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0xFF54(_0xFF0A[919])
            });
            $(_0xFF0A[922])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0xFF54(_0xFF0A[921])
            });
            $(_0xFF0A[926])[_0xFF0A[137]](_0xFF0A[622], function () {
                window[_0xFF0A[925]](_0xFF0A[923], _0xFF0A[924])
            });
            $(_0xFF0A[928])[_0xFF0A[137]](_0xFF0A[622], function () {
                window[_0xFF0A[925]](_0xFF0A[927], _0xFF0A[924])
            });
            $(_0xFF0A[298])[_0xFF0A[929]](function (_0xFF2F) {
                if (_0xFF2F[_0xFF0A[112]] == 13 && $(this)[_0xFF0A[116]](_0xFF0A[115])) {
                    _0x11752[_0xFF0A[296]]()
                }
            });
            $(_0xFF0A[930])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x11B83 == null || Date[_0xFF0A[183]]() < _0x10800) {
                    return
                };
                if (_0x11752[_0xFF0A[279]] && this[_0xFF0A[278]] == _0x11B83[_0xFF0A[145]]) {
                    _0x10D59(_0x11321);
                    return
                };
                _0x11752[_0xFF0A[279]] = true;
                if (_0x11F45[_0xFF0A[910]]() && typeof adplayer != _0xFF0A[911]) {
                    aiptag[_0xFF0A[449]][_0xFF0A[913]][_0xFF0A[170]](function () {
                        adplayer[_0xFF0A[912]]()
                    });
                    _0x10D59(_0x11321);
                    _0x10D34();
                    _0x10800 = Date[_0xFF0A[183]]() + 2000
                } else {
                    _0x11752[_0xFF0A[308]]()
                }
            });
            $(_0xFF0A[80])[_0xFF0A[952]](function (_0xFF2F) {
                var _0xFF9E = $(this)[_0xFF0A[148]]();
                var _0xFFC3 = _0xFF9E[_0xFF0A[3]](_0xFF0A[378]);
                if (_0xFF2F[_0xFF0A[112]] == 13 && $(this)[_0xFF0A[116]](_0xFF0A[115])) {
                    _0x1094D($(this)[_0xFF0A[148]]())
                };
                if (_0xFF9E[_0xFF0A[9]] == 0 || _0xFF9E[_0xFF0A[931]](_0xFF0A[378]) || _0xFF2F[_0xFF0A[112]] == 13) {
                    $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[1]);
                    $(_0xFF0A[932])[_0xFF0A[19]]()
                } else {
                    if (_0xFF9E[_0xFF0A[933]](_0xFF0A[4])) {
                        if (_0xFFC3[_0xFF0A[9]] > 1) {
                            return
                        };
                        $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[934]);
                        var _0xFFE8 = -1;
                        Object[_0xFF0A[942]](_0x105B0)[_0xFF0A[613]]((_0xFF2F) => {
                            if ((_0xFFE8 = _0xFF2F[_0xFF0A[936]][_0xFF0A[935]]((_0xFF2F) => {
                                    return _0xFF2F[_0xFF0A[143]]()[_0xFF0A[933]](_0xFFC3[0][_0xFF0A[757]](1)[_0xFF0A[143]]())
                                })) > -1) {
                                $(_0xFF0A[941])[_0xFF0A[529]](_0xFF0A[937] + _0xFF2F[_0xFF0A[936]][_0xFFE8] + _0xFF0A[938] + _0xFF2F[_0xFF0A[936]] + _0xFF0A[938] + _0xFF2F[_0xFF0A[939]] + _0xFF0A[940])
                            }
                        });
                        if ($(_0xFF0A[941])[_0xFF0A[21]]()[_0xFF0A[9]] == 0) {
                            $(_0xFF0A[932])[_0xFF0A[19]]()
                        } else {
                            $(_0xFF0A[932])[_0xFF0A[17]]()
                        }
                    } else {
                        if (_0xFFC3[_0xFFC3[_0xFF0A[9]] - 1][_0xFF0A[933]](_0xFF0A[2])) {
                            $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[1]);
                            var _0xFF54 = Object[_0xFF0A[445]](_0x10903)[_0xFF0A[943]]((_0xFF2F) => {
                                return _0xFF2F[_0xFF0A[143]]()[_0xFF0A[478]](_0xFFC3[_0xFFC3[_0xFF0A[9]] - 1][_0xFF0A[757]](1)[_0xFF0A[143]]())
                            });
                            var _0xFF79 = Object[_0xFF0A[445]](gifEmoteList)[_0xFF0A[943]]((_0xFF2F) => {
                                return _0xFF2F[_0xFF0A[143]]()[_0xFF0A[478]](_0xFFC3[_0xFFC3[_0xFF0A[9]] - 1][_0xFF0A[757]](1)[_0xFF0A[143]]())
                            });
                            if (_0xFF54[_0xFF0A[9]] === 0 && _0xFF79[_0xFF0A[9]] === 0) {
                                $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[1]);
                                $(_0xFF0A[932])[_0xFF0A[19]]();
                                return
                            } else {
                                $(_0xFF0A[932])[_0xFF0A[17]]()
                            };
                            if (_0xFF54[_0xFF0A[9]] > 0) {
                                $(_0xFF0A[932])[_0xFF0A[529]](_0xFF0A[944]);
                                _0xFF54[_0xFF0A[898]]((_0xFF2F) => {
                                    $(_0xFF0A[932])[_0xFF0A[529]](_0xFF0A[945] + _0xFF2F + _0xFF0A[946] + _0xFF2F + _0xFF0A[947] + _0xFF2F + _0xFF0A[948])
                                })
                            };
                            if (_0xFF79[_0xFF0A[9]] > 0) {
                                $(_0xFF0A[932])[_0xFF0A[529]](_0xFF0A[949]);
                                _0xFF79[_0xFF0A[898]]((_0xFF2F) => {
                                    $(_0xFF0A[932])[_0xFF0A[529]](_0xFF0A[945] + _0xFF2F + _0xFF0A[946] + _0xFF2F + _0xFF0A[950] + _0xFF2F + _0xFF0A[951])
                                })
                            }
                        }
                    }
                }
            });
            $(_0xFF0A[932])[_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                var _0xFF54 = _0x10B2E()[_0xFF0A[3]](_0xFF0A[378]);
                if (_0xFF2F[_0xFF0A[132]][_0xFF0A[953]] === _0xFF0A[954]) {
                    _0x11C86(_0xFF0A[4] + _0xFF2F[_0xFF0A[132]][_0xFF0A[955]][_0xFF0A[21]][0][_0xFF0A[365]] + _0xFF0A[378]);
                    $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[1]);
                    $(_0xFF0A[932])[_0xFF0A[19]]();
                    $(_0xFF0A[80])[_0xFF0A[956]]()
                } else {
                    if (_0xFF2F[_0xFF0A[132]][_0xFF0A[953]] === _0xFF0A[957]) {
                        _0x11C86(_0x10B2E()[_0xFF0A[757]](0, (_0x10B2E()[_0xFF0A[9]] - _0xFF54[_0xFF54[_0xFF0A[9]] - 1][_0xFF0A[9]])) + _0xFF2F[_0xFF0A[132]][_0xFF0A[959]][_0xFF0A[145]][_0xFF0A[958]] + _0xFF0A[378]);
                        $(_0xFF0A[932])[_0xFF0A[237]](_0xFF0A[1]);
                        $(_0xFF0A[932])[_0xFF0A[19]]();
                        $(_0xFF0A[80])[_0xFF0A[956]]()
                    }
                }
            });
            $(_0xFF0A[960])[_0xFF0A[137]](_0xFF0A[577], function () {
                var _0xFF2F = parseInt($(this)[_0xFF0A[148]]());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 90
                };
                _0x11493[_0xFF0A[208]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 25), 250);
                $(_0xFF0A[960])[_0xFF0A[148]](_0x11493[_0xFF0A[208]]);
                $(_0xFF0A[961])[_0xFF0A[148]](_0x11493[_0xFF0A[208]])
            });
            $(_0xFF0A[962])[_0xFF0A[137]](_0xFF0A[577], function () {
                var _0xFF2F = parseInt($(this)[_0xFF0A[148]]());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 100
                };
                _0x11493[_0xFF0A[798]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 50), 200);
                $(_0xFF0A[962])[_0xFF0A[148]](_0x11493[_0xFF0A[798]]);
                $(_0xFF0A[963])[_0xFF0A[148]](_0x11493[_0xFF0A[798]]);
                _0x11752[_0xFF0A[353]]()
            });
            $(_0xFF0A[966])[_0xFF0A[137]](_0xFF0A[577], function () {
                var _0xFF2F = parseInt($(this)[_0xFF0A[148]]());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 100
                };
                _0xFF2F *= 0.01;
                _0x11493[_0xFF0A[964]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 0.5), 1.25);
                $(_0xFF0A[966])[_0xFF0A[148]](Number[_0xFF0A[965]](_0x11493[_0xFF0A[964]] * 100)[_0xFF0A[263]](0));
                $(_0xFF0A[967])[_0xFF0A[148]](_0x11493[_0xFF0A[964]]);
                $(_0xFF0A[970])[_0xFF0A[15]](_0xFF0A[968], _0xFF0A[969] + _0x11493[_0xFF0A[964]] + _0xFF0A[477])
            });
            $(_0xFF0A[975])[_0xFF0A[15]](_0xFF0A[971], _0xFF0A[972] + _0x1190E[Math[_0xFF0A[240]](Math[_0xFF0A[973]]() * _0x1190E[_0xFF0A[9]])] + _0xFF0A[974]);
            $(_0xFF0A[975])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[977])[_0xFF0A[976]]()
            });
            $(_0xFF0A[978])[_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                _0xFFC3(_0xFF2F[_0xFF0A[132]][_0xFF0A[145]] + _0xFF0A[378]);
                $(_0xFF0A[80])[_0xFF0A[956]]()
            });
            (function () {
                var _0xFF2F = document[_0xFF0A[70]](_0xFF0A[979]);
                document[_0xFF0A[70]](_0xFF0A[981])[_0xFF0A[139]](_0xFF0A[980], _0xFF79, false);
                var _0xFFE8, _0x1000D, _0xFFC3, _0xFF9E;

                function _0xFF79(_0xFF79) {
                    _0xFFE8 = _0xFF79[_0xFF0A[107]];
                    _0x1000D = _0xFF79[_0xFF0A[109]];
                    _0xFFC3 = parseInt(document[_0xFF0A[983]][_0xFF0A[982]](_0xFF2F)[_0xFF0A[196]], 10);
                    _0xFF9E = parseInt(document[_0xFF0A[983]][_0xFF0A[982]](_0xFF2F)[_0xFF0A[199]], 10);
                    document[_0xFF0A[985]][_0xFF0A[139]](_0xFF0A[984], _0xFF54, false);
                    document[_0xFF0A[985]][_0xFF0A[139]](_0xFF0A[986], _0x10032, false)
                }

                function _0xFF54(_0xFF54) {
                    _0xFF2F[_0xFF0A[363]][_0xFF0A[196]] = (_0xFFC3 + _0xFF54[_0xFF0A[107]] - _0xFFE8) + _0xFF0A[987];
                    _0xFF2F[_0xFF0A[363]][_0xFF0A[199]] = (_0xFF9E - (_0xFF54[_0xFF0A[109]] - _0x1000D)) + _0xFF0A[987]
                }

                function _0x10032(_0xFF2F) {
                    document[_0xFF0A[985]][_0xFF0A[988]](_0xFF0A[984], _0xFF54, false);
                    document[_0xFF0A[985]][_0xFF0A[988]](_0xFF0A[986], _0x10032, false)
                }
            })();
            $(_0xFF0A[989])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF0A) {
                _0x104D2($(this))
            });
            $(_0xFF0A[990])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF0A) {
                _0x1051C($(this))
            });
            $(_0xFF0A[991])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF0A) {
                _0x104F7($(this))
            });
            $(_0xFF0A[993])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x10D59($(_0xFF0A[992]));
                _0x11D64(_0x11321);
                window[_0xFF0A[925]](_0x12092, _0xFF0A[924])
            });
            $(_0xFF0A[994])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x10D59($(_0xFF0A[992]));
                _0x11D64(_0x11321)
            });
            $(_0xFF0A[995])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[502]](true));
                _0x10D59($(_0xFF0A[505]))
            });
            $(_0xFF0A[996])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[502]](false));
                _0x10D59($(_0xFF0A[505]))
            });
            $(_0xFF0A[1000])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[513])[_0xFF0A[997]]();
                document[_0xFF0A[999]](_0xFF0A[998]);
                $(_0xFF0A[514])[_0xFF0A[19]]()
            });
            $(_0xFF0A[1001])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[631]);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](0, _0xFF2F))
            });
            $(_0xFF0A[1003])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[631]);
                var _0xFF54 = $(_0xFF0A[80])[_0xFF0A[148]]();
                $(_0xFF0A[80])[_0xFF0A[148]](_0xFF0A[1002] + _0xFF2F + _0xFF0A[378] + _0xFF54)
            });
            $(_0xFF0A[1004])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[631]);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[790]](_0xFF2F))
            });
            $(_0xFF0A[1008])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x11752[_0xFF0A[376]] == undefined) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](4, 0));
                    $(_0xFF0A[1006])[_0xFF0A[462]](_0xFF0A[1005])
                } else {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](4, 1));
                    $(_0xFF0A[1006])[_0xFF0A[462]](_0xFF0A[1007])
                }
            });
            $(_0xFF0A[1009])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[268]) + 1;
                if (_0xFF2F >= 0) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](2, _0xFF2F))
                }
            });
            $(_0xFF0A[1010])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[268]) + 1;
                if (_0xFF2F >= 0) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](1, _0xFF2F))
                }
            });
            $(_0xFF0A[1011])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = _0x105D5[_0xFF0A[385]](_0xFF0A[631]);
                if (_0xFF2F >= 0) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[309]](_0xFF2F))
                }
            });
            $(_0xFF0A[1012])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF54 = parseInt(_0x105D5[_0xFF0A[385]](_0xFF0A[631]));
                var _0xFF2F = _0x100C6(_0xFF54);
                _0x11752[_0xFF0A[152]](_0xFF2F)
            });
            $(document)[_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                _0x105D5[_0xFF0A[19]]();
                if (_0xFF2F[_0xFF0A[132]][_0xFF0A[131]] !== _0xFF0A[1013]) {
                    $(_0xFF0A[977])[_0xFF0A[19]]()
                };
                if ($(_0xFF0A[514])[_0xFF0A[15]](_0xFF0A[14]) !== _0xFF0A[16] && _0xFF2F[_0xFF0A[132]][_0xFF0A[131]] !== _0xFF0A[1014]) {
                    $(_0xFF0A[514])[_0xFF0A[19]]()
                }
            });
            $(_0xFF0A[1016])[_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                _0x101A4();
                _0x10D59(_0x11321);
                _0x11D64($(_0xFF0A[1015]))
            });
            $(_0xFF0A[1017])[_0xFF0A[137]](_0xFF0A[577], _0x103F4);
            $(_0xFF0A[1018])[_0xFF0A[137]](_0xFF0A[622], _0x103AA);
            $(_0xFF0A[1019])[_0xFF0A[137]](_0xFF0A[622], _0x103CF);
            $(_0xFF0A[1020])[_0xFF0A[137]](_0xFF0A[622], _0x1043E);
            $(_0xFF0A[1025])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[1021])[_0xFF0A[462]]($(this)[_0xFF0A[462]]());
                $(_0xFF0A[1023])[_0xFF0A[627]](_0xFF0A[1022], $(this)[_0xFF0A[627]](_0xFF0A[131]))[_0xFF0A[148]](_0xFF0A[1]);
                _0x10D59(_0x11321);
                _0x11D64($(_0xFF0A[1024]))
            });
            $(_0xFF0A[1028])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x11493[_0xFF0A[708]]) {
                    _0x10A06()
                };
                var _0xFF54 = $(_0xFF0A[1023])[_0xFF0A[148]]();
                if (_0xFF54) {
                    var _0xFF2F = $(_0xFF0A[1023])[_0xFF0A[627]](_0xFF0A[1022]);
                    if (_0xFF2F[_0xFF0A[206]](0) == _0xFF0A[1026] && _0x11FD9[_0xFF2F] != null) {
                        _0x11CAB(_0xFF2F, _0xFF54)
                    }
                };
                $(_0xFF0A[1027])[_0xFF0A[578]](_0xFF0A[622])
            });
            $(_0xFF0A[1029])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x11493[_0xFF0A[708]]) {
                    _0x10A06()
                };
                var _0xFF2F = $(_0xFF0A[1023])[_0xFF0A[627]](_0xFF0A[1022]);
                if (_0xFF2F[_0xFF0A[206]](0) == _0xFF0A[1026] && _0x11FD9[_0xFF2F] != null) {
                    _0x11CAB(_0xFF2F, _0xFF0A[1])
                }
            });
            $(_0xFF0A[1024])[_0xFF0A[137]](_0xFF0A[1034], false)[_0xFF0A[137]](_0xFF0A[1030], function (_0xFF2F) {
                if (!_0x11493[_0xFF0A[708]]) {
                    _0x10A06()
                };
                var _0xFF79 = $(_0xFF0A[1023])[_0xFF0A[627]](_0xFF0A[1022]);
                if (_0xFF79[_0xFF0A[206]](0) == _0xFF0A[1026] && _0x11FD9[_0xFF79] != null) {
                    var _0xFF54 = _0x10B53(_0xFF2F[_0xFF0A[134]]);
                    if (/\.(jpe?g|png|gif)$/i [_0xFF0A[1031]](_0xFF54[_0xFF0A[145]])) {
                        var _0xFF9E = new FileReader();
                        _0xFF9E[_0xFF0A[139]](_0xFF0A[765], function () {
                            _0x11CAB(_0xFF79, this[_0xFF0A[1032]])
                        }, false);
                        _0xFF9E[_0xFF0A[1033]](_0xFF54)
                    }
                };
                return false
            });
            $(_0xFF0A[1036])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x120B7();
                _0x10D59(_0x11321);
                _0x11D64($(_0xFF0A[1035]))
            });
            $(_0xFF0A[1039])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x11493[_0xFF0A[708]]) {
                    return
                };
                var _0xFF54 = _0xFF0A[1037];
                var _0xFF2F = JSON[_0xFF0A[54]](_0x11FD9, null, 2);
                _0x1084A(_0xFF54, _0xFF2F, _0xFF0A[1038])
            });
            $(_0xFF0A[1041])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[1040])[_0xFF0A[578]](_0xFF0A[622])
            });
            $(_0xFF0A[1040])[_0xFF0A[137]](_0xFF0A[577], function () {
                var _0xFF54 = $(this)[_0xFF0A[580]](_0xFF0A[1042]);
                if (_0xFF54[_0xFF0A[9]] > 0) {
                    var _0xFF2F = _0xFF54[0];
                    _0x11268(_0xFF2F)
                }
            });
            $(_0xFF0A[1043])[_0xFF0A[137]](_0xFF0A[1034], false)[_0xFF0A[137]](_0xFF0A[1030], function (_0xFF2F) {
                var _0xFF54 = _0x10B53(_0xFF2F[_0xFF0A[134]]);
                _0x11268(_0xFF54);
                return false
            });
            $(_0xFF0A[1045])[_0xFF0A[137]](_0xFF0A[577], function () {
                if (!_0x12195 || _0x10AE4) {
                    return
                };
                _0x10AE4 = true;
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[1044], {
                        method: _0xFF0A[159],
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54
                        })
                    })[_0xFF0A[357]](((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    }))[_0xFF0A[357]]((_0xFF2F) => {
                        _0x10AE4 = false;
                        $(this)[_0xFF0A[580]](_0xFF0A[642], _0xFF2F[_0xFF0A[809]])
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        console[_0xFF0A[11]](_0xFF2F);
                        _0x10AE4 = false;
                        alert(_0xFF2F)
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            firebase[_0xFF0A[32]]()[_0xFF0A[1101]](function (_0xFF2F) {
                if (_0xFF2F) {
                    if (!_0x105FA[_0xFF0A[1046]]) {
                        firebase[_0xFF0A[32]]()[_0xFF0A[1047]]()[_0xFF0A[357]](function () {});
                        return
                    };
                    _0x11D1A();
                    if (_0x11752[_0xFF0A[229]]() && firebase[_0xFF0A[32]]()[_0xFF0A[354]] !== null) {
                        firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]](true)[_0xFF0A[357]]((_0xFF2F) => {
                            _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[356]](_0xFF2F))
                        })[_0xFF0A[355]]((_0xFF0A) => {
                            return _0x10CA0(_0xFF0A, true)
                        })
                    };
                    var _0xFF54 = firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0xFF0A[1048] + _0xFF2F[_0xFF0A[536]]);
                    var _0xFF9E = false;
                    _0xFF54[_0xFF0A[137]](_0xFF0A[147], function (_0x10057) {
                        var _0xFFC3 = _0x10057[_0xFF0A[148]]();
                        if (!_0xFFC3) {
                            return
                        };
                        if (!_0xFF9E) {
                            $(_0xFF0A[1049])[_0xFF0A[19]]();
                            $(_0xFF0A[1050])[_0xFF0A[17]]();
                            $(_0xFF0A[1050])[_0xFF0A[627]](_0xFF0A[363], _0xFF0A[1051]);
                            $(_0xFF0A[1045])[_0xFF0A[650]](_0xFF0A[648]);
                            $(_0xFF0A[1045])[_0xFF0A[580]](_0xFF0A[642], _0xFFC3[_0xFF0A[426]][_0xFF0A[602]]);
                            _0xFF9E = true
                        };
                        _0x12195 = _0xFFC3;
                        $(_0xFF0A[1052])[_0xFF0A[627]](_0xFF0A[772], _0xFFC3[_0xFF0A[838]]);
                        $(_0xFF0A[1053])[_0xFF0A[462]](_0xFFC3[_0xFF0A[840]]);
                        _0x10669($(_0xFF0A[1053]), _0xFFC3);
                        $(_0xFF0A[1056])[_0xFF0A[237]](_0xFF0A[877] + _0xFFC3[_0xFF0A[879]][_0xFF0A[878]] + _0xFF0A[1054] + _0x10A50(_0xFFC3[_0xFF0A[879]][_0xFF0A[881]]) + _0xFF0A[4] + _0x10A50(_0xFFC3[_0xFF0A[879]][_0xFF0A[882]]) + _0xFF0A[1055]);
                        $(_0xFF0A[1058])[_0xFF0A[20]](function () {
                            var _0xFF2F = ((_0xFFC3[_0xFF0A[879]][_0xFF0A[881]] / _0xFFC3[_0xFF0A[879]][_0xFF0A[882]]) * 100);
                            $(this)[_0xFF0A[212]]({
                                width: _0xFF2F + _0xFF0A[1057]
                            }, 1200)
                        });
                        if (!_0x11752[_0xFF0A[289]][_0xFF0A[1059]]) {
                            _0x11752[_0xFF0A[289]][_0xFF0A[1059]] = firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0xFF0A[1062] + _0x12195[_0xFF0A[536]])[_0xFF0A[137]](_0xFF0A[147], function (_0xFFC3) {
                                var _0xFF2F = _0xFFC3[_0xFF0A[148]]();
                                if (!_0xFF2F) {
                                    return
                                };
                                _0xFF79 = {};
                                for (var _0xFF54 in _0xFF2F) {
                                    var _0xFF9E = _0xFF2F[_0xFF54];
                                    if (_0xFF9E[_0xFF0A[833]]) {
                                        _0xFF79[_0xFF9E[_0xFF0A[145]]] = new _0x11C17(_0xFF9E[_0xFF0A[145]], _0xFF9E[_0xFF0A[300]] + _0xFF0A[2] + _0xFF9E[_0xFF0A[1060]], _0xFF0A[1061], _0xFF9E[_0xFF0A[166]], _0xFF9E[_0xFF0A[146]], _0xFF9E[_0xFF0A[167]], 0)
                                    }
                                };
                                _0x1118A();
                                if (_0x11B83 != null) {
                                    _0x11BCD(_0x11B83[_0xFF0A[145]])
                                }
                            })
                        };
                        if (_0xFFC3[_0xFF0A[426]][_0xFF0A[1063]] && !_0x11752[_0xFF0A[289]][_0xFF0A[1064]]) {
                            _0x11752[_0xFF0A[289]][_0xFF0A[1064]] = firebase[_0xFF0A[1079]]()[_0xFF0A[1078]](_0xFF0A[1077])[_0xFF0A[1076]](_0x12195[_0xFF0A[536]])[_0xFF0A[1075]]((_0xFF2F) => {
                                if (_0xFF2F[_0xFF0A[1065]]) {
                                    $(_0xFF0A[1068])[_0xFF0A[462]](_0xFF0A[1066] + _0xFF2F[_0xFF0A[385]]()[_0xFF0A[840]] + _0xFF0A[13] + _0xFF2F[_0xFF0A[385]]()[_0xFF0A[1067]]);
                                    $(_0xFF0A[1068])[_0xFF0A[17]]();
                                    $(_0xFF0A[1069])[_0xFF0A[19]]();
                                    $(_0xFF0A[1070])[_0xFF0A[17]]();
                                    $(_0xFF0A[1073])[_0xFF0A[15]](_0xFF0A[1071], _0xFF0A[1072])
                                } else {
                                    $(_0xFF0A[1068])[_0xFF0A[19]]();
                                    $(_0xFF0A[1070])[_0xFF0A[19]]();
                                    $(_0xFF0A[1069])[_0xFF0A[17]]();
                                    $(_0xFF0A[1073])[_0xFF0A[15]](_0xFF0A[1071], _0xFF0A[1074])
                                }
                            })
                        };
                        if (_0xFFC3[_0xFF0A[1080]] !== undefined) {
                            var _0x1000D = new Date();
                            _0x1000D[_0xFF0A[1082]](_0x1000D[_0xFF0A[1081]]() + _0xFFC3[_0xFF0A[1080]]);
                            if (_0xFFC3[_0xFF0A[1080]] == 0) {
                                $(_0xFF0A[1083])[_0xFF0A[19]]();
                                $(_0xFF0A[1085])[_0xFF0A[462]](_0xFF0A[1084])
                            } else {
                                $(_0xFF0A[1083])[_0xFF0A[17]]();
                                $(_0xFF0A[1085])[_0xFF0A[462]](_0xFF0A[1086] + _0xFFC3[_0xFF0A[1080]] + _0xFF0A[1087] + _0x1000D[_0xFF0A[675]]());
                                $(_0xFF0A[1088])[_0xFF0A[627]](_0xFF0A[223], _0xFFC3[_0xFF0A[1080]])
                            }
                        } else {
                            $(_0xFF0A[1085])[_0xFF0A[462]](_0xFF0A[1084])
                        };
                        if (_0x12195[_0xFF0A[884]] && _0x12195[_0xFF0A[884]] > 0 && _0x12170 && _0x12170[_0xFF0A[155]] && _0x12170[_0xFF0A[155]][_0xFF0A[9]] > 0) {
                            var _0xFF54 = $(_0xFF0A[1089]);
                            var _0x10032 = 0;
                            for (var _0xFFE8 = 0; _0xFFE8 < _0x12170[_0xFF0A[155]][_0xFF0A[9]]; _0xFFE8++) {
                                if (_0x12170[_0xFF0A[155]][_0xFFE8] == _0x12195[_0xFF0A[884]]) {
                                    _0x10032 = _0xFFE8 + 1
                                }
                            };
                            if (_0x10032 > 0) {
                                _0xFF54[_0xFF0A[148]](_0x10032)
                            }
                        };
                        if (!_0x11752[_0xFF0A[289]][_0xFF0A[1090]]) {
                            _0x11752[_0xFF0A[289]][_0xFF0A[1090]] = firebase[_0xFF0A[158]]()[_0xFF0A[157]](_0xFF0A[1098] + _0xFF2F[_0xFF0A[536]])[_0xFF0A[137]](_0xFF0A[147], function (_0xFFC3) {
                                var _0xFF54 = _0xFFC3[_0xFF0A[148]]();
                                if (!_0xFF54) {
                                    return
                                };
                                _0x12170 = _0xFF54;
                                if (_0x12170[_0xFF0A[155]] && _0x12170[_0xFF0A[155]][_0xFF0A[9]] > 0) {
                                    var _0xFF2F = $(_0xFF0A[1089]);
                                    var _0xFF9E = 0;
                                    _0xFF2F[_0xFF0A[525]]();
                                    _0xFF2F[_0xFF0A[529]](_0xFF0A[1091]);
                                    for (var _0xFF79 = 0; _0xFF79 < _0xFF54[_0xFF0A[155]][_0xFF0A[9]]; _0xFF79++) {
                                        _0xFF2F[_0xFF0A[529]](_0xFF0A[574] + (_0xFF79 + 1) + _0xFF0A[575] + _0x12023[_0x12170[_0xFF0A[155]][_0xFF79]] + _0xFF0A[576]);
                                        if (_0x12170[_0xFF0A[155]][_0xFF79] == _0x12195[_0xFF0A[884]]) {
                                            _0xFF9E = _0xFF79 + 1
                                        }
                                    };
                                    if (_0xFF9E > 0) {
                                        _0xFF2F[_0xFF0A[148]](_0xFF9E)
                                    };
                                    _0xFF2F[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[1092])
                                } else {
                                    $(_0xFF0A[1089])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                                };
                                if (_0x12170[_0xFF0A[809]] && _0x12170[_0xFF0A[809]][_0xFF0A[884]] && _0x12170[_0xFF0A[809]][_0xFF0A[1093]] && !_0x12170[_0xFF0A[809]][_0xFF0A[1094]]) {
                                    $(_0xFF0A[1095])[_0xFF0A[462]](_0x12170[_0xFF0A[809]][_0xFF0A[884]]);
                                    $(_0xFF0A[1096])[_0xFF0A[237]](_0x12170[_0xFF0A[809]][_0xFF0A[1093]]);
                                    _0x11D64($(_0xFF0A[1097]));
                                    _0x10D59(_0x11321)
                                }
                            })
                        };
                        if (_0x10CC5) {
                            _0x111D4(_0x12195)
                        };
                        _0x11087(_0xFF2F[_0xFF0A[536]])
                    })
                } else {
                    $(_0xFF0A[1045])[_0xFF0A[627]](_0xFF0A[648]);
                    if (!_0x105FA[_0xFF0A[1046]]) {
                        $(_0xFF0A[1050])[_0xFF0A[19]]();
                        $(_0xFF0A[1049])[_0xFF0A[19]]();
                        $(_0xFF0A[1099])[_0xFF0A[19]]();
                        $(_0xFF0A[1100])[_0xFF0A[17]]()
                    } else {
                        $(_0xFF0A[1050])[_0xFF0A[19]]();
                        $(_0xFF0A[1049])[_0xFF0A[19]]();
                        $(_0xFF0A[1100])[_0xFF0A[19]]();
                        $(_0xFF0A[1099])[_0xFF0A[17]]()
                    }
                }
            });
            $(_0xFF0A[1103])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x105FA[_0xFF0A[1046]]) {
                    firebase[_0xFF0A[32]]()[_0xFF0A[1102]](_0xFFE8)[_0xFF0A[357]](function (_0xFF0A) {})[_0xFF0A[355]]((_0xFF0A) => {
                        return _0x10CA0(_0xFF0A, true)
                    })
                }
            });
            $(_0xFF0A[1104])[_0xFF0A[137]](_0xFF0A[622], function () {
                firebase[_0xFF0A[32]]()[_0xFF0A[1047]]()[_0xFF0A[357]](function () {
                    $(_0xFF0A[1050])[_0xFF0A[19]](500);
                    $(_0xFF0A[1099])[_0xFF0A[17]]();
                    $(_0xFF0A[1068])[_0xFF0A[19]]();
                    $(_0xFF0A[1073])[_0xFF0A[17]]()
                })[_0xFF0A[355]]((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                })
            });
            $(_0xFF0A[1106])[_0xFF0A[137]](_0xFF0A[622], function () {
                window[_0xFF0A[925]](_0xFF0A[1105], _0xFF0A[924])
            });
            $(_0xFF0A[1107])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x12195) {
                    return
                };
                _0x111D4(_0x12195);
                _0x11D64($(_0xFF0A[861]));
                _0x10D59($(_0x11321))
            });
            $(_0xFF0A[1108])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x10D59($(_0xFF0A[861]));
                _0x11D64($(_0x11321))
            });
            $(_0xFF0A[1109])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11140(_0x12195, _0x11321)
            });
            $(_0xFF0A[1110])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x12048(_0x11321);
                _0x10D59($(_0xFF0A[1035]))
            });

            function _0xFF9E(_0xFF54, _0xFF2F) {
                if (_0xFF54) {
                    $(_0xFF2F)[_0xFF0A[580]](_0xFF0A[648], false);
                    $(_0xFF2F)[_0xFF0A[462]](_0xFF0A[1111]);
                    return
                };
                $(_0xFF2F)[_0xFF0A[580]](_0xFF0A[648], true);
                $(_0xFF2F)[_0xFF0A[462]](_0xFF0A[314])
            }
            $(_0xFF0A[1089])[_0xFF0A[137]](_0xFF0A[577], function () {
                if (_0x10AE4) {
                    return
                };
                var _0xFF54 = parseInt($(this)[_0xFF0A[148]]());
                _0x10AE4 = true;
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF79) => {
                    fetch(_0xFF2F + _0xFF0A[1112], {
                        method: _0xFF0A[159],
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF79,
                            title: _0xFF54
                        })
                    })[_0xFF0A[357]](((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    }))[_0xFF0A[357]]((_0xFF0A) => {
                        _0x10AE4 = false
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        console[_0xFF0A[11]](_0xFF2F);
                        _0x10AE4 = false
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            $(_0xFF0A[1114])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x10AE4) {
                    return
                };
                _0x10D59($(_0xFF0A[1097]));
                _0x12048(_0x11321);
                _0x10AE4 = true;
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[1113], {
                        method: _0xFF0A[159],
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54
                        })
                    })[_0xFF0A[357]](((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    }))[_0xFF0A[357]]((_0xFF0A) => {
                        _0x10AE4 = false
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        console[_0xFF0A[11]](_0xFF2F);
                        _0x10AE4 = false
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            $(_0xFF0A[1119])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x12195) {
                    return
                };
                _0xFF9E(false, this);
                var _0xFF54 = $(_0xFF0A[1115])[_0xFF0A[148]]();
                if (!_0xFF54 || _0xFF54 == _0xFF0A[1] || _0xFF54[_0xFF0A[1116]]() == _0xFF0A[1]) {
                    alert(_0xFF0A[1117]);
                    _0xFF9E(true, this);
                    return
                };
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF79) => {
                    fetch(_0xFF2F + _0xFF0A[1118], {
                        method: _0xFF0A[159],
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF79,
                            username: _0xFF54
                        })
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        _0xFF9E(true, this);
                        if (_0xFF2F[_0xFF0A[810]] == 200) {
                            _0x12048(_0x11321);
                            $(_0xFF0A[119])[_0xFF0A[19]]();
                            return
                        };
                        alert(_0xFF2F[_0xFF0A[809]])
                    })[_0xFF0A[355]]((_0xFF2F) => {
                        console[_0xFF0A[11]](_0xFF2F);
                        alert(_0xFF2F);
                        _0xFF9E(true, this)
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    _0xFF9E(true, this);
                    _0x10CA0(_0xFF0A, true)
                })
            });
            $(_0xFF0A[1120])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x10D7E();
                _0x12048(_0x11321)
            });
            $(_0xFF0A[1069])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x12195) {
                    return
                };
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF2F) => {
                    window[_0xFF0A[925]](_0xFF0A[1121] + _0xFF2F, _0xFF0A[1122], _0xFF0A[1123])
                })
            });
            $(_0xFF0A[1070])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x12195) {
                    return
                };
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[1124], {
                        method: _0xFF0A[159],
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54
                        }),
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        }
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        alert(_0xFF2F[_0xFF0A[809]])
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A)
                })
            });
            $(_0xFF0A[1083])[_0xFF0A[1128]](function (_0xFF54) {
                _0xFF54[_0xFF0A[114]]();
                if (!_0x12195) {
                    return
                };
                if (!confirm(_0xFF0A[1125])) {
                    return
                };
                var _0xFF79 = $(_0xFF0A[1126])[_0xFF0A[148]]();
                var _0xFF9E = $(_0xFF0A[1088])[_0xFF0A[148]]();
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[1127], {
                        method: _0xFF0A[159],
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54,
                            name: _0xFF79,
                            spend: parseInt(_0xFF9E)
                        }),
                        headers: {
                            'Content-Type': _0xFF0A[868]
                        }
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        alert(_0xFF2F[_0xFF0A[809]]);
                        if (_0xFF2F[_0xFF0A[810]] === 200) {
                            _0x11087(_0x12195[_0xFF0A[536]])
                        }
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A)
                })
            });
            $(_0xFF0A[1129])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(this)[_0xFF0A[19]]()
            });
            $(_0xFF0A[1133])[_0xFF0A[137]](_0xFF0A[622], function (_0xFF54) {
                _0xFF54[_0xFF0A[114]]();
                if (!_0x12195) {
                    return
                };
                var _0xFF9E = prompt(_0xFF0A[1130]);
                if (!_0xFF9E) {
                    return
                };
                var _0xFF79 = _0xFF9E[_0xFF0A[758]](/\s/g, _0xFF0A[1]);
                if (typeof _0xFF9E !== _0xFF0A[1131] || _0xFF79[_0xFF0A[9]] === 0) {
                    return alert(_0xFF0A[1132])
                };
                firebase[_0xFF0A[32]]()[_0xFF0A[354]][_0xFF0A[358]]()[_0xFF0A[357]]((_0xFF54) => {
                    fetch(_0xFF2F + _0xFF0A[867], {
                        method: _0xFF0A[159],
                        headers: {
                            "Content-Type": _0xFF0A[868]
                        },
                        body: JSON[_0xFF0A[54]]({
                            token: _0xFF54,
                            target: _0xFF79,
                            action: 1
                        })
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        return _0xFF2F[_0xFF0A[160]]()
                    })[_0xFF0A[357]]((_0xFF2F) => {
                        alert(_0xFF2F[_0xFF0A[809]])
                    })
                })[_0xFF0A[355]]((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                })
            });
            document[_0xFF0A[70]](_0xFF0A[545])[_0xFF0A[489]] = _0x1162A;
            $(document)[_0xFF0A[952]](function (_0xFF2F) {
                if (_0xFF2F[_0xFF0A[112]] == 13) {
                    var _0xFF54 = $(_0xFF0A[80]);
                    if (document[_0xFF0A[1135]][_0xFF0A[1134]] != _0xFF0A[1136]) {
                        var _0xFF79 = _0xFF54[0];
                        if (_0xFF79) {
                            _0xFF79[_0xFF0A[1137]](_0xFF79[_0xFF0A[147]][_0xFF0A[9]], _0xFF79[_0xFF0A[147]][_0xFF0A[9]])
                        };
                        _0xFF54[_0xFF0A[956]]()
                    } else {
                        if (_0xFF54[_0xFF0A[116]](_0xFF0A[115])) {
                            _0xFF54[_0xFF0A[1138]]()
                        }
                    }
                }
            });
            $(window)[_0xFF0A[291]](_0xFF0A[1139], function () {
                return _0xFF0A[1140]
            });
            _0x11A11();
            $(_0xFF0A[1142])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[1142])[_0xFF0A[624]](_0xFF0A[1141]);
                $(this)[_0xFF0A[628]](_0xFF0A[1141]);
                _0x10F3A = true
            });
            $(_0xFF0A[1143])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[1142])[_0xFF0A[20]](function () {
                    var _0xFF2F = $(this);
                    var _0xFF54 = _0xFF2F[_0xFF0A[627]](_0xFF0A[131]);
                    if (_0x107B6[_0xFF54] != null) {
                        _0x10F5F[_0xFF54] = _0x107B6[_0xFF54];
                        _0x120DC(_0xFF2F)
                    }
                })
            });
            $(_0xFF0A[562])[_0xFF0A[137]](_0xFF0A[577], function () {
                $(_0xFF0A[563])[_0xFF0A[21]]()[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                $(_0xFF0A[1144] + $(this)[_0xFF0A[148]]())[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
            });
            $(_0xFF0A[1145])[_0xFF0A[137]](_0xFF0A[622], function () {
                var _0xFF2F = parseInt($(_0xFF0A[562])[_0xFF0A[148]]());
                var _0xFF54 = isNaN(_0xFF2F) ? 0 : Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 0), 100);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[799]](_0xFF54));
                $(this)[_0xFF0A[1138]]()
            });
            $(_0xFF0A[1146])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[801]]())
            });
            $(_0xFF0A[1147])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[800]](0));
                $(this)[_0xFF0A[1138]]()
            });
            $(_0xFF0A[1148])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[800]](1))
            });
            $(_0xFF0A[1149])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[800]](2))
            });
            $(_0xFF0A[1150])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[802]]())
            });
            $(_0xFF0A[1151])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[802]]())
            });
            $(_0xFF0A[1153])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (_0x11B5E === 0) {
                    return
                };
                var _0xFF54 = _0x11B5E;
                var _0xFF79 = _0xFF0A[1];
                var _0xFF2F = _0x1076C[_0xFF54];
                if (_0xFF2F == null) {
                    return
                };
                if (_0xFF2F[_0xFF0A[616]]) {
                    _0xFF79 = prompt(_0xFF0A[1152], _0xFF0A[1])
                };
                if (_0xFF79 == null) {
                    _0xFF79 = _0xFF0A[1]
                };
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[803]](_0xFF54, _0xFF79))
            });
            $(_0xFF0A[1154])[_0xFF0A[137]](_0xFF0A[622], function () {
                $(_0xFF0A[607])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                $(_0xFF0A[608])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
            });
            $(_0xFF0A[573])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[662]](_0xFF0A[661])[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (_0xFF79 != _0xFF2F) {
                    $(_0xFF0A[632] + _0xFF2F + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[582]], _0xFF79))
                }
            });
            $(_0xFF0A[634])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[662]](_0xFF0A[661])[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (_0xFF79 != _0xFF2F) {
                    $(_0xFF0A[638] + _0xFF2F + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[584]], _0xFF79))
                }
            });
            $(_0xFF0A[635])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[662]](_0xFF0A[661])[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (_0xFF79 != _0xFF2F) {
                    $(_0xFF0A[639] + _0xFF2F + _0xFF0A[633])[_0xFF0A[580]](_0xFF0A[631], true);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[586]], _0xFF79))
                }
            });
            $(_0xFF0A[637])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (isNaN(_0xFF79)) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    return
                };
                _0xFF79 = Math[_0xFF0A[223]](1, Math[_0xFF0A[209]](parseInt(_0xFF79), 32000));
                if (_0xFF79 != _0xFF2F) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[588]], _0xFF79))
                }
            });
            $(_0xFF0A[640])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (isNaN(_0xFF79)) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    return
                };
                _0xFF79 = Math[_0xFF0A[223]](0, Math[_0xFF0A[209]](parseInt(_0xFF79), 1000));
                if (_0xFF79 != _0xFF2F) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[596]], _0xFF79))
                }
            });
            $(_0xFF0A[641])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF54) {
                var _0xFF79 = $(this)[_0xFF0A[148]]();
                var _0xFF2F = $(this)[_0xFF0A[627]](_0xFF0A[385]);
                if (isNaN(_0xFF79)) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    return
                };
                _0xFF79 = Math[_0xFF0A[223]](-1, Math[_0xFF0A[209]](parseInt(_0xFF79), 600));
                if (_0xFF79 != _0xFF2F) {
                    $(this)[_0xFF0A[148]](_0xFF2F);
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[598]], _0xFF79))
                }
            });
            $(_0xFF0A[646])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF2F) {
                var _0xFF54 = $(this)[_0xFF0A[580]](_0xFF0A[642]);
                $(this)[_0xFF0A[580]](_0xFF0A[642], !_0xFF54);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[590]], _0xFF54 == true ? 1 : 0))
            });
            $(_0xFF0A[643])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF2F) {
                var _0xFF54 = $(this)[_0xFF0A[580]](_0xFF0A[642]);
                $(this)[_0xFF0A[580]](_0xFF0A[642], !_0xFF54);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[600]], _0xFF54 == true ? 1 : 0))
            });
            $(_0xFF0A[644])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF2F) {
                var _0xFF54 = $(this)[_0xFF0A[580]](_0xFF0A[642]);
                $(this)[_0xFF0A[580]](_0xFF0A[642], !_0xFF54);
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[663]](_0x10722[_0xFF0A[602]], _0xFF54 == true ? 1 : 0))
            });
            $(_0xFF0A[645])[_0xFF0A[137]](_0xFF0A[577], function (_0xFF2F) {
                var _0xFF79 = $(this)[_0xFF0A[580]](_0xFF0A[642]);
                $(this)[_0xFF0A[580]](_0xFF0A[642], !_0xFF79);
                var _0xFF54 = _0xFF0A[1];
                if (_0xFF79) {
                    _0xFF54 = prompt(_0xFF0A[1155], _0xFF0A[1])
                };
                if (_0xFF54 == null) {
                    _0xFF54 = _0xFF0A[1]
                };
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[806]](_0x10722[_0xFF0A[604]], _0xFF54))
            });
            $(_0xFF0A[630])[_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                if (!_0x11752[_0xFF0A[381]]()) {
                    return
                };
                var _0xFF54 = prompt(_0xFF0A[1156], $(this)[_0xFF0A[462]]());
                if (_0xFF54 != null) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[806]](_0x10722[_0xFF0A[606]], _0xFF54))
                }
            })
        }

        function _0x11165() {
            if (window[_0xFF0A[1157]] === undefined) {
                return
            };
            _0x10238 = window[_0xFF0A[1157]];
            window[_0xFF0A[1157]] = undefined;
            _0x10238[_0xFF0A[1158]](function () {})
        }

        function _0x109BC() {
            _0x10238[_0xFF0A[1161]](_0xFF0A[1159], {
                action: _0xFF0A[1160]
            })[_0xFF0A[357]](function (_0xFF2F) {
                _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[804]](_0xFF2F));
                document[_0xFF0A[333]][_0xFF0A[332]][_0xFF0A[331]](_0xFF0A[330]);
                if (!_0x11752[_0xFF0A[279]]) {
                    _0x11752[_0xFF0A[296]]()
                } else {
                    _0x11752[_0xFF0A[308]]()
                }
            })
        }

        function _0x11062() {
            _0x10A2B(function (_0xFF2F) {
                $(_0xFF0A[13] + _0xFF2F)[_0xFF0A[1164]]({
                    color: _0x11FD9[_0xFF2F],
                    preferredFormat: _0xFF0A[1162],
                    showInput: true,
                    showAlpha: true,
                    clickoutFiresChange: false,
                    change: function (_0xFF54) {
                        _0x11FD9[_0xFF2F] = _0xFF54[_0xFF0A[1163]]();
                        _0x11A36(_0xFF2F, _0x11FD9[_0xFF2F])
                    }
                })
            });
            $(_0xFF0A[1166])[_0xFF0A[1164]](_0xFF0A[564], _0xFF0A[1165], false);
            $(_0xFF0A[1167])[_0xFF0A[1164]](_0xFF0A[564], _0xFF0A[1165], false);
            $(_0xFF0A[1170])[_0xFF0A[1164]]({
                preferredFormat: _0xFF0A[1162],
                showInput: true,
                chooseText: _0xFF0A[1168],
                flat: true,
                clickoutFiresChange: false,
                change: function (_0xFF2F) {
                    if (!_0x11493[_0xFF0A[708]]) {
                        _0x10A06()
                    };
                    var _0xFF54 = _0xFF2F[_0xFF0A[252]]();
                    if (!_0x11FD9[_0xFF0A[1169]][_0xFF0A[478]](_0xFF54)) {
                        _0x11FD9[_0xFF0A[1169]][_0xFF0A[170]](_0xFF54);
                        _0x120B7()
                    }
                }
            })
        }

        function _0x120B7() {
            var _0xFF79 = $(_0xFF0A[1171]);
            _0xFF79[_0xFF0A[525]]();
            if (_0x11FD9[_0xFF0A[1169]][_0xFF0A[9]] == 0) {
                _0x119C7();
                return
            };
            try {
                for (var _0xFF54 in _0x11FD9[_0xFF0A[1169]]) {
                    var _0xFF2F = _0x11FD9[_0xFF0A[1169]][_0xFF54];
                    _0xFF79[_0xFF0A[529]](_0xFF0A[1172] + _0xFF2F + _0xFF0A[1173] + _0xFF2F + _0xFF0A[1174] + _0x10E81(_0xFF2F) + _0xFF0A[1175] + _0xFF2F + _0xFF0A[1176])
                };
                $(_0xFF0A[1181])[_0xFF0A[137]](_0xFF0A[622], function () {
                    var _0xFF79 = $(this)[_0xFF0A[1179]]()[_0xFF0A[1178]](1)[_0xFF0A[627]](_0xFF0A[1177]);
                    var _0xFF2F, _0xFF54;
                    while ((_0xFF2F = _0x11FD9[_0xFF0A[1169]][_0xFF0A[756]](_0xFF79)) !== -1) {
                        _0x11FD9[_0xFF0A[1169]][_0xFF0A[1180]](_0xFF2F, 1);
                        _0xFF54 = true
                    };
                    if (_0xFF54) {
                        _0x120B7()
                    }
                })
            } catch (e) {
                _0x11FD9[_0xFF0A[1169]] = [];
                _0xFF79[_0xFF0A[525]]()
            };
            _0x119C7()
        }

        function _0x119C7() {
            _0x106D8 = [];
            for (var _0xFF2F of _0x11FD9[_0xFF0A[1169]]) {
                _0x106D8[_0xFF0A[170]](_0x116E3[_0xFF0A[255]][_0xFF0A[254]](_0xFF2F))
            };
            for (var _0xFF54 in _0x11752[_0xFF0A[210]]) {
                _0x11752[_0xFF0A[210]][_0xFF54][_0xFF0A[706]] = true
            }
        }

        function _0x1007C(_0xFF79) {
            var _0xFF54 = $(_0xFF0A[1182]);
            _0x10F3A = false;
            if (_0xFF54[_0xFF0A[217]]() == 0) {
                return
            };
            var _0xFF2F = _0xFF54[_0xFF0A[1183]]();
            _0xFF54[_0xFF0A[624]](_0xFF0A[1141]);
            if (_0xFF79 != 27) {
                _0x10F5F[_0xFF2F[_0xFF0A[627]](_0xFF0A[131])] = _0xFF79
            } else {
                _0x10F5F[_0xFF2F[_0xFF0A[627]](_0xFF0A[131])] = -1
            };
            _0x120DC(_0xFF2F)
        }

        function _0x120DC(_0xFF2F) {
            var _0xFF54 = _0x10F5F[_0xFF2F[_0xFF0A[627]](_0xFF0A[131])];
            _0xFF2F[_0xFF0A[237]](_0x10FA9(_0xFF54))
        }

        function _0x10FA9(_0xFF2F) {
            return _0xFF2F > 0 ? _0x10F84[_0xFF2F][_0xFF0A[144]]() : _0xFF0A[1184]
        }

        function _0x110D1() {
            var _0xFF2F = document[_0xFF0A[70]](_0xFF0A[1185]);
            if (_0x11493[_0xFF0A[186]] || !_0x10972[_0xFF0A[35]]) {
                _0xFF2F[_0xFF0A[363]][_0xFF0A[1186]] = _0xFF0A[1187]
            } else {
                if (_0x10972[_0xFF0A[35]]) {
                    _0xFF2F[_0xFF0A[363]][_0xFF0A[1186]] = _0xFF0A[1188] + _0x10972[_0xFF0A[907]] + _0xFF0A[1189]
                }
            }
        }

        function _0x110AC() {
            _0x111F9();
            _0x10903 = {};
            gifEmoteList = {};
            for (var _0xFF54 in _0x1190E) {
                var _0xFF2F = _0x1190E[_0xFF54];
                $(_0xFF0A[1192])[_0xFF0A[529]](_0xFF0A[1190] + _0xFF2F + _0xFF0A[946] + _0xFF2F + _0xFF0A[947] + _0xFF2F + _0xFF0A[1191]);
                _0x10903[_0xFF2F] = true
            };
            for (var _0xFF54 in _0x10C0C) {
                var _0xFF2F = _0x10C0C[_0xFF54];
                $(_0xFF0A[1194])[_0xFF0A[529]](_0xFF0A[1190] + _0xFF2F + _0xFF0A[946] + _0xFF2F + _0xFF0A[950] + _0xFF2F + _0xFF0A[1193]);
                gifEmoteList[_0xFF2F] = true
            };
            for (var _0xFF54 = 0; _0xFF54 < _0x10928[_0xFF0A[9]]; _0xFF54++) {
                var _0xFFC3 = _0x10928[_0xFF54];
                $(_0xFF0A[1197])[_0xFF0A[529]](_0xFF0A[1195] + (_0xFF54 + 1) + _0xFF0A[1196] + _0xFFC3[_0xFF0A[206]](0)[_0xFF0A[144]]() + _0xFFC3[_0xFF0A[142]](1) + _0xFF0A[576]);
                var _0xFF9E = new Image();
                _0xFF9E[_0xFF0A[772]] = _0xFF0A[1198] + _0xFFC3 + _0xFF0A[774];
                _0x10928[_0xFF54] = _0xFF9E
            };
            if (_0x10972[_0xFF0A[35]] && _0x10972[_0xFF0A[1199]]) {
                _0x10997 = new Image();
                _0x10997[_0xFF0A[772]] = _0xFF0A[1200] + _0x10972[_0xFF0A[907]] + _0xFF0A[1201]
            };
            _0x1111B();
            for (var _0xFF54 = 0; _0xFF54 < _0x113FF[_0xFF0A[9]]; _0xFF54++) {
                var _0xFF79 = _0xFF54;
                gifFrames({
                    url: _0xFF0A[1202] + _0x113FF[_0xFF79] + _0xFF0A[763],
                    frames: _0xFF0A[371],
                    cumulative: false,
                    outputType: _0xFF0A[69]
                })[_0xFF0A[357]](function (_0xFF2F) {
                    var _0xFF54 = new _0x10C31();
                    _0xFF54[_0xFF0A[760]](_0xFF2F);
                    _0x113DA[_0xFF79] = _0xFF54
                })
            }
        }

        function _0x111F9() {
            var _0xFF2F, _0xFFC3;
            if (!_0x11493[_0xFF0A[186]] && _0x10972[_0xFF0A[35]]) {
                _0xFF2F = _0xFF0A[1200] + _0x10972[_0xFF0A[907]];
                _0xFFC3 = _0xFF0A[1203]
            } else {
                _0xFF2F = _0xFF0A[1204];
                _0xFFC3 = _0xFF0A[1205]
            };
            var _0xFF54 = new Image();
            _0xFF54[_0xFF0A[139]](_0xFF0A[765], function () {
                _0x11EB1 = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF54);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752[_0xFF0A[214]]) {
                        var _0xFF79 = _0x11752[_0xFF0A[214]][_0xFF2F];
                        if (_0xFF79[_0xFF0A[444]] == 3) {
                            _0xFF79[_0xFF0A[706]] = true
                        }
                    }
                }
            });
            var _0xFF79 = new Image();
            _0xFF79[_0xFF0A[139]](_0xFF0A[765], function () {
                _0x11ED6 = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF79);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752[_0xFF0A[214]]) {
                        var _0xFF54 = _0x11752[_0xFF0A[214]][_0xFF2F];
                        if (_0xFF54[_0xFF0A[444]] == 4) {
                            _0xFF54[_0xFF0A[706]] = true
                        }
                    }
                }
            });
            var _0xFF9E = new Image();
            _0xFF9E[_0xFF0A[139]](_0xFF0A[765], function () {
                _0x11EFB = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF9E);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752[_0xFF0A[214]]) {
                        var _0xFF54 = _0x11752[_0xFF0A[214]][_0xFF2F];
                        if (_0xFF54[_0xFF0A[444]] == 4) {
                            _0xFF54[_0xFF0A[706]] = true
                        }
                    }
                }
            });
            _0xFF54[_0xFF0A[772]] = _0xFF2F + _0xFF0A[1206];
            _0xFF79[_0xFF0A[772]] = _0xFF2F + _0xFF0A[1205];
            _0xFF9E[_0xFF0A[772]] = _0xFF2F + _0xFFC3
        }
        const _0x10488 = {
            "cDisableAA": function () {
                if (_0x11708) {
                    $(_0xFF0A[1208])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[1207])
                }
            },
            "sRenderType": function () {
                if (_0x11708) {
                    $(_0xFF0A[1208])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[1207])
                }
            },
            "cHideId": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1209]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1210])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cHideServerDisplay": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1211]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1212])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cTransCells": function () {
                _0x10316[_0xFF0A[1213]] = _0x11493[_0xFF0A[1214]] ? 0.5 : 1.0
            },
            "cColoredCellCount": function () {
                _0x11752[_0xFF0A[453]](_0x10825[_0xFF0A[101]], true)
            },
            "cHideChat": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1215]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cHideMinimap": function () {
                var _0xFF2F = _0x11493[_0xFF0A[232]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1217])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cHideScorePanel": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1218]] ? _0xFF0A[16] : _0xFF0A[1092];
                $(_0xFF0A[77])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cHideLeaderboard": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1219]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1220])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cHideExtraPanel": function () {
                var _0xFF2F = _0x11493[_0xFF0A[1221]] ? _0xFF0A[16] : _0xFF0A[18];
                $(_0xFF0A[1222])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F)
            },
            "cShowCoordinates": function () {
                var _0xFF2F = _0x11493[_0xFF0A[233]] ? _0xFF0A[18] : _0xFF0A[16];
                $(_0xFF0A[103])[_0xFF0A[15]](_0xFF0A[14], _0xFF2F);
                _0x11A11()
            },
            "cDisableAutoZoom": function () {
                if (_0x11493[_0xFF0A[221]]) {
                    _0x11752[_0xFF0A[222]] = 0.2 * Math[_0xFF0A[223]](_0x101EE[_0xFF0A[199]] / 1080, _0x101EE[_0xFF0A[196]] / 1920)
                }
            },
            "cThemeEnabled": function () {
                if (!_0x11493[_0xFF0A[708]]) {
                    _0x119EC();
                    _0x10A2B(function (_0xFF2F) {
                        $(_0xFF0A[13] + _0xFF2F)[_0xFF0A[1164]](_0xFF0A[1223])
                    })
                } else {
                    _0x10A2B(function (_0xFF2F) {
                        $(_0xFF0A[13] + _0xFF2F)[_0xFF0A[1164]](_0xFF0A[1224])
                    })
                }
            },
            "cShowBorder": function () {
                _0x10C7B()
            },
            "cDisableEventSkins": function () {
                if (_0x10972[_0xFF0A[35]]) {
                    $(_0xFF0A[333])[_0xFF0A[908]](_0xFF0A[906] + _0x10972[_0xFF0A[907]])
                };
                if (_0x115BB === undefined && !_0x11493[_0xFF0A[186]]) {
                    _0x115BB = new _0x115E0(_0x10972[_0xFF0A[187]])
                };
                _0x111F9();
                _0x110D1()
            },
            "cResizableChat": function () {
                $(_0xFF0A[1226])[_0xFF0A[15]](_0xFF0A[14], _0x11493[_0xFF0A[1225]] ? _0xFF0A[18] : _0xFF0A[16])
            },
            "sShowNames": function () {
                _0x114B8[_0xFF0A[740]] = _0x117C1[_0x11493[_0xFF0A[1227]]]
            },
            "sShowSkins": function () {
                _0x114B8[_0xFF0A[735]] = _0x117C1[_0x11493[_0xFF0A[1228]]]
            },
            "sMassType": function () {
                _0x114B8[_0xFF0A[673]] = _0x1136B[_0x11493[_0xFF0A[1229]]]
            },
            "sTextOutlines": function () {
                _0x114B8[_0xFF0A[704]] = _0x11FB4[_0x11493[_0xFF0A[1230]]];
                for (var _0xFF2F in _0x11752[_0xFF0A[244]][_0xFF0A[214]]) {
                    var _0xFF54 = _0x11752[_0xFF0A[244]][_0xFF0A[214]][_0xFF2F];
                    if (_0xFF54[_0xFF0A[668]]) {
                        _0xFF54[_0xFF0A[668]][_0xFF0A[363]][_0xFF0A[1231]] = _0x114B8[_0xFF0A[704]]
                    };
                    _0x11752[_0xFF0A[244]][_0xFF0A[431]](_0xFF54)
                };
                _0x11DD3[_0xFF0A[688]]()
            },
            "sQuality": function () {
                var _0xFF2F = _0x114B8[_0xFF0A[198]];
                _0x114B8[_0xFF0A[198]] = _0x10C56[_0x11493[_0xFF0A[1232]]];
                if (_0xFF2F !== _0x114B8[_0xFF0A[198]]) {
                    $(window)[_0xFF0A[578]](_0xFF0A[182])
                }
            },
            "uiForegroundColor": function (_0xFF2F) {
                if (_0x11752) {
                    _0x11752[_0xFF0A[511]]()
                };
                $(_0xFF0A[1233])[_0xFF0A[15]](_0xFF0A[362], _0xFF2F);
                $(_0xFF0A[1234])[_0xFF0A[15]](_0xFF0A[362], _0xFF2F);
                $(_0xFF0A[1236])[_0xFF0A[15]](_0xFF0A[362], _0xFF2F)[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F);
                $(_0xFF0A[1237])[_0xFF0A[15]](_0xFF0A[362], _0xFF2F);
                $(_0xFF0A[1238])[_0xFF0A[15]](_0xFF0A[362], _0xFF2F);
                $(_0xFF0A[1239])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F)
            },
            "uiBackgroundColor": function (_0xFF2F) {
                $(_0xFF0A[1234])[_0xFF0A[15]](_0xFF0A[1240], _0xFF2F);
                $(_0xFF0A[1236])[_0xFF0A[15]](_0xFF0A[1240], _0xFF2F);
                $(_0xFF0A[1237])[_0xFF0A[15]](_0xFF0A[1240], _0xFF2F)
            },
            "uiBorderColor": function (_0xFF2F) {
                $(_0xFF0A[1241])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F);
                $(_0xFF0A[1238])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F);
                $(_0xFF0A[1237])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F);
                $(_0xFF0A[1242])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F);
                $(_0xFF0A[1243])[_0xFF0A[15]](_0xFF0A[1235], _0xFF2F)
            },
            "uiMenuBackgroundColor": function (_0xFF2F) {
                $(_0xFF0A[1238])[_0xFF0A[15]](_0xFF0A[1240], _0xFF2F)
            },
            "uiMenuSubBackgroundColor": function (_0xFF54) {
                $(_0xFF0A[1244])[_0xFF0A[15]](_0xFF0A[1240], _0xFF54);
                $(_0xFF0A[1245])[_0xFF0A[15]](_0xFF0A[1240], _0xFF54);
                $(_0xFF0A[1246])[_0xFF0A[15]](_0xFF0A[1240], _0xFF54);
                $(_0xFF0A[1247])[_0xFF0A[15]](_0xFF0A[1240], _0xFF54);
                var _0xFF79 = tinycolor(_0xFF0A[820]);
                var _0xFF2F = tinycolor(_0xFF54)[_0xFF0A[1248]]();
                _0xFF79[_0xFF0A[1249]](_0xFF2F * Math[_0xFF0A[209]](Math[_0xFF0A[223]](1 - _0xFF2F, 0.25), 1));
                $(_0xFF0A[1250])[_0xFF0A[15]](_0xFF0A[1240], _0xFF79[_0xFF0A[1163]]())
            },
            "uiPartyLeaderColor": function (_0xFF2F) {
                if (_0x11752) {
                    _0x11752[_0xFF0A[511]]()
                }
            },
            "uiGameBackgroundColor": function (_0xFF2F) {
                document[_0xFF0A[333]][_0xFF0A[363]][_0xFF0A[1251]] = _0xFF2F
            },
            "uiGameBorderColor": function () {
                _0x10C7B()
            },
            "rUiScale": function (_0xFF2F) {
                _0x11493[_0xFF0A[964]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 0.5), 1.25);
                $(_0xFF0A[966])[_0xFF0A[148]](Number[_0xFF0A[965]](_0x11493[_0xFF0A[964]] * 100)[_0xFF0A[263]](0));
                $(_0xFF0A[970])[_0xFF0A[15]](_0xFF0A[968], _0xFF0A[969] + _0x11493[_0xFF0A[964]] + _0xFF0A[477])
            },
            "rAnimationDelay": function (_0xFF2F) {
                _0x11493[_0xFF0A[208]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 25), 250);
                $(_0xFF0A[960])[_0xFF0A[148]](_0x11493[_0xFF0A[208]])
            },
            "rViewDistance": function (_0xFF2F) {
                _0x11493[_0xFF0A[798]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 50), 200);
                $(_0xFF0A[962])[_0xFF0A[148]](_0x11493[_0xFF0A[798]]);
                _0x11752[_0xFF0A[353]]()
            },
            "rBorderSize": function (_0xFF2F) {
                _0x11FD9[_0xFF0A[251]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 1), 256);
                $(_0xFF0A[1252])[_0xFF0A[462]](_0x11FD9[_0xFF0A[251]]);
                _0x10C7B()
            },
            "rBackgroundOpacity": function (_0xFF2F) {
                _0x11FD9[_0xFF0A[1253]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](_0xFF2F, 0), 1);
                $(_0xFF0A[1254])[_0xFF0A[462]](Number[_0xFF0A[965]](_0x11FD9[_0xFF0A[1253]] * 100)[_0xFF0A[263]](0));
                document[_0xFF0A[70]](_0xFF0A[1256])[_0xFF0A[363]][_0xFF0A[1255]] = _0x11FD9[_0xFF0A[1253]]
            },
            "aCustomBackground": function (_0xFF2F) {
                document[_0xFF0A[70]](_0xFF0A[1256])[_0xFF0A[363]][_0xFF0A[1186]] = _0xFF0A[1257] + _0xFF2F + _0xFF0A[1258];
                document[_0xFF0A[70]](_0xFF0A[1256])[_0xFF0A[363]][_0xFF0A[1259]] = _0xFF0A[1260]
            },
            "aCustomSpike": function (_0xFF9E) {
                if (_0x106B3[_0xFF0A[720]]) {
                    _0x106B3[_0xFF0A[720]][_0xFF0A[249]]()
                };
                _0x106B3[_0xFF0A[720]] = null;
                for (var _0xFF54 in _0x11752[_0xFF0A[214]]) {
                    var _0xFF79 = _0x11752[_0xFF0A[214]][_0xFF54];
                    if (_0xFF79[_0xFF0A[444]] == 3) {
                        _0xFF79[_0xFF0A[706]] = true
                    }
                };
                if (_0xFF9E[_0xFF0A[9]] == 0) {
                    return
                };
                var _0xFF2F = new Image();
                _0xFF2F[_0xFF0A[764]] = _0xFF0A[1];
                _0xFF2F[_0xFF0A[139]](_0xFF0A[765], function () {
                    _0x106B3[_0xFF0A[720]] = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF2F)
                });
                _0xFF2F[_0xFF0A[139]](_0xFF0A[11], function () {
                    _0x11752[_0xFF0A[152]](_0xFF0A[1261])
                });
                _0xFF2F[_0xFF0A[772]] = _0xFF9E
            },
            "aCustomMother": function (_0xFF9E) {
                if (_0x106B3[_0xFF0A[721]]) {
                    _0x106B3[_0xFF0A[721]][_0xFF0A[249]]()
                };
                _0x106B3[_0xFF0A[721]] = null;
                for (var _0xFF54 in _0x11752[_0xFF0A[214]]) {
                    var _0xFF79 = _0x11752[_0xFF0A[214]][_0xFF54];
                    if (_0xFF79[_0xFF0A[444]] == 4) {
                        _0xFF79[_0xFF0A[706]] = true
                    }
                };
                if (_0xFF9E[_0xFF0A[9]] == 0) {
                    return
                };
                var _0xFF2F = new Image();
                _0xFF2F[_0xFF0A[764]] = _0xFF0A[1];
                _0xFF2F[_0xFF0A[139]](_0xFF0A[765], function () {
                    _0x106B3[_0xFF0A[721]] = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF2F)
                });
                _0xFF2F[_0xFF0A[139]](_0xFF0A[11], function () {
                    _0x11752[_0xFF0A[152]](_0xFF0A[1262])
                });
                _0xFF2F[_0xFF0A[772]] = _0xFF9E
            }
        };

        function _0x11A11() {
            if (!_0x11493[_0xFF0A[233]]) {
                $(_0xFF0A[1263])[_0xFF0A[15]]({
                    "border-top": _0xFF0A[689]
                });
                $(_0xFF0A[1217])[_0xFF0A[15]]({
                    "height": _0xFF0A[53]
                })
            } else {
                $(_0xFF0A[1263])[_0xFF0A[15]]({
                    "border-top": _0xFF0A[1264]
                });
                $(_0xFF0A[1217])[_0xFF0A[15]]({
                    "height": _0xFF0A[1265]
                })
            }
        }

        function _0x1121E() {
            _0x11CD0();
            $(_0xFF0A[1272])[_0xFF0A[137]](_0xFF0A[622], function () {
                if (!_0x112D7) {
                    return
                };
                var _0xFF54 = prompt(_0xFF0A[1266]);
                if (!_0xFF54) {
                    return
                };
                var _0xFF2F = null;
                if (typeof _0xFF54 !== _0xFF0A[1131]) {
                    _0xFF2F = _0xFF0A[1267]
                };
                if (_0xFF54[_0xFF0A[9]] < 2) {
                    _0xFF2F = _0xFF0A[1268]
                };
                if (_0xFF54[_0xFF0A[9]] > 20) {
                    _0xFF2F = _0xFF0A[1269]
                };
                if (_0xFF2F !== null) {
                    alert(_0xFF2F);
                    return
                };
                _0xFF54 = _0xFF54[_0xFF0A[1116]]();
                if (confirm(_0xFF0A[1270] + _0xFF54 + _0xFF0A[1271])) {
                    _0x12126(_0xFF54)
                }
            });
            $(_0xFF0A[1273])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x12126()
            });
            $(_0xFF0A[1275])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11F8F[_0xFF0A[1274]] = true;
                _0x1214B()
            })
        }

        function _0x11CD0() {
            _0x1214B();
            $(_0xFF0A[1277])[_0xFF0A[1164]]({
                color: _0x11F8F[_0xFF0A[427]],
                showAlpha: false,
                showInput: true,
                preferredFormat: _0xFF0A[1276]
            });
            $(_0xFF0A[1278])[_0xFF0A[1164]]({
                showPaletteOnly: true,
                showPalette: true,
                color: _0x10360[_0x11F8F[_0xFF0A[797]]],
                palette: _0x10360
            });
            $(_0xFF0A[1279])[_0xFF0A[148]](_0x11F8F[_0xFF0A[793]]);
            $(_0xFF0A[1280])[_0xFF0A[580]](_0xFF0A[642], _0x11F8F[_0xFF0A[741]]);
            $(_0xFF0A[1281])[_0xFF0A[148]](_0x11F8F[_0xFF0A[742]])
        }

        function _0x12126(_0xFF9E) {
            _0x11F8F[_0xFF0A[793]] = $(_0xFF0A[1279])[_0xFF0A[148]]()[_0xFF0A[143]]();
            _0x11F8F[_0xFF0A[741]] = $(_0xFF0A[1280])[_0xFF0A[580]](_0xFF0A[642]);
            _0x11F8F[_0xFF0A[427]] = $(_0xFF0A[1277])[_0xFF0A[1164]](_0xFF0A[191])[_0xFF0A[1282]]();
            var _0xFF54 = $(_0xFF0A[1278])[_0xFF0A[1164]](_0xFF0A[191])[_0xFF0A[252]]()[_0xFF0A[144]]();
            var _0xFF2F = 0;
            for (var _0xFF79 = 0; _0xFF79 < _0x10360[_0xFF0A[9]]; _0xFF79++) {
                if (_0x10360[_0xFF79] == _0xFF54) {
                    _0xFF2F = _0xFF79;
                    break
                }
            };
            _0x11F8F[_0xFF0A[797]] = _0xFF2F;
            _0x11F8F[_0xFF0A[742]] = parseInt($(_0xFF0A[1197])[_0xFF0A[148]]());
            _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[792]](_0xFF9E))
        }

        function _0x1214B() {
            if (_0x112D7 || _0x11752[_0xFF0A[286]]) {
                $(_0xFF0A[926])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                $(_0xFF0A[922])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                if (_0x112D7) {
                    $(_0xFF0A[1283])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[1])
                } else {
                    $(_0xFF0A[1283])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                };
                if (_0x11F8F[_0xFF0A[1274]]) {
                    $(_0xFF0A[1284])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                    $(_0xFF0A[1285])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                } else {
                    $(_0xFF0A[1285])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                    $(_0xFF0A[1284])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                }
            } else {
                $(_0xFF0A[922])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
                $(_0xFF0A[926])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
            }
        }

        function _0x11087(_0xFF2F) {
            if (!_0x11752[_0xFF0A[289]][_0xFF0A[1286]]) {
                _0x11752[_0xFF0A[289]][_0xFF0A[1286]] = firebase[_0xFF0A[1079]]()[_0xFF0A[1078]](_0xFF0A[1296])[_0xFF0A[1076]](_0xFF2F)[_0xFF0A[1075]]((_0xFF2F) => {
                    if (!_0xFF2F[_0xFF0A[1065]] || !_0xFF2F[_0xFF0A[385]]()[_0xFF0A[1287]]) {
                        _0x112D7 = false;
                        if ($(_0xFF0A[1288])[_0xFF0A[15]](_0xFF0A[14]) !== _0xFF0A[16]) {
                            _0xFF54(_0xFF0A[915])
                        }
                    } else {
                        _0x112D7 = true;
                        $(_0xFF0A[1289])[_0xFF0A[237]](_0xFF2F[_0xFF0A[385]]()[_0xFF0A[145]]);
                        if (_0xFF2F[_0xFF0A[385]]()[_0xFF0A[1290]] !== undefined) {
                            $(_0xFF0A[1272])[_0xFF0A[627]](_0xFF0A[884], _0xFF0A[1291] + new Date(_0xFF2F[_0xFF0A[385]]()[_0xFF0A[1290]])[_0xFF0A[542]]())
                        };
                        if (_0xFF2F[_0xFF0A[385]]()[_0xFF0A[1292]] !== null) {
                            $(_0xFF0A[1294])[_0xFF0A[237]](new Date(_0xFF2F[_0xFF0A[385]]()[_0xFF0A[1292]][_0xFF0A[1293]] * 1000)[_0xFF0A[542]]())
                        } else {
                            $(_0xFF0A[1294])[_0xFF0A[237]](_0xFF0A[1295])
                        }
                    };
                    _0x1214B();
                    _0x11752[_0xFF0A[289]][_0xFF0A[1286]]();
                    _0x11752[_0xFF0A[289]][_0xFF0A[1286]] = null
                }, (_0xFF2F) => {
                    _0x11752[_0xFF0A[289]][_0xFF0A[1286]]();
                    _0x11752[_0xFF0A[289]][_0xFF0A[1286]] = null
                })
            }
        }

        function _0x11C17(_0xFF79, _0xFF2F, _0xFFC3, _0xFF54, _0xFFE8, _0x1000D, _0xFF9E) {
            this[_0xFF0A[145]] = _0xFF79;
            this[_0xFF0A[300]] = _0xFF2F;
            this[_0xFF0A[163]] = _0xFFC3;
            this[_0xFF0A[614]] = _0xFF54;
            this[_0xFF0A[146]] = _0xFFE8;
            this[_0xFF0A[169]] = 0;
            this[_0xFF0A[167]] = _0x1000D;
            this[_0xFF0A[168]] = _0xFF9E
        }

        function _0x1118A() {
            $(_0xFF0A[1297])[_0xFF0A[237]](_0xFF0A[1]);
            $(_0xFF0A[1298])[_0xFF0A[237]](_0xFF0A[1]);
            $(_0xFF0A[1299])[_0xFF0A[237]](_0xFF0A[1]);
            for (var _0xFF2F in _0x11C61) {
                for (var _0xFF54 in _0x11C61[_0xFF2F]) {
                    var _0xFF9E = _0x11C61[_0xFF2F][_0xFF54];
                    $(_0xFF0A[1305] + _0xFF9E[_0xFF0A[146]])[_0xFF0A[529]](_0xFF0A[1300] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1301] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1302] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1303] + _0xFF9E[_0xFF0A[163]] + _0xFF0A[1304] + _0xFF9E[_0xFF0A[614]] + _0xFF0A[940])
                }
            };
            for (var _0xFF54 in _0xFF79) {
                var _0xFF9E = _0xFF79[_0xFF54];
                $(_0xFF0A[1305] + _0xFF9E[_0xFF0A[146]])[_0xFF0A[1307]](_0xFF0A[1300] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1306] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1302] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1303] + _0xFF9E[_0xFF0A[163]] + _0xFF0A[1304] + _0xFF9E[_0xFF0A[614]] + _0xFF0A[940])
            };
            $(_0xFF0A[1308])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11BCD($(this)[_0xFF0A[627]](_0xFF0A[842]))
            })
        }

        function _0x10B09(_0xFF2F) {
            for (var _0xFF54 in _0xFF79) {
                if (_0xFF2F[_0xFF0A[143]]() === _0xFF54[_0xFF0A[143]]()) {
                    return _0xFF79[_0xFF54]
                }
            };
            return null
        }

        function _0x10BE7(_0xFF2F) {
            for (var _0xFF54 in _0x11C61) {
                for (var _0xFF79 in _0x11C61[_0xFF54]) {
                    if (_0xFF79[_0xFF0A[143]]() === _0xFF2F[_0xFF0A[143]]()) {
                        return _0x11C61[_0xFF54][_0xFF79]
                    }
                }
            };
            return null
        }

        function _0x11BCD(_0xFF2F) {
            if (_0x11B83 != null) {
                $(_0xFF0A[1310] + _0x11B83[_0xFF0A[145]])[_0xFF0A[624]](_0xFF0A[1309])
            };
            _0x11B83 = _0x10BE7(_0xFF2F) || (Object[_0xFF0A[445]](_0xFF79)[_0xFF0A[9]] > 0 ? _0x10B09(_0xFF2F) : null);
            if (_0x11B83 != null) {
                $(_0xFF0A[1310] + _0x11B83[_0xFF0A[145]])[_0xFF0A[628]](_0xFF0A[1309])
            }
        }

        function _0x11BA8(_0xFF2F) {
            _0xFF2F = _0xFF2F[_0xFF0A[143]]();
            var _0xFF54 = $(_0xFF0A[1311] + _0xFF2F);
            $(_0xFF0A[1245])[_0xFF0A[15]](_0xFF0A[1240], _0xFF0A[1312]);
            $(_0xFF0A[1314])[_0xFF0A[21]]()[_0xFF0A[624]](_0xFF0A[1313]);
            _0xFF54[_0xFF0A[628]](_0xFF0A[1313]);
            $(_0xFF0A[1245])[_0xFF0A[15]](_0xFF0A[1240], _0x11FD9[_0xFF0A[1315]]);
            $(_0xFF0A[1246])[_0xFF0A[21]]()[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            $(_0xFF0A[1316] + _0xFF2F)[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
        }

        function _0xFF9E(_0xFF54, _0xFFE8) {
            var _0xFF9E = 0;
            for (tab in _0x11493[_0xFF0A[1317]]) {
                var _0x10032 = _0x11493[_0xFF0A[1317]][tab];
                if ((_0xFF54 & _0x10032[_0xFF0A[426]]) != _0xFF54) {
                    continue
                };
                var _0xFFC3 = $(_0xFF0A[1318] + tab + _0xFF0A[1319])[_0xFF0A[9]];
                if (_0xFFC3 >= _0x10032[_0xFF0A[1320]]) {
                    $(_0xFF0A[1318] + tab + _0xFF0A[1321])[_0xFF0A[443]]()
                };
                var _0xFF2F = _0xFF9E > 0 ? _0xFFE8[_0xFF0A[1322]](true) : _0xFFE8;
                _0xFF9E++;
                var _0x1000D = document[_0xFF0A[360]](_0xFF0A[1323]);
                _0x1000D[_0xFF0A[367]](_0xFF2F);
                document[_0xFF0A[70]](_0xFF0A[1324] + tab)[_0xFF0A[367]](_0x1000D);
                var _0xFF79 = $(_0xFF0A[1325] + tab);
                if (_0xFF79[0][_0xFF0A[1326]] - _0xFF79[0][_0xFF0A[1327]] < _0xFF79[_0xFF0A[1328]]() + 150) {
                    _0xFF79[_0xFF0A[1327]](_0xFF79[0][_0xFF0A[1326]])
                }
            }
        }

        function _0x1094D(_0xFF2F) {
            if (_0xFF2F[_0xFF0A[9]] == 0) {
                return
            } else {
                if (_0xFF2F[_0xFF0A[206]](0) == _0xFF0A[4]) {
                    _0x1154C(_0xFF2F)
                } else {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[787]](_0xFF2F, 0));
                    _0x11C86(_0xFF0A[1])
                }
            }
        }

        function _0x11C86(_0xFF2F) {
            $(_0xFF0A[80])[_0xFF0A[148]](_0xFF2F)
        }

        function _0xFFC3(_0xFF2F) {
            $(_0xFF0A[80])[_0xFF0A[148]](_0x10B2E() + _0xFF2F)
        }

        function _0x10B2E() {
            return $(_0xFF0A[80])[_0xFF0A[148]]()
        }

        function _0x1154C(_0xFF9E) {
            var _0xFFC3 = _0xFF9E[_0xFF0A[3]](_0xFF0A[378]);
            var _0xFF54 = _0xFFC3[0];
            var _0xFF2F = _0xFF54[_0xFF0A[757]](1);
            _0x11C86(_0xFF0A[1]);
            var _0xFF79 = false;
            Object[_0xFF0A[445]](_0x105B0)[_0xFF0A[935]]((_0xFF54) => {
                if (_0x105B0[_0xFF54][_0xFF0A[936]][_0xFF0A[935]]((_0xFF54) => {
                        return _0xFF54[_0xFF0A[144]]() === _0xFF2F[_0xFF0A[144]]()
                    }) > -1 && _0xFF79 == false) {
                    _0x105B0[_0xFF54][_0xFF0A[1329]](_0xFFC3[_0xFF0A[142]](1));
                    _0xFF79 = true;
                    return
                }
            });
            if (_0xFF79 == false) {
                _0x11752[_0xFF0A[152]](_0xFF0A[1330])
            }
        }

        function _0x1197D() {
            var _0xFF54 = $(_0xFF0A[1242]);
            var _0xFF2F = $(_0xFF0A[1331]);
            _0xFF54[_0xFF0A[525]]();
            _0xFF2F[_0xFF0A[525]]();
            for (var _0xFF79 in _0x11493[_0xFF0A[1317]]) {
                var _0xFF9E = _0x11493[_0xFF0A[1317]][_0xFF79];
                if (_0xFF9E[_0xFF0A[145]][_0xFF0A[9]] == 0) {
                    _0xFF9E[_0xFF0A[145]] = _0xFF0A[1332]
                };
                _0xFF54[_0xFF0A[529]](_0xFF0A[1333] + _0xFF79 + _0xFF0A[1334] + _0xFF79 + _0xFF0A[1335] + _0xFF9E[_0xFF0A[145]] + _0xFF0A[1336]);
                _0xFF2F[_0xFF0A[529]](_0xFF0A[1337] + _0xFF79 + _0xFF0A[1338] + _0xFF79 + _0xFF0A[1339])
            };
            $(_0xFF0A[1243])[_0xFF0A[137]](_0xFF0A[622], function () {
                _0x11B14($(this)[_0xFF0A[627]](_0xFF0A[145]))
            })[_0xFF0A[15]](_0xFF0A[1235], _0x11FD9[_0xFF0A[1340]]);
            if (_0x11B39 >= 0 && _0x11B39 < _0x11493[_0xFF0A[1317]][_0xFF0A[9]]) {
                _0x11B14(_0x11B39)
            } else {
                _0x11B14(0)
            }
        }

        function _0x119A2() {
            for (var _0xFF2F in _0x11493[_0xFF0A[1317]]) {
                var _0xFF54 = _0x11493[_0xFF0A[1317]][_0xFF2F];
                if (!_0xFF54) {
                    continue
                };
                if (_0xFF54[_0xFF0A[145]][_0xFF0A[9]] == 0) {
                    _0xFF54[_0xFF0A[145]] = _0xFF0A[1332]
                };
                var _0xFF79 = $(_0xFF0A[1341] + _0xFF2F);
                if (_0xFF79) {
                    _0xFF79[_0xFF0A[237]](_0xFF0A[1342] + _0xFF54[_0xFF0A[145]] + _0xFF0A[1343])
                }
            }
        }

        function _0x11B14(_0xFF2F) {
            $(_0xFF0A[1243])[_0xFF0A[624]](_0xFF0A[1344]);
            $(_0xFF0A[1346])[_0xFF0A[624]](_0xFF0A[1345])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            _0x11B39 = _0xFF2F;
            var _0xFF54 = _0x11493[_0xFF0A[1317]][_0xFF2F];
            if (!_0xFF54) {
                return
            };
            $(_0xFF0A[1341] + _0xFF2F)[_0xFF0A[628]](_0xFF0A[1344]);
            $(_0xFF0A[1325] + _0xFF2F)[_0xFF0A[628]](_0xFF0A[1345])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
        }

        function _0x101A4(_0xFF79 = 0) {
            var _0xFF2F = $(_0xFF0A[1017]);
            _0xFF2F[_0xFF0A[525]]();
            for (var _0xFF54 in _0x11493[_0xFF0A[1317]]) {
                _0xFF2F[_0xFF0A[529]](_0xFF0A[574] + _0xFF54 + _0xFF0A[575] + _0x11493[_0xFF0A[1317]][_0xFF54][_0xFF0A[145]] + _0xFF0A[576])
            };
            _0xFF2F[_0xFF0A[580]](_0xFF0A[579], _0xFF79);
            _0xFF2F[_0xFF0A[578]](_0xFF0A[577])
        }

        function _0x103F4(_0xFF79) {
            var _0xFFE8 = $(_0xFF0A[1017])[_0xFF0A[148]]();
            var _0xFFC3 = {
                name: _0xFF0A[1],
                flags: 0,
                maxMessages: 0
            };
            var _0xFF54 = _0x11493[_0xFF0A[1317]][_0xFFE8];
            if (_0xFF54) {
                for (var _0xFF9E in _0xFFC3) {
                    _0xFFC3[_0xFF9E] = _0xFF54[_0xFF9E]
                }
            };
            $(_0xFF0A[1347])[_0xFF0A[148]](_0xFFC3[_0xFF0A[145]]);
            for (var _0x1000D in _0x10463) {
                var _0xFF2F = (_0x10463[_0x1000D] & _0xFFC3[_0xFF0A[426]]) == _0x10463[_0x1000D];
                $(_0xFF0A[1348] + _0x1000D[_0xFF0A[143]]())[_0xFF0A[580]](_0xFF0A[642], _0xFF2F)
            };
            $(_0xFF0A[1349])[_0xFF0A[148]](_0xFFC3[_0xFF0A[1320]])
        }

        function _0x1043E(_0xFF2F) {
            var _0xFF9E = $(_0xFF0A[1017])[_0xFF0A[148]]();
            var _0x10032 = _0x11493[_0xFF0A[1317]][_0xFF9E];
            if (!_0x10032) {
                return
            };
            var _0x1000D = _0x10032[_0xFF0A[145]];
            var _0xFFE8 = $(_0xFF0A[1347])[_0xFF0A[148]]();
            if (_0xFFE8[_0xFF0A[9]] == 0) {
                return
            };
            var _0xFF79 = _0xFFE8 != _0x1000D;
            var _0xFF54 = 0;
            var _0xFFC3 = parseInt($(_0xFF0A[1349])[_0xFF0A[148]]());
            for (var _0x10057 in _0x10463) {
                if ($(_0xFF0A[1348] + _0x10057[_0xFF0A[143]]())[_0xFF0A[580]](_0xFF0A[642])) {
                    _0xFF54 += _0x10463[_0x10057]
                }
            };
            _0x10032[_0xFF0A[145]] = _0xFFE8;
            _0x10032[_0xFF0A[426]] = _0xFF54;
            _0x10032[_0xFF0A[1320]] = _0xFFC3;
            if (_0xFF79) {
                _0x101A4(_0xFF9E);
                _0x119A2()
            }
        }

        function _0x103AA() {
            var _0xFF2F = {
                name: _0xFF0A[1350],
                flags: 0,
                maxMessages: 100
            };
            _0x11493[_0xFF0A[1317]][_0xFF0A[170]](_0xFF2F);
            _0x101A4(_0x11493[_0xFF0A[1317]][_0xFF0A[9]] - 1);
            _0x1197D()
        }

        function _0x103CF() {
            var _0xFF2F = $(_0xFF0A[1017])[_0xFF0A[148]]();
            var _0xFF54 = _0x11493[_0xFF0A[1317]][_0xFF2F];
            if (!_0xFF54) {
                return
            };
            _0x11493[_0xFF0A[1317]][_0xFF0A[1180]](_0xFF2F, 1);
            _0x101A4();
            _0x1197D()
        }

        function _0x10419(_0xFFC3) {
            var _0xFF2F = parseInt($(_0xFF0A[1017])[_0xFF0A[148]]());
            var _0xFF9E = _0x11493[_0xFF0A[1317]][_0xFF2F];
            if (!_0xFF9E) {
                return
            };
            var _0xFF54;
            if (_0xFFC3) {
                _0xFF54 = _0xFF2F - 1
            } else {
                _0xFF54 = _0xFF2F + 1
            };
            var _0xFF79 = _0x11493[_0xFF0A[1317]][_0xFF54];
            if (!_0xFF79) {
                return
            };
            _0x11493[_0xFF0A[1317]][_0xFF2F] = _0xFF79;
            _0x11493[_0xFF0A[1317]][_0xFF54] = _0xFF9E;
            _0x101A4(_0xFF54);
            _0x119A2();
            _0x11B14(_0xFF54)
        }
        var _0x10385 = function (_0xFF2F) {
            _0x1146E(_0xFF2F, this[_0xFF0A[485]], this[_0xFF0A[486]][_0xFF0A[271]], -1)
        };
        var _0x1162A = function (_0xFF2F) {
            var _0xFF9E = _0xFF2F[_0xFF0A[282]];
            var _0xFF79 = Math[_0xFF0A[240]](_0xFF9E / 20);
            if (_0xFF9E % 20 < 5) {
                return
            };
            var _0xFF54 = _0x11752[_0xFF0A[268]][_0xFF79];
            if (_0xFF54 == null) {
                return
            };
            _0x1146E(_0xFF2F, _0xFF54[_0xFF0A[145]], _0xFF54[_0xFF0A[131]], _0xFF79)
        };

        function _0x1146E(_0xFF2F, _0xFF79, _0xFF54, _0xFFC3) {
            var _0xFF9E = document[_0xFF0A[70]](_0xFF0A[1351]);
            _0xFF9E[_0xFF0A[485]] = _0xFF79 || _0xFF0A[295];
            _0x105D5[_0xFF0A[385]](_0xFF0A[631], _0xFF54);
            _0x105D5[_0xFF0A[385]](_0xFF0A[268], _0xFFC3);
            $(_0xFF0A[1352])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16]);
            if (_0xFFC3 == -1) {
                $(_0xFF0A[1001])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                $(_0xFF0A[1003])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                $(_0xFF0A[1012])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                $(_0xFF0A[1004])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
            } else {
                $(_0xFF0A[1003])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                $(_0xFF0A[1004])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                if (_0x11752[_0xFF0A[381]]()) {
                    $(_0xFF0A[1008])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                    $(_0xFF0A[1009])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                    $(_0xFF0A[1010])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
                }
            };
            if (_0x11752[_0xFF0A[279]]) {
                $(_0xFF0A[1011])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18])
            };
            _0x105D5[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
            _0x105D5[_0xFF0A[15]](_0xFF0A[257], Math[_0xFF0A[209]](_0x11752[_0xFF0A[106]], window[_0xFF0A[197]] - _0x105D5[_0xFF0A[196]]()));
            _0x105D5[_0xFF0A[15]](_0xFF0A[258], Math[_0xFF0A[209]](_0x11752[_0xFF0A[108]], window[_0xFF0A[200]] - _0x105D5[_0xFF0A[199]]()))
        }

        function _0x11596(_0xFF2F) {
            return _0xFF2F[_0xFF0A[758]](/</g, _0xFF0A[1354])[_0xFF0A[758]](/>/g, _0xFF0A[1353])
        }

        function _0x113B5(_0xFF54, _0xFFE8, _0x100A1, _0x100C6, _0x1007C, _0xFF2F, _0xFFC3) {
            var _0xFF79 = ((_0x100A1 - _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[257]]) / _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[196]]) * _0x11346[_0xFF0A[196]];
            var _0xFF9E = ((_0x100C6 - _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[258]]) / _0x11752[_0xFF0A[239]][_0xFF0A[246]][_0xFF0A[199]]) * _0x11346[_0xFF0A[199]];
            _0xFF54[_0xFF0A[766]]();
            _0xFF54[_0xFF0A[767]](_0xFF79, _0xFF9E, _0x1007C, 0, _0x11699, false);
            _0xFF54[_0xFF0A[465]] = _0xFF2F;
            _0xFF54[_0xFF0A[754]]();
            if (_0xFFC3) {
                var _0x10057 = (_0xFF54[_0xFF0A[546]](_0xFFE8)[_0xFF0A[196]] / 2);
                var _0x1000D = _0xFF79 - _0x10057;
                var _0x10032 = _0xFF9E - 5;
                _0xFF54[_0xFF0A[469]](_0xFFE8, _0x1000D, _0x10032)
            }
        }

        function _0x104AD(_0xFF54) {
            var _0x1007C = _0x112FC[_0xFF0A[228]][_0xFF0A[202]] - (_0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[202]] / _0x11752[_0xFF0A[227]]) + ((_0x11752[_0xFF0A[106]] * _0x114B8[_0xFF0A[198]]) / _0x11752[_0xFF0A[227]]);
            var _0x100A1 = _0x112FC[_0xFF0A[228]][_0xFF0A[205]] - (_0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[205]] / _0x11752[_0xFF0A[227]]) + ((_0x11752[_0xFF0A[108]] * _0x114B8[_0xFF0A[198]]) / _0x11752[_0xFF0A[227]]);
            var _0x10032 = null;
            var _0xFFC3;
            for (var _0xFF79 in _0x11752[_0xFF0A[214]]) {
                _0xFFC3 = _0x11752[_0xFF0A[214]][_0xFF79];
                if (_0xFFC3[_0xFF0A[217]] < 25) {
                    continue
                };
                var _0x10057 = _0xFFC3[_0xFF0A[205]] - _0xFFC3[_0xFF0A[217]];
                var _0xFF2F = _0xFFC3[_0xFF0A[205]] + _0xFFC3[_0xFF0A[217]];
                var _0xFF9E = _0xFFC3[_0xFF0A[202]] - _0xFFC3[_0xFF0A[217]];
                var _0x1000D = _0xFFC3[_0xFF0A[202]] + _0xFFC3[_0xFF0A[217]];
                if (_0x100A1 > _0xFF2F) {
                    continue
                };
                if (_0x100A1 < _0x10057) {
                    continue
                };
                if (_0x1007C > _0x1000D) {
                    continue
                };
                if (_0x1007C < _0xFF9E) {
                    continue
                };
                _0x10032 = _0xFFC3;
                break
            };
            if (_0x10032 != null && _0x10032[_0xFF0A[271]] != 0 && (!_0xFF54 || _0xFF54[_0xFF0A[132]][_0xFF0A[131]] == _0xFF0A[69])) {
                var _0xFFE8 = _0x11752[_0xFF0A[244]][_0xFF0A[423]](_0x10032[_0xFF0A[271]]);
                if (_0xFFE8 != null) {
                    _0x1146E(_0xFF54, _0xFFE8[_0xFF0A[145]], _0x10032[_0xFF0A[271]], -1)
                }
            }
        }

        function _0x11D64(_0xFF2F) {
            if (_0xFF2F[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16]) {
                _0xFF2F[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[18]);
                _0xFF2F[_0xFF0A[212]]({
                    opacity: 1
                }, 500)
            }
        }

        function _0x10D59(_0xFF2F) {
            if (_0xFF2F[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[18] && _0xFF2F[_0xFF0A[15]](_0xFF0A[1255]) == 1) {
                _0xFF2F[_0xFF0A[212]]({
                    opacity: 0
                }, 500, function () {
                    _0xFF2F[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
                })
            }
        }

        function _0x12048(_0xFF2F) {
            if (_0xFF2F[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[18] && _0xFF2F[_0xFF0A[15]](_0xFF0A[1255]) == 1) {
                _0x10D59(_0xFF2F)
            } else {
                if (_0xFF2F[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16]) {
                    _0x11D64(_0xFF2F)
                }
            }
        }

        function _0x10D7E() {
            $(_0xFF0A[1237])[_0xFF0A[20]](function () {
                _0x10D59($(this))
            })
        }

        function _0x10EF0(_0xFF2F) {
            return _0xFF2F[_0xFF0A[15]](_0xFF0A[14]) === _0xFF0A[16]
        }

        function _0x11D3F() {
            _0x10DED[_0xFF0A[17]]();
            if (_0x11752[_0xFF0A[268]][_0xFF0A[9]] == 0 || _0x11493[_0xFF0A[544]]) {
                _0x10825[_0xFF0A[104]][_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
            };
            if (_0x11493[_0xFF0A[1215]]) {
                $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
            };
            if (_0x11493[_0xFF0A[232]]) {
                $(_0xFF0A[1217])[_0xFF0A[15]](_0xFF0A[14], _0xFF0A[16])
            }
        }

        function _0x10D34() {
            _0x10DED[_0xFF0A[19]]()
        }

        function _0x11D1A() {
            $(_0xFF0A[1099])[_0xFF0A[19]]();
            $(_0xFF0A[1049])[_0xFF0A[17]]()
        }

        function _0x10D0F() {
            $(_0xFF0A[1050])[_0xFF0A[19]]();
            $(_0xFF0A[1049])[_0xFF0A[19]]();
            $(_0xFF0A[1100])[_0xFF0A[19]]();
            $(_0xFF0A[1099])[_0xFF0A[17]]()
        }

        function _0x104D2(_0xFF2F) {
            var _0xFF54 = _0xFF2F[_0xFF0A[627]](_0xFF0A[131]);
            _0x11493[_0xFF54] = _0xFF2F[_0xFF0A[580]](_0xFF0A[642]);
            _0x11A36(_0xFF54)
        }

        function _0x1051C(_0xFF2F) {
            var _0xFF54 = _0xFF2F[_0xFF0A[627]](_0xFF0A[131]);
            _0x11493[_0xFF54] = _0xFF2F[_0xFF0A[148]]();
            _0x11A36(_0xFF54, _0xFF2F[_0xFF0A[148]]())
        }

        function _0x104F7(_0xFF2F) {
            var _0xFF54 = _0xFF2F[_0xFF0A[627]](_0xFF0A[131]);
            _0x11A36(_0xFF54, _0xFF2F[_0xFF0A[148]]())
        }

        function _0x11A36(_0xFF2F, _0xFF54) {
            var _0xFF0A = _0x10488[_0xFF2F];
            if (_0xFF0A != null) {
                _0xFF0A(_0xFF54)
            }
        }

        function _0x11CAB(_0xFF0A, _0xFF2F) {
            if (_0xFF2F != null) {
                _0x11FD9[_0xFF0A] = _0xFF2F;
                _0x11A36(_0xFF0A, _0xFF2F)
            }
        }

        function _0x11A5B() {
            if (!_0x105FA[_0xFF0A[1046]]) {
                return
            };
            _0x11493[_0xFF0A[1355]] = $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[196]);
            _0x11493[_0xFF0A[1356]] = $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[199]);
            window[_0xFF0A[1359]][_0xFF0A[1358]](_0xFF0A[1357], JSON[_0xFF0A[54]](_0x11493));
            window[_0xFF0A[1359]][_0xFF0A[1358]](_0xFF0A[1360], JSON[_0xFF0A[54]](_0x10F5F));
            window[_0xFF0A[1359]][_0xFF0A[1358]](_0xFF0A[145], $(_0xFF0A[298])[_0xFF0A[148]]());
            window[_0xFF0A[1359]][_0xFF0A[1358]](_0xFF0A[1361], JSON[_0xFF0A[54]](_0x11FD9));
            window[_0xFF0A[1359]][_0xFF0A[1358]](_0xFF0A[1362], JSON[_0xFF0A[54]](_0x11F8F))
        }

        function _0x110F6() {
            if (!_0x105FA[_0xFF0A[1046]]) {
                return
            };
            var _0x1007C = window[_0xFF0A[1359]][_0xFF0A[1363]](_0xFF0A[1361]);
            if (_0x1007C) {
                _0x11243(_0x1007C)
            };
            var _0xFFC3 = window[_0xFF0A[1359]][_0xFF0A[1363]](_0xFF0A[1360]);
            if (_0xFFC3) {
                _0xFFC3 = JSON[_0xFF0A[55]](_0xFFC3);
                for (var _0xFF79 in _0xFFC3) {
                    if (_0xFFC3[_0xFF79] != null && Number[_0xFF0A[1364]](_0xFFC3[_0xFF79])) {
                        _0x10F5F[_0xFF79] = _0xFFC3[_0xFF79];
                        _0x120DC($(_0xFF0A[13] + _0xFF79))
                    }
                }
            };
            var _0x1000D = window[_0xFF0A[1359]][_0xFF0A[1363]](_0xFF0A[1357]);
            if (_0x1000D) {
                _0x1000D = JSON[_0xFF0A[55]](_0x1000D);
                for (var _0xFF9E in _0x11493) {
                    if ((_0xFF9E in _0x1000D) === false) {
                        _0x1000D[_0xFF9E] = _0x11493[_0xFF9E]
                    }
                }
            } else {
                _0x1000D = _0x11493
            };
            for (var _0xFF9E in _0x1000D) {
                var _0xFF54 = _0xFF9E[_0xFF0A[206]](0);
                if (_0xFF54 == _0xFF0A[1177]) {
                    if (_0x1000D[_0xFF9E] == true) {
                        var _0xFF2F = $(_0xFF0A[13] + _0xFF9E);
                        _0xFF2F[_0xFF0A[580]](_0xFF0A[642], _0x1000D[_0xFF9E]);
                        _0x104D2(_0xFF2F)
                    }
                } else {
                    if (_0xFF54 == _0xFF0A[1365]) {
                        var _0x10032 = $(_0xFF0A[13] + _0xFF9E);
                        _0x10032[_0xFF0A[148]](_0x1000D[_0xFF9E]);
                        _0x1051C(_0x10032)
                    } else {
                        if (_0xFF54 == _0xFF0A[828]) {
                            _0x11493[_0xFF9E] = _0x1000D[_0xFF9E]
                        } else {
                            if (_0xFF54 == _0xFF0A[794]) {
                                _0x11493[_0xFF9E] = _0x1000D[_0xFF9E];
                                $(_0xFF0A[13] + _0xFF9E)[_0xFF0A[148]](_0x11493[_0xFF9E]);
                                _0x104F7($(_0xFF0A[13] + _0xFF9E))
                            } else {
                                _0x11493[_0xFF9E] = _0x1000D[_0xFF9E]
                            }
                        }
                    }
                }
            };
            $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[196], _0x11493[_0xFF0A[1355]]);
            $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[199], _0x11493[_0xFF0A[1356]]);
            if (!_0x11493[_0xFF0A[708]]) {
                _0x11A36(_0xFF0A[708])
            };
            var _0xFFE8 = window[_0xFF0A[1359]][_0xFF0A[1363]](_0xFF0A[145]);
            if (_0xFFE8 != null) {
                $(_0xFF0A[298])[_0xFF0A[148]](_0xFFE8)
            };
            var _0x10057 = window[_0xFF0A[1359]][_0xFF0A[1363]](_0xFF0A[1362]);
            if (_0x10057) {
                _0x10057 = JSON[_0xFF0A[55]](_0x10057);
                for (var _0xFF9E in _0x10057) {
                    if (!_0x10057[_0xFF9E]) {
                        continue
                    };
                    if (_0x10057[_0xFF9E][_0xFF0A[9]] != 0) {
                        _0x11F8F[_0xFF9E] = _0x10057[_0xFF9E]
                    }
                }
            };
            _0x11F8F[_0xFF0A[1366]] = _0xFF0A[1];
            _0x1214B()
        }

        function _0x119EC() {
            for (var _0xFF54 in _0x107DB) {
                var _0xFF2F = _0xFF54[_0xFF0A[206]](0);
                if (_0xFF2F == _0xFF0A[794]) {
                    $(_0xFF0A[13] + _0xFF54)[_0xFF0A[148]](_0x107DB[_0xFF54]);
                    _0x104F7($(_0xFF0A[13] + _0xFF54))
                } else {
                    if (_0xFF2F == _0xFF0A[207]) {
                        _0x11FD9[_0xFF54] = _0x107DB[_0xFF54];
                        $(_0xFF0A[13] + _0xFF54)[_0xFF0A[1164]](_0xFF0A[712], _0x11FD9[_0xFF54]);
                        _0x11A36(_0xFF54, _0x11FD9[_0xFF54])
                    } else {
                        if (_0xFF2F == _0xFF0A[1026]) {
                            _0x11CAB(_0xFF54, _0xFF0A[1])
                        } else {
                            _0x11FD9[_0xFF54] = _0x107DB[_0xFF54]
                        }
                    }
                }
            };
            _0x11FD9[_0xFF0A[1169]] = []
        }

        function _0x11243(_0xFF2F) {
            try {
                var _0xFF9E = JSON[_0xFF0A[55]](_0xFF2F);
                for (var _0xFF79 in _0xFF9E) {
                    if (_0x11FD9[_0xFF79] != null && _0xFF9E[_0xFF79][_0xFF0A[9]] != 0) {
                        _0x11FD9[_0xFF79] = _0xFF9E[_0xFF79];
                        var _0xFF54 = _0xFF79[_0xFF0A[206]](0);
                        if (_0xFF54 == _0xFF0A[207]) {
                            $(_0xFF0A[13] + _0xFF79)[_0xFF0A[1164]](_0xFF0A[712], _0x11FD9[_0xFF79]);
                            _0x11A36(_0xFF79, _0x11FD9[_0xFF79])
                        } else {
                            if (_0xFF54 == _0xFF0A[794]) {
                                $(_0xFF0A[13] + _0xFF79)[_0xFF0A[148]](_0x11FD9[_0xFF79]);
                                _0x104F7($(_0xFF0A[13] + _0xFF79))
                            } else {
                                if (_0xFF54 == _0xFF0A[1026]) {
                                    _0x11CAB(_0xFF79, _0x11FD9[_0xFF79])
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                _0x119EC()
            } finally {
                _0x119C7()
            }
        }

        function _0x11268(_0xFF2F) {
            if (/\.(json)$/i [_0xFF0A[1031]](_0xFF2F[_0xFF0A[145]])) {
                var _0xFF54 = new FileReader();
                _0xFF54[_0xFF0A[139]](_0xFF0A[765], function () {
                    if (!_0x11493[_0xFF0A[708]]) {
                        _0x10A06()
                    };
                    _0x119EC();
                    _0x11243(this[_0xFF0A[1032]])
                }, false);
                _0xFF54[_0xFF0A[1367]](_0xFF2F)
            }
        }

        function _0x10A06() {
            $(_0xFF0A[1368])[_0xFF0A[580]](_0xFF0A[642], true)[_0xFF0A[578]](_0xFF0A[577])
        }

        function _0x11571(_0xFF79) {
            var _0xFF9E = _0xFF79[_0xFF0A[3]](_0xFF0A[378]);
            var _0xFF54 = _0xFF0A[1];
            var _0xFFC3 = null;
            for (var _0xFF2F = 0; _0xFF2F < _0xFF9E[_0xFF0A[9]]; _0xFF2F++) {
                if (_0xFF2F != 0) {
                    _0xFF54 += _0xFF0A[378]
                };
                _0xFFC3 = _0xFF9E[_0xFF2F];
                if (_0x10903[_0xFFC3] != null) {
                    if (_0xFFC3[_0xFF0A[933]](_0xFF0A[2]) && _0xFFC3[_0xFF0A[931]](_0xFF0A[2])) {
                        _0xFFC3 = _0xFFC3[_0xFF0A[757]](1, _0xFFC3[_0xFF0A[9]] - 1)
                    };
                    _0xFF54 += _0xFF0A[1369] + _0xFFC3 + _0xFF0A[1370] + _0xFFC3 + _0xFF0A[1196]
                } else {
                    if (gifEmoteList[_0xFFC3] != null) {
                        if (_0xFFC3[_0xFF0A[933]](_0xFF0A[2]) && _0xFFC3[_0xFF0A[931]](_0xFF0A[2])) {
                            _0xFFC3 = _0xFFC3[_0xFF0A[757]](1, _0xFFC3[_0xFF0A[9]] - 1)
                        };
                        _0xFF54 += _0xFF0A[1371] + _0xFFC3 + _0xFF0A[1372] + _0xFFC3 + _0xFF0A[1196]
                    } else {
                        _0xFF54 += _0xFFC3
                    }
                }
            };
            return _0xFF54
        }

        function _0x115E0(_0xFF2F) {
            this[_0xFF0A[185]] = [];
            this[_0xFF0A[1373]] = _0xFF2F;
            this[_0xFF0A[177]] = function () {
                if (!_0x10972[_0xFF0A[185]]) {
                    return
                };
                for (var _0xFF2F = 0; _0xFF2F < this[_0xFF0A[1373]]; _0xFF2F++) {
                    var _0xFF54 = new _0x11605(_0xFF0A[1200] + _0x10972[_0xFF0A[907]] + _0xFF0A[1374], Math[_0xFF0A[240]](Math[_0xFF0A[973]]() * 7));
                    this[_0xFF0A[185]][_0xFF0A[170]](_0xFF54)
                }
            };
            this[_0xFF0A[1375]] = function (_0xFF2F, _0xFF54, _0xFFC3, _0xFFE8) {
                _0xFF54 = _0xFF54 / 1000;
                for (var _0xFF79 in this[_0xFF0A[185]]) {
                    var _0xFF9E = this[_0xFF0A[185]][_0xFF79];
                    _0xFF9E[_0xFF0A[1376]](_0xFF2F, _0xFF54)
                }
            };
            this[_0xFF0A[177]](_0xFF2F)
        }

        function _0x11605(_0xFF54, _0xFF2F) {
            this[_0xFF0A[1377]] = null;
            this[_0xFF0A[1378]] = _0xFF2F;
            this[_0xFF0A[202]] = 0;
            this[_0xFF0A[205]] = 0;
            this[_0xFF0A[1379]] = 0;
            this[_0xFF0A[1380]] = 0;
            this[_0xFF0A[177]] = function (_0xFF2F) {
                this[_0xFF0A[1377]] = new Image();
                this[_0xFF0A[1377]][_0xFF0A[772]] = _0xFF2F;
                this[_0xFF0A[202]] = Math[_0xFF0A[973]]();
                this[_0xFF0A[205]] = Math[_0xFF0A[973]]() - 1.25;
                this[_0xFF0A[1379]] = ((Math[_0xFF0A[973]]() * 0.00075) + 0.0005) * 60;
                this[_0xFF0A[1380]] = 0
            };
            this[_0xFF0A[1376]] = function (_0xFF2F, _0xFF54) {
                if (this[_0xFF0A[205]] > 1.0) {
                    this[_0xFF0A[205]] = (Math[_0xFF0A[973]]() * -0.25) + -0.1
                } else {
                    if (this[_0xFF0A[205]] < -1.25) {
                        this[_0xFF0A[205]] = -1.25
                    }
                };
                if (this[_0xFF0A[202]] > 1.0) {
                    this[_0xFF0A[202]] = 0
                } else {
                    if (this[_0xFF0A[202]] < 0) {
                        this[_0xFF0A[202]] = 1.0
                    }
                };
                this[_0xFF0A[1380]] += (Math[_0xFF0A[973]]() * 0.1) - 0.05;
                this[_0xFF0A[1380]] = Math[_0xFF0A[209]](Math[_0xFF0A[223]](-0.2, this[_0xFF0A[1380]]), 0.2);
                var _0xFF79 = _0xFF54 * this[_0xFF0A[1379]];
                this[_0xFF0A[202]] += _0xFF79 * Math[_0xFF0A[1381]](this[_0xFF0A[1380]]);
                this[_0xFF0A[205]] += _0xFF79 * Math[_0xFF0A[1382]](this[_0xFF0A[1380]]);
                var _0xFFC3 = _0x101EE[_0xFF0A[196]] * this[_0xFF0A[202]];
                var _0xFF9E = _0x101EE[_0xFF0A[199]] * this[_0xFF0A[205]];
                _0xFF2F[_0xFF0A[770]](this[_0xFF0A[1377]], 25 * this[_0xFF0A[1378]], 0, 25, 60, _0xFFC3, _0xFF9E, 25, 60)
            };
            this[_0xFF0A[177]](_0xFF54)
        }
        const _0x1189F = {
            MODIFIER: 1,
            PASSIVE: 2,
            CONSUMABLE: 3,
            DEBUFF: 4,
            NONE: 0
        };
        var _0x1180B, _0x11830;
        var _0x1187A = {
            0: new _0x117E6(_0xFF0A[1383], _0xFF0A[973], _0x1189F[_0xFF0A[49]]),
            1: new _0x117E6(_0xFF0A[1384], _0xFF0A[1385], _0x1189F[_0xFF0A[1386]]),
            2: new _0x117E6(_0xFF0A[1387], _0xFF0A[1388], _0x1189F[_0xFF0A[1386]]),
            3: new _0x117E6(_0xFF0A[1389], _0xFF0A[1390], _0x1189F[_0xFF0A[1391]]),
            4: new _0x117E6(_0xFF0A[1392], _0xFF0A[1393], _0x1189F[_0xFF0A[1391]]),
            5: new _0x117E6(_0xFF0A[1394], _0xFF0A[1379], _0x1189F[_0xFF0A[1391]]),
            6: new _0x117E6(_0xFF0A[1395], _0xFF0A[1396], _0x1189F[_0xFF0A[1391]]),
            7: new _0x117E6(_0xFF0A[1397], _0xFF0A[1398], _0x1189F[_0xFF0A[1399]]),
            8: new _0x117E6(_0xFF0A[1400], _0xFF0A[1401], _0x1189F[_0xFF0A[1399]]),
            9: new _0x117E6(_0xFF0A[1402], _0xFF0A[1403], _0x1189F[_0xFF0A[1399]]),
            10: new _0x117E6(_0xFF0A[1400], _0xFF0A[1404], _0x1189F[_0xFF0A[1405]]),
            11: new _0x117E6(_0xFF0A[1406], _0xFF0A[1407], _0x1189F[_0xFF0A[1386]]),
            12: new _0x117E6(_0xFF0A[1408], _0xFF0A[1409], _0x1189F[_0xFF0A[1399]]),
            13: new _0x117E6(_0xFF0A[1410], _0xFF0A[1411], _0x1189F[_0xFF0A[1391]]),
            14: new _0x117E6(_0xFF0A[1412], _0xFF0A[1413], _0x1189F[_0xFF0A[1399]]),
            15: new _0x117E6(_0xFF0A[1412], _0xFF0A[1414], _0x1189F[_0xFF0A[1405]])
        };

        function _0x117E6(_0xFF54, _0xFF2F, _0xFF79) {
            this[_0xFF0A[145]] = _0xFF54;
            this[_0xFF0A[837]] = _0xFF2F;
            this[_0xFF0A[444]] = _0xFF79;
            this[_0xFF0A[1377]] = null;
            this[_0xFF0A[681]] = null
        }

        function _0x1111B() {
            for (var _0xFF54 in _0x1187A) {
                var _0xFF2F = _0x1187A[_0xFF54];
                var _0xFF9E = _0xFF0A[1415] + _0xFF2F[_0xFF0A[837]] + _0xFF0A[774];
                var _0xFF79 = new Image();
                _0xFF79[_0xFF0A[139]](_0xFF0A[765], function (_0xFF2F, _0xFF54) {
                    _0xFF2F[_0xFF0A[681]] = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF54)
                } [_0xFF0A[291]](null, _0xFF2F, _0xFF79));
                _0xFF79[_0xFF0A[772]] = _0xFF9E;
                _0xFF2F[_0xFF0A[1377]] = _0xFF79
            };
            _0x11830 = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF0A[1416]);
            _0x1180B = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF0A[1417])
        }

        function _0x1017F() {
            this[_0xFF0A[1418]] = {};
            this[_0xFF0A[1419]] = [];
            this[_0xFF0A[1420]] = [];
            this[_0xFF0A[507]] = null;
            this[_0xFF0A[1421]] = 0;
            this[_0xFF0A[681]] = null;
            this[_0xFF0A[384]] = 0;
            this[_0xFF0A[537]] = function (_0xFF79, _0xFF9E, _0xFF54) {
                var _0xFF2F = null;
                var _0xFFC3 = _0x1187A[_0xFF79][_0xFF0A[444]];
                if (_0xFFC3 != _0x1189F[_0xFF0A[1399]]) {
                    _0xFF2F = this[_0xFF0A[1418]][_0xFF79];
                    if (_0xFF2F) {
                        _0xFF2F[_0xFF0A[234]](_0xFF9E, _0xFF54)
                    } else {
                        _0xFF2F = new _0x1015A(_0xFF79, _0xFF9E, _0xFF54);
                        this[_0xFF0A[1418]][_0xFF79] = _0xFF2F;
                        this[_0xFF0A[1422]]()
                    };
                    this[_0xFF0A[1423]]();
                    this[_0xFF0A[1424]]()
                } else {
                    _0xFF2F = new _0x1015A(_0xFF79, _0xFF9E, _0xFF54);
                    this[_0xFF0A[1420]][_0xFF0A[170]](_0xFF2F);
                    this[_0xFF0A[1424]]()
                };
                if (_0xFF2F) {
                    _0x11752[_0xFF0A[152]](_0xFF0A[1425] + _0xFF2F[_0xFF0A[1426]][_0xFF0A[145]])
                }
            };
            this[_0xFF0A[538]] = function (_0xFF79) {
                var _0xFF2F = null;
                var _0xFF9E = _0x1187A[_0xFF79][_0xFF0A[444]];
                if (_0xFF9E != _0x1189F[_0xFF0A[1399]]) {
                    _0xFF2F = this[_0xFF0A[1418]][_0xFF79];
                    if (_0xFF2F) {
                        delete this[_0xFF0A[1418]][_0xFF79];
                        this[_0xFF0A[1422]]();
                        this[_0xFF0A[1424]]();
                        this[_0xFF0A[1423]]()
                    }
                } else {
                    for (var _0xFF54 = 0; _0xFF54 < this[_0xFF0A[1420]][_0xFF0A[9]]; _0xFF54++) {
                        _0xFF2F = this[_0xFF0A[1420]][_0xFF54];
                        if (_0xFF2F[_0xFF0A[131]] == _0xFF79) {
                            this[_0xFF0A[1420]][_0xFF0A[1180]](_0xFF54, 1);
                            this[_0xFF0A[1424]]();
                            break
                        }
                    }
                };
                if (_0xFF2F) {
                    _0x11752[_0xFF0A[152]](_0xFF0A[1427] + _0xFF2F[_0xFF0A[1426]][_0xFF0A[145]])
                }
            };
            this[_0xFF0A[339]] = function (_0xFF9E) {
                if (this[_0xFF0A[1419]][_0xFF0A[9]] == 0 && this[_0xFF0A[1420]][_0xFF0A[9]] == 0) {
                    return
                };
                var _0xFF79 = _0xFF9E ? _0xFF9E : false;
                for (var _0xFF54 in this[_0xFF0A[1418]]) {
                    var _0xFF2F = this[_0xFF0A[1418]][_0xFF54];
                    if (_0xFF79 && _0xFF2F[_0xFF0A[1426]][_0xFF0A[444]] == _0x1189F[_0xFF0A[1386]]) {} else {
                        delete this[_0xFF0A[1418]][_0xFF54]
                    }
                };
                this[_0xFF0A[1422]]();
                this[_0xFF0A[1423]]();
                this[_0xFF0A[1420]] = [];
                this[_0xFF0A[1424]]()
            };
            this[_0xFF0A[1422]] = function () {
                this[_0xFF0A[1419]] = [];
                if (this[_0xFF0A[1418]][_0xFF0A[9]] == 0) {
                    return
                };
                for (var _0xFF54 in this[_0xFF0A[1418]]) {
                    var _0xFF2F = this[_0xFF0A[1418]][_0xFF54];
                    if (_0xFF2F[_0xFF0A[1426]][_0xFF0A[444]] == _0x1189F[_0xFF0A[1386]]) {
                        this[_0xFF0A[1419]][_0xFF0A[1180]](0, 0, _0xFF54)
                    } else {
                        this[_0xFF0A[1419]][_0xFF0A[170]](_0xFF54)
                    }
                }
            };
            this[_0xFF0A[1423]] = function () {
                this[_0xFF0A[384]] = 0;
                if (this[_0xFF0A[1418]][1] != null) {
                    var _0xFF2F = this[_0xFF0A[1418]][1];
                    this[_0xFF0A[384]] = _0xFF2F[_0xFF0A[1428]] * 16
                }
            };
            this[_0xFF0A[234]] = function () {
                if (this[_0xFF0A[1419]][_0xFF0A[9]] == 0 && this[_0xFF0A[1420]][_0xFF0A[9]] == 0) {
                    _0x11855[_0xFF0A[260]] = false;
                    return
                };
                if (Date[_0xFF0A[183]]() >= this[_0xFF0A[1421]]) {
                    this[_0xFF0A[1429]]();
                    this[_0xFF0A[1421]] = Date[_0xFF0A[183]]() + 1000
                };
                if (!this[_0xFF0A[681]]) {
                    this[_0xFF0A[681]] = _0x116E3[_0xFF0A[26]][_0xFF0A[780]](this[_0xFF0A[507]][_0xFF0A[69]]);
                    _0x11855[_0xFF0A[681]] = this[_0xFF0A[681]];
                    _0x11855[_0xFF0A[717]][_0xFF0A[712]](0)
                };
                _0x11855[_0xFF0A[203]][_0xFF0A[202]] = _0x11A80[_0xFF0A[196]]() + 20 - _0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[202]];
                _0x11855[_0xFF0A[203]][_0xFF0A[205]] = 15 - _0x11708[_0xFF0A[204]][_0xFF0A[203]][_0xFF0A[205]];
                _0x11855[_0xFF0A[260]] = true
            };
            this[_0xFF0A[1429]] = function () {
                var _0xFF54 = (this[_0xFF0A[507]] == null || this[_0xFF0A[507]][_0xFF0A[69]] == null) ? document[_0xFF0A[360]](_0xFF0A[69]) : this[_0xFF0A[507]][_0xFF0A[69]];
                var _0xFF9E = Math[_0xFF0A[223]](this[_0xFF0A[1419]][_0xFF0A[9]], this[_0xFF0A[1420]][_0xFF0A[9]]);
                _0xFF54[_0xFF0A[196]] = 55 * _0xFF9E;
                _0xFF54[_0xFF0A[199]] = 105;
                this[_0xFF0A[507]] = _0xFF54[_0xFF0A[73]](_0xFF0A[72]);
                this[_0xFF0A[507]][_0xFF0A[465]] = _0xFF0A[1430];
                this[_0xFF0A[507]][_0xFF0A[266]] = _0xFF0A[1431];
                var _0xFFC3 = 0,
                    _0xFFE8 = 0;
                for (var _0xFF79 = 0; _0xFF79 < this[_0xFF0A[1419]][_0xFF0A[9]]; _0xFF79++) {
                    var _0xFF2F = this[_0xFF0A[1418]][this[_0xFF0A[1419]][_0xFF79]];
                    _0xFF2F[_0xFF0A[1376]](this[_0xFF0A[507]], _0xFFC3, _0xFFE8);
                    _0xFFC3 += 55
                };
                _0xFFC3 = 0;
                _0xFFE8 = 55;
                for (var _0xFF79 = 0; _0xFF79 < this[_0xFF0A[1420]][_0xFF0A[9]]; _0xFF79++) {
                    var _0xFF2F = this[_0xFF0A[1420]][_0xFF79];
                    _0xFF2F[_0xFF0A[1376]](this[_0xFF0A[507]], _0xFFC3, _0xFFE8);
                    _0xFFC3 += 55
                };
                if (this[_0xFF0A[681]]) {
                    this[_0xFF0A[681]][_0xFF0A[234]]()
                };
                this[_0xFF0A[1421]] = Date[_0xFF0A[183]]() + 1000
            };
            this[_0xFF0A[1424]] = function () {
                this[_0xFF0A[1421]] = 0
            }
        }
        const _0x10135 = Math[_0xFF0A[29]] * 1.5;

        function _0x1015A(_0xFF54, _0xFF79, _0xFF2F) {
            this[_0xFF0A[131]] = _0xFF54;
            this[_0xFF0A[1426]] = _0x1187A[_0xFF54];
            this[_0xFF0A[1432]] = Date[_0xFF0A[183]]();
            this[_0xFF0A[1433]] = _0xFF2F;
            this[_0xFF0A[1428]] = _0xFF79;
            this[_0xFF0A[234]] = function (_0xFF54, _0xFF2F) {
                this[_0xFF0A[1432]] = Date[_0xFF0A[183]]();
                this[_0xFF0A[1433]] = _0xFF2F;
                this[_0xFF0A[1428]] = _0xFF54
            };
            this[_0xFF0A[1434]] = function () {
                if (Date[_0xFF0A[183]]() >= this[_0xFF0A[1433]]) {
                    return 2.0 * Math[_0xFF0A[29]]
                } else {
                    var _0xFF54 = this[_0xFF0A[1433]] - Date[_0xFF0A[183]]();
                    var _0xFF79 = this[_0xFF0A[1433]] - this[_0xFF0A[1432]];
                    var _0xFF2F = Math[_0xFF0A[209]](_0xFF54 / _0xFF79, 1.0) * 2.0;
                    return _0xFF2F * Math[_0xFF0A[29]]
                }
            };
            this[_0xFF0A[1376]] = function (_0xFF2F, _0xFF54, _0xFF79) {
                _0xFF2F[_0xFF0A[770]](this[_0xFF0A[1426]][_0xFF0A[1377]], _0xFF54, _0xFF79, 50, 50);
                if (this[_0xFF0A[1428]] > 1) {
                    _0xFF2F[_0xFF0A[465]] = _0xFF0A[1435];
                    _0xFF2F[_0xFF0A[469]](this[_0xFF0A[1428]], _0xFF54 + 35, _0xFF79 + 17)
                };
                if (this[_0xFF0A[1433]] > 0) {
                    _0xFF2F[_0xFF0A[766]]();
                    _0xFF2F[_0xFF0A[1436]](_0xFF54 + 25, _0xFF79 + 25);
                    _0xFF2F[_0xFF0A[767]](_0xFF54 + 25, _0xFF79 + 25, 25, _0x10135, _0x10135 - this[_0xFF0A[1434]](), false);
                    _0xFF2F[_0xFF0A[768]]();
                    _0xFF2F[_0xFF0A[1437]] = 0.75;
                    _0xFF2F[_0xFF0A[465]] = _0xFF0A[1430];
                    _0xFF2F[_0xFF0A[754]]();
                    _0xFF2F[_0xFF0A[1437]] = 1.0
                }
            }
        }
        const _0x113FF = [_0xFF0A[1438]];
        var _0x113DA = [];

        function _0x10C31() {
            this[_0xFF0A[1439]] = 0;
            this[_0xFF0A[1440]] = [];
            this[_0xFF0A[737]] = true;
            this[_0xFF0A[170]] = function (_0xFF2F) {
                this[_0xFF0A[1440]][_0xFF0A[170]](_0xFF2F)
            };
            this[_0xFF0A[1441]] = function (_0xFF2F) {
                return this[_0xFF0A[1440]][_0xFF2F]
            };
            this[_0xFF0A[1442]] = function () {
                return this[_0xFF0A[1440]][_0xFF0A[9]]
            };
            this[_0xFF0A[738]] = function () {
                return this[_0xFF0A[1441]](Math[_0xFF0A[240]](_0x10FCE / this[_0xFF0A[1439]]) % (this[_0xFF0A[1442]]()))
            };
            this[_0xFF0A[760]] = function (_0x1000D) {
                if (_0x1000D[_0xFF0A[9]] === 0) {
                    return
                };
                const _0x10032 = document[_0xFF0A[360]](_0xFF0A[69]);
                const _0x10057 = _0x10032[_0xFF0A[73]](_0xFF0A[72]);
                const _0xFF79 = document[_0xFF0A[360]](_0xFF0A[69]);
                const _0xFF9E = _0xFF79[_0xFF0A[73]](_0xFF0A[72]);
                const _0xFFC3 = _0x1000D[0][_0xFF0A[1443]]();
                this[_0xFF0A[1439]] = _0x1000D[0][_0xFF0A[1444]][_0xFF0A[1439]] * 10;
                _0x10032[_0xFF0A[196]] = _0xFFC3[_0xFF0A[196]];
                _0x10032[_0xFF0A[199]] = _0xFFC3[_0xFF0A[199]];
                _0xFF79[_0xFF0A[196]] = _0xFFC3[_0xFF0A[196]];
                _0xFF79[_0xFF0A[199]] = _0xFFC3[_0xFF0A[199]];
                for (const _0xFFE8 of _0x1000D) {
                    _0x10057[_0xFF0A[265]](0, 0, _0x10032[_0xFF0A[196]], _0x10032[_0xFF0A[199]]);
                    _0x10057[_0xFF0A[770]](_0xFF79, 0, 0);
                    const _0xFF2F = _0xFFE8[_0xFF0A[1443]]();
                    const _0xFF54 = _0xFF2F[_0xFF0A[73]](_0xFF0A[72]);
                    _0xFF9E[_0xFF0A[770]](_0xFF2F, 0, 0);
                    _0xFF54[_0xFF0A[265]](0, 0, _0xFF2F[_0xFF0A[196]], _0xFF2F[_0xFF0A[199]]);
                    _0xFF54[_0xFF0A[770]](_0xFF79, 0, 0);
                    const {
                        frameInfo
                    } = _0xFFE8;
                    const {
                        disposal
                    } = frameInfo;
                    if (disposal === 2) {
                        _0xFF9E[_0xFF0A[265]](frameInfo[_0xFF0A[202]], frameInfo[_0xFF0A[205]], frameInfo[_0xFF0A[196]], frameInfo[_0xFF0A[199]])
                    } else {
                        if (disposal === 3) {
                            _0xFF9E[_0xFF0A[265]](0, 0, _0xFF79[_0xFF0A[196]], _0xFF79[_0xFF0A[199]]);
                            _0xFF9E[_0xFF0A[770]](_0x10032, 0, 0)
                        }
                    };
                    this[_0xFF0A[170]](_0x116E3[_0xFF0A[26]][_0xFF0A[780]](_0xFF2F))
                }
            }
        }

        function _0x10B9D(_0xFF2F) {
            return _0x118C4[_0xFF2F % _0x118C4[_0xFF0A[9]]]
        }

        function _0x10B78(_0xFF2F) {
            return _0x118E9[_0xFF2F % _0x118E9[_0xFF0A[9]]]
        }

        function _0x10BC2(_0xFF2F) {
            return _0x106D8[_0xFF2F % _0x106D8[_0xFF0A[9]]]
        }

        function _0x11D89(_0xFF2F) {
            for (var _0xFF54 = _0xFF2F[_0xFF0A[9]] - 1; _0xFF54 > 0; _0xFF54--) {
                var _0xFF79 = Math[_0xFF0A[240]](Math[_0xFF0A[973]]() * (_0xFF54 + 1));
                var _0xFF9E = _0xFF2F[_0xFF54];
                _0xFF2F[_0xFF54] = _0xFF2F[_0xFF79];
                _0xFF2F[_0xFF79] = _0xFF9E
            };
            return _0xFF2F
        }
        var _0x10DA3 = [];
        var _0x10DC8 = [];
        for (var _0x10E12 = 0; _0x10E12 < 180; _0x10E12++) {
            var _0x10566 = tinycolor({
                h: (_0x10E12 * 2),
                s: 97.25,
                v: 100
            });
            var _0x1058B = _0x10566[_0xFF0A[1282]]();
            _0x10DA3[_0x10E12] = (_0x1058B[_0xFF0A[794]] << 16) + (_0x1058B[_0xFF0A[795]] << 8) + _0x1058B[_0xFF0A[796]];
            _0x10DC8[_0x10E12] = _0x10566[_0xFF0A[252]]()
        };
        const _0x118C4 = _0x11D89(_0x10DA3[_0xFF0A[142]](0));
        const _0x118E9 = _0x11D89(_0x10DC8[_0xFF0A[142]](0));
        delete _0x10DA3;
        delete _0x10DC8;
        if (_0x10972[_0xFF0A[35]] && _0x10972[_0xFF0A[1445]]) {
            _0x10B9D = function (_0xFF2F) {
                return _0x10972[_0xFF0A[1445]][_0xFF2F % _0x10972[_0xFF0A[1445]][_0xFF0A[9]]]
            }
        };
        const _0x10360 = [_0xFF0A[1446], _0xFF0A[1447], _0xFF0A[1448], _0xFF0A[1449], _0xFF0A[1450], _0xFF0A[1451], _0xFF0A[1452], _0xFF0A[1453], _0xFF0A[1454], _0xFF0A[1455], _0xFF0A[1456], _0xFF0A[1457], _0xFF0A[1458], _0xFF0A[1459], _0xFF0A[1460], _0xFF0A[1461], _0xFF0A[1462]];
        const _0x12023 = {};

        function _0x100C6(_0xFF2F) {
            if (_0xFF2F === 0 || _0xFF2F === _0x11752[_0xFF0A[271]]) {
                return _0xFF0A[1463]
            };
            if (_0x100A1[_0xFF0A[478]](_0xFF2F)) {
                delete _0x100A1[_0xFF2F];
                return _0xFF0A[1464] + _0xFF2F
            };
            _0x100A1[_0xFF0A[170]](_0xFF2F);
            return _0xFF0A[1465] + _0xFF2F
        }
        const _0x105B0 = {
            whisper: {
                description: _0xFF0A[1466],
                triggers: [_0xFF0A[1467], _0xFF0A[1468], _0xFF0A[1469]],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (isNaN(_0xFF54)) {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1470]);
                        return
                    };
                    var _0xFF79 = _0xFF2F[_0xFF0A[142]](1)[_0xFF0A[141]](_0xFF0A[378]);
                    if (_0xFF79[_0xFF0A[9]] != 0) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[791]](_0xFF54, _0xFF79))
                    };
                    _0x11C86(_0xFF0A[1002] + _0xFF54 + _0xFF0A[378])
                }
            },
            reply_whisper: {
                description: _0xFF0A[1471],
                triggers: [_0xFF0A[1472], _0xFF0A[794]],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F[_0xFF0A[141]](_0xFF0A[378]);
                    if (_0xFF54[_0xFF0A[9]] != 0) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[791]](0, _0xFF54))
                    };
                    _0x11C86(_0xFF0A[1473])
                }
            },
            party_chat: {
                description: _0xFF0A[1474],
                triggers: [_0xFF0A[268], _0xFF0A[1475]],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F[_0xFF0A[141]](_0xFF0A[378]);
                    if (_0xFF54[_0xFF0A[9]] != 0) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[787]](_0xFF54, 1))
                    };
                    _0x11C86(_0xFF0A[1476])
                }
            },
            invite: {
                description: _0xFF0A[1477],
                triggers: [_0xFF0A[1478], _0xFF0A[828]],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](0, _0xFF54))
                    } else {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1479])
                    }
                }
            },
            leave: {
                description: _0xFF0A[1480],
                triggers: [_0xFF0A[1481], _0xFF0A[1482]],
                action: function (_0xFF2F) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](3, 0))
                }
            },
            promote: {
                description: _0xFF0A[1483],
                triggers: [_0xFF0A[1484]],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](2, _0xFF54))
                    } else {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1479])
                    }
                }
            },
            kick: {
                description: _0xFF0A[1485],
                triggers: [_0xFF0A[1486]],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](1, _0xFF54))
                    } else {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1479])
                    }
                }
            },
            clear: {
                description: _0xFF0A[1487],
                triggers: [_0xFF0A[337]],
                action: function (_0xFF2F) {
                    var _0xFF54 = document[_0xFF0A[70]](_0xFF0A[1488]);
                    while (_0xFF54[_0xFF0A[1489]] != null) {
                        _0xFF54[_0xFF0A[247]](_0xFF54[_0xFF0A[1489]])
                    }
                }
            },
            info: {
                description: _0xFF0A[1490],
                triggers: [_0xFF0A[841]],
                action: function (_0xFF2F) {
                    if (_0x11752[_0xFF0A[271]] > 0) {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1491] + _0x11752[_0xFF0A[271]])
                    } else {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1492])
                    }
                }
            },
            scrimmenu: {
                description: _0xFF0A[1493],
                triggers: [_0xFF0A[1494]],
                action: function (_0xFF2F) {
                    _0x11ACA[_0xFF0A[15]](_0xFF0A[14], _0x11ACA[_0xFF0A[15]](_0xFF0A[14]) == _0xFF0A[16] ? _0xFF0A[18] : _0xFF0A[16])
                }
            },
            join: {
                description: _0xFF0A[1495],
                triggers: [_0xFF0A[141], _0xFF0A[1496]],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F[0];
                    if (_0xFF54 != null && _0xFF54[_0xFF0A[9]] != 0) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[454]](_0xFF54))
                    }
                }
            },
            private: {
                description: _0xFF0A[1497],
                triggers: [_0xFF0A[1498]],
                action: function (_0xFF2F) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](4, 1))
                }
            },
            public: {
                description: _0xFF0A[1499],
                triggers: [_0xFF0A[1500]],
                action: function (_0xFF2F) {
                    _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[788]](4, 0))
                }
            },
            reset_chat: {
                description: _0xFF0A[1501],
                triggers: [_0xFF0A[1502]],
                action: function (_0xFF2F) {
                    $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[196], _0xFF0A[52]);
                    $(_0xFF0A[1216])[_0xFF0A[15]](_0xFF0A[199], _0xFF0A[53])
                }
            },
            reset_chat_tabs: {
                description: _0xFF0A[1503],
                triggers: [_0xFF0A[1504]],
                action: function (_0xFF2F) {
                    _0x11493[_0xFF0A[1317]] = JSON[_0xFF0A[55]](JSON[_0xFF0A[54]](_0x10791));
                    _0x101A4();
                    _0x1197D()
                }
            },
            spectate: {
                description: _0xFF0A[1505],
                triggers: [_0xFF0A[279], _0xFF0A[1365]],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752[_0xFF0A[124]](new _0x11502[_0xFF0A[309]](_0xFF54))
                    } else {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1479])
                    }
                }
            },
            disconnect: {
                description: _0xFF0A[1506],
                triggers: [_0xFF0A[312]],
                action: function (_0xFF2F) {
                    _0x11752[_0xFF0A[312]]()
                }
            },
            account: {
                description: _0xFF0A[1507],
                triggers: [_0xFF0A[1508]],
                action: function (_0xFF2F) {
                    if (_0x12195 === null) {
                        _0x11752[_0xFF0A[152]](_0xFF0A[1509]);
                        return
                    };
                    _0x11752[_0xFF0A[152]](_0xFF0A[1510] + _0x12195[_0xFF0A[536]])
                }
            },
            block: {
                description: _0xFF0A[1511],
                triggers: [_0xFF0A[18], _0xFF0A[796]],
                action: function (_0xFF2F) {
                    var _0xFF79 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF79)) {
                        var _0xFF54 = _0x100C6(_0xFF79);
                        _0x11752[_0xFF0A[152]](_0xFF54)
                    }
                }
            },
            reloadskins: {
                description: _0xFF0A[1512],
                triggers: [_0xFF0A[1513]],
                action: function (_0xFF2F) {
                    if (_0x11E1D == _0x11E67[_0xFF0A[759]]) {
                        return
                    };
                    _0x11E1D = _0x11E67[_0xFF0A[175]];
                    _0x111AF()
                }
            }
        };
        const _0x1190E = [_0xFF0A[1514], _0xFF0A[1515], _0xFF0A[1516], _0xFF0A[1517], _0xFF0A[1518], _0xFF0A[1519], _0xFF0A[1520], _0xFF0A[1521], _0xFF0A[1522], _0xFF0A[1523], _0xFF0A[1524], _0xFF0A[1525], _0xFF0A[1526], _0xFF0A[1527], _0xFF0A[1528], _0xFF0A[1529], _0xFF0A[1530], _0xFF0A[1531], _0xFF0A[1532], _0xFF0A[1533], _0xFF0A[1534], _0xFF0A[1535], _0xFF0A[1536], _0xFF0A[1537], _0xFF0A[1538], _0xFF0A[1539], _0xFF0A[1540], _0xFF0A[1541], _0xFF0A[1542], _0xFF0A[1543], _0xFF0A[1544], _0xFF0A[1545], _0xFF0A[1546], _0xFF0A[1547], _0xFF0A[1548], _0xFF0A[1549], _0xFF0A[1550], _0xFF0A[1551], _0xFF0A[1552], _0xFF0A[1553], _0xFF0A[1554]];
        const _0x10C0C = [_0xFF0A[1555], _0xFF0A[1556], _0xFF0A[1557], _0xFF0A[1558], _0xFF0A[1559], _0xFF0A[1560], _0xFF0A[1561], _0xFF0A[1562], _0xFF0A[1563], _0xFF0A[1564], _0xFF0A[1565]];
        const _0x10CEA = [_0xFF0A[689], _0xFF0A[690], _0xFF0A[691], _0xFF0A[692], _0xFF0A[693], _0xFF0A[694], _0xFF0A[695], _0xFF0A[696], _0xFF0A[697], _0xFF0A[698], _0xFF0A[1566], _0xFF0A[685], _0xFF0A[1567], _0xFF0A[1568], _0xFF0A[1569], _0xFF0A[1570]];
        const _0x10F84 = [_0xFF0A[1], _0xFF0A[1571], _0xFF0A[1572], _0xFF0A[1573], _0xFF0A[1574], _0xFF0A[1575], _0xFF0A[1576], _0xFF0A[1], _0xFF0A[1577], _0xFF0A[1578], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1579], _0xFF0A[1580], _0xFF0A[1581], _0xFF0A[1], _0xFF0A[1582], _0xFF0A[1583], _0xFF0A[1584], _0xFF0A[1585], _0xFF0A[1586], _0xFF0A[1587], _0xFF0A[1588], _0xFF0A[1589], _0xFF0A[1590], _0xFF0A[1591], _0xFF0A[1], _0xFF0A[1592], _0xFF0A[1593], _0xFF0A[1594], _0xFF0A[1595], _0xFF0A[1596], _0xFF0A[1597], _0xFF0A[1598], _0xFF0A[1599], _0xFF0A[1600], _0xFF0A[1601], _0xFF0A[1602], _0xFF0A[1603], _0xFF0A[1604], _0xFF0A[1605], _0xFF0A[1606], _0xFF0A[1607], _0xFF0A[1608], _0xFF0A[1609], _0xFF0A[1610], _0xFF0A[1611], _0xFF0A[1], _0xFF0A[689], _0xFF0A[690], _0xFF0A[691], _0xFF0A[692], _0xFF0A[693], _0xFF0A[694], _0xFF0A[695], _0xFF0A[696], _0xFF0A[697], _0xFF0A[698], _0xFF0A[2], _0xFF0A[1612], _0xFF0A[1613], _0xFF0A[1614], _0xFF0A[1615], _0xFF0A[1061], _0xFF0A[1616], _0xFF0A[1566], _0xFF0A[685], _0xFF0A[1567], _0xFF0A[1568], _0xFF0A[1569], _0xFF0A[1570], _0xFF0A[1617], _0xFF0A[1618], _0xFF0A[1619], _0xFF0A[1620], _0xFF0A[683], _0xFF0A[1621], _0xFF0A[684], _0xFF0A[1622], _0xFF0A[1623], _0xFF0A[1624], _0xFF0A[1625], _0xFF0A[1626], _0xFF0A[1627], _0xFF0A[699], _0xFF0A[1628], _0xFF0A[1629], _0xFF0A[1630], _0xFF0A[1631], _0xFF0A[1632], _0xFF0A[1633], _0xFF0A[1634], _0xFF0A[1], _0xFF0A[1635], _0xFF0A[1], _0xFF0A[1636], _0xFF0A[1637], _0xFF0A[1638], _0xFF0A[1639], _0xFF0A[1640], _0xFF0A[1641], _0xFF0A[1642], _0xFF0A[1643], _0xFF0A[1644], _0xFF0A[1645], _0xFF0A[1646], _0xFF0A[1647], _0xFF0A[1648], _0xFF0A[1649], _0xFF0A[1650], _0xFF0A[1651], _0xFF0A[1652], _0xFF0A[1653], _0xFF0A[1654], _0xFF0A[1655], _0xFF0A[1656], _0xFF0A[1657], _0xFF0A[1658], _0xFF0A[1659], _0xFF0A[1660], _0xFF0A[1661], _0xFF0A[1662], _0xFF0A[1663], _0xFF0A[1664], _0xFF0A[1665], _0xFF0A[1666], _0xFF0A[1667], _0xFF0A[1668], _0xFF0A[1669], _0xFF0A[1670], _0xFF0A[1671], _0xFF0A[1672], _0xFF0A[1673], _0xFF0A[1674], _0xFF0A[1675], _0xFF0A[1676], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1677], _0xFF0A[1678], _0xFF0A[1679], _0xFF0A[1680], _0xFF0A[1681], _0xFF0A[1682], _0xFF0A[1683], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1684], _0xFF0A[1685], _0xFF0A[1686], _0xFF0A[1687], _0xFF0A[1688], _0xFF0A[1689], _0xFF0A[1690], _0xFF0A[1691], _0xFF0A[1692], _0xFF0A[1693], _0xFF0A[1694], _0xFF0A[1695], _0xFF0A[1696], _0xFF0A[1697], _0xFF0A[1698], _0xFF0A[1699], _0xFF0A[1700], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1701], _0xFF0A[1702], _0xFF0A[1703], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1704], _0xFF0A[1705], _0xFF0A[1706], _0xFF0A[1707], _0xFF0A[1708], _0xFF0A[1709], _0xFF0A[1710], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1711], _0xFF0A[1712], _0xFF0A[1713], _0xFF0A[1714], _0xFF0A[1], _0xFF0A[1715], _0xFF0A[1716], _0xFF0A[1], _0xFF0A[1717], _0xFF0A[1718], _0xFF0A[1], _0xFF0A[1719], _0xFF0A[1], _0xFF0A[1], _0xFF0A[1720], _0xFF0A[1721], _0xFF0A[1722], _0xFF0A[1723], _0xFF0A[1724], _0xFF0A[1725], _0xFF0A[1726], _0xFF0A[1727], _0xFF0A[1728], _0xFF0A[1729], _0xFF0A[1730], _0xFF0A[1731], _0xFF0A[1732], _0xFF0A[1733], _0xFF0A[1734], _0xFF0A[1735], _0xFF0A[1736], _0xFF0A[1737], _0xFF0A[1738], _0xFF0A[1], _0xFF0A[1739], _0xFF0A[1740], _0xFF0A[1]];
        var _0x10928 = [_0xFF0A[1741], _0xFF0A[1742], _0xFF0A[1743], _0xFF0A[1744], _0xFF0A[1745], _0xFF0A[1746], _0xFF0A[1747], _0xFF0A[1748], _0xFF0A[1749], _0xFF0A[1750], _0xFF0A[1751], _0xFF0A[1752], _0xFF0A[1753], _0xFF0A[1754], _0xFF0A[1755], _0xFF0A[1756], _0xFF0A[1757], _0xFF0A[1758], _0xFF0A[1759], _0xFF0A[1760], _0xFF0A[1761], _0xFF0A[1762], _0xFF0A[1763], _0xFF0A[1764], _0xFF0A[1765], _0xFF0A[1766], _0xFF0A[1767], _0xFF0A[1768], _0xFF0A[1769]];
        var _0x10997 = null;
        const _0x11CF5 = -32768;

        function _0x101C9(_0xFF0A) {
            return _0x10CEA[(_0xFF0A >> 4) & 0x0f] + _0x10CEA[_0xFF0A & 0x0f]
        }

        function _0x10A75(_0xFF9E) {
            if (_0xFF9E <= 0) {
                return _0xFF0A[1770]
            };
            var _0xFF2F = Math[_0xFF0A[240]](_0xFF9E / 3600);
            var _0xFF54 = Math[_0xFF0A[240]]((_0xFF9E - (_0xFF2F * 3600)) / 60);
            var _0xFF79 = _0xFF9E - (_0xFF2F * 3600) - (_0xFF54 * 60);
            if (_0xFF54 < 10 && _0xFF2F > 0) {
                _0xFF54 = _0xFF0A[689] + _0xFF54
            };
            if (_0xFF79 < 10) {
                _0xFF79 = _0xFF0A[689] + _0xFF79
            };
            return (_0xFF2F > 0 ? _0xFF2F + _0xFF0A[2] : _0xFF0A[1]) + _0xFF54 + _0xFF0A[2] + _0xFF79
        }

        function _0x10A50(_0xFF54) {
            var _0xFF2F = _0xFF54[_0xFF0A[675]]()[_0xFF0A[3]](_0xFF0A[10]);
            _0xFF2F[0] = _0xFF2F[0][_0xFF0A[758]](/\B(?=(\d{3})+(?!\d))/g, _0xFF0A[8]);
            return _0xFF2F[_0xFF0A[141]](_0xFF0A[10])
        }

        function _0x10E81(_0xFF79) {
            if (_0xFF79[_0xFF0A[756]](_0xFF0A[13]) === 0) {
                _0xFF79 = _0xFF79[_0xFF0A[142]](1)
            };
            if (_0xFF79[_0xFF0A[9]] === 3) {
                _0xFF79 = _0xFF79[0] + _0xFF79[0] + _0xFF79[1] + _0xFF79[1] + _0xFF79[2] + _0xFF79[2]
            };
            if (_0xFF79[_0xFF0A[9]] !== 6) {
                throw new Error(_0xFF0A[1771])
            };
            var _0xFF9E = parseInt(_0xFF79[_0xFF0A[142]](0, 2), 16),
                _0xFF54 = parseInt(_0xFF79[_0xFF0A[142]](2, 4), 16),
                _0xFF2F = parseInt(_0xFF79[_0xFF0A[142]](4, 6), 16);
            return (_0xFF9E * 0.299 + _0xFF54 * 0.587 + _0xFF2F * 0.114) > 186 ? _0xFF0A[1772] : _0xFF0A[1446]
        }

        function _0x10B53(_0xFF2F) {
            if (_0xFF2F[_0xFF0A[1774]][_0xFF0A[1773]]) {
                for (var _0xFF79 = 0; _0xFF79 < _0xFF2F[_0xFF0A[1774]][_0xFF0A[1773]][_0xFF0A[9]]; _0xFF79++) {
                    if (_0xFF2F[_0xFF0A[1774]][_0xFF0A[1773]][_0xFF79][_0xFF0A[1775]] === _0xFF0A[1776]) {
                        var _0xFF54 = _0xFF2F[_0xFF0A[1774]][_0xFF0A[1773]][_0xFF79][_0xFF0A[1777]]();
                        return _0xFF54
                    }
                }
            } else {
                for (var _0xFF79 = 0; _0xFF79 < _0xFF2F[_0xFF0A[1774]][_0xFF0A[1042]][_0xFF0A[9]]; _0xFF79++) {
                    return _0xFF2F[_0xFF0A[1774]][_0xFF0A[1042]][_0xFF79]
                }
            }
        }

        function _0x1084A(_0xFF9E, _0xFF54, _0xFFC3) {
            var _0xFF79 = new Blob([_0xFF54], {
                type: _0xFFC3
            });
            if (window[_0xFF0A[1779]][_0xFF0A[1778]]) {
                window[_0xFF0A[1779]][_0xFF0A[1778]](_0xFF79, _0xFF9E)
            } else {
                var _0xFF2F = document[_0xFF0A[360]](_0xFF0A[1026]),
                    _0xFFE8 = URL[_0xFF0A[1780]](_0xFF79);
                _0xFF2F[_0xFF0A[6]] = _0xFFE8;
                _0xFF2F[_0xFF0A[1781]] = _0xFF9E;
                document[_0xFF0A[333]][_0xFF0A[367]](_0xFF2F);
                _0xFF2F[_0xFF0A[622]]();
                setTimeout(function () {
                    document[_0xFF0A[333]][_0xFF0A[247]](_0xFF2F);
                    window[_0xFF0A[1783]][_0xFF0A[1782]](_0xFFE8)
                }, 0)
            }
        }

        function _0x10ECB(_0xFF2F) {
            return !!_0xFF2F[_0xFF0A[660]](_0x10ECB[_0xFF0A[1784]])
        }
        _0x10ECB[_0xFF0A[1784]] = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
        const _0x117C1 = {
            ALL: 3,
            PARTY: 2,
            SELF: 1,
            NONE: 0
        };
        const _0x1136B = {
            DEFAULT: 0,
            SHORT: 1
        };
        const _0x11FB4 = {
            THICK: 9,
            THIN: 2,
            NONE: 0
        };
        const _0x10C56 = {
            ULTRA: 1.0,
            HIGH: 0.8,
            MEDIUM: 0.7,
            LOW: 0.5,
            VERYLOW: 0.25
        };
        const _0x10722 = {
            MAP: 0,
            MODE: 1,
            SIZE: 2,
            STARTMASS: 3,
            LOCK: 4,
            PLAYER_UPDATE: 5,
            PLAYER_LIST: 6,
            VIRUS_DENSITY: 7,
            PUBLIC: 8,
            PASSWORD: 9,
            NAME: 10,
            RESPAWN_DELAY: 11,
            AUTOSPLIT: 12
        };
        const _0x11AEF = {
            0: _0xFF0A[1785],
            1: _0xFF0A[1786],
            2: _0xFF0A[1787],
            3: _0xFF0A[1788],
            4: _0xFF0A[1789],
            5: _0xFF0A[1790],
            6: _0xFF0A[1791],
            7: _0xFF0A[1792],
            8: _0xFF0A[1793]
        };
        const _0x1000D = {
            FAILURE: 1,
            SUCCESS: 0
        };
        const _0x11E67 = {
            NOT_LOADED: 1,
            LOADING: 2,
            LOADED: 3
        };
        const _0x10463 = {
            ALL: 0x01,
            PARTY: 0x02,
            WHISPER: 0x04,
            SYSTEM: 0x08,
            ADMIN: 0x10
        };
        const _0x1164F = {
            UNKNOWN: -1,
            ALIVE: 0,
            DEAD: 1,
            SPECTATE: 2
        };
        var _0x106FD = [_0xFF0A[820], _0xFF0A[1794], _0xFF0A[1795], _0xFF0A[1796], _0xFF0A[1797], _0xFF0A[1798], _0xFF0A[1799]];

        function _0x12101() {
            if (!_0x105FA[_0xFF0A[1046]]) {
                return
            };
            var _0xFF54 = localStorage[_0xFF0A[1363]](_0xFF0A[149]);
            var _0xFF2F = version[_0xFF0A[3]](_0xFF0A[10]);
            if (_0xFF54 === null) {
                localStorage[_0xFF0A[1358]](_0xFF0A[149], version);
                return
            };
            _0xFF54 = _0xFF54[_0xFF0A[3]](_0xFF0A[10]);
            if (_0xFF2F[0] != _0xFF54[0] || _0xFF2F[1] != _0xFF54[1]) {
                localStorage[_0xFF0A[1358]](_0xFF0A[149], version);
                _0x10D59(_0x11321);
                _0x11D64($(_0xFF0A[992]))
            }
        }
        $(window)[_0xFF0A[956]](function () {
            _0x10EA6 = true
        });
        $(window)[_0xFF0A[1138]](function () {
            _0x10EA6 = false
        });

        function _0x11BF2() {
            if (_0x10EA6) {
                return
            };
            if (!(_0xFF0A[1800] in window)) {
                return
            };
            if (Notification[_0xFF0A[1801]] === _0xFF0A[1802]) {
                var _0xFF2F = new Notification(_0xFF0A[1803], {
                    icon: _0xFF0A[1804]
                })
            }
        }
        var _0x105FA = new _0x1061F();

        function _0x1061F() {
            this[_0xFF0A[1046]] = false;
            this[_0xFF0A[1805]] = _0xFF0A[1806];
            this[_0xFF0A[1807]] = _0xFF0A[1808] + this[_0xFF0A[1805]] + _0xFF0A[1809];
            this[_0xFF0A[1810]] = $(_0xFF0A[1811]);
            this[_0xFF0A[1812]] = {
                name: _0xFF0A[1813],
                value: _0xFF0A[1814] + this[_0xFF0A[1805]],
                exdays: 365 * 2,
                path: _0xFF0A[1815]
            };
            this[_0xFF0A[1816]] = {
                banner: $(_0xFF0A[1817]),
                decline: $(_0xFF0A[1818]),
                accept: $(_0xFF0A[1819]),
                handlersBound: false
            };
            this[_0xFF0A[177]] = function () {
                this[_0xFF0A[1820]]();
                this[_0xFF0A[1810]][_0xFF0A[137]](_0xFF0A[577], function (_0xFF2F) {
                    _0x105FA[_0xFF0A[1821]]($(this)[_0xFF0A[580]](_0xFF0A[642]))
                });
                var _0xFF2F = this[_0xFF0A[1822]]();
                if (_0xFF2F === this[_0xFF0A[1812]][_0xFF0A[147]]) {
                    this[_0xFF0A[1821]](true);
                    this[_0xFF0A[1823]](false)
                } else {
                    this[_0xFF0A[1821]](false);
                    this[_0xFF0A[1823]](true)
                }
            };
            this[_0xFF0A[1821]] = function (_0xFF2F) {
                this[_0xFF0A[1046]] = _0xFF2F;
                aiptag[_0xFF0A[1046]] = _0xFF2F;
                this[_0xFF0A[1810]][_0xFF0A[580]](_0xFF0A[642], _0xFF2F);
                if (!_0xFF2F) {
                    this[_0xFF0A[1824]]();
                    if (firebase[_0xFF0A[32]]()[_0xFF0A[354]] !== null) {
                        firebase[_0xFF0A[32]]()[_0xFF0A[1047]]()[_0xFF0A[357]](function () {})[_0xFF0A[355]]((_0xFF0A) => {})
                    };
                    $(_0xFF0A[1050])[_0xFF0A[19]]();
                    $(_0xFF0A[1049])[_0xFF0A[19]]();
                    $(_0xFF0A[1099])[_0xFF0A[19]]();
                    $(_0xFF0A[1100])[_0xFF0A[17]]();
                    this[_0xFF0A[1823]](true)
                } else {
                    this[_0xFF0A[1825]]();
                    this[_0xFF0A[1823]](false);
                    _0x110F6();
                    _0x1121E();
                    $(_0xFF0A[1100])[_0xFF0A[19]]();
                    if ($(_0xFF0A[1049])[_0xFF0A[15]](_0xFF0A[14]) !== _0xFF0A[16]) {
                        $(_0xFF0A[1099])[_0xFF0A[19]]()
                    } else {
                        $(_0xFF0A[1099])[_0xFF0A[17]]()
                    }
                }
            };
            this[_0xFF0A[1823]] = function (_0xFF2F) {
                if (_0xFF2F) {
                    if (!this[_0xFF0A[1816]][_0xFF0A[1826]]) {
                        this[_0xFF0A[1827]]();
                        this[_0xFF0A[1816]][_0xFF0A[1826]] = true
                    };
                    this[_0xFF0A[1816]][_0xFF0A[1829]][_0xFF0A[1828]]()
                } else {
                    this[_0xFF0A[1816]][_0xFF0A[1829]][_0xFF0A[1830]]()
                }
            };
            this[_0xFF0A[1827]] = function () {
                this[_0xFF0A[1816]][_0xFF0A[1831]][_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                    _0x105FA[_0xFF0A[1821]](false);
                    _0x105FA[_0xFF0A[1823]](false)
                });
                this[_0xFF0A[1816]][_0xFF0A[1832]][_0xFF0A[137]](_0xFF0A[622], function (_0xFF2F) {
                    _0x105FA[_0xFF0A[1821]](true);
                    _0x105FA[_0xFF0A[1823]](false)
                });
                $(_0xFF0A[1835])[_0xFF0A[529]](_0xFF0A[1833] + this[_0xFF0A[1807]] + _0xFF0A[1834])
            };
            this[_0xFF0A[1825]] = function () {
                var _0xFF2F = new Date();
                _0xFF2F[_0xFF0A[1837]](_0xFF2F[_0xFF0A[845]]() + (this[_0xFF0A[1812]][_0xFF0A[1836]] * 24 * 60 * 60 * 1000));
                var _0xFF54 = _0xFF0A[1838] + _0xFF2F[_0xFF0A[1839]]();
                document[_0xFF0A[1840]] = this[_0xFF0A[1812]][_0xFF0A[145]] + _0xFF0A[1614] + this[_0xFF0A[1812]][_0xFF0A[147]] + _0xFF0A[1612] + _0xFF54 + _0xFF0A[1841] + this[_0xFF0A[1812]][_0xFF0A[1842]] + _0xFF0A[1612]
            };
            this[_0xFF0A[1824]] = function () {
                document[_0xFF0A[1840]] = this[_0xFF0A[1812]][_0xFF0A[145]] + _0xFF0A[1843] + this[_0xFF0A[1812]][_0xFF0A[1842]] + _0xFF0A[1612]
            };
            this[_0xFF0A[1822]] = function () {
                var _0xFFC3 = this[_0xFF0A[1812]][_0xFF0A[145]] + _0xFF0A[1614];
                var _0xFF79 = decodeURIComponent(document[_0xFF0A[1840]]);
                var _0xFF54 = _0xFF79[_0xFF0A[3]](_0xFF0A[1612]);
                for (var _0xFF9E = 0; _0xFF9E < _0xFF54[_0xFF0A[9]]; _0xFF9E++) {
                    var _0xFF2F = _0xFF54[_0xFF9E];
                    while (_0xFF2F[_0xFF0A[206]](0) == _0xFF0A[378]) {
                        _0xFF2F = _0xFF2F[_0xFF0A[757]](1)
                    };
                    if (_0xFF2F[_0xFF0A[756]](_0xFFC3) == 0) {
                        return _0xFF2F[_0xFF0A[757]](_0xFFC3[_0xFF0A[9]], _0xFF2F[_0xFF0A[9]])
                    }
                };
                return false
            };
            this[_0xFF0A[1820]] = function () {
                var _0xFFC3 = _0xFF0A[1844] + _0xFF0A[1614];
                var _0xFF79 = decodeURIComponent(document[_0xFF0A[1840]]);
                var _0xFF54 = _0xFF79[_0xFF0A[3]](_0xFF0A[1612]);
                var _0xFFE8 = null;
                for (var _0xFF9E = 0; _0xFF9E < _0xFF54[_0xFF0A[9]]; _0xFF9E++) {
                    var _0xFF2F = _0xFF54[_0xFF9E];
                    while (_0xFF2F[_0xFF0A[206]](0) == _0xFF0A[378]) {
                        _0xFF2F = _0xFF2F[_0xFF0A[757]](1)
                    };
                    if (_0xFF2F[_0xFF0A[756]](_0xFFC3) == 0) {
                        _0xFFE8 = _0xFF2F[_0xFF0A[757]](_0xFFC3[_0xFF0A[9]], _0xFF2F[_0xFF0A[9]])
                    }
                };
                if (_0xFFE8 === _0xFF0A[1845]) {
                    this[_0xFF0A[1825]]();
                    document[_0xFF0A[1840]] = _0xFF0A[1846]
                } else {
                    document[_0xFF0A[1840]] = _0xFF0A[1846]
                }
            }
        }
        var _0x11F45 = new _0x11F6A();

        function _0x11F6A() {
            this[_0xFF0A[1847]] = 0;
            this[_0xFF0A[1848]] = 0;
            this[_0xFF0A[910]] = function () {
                this[_0xFF0A[1847]]++;
                if (this[_0xFF0A[1847]] % 5 == 1) {
                    return true
                } else {
                    return false
                }
            }
        }

        function _0x10E37() {
            if (typeof aipPlayer != _0xFF0A[911]) {
                aiptag[_0xFF0A[449]][_0xFF0A[913]][_0xFF0A[170]](function () {
                    adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: _0xFF0A[1849],
                        PREROLL_ELEM: document[_0xFF0A[70]](_0xFF0A[1850]),
                        AIP_COMPLETE: function () {
                            if (!_0x11752[_0xFF0A[279]]) {
                                _0x11752[_0xFF0A[296]]()
                            } else {
                                _0x11752[_0xFF0A[308]]()
                            }
                        }
                    })
                })
            } else {}
        }
        _0x10E37();
        _0x11F20()
    }
    showSideMenu = _0xFF54;
    hideSideMenu = _0xFF79;
    (_0xFF2F)(_0xFF0A[0], 1, _0xFF0A[1]);
    version = _0xFF0A[12];;
    $(_0xFF9E)
})()
