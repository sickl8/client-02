const build = 2103232;
var version, showSideMenu, hideSideMenu;
(function () {
	console.clear();
	console.log('loaded replaced_main.js!');
	const coms_channel = new BroadcastChannel('gotaXY');
    function _0xFF2F(_0xFF79, _0x1000D, _0xFFE8) {
        if (!_0xFF79) {
            return
        };
        var _0xFF9E = this.location.href.split("://")[1].split("/")[0].split(":")[0];
        var _0xFF2F = _0xFF79.split(",");
        for (var _0xFFC3 = 0; _0xFFC3 < _0xFF2F.length; _0xFFC3++) {
            var _0xFF54 = _0xFF2F[_0xFFC3];
            if (_0xFF54 == _0xFF9E) {
                return
            };
            if (!_0x1000D) {
                continue
            };
            _0xFF54 = _0xFF9E.split("." + _0xFF54);
            if (_0xFF54.length == 2 && !_0xFF54[1]) {
                return
            }
        };
        throw (_0xFFE8 || "error")
    }

    function _0xFF54(_0xFF54) {
        var _0xFF2F = $("#" + _0xFF54);
        if (_0xFF2F.css("display") == "none") {
            _0xFF79();
            _0xFF2F.show(500)
        }
    }

    function _0xFF79() {
        $("#main-right").children().each(function () {
            if ($(this).css("display") == "block") {
                $(this).hide(500)
            }
        })
    }

    function _0xFF9E() {
        var _0x114DD = window.PIXI;
        const _0x116E3 = _0x114DD;
        window.PIXI = null;
        var _0x11708;
        const _0x1172D = new _0x116E3.Container();
        const _0x10057 = new _0x116E3.Container();
        const _0x10110 = new _0x116E3.Container();
        const _0x112FC = new _0x116E3.Container();
        const _0x109E1 = new _0x116E3.Container();
        const _0x10316 = new _0x116E3.Container();
        const _0x11855 = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
        var _0x100EB;
        _0x112FC.addChild(_0x10110);
        _0x112FC.addChild(_0x109E1);
        _0x112FC.addChild(_0x10316);
        _0x1172D.addChild(_0x10057);
        _0x1172D.addChild(_0x112FC);
        _0x1172D.addChild(_0x11855);
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
        const _0x11699 = Math.PI * 2;
        const _0x102CC = 32,
            _0x10282 = _0x102CC * 2,
            _0x102A7 = (_0x102CC + 6) * 2,
            _0x102F1 = _0x102CC / 2;
        const _0x10825 = {};
        const _0x12092 = "https://discord.com/channels/166703751053312000/630428963889741854";
        const _0xFFE8 = new firebase.auth.GoogleAuthProvider();
        const _0xFF2F = "https://accounts.gota.io";
        var _0x10972 = {
            key: "halloween2020",
            foodColors: [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
            customEjectedMass: false,
            particles: false,
            particlesMax: 100,
            motd: "",
            endDate: 1604188800000,
            enabled: false,
            motherCustomEnabled: false,
            motherCustom: function (_0xFF0A) {},
            happyMotherCells: []
        };
        _0x10972.enabled = new Date() < _0x10972.endDate;
        firebase.initializeApp({
            apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
            authDomain: "accounts.gota.io",
            databaseURL: "https://gota-io.firebaseio.com",
            projectId: "gota-io",
            storageBucket: "gota-io.appspot.com",
            messagingSenderId: "570450309042",
            appId: "1:570450309042:web:380ab6c94d44de2f"
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
            name: "All",
            flags: 255,
            maxMessages: 100
        }, {
            name: "Party",
            flags: 2,
            maxMessages: 100
        }];
        var _0x11B39 = 0;
        var _0x11493 = {
            cDisableAA: false,
            cAutoRespawn: false,
            cHideId: false,
            cHideServerDisplay: true,
            sShowNames: "ALL",
            sShowSkins: "ALL",
            sRenderType: "AUTO",
            sTextOutlines: "NONE",
            sQuality: "ULTRA",
            sMassType: "DEFAULT",
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
            iChatWidth: "360px",
            iChatHeight: "250px",
            rUiScale: 1.0,
            rAnimationDelay: 90,
            rViewDistance: 100,
            _ChatTabs: JSON.parse(JSON.stringify(_0x10791))
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
        const _0x107B6 = Object.assign({}, _0x10F5F);
        const _0x11FD9 = {
            uiForegroundColor: "rgb(255, 255, 255)",
            uiBackgroundColor: "rgba(23, 22, 23, 0.9)",
            uiBorderColor: "rgba(255, 255, 255, .2)",
            uiMenuBackgroundColor: "rgb(14, 14, 14)",
            uiMenuSubBackgroundColor: "rgba(50, 50, 50, 0.8)",
            uiGameBackgroundColor: "#121212",
            uiGameGridColor: "rgba(170, 170, 170, .25)",
            uiGameBorderColor: "#ff0000",
            uiLeaderboardHighlightSelf: "#ffaaaa",
            uiLeaderboardHighlightParty: "#ffff00",
            uiPartyLeaderColor: "#00ffff",
            uiGameColorSuccess: "#00ff00",
            uiGameColorWarning: "#ffff00",
            uiGameColorError: "#ff0000",
            _FoodColors: [],
            aCustomBackground: "",
            aCustomSpike: "",
            aCustomMother: "",
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
            skinName: "",
            effect: 0
        };
        var _0x10E5C = null;
        var _0x11C3C = null;
        var _0x1103D = 0;

        function _0x11F20() {
            _0x101EE = document.getElementById("canvas");
            _0x11346 = document.getElementById("minimap-canvas");
            _0x11390 = _0x11346.getContext("2d");
            _0x11321 = $("#main");
            _0x11674 = $("#party-panel");
            _0x10DED = $(".hud-panel");
            _0x11A80 = $("#score-panel");
            _0x11ACA = $("#main-scrimmage");
            _0x105D5 = $("#context-menu");
            _0x1033B = $("#chat-input");
            _0x11018 = $("#leaderboard-header");
            _0x10747 = $("#scrimmage-custom");
            _0x10825.mouseFrozenDiv = $("#score-mouse");
            _0x10825.playerScore = $("#playerScore");
            _0x10825.playerCells = $("#playerCells");
            _0x10825.playerFps = $("#playerFps");
            _0x10825.resetInfo = $("#extra-reset-timer");
            _0x10825.resetTime = $("#resetTime");
            _0x10825.respawnInfo = $("#extra-respawn-cooldown");
            _0x10825.respawnCooldown = $("#respawnCooldown");
            _0x10825.spectatorCount = $("#spectatorCount");
            _0x10825.playerCellCount = 0;
            _0x10825.minimapCoords = $("#minimap-coordinates");
            _0x10825.partyPanel = _0x11674;
            _0x10D34();
            _0x121BA = false;
            window.onmousemove = function (_0xFF2F) {
                _0x11752.mouseRawX = _0xFF2F.clientX;
                _0x11752.mouseRawY = _0xFF2F.clientY
            };
            window.onkeydown = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F.which || _0xFF2F.keyCode || _0xFF2F.charCode;
                if (_0xFF54 <= 5) {
                    return
                };
                if (_0x10F3A) {
                    _0x1007C(_0xFF54);
                    _0xFF2F.preventDefault();
                    return
                };
                if ($("input").is(":focus")) {
                    return
                };
                if (_0xFF54 == 27) {
                    _0x12048(_0x11321);
                    if (_0x10EF0($("#popup-profile") || _0x10EF0($("#popup-account-username")))) {
                        _0x10D59($("#popup-profile"));
                        _0x10D59($("#popup-account-username"))
                    }
                };
                if (_0x11321.css("display") != "none") {
                    return
                };
                _0x11752.handleKey(_0xFF54)
            };
            window.onkeyup = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F.which || _0xFF2F.keyCode || _0xFF2F.charCode;
                if (_0xFF54 == _0x10F5F.kEjectMass) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752.sendPacket(new _0x11502.sendEjectMass(false))
                    }
                }
            };
            window.onmousedown = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F.button + 1;
                if (_0x10F3A) {
                    _0x1007C(_0xFF54);
                    _0xFF2F.preventDefault();
                    return
                };
                if ($("input").is(":focus") || _0x11321.css("display") != "none") {
                    return
                };
                _0x11752.handleKey(_0xFF54)
            };
            window.onmouseup = function (_0xFF2F) {
                var _0xFF54 = _0xFF2F.button + 1;
                if (_0xFF54 == _0x10F5F.kEjectMass) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752.sendPacket(new _0x11502.sendEjectMass(false))
                    }
                }
            };
            window.onblur = function (_0xFF2F) {
                if (_0x121BA && !_0x11493.cPersistEjectMass) {
                    _0x121BA = false;
                    if (_0x11752) {
                        _0x11752.sendPacket(new _0x11502.sendEjectMass(false))
                    }
                }
            };
            $(document).on("mousewheel", function (_0xFF54) {
                if (_0x11321.css("display") == "none" && _0xFF54.target.id == "canvas") {
                    var _0xFF2F = _0xFF54.originalEvent.wheelDelta || (_0xFF54.originalEvent.deltaY * -1);
                    if (_0xFF2F > 0) {
                        _0x11752.mouseZoom *= 1.1
                    } else {
                        _0x11752.mouseZoom *= 0.9
                    };
                    _0x11752.mouseZoom = _0x11752.mouseZoom > 3 ? 3 : (_0x11752.mouseZoom < 0.2 ? 0.2 : _0x11752.mouseZoom)
                }
            });
            document.addEventListener("contextmenu", function (_0xFF2F) {
                _0xFF2F.preventDefault()
            });
            _0x110D1();
            _0x110AC();
            var _0xFF9E = window.location.href.split("#").slice(1).join("#").split("&");
            var _0xFFE8 = "";
            if (_0xFF9E[0]) {
                _0xFFE8 = _0xFF9E[0].toLowerCase()
            };
            if (_0xFF9E[1]) {
                _0x10032 = _0xFF9E[1]
            };
            if (_0xFFE8 != null && _0xFFE8 != "") {
                _0xFFE8 = _0xFFE8[0].toUpperCase() + _0xFFE8.slice(1);
                _0x11C3C = function () {
                    var _0xFF2F = null;
                    if ((_0xFF2F = _0x10BE7(_0xFFE8)) != null) {
                        _0x11BCD(_0xFF2F.name);
                        _0x11BA8(_0xFF2F.region)
                    } else {
                        _0xFF54()
                    }
                }
            } else {
                _0x11C3C = _0xFF54
            };
            firebase.database().ref("/game").on("value", function (_0xFF9E) {
                var _0xFF2F = _0xFF9E.val();
                if (_0xFF2F.version !== version) {
                    _0x11752.selfMsg("Woah! Version " + _0xFF2F.version + " is now available. Press Ctrl+R to update!")
                };
                if (_0x10FF3 != _0xFF2F.motd && _0xFF2F.motd !== "") {
                    _0x10FF3 = _0xFF2F.motd;
                    _0x11752.selfMsg(_0xFF2F.motd)
                };
                if (_0xFF2F.listRefresh != _0x1103D) {
                    _0x1103D = _0xFF2F.listRefresh;
                    _0x11C61 = {};
                    _0xFF79(_0x11C3C);
                    clearInterval(_0x10E5C);
                    _0x10E5C = setInterval(() => {
                        _0xFF79()
                    }, _0xFF2F.listRefresh)
                };
                for (var _0xFF54 in _0xFF2F.titles) {
                    _0x12023[_0xFF54] = _0xFF2F.titles[_0xFF54]
                }
            });

            function _0xFF79(_0xFF54) {
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: _0xFF2F + "/api/v1/utilities/servers",
                    success: function (_0xFF2F) {
                        for (var _0xFFE8 of _0xFF2F) {
                            var _0x10032 = [];
                            for (var _0xFF9E of _0xFFE8.servers) {
                                var _0xFFC3 = _0xFF9E.players + "/" + _0xFF9E.playersMax;
                                var _0x1000D = new _0x11C17(_0xFF9E.name, _0xFF9E.address, _0xFFC3, _0xFF9E.gamemode, _0xFFE8.region, _0xFF9E.ssl, _0xFF9E.order);
                                _0x1000D.playersCurrent = _0xFF9E.players;
                                _0x10032.push(_0x1000D)
                            };
                            _0x10032.sort((_0xFF2F, _0xFF54) => {
                                return _0xFF2F.order - _0xFF54.order
                            });
                            _0x11C61[_0xFFE8.region] = {};
                            for (var _0xFF79 = 0; _0xFF79 < _0x10032.length; _0xFF79++) {
                                var _0x1000D = _0x10032[_0xFF79];
                                _0x11C61[_0xFFE8.region][_0x1000D.name] = _0x1000D
                            }
                        };
                        _0x1118A();
                        if (_0xFF54 != null) {
                            _0xFF54()
                        } else {
                            if (_0x11B83 != null) {
                                _0x11BCD(_0x11B83.name)
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
                    _0x11BCD(_0x11B83.name);
                    return
                };
                _0x11BA8("eu");
                _0x11BCD("Vendetta")
            }
            _0x11DF8 = {};
            _0x11E42 = {};
            _0x11E1D = _0x11E67.NOT_LOADED;
            _0x111AF();
            _0x1128D();
            $(window).unload(_0x11424);
            _0x11752 = new _0x10541();
            _0x11502 = new _0x11527();
            _0x11062();
            _0x105FA.init();
            _0x1197D();
            var _0xFFC3 = {
                view: _0x101EE,
                transparent: true,
                forceCanvas: _0x11493.sRenderType === "CANVAS",
                antialias: !_0x11493.cDisableAA
            };
            _0x11708 = {
                renderer: _0x116E3.autoDetectRenderer(_0xFFC3),
                stage: _0x1172D
            };
            $(window).resize(_0x11449);
            _0x11449();
            _0x10FCE = Date.now();
            fps = 0;
            _0x11752.selfMsg("Welcome to Gota.io!");
            if (_0x10972.enabled && _0x10972.motd !== "") {
                _0x11752.selfMsg(_0x10972.motd)
            };
            if (_0x10972.enabled && _0x10972.particles && !_0x11493.cDisableEventSkins) {
                _0x115BB = new _0x115E0(_0x10972.particlesMax)
            };
            _0x12101();
            requestAnimationFrame(_0x11FFE)
        }

        function _0x111AF() {
            if (_0x11E1D != _0x11E67.NOT_LOADED) {
                return
            };
            jQuery.ajax({
                type: "GET",
                dataType: "jsonp",
                crossDomain: true,
                url: "https://gamedata.gota.io/skinData.php",
                data: {
                    "action": "get"
                },
                async: false,
                success: function (_0xFF2F) {
                    var _0xFF79 = JSON.parse(JSON.parse(_0xFF2F.json).names);
                    for (var _0xFF54 in _0xFF79) {
                        var _0xFF9E = _0xFF79[_0xFF54];
                        if (_0x11E42[_0xFF9E] === undefined) {
                            _0x11E42[_0xFF9E] = _0x11E67.NOT_LOADED
                        }
                    }
                },
                error: function (_0xFF2F, _0xFF79, _0xFF54) {
                    console.log(_0xFF2F);
                    console.log("Text status: " + _0xFF79);
                    console.log("Error thrown: " + _0xFF54)
                }
            })
        }

        function _0x11449() {
            _0x101EE.width = window.innerWidth * _0x114B8.resolution;
            _0x101EE.height = window.innerHeight * _0x114B8.resolution;
            _0x11708.renderer.resize(_0x101EE.width, _0x101EE.height);
            _0x11708.stage.position.x = (window.innerWidth * _0x114B8.resolution) / 2;
            _0x11708.stage.position.y = (window.innerHeight * _0x114B8.resolution) / 2
        }

        function _0x10A2B(_0xFF2F) {
            for (var _0xFF54 in _0x11FD9) {
                if (_0xFF54.charAt(0) == "u") {
                    _0xFF2F(_0xFF54)
                }
            }
        }

        function _0x11FFE() {
            var _0xFF79 = (Date.now() - _0x10FCE);
            _0x10FCE = Date.now();
            var _0xFF54 = Math.min(_0xFF79 / _0x11493.rAnimationDelay, 1.0);
            _0x10ABF += _0xFF79;
            for (var _0xFF9E in _0x11752.foodObjects) {
                _0x1007C = _0x11752.foodObjects[_0xFF9E];
                if (_0x1007C.steps > 0) {
                    _0x1007C.animate(_0xFF54)
                };
                _0x1007C.handleFood()
            };
            for (var _0xFF9E in _0x11752.bucket) {
                _0x1007C = _0x11752.bucket[_0xFF9E];
                if (_0x1007C.steps > 0) {
                    _0x1007C.animate(_0xFF54)
                };
                _0x1007C.handle()
            };
            var _0x10032 = 0,
                _0x10057 = 0,
                _0xFF2F = 0,
                _0x100C6 = 0,
                _0x1007C = null;
            for (var _0xFF9E in _0x11752.myCells) {
                _0x1007C = _0x11752.myCells[_0xFF9E];
                if (_0x1007C != null) {
                    _0x10032 += _0x1007C.x;
                    _0x10057 += _0x1007C.y;
                    _0x100C6 += _0x1007C.size;
                    _0xFF2F++
                }
            };
            if (_0xFF2F != 0) {
                _0x11752.centerX = _0x10032 / _0xFF2F;
                _0x11752.centerY = _0x10057 / _0xFF2F;
                _0x11752.centerSteps = 0;
                if (_0x11493.cDisableAutoZoom) {
                    _0x11752.scale_base = 0.2 * Math.max(_0x101EE.height / 1080, _0x101EE.width / 1920)
                } else {
                    _0x11752.scale_base = Math.pow(Math.min(64.0 / _0x100C6, 1), 0.4) * Math.max(_0x101EE.height / 1080, _0x101EE.width / 1920)
                }
            };
            if (_0x11752.centerSteps > 0) {
                _0x11752.centerX += (_0x11752.centerX_ - _0x11752.centerX) * _0xFF54;
                _0x11752.centerY += (_0x11752.centerY_ - _0x11752.centerY) * _0xFF54
            };
            var _0x1000D = _0x11752.scale_base * _0x11752.mouseZoom;
            _0x11752.scale = (9 * _0x11752.scale + _0x1000D) / 10;
            _0x112FC.scale.x = _0x11752.scale;
            _0x112FC.scale.y = _0x11752.scale;
            _0x112FC.pivot.x = _0x11752.centerX;
            _0x112FC.pivot.y = _0x11752.centerY;
            if (_0x11752.isConnected() && _0x11321.css("display") == "none") {
                if (!_0x11752.mouseFrozen) {
                    var _0xFFC3 = _0x112FC.pivot.x - (_0x11708.stage.position.x / _0x11752.scale) + ((_0x11752.mouseRawX * _0x114B8.resolution) / _0x11752.scale);
                    var _0xFFE8 = _0x112FC.pivot.y - (_0x11708.stage.position.y / _0x11752.scale) + ((_0x11752.mouseRawY * _0x114B8.resolution) / _0x11752.scale);
                    _0x11752.sendPacket(new _0x11502.sendMouse(_0xFFC3, _0xFFE8))
                }
            };
            if (!_0x11493.cHideMinimap) {
                _0x10894(_0xFF54)
            };
            if (_0x11493.cShowCoordinates) {
                _0x1086F()
            };
            _0x11752.buffHolder.update();
            _0x11708.renderer.render(_0x11708.stage);
            _0x10A9A++;
            if (_0x10ABF >= 1000) {
                _0x10825.playerFps.html(_0x10A9A);
                var _0x100EB = Date.now();
                if (_0x11752.serverData.resetType > 0 && _0x11752.serverData.resetTime > 0) {
                    _0x10825.resetInfo.css("display", "block");
                    var _0x100A1 = Math.max(0, Math.floor((_0x11752.serverData.resetTime - _0x100EB) / 1000));
                    _0x10825.resetTime.html(_0x10A75(_0x100A1))
                } else {
                    _0x10825.resetInfo.css("display", "none")
                };
                if (_0x11752.respawnCooldown > 0 && _0x11752.respawnCooldown >= _0x100EB) {
                    _0x10825.respawnInfo.css("display", "block");
                    var _0x100A1 = Math.max(0, Math.ceil((_0x11752.respawnCooldown - _0x100EB) / 1000));
                    _0x10825.respawnCooldown.html(_0x10A75(_0x100A1))
                } else {
                    if (_0x11752.respawnCooldown < 0) {
                        _0x10825.respawnInfo.css("display", "block");
                        _0x10825.respawnCooldown.html("NEVER")
                    } else {
                        _0x10825.respawnInfo.css("display", "none")
                    }
                };
                _0x10ABF = 0;
                _0x10A9A = 0
            };
            _0x11752.playerRegistry.handleUpdatedPlayers();
            requestAnimationFrame(_0x11FFE)
        }

        function _0x10C7B() {
            if (_0x11493.cShowBorder && _0x11752.serverData.border.enabled) {
                if (_0x100EB != null) {
                    _0x100EB.parent.removeChild(_0x100EB);
                    _0x100EB.destroy();
                    _0x100EB = null
                };
                _0x100EB = new _0x116E3.Graphics();
                _0x100EB.lineStyle(_0x11FD9.rBorderSize, _0x116E3.utils.string2hex(tinycolor(_0x11FD9.uiGameBorderColor).toHexString()));
                _0x100EB.drawRect(_0x11752.serverData.border.left, _0x11752.serverData.border.top, _0x11752.serverData.border.width, _0x11752.serverData.border.height);
                _0x10110.addChild(_0x100EB);
                _0x100EB.visible = true
            } else {
                if (_0x100EB != null) {
                    _0x100EB.parent.removeChild(_0x100EB);
                    _0x100EB.destroy();
                    _0x100EB = null
                }
            }
        }

        function _0x1086F() {
            _0x10825.minimapCoords.css({
                "color": _0x11FD9.uiForegroundColor
            });
            _0x10825.minimapCoords.html("X: " + _0x11752.centerX.toFixed(0) + " Y: " + _0x11752.centerY.toFixed(0))
        }

        function _0x10894(_0xFF2F) {
            if (!_0x11752.serverData.border.enabled) {
                return
            };
            _0x11390.clearRect(0, 0, _0x11346.width, _0x11346.height);
            _0x11390.font = "12px Calibri";
            for (var _0xFF54 = 0; _0xFF54 < _0x11752.party.length; _0xFF54++) {
                var _0xFF79 = _0x11752.party[_0xFF54];
                if (_0xFF79.state === _0x1164F.ALIVE && _0xFF79.id != _0x11752.playerId) {
                    _0x113B5(_0x11390, _0xFF79.name, _0xFF79.x, _0xFF79.y, 4, _0xFF79.mmColor, true);
                    _0xFF79.x += (_0xFF79.x_ - _0xFF79.x) * _0xFF2F;
                    _0xFF79.y += (_0xFF79.y_ - _0xFF79.y) * _0xFF2F
                }
            };
            _0x113B5(_0x11390, _0x11752.name, _0x11752.centerX, _0x11752.centerY, 6, "#fefefe", false)
        }

        function _0x11424() {
            _0x11A5B()
        }

        function _0x10541() {
            this.socket = null;
            this.currentServer = null;
            this.currentServerName = null;
            this.spectate = false;
            this.name = "";
            this.playerId = 0;
            this.bucket = {};
            this.foodObjects = {};
            this.myCells = {};
            this.playerRegistry = new _0x1179C();
            this.buffHolder = new _0x1017F();
            this.centerX = 0;
            this.centerY = 0;
            this.centerX_ = 0;
            this.centerY_ = 0;
            this.centerSteps = 0;
            this.scale = 1.0;
            this.scale_ = 1.0;
            this.scale_base = 1.0;
            this.mouseZoom = 1.0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.mouseRawX = 0;
            this.mouseRawY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.mouseFrozen = false;
            this.party = [];
            this.partyIds = {};
            this.subPanelOverride = false;
            this.serverData = {
                hasSentSubPanel: false,
                border: {},
                maxCells: 16
            };
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.accountListeners = {};
            this.clearStats();
            setInterval(this.sendPing.bind(this), 30000)
        }
        _0x10541.prototype.clearStats = function () {
            this.stats = {
                name: "An unnamed cell",
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
        _0x10541.prototype.play = function () {
            if (_0x11B83 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.name = $("#name-box").val();
            this.spectate = false;
            this.currentServerName = _0x11B83.name;
            $("#playerServer").html(this.currentServerName);
            _0x11165();
            if (this.isConnected() && this.currentServer == _0x11B83.ip) {
                this.sendPacket(new _0x11502.setName(this.name))
            } else {
                this.connect(_0x11B83.ip)
            };
            _0x11D3F();
            _0x10D59(_0x11321);
            ga("send", "event", "Game", "webMenu", "Play")
        };
        _0x10541.prototype.spec = function () {
            if (_0x11B83 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.spectate = true;
            _0x11165();
            if (this.isConnected() && this.currentServer == _0x11B83.ip) {
                this.sendPacket(new _0x11502.sendSpectate())
            } else {
                this.connect(_0x11B83.ip)
            };
            _0x11D3F();
            _0x10D59(_0x11321);
            ga("send", "event", "Game", "webMenu", "Spectate")
        };
        _0x10541.prototype.connect = function (_0xFF54) {
            if (this.socket != null) {
                this.socket.nextUrl = _0xFF54;
                this.disconnect(_0xFF54);
                return
            };
            this.currentServer = _0xFF54;
            this.currentServerName = _0x11B83.name;
            this.selfMsg("Connecting to " + this.currentServerName + "...");
            if (_0x11B83.ssl == 1) {
                this.socket = new WebSocket("wss://" + _0xFF54)
            } else {
                this.socket = new WebSocket("ws://" + _0xFF54)
            };
            this.socket.binaryType = "arraybuffer";
            var _0xFF2F = this;
            this.socket.onopen = this.onConnect.bind(this);
            this.socket.onmessage = this.onMessage.bind(this);
            this.socket.onclose = function (_0xFF54) {
                _0xFF2F.reset();
                _0xFF2F.selfMsg("You have been disconnected from the server. Reason: " + (_0xFF54.reason === "" ? "Unknown" : _0xFF54.reason));
                if (this.nextUrl != null) {
                    _0xFF2F.connect(this.nextUrl)
                }
            };
            this.socket.onerror = function (_0xFF79) {
                _0xFF2F.reset();
                this.nextUrl = null;
                _0xFF2F.selfMsg("Error connecting to server... Retrying every second.");
                setTimeout(function () {
                    if (_0xFF2F.isConnected() == false && _0xFF2F.socket == null) {
                        _0xFF2F.connect(_0xFF54)
                    }
                }, 1000)
            };
            document.body.classList.add("hide-captcha-badge")
        };
        _0x10541.prototype.disconnect = function (_0xFF2F) {
            if (this.socket != null) {
                this.socket.close()
            }
        };
        _0x10541.prototype.clearBuckets = function () {
            for (var _0xFF2F in this.bucket) {
                this.bucket[_0xFF2F].onDelete();
                delete this.bucket[_0xFF2F]
            };
            for (var _0xFF2F in this.foodObjects) {
                this.foodObjects[_0xFF2F].onDelete();
                delete this.foodObjects[_0xFF2F]
            }
        };
        _0x10541.prototype.reset = function () {
            this.clearBuckets();
            this.myCells = {};
            this.playerRegistry.clear();
            this.playerId = 0;
            this.score = 0;
            this.respawnCooldown = 0;
            this.customGameMap = null;
            this.currentServer = null;
            this.clearStats();
            this.clearParty();
            this.buffHolder.clearBuffs();
            this.serverData.hasSentSubPanel = false;
            this.serverData.resetType = 0;
            if (this.socket != null) {
                this.socket = null
            };
            $("#playerId").html(this.playerId);
            if (this.subPanelOverride) {
                this.subPanelOverride = false;
                _0x1214B()
            }
        };
        _0x10541.prototype.handleKey = function (_0xFF54) {
            if (_0xFF54 == _0x10F5F.kEjectMass) {
                _0x121BA = true;
                this.sendPacket(new _0x11502.sendEjectMass(true))
            } else {
                if (_0xFF54 == _0x10F5F.kSplit) {
                    this.sendPacket(new _0x11502.sendKey(17))
                } else {
                    if (_0xFF54 == _0x10F5F.kToggleSpec) {
                        this.sendPacket(new _0x11502.sendKey(18))
                    } else {
                        if (_0xFF54 == _0x10F5F.kDoubleSplit) {
                            this.sendPacket(new _0x11502.sendKey(17));
                            this.sendPacket(new _0x11502.sendKey(17))
                        } else {
                            if (_0xFF54 == _0x10F5F.kTripleSplit) {
                                for (var _0xFF2F = 0; _0xFF2F < 3; _0xFF2F++) {
                                    this.sendPacket(new _0x11502.sendKey(17))
                                }
                            } else {
                                if (_0xFF54 == _0x10F5F.kQuadSplit) {
                                    for (var _0xFF2F = 0; _0xFF2F < 4; _0xFF2F++) {
                                        this.sendPacket(new _0x11502.sendKey(17))
                                    }
                                } else {
                                    if (_0xFF54 == _0x10F5F.kHexaSplit) {
                                        for (var _0xFF2F = 0; _0xFF2F < 6; _0xFF2F++) {
                                            this.sendPacket(new _0x11502.sendKey(17))
                                        }
                                    } else {
                                        if (_0xFF54 == 38) {
                                            this.mouseZoom *= 1.025;
                                            this.mouseZoom = _0x11752.mouseZoom > 3 ? 3 : (this.mouseZoom < 0.2 ? 0.2 : this.mouseZoom)
                                        } else {
                                            if (_0xFF54 == 40) {
                                                this.mouseZoom *= 0.975;
                                                this.mouseZoom = _0x11752.mouseZoom > 3 ? 3 : (this.mouseZoom < 0.2 ? 0.2 : this.mouseZoom)
                                            } else {
                                                if (_0xFF54 == _0x10F5F.kFreezeMouse) {
                                                    this.mouseFrozen = !this.mouseFrozen;
                                                    if (this.mouseFrozen) {
                                                        _0x10825.mouseFrozenDiv.css("display", "block")
                                                    } else {
                                                        _0x10825.mouseFrozenDiv.css("display", "none")
                                                    }
                                                } else {
                                                    if (_0xFF54 == _0x10F5F.kContextMenu) {
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
        _0x10541.prototype.isConnected = function () {
            if (this.socket == null) {
                return false
            } else {
                return this.socket.readyState == 1
            }
        };
        _0x10541.prototype.sendPacket = function (_0xFF2F) {
            if (this.isConnected()) {
                this.socket.send(_0xFF2F)
            }
        };
        _0x10541.prototype.onConnect = function () {
            _0x100A1 = [];
            _0x109BC();
            this.sendPacket(new _0x11502.connectionStart());
            this.sendPing();
            this.sendOptions();
            if (firebase.auth().currentUser !== null) {
                firebase.auth().currentUser.getIdToken(true).then((_0xFF2F) => {
                    _0x11752.sendPacket(new _0x11502.sendAuthToken(_0xFF2F))
                }).catch((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                });
                return
            } else {
                if (!this.spectate) {
                    this.sendPacket(new _0x11502.setName(this.name))
                } else {
                    this.sendPacket(new _0x11502.sendSpectate())
                }
            }
        };
        _0x10541.prototype.sendPing = function () {
            if (this.isConnected()) {
                _0x116BE = +new Date;
                this.sendPacket(new _0x11502.sendPing())
            }
        };
        _0x10541.prototype.sendOptions = function () {
            if (this.isConnected()) {
                this.sendPacket(new _0x11502.sendOptions())
            }
        };
        _0x10541.prototype.selfMsg = function (_0xFF54) {
            var _0xFF2F = document.createElement("td");
            var _0xFF79 = document.createElement("span");
            _0xFF79.style.color = "#DDDD00";
            _0xFF79.innerHTML = "[System] " + _0x11596(_0xFF54);
            _0xFF2F.appendChild(_0xFF79);
            _0xFF9E(_0x10463.SYSTEM, _0xFF2F)
        };
        _0x10541.prototype.selfMsgWithJoinCode = function (_0xFFC3, _0xFF2F) {
            var _0xFF79 = document.createElement("td");
            var _0xFFE8 = document.createElement("span");
            _0xFFE8.style.color = "#DDDD00";
            _0xFFE8.innerHTML = "[System] " + _0x11596(_0xFFC3);
            _0xFF79.appendChild(_0xFFE8);
            var _0xFF54 = document.createElement("span");
            _0xFF54.style.color = "#DDDD00";
            _0xFF54.innerHTML = _0xFF2F;
            _0xFF54.style.pointerEvents = "all";
            _0xFF54.style.userSelect = "all";
            _0xFF79.appendChild(_0xFF54);
            _0xFF9E(_0x10463.SYSTEM, _0xFF79)
        };
        _0x10541.prototype.clearParty = function (_0xFF2F) {
            this.party = [];
            this.partyIds = {};
            this.partyLeader = -1;
            this.partyIndex = -1;
            $("#party-panel").css("display", "none");
            if (_0x10747.css("display") == "block") {
                this.handleCustomGameLeave()
            };
            if (this.partyCode != null || _0x10032 != null) {
                this.partyCode = _0x10032 = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0x10541.prototype.isPartyLeader = function () {
            return this.partyLeader == this.playerId
        };
        _0x10541.prototype.getServerMaxCells = function () {
            return this.serverData.maxCells + this.buffHolder.bonusMaxCells
        };
        _0x10541.prototype.onMessage = function (_0xFF54) {
            var _0xFF2F = new DataView(_0xFF54.data);
            var _0xFF79 = _0xFF2F.getUint8(0);
            _0xFF2F.offset = 1;
            switch (_0xFF79) {
            case 2:
                this.handleUpdate(_0xFF2F);
                break;
            case 10:
                this.handlePosition(_0xFF2F);
                break;
            case 21:
                this.handleStats(_0xFF2F);
                break;
            case 22:
                this.showSubPanel(_0xFF2F);
                break;
            case 23:
                this.updateSubPanel(_0xFF2F);
                break;
            case 40:
                this.handleInvite(_0xFF2F);
                break;
            case 41:
                this.handlePartyInfo(_0xFF2F);
                break;
            case 45:
                this.handlePartyData(_0xFF2F);
                break;
            case 43:
                this.handlePartyJoinCode(_0xFF2F);
                break;
            case 49:
                this.handleLeaderboard(_0xFF2F);
                break;
            case 50:
                this.handleLeaderboardCustom(_0xFF2F);
                break;
            case 63:
                this.handleRespawnCooldown(_0xFF2F);
                break;
            case 64:
                this.handleMapData(_0xFF2F);
                break;
            case 65:
                this.handleClearNodes();
                break;
            case 66:
                this.handleUpdateBorder(_0xFF2F);
                break;
            case 68:
                this.handleResetTime(_0xFF2F);
                break;
            case 69:
                this.handleSpectators(_0xFF2F);
                break;
            case 70:
                this.handleSystemMsg(_0xFF2F);
                break;
            case 71:
                this.handlePing();
                break;
            case 72:
                this.handleChat(_0xFF2F);
                break;
            case 73:
                this.handleWhisper(_0xFF2F);
                break;
            case 80:
                this.handleShowScrimmageMenu();
                break;
            case 81:
                this.handleQueueData(_0xFF2F);
                break;
            case 82:
                this.handleQueueLeave(_0xFF2F);
                break;
            case 83:
                this.handleMatchState(_0xFF2F);
                break;
            case 90:
                this.handleScrimmageData(_0xFF2F);
                break;
            case 91:
                this.handleCustomGameShow(_0xFF2F);
                break;
            case 92:
                this.handleCustomGameUpdate(_0xFF2F);
                break;
            case 93:
                this.handleCustomGameLeave();
                break;
            case 94:
                this.handleShowCustomGameLobbies(_0xFF2F);
                break;
            case 100:
                this.handleAddBuff(_0xFF2F);
                break;
            case 101:
                this.handleRemoveBuff(_0xFF2F);
                break;
            case 102:
                this.handleClearBuffs(_0xFF2F);
                break;
            case 103:
                this.handleAuthenticated(_0xFF2F);
                break;
            case 104:
                this.handleProfile(_0xFF2F);
                break
            }
        };
        _0x10541.prototype.handleUpdate = function (_0x1000D) {
            while (true) {
                var _0xFF79 = _0x1000D.getUint16(_0x1000D.offset, true);
                _0x1000D.offset += 2;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFFC3 = this.playerRegistry.getPlayer(_0xFF79);
                var _0xFF54 = false;
                if (_0xFFC3 == null) {
                    _0xFFC3 = new _0x11777(_0xFF79)
                } else {
                    _0xFF54 = true
                };
                _0xFFC3.cellColor = (_0x1000D.getUint8(_0x1000D.offset++) << 16) + (_0x1000D.getUint8(_0x1000D.offset++) << 8) + _0x1000D.getUint8(_0x1000D.offset++);
                _0xFFC3.name = _0x11933(_0x1000D);
                _0xFFC3.setFlags(_0x1000D.getUint8(_0x1000D.offset++));
                if ((_0xFFC3.flags & 2) == 2) {
                    _0xFFC3.nameColor = "#" + _0x101C9(_0x1000D.getUint8(_0x1000D.offset++)) + _0x101C9(_0x1000D.getUint8(_0x1000D.offset++)) + _0x101C9(_0x1000D.getUint8(_0x1000D.offset++));
                    _0xFFC3.parseEffect(_0x1000D.getUint8(_0x1000D.offset++));
                    _0xFFC3.setSkin(_0x11958(_0x1000D), true)
                };
                if (_0xFFC3.skin == null) {
                    _0xFFC3.setSkin(_0xFFC3.name)
                };
                if (!_0xFF54) {
                    _0x11752.playerRegistry.add(_0xFFC3)
                } else {
                    _0x11752.playerRegistry.updatePlayer(_0xFFC3)
                }
            };
            while (true) {
                var _0xFF79 = _0x1000D.getUint16(_0x1000D.offset, true);
                _0x1000D.offset += 2;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFFE8 = _0x1000D.getUint8(_0x1000D.offset++);
                var _0xFF9E;
                if (_0xFFE8 == 0) {
                    _0xFF9E = this.foodObjects[_0xFF79]
                } else {
                    _0xFF9E = this.bucket[_0xFF79]
                };
                if (_0xFF9E == null) {
                    _0xFF9E = new _0x1025D(_0xFF79);
                    _0xFF9E.setType(_0xFFE8);
                    _0xFF9E.setX(_0x1000D.getInt16(_0x1000D.offset, true));
                    _0xFF9E.setY(_0x1000D.getInt16(_0x1000D.offset + 2, true));
                    _0x1000D.offset += 4;
                    switch (_0xFFE8) {
                    case 0:
                        _0xFF9E.color = _0x10B9D(_0xFF9E.id);
                        break;
                    case 1:
                        _0xFF9E.setSize(_0x1000D.getUint16(_0x1000D.offset, true));
                        _0x1000D.offset += 2;
                        _0xFF9E.parsedColor = "#" + _0x101C9(_0x1000D.getUint8(_0x1000D.offset)) + _0x101C9(_0x1000D.getUint8(_0x1000D.offset + 1)) + _0x101C9(_0x1000D.getUint8(_0x1000D.offset + 2));
                        _0xFF9E.color = (_0x1000D.getUint8(_0x1000D.offset++) << 16) + (_0x1000D.getUint8(_0x1000D.offset++) << 8) + _0x1000D.getUint8(_0x1000D.offset++);
                        _0xFF9E.skin = _0x1000D.getUint8(_0x1000D.offset++) - 1;
                        break;
                    case 2:
                        _0xFF9E.setSize(_0x1000D.getUint16(_0x1000D.offset, true));
                        _0x1000D.offset += 2;
                        _0xFF9E.playerId = _0x1000D.getUint16(_0x1000D.offset, true);
                        _0x1000D.offset += 2;
                        break;
                    case 3:
                        _0xFF9E.setSize(_0x1000D.getUint16(_0x1000D.offset, true));
                        _0x1000D.offset += 2;
                        break;
                    case 4:
                        _0xFF9E.setSize(_0x1000D.getUint16(_0x1000D.offset, true));
                        _0x1000D.offset += 2;
                        break;
                    case 5:
                        _0xFF9E.setSize(80);
                        _0xFF9E.buff = _0x1000D.getUint8(_0x1000D.offset++);
                        break
                    };
                    _0xFF9E.onCreate();
                    if (_0xFFE8 == 0) {
                        this.foodObjects[_0xFF79] = _0xFF9E
                    } else {
                        this.bucket[_0xFF79] = _0xFF9E
                    };
                    if (_0xFF9E.playerId == this.playerId) {
                        this.myCells[_0xFF79] = _0xFF9E
                    }
                } else {
                    _0xFF9E.updateX(_0x1000D.getInt16(_0x1000D.offset, true));
                    _0xFF9E.updateY(_0x1000D.getInt16(_0x1000D.offset + 2, true));
                    _0x1000D.offset += 4;
                    switch (_0xFFE8) {
                    case 0:
                        break;
                    case 1:
                        _0xFF9E.size_ = _0x1000D.getUint16(_0x1000D.offset, true);
                        _0x1000D.offset += 2;
                        _0x1000D.offset += 4;
                        break;
                    case 2:
                        _0xFF9E.size_ = _0x1000D.getUint16(_0x1000D.offset, true);
                        _0x1000D.offset += 2;
                        _0x1000D.offset += 2;
                        break;
                    case 3:
                        _0xFF9E.size_ = _0x1000D.getUint16(_0x1000D.offset, true);
                        _0x1000D.offset += 2;
                        break;
                    case 4:
                        _0xFF9E.size_ = _0x1000D.getUint16(_0x1000D.offset, true);
                        _0x1000D.offset += 2;
                        break;
                    case 5:
                        _0x1000D.offset++;
                        break
                    };
                    _0xFF9E.steps = 30
                }
            };
            var _0xFF2F = _0x1000D.getUint16(_0x1000D.offset, true);
            _0x1000D.offset += 2;
            while (_0xFF2F > 0) {
                var _0xFF79 = _0x1000D.getUint16(_0x1000D.offset, true);
                _0x1000D.offset += 2;
                _0x11752.playerRegistry.remove(_0xFF79);
                _0xFF2F--
            };
            _0xFF2F = _0x1000D.getUint16(_0x1000D.offset, true);
            _0x1000D.offset += 2;
            while (_0xFF2F > 0) {
                var _0xFF79 = _0x1000D.getUint16(_0x1000D.offset, true);
                _0x1000D.offset += 2;
                var _0xFF9E = this.bucket[_0xFF79] || this.foodObjects[_0xFF79];
                if (_0xFF9E != null) {
                    if (_0xFF9E.type == 0) {
                        delete this.foodObjects[_0xFF79]
                    } else {
                        delete this.bucket[_0xFF79]
                    };
                    if (_0xFF9E.playerId == this.playerId) {
                        delete this.myCells[_0xFF79];
                        if (Object.keys(this.myCells).length == 0) {
                            if (_0x11493.cAutoRespawn) {
                                if ($("#main").css("display") == "none") {
                                    _0x11752.play()
                                }
                            } else {
                                if (_0x11ACA.css("display") != "block") {
                                    _0x11D64(_0x11321)
                                };
                                aiptag.cmd.display.push(function () {
                                    aipDisplayTag.refresh("GOT_gota-io_336x280")
                                })
                            }
                        }
                    };
                    _0xFF9E.onDelete()
                };
                _0xFF2F--
            };
            this.sortCells()
        };
        _0x10541.prototype.handlePosition = function (_0xFF2F) {
            this.centerX_ = _0xFF2F.getFloat32(_0xFF2F.offset, true);
            _0xFF2F.offset += 4;
            this.centerY_ = _0xFF2F.getFloat32(_0xFF2F.offset, true);
            _0xFF2F.offset += 4;
            this.centerSteps = 30;
            if (!_0x11493.cDisableAutoZoom) {
                this.scale_base = _0xFF2F.getFloat32(_0xFF2F.offset, true)
            }
        };
        _0x10541.prototype.handleRespawnCooldown = function (_0xFF54) {
            var _0xFF2F = _0xFF54.getFloat64(_0xFF54.offset, true);
            this.respawnCooldown = _0xFF2F
        };
        _0x10541.prototype.handleMapData = function (_0xFF2F) {
            this.playerId = _0xFF2F.getUint16(_0xFF2F.offset, true);
            _0xFF2F.offset += 2 + 1;
            this.handleUpdateBorder(_0xFF2F);
            this.serverData.maxCells = _0xFF2F.getUint16(_0xFF2F.offset, true);
            _0xFF2F.offset += 2;
            $("#playerId").html(_0x11752.playerId);
            this.updateCellCounter(0, true);
            if (_0x10032 != null) {
                _0x11752.sendPacket(new _0x11502.sendPartyJoin(_0x10032))
            };
            _0x11ACA.css("display", "none");
            $("#scrimmage-btn-leave").css("display", "none")
        };
        _0x10541.prototype.handleUpdateBorder = function (_0xFF2F) {
            this.serverData.border = {};
            this.serverData.border.left = _0xFF2F.getInt16(_0xFF2F.offset, true);
            this.serverData.border.top = _0xFF2F.getInt16(_0xFF2F.offset + 2, true);
            this.serverData.border.right = _0xFF2F.getInt16(_0xFF2F.offset + 4, true);
            this.serverData.border.bottom = _0xFF2F.getInt16(_0xFF2F.offset + 6, true);
            _0xFF2F.offset += 8;
            this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
            this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
            this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0;
            _0x10C7B()
        };
        _0x10541.prototype.handleResetTime = function (_0xFF79) {
            var _0xFF54 = _0xFF79.getUint8(_0xFF79.offset++);
            var _0xFF2F = _0xFF79.getFloat64(_0xFF79.offset, true);
            this.serverData.resetType = _0xFF54;
            this.serverData.resetTime = _0xFF2F
        };
        _0x10541.prototype.handleSpectators = function (_0xFF2F) {
            this.spectators = _0xFF2F.getUint16(_0xFF2F.offset, true);
            this.updateSpectators()
        };
        _0x10541.prototype.handleClearNodes = function (_0xFF2F) {
            this.clearBuckets()
        };
        _0x10541.prototype.handleLeaderboard = function (_0x10032) {
            var _0xFFC3 = document.getElementById("leaderboard-canvas");
            var _0xFF54 = _0xFFC3.getContext("2d");
            _0x11018.text("Leaderboard");
            var _0xFF2F = _0x10032.getUint32(_0x10032.offset, true);
            _0x10032.offset += 4;
            _0xFFC3.width = 200;
            _0xFFC3.height = (20 * _0xFF2F) + 5;
            _0xFF54.font = "16px Calibri";
            var _0x1000D = 20;
            for (var _0xFF79 = 0; _0xFF79 < _0xFF2F; _0xFF79++) {
                var _0xFF9E = _0x10032.getUint16(_0x10032.offset, true);
                _0x10032.offset += 2;
                var _0xFFE8 = _0x11933(_0x10032) || "An unnamed cell";
                if (_0xFF9E == this.playerId) {
                    _0xFF54.fillStyle = _0x11FD9.uiLeaderboardHighlightSelf
                } else {
                    if (this.partyIds[_0xFF9E] != null) {
                        _0xFF54.fillStyle = _0x11FD9.uiLeaderboardHighlightParty
                    } else {
                        _0xFF54.fillStyle = _0x11FD9.uiForegroundColor
                    }
                };
                _0xFF54.fillText((_0xFF79 + 1) + ". " + _0xFFE8, 10, _0x1000D);
                _0x1000D += 20
            }
        };
        _0x10541.prototype.handleLeaderboardCustom = function (_0x10057) {
            var _0xFFC3 = document.getElementById("leaderboard-canvas");
            var _0xFF79 = _0xFFC3.getContext("2d");
            _0x11018.html("Leaderboard");
            var _0xFF2F = _0x10057.getUint16(_0x10057.offset, true);
            var _0xFF54 = _0x10057.getUint8(_0x10057.offset + 2, true);
            var _0x10032 = _0x10057.getUint8(_0x10057.offset + 3, true);
            _0x10057.offset += 4;
            _0xFFC3.width = 200;
            _0xFFC3.height = (20 * _0xFF2F) + 5;
            _0xFF79.font = "16px Calibri";
            var _0x1000D = 20;
            for (var _0xFF9E = 0; _0xFF9E < _0xFF2F; _0xFF9E++) {
                var _0xFFE8 = _0x11958(_0x10057);
                if (_0xFF9E == _0xFF54) {
                    _0xFF79.fillStyle = _0x11FD9.uiLeaderboardHighlightSelf
                } else {
                    _0xFF79.fillStyle = _0x11FD9.uiForegroundColor
                };
                _0xFF79.fillText(_0xFFE8, 5, _0x1000D);
                _0x1000D += 20
            }
        };
        _0x10541.prototype.handlePing = function () {
            var _0xFF2F = +new Date - _0x116BE;
            if (!_0x11493.cColoredPing) {
                if (_0xFF2F < 100) {
                    $("#playerPing").css({
                        "color": _0x11FD9.uiGameColorSuccess
                    })
                } else {
                    if (_0xFF2F < 200) {
                        $("#playerPing").css({
                            "color": _0x11FD9.uiGameColorWarning
                        })
                    } else {
                        $("#playerPing").css({
                            "color": _0x11FD9.uiGameColorError
                        })
                    }
                }
            } else {
                $("#playerPing").css({
                    "color": _0x11FD9.uiForegroundColor
                })
            };
            $("#playerPing").html(_0xFF2F + "ms")
        };
        _0x10541.prototype.handleChat = function (_0x101C9) {
            var _0xFF2F = _0x101C9.getUint8(_0x101C9.offset++);
            var _0x100EB = "rgb(" + _0x101C9.getUint8(_0x101C9.offset++) + "," + _0x101C9.getUint8(_0x101C9.offset++) + "," + _0x101C9.getUint8(_0x101C9.offset++) + ")";
            var _0xFF79 = _0x101C9.getUint8(_0x101C9.offset++);
            var _0x10135 = _0x101C9.getUint16(_0x101C9.offset, true);
            _0x101C9.offset += 2;
            if (_0x100A1.includes(_0x10135)) {
                return
            };
            var _0x1017F = _0x11933(_0x101C9);
            var _0xFFC3 = _0x101C9.getUint8(_0x101C9.offset++);
            var _0x100C6 = _0x11596(_0x11933(_0x101C9)) || "An unnamed cell";
            var _0x1007C = _0x11596(_0x11933(_0x101C9));
            var _0xFFE8 = _0x10463.ALL;
            var _0xFF54;
            switch (_0xFF2F) {
            case 1:
                _0xFF54 = "Party";
                _0xFFE8 = _0x10463.PARTY;
                break;
            case 2:
                _0xFF54 = "Admin";
                _0xFFE8 = _0x10463.ADMIN;
                break;
            default:
                _0xFF54 = "All";
                break
            };
            if (_0x1017F.length > 0) {
                _0x11596(_0xFF54 += " - " + _0x1017F)
            };
            var _0x10057 = document.createElement("td");
            var _0x1015A = document.createElement("span");
            _0x1015A.innerHTML = "[" + _0xFF54 + "] ";
            _0x10057.appendChild(_0x1015A);
            var _0x10110 = document.createElement("span");
            _0x10110.innerText = _0x100C6;
            _0x10110.dataset.playerId = _0x10135;
            _0x10110.style.color = _0x100EB;
            _0x10110.className = "chat-name";
            _0x10110.oncontextmenu = _0x10385;
            _0x10057.appendChild(_0x10110);
            var _0x101A4 = null;
            if (_0xFFC3 > 0) {
                _0x101A4 = document.createElement("div");
                _0x101A4.className = "chat-text";
                var _0x1000D = document.createElement("span");
                _0x1000D.innerHTML = ": ";
                _0x10057.appendChild(_0x1000D);
                _0x101A4.innerHTML = _0x11571(_0x1007C);
                switch (_0xFFC3) {
                case 1:
                    _0x101A4.className += " effect_ice";
                    var _0x10032 = document.createElement("div");
                    _0x10032.className = "effect_snow";
                    _0x101A4.appendChild(_0x10032);
                    break;
                case 2:
                    _0x101A4.className += " effect_fire";
                    break;
                default:
                    break
                }
            } else {
                _0x101A4 = document.createElement("span");
                _0x101A4.style.color = _0x10360[_0xFF79];
                if (_0xFF79 == 0) {
                    _0x101A4.innerHTML = ": " + _0x11571(_0x1007C)
                } else {
                    var _0x1000D = document.createElement("span");
                    _0x1000D.innerHTML = ": ";
                    _0x10057.appendChild(_0x1000D);
                    _0x101A4.innerHTML = _0x11571(_0x1007C)
                }
            };
            _0x10057.appendChild(_0x101A4);
            _0xFF9E(_0xFFE8, _0x10057)
        };
        _0x10541.prototype.handleWhisper = function (_0x10135) {
            var _0x10057 = _0x11596(_0x11933(_0x10135)) || "An unnamed cell";
            var _0x100C6 = _0x10135.getUint16(_0x10135.offset, true);
            _0x10135.offset += 2;
            if (_0x100A1.includes(_0x100C6)) {
                return
            };
            var _0x1007C = "rgb(" + _0x10135.getUint8(_0x10135.offset++) + "," + _0x10135.getUint8(_0x10135.offset++) + "," + _0x10135.getUint8(_0x10135.offset++) + ")";
            var _0xFFC3 = _0x11596(_0x11933(_0x10135)) || "An unnamed cell";
            var _0x1000D = _0x10135.getUint16(_0x10135.offset, true);
            _0x10135.offset += 2;
            var _0xFFE8 = "rgb(" + _0x10135.getUint8(_0x10135.offset++) + "," + _0x10135.getUint8(_0x10135.offset++) + "," + _0x10135.getUint8(_0x10135.offset++) + ")";
            var _0xFF79 = _0x11596(_0x11933(_0x10135));
            var _0xFF54 = document.createElement("td");
            var _0x100EB = document.createElement("span");
            _0x100EB.innerText = _0x10057;
            _0x100EB.dataset.playerId = _0x100C6;
            _0x100EB.style.color = _0x1007C;
            _0x100EB.className = "chat-name";
            _0x100EB.oncontextmenu = _0x10385;
            _0xFF54.appendChild(_0x100EB);
            var _0xFF2F = document.createElement("span");
            _0xFF2F.innerHTML = " > ";
            _0xFF54.appendChild(_0xFF2F);
            var _0x10032 = document.createElement("span");
            _0x10032.innerText = _0xFFC3;
            _0x10032.dataset.playerId = _0x1000D;
            _0x10032.style.color = _0xFFE8;
            _0x10032.className = "chat-name";
            _0x10032.oncontextmenu = _0x10385;
            _0xFF54.appendChild(_0x10032);
            var _0x10110 = document.createElement("span");
            _0x10110.innerHTML = ": " + _0x11571(_0xFF79);
            _0xFF54.appendChild(_0x10110);
            _0xFF9E(_0x10463.WHISPER, _0xFF54)
        };
        _0x10541.prototype.handleSystemMsg = function (_0xFF54) {
            var _0xFF2F = _0x11933(_0xFF54);
            this.selfMsg(_0xFF2F)
        };
        _0x10541.prototype.handleAuthenticated = function (_0xFF54) {
            var _0xFF2F = _0xFF54.getUint8(1);
            switch (_0xFF2F) {
            case _0x1000D.SUCCESS:
                break;
            case _0x1000D.FAILURE:
                this.selfMsg("Invalid authentication token! Please logout and try again!");
                break
            };
            if (!this.spectate) {
                this.sendPacket(new _0x11502.setName(this.name))
            } else {
                this.sendPacket(new _0x11502.sendSpectate())
            }
        };
        _0x10541.prototype.handleProfile = function (_0xFF79) {
            var _0xFF2F = _0x11958(_0xFF79);
            var _0xFF54 = JSON.parse(_0xFF2F);
            _0x11140(_0xFF54, _0x11321, true)
        };
        _0x10541.prototype.handleInvite = function (_0xFF79) {
            if (_0x11493.cAutoDecline) {
                _0x11752.sendPacket(new _0x11502.sendInviteResponse(false))
            } else {
                var _0xFF54 = _0x11596(_0x11933(_0xFF79));
                var _0xFF2F = document.getElementById("popup-party-text");
                _0xFF2F.innerText = _0xFF54 + " has invited you to a party.";
                _0x11D64($("#popup-party"))
            }
        };
        _0x10541.prototype.handlePartyInfo = function (_0x10057) {
            var _0xFFC3 = {};
            var _0x1000D = [];
            var _0xFFE8 = -1;
            var _0xFF2F = _0x10057.getUint16(_0x10057.offset, true);
            _0x10057.offset += 2;
            for (var _0xFF79 = 0; _0xFF79 < _0xFF2F; _0xFF79++) {
                var _0xFF9E = {};
                var _0xFF54 = _0x10057.getUint8(_0x10057.offset++);
                _0xFF9E.id = _0x10057.getUint16(_0x10057.offset, true);
                _0xFFC3[_0xFF9E.id] = _0xFF79;
                _0x10057.offset += 2;
                if (_0xFF54 == 1) {
                    _0xFFE8 = _0xFF9E.id;
                    _0xFF9E.isLeader = true
                } else {
                    _0xFF9E.isLeader = false
                };
                _0xFF9E.name = _0x11933(_0x10057) || "An unnamed cell";
                _0xFF9E.x = 0;
                _0xFF9E.y = 0;
                _0xFF9E.x_ = 0;
                _0xFF9E.y_ = 0;
                _0xFF9E.score = 0;
                _0xFF9E.cache = -1;
                _0xFF9E.team = 0;
                _0xFF9E.state = _0x1164F.UNKNOWN;
                if (this.partyIds[_0xFF9E.id] != null) {
                    var _0x10032 = this.party[this.partyIds[_0xFF9E.id]];
                    _0xFF9E.x = _0x10032.x;
                    _0xFF9E.y = _0x10032.y;
                    _0xFF9E.x_ = _0x10032.x_;
                    _0xFF9E.y_ = _0x10032.y_;
                    _0xFF9E.state = _0x10032.state;
                    _0xFF9E.score = _0x10032.score;
                    _0xFF9E.cache = _0x10032.cache;
                    _0xFF9E.mmColor = _0x10032.mmColor
                } else {
                    _0xFF9E.mmColor = _0x10B78(_0xFF9E.id)
                };
                _0x1000D.push(_0xFF9E)
            };
            this.party = _0x1000D;
            this.partyIds = _0xFFC3;
            if (this.partyLeader != _0xFFE8) {
                this.partyLeader = _0xFFE8;
                if (_0x10747.css("display") == "block") {
                    ScrimmageHelper.checkLeader()
                }
            };
            if (_0xFF2F > 0) {
                this.drawParty()
            } else {
                this.clearParty()
            }
        };
        _0x10541.prototype.handlePartyData = function (_0xFF9E) {
            var _0xFF2F = _0xFF9E.getUint16(_0xFF9E.offset, true);
            _0xFF9E.offset += 2;
            if (_0xFF2F != this.party.length) {
                return
            };
            for (var _0xFF54 = 0; _0xFF54 < _0xFF2F; _0xFF54++) {
                var _0xFF79 = this.party[_0xFF54];
                _0xFF79.state = _0xFF9E.getUint8(_0xFF9E.offset++);
                if (_0xFF79.state === _0x1164F.ALIVE) {
                    _0xFF79.x_ = _0xFF9E.getInt16(_0xFF9E.offset, true);
                    _0xFF79.y_ = _0xFF9E.getInt16(_0xFF9E.offset + 2, true);
                    _0xFF79.score = _0xFF9E.getInt32(_0xFF9E.offset + 4, true);
                    _0xFF9E.offset += 8
                }
            };
            this.drawParty()
        };
        _0x10541.prototype.handlePartyJoinCode = function (_0xFF79) {
            var _0xFF2F = _0x11958(_0xFF79);
            this.partyCode = _0x11958(_0xFF79);
            if (this.partyCode.length != 0) {
                this.selfMsgWithJoinCode(_0xFF2F, this.partyCode);
                $("#popup-party-code-content input").val(this.partyCode);
                $("#popup-party-code").show();
                var _0xFF54 = "#" + this.currentServerName + "&" + this.partyCode;
                window.history.pushState("page", "", _0xFF54)
            } else {
                this.selfMsg(_0xFF2F);
                this.partyCode = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0x10541.prototype.handleStats = function (_0xFF79) {
            var _0xFF2F = _0xFF79.getUint16(_0xFF79.offset, true);
            _0xFF79.offset += 2;
            this.stats.name = _0x11933(_0xFF79) || "An unnamed cell";
            this.stats.alive += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.eatenFood += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.eatenEject += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.eatenVirus += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.eatenPlayer += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.gainFood += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.gainEject += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.gainVirus += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            this.stats.gainPlayer += _0xFF79.getUint32(_0xFF79.offset, true);
            _0xFF79.offset += 4;
            var _0xFF54 = $("#main-stats");
            _0xFF54.empty();
            _0xFF54.append("<span>Name: " + this.stats.name + " (" + _0xFF2F + ")</span><br>");
            _0xFF54.append("<span>Alive: " + _0x10A75(this.stats.alive) + "</span><br>");
            _0xFF54.append("<span>Food eaten: " + this.stats.eatenFood + " (" + this.stats.gainFood + ")</span><br>");
            _0xFF54.append("<span>Ejected mass eaten: " + this.stats.eatenEject + " (" + this.stats.gainEject + ")</span><br>");
            _0xFF54.append("<span>Viruses eaten: " + this.stats.eatenVirus + " (" + this.stats.gainVirus + ")</span><br>");
            _0xFF54.append("<span>Player cells eaten: " + this.stats.eatenPlayer + " (" + this.stats.gainPlayer + ")</span><br>")
        };
        _0x10541.prototype.showSubPanel = function (_0xFF54) {
            var _0xFF2F = _0xFF54.getUint8(_0xFF54.offset++) == 1;
            this.subPanelOverride = _0xFF2F;
            _0x1214B();
            if (_0xFF2F) {
                if (!this.serverData.hasSentSubPanel) {
                    _0x12126();
                    this.serverData.hasSentSubPanel = true
                };
                document.body.classList.add("hide-captcha-badge")
            }
        };
        _0x10541.prototype.updateSubPanel = function (_0xFF2F) {
            if (_0x12195) {
                _0x11087(_0x12195.uid)
            }
        };
        _0x10541.prototype.updateSpectators = function () {
            _0x10825.spectatorCount.html(this.spectators)
        };
        _0x10541.prototype.handleAddBuff = function (_0xFF9E) {
            var _0xFF2F = _0xFF9E.getUint8(_0xFF9E.offset++);
            var _0xFF79 = _0xFF9E.getUint8(_0xFF9E.offset++);
            var _0xFF54 = _0xFF9E.getFloat64(_0xFF9E.offset, true);
            _0xFF9E.offset += 8;
            this.buffHolder.onAddBuff(_0xFF2F, _0xFF79, _0xFF54)
        };
        _0x10541.prototype.handleRemoveBuff = function (_0xFF54) {
            var _0xFF2F = _0xFF54.getUint8(_0xFF54.offset++);
            this.buffHolder.onRemoveBuff(_0xFF2F)
        };
        _0x10541.prototype.handleClearBuffs = function (_0xFF54) {
            var _0xFF2F = _0xFF54.getUint8(_0xFF54.offset++) == 1 ? true : false;
            this.buffHolder.clearBuffs(_0xFF2F)
        };
        _0x10541.prototype.sortCells = function () {
            _0x10316.children.sort(function (_0xFF2F, _0xFF54) {
                return _0xFF2F.parentCell.size - _0xFF54.parentCell.size
            });
            this.updateScorePanel()
        };
        _0x10541.prototype.updateScorePanel = function () {
            var _0xFF54 = 0;
            var _0xFF2F = 0;
            for (var _0xFF79 in this.myCells) {
                var _0xFF9E = this.myCells[_0xFF79];
                _0xFF54 += _0xFF9E.getRealMass();
                _0xFF2F++
            };
            if (_0xFF54 > this.score) {
                this.score = _0xFF54;
                _0x10825.playerScore.html(this.score.toLocaleString())
            };
            this.updateCellCounter(_0xFF2F)
        };
        _0x10541.prototype.updateCellCounter = function (_0xFF2F, _0xFF54) {
            if (_0x10825.playerCellCount != _0xFF2F || _0xFF54) {
                _0x10825.playerCellCount = _0xFF2F;
                _0x10825.playerCells.html(_0xFF2F + "/" + this.getServerMaxCells());
                if (!_0x11493.cColoredCellCount) {
                    var _0xFF79 = _0xFF2F / this.getServerMaxCells();
                    if (_0xFF79 >= 1.0) {
                        _0x10825.playerCells.css({
                            "color": _0x11FD9.uiGameColorError
                        })
                    } else {
                        if (_0xFF79 >= 0.5) {
                            _0x10825.playerCells.css({
                                "color": _0x11FD9.uiGameColorWarning
                            })
                        } else {
                            _0x10825.playerCells.css({
                                "color": _0x11FD9.uiGameColorSuccess
                            })
                        }
                    }
                } else {
                    _0x10825.playerCells.css({
                        "color": _0x11FD9.uiForegroundColor
                    })
                }
            }
        };
        _0x10541.prototype.drawParty = function () {
            if (this.party.length == 0) {
                return
            };
            if (_0x11493.cHidePartyPanel) {
                _0x10825.partyPanel.css("display", "none")
            } else {
                if (_0x10825.partyPanel.css("display") == "none" && _0x10DED.css("display") != "none") {
                    _0x10825.partyPanel.css("display", "block")
                }
            };
            var _0x10032 = document.getElementById("party-canvas");
            var _0xFF2F = _0x10032.getContext("2d");
            _0xFF2F.font = "16px Calibri";
            var _0xFF79 = 0;
            var _0xFF9E = 0;
            var _0x1007C = 0;
            for (var _0xFF54 = 0; _0xFF54 < this.party.length; _0xFF54++) {
                var _0xFFC3 = this.party[_0xFF54];
                if (_0xFFC3.cache == -1) {
                    _0xFFC3.cache = _0xFF2F.measureText((_0xFF54 + 1) + ". " + _0xFFC3.name).width
                };
                if (_0xFFC3.cache > _0xFF79) {
                    _0xFF79 = _0xFFC3.cache
                };
                if (_0xFFC3.state === _0x1164F.ALIVE || _0xFFC3.state === _0x1164F.UNKNOWN) {
                    _0xFFC3.scoreText = _0xFFC3.score.toLocaleString();
                    _0x1007C += _0xFFC3.score
                } else {
                    if (_0xFFC3.state === _0x1164F.DEAD) {
                        _0xFFC3.scoreText = "DEAD"
                    } else {
                        if (_0xFFC3.state === _0x1164F.SPECTATE) {
                            _0xFFC3.scoreText = "SPEC"
                        }
                    }
                };
                var _0x10057 = _0xFF2F.measureText(_0xFFC3.scoreText).width;
                if (_0x10057 > _0xFF9E) {
                    _0xFF9E = _0x10057
                }
            };
            var _0x100A1 = _0x1007C.toLocaleString();
            _0xFF9E = Math.max(_0xFF9E, _0xFF2F.measureText(_0x100A1).width);
            _0x10032.width = 15 + _0xFF79 + 50 + _0xFF9E;
            _0x10032.height = (20 * this.party.length) + 5 + (this.party.length > 1 ? 20 : 0);
            _0xFF2F.font = "16px Calibri";
            var _0x1000D = 20;
            var _0xFFE8 = 5 + _0xFF79 + 50;
            for (var _0xFF54 = 0; _0xFF54 < this.party.length; _0xFF54++) {
                var _0xFFC3 = this.party[_0xFF54];
                _0xFF2F.fillStyle = _0xFFC3.isLeader ? _0x11FD9.uiPartyLeaderColor : _0x11FD9.uiForegroundColor;
                _0xFF2F.fillText((_0xFF54 + 1) + ". " + _0xFFC3.name, 5, _0x1000D);
                _0xFF2F.fillText(_0xFFC3.scoreText, _0xFFE8, _0x1000D);
                _0x1000D += 20
            };
            if (this.party.length > 1) {
                _0xFF2F.fillStyle = _0x11FD9.uiForegroundColor;
                _0xFF2F.fillText("Total:", 5, _0x1000D);
                _0xFF2F.fillText(_0x100A1, _0xFFE8, _0x1000D)
            }
        };
        _0x10541.prototype.handleShowScrimmageMenu = function () {
            _0x11321.stop(true, false);
            _0x11321.css("display", "none");
            _0x11ACA.css("display", "block");
            $("#scrimmage-btn-leave").css("display", "none");
            _0x11752.serverData.border.enabled = false
        };
        _0x10541.prototype.handleQueueData = function (_0x1000D) {
            var _0xFF79 = _0x11958(_0x1000D);
            var _0xFFE8 = _0x1000D.getUint32(_0x1000D.offset, true);
            _0x1000D.offset += 4;
            var _0xFFC3 = _0x1000D.offset < _0x1000D.byteLength ? _0x1000D.getUint8(_0x1000D.offset) : -1;
            var _0xFF54 = document.getElementById("leaderboard-canvas");
            var _0xFF2F = _0xFF54.getContext("2d");
            _0x11018.html("Queue");
            _0xFF54.width = 200;
            _0xFF54.height = (20 * (2 + (_0xFFC3 != -1 ? 1 : 0))) + 5;
            _0xFF2F.font = "16px Calibri";
            var _0xFF9E = 20;
            _0xFF2F.fillStyle = _0x11FD9.uiForegroundColor;
            _0xFF2F.fillText("Mode: " + _0xFF79, 5, _0xFF9E);
            _0xFF9E += 20;
            _0xFF2F.fillText("Time: " + _0x10A75(_0xFFE8), 5, _0xFF9E);
            if (_0xFFC3 != -1) {
                _0xFF9E += 20;
                _0xFF2F.fillText("Queued players: " + _0xFFC3, 5, _0xFF9E)
            }
        };
        _0x10541.prototype.handleQueueLeave = function (_0xFF9E) {
            var _0xFF79 = _0x11958(_0xFF9E);
            var _0xFF54 = document.getElementById("leaderboard-canvas");
            var _0xFF2F = _0xFF54.getContext("2d");
            _0xFF54.width = 0;
            _0xFF54.height = 0;
            this.selfMsg("You have left the queue for [" + _0xFF79 + "]")
        };
        _0x10541.prototype.handleMatchState = function (_0xFF54) {
            var _0xFF2F = _0xFF54.byteLength == 1 ? 0 : _0xFF54.getUint8(_0xFF54.offset++);
            if (_0xFF2F == 0) {
                this.selfMsg("A match has been found. Good luck and have fun!");
                _0x11BF2()
            } else {
                if (_0xFF2F == 1) {
                    $("#scrimmage-btn-leave").css("display", "block")
                }
            }
        };
        _0x10541.prototype.handleScrimmageData = function (_0x100C6) {
            var _0xFF2F = _0x100C6.getUint8(_0x100C6.offset++);
            var _0x10057 = $("#scrimmage-mode-select");
            var _0x10032 = $("#scrimmage-mode-info");
            var _0x100A1 = parseInt(_0x10057.val());
            _0x10057.empty();
            _0x10032.empty();
            var _0xFF54 = {};
            while (_0xFF2F > 0) {
                var _0xFFC3 = _0x100C6.getUint8(_0x100C6.offset++);
                var _0x1007C = _0x11958(_0x100C6);
                var _0xFFE8 = _0x11958(_0x100C6);
                var _0xFF79 = document.createElement("option");
                _0xFF79.innerHTML = _0x1007C;
                _0xFF79.value = _0xFFC3;
                _0x10057.append(_0xFF79);
                _0xFF79 = document.createElement("div");
                _0xFF79.innerHTML = _0xFFE8;
                _0xFF79.id = "scrimmage-info-" + _0xFFC3;
                _0xFF79.style.display = "none";
                _0x10032.append(_0xFF79);
                _0xFF54[_0xFFC3] = true;
                _0xFF2F--
            };
            _0x11AA5 = {
                "modes": {},
                "sizes": {},
                "maps": []
            };
            if (_0x100C6.byteLength - 1 > _0x100C6.offset) {
                _0xFF2F = _0x100C6.getUint8(_0x100C6.offset++);
                while (_0xFF2F > 0) {
                    var _0xFFC3 = _0x100C6.getUint8(_0x100C6.offset++);
                    var _0x1007C = _0x11958(_0x100C6);
                    _0x11AA5.modes[_0xFFC3] = {
                        "id": _0xFFC3,
                        "name": _0x1007C
                    };
                    _0xFF2F--
                };
                _0xFF2F = _0x100C6.getUint8(_0x100C6.offset++);
                while (_0xFF2F > 0) {
                    var _0xFFC3 = _0x100C6.getUint8(_0x100C6.offset++);
                    var _0x1007C = _0x11958(_0x100C6);
                    _0x11AA5.sizes[_0xFFC3] = {
                        "id": _0xFFC3,
                        "name": _0x1007C
                    };
                    _0xFF2F--
                };
                _0xFF2F = _0x100C6.getUint8(_0x100C6.offset++);
                while (_0xFF2F > 0) {
                    var _0x1007C = _0x11958(_0x100C6);
                    var _0x1000D = {
                        "name": _0x1007C,
                        "startmass": 0,
                        "teams": 0,
                        "modes": [],
                        "sizes": []
                    };
                    var _0xFF9E = _0x100C6.getUint8(_0x100C6.offset++);
                    while (_0xFF9E > 0) {
                        _0x1000D.modes.push(_0x100C6.getUint8(_0x100C6.offset++));
                        _0xFF9E--
                    };
                    var _0xFF9E = _0x100C6.getUint8(_0x100C6.offset++);
                    while (_0xFF9E > 0) {
                        _0x1000D.sizes.push(_0x100C6.getUint8(_0x100C6.offset++));
                        _0xFF9E--
                    };
                    _0x1000D.startmass = _0x100C6.getUint16(_0x100C6.offset, true);
                    _0x100C6.offset += 2;
                    _0x1000D.respawnDelay = _0x100C6.getInt16(_0x100C6.offset, true);
                    _0x100C6.offset += 2;
                    _0x1000D.teams = _0x100C6.getUint8(_0x100C6.offset++);
                    _0x11AA5.maps.push(_0x1000D);
                    _0xFF2F--
                }
            };
            $("#scrimmage-custom-btn-container").css("display", _0x11AA5.maps.length == 0 ? "none" : "block");
            $("#scrimmage-map").empty();
            for (var _0xFF9E = 0; _0xFF9E < _0x11AA5.maps.length; _0xFF9E++) {
                $("#scrimmage-map").append("<option value=\'" + _0xFF9E + "\'>" + _0x11AA5.maps[_0xFF9E].name + "</option>")
            };
            if (_0xFF54[_0x100A1] != null) {
                _0x10057.val(_0x100A1);
                _0x10057.trigger("change")
            } else {
                _0x10057.prop("selectedIndex", 0);
                _0x10057.trigger("change")
            }
        };
        _0x10541.prototype.handleCustomGameUpdate = function (_0xFFC3) {
            var _0xFF79 = _0xFFC3.getUint8(_0xFFC3.offset++);
            switch (_0xFF79) {
            case _0x10722.MAP:
                ScrimmageHelper.updateMap(_0xFFC3.getUint8(_0xFFC3.offset++));
                break;
            case _0x10722.MODE:
                ScrimmageHelper.updateMode(_0xFFC3.getUint8(_0xFFC3.offset++));
                break;
            case _0x10722.SIZE:
                ScrimmageHelper.updateSize(_0xFFC3.getUint8(_0xFFC3.offset++));
                break;
            case _0x10722.STARTMASS:
                ScrimmageHelper.updateStartMass(_0xFFC3.getUint16(_0xFFC3.offset, true));
                _0xFFC3.offset += 2;
                break;
            case _0x10722.LOCK:
                ScrimmageHelper.updateLock(_0xFFC3.getUint8(_0xFFC3.offset++) === 1 ? true : false);
                break;
            case _0x10722.PLAYER_UPDATE:
                var _0xFF54 = _0xFFC3.getUint8(_0xFFC3.offset++);
                var _0xFF9E = _0xFFC3.getUint8(_0xFFC3.offset++);
                _0x11752.party[_0xFF54].team = _0xFF9E;
                ScrimmageHelper.updatePlayerById(_0xFF54);
                break;
            case _0x10722.PLAYER_LIST:
                var _0xFF2F = _0xFFC3.getUint8(_0xFFC3.offset++);
                var _0xFF54 = 0;
                while (_0xFF2F > 0) {
                    _0x11752.party[_0xFF54].team = _0xFFC3.getUint8(_0xFFC3.offset++);
                    _0xFF2F--;
                    _0xFF54++
                };
                ScrimmageHelper.updatePlayers();
                break;
            case _0x10722.VIRUS_DENSITY:
                ScrimmageHelper.updateVirusDensity(_0xFFC3.getUint16(_0xFFC3.offset, true));
                _0xFFC3.offset += 2;
                break;
            case _0x10722.RESPAWN_DELAY:
                ScrimmageHelper.updateRespawnDelay(_0xFFC3.getInt16(_0xFFC3.offset, true));
                _0xFFC3.offset += 2;
                break;
            case _0x10722.AUTOSPLIT:
                ScrimmageHelper.updateAutoSplit(_0xFFC3.getUint8(_0xFFC3.offset++) === 1 ? true : false);
                break;
            case _0x10722.PUBLIC:
                ScrimmageHelper.updatePublic(_0xFFC3.getUint8(_0xFFC3.offset++) === 1 ? true : false);
                break;
            case _0x10722.PASSWORD:
                ScrimmageHelper.updatePassword(_0xFFC3.getUint8(_0xFFC3.offset++) === 1 ? true : false);
                break;
            case _0x10722.NAME:
                ScrimmageHelper.updateName(_0x11933(_0xFFC3));
                break
            }
        };
        _0x10541.prototype.handleCustomGameShow = function (_0x100EB) {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-custom").css("display", "block");
            var _0x1000D = _0x11933(_0x100EB);
            var _0xFFC3 = _0x100EB.getUint8(_0x100EB.offset++);
            var _0xFFE8 = _0x100EB.getUint8(_0x100EB.offset++);
            var _0x100A1 = _0x100EB.getUint8(_0x100EB.offset++);
            var _0x100C6 = _0x100EB.getUint16(_0x100EB.offset, true);
            _0x100EB.offset += 2;
            var _0x10110 = _0x100EB.getUint16(_0x100EB.offset, true);
            _0x100EB.offset += 2;
            var _0x1007C = _0x100EB.getInt16(_0x100EB.offset, true);
            _0x100EB.offset += 2;
            var _0xFF54 = _0x100EB.getUint8(_0x100EB.offset++) === 1 ? true : false;
            var _0xFF9E = _0x100EB.getUint8(_0x100EB.offset++) === 1 ? true : false;
            var _0x10057 = _0x100EB.getUint8(_0x100EB.offset++) === 1 ? true : false;
            var _0x10032 = _0x100EB.getUint8(_0x100EB.offset++) === 1 ? true : false;
            var _0xFF2F = _0x100EB.getUint8(_0x100EB.offset++);
            var _0xFF79 = 0;
            while (_0xFF2F > 0) {
                _0x11752.party[_0xFF79].team = _0x100EB.getUint8(_0x100EB.offset++);
                _0xFF2F--;
                _0xFF79++
            };
            ScrimmageHelper.updateName(_0x1000D);
            ScrimmageHelper.updateMap(_0xFFC3);
            ScrimmageHelper.updateMode(_0xFFE8);
            ScrimmageHelper.updateSize(_0x100A1);
            ScrimmageHelper.updateStartMass(_0x100C6);
            ScrimmageHelper.updateVirusDensity(_0x10110);
            ScrimmageHelper.updateLock(_0xFF9E);
            ScrimmageHelper.updateRespawnDelay(_0x1007C);
            ScrimmageHelper.updateAutoSplit(_0xFF54);
            ScrimmageHelper.updatePublic(_0x10057);
            ScrimmageHelper.updatePassword(_0x10032);
            ScrimmageHelper.updatePlayers();
            ScrimmageHelper.checkLeader()
        };
        _0x10541.prototype.handleCustomGameLeave = function () {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-menu").css("display", "block")
        };
        _0x10541.prototype.handleShowCustomGameLobbies = function (_0xFFC3) {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-lobbies").css("display", "block");
            _0x1076C = {};
            var _0xFF9E = $("#scrimmage-lobbies-tbody");
            _0xFF9E.empty();
            while (true) {
                var _0xFF79 = _0xFFC3.getUint32(_0xFFC3.offset, true);
                _0xFFC3.offset += 4;
                if (_0xFF79 == 0) {
                    break
                };
                var _0xFF2F = {};
                _0xFF2F.id = _0xFF79;
                _0xFF2F.name = _0x11933(_0xFFC3);
                _0xFF2F.leaderId = _0xFFC3.getUint32(_0xFFC3.offset);
                _0xFFC3.offset += 4;
                _0xFF2F.leaderName = _0x11933(_0xFFC3) || "An unnamed cell";
                _0xFF2F.map = _0xFFC3.getUint8(_0xFFC3.offset++);
                _0xFF2F.mode = _0xFFC3.getUint8(_0xFFC3.offset++);
                _0xFF2F.size = _0xFFC3.getUint16(_0xFFC3.offset, true);
                _0xFFC3.offset += 2;
                _0xFF2F.maxSize = _0xFFC3.getUint16(_0xFFC3.offset, true);
                _0xFFC3.offset += 2;
                _0xFF2F.hasPasscode = _0xFFC3.getUint8(_0xFFC3.offset++) == 1 ? true : false;
                _0x1076C[_0xFF2F.id] = _0xFF2F;
                var _0xFF54 = _0xFF2F.hasPasscode ? "<div class=\'scrimmage-lock\'></div>" : "";
                _0xFF9E.append("<tr partyId=\'" + _0xFF2F.id + "\'><td><span>" + _0xFF54 + _0x11596(_0xFF2F.name) + "</span></td><td><span>" + _0x11596(_0xFF2F.leaderName) + "</span></td><td><span>" + _0x11AA5.maps[_0xFF2F.map].name + "</span></td><td><span>" + _0x11AA5.modes[_0xFF2F.mode].name + "</span></td><td><span>" + _0xFF2F.size + "/" + _0xFF2F.maxSize + "</span></td></tr>")
            };
            $("#scrimmage-lobbies-tbody tr").on("click", function () {
                $(".custom-game-selected").removeClass("custom-game-selected");
                _0x11B5E = $(this).attr("partyId");
                $(this).addClass("custom-game-selected")
            })
        };
        ScrimmageHelper = {
            updateName: function (_0xFF2F) {
                $("#scrimmage-name").text(_0xFF2F)
            },
            updateMap: function (_0xFF54) {
                $("#scrimmage-map option[value=\'" + _0xFF54 + "\']").prop("selected", true);
                var _0xFF79 = _0x11AA5.maps[_0xFF54];
                $("#scrimmage-mapmode").empty();
                for (var _0xFF2F = 0; _0xFF2F < _0xFF79.modes.length; _0xFF2F++) {
                    var _0xFF9E = _0x11AA5.modes[_0xFF79.modes[_0xFF2F]];
                    $("#scrimmage-mapmode").append("<option value=\'" + _0xFF2F + "\'>" + _0xFF9E.name + "</option>")
                };
                $("#scrimmage-mapsize").empty();
                for (var _0xFF2F = 0; _0xFF2F < _0xFF79.sizes.length; _0xFF2F++) {
                    var _0xFFC3 = _0x11AA5.sizes[_0xFF79.sizes[_0xFF2F]];
                    $("#scrimmage-mapsize").append("<option value=\'" + _0xFF2F + "\'>" + _0xFFC3.name + "</option>")
                };
                ScrimmageHelper.updateMode(0);
                ScrimmageHelper.updateSize(0);
                ScrimmageHelper.updateStartMass(_0xFF79.startmass);
                $("#scrimmage-startmass").attr("placeholder", _0xFF79.startmass);
                ScrimmageHelper.updateRespawnDelay(_0xFF79.respawnDelay);
                $("#scrimmage-map").attr("data", _0xFF54);
                _0x11752.customGameMap = _0xFF79
            },
            updateMode: function (_0xFF2F) {
                $("#scrimmage-mapmode option[value=\'" + _0xFF2F + "\']").prop("selected", true);
                $("#scrimmage-mapmode").attr("data", _0xFF2F)
            },
            updateSize: function (_0xFF2F) {
                $("#scrimmage-mapsize option[value=\'" + _0xFF2F + "\']").prop("selected", true);
                $("#scrimmage-mapsize").attr("data", _0xFF2F)
            },
            updateStartMass: function (_0xFF2F) {
                $("#scrimmage-startmass").val(_0xFF2F);
                $("#scrimmage-startmass").attr("data", _0xFF2F)
            },
            updateVirusDensity: function (_0xFF2F) {
                $("#scrimmage-virusDensity").val(_0xFF2F);
                $("#scrimmage-virusDensity").attr("data", _0xFF2F)
            },
            updateRespawnDelay: function (_0xFF2F) {
                $("#scrimmage-respawnDelay").val(_0xFF2F);
                $("#scrimmage-respawnDelay").attr("data", _0xFF2F)
            },
            updateAutoSplit: function (_0xFF2F) {
                $("#scrimmage-autoSplit").prop("checked", _0xFF2F)
            },
            updatePublic: function (_0xFF2F) {
                $("#scrimmage-public").prop("checked", _0xFF2F)
            },
            updatePassword: function (_0xFF2F) {
                $("#scrimmage-password").prop("checked", _0xFF2F)
            },
            updateLock: function (_0xFF2F) {
                $("#scrimmage-lockteams").prop("checked", _0xFF2F);
                ScrimmageHelper.checkLock()
            },
            checkLock: function () {
                if ($("#scrimmage-lockteams").prop("checked") && !_0x11752.isPartyLeader()) {
                    $("#cgp-" + _0x11752.partyIndex).attr("disabled", "disabled")
                } else {
                    $("#cgp-" + _0x11752.partyIndex).removeAttr("disabled")
                }
            },
            checkLeader: function () {
                if (_0x11752.isPartyLeader()) {
                    $(".custom-game").removeAttr("disabled")
                } else {
                    $(".custom-game").attr("disabled", "disabled");
                    ScrimmageHelper.checkLock()
                }
            },
            updatePlayerById: function (_0xFF2F) {
                var _0xFF54 = _0x11752.party[_0xFF2F];
                $("#cgp-" + _0xFF2F + " option[value=\'" + _0xFF54.team + "\']").prop("selected", true);
                $("#cgp-name-" + _0xFF2F).text(_0xFF54.name);
                $("#cgp-name-" + _0xFF2F).css("color", _0x106FD[_0xFF54.team])
            },
            updatePlayers: function () {
                $("#scrimmage-custom-players").empty();
                for (var _0xFF2F = 0; _0xFF2F < _0x11752.party.length; _0xFF2F++) {
                    var _0xFF54 = _0x11752.party[_0xFF2F];
                    if (_0xFF54.id == _0x11752.playerId) {
                        _0x11752.partyIndex = _0xFF2F
                    };
                    $("#scrimmage-custom-players").append("<tr><td><span id=\'cgp-name-" + _0xFF2F + "\'>" + _0xFF54.name + "</span></td>" + ScrimmageHelper.getTeamOptions(_0xFF2F, _0x11752.customGameMap.teams) + "</tr>");
                    $("#cgp-" + _0xFF2F + " option[value=\'" + _0xFF54.team + "\']").prop("selected", true);
                    $("#cgp-name-" + _0xFF2F).css("color", _0x106FD[_0xFF54.team]);
                    $("#cgp-" + _0xFF2F).on("change", function (_0xFF54) {
                        var _0xFF79 = parseInt($(this).attr("id").match("\\d+")[0]);
                        var _0xFF9E = $(this).find("option:selected").val();
                        $("#cgp-" + _0xFF2F + " option[value=\'" + $(this).attr("data") + "\']").prop("selected", true);
                        _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.PLAYER_UPDATE, _0xFF79, _0xFF9E))
                    })
                };
                ScrimmageHelper.checkLeader()
            },
            getTeamOptions: function (_0xFF54, _0xFF9E) {
                var _0xFF79 = "";
                if (_0xFF9E != null && _0xFF9E > 1) {
                    _0xFF79 = "<td><select class=\'custom-game\' id=\'cgp-" + _0xFF54 + "\'><option value=\'0\'>Spectator</option>";
                    for (var _0xFF2F = 1; _0xFF2F <= _0xFF9E; _0xFF2F++) {
                        _0xFF79 += "<option value=\'" + _0xFF2F + "\' class=\'t" + _0xFF2F + "\'>" + _0x11AEF[_0xFF2F] + "</option>"
                    };
                    _0xFF79 += "</select></td>"
                };
                return _0xFF79
            }
        };

        function _0x1025D(_0xFF2F) {
            this.id = _0xFF2F;
            this.type = 0;
            this.nameCache = null;
            this.skin = null;
            this.playerId = 0;
            this.color = null;
            this.x = 0;
            this.y = 0;
            this.x_ = 0;
            this.y_ = 0;
            this.size = 0;
            this.size_ = 0;
            this.steps = 0;
            this.massLastAmount = -1;
            this.cache = null
        }
        _0x1025D.prototype.setType = function (_0xFF2F) {
            this.type = _0xFF2F
        };
        _0x1025D.prototype.setX = function (_0xFF2F) {
            this.x_ = _0xFF2F;
            this.x = _0xFF2F
        };
        _0x1025D.prototype.setY = function (_0xFF2F) {
            this.y_ = _0xFF2F;
            this.y = _0xFF2F
        };
        _0x1025D.prototype.updateX = function (_0xFF2F) {
            this.x_ = _0xFF2F
        };
        _0x1025D.prototype.updateY = function (_0xFF2F) {
            this.y_ = _0xFF2F
        };
        _0x1025D.prototype.setSize = function (_0xFF2F) {
            this.size_ = _0xFF2F;
            this.size = _0xFF2F
        };
        _0x1025D.prototype.getMass = function () {
            return (this.size * this.size) / 100 >> 0
        };
        _0x1025D.prototype.getRealMass = function () {
            return (this.size_ * this.size_) / 100 >> 0
        };
        _0x1025D.prototype.animate = function (_0xFF2F) {
            this.x += Math.round((this.x_ - this.x) * _0xFF2F);
            this.y += Math.round((this.y_ - this.y) * _0xFF2F);
            this.size += Math.round((this.size_ - this.size) * _0xFF2F);
            this.steps--
        };
        _0x1025D.prototype.getSizeCache = function () {
            var _0xFFE8 = this.getMass();
            if (_0xFFE8 != this.massLastAmount || this.massLastAmount < 0) {
                var _0x1000D;
                if (_0x114B8.massType == 1) {
                    _0x1000D = this.toShortString(_0xFFE8)
                } else {
                    _0x1000D = _0xFFE8.toString()
                };
                var _0x10057 = 0;
                var _0xFF79 = 0;
                for (var _0xFF9E = 0; _0xFF9E < _0x1000D.length; _0xFF9E++) {
                    var _0xFF2F = _0x1000D.charAt(_0xFF9E);
                    var _0xFFC3 = _0x11DD3.getNumber(_0xFF2F);
                    _0x10057 += _0xFFC3.width - 2;
                    _0xFF79 = Math.max(_0xFFC3.height, _0xFF79)
                };
                if (this.cache == null) {
                    this.cache = _0x116E3.RenderTexture.create(_0x10057, _0xFF79)
                } else {
                    if (_0x10057 != this.cache.width || _0xFF79 != this.cache.height) {
                        this.cache.destroy({
                            children: true,
                            texture: true,
                            baseTexture: true
                        });
                        this.cache = _0x116E3.RenderTexture.create(_0x10057, _0xFF79)
                    }
                };
                var _0xFF54 = _0x11DD3.cacheContainer;
                var _0x10032 = 0;
                for (var _0xFF9E = 0; _0xFF9E < _0x1000D.length; _0xFF9E++) {
                    var _0xFF2F = _0x1000D.charAt(_0xFF9E);
                    var _0xFFC3 = _0x11DD3.getSizeCacheSprite();
                    _0xFFC3.texture = _0x11DD3.getNumber(_0xFF2F).texture;
                    _0xFFC3.position.x = _0x10032;
                    _0xFF54.addChild(_0xFFC3);
                    _0x10032 += _0xFFC3.width - 2
                };
                _0x11708.renderer.render(_0xFF54, this.cache, true);
                _0x11DD3.clearCacheContainer();
                this.massLastAmount = _0xFFE8
            };
            return this.cache
        };
        _0x1025D.prototype.toShortString = function (_0xFF54) {
            if (_0xFF54 < 1000) {
                return _0xFF54.toString()
            } else {
                if (_0xFF54 < 1000000) {
                    var _0xFF2F = Math.floor(_0xFF54 / 100) / 10;
                    return _0xFF2F.toFixed(1) + "K"
                } else {
                    if (_0xFF54 < 1000000000) {
                        var _0xFF2F = Math.floor(_0xFF54 / 100000) / 10;
                        return _0xFF2F.toFixed(1) + "M"
                    } else {
                        if (_0xFF54 >= 1000000000) {
                            var _0xFF2F = Math.floor(_0xFF54 / 100000000) / 10;
                            return _0xFF2F.toFixed(1) + "B"
                        }
                    }
                }
            };
            return _0xFF54.toString()
        };

        function _0x11DAE() {
            this.cache = {};
            this.cacheContainer = new _0x116E3.Container();
            this.sprites = [];
            this.spritesIndex = 0;
            this.getNumber = function (_0xFF2F) {
                return this.cache[_0xFF2F]
            };
            this.clearCacheContainer = function () {
                while (this.cacheContainer.children[0]) {
                    this.cacheContainer.removeChild(this.cacheContainer.children[0])
                };
                this.spritesIndex = 0
            };
            this.getSizeCacheSprite = function () {
                while (this.spritesIndex >= this.sprites.length) {
                    this.sprites.push(new _0x116E3.Sprite())
                };
                return this.sprites[this.spritesIndex++]
            };
            this.buildSizeCache = function () {
                var _0xFF2F = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "K", "B", "T"];
                for (var _0xFF54 of _0xFF2F) {
                    var _0xFF79 = new _0x116E3.Text(_0xFF54, {
                        fontFamily: "Verdana",
                        fontWeight: "bold",
                        fontSize: 54,
                        fill: "#fff",
                        stroke: "black",
                        strokeThickness: _0x114B8.textOutlineSize
                    });
                    this.cache[_0xFF54] = _0xFF79
                }
            }
        }
        const _0x11DD3 = new _0x11DAE();
        _0x1025D.prototype.handleFood = function () {
            if (this.needsPixiUpdate) {
                while (this.container.children[0]) {
                    var _0xFF2F = this.container.children[0];
                    this.container.removeChild(_0xFF2F);
                    _0xFF2F.destroy()
                };
                var _0xFF54 = new _0x116E3.Graphics();
                if (_0x11493.cThemeEnabled && _0x106D8.length > 0) {
                    _0xFF54.beginFill(_0x10BC2(this.id))
                } else {
                    _0xFF54.beginFill(this.color)
                };
                _0xFF54.drawCircle(0, 0, 1);
                _0xFF54.endFill();
                _0xFF54.scale.set(12);
                this.container.addChild(_0xFF54);
                this.needsPixiUpdate = false
            };
            this.container.visible = !_0x11493.cHideFood;
            this.container.position.set(this.x, this.y)
        };
        _0x1025D.prototype.drawSpikeData = function (_0xFF2F) {
            if (_0xFF2F.spiked == 1) {
                if (this.spikeSprite == null) {
                    this.spikeSprite = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
                    this.spikeSprite.anchor.set(0.5);
                    this.spikeSprite.width = _0x10282;
                    this.spikeSprite.height = _0x10282;
                    this.container.addChildAt(this.spikeSprite, 0)
                };
                this.circle.visible = false;
                if (_0x106B3.aCustomSpike) {
                    this.spikeSprite.texture = _0x106B3.aCustomSpike
                } else {
                    this.spikeSprite.texture = _0x11EB1
                };
                this.spikeSprite.visible = true
            } else {
                if (_0xFF2F.spiked == 2) {
                    if (this.spikeSprite == null) {
                        this.spikeSprite = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
                        this.spikeSprite.anchor.set(0.5);
                        this.spikeSprite.width = _0x10282;
                        this.spikeSprite.height = _0x10282;
                        this.container.addChildAt(this.spikeSprite, 0)
                    };
                    this.circle.visible = false;
                    if (_0x106B3.aCustomMother) {
                        this.spikeSprite.texture = _0x106B3.aCustomMother
                    } else {
                        this.spikeSprite.texture = _0x11ED6
                    };
                    this.spikeSprite.visible = true
                } else {
                    this.circle.visible = true;
                    if (this.spikeSprite) {
                        this.spikeSprite.visible = false
                    }
                }
            }
        };
        _0x1025D.prototype.handle = function () {
            switch (this.type) {
            case 0:
                break;
            case 1:
                if (this.needsPixiUpdate) {
                    if (this.skin >= 0 && this.skin < _0x10928.length && _0x10928[this.skin].naturalHeight > 0) {
                        this.skinId = this.skin + ":" + this.color;
                        this.ejectedMassSprite = new _0x116E3.Sprite(_0x108B9.getSkin(this));
                        this.ejectedMassSprite.anchor.set(0.5);
                        this.ejectedMassSprite.width = this.size * 2;
                        this.ejectedMassSprite.height = this.size * 2;
                        this.container.addChild(this.ejectedMassSprite)
                    } else {
                        var _0xFF2F = new _0x116E3.Graphics();
                        _0xFF2F.beginFill(this.color);
                        _0xFF2F.drawCircle(0, 0, 8);
                        _0xFF2F.endFill();
                        _0xFF2F.scale.set(this.size / 8);
                        this.container.addChild(_0xFF2F)
                    };
                    this.needsPixiUpdate = false
                };
                this.container.position.set(this.x, this.y);
                break;
            case 2:
                var _0xFF9E = _0x11752.playerRegistry.getPlayerById(this.playerId);
                var _0xFFC3 = _0x117C1.ALL;
                if (_0x11752.playerId == this.playerId) {
                    _0xFFC3 = _0x117C1.SELF
                } else {
                    if (_0x11752.partyIds[this.playerId] != null) {
                        _0xFFC3 = _0x117C1.PARTY
                    }
                };
                if (this.needsPixiUpdate) {
                    _0xFF2F = new _0x116E3.Graphics();
                    _0xFF2F.beginFill(_0xFF9E.cellColor);
                    _0xFF2F.drawCircle(0, 0, _0x102CC);
                    _0xFF2F.endFill();
                    this.container.addChild(_0xFF2F);
                    this.circle = _0xFF2F;
                    this.skinsContainer = new _0x116E3.Container();
                    this.container.addChild(this.skinsContainer);
                    this.needsPixiSkinUpdate = true;
                    this.massSprite = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
                    this.container.addChild(this.massSprite);
                    if (_0xFF9E.name.length > 0) {
                        var _0xFF79 = _0xFF9E.getNameCache(_0xFF9E.cacheUpdate);
                        this.nameSprite = new _0x116E3.Sprite(_0xFF79.texture);
                        this.nameSprite.visible = false;
                        this.container.addChild(this.nameSprite);
                        this.nameEffectSprite = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
                        this.nameSprite.addChild(this.nameEffectSprite)
                    };
                    this.drawSpikeData(_0xFF9E);
                    this.needsPixiUpdate = false
                };
                this.skinsContainer.visible = _0x114B8.levelSkins >= _0xFFC3 && _0xFF9E.spiked == 0;
                if (this.skinsContainer.visible) {
                    var _0x10032 = _0xFF9E.getSkin();
                    if (_0x10032 != null) {
                        if (this.needsPixiSkinUpdate) {
                            this.skinSprite = new _0x116E3.Sprite(_0x116E3.Texture.EMPTY);
                            this.skinSprite.anchor.set(0.5);
                            this.skinSprite.width = _0x10282;
                            this.skinSprite.height = _0x10282;
                            this.skinsContainer.addChild(this.skinSprite);
                            this.needsPixiSkinUpdate = false
                        };
                        if (!_0x10032.isGif) {
                            if (_0x10032 !== this.skinSprite.texture) {
                                this.skinSprite.texture = _0x10032
                            }
                        } else {
                            this.skinSprite.texture = _0x10032.getTexture()
                        }
                    }
                };
                if (_0xFF9E.cacheUpdate) {
                    if (this.nameSprite) {
                        this.nameSprite.texture = _0xFF9E.getNameCache(_0xFF9E.cacheUpdate).texture;
                        this.nameSprite.texture.update()
                    };
                    this.drawSpikeData(_0xFF9E)
                };
                var _0xFFE8 = 16 / this.size;
                var _0x10057 = Math.max(_0xFFE8, 0.16);
                var _0x1000D = _0x11752.scale >= _0xFFE8 || _0x11493.cDisableAutoNameHiding;
                if (this.nameSprite) {
                    this.nameSprite.visible = _0x114B8.levelNames >= _0xFFC3 && _0x1000D;
                    if (this.nameSprite.visible) {
                        this.nameSprite.scale.set(_0x10057);
                        this.nameSprite.x = -Math.floor(this.nameSprite.width / 2);
                        if (!_0xFF9E.lowerName) {
                            this.nameSprite.y = -Math.floor(this.nameSprite.height / 2)
                        } else {
                            this.nameSprite.y = _0x102F1 - Math.floor(this.nameSprite.height / 2)
                        };
                        if (_0xFF9E.effect == 1 && _0x113DA[0] != null) {
                            var _0x1007C = _0x113DA[0].getTexture();
                            this.nameEffectSprite.scale.set(this.nameSprite.texture.width / _0x1007C.width, this.nameSprite.texture.height / _0x1007C.height);
                            this.nameEffectSprite.texture = _0x1007C
                        }
                    }
                };
                if (_0x11493.cShowMass && _0xFFC3 <= _0x117C1.PARTY && _0x1000D) {
                    var _0xFF54 = this.getSizeCache();
                    this.massSprite.texture = _0xFF54;
                    this.massSprite.scale.set(_0x10057);
                    this.massSprite.x = -Math.floor(this.massSprite.width / 2);
                    if (this.nameSprite != null) {
                        this.massSprite.y = this.nameSprite.y + Math.floor(this.massSprite.height / 1.2)
                    } else {
                        this.massSprite.y = -Math.floor(this.massSprite.height / 1.2)
                    };
                    this.massSprite.visible = true
                } else {
                    this.massSprite.visible = false
                };
                if ((_0xFF9E.flags & 4) == 4) {
                    if (!this.debuffSprite) {
                        this.debuffSprite = new _0x116E3.Sprite(_0x1180B);
                        this.debuffSprite.anchor.set(0.5);
                        this.debuffSprite.width = _0x102A7;
                        this.debuffSprite.height = _0x102A7;
                        this.container.addChild(this.debuffSprite)
                    }
                } else {
                    if (this.debuffSprite) {
                        this.debuffSprite.parent.removeChild(this.debuffSprite);
                        this.debuffSprite.destroy();
                        this.debuffSprite = null
                    }
                };
                if ((_0xFF9E.flags & 1) == 1) {
                    if (!this.shieldSprite) {
                        this.shieldSprite = new _0x116E3.Sprite(_0x11830);
                        this.shieldSprite.anchor.set(0.5);
                        this.shieldSprite.width = _0x102A7;
                        this.shieldSprite.height = _0x102A7;
                        this.container.addChild(this.shieldSprite)
                    }
                } else {
                    if (this.shieldSprite) {
                        this.shieldSprite.parent.removeChild(this.shieldSprite);
                        this.shieldSprite.destroy();
                        this.shieldSprite = null
                    }
                };
                this.container.scale.set(this.size / _0x102CC);
                this.container.position.set(this.x, this.y);
                break;
            case 3:
                if (this.needsPixiUpdate) {
                    if (!this.sprite) {
                        this.sprite = new _0x116E3.Sprite();
                        this.sprite.anchor.set(0.5);
                        this.sprite.width = 128;
                        this.sprite.height = 128;
                        this.container.addChild(this.sprite)
                    };
                    if (_0x106B3.aCustomSpike) {
                        this.sprite.texture = _0x106B3.aCustomSpike
                    } else {
                        this.sprite.texture = _0x11EB1
                    };
                    this.needsPixiUpdate = false
                };
                this.container.scale.set(this.size / 64);
                this.container.position.set(this.x, this.y);
                break;
            case 4:
                if (this.needsPixiUpdate) {
                    if (!this.sprite) {
                        this.sprite = new _0x116E3.Sprite();
                        this.container.addChild(this.sprite)
                    };
                    if (_0x106B3.aCustomMother) {
                        this.sprite.texture = _0x106B3.aCustomMother
                    } else {
                        this.sprite.texture = _0x11ED6
                    };
                    if (_0x10972.enabled && _0x10972.motherCustomEnabled && !_0x11493.cDisableEventSkins && !_0x106B3.aCustomMother) {
                        _0x10972.motherCustom(this)
                    } else {
                        this.setDefaultSpriteAnchor()
                    };
                    this.needsPixiUpdate = false
                };
                if (!_0x106B3.aCustomMother && _0x10972.enabled) {
                    if (this.size >= 200 && !_0x11493.cDisableEventSkins) {
                        this.sprite.texture = _0x11EFB
                    } else {
                        this.sprite.texture = _0x11ED6
                    }
                };
                this.container.scale.set(this.size / 64);
                this.container.position.set(this.x, this.y);
                break;
            case 5:
                if (this.needsPixiUpdate) {
                    this.sprite = new _0x116E3.Sprite(_0x1187A[this.buff].texture);
                    this.sprite.anchor.set(0.5);
                    this.sprite.width = this.size * 2;
                    this.sprite.height = this.size * 2;
                    this.container.addChild(this.sprite);
                    this.needsPixiUpdate = false
                };
                this.container.position.set(this.x, this.y);
                break
            }
        };
        _0x1025D.prototype.setDefaultSpriteAnchor = function () {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128
        };
        _0x1025D.prototype.onCreate = function () {
            if (!this.container) {
                this.container = new _0x116E3.Container();
                this.container.parentCell = this;
                this.needsPixiUpdate = true;
                if (this.type != 0) {
                    _0x10316.addChild(this.container)
                } else {
                    _0x109E1.addChild(this.container)
                }
            }
        };
        _0x1025D.prototype.onDelete = function () {
            _0x108B9.onDelete(this);
            if (this.container) {
                this.container.parent.removeChild(this.container);
                this.container.parentCell = null;
                this.container.destroy({
                    children: true
                });
                this.container = null
            };
            if (this.cache) {
                this.cache.destroy();
                this.cache = null
            }
        };

        function _0x1179C() {
            this.bucket = {};
            this.defaultData;
            this.updatedPlayers = [];
            this.init = function () {
                this.defaultData = new _0x11777(0);
                this.defaultData.name = "";
                this.defaultData.cellColor = 0xaaaaaa
            };
            this.add = function (_0xFF2F) {
                this.bucket[_0xFF2F.id] = _0xFF2F
            };
            this.remove = function (_0xFF2F) {
                this.bucket[_0xFF2F].onDelete();
                delete this.bucket[_0xFF2F]
            };
            this.clear = function () {
                for (var _0xFF2F in this.bucket) {
                    this.remove(_0xFF2F)
                }
            };
            this.getPlayer = function (_0xFF2F) {
                return this.bucket[_0xFF2F]
            };
            this.getPlayerById = function (_0xFF54) {
                var _0xFF2F = this.bucket[_0xFF54];
                return _0xFF2F != null ? _0xFF2F : this.defaultData
            };
            this.updatePlayer = function (_0xFF2F) {
                _0xFF2F.cacheUpdate = true;
                this.updatedPlayers.push(_0xFF2F)
            };
            this.handleUpdatedPlayers = function () {
                while (this.updatedPlayers.length > 0) {
                    var _0xFF2F = this.updatedPlayers.shift();
                    _0xFF2F.cacheUpdate = false
                }
            };
            this.init()
        }

        function _0x11777(_0xFF2F) {
            this.id = _0xFF2F;
            this.name;
            this.skin;
            this.skinCache;
            this.cellColor;
            this.nameColor = "#fff";
            this.flags = 0;
            this.effect = 0;
            this.lowerName = false;
            this.nameCache = null;
            this.cacheUpdate = false;
            this.spiked = 0;
            this.setFlags = function (_0xFF2F) {
                this.flags = _0xFF2F;
                if ((this.flags & 8) == 8) {
                    this.spiked = 1
                } else {
                    if ((this.flags & 16) == 16) {
                        this.spiked = 2
                    } else {
                        this.spiked = 0
                    }
                }
            };
            this.parseEffect = function (_0xFF2F) {
                if (_0xFF2F >= 64) {
                    _0xFF2F -= 64;
                    this.lowerName = true
                } else {
                    this.lowerName = false
                };
                this.effect = _0xFF2F
            };
            this.getNameCache = function (_0xFF2F) {
                if (_0xFF2F || this.nameCache == null) {
                    if (!this.nameCache) {
                        this.nameCache = new _0x116E3.Text(this.name, {
                            fontFamily: "Verdana",
                            fontWeight: "bold",
                            fontSize: 54,
                            fill: this.nameColor,
                            stroke: "black",
                            strokeThickness: _0x114B8.textOutlineSize
                        })
                    } else {
                        this.nameCache.text = this.name;
                        this.nameCache.style.fill = this.nameColor;
                        this.nameCache.updateText()
                    };
                    this.nameCache.width
                };
                return this.nameCache
            };
            this.setSkin = function (_0xFF79, _0xFF54) {
                if (_0xFF79.length == 0) {
                    return null
                };
                var _0xFFC3 = _0xFF79.indexOf("[");
                if (_0xFFC3 != -1) {
                    var _0xFF2F = _0xFF79.indexOf("]", _0xFFC3);
                    if (_0xFF2F != -1) {
                        _0xFF79 = _0xFF79.substring(_0xFFC3 + 1, _0xFF2F)
                    }
                };
                var _0xFF9E = _0xFF79.toLowerCase();
                if (!_0xFF54) {
                    _0xFF9E = _0xFF9E.replace(/#/g, "")
                };
                if (_0xFF9E.length != 0 && _0xFF9E != this.skin) {
                    this.skin = _0xFF9E;
                    this.skinCache = null
                }
            };
            this.getSkin = function () {
                if (this.skinCache != null) {
                    return this.skinCache
                };
                if (this.skin != null) {
                    if (_0x11E42[this.skin] != null || this.skin.charAt(0) == "#") {
                        if (!(_0x11E42[this.skin] > _0x11E67.NOT_LOADED)) {
                            _0x11E42[this.skin] = _0x11E67.LOADING;
                            if (this.skin.charAt(0) == "#") {
                                var _0xFF79 = this.skin;
                                var _0xFF2F = this;
                                gifFrames({
                                    url: "https://gamedata.gota.io/gifs/" + _0xFF79.substring(1) + ".gif",
                                    frames: "all",
                                    cumulative: false,
                                    outputType: "canvas"
                                }).then(function (_0xFF2F) {
                                    var _0xFF54 = new _0x10C31();
                                    _0xFF54.loadFromFrameData(_0xFF2F);
                                    _0x11E42[_0xFF79] = _0x11E67.LOADED;
                                    _0x11DF8[_0xFF79] = _0xFF54
                                }).catch(function (_0xFF54) {
                                    _0xFF2F.skin = null
                                });
                                console.log(this.skin)
                            } else {
                                var _0xFF54 = new Image();
                                _0xFF54.crossOrigin = "";
                                var _0xFF79 = this.skin;
                                _0xFF54.addEventListener("load", function () {
                                    var _0xFF2F = document.createElement("canvas");
                                    _0xFF2F.width = 512;
                                    _0xFF2F.height = 512;
                                    var _0xFF9E = _0xFF2F.getContext("2d");
                                    _0xFF9E.beginPath();
                                    _0xFF9E.arc(256, 256, 256, 0, _0x11699, false);
                                    _0xFF9E.closePath();
                                    _0xFF9E.clip();
                                    _0xFF9E.drawImage(_0xFF54, 0, 0, 512, 512);
                                    var _0xFFC3 = _0x116E3.Texture.fromCanvas(_0xFF2F);
                                    _0x11E42[_0xFF79] = _0x11E67.LOADED;
                                    _0x11DF8[_0xFF79] = _0xFFC3
                                });
                                _0xFF54.addEventListener("error", function () {
                                    delete _0x11E42[_0xFF79]
                                });
                                _0xFF54.src = "https://gamedata.gota.io/skins/" + this.skin + ".png"
                            }
                        } else {
                            if (_0x11E42[this.skin] == _0x11E67.LOADED) {
                                this.skinCache = _0x11DF8[this.skin];
                                return this.skinCache
                            }
                        }
                    } else {
                        this.skin = null
                    }
                };
                return null
            };
            this.onDelete = function () {
                if (this.nameCache) {
                    this.nameCache.destroy()
                }
            }
        }

        function _0x108DE() {
            this.bucket = {};
            this.getSkin = function (_0xFF2F) {
                if (!_0xFF2F.skinId) {
                    return
                };
                if (this.bucket[_0xFF2F.skinId] == null) {
                    this.bucket[_0xFF2F.skinId] = {
                        count: 1,
                        cache: this.createMaskCache(_0xFF2F)
                    }
                } else {
                    this.bucket[_0xFF2F.skinId].count = this.bucket[_0xFF2F.skinId].count + 1
                };
                return this.bucket[_0xFF2F.skinId].cache
            };
            this.onDelete = function (_0xFF2F) {
                if (_0xFF2F.ejectedMassSprite) {
                    _0xFF2F.ejectedMassSprite.texture = _0x116E3.Texture.EMPTY;
                    if (this.bucket[_0xFF2F.skinId] != null) {
                        var _0xFF54 = this.bucket[_0xFF2F.skinId];
                        _0xFF54.count = _0xFF54.count - 1;
                        if (_0xFF54.count <= 0) {
                            delete this.bucket[_0xFF2F.skinId];
                            _0xFF54.cache.destroy()
                        }
                    }
                }
            };
            this.createMaskCache = function (_0xFF9E, _0xFFC3) {
                var _0xFF2F = document.createElement("canvas");
                var _0xFF79 = _0xFF2F.getContext("2d");
                _0xFF2F.width = 32;
                _0xFF2F.height = 32;
                _0xFF79.drawImage(_0x10928[_0xFF9E.skin], 0, 0, 32, 32);
                _0xFF79.globalCompositeOperation = "source-in";
                _0xFF79.fillStyle = _0xFF9E.parsedColor;
                _0xFF79.rect(0, 0, 32, 32);
                _0xFF79.fill();
                var _0xFF54 = _0x116E3.Texture.from(_0xFF2F);
                _0xFF54.cacheAsBitmap = true;
                _0xFF54.width;
                return _0xFF54
            }
        }
        const _0x108B9 = new _0x108DE();

        function _0x11527() {}
        _0x11527.prototype.connectionStart = function () {
            var _0xFF54 = "Gota Web " + version;
            var _0xFF2F = new ArrayBuffer(1 + _0xFF54.length + 1 + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 255);
            _0xFF79.setUint8(1, 6);
            _0x12204(2, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.setName = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1 + ((_0xFF54.length + 1) * 2));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 0);
            _0x121DF(1, _0xFF79, _0xFF54);
            if (_0x11493.cSilentLogin) {
                _0xFF79.setUint8(2 + (_0xFF54.length * 2) + 1, 1)
            };
            return _0xFF2F
        };
        _0x11527.prototype.sendKey = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.sendMouse = function (_0xFF79, _0xFF9E) {
            var _0xFF2F = new ArrayBuffer(9);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54.setUint8(0, 16);
            _0xFF54.setInt32(1, _0xFF79, true);
            _0xFF54.setInt32(5, _0xFF9E, true);
            return _0xFF2F
        };
        _0x11527.prototype.sendEjectMass = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, _0xFF54 ? 3 : 4);
            return _0xFF2F
        };
        _0x11527.prototype.sendPing = function () {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54.setUint8(0, 71);
            return _0xFF2F
        };
        _0x11527.prototype.sendSpectate = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 1);
            if (_0xFF54) {
                _0xFF79.setUint16(1, _0xFF54, true)
            };
            return _0xFF2F
        };
        _0x11527.prototype.sendChat = function (_0xFF79, _0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1 + ((_0xFF79.length + 1) * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E.setUint8(0, 72);
            _0xFF9E.setUint8(1, _0xFF54);
            _0x121DF(2, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527.prototype.sendInviteResponse = function (_0xFF2F) {
            var _0xFF54 = new ArrayBuffer(2);
            var _0xFF79 = new DataView(_0xFF54);
            _0xFF79.setUint8(0, 41);
            _0xFF79.setUint8(1, _0xFF2F ? 1 : 0);
            return _0xFF54
        };
        _0x11527.prototype.sendPartyAction = function (_0xFF2F, _0xFF79) {
            var _0xFF54 = new ArrayBuffer(6);
            var _0xFF9E = new DataView(_0xFF54);
            _0xFF9E.setUint8(0, 40);
            _0xFF9E.setUint8(1, _0xFF2F);
            _0xFF9E.setUint32(2, _0xFF79, true);
            return _0xFF54
        };
        _0x11527.prototype.sendPartyJoin = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + _0xFF54.length + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 42);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.sendShowProfile = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 103);
            _0xFF79.setUint16(1, _0xFF54, true);
            return _0xFF2F
        };
        _0x11527.prototype.sendWhisper = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(5 + ((_0xFF79.length + 1) * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E.setUint8(0, 73);
            _0xFF9E.setUint32(1, _0xFF54, true);
            _0x121DF(5, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527.prototype.sendSubPanel = function (_0xFF54) {
            var _0xFF79 = !_0xFF54 ? 1 : _0xFF54.length + 1;
            var _0xFF2F = new ArrayBuffer(1 + 6 + (_0x11F8F.skinName.length + 1) + _0xFF79);
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E.setUint8(0, 10);
            _0xFF9E.setUint8(1, _0x11F8F.nameColor.r);
            _0xFF9E.setUint8(2, _0x11F8F.nameColor.g);
            _0xFF9E.setUint8(3, _0x11F8F.nameColor.b);
            _0xFF9E.setUint8(4, _0x11F8F.chatColor);
            _0xFF9E.setUint8(5, _0x11F8F.effect);
            _0xFF9E.setUint8(6, _0x11F8F.lowerName ? 1 : 0);
            _0x12204(7, _0xFF9E, _0x11F8F.skinName);
            if (_0xFF79 > 1) {
                _0x12204(8 + _0x11F8F.skinName.length, _0xFF9E, _0xFF54)
            };
            return _0xFF2F
        };
        _0x11527.prototype.sendOptions = function () {
            var _0xFF2F = new ArrayBuffer(1 + 2);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54.setUint8(0, 104);
            _0xFF54.setUint16(1, _0x11493.rViewDistance, true);
            return _0xFF2F
        };
        _0x11527.prototype.sendQueue = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 4);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 80);
            _0xFF79.setUint8(1, _0xFF54);
            _0xFF79.setUint8(2, 0);
            _0xFF79.setUint16(3, 0);
            return _0xFF2F
        };
        _0x11527.prototype.sendCustomGame = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + 1);
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 90);
            _0xFF79.setUint8(1, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.sendLeaveMatch = function () {
            var _0xFF2F = new ArrayBuffer(1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54.setUint8(0, 81);
            return _0xFF2F
        };
        _0x11527.prototype.sendShowLobbies = function () {
            var _0xFF2F = new ArrayBuffer(1 + 1);
            var _0xFF54 = new DataView(_0xFF2F);
            _0xFF54.setUint8(0, 93);
            return _0xFF2F
        };
        _0x11527.prototype.sendJoinLobby = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(1 + 4 + (_0xFF79.length * 2) + 2);
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E.setUint8(0, 94);
            _0xFF9E.setUint32(1, _0xFF54, true);
            _0x121DF(5, _0xFF9E, _0xFF79);
            return _0xFF2F
        };
        _0x11527.prototype.sendCaptcha = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + (_0xFF54.length + 1));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 100);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.sendAuthToken = function (_0xFF54) {
            var _0xFF2F = new ArrayBuffer(1 + (_0xFF54.length + 1));
            var _0xFF79 = new DataView(_0xFF2F);
            _0xFF79.setUint8(0, 101);
            _0x12204(1, _0xFF79, _0xFF54);
            return _0xFF2F
        };
        _0x11527.prototype.sendCustomGameUpdate = function (_0xFF54, _0xFF79, _0xFF9E) {
            var _0xFF2F = new ArrayBuffer(1 + 3);
            var _0xFFC3 = new DataView(_0xFF2F);
            _0xFFC3.setUint8(0, 91);
            _0xFFC3.setUint8(1, _0xFF54);
            if (_0xFF54 == _0x10722.STARTMASS || _0xFF54 == _0x10722.VIRUS_DENSITY) {
                _0xFFC3.setUint16(2, _0xFF79, false)
            } else {
                if (_0xFF54 == _0x10722.RESPAWN_DELAY) {
                    _0xFFC3.setInt16(2, _0xFF79, false)
                } else {
                    _0xFFC3.setUint8(2, _0xFF79);
                    _0xFFC3.setUint8(3, _0xFF9E)
                }
            };
            return _0xFF2F
        };
        _0x11527.prototype.sendCustomGameUpdateString = function (_0xFF54, _0xFF79) {
            var _0xFF2F = new ArrayBuffer(1 + 3 + (_0xFF79.length * 2));
            var _0xFF9E = new DataView(_0xFF2F);
            _0xFF9E.setUint8(0, 92);
            _0xFF9E.setUint8(1, _0xFF54);
            _0x121DF(2, _0xFF9E, _0xFF79);
            return _0xFF2F
        };

        function _0x12204(_0xFF54, _0xFF9E, _0xFF79) {
            for (var _0xFF2F = 0; _0xFF2F < _0xFF79.length; _0xFF2F++) {
                _0xFF9E.setUint8(_0xFF54, _0xFF79.charCodeAt(_0xFF2F));
                _0xFF54++
            };
            _0xFF9E.setUint8(_0xFF54, 0)
        }

        function _0x121DF(_0xFF54, _0xFF9E, _0xFF79) {
            for (var _0xFF2F = 0; _0xFF2F < _0xFF79.length; _0xFF2F++) {
                _0xFF9E.setUint16(_0xFF54, _0xFF79.charCodeAt(_0xFF2F), true);
                _0xFF54 += 2
            };
            _0xFF9E.setUint16(_0xFF54, 0, true)
        }

        function _0x11958(_0xFF79) {
            var _0xFF54 = "";
            while (true) {
                var _0xFF2F = _0xFF79.getUint8(_0xFF79.offset);
                _0xFF79.offset++;
                if (_0xFF2F == 0) {
                    break
                };
                _0xFF54 += String.fromCharCode(_0xFF2F)
            };
            return _0xFF54
        }

        function _0x11933(_0xFF79) {
            var _0xFF54 = "";
            while (true) {
                var _0xFF2F = _0xFF79.getUint16(_0xFF79.offset, true);
                _0xFF79.offset += 2;
                if (_0xFF2F == 0) {
                    break
                };
                _0xFF54 += String.fromCharCode(_0xFF2F)
            };
            return _0xFF54
        }

        function _0x11E8C(_0xFF54) {
            while (true) {
                var _0xFF2F = _0xFF54.getUint16(_0xFF54.offset, true);
                _0xFF54.offset += 2;
                if (_0xFF2F == 0) {
                    break
                }
            }
        }

        function _0x10CA0(_0xFF2F, _0xFF54) {
            console.error(_0xFF2F.message, _0xFF2F.code);
            if (_0xFF54) {
                switch (_0xFF2F.code) {
                case "auth/user-disabled":
                    alert("This account has been permanently suspended by an administrator.");
                    break;
                case "auth/popup-closed-by-user":
                    break;
                default:
                    alert(_0xFF2F.message + " (" + _0xFF2F.code + ")");
                    break
                }
            }
        }

        function _0x10213(_0xFF2F) {
            return _0xFF2F.charAt(0).toUpperCase() + _0xFF2F.slice(1)
        }

        function _0x112B2(_0xFF2F) {
            switch (_0xFF2F) {
            case "classic":
                return "Classic";
                break;
            case "instant":
                return "Instant Merge";
                break;
            case "megasplit":
                return "Mega Split";
                break;
            default:
                return _0xFF2F;
                break
            }
        }

        function _0x10669(_0xFFE8, _0xFFC3) {
            var _0xFF79 = "";
            var _0xFF9E = "";
            var _0xFF54 = "white";
            if (_0xFFC3.flags.STAFF) {
                _0xFF9E = "Gota.io Staff";
                _0xFF79 = "build";
                _0xFF54 = "royalblue"
            } else {
                if (_0xFFC3.flags.VERIFIED) {
                    _0xFF9E = "Verified Player";
                    _0xFF79 = "check_circle"
                } else {
                    return
                }
            };
            var _0xFF2F = document.createElement("i");
            _0xFF2F.className = "material-icons";
            _0xFF2F.id = "user-badge";
            _0xFF2F.innerText = _0xFF79;
            _0xFF2F.style.color = _0xFF54;
            $(_0xFF2F).attr("data-balloon", _0xFF9E);
            $(_0xFF2F).attr("data-balloon-pos", "up");
            $(_0xFFE8).append(_0xFF2F)
        }

        function _0x10644(_0xFF54, _0xFF79) {
            var _0xFF2F = document.createElement("i");
            _0xFF2F.className = "material-icons";
            _0xFF2F.innerText = _0xFF54;
            _0xFF2F.setAttribute("data-balloon", _0xFF79);
            _0xFF2F.setAttribute("data-balloon-pos", "up");
            return _0xFF2F
        }

        function _0x1068E(_0x10110, _0x1017F, _0x10032, _0xFF79) {
            var _0xFFE8 = document.createElement("li");
            _0xFFE8.className = "user-embed";
            var _0xFFC3 = document.createElement("img");
            _0xFFC3.src = _0x10110.avatar;
            _0xFFC3.alt = _0x10110.username;
            _0xFFE8.appendChild(_0xFFC3);
            var _0x1000D = document.createElement("div");
            _0x1000D.className = "info";
            var _0x10135 = document.createElement("div");
            _0x10135.className = "username";
            _0x10135.innerText = _0x10110.username;
            _0x1000D.appendChild(_0x10135);
            _0x10669(_0x10135, _0x10110);
            var _0x100EB = document.createElement("div");
            var _0x10057 = false;
            var _0x100C6 = null;
            if (_0x10032) {
                _0x100C6 = _0x10213(_0x10110.presence.server);
                if ((_0x10110.presence.timestamp + (1000 * 60)) < new Date().getTime() || _0x10110.presence.id === undefined) {
                    _0x100EB.className = "status offline";
                    _0x100EB.innerText = "Not playing on any server"
                } else {
                    _0x10057 = true;
                    _0x100EB.className = "status " + (_0x10110.presence.status === "ONLINE" ? "online" : "spectate");
                    _0x100EB.innerText = (_0x10110.presence.status === "ONLINE" ? "Playing " : "Spectating ") + _0x10110.presence.gamemode + " on " + _0x100C6 + " (ID " + _0x10110.presence.id + ")"
                }
            } else {
                _0x100EB.className = "status pending";
                _0x100EB.innerText = "Pending Friend Request"
            };
            _0x1000D.appendChild(_0x100EB);
            var _0xFF54 = document.createElement("div");
            _0xFF54.className = "actions";
            var _0x1015A = _0x10644("face", "View Profile");
            _0x1015A.addEventListener("click", function (_0xFF2F) {
                _0x11140(_0x10110, $("#main-social"))
            });
            _0xFF54.append(_0x1015A);
            if (_0x10032 && _0x10057) {
                var _0x1007C = _0x10644("input", "Join Server");
                _0x1007C.addEventListener("click", function (_0xFF2F) {
                    _0x11BCD(_0x100C6);
                    _0x11752.play();
                    _0x11752.selfMsg(_0x10110.username + "\'s ID is " + _0x10110.presence.id);
                    _0x10D59($("#main-social"))
                });
                _0xFF54.appendChild(_0x1007C)
            };
            if (!_0x10032) {
                var _0xFF9E = _0x10644("done", "Add as Friend");
                _0xFF9E.isHandlingRequest = false;
                _0xFF9E.addEventListener("click", function (_0xFF54) {
                    if (_0xFF9E.isHandlingRequest) {
                        return
                    };
                    _0xFF9E.isHandlingRequest = true;
                    firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                        fetch(_0xFF2F + "/api/v1/social/friends", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                token: _0xFF54,
                                target: _0x10110.uid,
                                action: 2
                            })
                        }).then((_0xFF2F) => {
                            return _0xFF2F.json()
                        }).then((_0xFF2F) => {
                            if (_0xFF2F.code !== 200) {
                                alert(_0xFF2F.message)
                            };
                            _0xFF9E.isHandlingRequest = false
                        }).catch((_0xFF2F) => {
                            alert(_0xFF2F);
                            _0xFF9E.isHandlingRequest = false
                        })
                    }).catch((_0xFF2F) => {
                        _0x10CA0(_0xFF2F, true);
                        _0xFF9E.isHandlingRequest = false
                    })
                });
                _0xFF54.appendChild(_0xFF9E)
            };
            var _0x100A1 = _0x10644("block", "Remove Friend");
            _0x100A1.isHandlingRequest = false;
            _0x100A1.addEventListener("click", function (_0xFF54) {
                if (_0x100A1.isHandlingRequest || !confirm("Are you sure you want to remove \"" + _0x10110.username + "\" as your friend?")) {
                    return
                };
                _0x100A1.isHandlingRequest = true;
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF54,
                            target: _0x10110.uid,
                            action: 4
                        })
                    }).then((_0xFF2F) => {
                        return _0xFF2F.json()
                    }).then((_0xFF2F) => {
                        alert(_0xFF2F.message);
                        if (_0xFF2F.code === 200) {
                            firebase.database().ref(_0x1206D.callbacks[_0x10110.uid]).off();
                            _0x1206D.elements[_0x10110.uid].remove();
                            delete _0x1206D.callbacks[_0x10110.uid];
                            delete _0x1206D.elements[_0x10110.uid]
                        };
                        _0x100A1.isHandlingRequest = false
                    }).catch((_0xFF2F) => {
                        alert(_0xFF2F);
                        _0x100A1.isHandlingRequest = false
                    })
                }).catch((_0xFF2F) => {
                    _0x10CA0(_0xFF2F, true);
                    _0x100A1.isHandlingRequest = false
                })
            });
            _0xFF54.appendChild(_0x100A1);
            _0x1000D.appendChild(_0xFF54);
            _0xFFE8.appendChild(_0x1000D);
            if (_0xFF79) {
                return _0x1017F.appendChild(_0xFFE8)
            } else {
                return _0xFFE8
            }
        }

        function _0x11140(_0xFF79, _0xFF54, _0xFF2F) {
            if (_0xFF54) {
                _0x10D59(_0xFF54)
            };
            $("#profile-username").text(_0xFF79.username);
            $("#profile-avatar").attr("src", _0xFF79.avatar);
            $("#profile-avatar").attr("alt", _0xFF79.username);
            $("#profile-level").html("Level " + _0xFF79.levelData.level + "&nbsp;&nbsp;&nbsp;[" + _0x10A50(_0xFF79.levelData.xp_current) + "/" + _0x10A50(_0xFF79.levelData.xp_needed) + "]");
            if (_0xFF79.title && _0xFF79.title > 0 && _0x12023[_0xFF79.title]) {
                $("#profile-title").text(_0x12023[_0xFF79.title])
            } else {
                $("#profile-title").text("")
            };
            $("#profile-name").off("click");
            if (_0xFF79.uid == _0x12195.uid) {
                $("#profile-name").on("click", function () {
                    $("#popup-profile").hide();
                    _0x12048($("#popup-account-username"))
                });
                $("#profile-name").css("cursor", "pointer")
            } else {
                $("#profile-name").css("cursor", "default")
            };
            if (_0xFF79.flags.STAFF) {
                $("#profile-avatar").addClass("spin")
            } else {
                $("#profile-avatar").removeClass("spin")
            };
            _0x10669($("#profile-username"), _0xFF79);
            $("#profile-close-btn").off("click");
            $("#profile-close-btn").on("click", function () {
                if (!_0xFF2F) {
                    _0x11D64(_0x11321)
                };
                _0x10D59($("#popup-profile"))
            });
            _0x11D64($("#popup-profile"))
        }

        function _0x111D4(_0xFF54) {
            if (_0x10CC5) {
                return
            };
            var _0xFF79 = $("#social-friends .user-list")[0];
            var _0xFF9E = $("#social-friends .user-list")[1];
            $("#social-uid").text(_0xFF54.uid);
            firebase.database().ref("/friendships/" + _0xFF54.uid).on("value", function (_0xFFE8) {
                if (_0xFFE8.val() === null) {
                    var _0x1000D = document.createElement("div");
                    var _0x10032 = document.createElement("span");
                    _0x1000D.className = "title-text center";
                    _0x10032.innerText = "You have no friends 😥";
                    _0x1000D.appendChild(_0x10032);
                    _0xFF79.appendChild(_0x1000D);
                    return
                };
                var _0xFF54 = _0xFFE8.val();
                var _0xFFC3 = false;
                Object.keys(_0xFF54).map((_0xFFE8) => {
                    var _0x1000D = _0xFF54[_0xFFE8];
                    if (!_0x1000D && !_0xFFC3) {
                        _0xFFC3 = true;
                        firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                            fetch(_0xFF2F + "/api/v1/social/friends/pending", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    token: _0xFF54
                                })
                            }).then((_0xFF2F) => {
                                return _0xFF2F.json()
                            }).then((_0xFF2F) => {
                                if (_0xFF2F.code === 200) {
                                    _0xFF2F.profiles.forEach((_0xFF54) => {
                                        if (!_0x1206D.pendingFriends.includes(_0xFF54)) {
                                            _0x1206D.pendingFriends.push(_0xFF54.uid)
                                        };
                                        if (_0x1206D.elements[_0xFF54.uid]) {
                                            var _0xFF2F = _0x1068E(_0xFF54, _0x1206D.elements[_0xFF54.uid], false, false);
                                            _0xFF9E.replaceChild(_0xFF2F, _0x1206D.elements[_0xFF54.uid]);
                                            _0x1206D.elements[_0xFFE8] = _0xFF2F;
                                            return
                                        };
                                        _0x1206D.elements[_0xFF54.uid] = _0x1068E(_0xFF54, _0xFF9E, false, true)
                                    })
                                }
                            })
                        }).catch((_0xFF0A) => {
                            return _0x10CA0(_0xFF0A, false)
                        });
                        return
                    };
                    if (!_0x1206D.callbacks[_0xFFE8]) {
                        var _0x10032 = "/users/" + _0xFFE8;
                        _0x1206D.callbacks[_0xFFE8] = _0x10032;
                        firebase.database().ref(_0x10032).on("value", function (_0xFF9E) {
                            if (_0xFF9E.val() === null) {
                                return
                            };
                            var _0xFF54 = _0xFF9E.val();
                            _0x1206D.timestamps[_0xFF54.uid] = _0xFF54.presence.timestamp;
                            if (_0x1206D.pendingFriends.includes(_0xFFE8)) {
                                _0x1206D.pendingFriends.slice(_0x1206D.pendingFriends.indexOf(_0xFFE8), 1);
                                _0x1206D.elements[_0xFFE8].remove();
                                var _0xFF2F = _0x1068E(_0xFF54, _0x1206D.elements[_0xFFE8], true, false);
                                _0xFF79.appendChild(_0xFF2F);
                                _0x1206D.elements[_0xFFE8] = _0xFF2F;
                                return
                            };
                            if (_0x1206D.elements[_0xFFE8]) {
                                var _0xFF2F = _0x1068E(_0xFF54, _0x1206D.elements[_0xFFE8], true, false);
                                _0xFF79.replaceChild(_0xFF2F, _0x1206D.elements[_0xFFE8]);
                                _0x1206D.elements[_0xFFE8] = _0xFF2F;
                                return
                            };
                            _0x1206D.elements[_0xFFE8] = _0x1068E(_0xFF54, _0xFF79, true, true)
                        })
                    }
                })
            });
            setInterval(function () {
                for (var _0xFF2F in _0x1206D.timestamps) {
                    if (!_0x1206D.timestamps.hasOwnProperty(_0xFF2F)) {
                        return
                    };
                    var _0xFF9E = _0x1206D.timestamps[_0xFF2F];
                    if ((_0xFF9E + (1000 * 60)) < new Date().getTime() || _0xFF9E === undefined) {
                        var _0xFF79 = _0x1206D.elements[_0xFF2F].children[1].children[1];
                        _0xFF79.innerText = "Not playing on any server";
                        _0xFF79.className = "status offline";
                        var _0xFF54 = _0x1206D.elements[_0xFF2F].children[1].children[2].children[1];
                        if (_0xFF54.dataset.balloon === "Join Server") {
                            _0xFF54.remove()
                        }
                    }
                }
            }, 1000 * 60);
            _0x10CC5 = true
        }

        function _0x1128D() {
            if (_0x10972.enabled && !_0x11493.cDisableEventSkins) {
                $("body").toggleClass("event-" + _0x10972.key)
            };
            $(".server-tab").on("click", function () {
                var _0xFF2F = $(this).attr("region");
                _0x11BA8(_0xFF2F)
            });
            $("#btn-play").on("click", function () {
                if (_0x11B83 == null || Date.now() < _0x10800) {
                    return
                };
                if (Object.keys(_0x11752.myCells).length != 0 && this.currentServerName == _0x11B83.name) {
                    _0x10D59(_0x11321);
                    return
                };
                _0x11752.spectate = false;
                if (_0x11F45.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0x10D59(_0x11321);
                    _0x10D34();
                    _0x10800 = Date.now() + 2000
                } else {
                    _0x11752.play()
                }
            });
            $("#btn-servers").on("click", function () {
                _0xFF54("main-servers")
            });
            $("#btn-options").on("click", function () {
                _0xFF54("main-options")
            });
            $("#btn-themes").on("click", function () {
                _0xFF54("main-themes")
            });
            $("#btn-cellpanel").on("click", function () {
                _0xFF54("main-subpanel")
            });
            $("#btn-reddit").on("click", function () {
                window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank")
            });
            $("#btn-discord").on("click", function () {
                window.open("https://gota.io/discord", "_blank")
            });
            $("#name-box").keypress(function (_0xFF2F) {
                if (_0xFF2F.keyCode == 13 && $(this).is(":focus")) {
                    _0x11752.play()
                }
            });
            $("#btn-spec").on("click", function () {
                if (_0x11B83 == null || Date.now() < _0x10800) {
                    return
                };
                if (_0x11752.spectate && this.currentServerName == _0x11B83.name) {
                    _0x10D59(_0x11321);
                    return
                };
                _0x11752.spectate = true;
                if (_0x11F45.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0x10D59(_0x11321);
                    _0x10D34();
                    _0x10800 = Date.now() + 2000
                } else {
                    _0x11752.spec()
                }
            });
            $("#chat-input").keyup(function (_0xFF2F) {
                var _0xFF9E = $(this).val();
                var _0xFFC3 = _0xFF9E.split(" ");
                if (_0xFF2F.keyCode == 13 && $(this).is(":focus")) {
                    _0x1094D($(this).val())
                };
                if (_0xFF9E.length == 0 || _0xFF9E.endsWith(" ") || _0xFF2F.keyCode == 13) {
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide()
                } else {
                    if (_0xFF9E.startsWith("/")) {
                        if (_0xFFC3.length > 1) {
                            return
                        };
                        $("#autocomplete-panel").html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                        var _0xFFE8 = -1;
                        Object.values(_0x105B0).map((_0xFF2F) => {
                            if ((_0xFFE8 = _0xFF2F.triggers.findIndex((_0xFF2F) => {
                                    return _0xFF2F.toLowerCase().startsWith(_0xFFC3[0].substring(1).toLowerCase())
                                })) > -1) {
                                $("#autocomplete-panel tbody").append("<tr><td>" + _0xFF2F.triggers[_0xFFE8] + "</td><td>" + _0xFF2F.triggers + "</td><td>" + _0xFF2F.description + "</td></tr>")
                            }
                        });
                        if ($("#autocomplete-panel tbody").children().length == 0) {
                            $("#autocomplete-panel").hide()
                        } else {
                            $("#autocomplete-panel").show()
                        }
                    } else {
                        if (_0xFFC3[_0xFFC3.length - 1].startsWith(":")) {
                            $("#autocomplete-panel").html("");
                            var _0xFF54 = Object.keys(_0x10903).filter((_0xFF2F) => {
                                return _0xFF2F.toLowerCase().includes(_0xFFC3[_0xFFC3.length - 1].substring(1).toLowerCase())
                            });
                            var _0xFF79 = Object.keys(gifEmoteList).filter((_0xFF2F) => {
                                return _0xFF2F.toLowerCase().includes(_0xFFC3[_0xFFC3.length - 1].substring(1).toLowerCase())
                            });
                            if (_0xFF54.length === 0 && _0xFF79.length === 0) {
                                $("#autocomplete-panel").html("");
                                $("#autocomplete-panel").hide();
                                return
                            } else {
                                $("#autocomplete-panel").show()
                            };
                            if (_0xFF54.length > 0) {
                                $("#autocomplete-panel").append("<h3>Emotes</h3>");
                                _0xFF54.forEach((_0xFF2F) => {
                                    $("#autocomplete-panel").append("<img name=\'" + _0xFF2F + "\' title=\'" + _0xFF2F + "\' src=\'https://gamedata.gota.io/emotes/" + _0xFF2F + ".png\' />")
                                })
                            };
                            if (_0xFF79.length > 0) {
                                $("#autocomplete-panel").append("<h3>Gifs</h3>");
                                _0xFF79.forEach((_0xFF2F) => {
                                    $("#autocomplete-panel").append("<img name=\'" + _0xFF2F + "\' title=\'" + _0xFF2F + "\' src=\'https://gamedata.gota.io/emotes/gifs/" + _0xFF2F + ".gif\' />")
                                })
                            }
                        }
                    }
                }
            });
            $("#autocomplete-panel").on("click", function (_0xFF2F) {
                var _0xFF54 = _0x10B2E().split(" ");
                if (_0xFF2F.target.nodeName === "TD") {
                    _0x11C86("/" + _0xFF2F.target.parentElement.children[0].innerHTML + " ");
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide();
                    $("#chat-input").focus()
                } else {
                    if (_0xFF2F.target.nodeName === "IMG") {
                        _0x11C86(_0x10B2E().substring(0, (_0x10B2E().length - _0xFF54[_0xFF54.length - 1].length)) + _0xFF2F.target.attributes.name.nodeValue + " ");
                        $("#autocomplete-panel").html("");
                        $("#autocomplete-panel").hide();
                        $("#chat-input").focus()
                    }
                }
            });
            $("#animationDelay").on("change", function () {
                var _0xFF2F = parseInt($(this).val());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 90
                };
                _0x11493.rAnimationDelay = Math.min(Math.max(_0xFF2F, 25), 250);
                $("#animationDelay").val(_0x11493.rAnimationDelay);
                $("#rAnimationDelay").val(_0x11493.rAnimationDelay)
            });
            $("#viewDistance").on("change", function () {
                var _0xFF2F = parseInt($(this).val());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 100
                };
                _0x11493.rViewDistance = Math.min(Math.max(_0xFF2F, 50), 200);
                $("#viewDistance").val(_0x11493.rViewDistance);
                $("#rViewDistance").val(_0x11493.rViewDistance);
                _0x11752.sendOptions()
            });
            $("#uiScale").on("change", function () {
                var _0xFF2F = parseInt($(this).val());
                if (isNaN(_0xFF2F)) {
                    _0xFF2F = 100
                };
                _0xFF2F *= 0.01;
                _0x11493.rUiScale = Math.min(Math.max(_0xFF2F, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0x11493.rUiScale * 100).toFixed(0));
                $("#rUiScale").val(_0x11493.rUiScale);
                $(".ui-scale").css("transform", "scale(" + _0x11493.rUiScale + ")")
            });
            $("#chat-emote-btn").css("background-image", "url(https://gamedata.gota.io/emotes/" + _0x1190E[Math.floor(Math.random() * _0x1190E.length)] + ".png)");
            $("#chat-emote-btn").on("click", function () {
                $("#emote-panel").toggle()
            });
            $("#emote-panel ul li img").on("click", function (_0xFF2F) {
                _0xFFC3(_0xFF2F.target.name + " ");
                $("#chat-input").focus()
            });
            (function () {
                var _0xFF2F = document.getElementById("chat-panel");
                document.getElementById("chat-resize").addEventListener("mousedown", _0xFF79, false);
                var _0xFFE8, _0x1000D, _0xFFC3, _0xFF9E;

                function _0xFF79(_0xFF79) {
                    _0xFFE8 = _0xFF79.clientX;
                    _0x1000D = _0xFF79.clientY;
                    _0xFFC3 = parseInt(document.defaultView.getComputedStyle(_0xFF2F).width, 10);
                    _0xFF9E = parseInt(document.defaultView.getComputedStyle(_0xFF2F).height, 10);
                    document.documentElement.addEventListener("mousemove", _0xFF54, false);
                    document.documentElement.addEventListener("mouseup", _0x10032, false)
                }

                function _0xFF54(_0xFF54) {
                    _0xFF2F.style.width = (_0xFFC3 + _0xFF54.clientX - _0xFFE8) + "px";
                    _0xFF2F.style.height = (_0xFF9E - (_0xFF54.clientY - _0x1000D)) + "px"
                }

                function _0x10032(_0xFF2F) {
                    document.documentElement.removeEventListener("mousemove", _0xFF54, false);
                    document.documentElement.removeEventListener("mouseup", _0x10032, false)
                }
            })();
            $(".checkbox-options").on("change", function (_0xFF0A) {
                _0x104D2($(this))
            });
            $(".options-container select").on("change", function (_0xFF0A) {
                _0x1051C($(this))
            });
            $(".options-container input[type=range]").on("change", function (_0xFF0A) {
                _0x104F7($(this))
            });
            $("#btn-changelog").on("click", function () {
                _0x10D59($("#popup-changelog"));
                _0x11D64(_0x11321);
                window.open(_0x12092, "_blank")
            });
            $("#btn-close-changelog").on("click", function () {
                _0x10D59($("#popup-changelog"));
                _0x11D64(_0x11321)
            });
            $("#btn-accept").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendInviteResponse(true));
                _0x10D59($("#popup-party"))
            });
            $("#btn-decline").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendInviteResponse(false));
                _0x10D59($("#popup-party"))
            });
            $("#popup-party-code-content button").on("click", function () {
                $("#popup-party-code-content input").select();
                document.execCommand("Copy");
                $("#popup-party-code").hide()
            });
            $("#menu-invite").on("click", function () {
                var _0xFF2F = _0x105D5.data("selected");
                _0x11752.sendPacket(new _0x11502.sendPartyAction(0, _0xFF2F))
            });
            $("#menu-whisper").on("click", function () {
                var _0xFF2F = _0x105D5.data("selected");
                var _0xFF54 = $("#chat-input").val();
                $("#chat-input").val("/t " + _0xFF2F + " " + _0xFF54)
            });
            $("#menu-profile").on("click", function () {
                var _0xFF2F = _0x105D5.data("selected");
                _0x11752.sendPacket(new _0x11502.sendShowProfile(_0xFF2F))
            });
            $("#menu-pu_pr").on("click", function () {
                if (_0x11752.partyCode == undefined) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(4, 0));
                    $("#menu-pu_pr span").text("Private")
                } else {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(4, 1));
                    $("#menu-pu_pr span").text("Public")
                }
            });
            $("#menu-promote").on("click", function () {
                var _0xFF2F = _0x105D5.data("party") + 1;
                if (_0xFF2F >= 0) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(2, _0xFF2F))
                }
            });
            $("#menu-kick").on("click", function () {
                var _0xFF2F = _0x105D5.data("party") + 1;
                if (_0xFF2F >= 0) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(1, _0xFF2F))
                }
            });
            $("#menu-spectate").on("click", function () {
                var _0xFF2F = _0x105D5.data("selected");
                if (_0xFF2F >= 0) {
                    _0x11752.sendPacket(new _0x11502.sendSpectate(_0xFF2F))
                }
            });
            $("#menu-block").on("click", function () {
                var _0xFF54 = parseInt(_0x105D5.data("selected"));
                var _0xFF2F = _0x100C6(_0xFF54);
                _0x11752.selfMsg(_0xFF2F)
            });
            $(document).on("click", function (_0xFF2F) {
                _0x105D5.hide();
                if (_0xFF2F.target.id !== "chat-emote-btn") {
                    $("#emote-panel").hide()
                };
                if ($("#popup-party-code").css("display") !== "none" && _0xFF2F.target.id !== "popup-party-code") {
                    $("#popup-party-code").hide()
                }
            });
            $("#aEditChatTabs").on("click", function (_0xFF2F) {
                _0x101A4();
                _0x10D59(_0x11321);
                _0x11D64($("#popup-chat-tab-editor"))
            });
            $("#cte-tab-selector").on("change", _0x103F4);
            $("#btn-chat-tab-editor-add").on("click", _0x103AA);
            $("#btn-chat-tab-editor-remove").on("click", _0x103CF);
            $("#btn-chat-tab-editor-update").on("click", _0x1043E);
            $(".custom-asset-skinner").on("click", function () {
                $("#popup-asset-skinner .title-text").text($(this).text());
                $("#input-asset-skinner").attr("asset", $(this).attr("id")).val("");
                _0x10D59(_0x11321);
                _0x11D64($("#popup-asset-skinner"))
            });
            $("#btn-custom-asset-set").on("click", function () {
                if (!_0x11493.cThemeEnabled) {
                    _0x10A06()
                };
                var _0xFF54 = $("#input-asset-skinner").val();
                if (_0xFF54) {
                    var _0xFF2F = $("#input-asset-skinner").attr("asset");
                    if (_0xFF2F.charAt(0) == "a" && _0x11FD9[_0xFF2F] != null) {
                        _0x11CAB(_0xFF2F, _0xFF54)
                    }
                };
                $("#popup-asset-skinner .back-button").trigger("click")
            });
            $("#btn-custom-asset-clear").on("click", function () {
                if (!_0x11493.cThemeEnabled) {
                    _0x10A06()
                };
                var _0xFF2F = $("#input-asset-skinner").attr("asset");
                if (_0xFF2F.charAt(0) == "a" && _0x11FD9[_0xFF2F] != null) {
                    _0x11CAB(_0xFF2F, "")
                }
            });
            $("#popup-asset-skinner").on("dragover", false).on("drop", function (_0xFF2F) {
                if (!_0x11493.cThemeEnabled) {
                    _0x10A06()
                };
                var _0xFF79 = $("#input-asset-skinner").attr("asset");
                if (_0xFF79.charAt(0) == "a" && _0x11FD9[_0xFF79] != null) {
                    var _0xFF54 = _0x10B53(_0xFF2F.originalEvent);
                    if (/\.(jpe?g|png|gif)$/i ["test"](_0xFF54.name)) {
                        var _0xFF9E = new FileReader();
                        _0xFF9E.addEventListener("load", function () {
                            _0x11CAB(_0xFF79, this.result)
                        }, false);
                        _0xFF9E.readAsDataURL(_0xFF54)
                    }
                };
                return false
            });
            $("#btn-food-colors").on("click", function () {
                _0x120B7();
                _0x10D59(_0x11321);
                _0x11D64($("#popup-food-colors"))
            });
            $("#btn-theme-export").on("click", function () {
                if (!_0x11493.cThemeEnabled) {
                    return
                };
                var _0xFF54 = "theme.json";
                var _0xFF2F = JSON.stringify(_0x11FD9, null, 2);
                _0x1084A(_0xFF54, _0xFF2F, "text/plain")
            });
            $("#btn-theme-import").on("click", function () {
                $("#theme-import").trigger("click")
            });
            $("#theme-import").on("change", function () {
                var _0xFF54 = $(this).prop("files");
                if (_0xFF54.length > 0) {
                    var _0xFF2F = _0xFF54[0];
                    _0x11268(_0xFF2F)
                }
            });
            $("#main-themes .options-container").on("dragover", false).on("drop", function (_0xFF2F) {
                var _0xFF54 = _0x10B53(_0xFF2F.originalEvent);
                _0x11268(_0xFF54);
                return false
            });
            $("#cGlobalLeaderboard").on("change", function () {
                if (!_0x12195 || _0x10AE4) {
                    return
                };
                _0x10AE4 = true;
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/options/setFlags", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF54
                        })
                    }).then(((_0xFF2F) => {
                        return _0xFF2F.json()
                    })).then((_0xFF2F) => {
                        _0x10AE4 = false;
                        $(this).prop("checked", _0xFF2F.message)
                    }).catch((_0xFF2F) => {
                        console.error(_0xFF2F);
                        _0x10AE4 = false;
                        alert(_0xFF2F)
                    })
                }).catch((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            firebase.auth().onAuthStateChanged(function (_0xFF2F) {
                if (_0xFF2F) {
                    if (!_0x105FA.consented) {
                        firebase.auth().signOut().then(function () {});
                        return
                    };
                    _0x11D1A();
                    if (_0x11752.isConnected() && firebase.auth().currentUser !== null) {
                        firebase.auth().currentUser.getIdToken(true).then((_0xFF2F) => {
                            _0x11752.sendPacket(new _0x11502.sendAuthToken(_0xFF2F))
                        }).catch((_0xFF0A) => {
                            return _0x10CA0(_0xFF0A, true)
                        })
                    };
                    var _0xFF54 = firebase.database().ref("users/" + _0xFF2F.uid);
                    var _0xFF9E = false;
                    _0xFF54.on("value", function (_0x10057) {
                        var _0xFFC3 = _0x10057.val();
                        if (!_0xFFC3) {
                            return
                        };
                        if (!_0xFF9E) {
                            $("#account-loader").hide();
                            $("#authed").show();
                            $("#authed").attr("style", "display: flex;");
                            $("#cGlobalLeaderboard").removeAttr("disabled");
                            $("#cGlobalLeaderboard").prop("checked", _0xFFC3.flags.PUBLIC);
                            _0xFF9E = true
                        };
                        _0x12195 = _0xFFC3;
                        $("#account-avatar").attr("src", _0xFFC3.avatar);
                        $("#account-username").text(_0xFFC3.username);
                        _0x10669($("#account-username"), _0xFFC3);
                        $("#account-level").html("Level " + _0xFFC3.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + _0x10A50(_0xFFC3.levelData.xp_current) + "/" + _0x10A50(_0xFFC3.levelData.xp_needed) + " XP");
                        $(".xp-meter > span").each(function () {
                            var _0xFF2F = ((_0xFFC3.levelData.xp_current / _0xFFC3.levelData.xp_needed) * 100);
                            $(this).animate({
                                width: _0xFF2F + "%"
                            }, 1200)
                        });
                        if (!_0x11752.accountListeners.loadServers) {
                            _0x11752.accountListeners.loadServers = firebase.database().ref("servers/account/" + _0x12195.uid).on("value", function (_0xFFC3) {
                                var _0xFF2F = _0xFFC3.val();
                                if (!_0xFF2F) {
                                    return
                                };
                                _0xFF79 = {};
                                for (var _0xFF54 in _0xFF2F) {
                                    var _0xFF9E = _0xFF2F[_0xFF54];
                                    if (_0xFF9E.up) {
                                        _0xFF79[_0xFF9E.name] = new _0x11C17(_0xFF9E.name, _0xFF9E.ip + ":" + _0xFF9E.port, "?", _0xFF9E.gamemode, _0xFF9E.region, _0xFF9E.ssl, 0)
                                    }
                                };
                                _0x1118A();
                                if (_0x11B83 != null) {
                                    _0x11BCD(_0x11B83.name)
                                }
                            })
                        };
                        if (_0xFFC3.flags.DISCORD_LINKED && !_0x11752.accountListeners.loadDiscord) {
                            _0x11752.accountListeners.loadDiscord = firebase.firestore().collection("discord").doc(_0x12195.uid).onSnapshot((_0xFF2F) => {
                                if (_0xFF2F.exists) {
                                    $("#discordLinkStatus").text("Your account is linked with " + _0xFF2F.data().username + "#" + _0xFF2F.data().discrim);
                                    $("#discordLinkStatus").show();
                                    $("#discordLink").hide();
                                    $("#discordUnlink").show();
                                    $(".discord-login-container").css("padding", "15px")
                                } else {
                                    $("#discordLinkStatus").hide();
                                    $("#discordUnlink").hide();
                                    $("#discordLink").show();
                                    $(".discord-login-container").css("padding", "30px")
                                }
                            })
                        };
                        if (_0xFFC3.tokens !== undefined) {
                            var _0x1000D = new Date();
                            _0x1000D.setMonth(_0x1000D.getMonth() + _0xFFC3.tokens);
                            if (_0xFFC3.tokens == 0) {
                                $("#redeem-tokens").hide();
                                $("#token-amount").text("You have 0 tokens.")
                            } else {
                                $("#redeem-tokens").show();
                                $("#token-amount").text("You have " + _0xFFC3.tokens + " tokens, maximum expiry date: " + _0x1000D.toString());
                                $("#redeem-spend").attr("max", _0xFFC3.tokens)
                            }
                        } else {
                            $("#token-amount").text("You have 0 tokens.")
                        };
                        if (_0x12195.title && _0x12195.title > 0 && _0x12170 && _0x12170.titles && _0x12170.titles.length > 0) {
                            var _0xFF54 = $("#account-titles");
                            var _0x10032 = 0;
                            for (var _0xFFE8 = 0; _0xFFE8 < _0x12170.titles.length; _0xFFE8++) {
                                if (_0x12170.titles[_0xFFE8] == _0x12195.title) {
                                    _0x10032 = _0xFFE8 + 1
                                }
                            };
                            if (_0x10032 > 0) {
                                _0xFF54.val(_0x10032)
                            }
                        };
                        if (!_0x11752.accountListeners.loadPrivateData) {
                            _0x11752.accountListeners.loadPrivateData = firebase.database().ref("private/" + _0xFF2F.uid).on("value", function (_0xFFC3) {
                                var _0xFF54 = _0xFFC3.val();
                                if (!_0xFF54) {
                                    return
                                };
                                _0x12170 = _0xFF54;
                                if (_0x12170.titles && _0x12170.titles.length > 0) {
                                    var _0xFF2F = $("#account-titles");
                                    var _0xFF9E = 0;
                                    _0xFF2F.empty();
                                    _0xFF2F.append("<option value=\'0\'>Default Title</option>");
                                    for (var _0xFF79 = 0; _0xFF79 < _0xFF54.titles.length; _0xFF79++) {
                                        _0xFF2F.append("<option value=\'" + (_0xFF79 + 1) + "\'>" + _0x12023[_0x12170.titles[_0xFF79]] + "</option>");
                                        if (_0x12170.titles[_0xFF79] == _0x12195.title) {
                                            _0xFF9E = _0xFF79 + 1
                                        }
                                    };
                                    if (_0xFF9E > 0) {
                                        _0xFF2F.val(_0xFF9E)
                                    };
                                    _0xFF2F.css("display", "inline-block")
                                } else {
                                    $("#account-titles").css("display", "none")
                                };
                                if (_0x12170.message && _0x12170.message.title && _0x12170.message.content && !_0x12170.message.read) {
                                    $("#popup-message-title").text(_0x12170.message.title);
                                    $("#popup-message-content").html(_0x12170.message.content);
                                    _0x11D64($("#popup-message"));
                                    _0x10D59(_0x11321)
                                }
                            })
                        };
                        if (_0x10CC5) {
                            _0x111D4(_0x12195)
                        };
                        _0x11087(_0xFF2F.uid)
                    })
                } else {
                    $("#cGlobalLeaderboard").attr("disabled");
                    if (!_0x105FA.consented) {
                        $("#authed").hide();
                        $("#account-loader").hide();
                        $("#guest").hide();
                        $("#no_cookie_consent").show()
                    } else {
                        $("#authed").hide();
                        $("#account-loader").hide();
                        $("#no_cookie_consent").hide();
                        $("#guest").show()
                    }
                }
            });
            $("#account-login").on("click", function () {
                if (_0x105FA.consented) {
                    firebase.auth().signInWithPopup(_0xFFE8).then(function (_0xFF0A) {}).catch((_0xFF0A) => {
                        return _0x10CA0(_0xFF0A, true)
                    })
                }
            });
            $("#account-logout").on("click", function () {
                firebase.auth().signOut().then(function () {
                    $("#authed").hide(500);
                    $("#guest").show();
                    $("#discordLinkStatus").hide();
                    $(".discord-login-container").show()
                }).catch((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                })
            });
            $("#account-shop").on("click", function () {
                window.open("https://trello.com/c/Hdnxuxuc/2-account-system", "_blank")
            });
            $("#account-social").on("click", function () {
                if (!_0x12195) {
                    return
                };
                _0x111D4(_0x12195);
                _0x11D64($("#main-social"));
                _0x10D59($(_0x11321))
            });
            $("#social-back-button").on("click", function () {
                _0x10D59($("#main-social"));
                _0x11D64($(_0x11321))
            });
            $("#account-profile").on("click", function () {
                _0x11140(_0x12195, _0x11321)
            });
            $("#food-colors-close-btn").on("click", function () {
                _0x12048(_0x11321);
                _0x10D59($("#popup-food-colors"))
            });

            function _0xFF9E(_0xFF54, _0xFF2F) {
                if (_0xFF54) {
                    $(_0xFF2F).prop("disabled", false);
                    $(_0xFF2F).text("Set");
                    return
                };
                $(_0xFF2F).prop("disabled", true);
                $(_0xFF2F).text("...")
            }
            $("#account-titles").on("change", function () {
                if (_0x10AE4) {
                    return
                };
                var _0xFF54 = parseInt($(this).val());
                _0x10AE4 = true;
                firebase.auth().currentUser.getIdToken().then((_0xFF79) => {
                    fetch(_0xFF2F + "/api/v1/options/setTitle", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF79,
                            title: _0xFF54
                        })
                    }).then(((_0xFF2F) => {
                        return _0xFF2F.json()
                    })).then((_0xFF0A) => {
                        _0x10AE4 = false
                    }).catch((_0xFF2F) => {
                        console.error(_0xFF2F);
                        _0x10AE4 = false
                    })
                }).catch((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            $("#popup-message-read-btn").on("click", function () {
                if (_0x10AE4) {
                    return
                };
                _0x10D59($("#popup-message"));
                _0x12048(_0x11321);
                _0x10AE4 = true;
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/options/markAsRead", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF54
                        })
                    }).then(((_0xFF2F) => {
                        return _0xFF2F.json()
                    })).then((_0xFF0A) => {
                        _0x10AE4 = false
                    }).catch((_0xFF2F) => {
                        console.error(_0xFF2F);
                        _0x10AE4 = false
                    })
                }).catch((_0xFF0A) => {
                    _0x10CA0(_0xFF0A, true);
                    _0x10AE4 = false
                })
            });
            $("#account-set-username-btn").on("click", function () {
                if (!_0x12195) {
                    return
                };
                _0xFF9E(false, this);
                var _0xFF54 = $("#account-username-input").val();
                if (!_0xFF54 || _0xFF54 == "" || _0xFF54.trim() == "") {
                    alert("Please provide a username!");
                    _0xFF9E(true, this);
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xFF79) => {
                    fetch(_0xFF2F + "/api/v1/social/username", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF79,
                            username: _0xFF54
                        })
                    }).then((_0xFF2F) => {
                        return _0xFF2F.json()
                    }).then((_0xFF2F) => {
                        _0xFF9E(true, this);
                        if (_0xFF2F.code == 200) {
                            _0x12048(_0x11321);
                            $("#popup-account-username").hide();
                            return
                        };
                        alert(_0xFF2F.message)
                    }).catch((_0xFF2F) => {
                        console.error(_0xFF2F);
                        alert(_0xFF2F);
                        _0xFF9E(true, this)
                    })
                }).catch((_0xFF0A) => {
                    _0xFF9E(true, this);
                    _0x10CA0(_0xFF0A, true)
                })
            });
            $(".popup-panel .back-button").on("click", function () {
                _0x10D7E();
                _0x12048(_0x11321)
            });
            $("#discordLink").on("click", function () {
                if (!_0x12195) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xFF2F) => {
                    window.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + _0xFF2F, "popup", "width=600,height=700")
                })
            });
            $("#discordUnlink").on("click", function () {
                if (!_0x12195) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/options/discord/unlink", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0xFF54
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0xFF2F) => {
                        return _0xFF2F.json()
                    }).then((_0xFF2F) => {
                        alert(_0xFF2F.message)
                    })
                }).catch((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A)
                })
            });
            $("#redeem-tokens").submit(function (_0xFF54) {
                _0xFF54.preventDefault();
                if (!_0x12195) {
                    return
                };
                if (!confirm("By redeeming, you are agreeing the locked name rules linked below the form.\x0A\x0AABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\x0A\x0APress OK to redeem.")) {
                    return
                };
                var _0xFF79 = $("#redeem-name").val();
                var _0xFF9E = $("#redeem-spend").val();
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/options/redeem", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0xFF54,
                            name: _0xFF79,
                            spend: parseInt(_0xFF9E)
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0xFF2F) => {
                        return _0xFF2F.json()
                    }).then((_0xFF2F) => {
                        alert(_0xFF2F.message);
                        if (_0xFF2F.code === 200) {
                            _0x11087(_0x12195.uid)
                        }
                    })
                }).catch((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A)
                })
            });
            $(".error-banner").on("click", function () {
                $(this).hide()
            });
            $("#btn-add-friend").on("click", function (_0xFF54) {
                _0xFF54.preventDefault();
                if (!_0x12195) {
                    return
                };
                var _0xFF9E = prompt("Enter friend\'s UID (found above add friend button)");
                if (!_0xFF9E) {
                    return
                };
                var _0xFF79 = _0xFF9E.replace(/\s/g, "");
                if (typeof _0xFF9E !== "string" || _0xFF79.length === 0) {
                    return alert("Please enter a valid UID")
                };
                firebase.auth().currentUser.getIdToken().then((_0xFF54) => {
                    fetch(_0xFF2F + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xFF54,
                            target: _0xFF79,
                            action: 1
                        })
                    }).then((_0xFF2F) => {
                        return _0xFF2F.json()
                    }).then((_0xFF2F) => {
                        alert(_0xFF2F.message)
                    })
                }).catch((_0xFF0A) => {
                    return _0x10CA0(_0xFF0A, true)
                })
            });
            document.getElementById("party-canvas").oncontextmenu = _0x1162A;
            $(document).keyup(function (_0xFF2F) {
                if (_0xFF2F.keyCode == 13) {
                    var _0xFF54 = $("#chat-input");
                    if (document.activeElement.tagName != "INPUT") {
                        var _0xFF79 = _0xFF54[0];
                        if (_0xFF79) {
                            _0xFF79.setSelectionRange(_0xFF79.value.length, _0xFF79.value.length)
                        };
                        _0xFF54.focus()
                    } else {
                        if (_0xFF54.is(":focus")) {
                            _0xFF54.blur()
                        }
                    }
                }
            });
            $(window).bind("beforeunload", function () {
                return "Are you sure you want to leave Gota.io?"
            });
            _0x11A11();
            $(".keybinds-btn").on("click", function () {
                $(".keybinds-btn").removeClass("keybinds-btn-selected");
                $(this).addClass("keybinds-btn-selected");
                _0x10F3A = true
            });
            $("#btn-reset-keybinds").on("click", function () {
                $(".keybinds-btn").each(function () {
                    var _0xFF2F = $(this);
                    var _0xFF54 = _0xFF2F.attr("id");
                    if (_0x107B6[_0xFF54] != null) {
                        _0x10F5F[_0xFF54] = _0x107B6[_0xFF54];
                        _0x120DC(_0xFF2F)
                    }
                })
            });
            $("#scrimmage-mode-select").on("change", function () {
                $("#scrimmage-mode-info").children().css("display", "none");
                $("#scrimmage-info-" + $(this).val()).css("display", "block")
            });
            $("#btn-queue").on("click", function () {
                var _0xFF2F = parseInt($("#scrimmage-mode-select").val());
                var _0xFF54 = isNaN(_0xFF2F) ? 0 : Math.min(Math.max(_0xFF2F, 0), 100);
                _0x11752.sendPacket(new _0x11502.sendQueue(_0xFF54));
                $(this).blur()
            });
            $("#btn-leave-match").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendLeaveMatch())
            });
            $("#btn-custom-create").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendCustomGame(0));
                $(this).blur()
            });
            $("#btn-custom-return").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendCustomGame(1))
            });
            $("#btn-custom-start").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendCustomGame(2))
            });
            $("#btn-custom-lobbies").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendShowLobbies())
            });
            $("#btn-lobbies-refresh").on("click", function () {
                _0x11752.sendPacket(new _0x11502.sendShowLobbies())
            });
            $("#btn-lobbies-join").on("click", function () {
                if (_0x11B5E === 0) {
                    return
                };
                var _0xFF54 = _0x11B5E;
                var _0xFF79 = "";
                var _0xFF2F = _0x1076C[_0xFF54];
                if (_0xFF2F == null) {
                    return
                };
                if (_0xFF2F.hasPasscode) {
                    _0xFF79 = prompt("Enter the password to join this game", "")
                };
                if (_0xFF79 == null) {
                    _0xFF79 = ""
                };
                _0x11752.sendPacket(new _0x11502.sendJoinLobby(_0xFF54, _0xFF79))
            });
            $("#btn-lobbies-return").on("click", function () {
                $(".scrimmage-full").css("display", "none");
                $("#scrimmage-menu").css("display", "block")
            });
            $("#scrimmage-map").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).find("option:selected").val();
                var _0xFF2F = $(this).attr("data");
                if (_0xFF79 != _0xFF2F) {
                    $("#scrimmage-map option[value=\'" + _0xFF2F + "\']").prop("selected", true);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.MAP, _0xFF79))
                }
            });
            $("#scrimmage-mapmode").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).find("option:selected").val();
                var _0xFF2F = $(this).attr("data");
                if (_0xFF79 != _0xFF2F) {
                    $("#scrimmage-mapmode option[value=\'" + _0xFF2F + "\']").prop("selected", true);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.MODE, _0xFF79))
                }
            });
            $("#scrimmage-mapsize").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).find("option:selected").val();
                var _0xFF2F = $(this).attr("data");
                if (_0xFF79 != _0xFF2F) {
                    $("#scrimmage-mapsize option[value=\'" + _0xFF2F + "\']").prop("selected", true);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.SIZE, _0xFF79))
                }
            });
            $("#scrimmage-startmass").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).val();
                var _0xFF2F = $(this).attr("data");
                if (isNaN(_0xFF79)) {
                    $(this).val(_0xFF2F);
                    return
                };
                _0xFF79 = Math.max(1, Math.min(parseInt(_0xFF79), 32000));
                if (_0xFF79 != _0xFF2F) {
                    $(this).val(_0xFF2F);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.STARTMASS, _0xFF79))
                }
            });
            $("#scrimmage-virusDensity").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).val();
                var _0xFF2F = $(this).attr("data");
                if (isNaN(_0xFF79)) {
                    $(this).val(_0xFF2F);
                    return
                };
                _0xFF79 = Math.max(0, Math.min(parseInt(_0xFF79), 1000));
                if (_0xFF79 != _0xFF2F) {
                    $(this).val(_0xFF2F);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.VIRUS_DENSITY, _0xFF79))
                }
            });
            $("#scrimmage-respawnDelay").on("change", function (_0xFF54) {
                var _0xFF79 = $(this).val();
                var _0xFF2F = $(this).attr("data");
                if (isNaN(_0xFF79)) {
                    $(this).val(_0xFF2F);
                    return
                };
                _0xFF79 = Math.max(-1, Math.min(parseInt(_0xFF79), 600));
                if (_0xFF79 != _0xFF2F) {
                    $(this).val(_0xFF2F);
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.RESPAWN_DELAY, _0xFF79))
                }
            });
            $("#scrimmage-lockteams").on("change", function (_0xFF2F) {
                var _0xFF54 = $(this).prop("checked");
                $(this).prop("checked", !_0xFF54);
                _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.LOCK, _0xFF54 == true ? 1 : 0))
            });
            $("#scrimmage-autoSplit").on("change", function (_0xFF2F) {
                var _0xFF54 = $(this).prop("checked");
                $(this).prop("checked", !_0xFF54);
                _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.AUTOSPLIT, _0xFF54 == true ? 1 : 0))
            });
            $("#scrimmage-public").on("change", function (_0xFF2F) {
                var _0xFF54 = $(this).prop("checked");
                $(this).prop("checked", !_0xFF54);
                _0x11752.sendPacket(new _0x11502.sendCustomGameUpdate(_0x10722.PUBLIC, _0xFF54 == true ? 1 : 0))
            });
            $("#scrimmage-password").on("change", function (_0xFF2F) {
                var _0xFF79 = $(this).prop("checked");
                $(this).prop("checked", !_0xFF79);
                var _0xFF54 = "";
                if (_0xFF79) {
                    _0xFF54 = prompt("Enter a password to join your game (32 max characters)", "")
                };
                if (_0xFF54 == null) {
                    _0xFF54 = ""
                };
                _0x11752.sendPacket(new _0x11502.sendCustomGameUpdateString(_0x10722.PASSWORD, _0xFF54))
            });
            $("#scrimmage-name").on("click", function (_0xFF2F) {
                if (!_0x11752.isPartyLeader()) {
                    return
                };
                var _0xFF54 = prompt("Enter a new name for your game (32 max characters)", $(this).text());
                if (_0xFF54 != null) {
                    _0x11752.sendPacket(new _0x11502.sendCustomGameUpdateString(_0x10722.NAME, _0xFF54))
                }
            })
        }

        function _0x11165() {
            if (window.grecaptcha === undefined) {
                return
            };
            _0x10238 = window.grecaptcha;
            window.grecaptcha = undefined;
            _0x10238.ready(function () {})
        }

        function _0x109BC() {
            _0x10238.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
                action: "login"
            }).then(function (_0xFF2F) {
                _0x11752.sendPacket(new _0x11502.sendCaptcha(_0xFF2F));
                document.body.classList.add("hide-captcha-badge");
                if (!_0x11752.spectate) {
                    _0x11752.play()
                } else {
                    _0x11752.spec()
                }
            })
        }

        function _0x11062() {
            _0x10A2B(function (_0xFF2F) {
                $("#" + _0xFF2F).spectrum({
                    color: _0x11FD9[_0xFF2F],
                    preferredFormat: "hex",
                    showInput: true,
                    showAlpha: true,
                    clickoutFiresChange: false,
                    change: function (_0xFF54) {
                        _0x11FD9[_0xFF2F] = _0xFF54.toRgbString();
                        _0x11A36(_0xFF2F, _0x11FD9[_0xFF2F])
                    }
                })
            });
            $("#uiGameBackgroundColor").spectrum("option", "showAlpha", false);
            $("#uiGameBorderColor").spectrum("option", "showAlpha", false);
            $("#pFoodColors").spectrum({
                preferredFormat: "hex",
                showInput: true,
                chooseText: "Add",
                flat: true,
                clickoutFiresChange: false,
                change: function (_0xFF2F) {
                    if (!_0x11493.cThemeEnabled) {
                        _0x10A06()
                    };
                    var _0xFF54 = _0xFF2F.toHexString();
                    if (!_0x11FD9._FoodColors.includes(_0xFF54)) {
                        _0x11FD9._FoodColors.push(_0xFF54);
                        _0x120B7()
                    }
                }
            })
        }

        function _0x120B7() {
            var _0xFF79 = $("#food-color-list");
            _0xFF79.empty();
            if (_0x11FD9._FoodColors.length == 0) {
                _0x119C7();
                return
            };
            try {
                for (var _0xFF54 in _0x11FD9._FoodColors) {
                    var _0xFF2F = _0x11FD9._FoodColors[_0xFF54];
                    _0xFF79.append("<div c=\'" + _0xFF2F + "\' style=\'background:" + _0xFF2F + ";color:" + _0x10E81(_0xFF2F) + ";\'><span>" + _0xFF2F + "</span><div><button class=\'btn-food-color\'>X</button></div></div>")
                };
                $(".btn-food-color").on("click", function () {
                    var _0xFF79 = $(this).parents().eq(1).attr("c");
                    var _0xFF2F, _0xFF54;
                    while ((_0xFF2F = _0x11FD9._FoodColors.indexOf(_0xFF79)) !== -1) {
                        _0x11FD9._FoodColors.splice(_0xFF2F, 1);
                        _0xFF54 = true
                    };
                    if (_0xFF54) {
                        _0x120B7()
                    }
                })
            } catch (e) {
                _0x11FD9._FoodColors = [];
                _0xFF79.empty()
            };
            _0x119C7()
        }

        function _0x119C7() {
            _0x106D8 = [];
            for (var _0xFF2F of _0x11FD9._FoodColors) {
                _0x106D8.push(_0x116E3.utils.string2hex(_0xFF2F))
            };
            for (var _0xFF54 in _0x11752.foodObjects) {
                _0x11752.foodObjects[_0xFF54].needsPixiUpdate = true
            }
        }

        function _0x1007C(_0xFF79) {
            var _0xFF54 = $(".keybinds-btn-selected");
            _0x10F3A = false;
            if (_0xFF54.size() == 0) {
                return
            };
            var _0xFF2F = _0xFF54.first();
            _0xFF54.removeClass("keybinds-btn-selected");
            if (_0xFF79 != 27) {
                _0x10F5F[_0xFF2F.attr("id")] = _0xFF79
            } else {
                _0x10F5F[_0xFF2F.attr("id")] = -1
            };
            _0x120DC(_0xFF2F)
        }

        function _0x120DC(_0xFF2F) {
            var _0xFF54 = _0x10F5F[_0xFF2F.attr("id")];
            _0xFF2F.html(_0x10FA9(_0xFF54))
        }

        function _0x10FA9(_0xFF2F) {
            return _0xFF2F > 0 ? _0x10F84[_0xFF2F].toUpperCase() : "&nbsp;"
        }

        function _0x110D1() {
            var _0xFF2F = document.getElementById("logo");
            if (_0x11493.cDisableEventSkins || !_0x10972.enabled) {
                _0xFF2F.style.backgroundImage = "url(\'images/logo.png\')"
            } else {
                if (_0x10972.enabled) {
                    _0xFF2F.style.backgroundImage = "url(\'images/events/" + _0x10972.key + "/logo.png\')"
                }
            }
        }

        function _0x110AC() {
            _0x111F9();
            _0x10903 = {};
            gifEmoteList = {};
            for (var _0xFF54 in _0x1190E) {
                var _0xFF2F = _0x1190E[_0xFF54];
                $(".emote-list").append("<li><img name=\'" + _0xFF2F + "\' title=\'" + _0xFF2F + "\' src=\'https://gamedata.gota.io/emotes/" + _0xFF2F + ".png\' /></li>");
                _0x10903[_0xFF2F] = true
            };
            for (var _0xFF54 in _0x10C0C) {
                var _0xFF2F = _0x10C0C[_0xFF54];
                $(".gif-list").append("<li><img name=\'" + _0xFF2F + "\' title=\'" + _0xFF2F + "\' src=\'https://gamedata.gota.io/emotes/gifs/" + _0xFF2F + ".gif\' /></li>");
                gifEmoteList[_0xFF2F] = true
            };
            for (var _0xFF54 = 0; _0xFF54 < _0x10928.length; _0xFF54++) {
                var _0xFFC3 = _0x10928[_0xFF54];
                $("#spEffect").append("<option value=\"" + (_0xFF54 + 1) + "\">" + _0xFFC3.charAt(0).toUpperCase() + _0xFFC3.slice(1) + "</option>");
                var _0xFF9E = new Image();
                _0xFF9E.src = "images/ejectedmass_skins/" + _0xFFC3 + ".png";
                _0x10928[_0xFF54] = _0xFF9E
            };
            if (_0x10972.enabled && _0x10972.customEjectedMass) {
                _0x10997 = new Image();
                _0x10997.src = "images/events/" + _0x10972.key + "/ejected_mass.png"
            };
            _0x1111B();
            for (var _0xFF54 = 0; _0xFF54 < _0x113FF.length; _0xFF54++) {
                var _0xFF79 = _0xFF54;
                gifFrames({
                    url: "images/effects/" + _0x113FF[_0xFF79] + ".gif",
                    frames: "all",
                    cumulative: false,
                    outputType: "canvas"
                }).then(function (_0xFF2F) {
                    var _0xFF54 = new _0x10C31();
                    _0xFF54.loadFromFrameData(_0xFF2F);
                    _0x113DA[_0xFF79] = _0xFF54
                })
            }
        }

        function _0x111F9() {
            var _0xFF2F, _0xFFC3;
            if (!_0x11493.cDisableEventSkins && _0x10972.enabled) {
                _0xFF2F = "images/events/" + _0x10972.key;
                _0xFFC3 = "/spike_mother_happy.png"
            } else {
                _0xFF2F = "images";
                _0xFFC3 = "/spike_mother.png"
            };
            var _0xFF54 = new Image();
            _0xFF54.addEventListener("load", function () {
                _0x11EB1 = _0x116E3.Texture.from(_0xFF54);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752.bucket) {
                        var _0xFF79 = _0x11752.bucket[_0xFF2F];
                        if (_0xFF79.type == 3) {
                            _0xFF79.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0xFF79 = new Image();
            _0xFF79.addEventListener("load", function () {
                _0x11ED6 = _0x116E3.Texture.from(_0xFF79);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752.bucket) {
                        var _0xFF54 = _0x11752.bucket[_0xFF2F];
                        if (_0xFF54.type == 4) {
                            _0xFF54.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0xFF9E = new Image();
            _0xFF9E.addEventListener("load", function () {
                _0x11EFB = _0x116E3.Texture.from(_0xFF9E);
                if (_0x11752) {
                    for (var _0xFF2F in _0x11752.bucket) {
                        var _0xFF54 = _0x11752.bucket[_0xFF2F];
                        if (_0xFF54.type == 4) {
                            _0xFF54.needsPixiUpdate = true
                        }
                    }
                }
            });
            _0xFF54.src = _0xFF2F + "/spike.png";
            _0xFF79.src = _0xFF2F + "/spike_mother.png";
            _0xFF9E.src = _0xFF2F + _0xFFC3
        }
        const _0x10488 = {
            "cDisableAA": function () {
                if (_0x11708) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "sRenderType": function () {
                if (_0x11708) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "cHideId": function () {
                var _0xFF2F = _0x11493.cHideId ? "none" : "block";
                $(".pID").css("display", _0xFF2F)
            },
            "cHideServerDisplay": function () {
                var _0xFF2F = _0x11493.cHideServerDisplay ? "none" : "block";
                $(".psvr").css("display", _0xFF2F)
            },
            "cTransCells": function () {
                _0x10316.alpha = _0x11493.cTransCells ? 0.5 : 1.0
            },
            "cColoredCellCount": function () {
                _0x11752.updateCellCounter(_0x10825.playerCellCount, true)
            },
            "cHideChat": function () {
                var _0xFF2F = _0x11493.cHideChat ? "none" : "block";
                $("#chat-panel").css("display", _0xFF2F)
            },
            "cHideMinimap": function () {
                var _0xFF2F = _0x11493.cHideMinimap ? "none" : "block";
                $("#minimap-panel").css("display", _0xFF2F)
            },
            "cHideScorePanel": function () {
                var _0xFF2F = _0x11493.cHideScorePanel ? "none" : "inline-block";
                $("#score-panel").css("display", _0xFF2F)
            },
            "cHideLeaderboard": function () {
                var _0xFF2F = _0x11493.cHideLeaderboard ? "none" : "block";
                $("#leaderboard-panel").css("display", _0xFF2F)
            },
            "cHideExtraPanel": function () {
                var _0xFF2F = _0x11493.cHideExtraPanel ? "none" : "block";
                $("#extra-panel").css("display", _0xFF2F)
            },
            "cShowCoordinates": function () {
                var _0xFF2F = _0x11493.cShowCoordinates ? "block" : "none";
                $("#minimap-coordinates").css("display", _0xFF2F);
                _0x11A11()
            },
            "cDisableAutoZoom": function () {
                if (_0x11493.cDisableAutoZoom) {
                    _0x11752.scale_base = 0.2 * Math.max(_0x101EE.height / 1080, _0x101EE.width / 1920)
                }
            },
            "cThemeEnabled": function () {
                if (!_0x11493.cThemeEnabled) {
                    _0x119EC();
                    _0x10A2B(function (_0xFF2F) {
                        $("#" + _0xFF2F).spectrum("disable")
                    })
                } else {
                    _0x10A2B(function (_0xFF2F) {
                        $("#" + _0xFF2F).spectrum("enable")
                    })
                }
            },
            "cShowBorder": function () {
                _0x10C7B()
            },
            "cDisableEventSkins": function () {
                if (_0x10972.enabled) {
                    $("body").toggleClass("event-" + _0x10972.key)
                };
                if (_0x115BB === undefined && !_0x11493.cDisableEventSkins) {
                    _0x115BB = new _0x115E0(_0x10972.particlesMax)
                };
                _0x111F9();
                _0x110D1()
            },
            "cResizableChat": function () {
                $("#chat-resize").css("display", _0x11493.cResizableChat ? "block" : "none")
            },
            "sShowNames": function () {
                _0x114B8.levelNames = _0x117C1[_0x11493.sShowNames]
            },
            "sShowSkins": function () {
                _0x114B8.levelSkins = _0x117C1[_0x11493.sShowSkins]
            },
            "sMassType": function () {
                _0x114B8.massType = _0x1136B[_0x11493.sMassType]
            },
            "sTextOutlines": function () {
                _0x114B8.textOutlineSize = _0x11FB4[_0x11493.sTextOutlines];
                for (var _0xFF2F in _0x11752.playerRegistry.bucket) {
                    var _0xFF54 = _0x11752.playerRegistry.bucket[_0xFF2F];
                    if (_0xFF54.nameCache) {
                        _0xFF54.nameCache.style.strokeThickness = _0x114B8.textOutlineSize
                    };
                    _0x11752.playerRegistry.updatePlayer(_0xFF54)
                };
                _0x11DD3.buildSizeCache()
            },
            "sQuality": function () {
                var _0xFF2F = _0x114B8.resolution;
                _0x114B8.resolution = _0x10C56[_0x11493.sQuality];
                if (_0xFF2F !== _0x114B8.resolution) {
                    $(window).trigger("resize")
                }
            },
            "uiForegroundColor": function (_0xFF2F) {
                if (_0x11752) {
                    _0x11752.drawParty()
                };
                $(".fg-interface-color").css("color", _0xFF2F);
                $(".interface-color").css("color", _0xFF2F);
                $(".gota-btn").css("color", _0xFF2F).css("border-color", _0xFF2F);
                $(".popup-panel").css("color", _0xFF2F);
                $(".main").css("color", _0xFF2F);
                $(".main-bottom-stats").css("border-color", _0xFF2F)
            },
            "uiBackgroundColor": function (_0xFF2F) {
                $(".interface-color").css("background-color", _0xFF2F);
                $(".gota-btn").css("background-color", _0xFF2F);
                $(".popup-panel").css("background-color", _0xFF2F)
            },
            "uiBorderColor": function (_0xFF2F) {
                $(".ui-pane").css("border-color", _0xFF2F);
                $(".main").css("border-color", _0xFF2F);
                $(".popup-panel").css("border-color", _0xFF2F);
                $("#chat-tab-container").css("border-color", _0xFF2F);
                $(".chat-tab").css("border-color", _0xFF2F)
            },
            "uiMenuBackgroundColor": function (_0xFF2F) {
                $(".main").css("background-color", _0xFF2F)
            },
            "uiMenuSubBackgroundColor": function (_0xFF54) {
                $(".options-container").css("background-color", _0xFF54);
                $(".server-active").css("background-color", _0xFF54);
                $("#server-content").css("background-color", _0xFF54);
                $("#main-account").css("background-color", _0xFF54);
                var _0xFF79 = tinycolor("white");
                var _0xFF2F = tinycolor(_0xFF54).getAlpha();
                _0xFF79.setAlpha(_0xFF2F * Math.min(Math.max(1 - _0xFF2F, 0.25), 1));
                $(".server-table tbody").css("background-color", _0xFF79.toRgbString())
            },
            "uiPartyLeaderColor": function (_0xFF2F) {
                if (_0x11752) {
                    _0x11752.drawParty()
                }
            },
            "uiGameBackgroundColor": function (_0xFF2F) {
                document.body.style.background = _0xFF2F
            },
            "uiGameBorderColor": function () {
                _0x10C7B()
            },
            "rUiScale": function (_0xFF2F) {
                _0x11493.rUiScale = Math.min(Math.max(_0xFF2F, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0x11493.rUiScale * 100).toFixed(0));
                $(".ui-scale").css("transform", "scale(" + _0x11493.rUiScale + ")")
            },
            "rAnimationDelay": function (_0xFF2F) {
                _0x11493.rAnimationDelay = Math.min(Math.max(_0xFF2F, 25), 250);
                $("#animationDelay").val(_0x11493.rAnimationDelay)
            },
            "rViewDistance": function (_0xFF2F) {
                _0x11493.rViewDistance = Math.min(Math.max(_0xFF2F, 50), 200);
                $("#viewDistance").val(_0x11493.rViewDistance);
                _0x11752.sendOptions()
            },
            "rBorderSize": function (_0xFF2F) {
                _0x11FD9.rBorderSize = Math.min(Math.max(_0xFF2F, 1), 256);
                $("#borderSize").text(_0x11FD9.rBorderSize);
                _0x10C7B()
            },
            "rBackgroundOpacity": function (_0xFF2F) {
                _0x11FD9.rBackgroundOpacity = Math.min(Math.max(_0xFF2F, 0), 1);
                $("#backgroundOpacity").text(Number.parseFloat(_0x11FD9.rBackgroundOpacity * 100).toFixed(0));
                document.getElementById("canvas-background").style.opacity = _0x11FD9.rBackgroundOpacity
            },
            "aCustomBackground": function (_0xFF2F) {
                document.getElementById("canvas-background").style.backgroundImage = "url(\'" + _0xFF2F + "\')";
                document.getElementById("canvas-background").style.backgroundSize = "100% 100%"
            },
            "aCustomSpike": function (_0xFF9E) {
                if (_0x106B3.aCustomSpike) {
                    _0x106B3.aCustomSpike.destroy()
                };
                _0x106B3.aCustomSpike = null;
                for (var _0xFF54 in _0x11752.bucket) {
                    var _0xFF79 = _0x11752.bucket[_0xFF54];
                    if (_0xFF79.type == 3) {
                        _0xFF79.needsPixiUpdate = true
                    }
                };
                if (_0xFF9E.length == 0) {
                    return
                };
                var _0xFF2F = new Image();
                _0xFF2F.crossOrigin = "";
                _0xFF2F.addEventListener("load", function () {
                    _0x106B3.aCustomSpike = _0x116E3.Texture.from(_0xFF2F)
                });
                _0xFF2F.addEventListener("error", function () {
                    _0x11752.selfMsg("Unable to load custom theme virus.")
                });
                _0xFF2F.src = _0xFF9E
            },
            "aCustomMother": function (_0xFF9E) {
                if (_0x106B3.aCustomMother) {
                    _0x106B3.aCustomMother.destroy()
                };
                _0x106B3.aCustomMother = null;
                for (var _0xFF54 in _0x11752.bucket) {
                    var _0xFF79 = _0x11752.bucket[_0xFF54];
                    if (_0xFF79.type == 4) {
                        _0xFF79.needsPixiUpdate = true
                    }
                };
                if (_0xFF9E.length == 0) {
                    return
                };
                var _0xFF2F = new Image();
                _0xFF2F.crossOrigin = "";
                _0xFF2F.addEventListener("load", function () {
                    _0x106B3.aCustomMother = _0x116E3.Texture.from(_0xFF2F)
                });
                _0xFF2F.addEventListener("error", function () {
                    _0x11752.selfMsg("Unable to load custom theme mother cell.")
                });
                _0xFF2F.src = _0xFF9E
            }
        };

        function _0x11A11() {
            if (!_0x11493.cShowCoordinates) {
                $("#minimap-canvas").css({
                    "border-top": "0"
                });
                $("#minimap-panel").css({
                    "height": "250px"
                })
            } else {
                $("#minimap-canvas").css({
                    "border-top": "2px solid rgba(255, 255, 255, .2)"
                });
                $("#minimap-panel").css({
                    "height": "270px"
                })
            }
        }

        function _0x1121E() {
            _0x11CD0();
            $("#btn-chg-ln").on("click", function () {
                if (!_0x112D7) {
                    return
                };
                var _0xFF54 = prompt("Enter new locked name!");
                if (!_0xFF54) {
                    return
                };
                var _0xFF2F = null;
                if (typeof _0xFF54 !== "string") {
                    _0xFF2F = "Please enter a valid name!"
                };
                if (_0xFF54.length < 2) {
                    _0xFF2F = "Locked names must be 2 or more characters long."
                };
                if (_0xFF54.length > 20) {
                    _0xFF2F = "Locked names must be 20 or less characters long."
                };
                if (_0xFF2F !== null) {
                    alert(_0xFF2F);
                    return
                };
                _0xFF54 = _0xFF54.trim();
                if (confirm("You are about to change your locked name to: \'" + _0xFF54 + "\'.\x0ALocked names can only be changed once per week.\x0A\x0AAre you sure you wish to continue?")) {
                    _0x12126(_0xFF54)
                }
            });
            $("#btn-updateSP").on("click", function () {
                _0x12126()
            });
            $("#btn-subpanel-rules").on("click", function () {
                _0x11F8F.rules = true;
                _0x1214B()
            })
        }

        function _0x11CD0() {
            _0x1214B();
            $("#spNameColor").spectrum({
                color: _0x11F8F.nameColor,
                showAlpha: false,
                showInput: true,
                preferredFormat: "rgb"
            });
            $("#spChatColor").spectrum({
                showPaletteOnly: true,
                showPalette: true,
                color: _0x10360[_0x11F8F.chatColor],
                palette: _0x10360
            });
            $("#spSkinName").val(_0x11F8F.skinName);
            $("#spLowerName").prop("checked", _0x11F8F.lowerName);
            $("#spEffect select").val(_0x11F8F.effect)
        }

        function _0x12126(_0xFF9E) {
            _0x11F8F.skinName = $("#spSkinName").val().toLowerCase();
            _0x11F8F.lowerName = $("#spLowerName").prop("checked");
            _0x11F8F.nameColor = $("#spNameColor").spectrum("get").toRgb();
            var _0xFF54 = $("#spChatColor").spectrum("get").toHexString().toUpperCase();
            var _0xFF2F = 0;
            for (var _0xFF79 = 0; _0xFF79 < _0x10360.length; _0xFF79++) {
                if (_0x10360[_0xFF79] == _0xFF54) {
                    _0xFF2F = _0xFF79;
                    break
                }
            };
            _0x11F8F.chatColor = _0xFF2F;
            _0x11F8F.effect = parseInt($("#spEffect").val());
            _0x11752.sendPacket(new _0x11502.sendSubPanel(_0xFF9E))
        }

        function _0x1214B() {
            if (_0x112D7 || _0x11752.subPanelOverride) {
                $("#btn-reddit").css("display", "none");
                $("#btn-cellpanel").css("display", "block");
                if (_0x112D7) {
                    $(".subpanel-name-dashboard").css("display", "")
                } else {
                    $(".subpanel-name-dashboard").css("display", "none")
                };
                if (_0x11F8F.rules) {
                    $("#subpanel-rules").css("display", "none");
                    $("#subpanel-content").css("display", "block")
                } else {
                    $("#subpanel-content").css("display", "none");
                    $("#subpanel-rules").css("display", "block")
                }
            } else {
                $("#btn-cellpanel").css("display", "none");
                $("#btn-reddit").css("display", "block")
            }
        }

        function _0x11087(_0xFF2F) {
            if (!_0x11752.accountListeners.loadSubPanel) {
                _0x11752.accountListeners.loadSubPanel = firebase.firestore().collection("accounts").doc(_0xFF2F).onSnapshot((_0xFF2F) => {
                    if (!_0xFF2F.exists || !_0xFF2F.data().locked) {
                        _0x112D7 = false;
                        if ($("#main-subpanel").css("display") !== "none") {
                            _0xFF54("main-servers")
                        }
                    } else {
                        _0x112D7 = true;
                        $("#spLockedName").html(_0xFF2F.data().name);
                        if (_0xFF2F.data().lastChange !== undefined) {
                            $("#btn-chg-ln").attr("title", "Last Changed: " + new Date(_0xFF2F.data().lastChange).toLocaleString())
                        };
                        if (_0xFF2F.data().expiry !== null) {
                            $("#spExpiry").html(new Date(_0xFF2F.data().expiry.seconds * 1000).toLocaleString())
                        } else {
                            $("#spExpiry").html("Never")
                        }
                    };
                    _0x1214B();
                    _0x11752.accountListeners.loadSubPanel();
                    _0x11752.accountListeners.loadSubPanel = null
                }, (_0xFF2F) => {
                    _0x11752.accountListeners.loadSubPanel();
                    _0x11752.accountListeners.loadSubPanel = null
                })
            }
        }

        function _0x11C17(_0xFF79, _0xFF2F, _0xFFC3, _0xFF54, _0xFFE8, _0x1000D, _0xFF9E) {
            this.name = _0xFF79;
            this.ip = _0xFF2F;
            this.players = _0xFFC3;
            this.mode = _0xFF54;
            this.region = _0xFFE8;
            this.playersCurrent = 0;
            this.ssl = _0x1000D;
            this.order = _0xFF9E
        }

        function _0x1118A() {
            $("#servers-body-eu").html("");
            $("#servers-body-na").html("");
            $("#servers-body-ap").html("");
            for (var _0xFF2F in _0x11C61) {
                for (var _0xFF54 in _0x11C61[_0xFF2F]) {
                    var _0xFF9E = _0x11C61[_0xFF2F][_0xFF54];
                    $("#servers-body-" + _0xFF9E.region).append("<tr id=\"s_" + _0xFF9E.name + "\" class=\"server-row\" server=\"" + _0xFF9E.name + "\"><td class=\"server-table-name\">" + _0xFF9E.name + "</td><td class=\"server-table-players\">" + _0xFF9E.players + "</td><td class=\"server-table-mode\">" + _0xFF9E.mode + "</td></tr>")
                }
            };
            for (var _0xFF54 in _0xFF79) {
                var _0xFF9E = _0xFF79[_0xFF54];
                $("#servers-body-" + _0xFF9E.region).prepend("<tr id=\"s_" + _0xFF9E.name + "\" class=\"account-server server-row\" server=\"" + _0xFF9E.name + "\"><td class=\"server-table-name\">" + _0xFF9E.name + "</td><td class=\"server-table-players\">" + _0xFF9E.players + "</td><td class=\"server-table-mode\">" + _0xFF9E.mode + "</td></tr>")
            };
            $(".server-row").on("click", function () {
                _0x11BCD($(this).attr("server"))
            })
        }

        function _0x10B09(_0xFF2F) {
            for (var _0xFF54 in _0xFF79) {
                if (_0xFF2F.toLowerCase() === _0xFF54.toLowerCase()) {
                    return _0xFF79[_0xFF54]
                }
            };
            return null
        }

        function _0x10BE7(_0xFF2F) {
            for (var _0xFF54 in _0x11C61) {
                for (var _0xFF79 in _0x11C61[_0xFF54]) {
                    if (_0xFF79.toLowerCase() === _0xFF2F.toLowerCase()) {
                        return _0x11C61[_0xFF54][_0xFF79]
                    }
                }
            };
            return null
        }

        function _0x11BCD(_0xFF2F) {
            if (_0x11B83 != null) {
                $("#s_" + _0x11B83.name).removeClass("server-selected")
            };
            _0x11B83 = _0x10BE7(_0xFF2F) || (Object.keys(_0xFF79).length > 0 ? _0x10B09(_0xFF2F) : null);
            if (_0x11B83 != null) {
                $("#s_" + _0x11B83.name).addClass("server-selected")
            }
        }

        function _0x11BA8(_0xFF2F) {
            _0xFF2F = _0xFF2F.toLowerCase();
            var _0xFF54 = $("#server-tab-" + _0xFF2F);
            $(".server-active").css("background-color", "inherit");
            $("#server-tab-container").children().removeClass("server-active");
            _0xFF54.addClass("server-active");
            $(".server-active").css("background-color", _0x11FD9.uiMenuSubBackgroundColor);
            $("#server-content").children().css("display", "none");
            $("#servers-" + _0xFF2F).css("display", "block")
        }

        function _0xFF9E(_0xFF54, _0xFFE8) {
            var _0xFF9E = 0;
            for (tab in _0x11493._ChatTabs) {
                var _0x10032 = _0x11493._ChatTabs[tab];
                if ((_0xFF54 & _0x10032.flags) != _0xFF54) {
                    continue
                };
                var _0xFFC3 = $("#chat-body-" + tab + " tr").length;
                if (_0xFFC3 >= _0x10032.maxMessages) {
                    $("#chat-body-" + tab + " tr:first-child").remove()
                };
                var _0xFF2F = _0xFF9E > 0 ? _0xFFE8.cloneNode(true) : _0xFFE8;
                _0xFF9E++;
                var _0x1000D = document.createElement("tr");
                _0x1000D.appendChild(_0xFF2F);
                document.getElementById("chat-body-" + tab).appendChild(_0x1000D);
                var _0xFF79 = $("#chat-container-" + tab);
                if (_0xFF79[0].scrollHeight - _0xFF79[0].scrollTop < _0xFF79.outerHeight() + 150) {
                    _0xFF79.scrollTop(_0xFF79[0].scrollHeight)
                }
            }
        }

        function _0x1094D(_0xFF2F) {
            if (_0xFF2F.length == 0) {
                return
            } else {
                if (_0xFF2F.charAt(0) == "/") {
                    _0x1154C(_0xFF2F)
                } else {
                    _0x11752.sendPacket(new _0x11502.sendChat(_0xFF2F, 0));
                    _0x11C86("")
                }
            }
        }

        function _0x11C86(_0xFF2F) {
            $("#chat-input").val(_0xFF2F)
        }

        function _0xFFC3(_0xFF2F) {
            $("#chat-input").val(_0x10B2E() + _0xFF2F)
        }

        function _0x10B2E() {
            return $("#chat-input").val()
        }

        function _0x1154C(_0xFF9E) {
            var _0xFFC3 = _0xFF9E.split(" ");
            var _0xFF54 = _0xFFC3[0];
            var _0xFF2F = _0xFF54.substring(1);
            _0x11C86("");
            var _0xFF79 = false;
            Object.keys(_0x105B0).findIndex((_0xFF54) => {
                if (_0x105B0[_0xFF54].triggers.findIndex((_0xFF54) => {
                        return _0xFF54.toUpperCase() === _0xFF2F.toUpperCase()
                    }) > -1 && _0xFF79 == false) {
                    _0x105B0[_0xFF54].action(_0xFFC3.slice(1));
                    _0xFF79 = true;
                    return
                }
            });
            if (_0xFF79 == false) {
                _0x11752.selfMsg("Invalid command!")
            }
        }

        function _0x1197D() {
            var _0xFF54 = $("#chat-tab-container");
            var _0xFF2F = $("#chat-container");
            _0xFF54.empty();
            _0xFF2F.empty();
            for (var _0xFF79 in _0x11493._ChatTabs) {
                var _0xFF9E = _0x11493._ChatTabs[_0xFF79];
                if (_0xFF9E.name.length == 0) {
                    _0xFF9E.name = "Unnamed"
                };
                _0xFF54.append("<li class=\'chat-tab\' id=\'chat-tab-" + _0xFF79 + "\' name=\'" + _0xFF79 + "\'><span>" + _0xFF9E.name + "</span></li>");
                _0xFF2F.append("<div class=\'chat-inner-container\' id=\'chat-container-" + _0xFF79 + "\'><table class=\'chat-table\'><tbody id=\'chat-body-" + _0xFF79 + "\'></tbody></table></div>")
            };
            $(".chat-tab").on("click", function () {
                _0x11B14($(this).attr("name"))
            }).css("border-color", _0x11FD9.uiBorderColor);
            if (_0x11B39 >= 0 && _0x11B39 < _0x11493._ChatTabs.length) {
                _0x11B14(_0x11B39)
            } else {
                _0x11B14(0)
            }
        }

        function _0x119A2() {
            for (var _0xFF2F in _0x11493._ChatTabs) {
                var _0xFF54 = _0x11493._ChatTabs[_0xFF2F];
                if (!_0xFF54) {
                    continue
                };
                if (_0xFF54.name.length == 0) {
                    _0xFF54.name = "Unnamed"
                };
                var _0xFF79 = $("#chat-tab-" + _0xFF2F);
                if (_0xFF79) {
                    _0xFF79.html("<span>" + _0xFF54.name + "</span>")
                }
            }
        }

        function _0x11B14(_0xFF2F) {
            $(".chat-tab").removeClass("chat-active-tab");
            $(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
            _0x11B39 = _0xFF2F;
            var _0xFF54 = _0x11493._ChatTabs[_0xFF2F];
            if (!_0xFF54) {
                return
            };
            $("#chat-tab-" + _0xFF2F).addClass("chat-active-tab");
            $("#chat-container-" + _0xFF2F).addClass("chat-active-container").css("display", "block")
        }

        function _0x101A4(_0xFF79 = 0) {
            var _0xFF2F = $("#cte-tab-selector");
            _0xFF2F.empty();
            for (var _0xFF54 in _0x11493._ChatTabs) {
                _0xFF2F.append("<option value=\'" + _0xFF54 + "\'>" + _0x11493._ChatTabs[_0xFF54].name + "</option>")
            };
            _0xFF2F.prop("selectedIndex", _0xFF79);
            _0xFF2F.trigger("change")
        }

        function _0x103F4(_0xFF79) {
            var _0xFFE8 = $("#cte-tab-selector").val();
            var _0xFFC3 = {
                name: "",
                flags: 0,
                maxMessages: 0
            };
            var _0xFF54 = _0x11493._ChatTabs[_0xFFE8];
            if (_0xFF54) {
                for (var _0xFF9E in _0xFFC3) {
                    _0xFFC3[_0xFF9E] = _0xFF54[_0xFF9E]
                }
            };
            $("#cte-tab-name").val(_0xFFC3.name);
            for (var _0x1000D in _0x10463) {
                var _0xFF2F = (_0x10463[_0x1000D] & _0xFFC3.flags) == _0x10463[_0x1000D];
                $("#cte-type-" + _0x1000D.toLowerCase()).prop("checked", _0xFF2F)
            };
            $("#cte-max-messages").val(_0xFFC3.maxMessages)
        }

        function _0x1043E(_0xFF2F) {
            var _0xFF9E = $("#cte-tab-selector").val();
            var _0x10032 = _0x11493._ChatTabs[_0xFF9E];
            if (!_0x10032) {
                return
            };
            var _0x1000D = _0x10032.name;
            var _0xFFE8 = $("#cte-tab-name").val();
            if (_0xFFE8.length == 0) {
                return
            };
            var _0xFF79 = _0xFFE8 != _0x1000D;
            var _0xFF54 = 0;
            var _0xFFC3 = parseInt($("#cte-max-messages").val());
            for (var _0x10057 in _0x10463) {
                if ($("#cte-type-" + _0x10057.toLowerCase()).prop("checked")) {
                    _0xFF54 += _0x10463[_0x10057]
                }
            };
            _0x10032.name = _0xFFE8;
            _0x10032.flags = _0xFF54;
            _0x10032.maxMessages = _0xFFC3;
            if (_0xFF79) {
                _0x101A4(_0xFF9E);
                _0x119A2()
            }
        }

        function _0x103AA() {
            var _0xFF2F = {
                name: "New",
                flags: 0,
                maxMessages: 100
            };
            _0x11493._ChatTabs.push(_0xFF2F);
            _0x101A4(_0x11493._ChatTabs.length - 1);
            _0x1197D()
        }

        function _0x103CF() {
            var _0xFF2F = $("#cte-tab-selector").val();
            var _0xFF54 = _0x11493._ChatTabs[_0xFF2F];
            if (!_0xFF54) {
                return
            };
            _0x11493._ChatTabs.splice(_0xFF2F, 1);
            _0x101A4();
            _0x1197D()
        }

        function _0x10419(_0xFFC3) {
            var _0xFF2F = parseInt($("#cte-tab-selector").val());
            var _0xFF9E = _0x11493._ChatTabs[_0xFF2F];
            if (!_0xFF9E) {
                return
            };
            var _0xFF54;
            if (_0xFFC3) {
                _0xFF54 = _0xFF2F - 1
            } else {
                _0xFF54 = _0xFF2F + 1
            };
            var _0xFF79 = _0x11493._ChatTabs[_0xFF54];
            if (!_0xFF79) {
                return
            };
            _0x11493._ChatTabs[_0xFF2F] = _0xFF79;
            _0x11493._ChatTabs[_0xFF54] = _0xFF9E;
            _0x101A4(_0xFF54);
            _0x119A2();
            _0x11B14(_0xFF54)
        }
        var _0x10385 = function (_0xFF2F) {
            _0x1146E(_0xFF2F, this.innerText, this.dataset.playerId, -1)
        };
        var _0x1162A = function (_0xFF2F) {
            var _0xFF9E = _0xFF2F.offsetY;
            var _0xFF79 = Math.floor(_0xFF9E / 20);
            if (_0xFF9E % 20 < 5) {
                return
            };
            var _0xFF54 = _0x11752.party[_0xFF79];
            if (_0xFF54 == null) {
                return
            };
            _0x1146E(_0xFF2F, _0xFF54.name, _0xFF54.id, _0xFF79)
        };

        function _0x1146E(_0xFF2F, _0xFF79, _0xFF54, _0xFFC3) {
            var _0xFF9E = document.getElementById("context-name");
            _0xFF9E.innerText = _0xFF79 || "An unnamed cell";
            _0x105D5.data("selected", _0xFF54);
            _0x105D5.data("party", _0xFFC3);
            $(".context-action").css("display", "none");
            if (_0xFFC3 == -1) {
                $("#menu-invite").css("display", "block");
                $("#menu-whisper").css("display", "block");
                $("#menu-block").css("display", "block");
                $("#menu-profile").css("display", "block")
            } else {
                $("#menu-whisper").css("display", "block");
                $("#menu-profile").css("display", "block");
                if (_0x11752.isPartyLeader()) {
                    $("#menu-pu_pr").css("display", "block");
                    $("#menu-promote").css("display", "block");
                    $("#menu-kick").css("display", "block")
                }
            };
            if (_0x11752.spectate) {
                $("#menu-spectate").css("display", "block")
            };
            _0x105D5.css("display", "block");
            _0x105D5.css("left", Math.min(_0x11752.mouseRawX, window.innerWidth - _0x105D5.width()));
            _0x105D5.css("top", Math.min(_0x11752.mouseRawY, window.innerHeight - _0x105D5.height()))
        }

        function _0x11596(_0xFF2F) {
            return _0xFF2F.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function _0x113B5(_0xFF54, _0xFFE8, _0x100A1, _0x100C6, _0x1007C, _0xFF2F, _0xFFC3) {
            var _0xFF79 = ((_0x100A1 - _0x11752.serverData.border.left) / _0x11752.serverData.border.width) * _0x11346.width;
            var _0xFF9E = ((_0x100C6 - _0x11752.serverData.border.top) / _0x11752.serverData.border.height) * _0x11346.height;
            _0xFF54.beginPath();
            _0xFF54.arc(_0xFF79, _0xFF9E, _0x1007C, 0, _0x11699, false);
            _0xFF54.fillStyle = _0xFF2F;
            _0xFF54.fill();
            if (_0xFFC3) {
                var _0x10057 = (_0xFF54.measureText(_0xFFE8).width / 2);
                var _0x1000D = _0xFF79 - _0x10057;
                var _0x10032 = _0xFF9E - 5;
                _0xFF54.fillText(_0xFFE8, _0x1000D, _0x10032)
			}
			var data = { px: 0, py: 0 };
			if (!document.getElementById("playerX"))
			{
				var newParagraph0 = document.createElement("p");
				var newSpan0 = document.createElement("span");
				var newParagraph1 = document.createElement("p");
				var newSpan1 = document.createElement("span");
				var newParagraph2 = document.createElement("p");
				var newSpan2 = document.createElement("span");
				var newParagraph3 = document.createElement("p");
				var newSpan3 = document.createElement("span");
				var newParagraph4 = document.createElement("p");
				var newSpan4 = document.createElement("span");
				var newParagraph5 = document.createElement("p");
				var newSpan5 = document.createElement("span");
				newParagraph0.innerHTML = "Player X:";
				newParagraph1.innerHTML = "Player Y:";
				newParagraph2.innerHTML = "Mouse X:";
				newParagraph3.innerHTML = "Mouse Y:";
				newParagraph4.innerHTML = "ServerIP:";
				newParagraph5.innerHTML = "ServerName:";
				newSpan0.appendChild(document.createTextNode("0"));
				newSpan1.appendChild(document.createTextNode("0"));
				newSpan2.appendChild(document.createTextNode("0"));
				newSpan3.appendChild(document.createTextNode("0"));
				newSpan4.appendChild(document.createTextNode("?"));
				newSpan5.appendChild(document.createTextNode("?"));
				newSpan0.id = "playerX";
				newSpan1.id = "playerY";
				newSpan2.id = "mouseX";
				newSpan3.id = "mouseY";
				newSpan4.id = "servIP";
				newSpan5.id = "srvName";
				newParagraph0.appendChild(newSpan0);
				newParagraph1.appendChild(newSpan1);
				newParagraph2.appendChild(newSpan2);
				newParagraph3.appendChild(newSpan3);
				newParagraph4.appendChild(newSpan4);
				newParagraph5.appendChild(newSpan5);
				var insertafter = document.getElementById("score-panel");
				insertafter.appendChild(newParagraph0);
				insertafter.appendChild(newParagraph1);
				insertafter.appendChild(newParagraph2);
				insertafter.appendChild(newParagraph3);
				insertafter.appendChild(newParagraph4);
				insertafter.appendChild(newParagraph5);
			}
			$("#playerX").text(_0x11752.centerX);
			$("#playerY").text(_0x11752.centerY);
			$("#mouseX").text(_0x11752.mouseRawX);
			$("#mouseY").text(_0x11752.mouseRawY);
			$("#servIP").text(_0x11752.currentServer);
			$("#srvName").text(_0x11752.currentServerName);
			data.px = _0x11752.centerX;
			data.py = _0x11752.centerY;
			var playerState;
			var playerSelf;
			playerSelf = _0x11752.playerRegistry.getPlayerById(_0x11752.playerId);
			if (playerSelf.id == 0)
				playerState = "dead";
			else
				playerState = "alive";
			postMessage("XY", data);
			postMessage("servInfo", _0x11B83);
			postMessage("state", playerState);
			postMessage("play", false);
			// console.log('sending data:');
			// console.log(data);
			// var message = { type: "XY", data: data}
			// coms_channel.postMessage(message);
			// localStorage.setItem('server-ip')
			// console.log(_0x11752.x);
			// console.log(_0x11752.y);
			// console.log('score-panel:');
			// console.log(document.getElementById("score-panel"));
			// func();
        }

		function postMessage(typE, datA) {
			var message = { type: typE, data: datA}
			coms_channel.postMessage(message);
		}

        function _0x104AD(_0xFF54) {
            var _0x1007C = _0x112FC.pivot.x - (_0x11708.stage.position.x / _0x11752.scale) + ((_0x11752.mouseRawX * _0x114B8.resolution) / _0x11752.scale);
            var _0x100A1 = _0x112FC.pivot.y - (_0x11708.stage.position.y / _0x11752.scale) + ((_0x11752.mouseRawY * _0x114B8.resolution) / _0x11752.scale);
            var _0x10032 = null;
            var _0xFFC3;
            for (var _0xFF79 in _0x11752.bucket) {
                _0xFFC3 = _0x11752.bucket[_0xFF79];
                if (_0xFFC3.size < 25) {
                    continue
                };
                var _0x10057 = _0xFFC3.y - _0xFFC3.size;
                var _0xFF2F = _0xFFC3.y + _0xFFC3.size;
                var _0xFF9E = _0xFFC3.x - _0xFFC3.size;
                var _0x1000D = _0xFFC3.x + _0xFFC3.size;
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
            if (_0x10032 != null && _0x10032.playerId != 0 && (!_0xFF54 || _0xFF54.target.id == "canvas")) {
                var _0xFFE8 = _0x11752.playerRegistry.getPlayer(_0x10032.playerId);
                if (_0xFFE8 != null) {
                    _0x1146E(_0xFF54, _0xFFE8.name, _0x10032.playerId, -1)
                }
            }
        }

        function _0x11D64(_0xFF2F) {
            if (_0xFF2F.css("display") == "none") {
                _0xFF2F.css("display", "block");
                _0xFF2F.animate({
                    opacity: 1
                }, 500)
            }
        }

        function _0x10D59(_0xFF2F) {
            if (_0xFF2F.css("display") == "block" && _0xFF2F.css("opacity") == 1) {
                _0xFF2F.animate({
                    opacity: 0
                }, 500, function () {
                    _0xFF2F.css("display", "none")
                })
            }
        }

        function _0x12048(_0xFF2F) {
            if (_0xFF2F.css("display") == "block" && _0xFF2F.css("opacity") == 1) {
                _0x10D59(_0xFF2F)
            } else {
                if (_0xFF2F.css("display") == "none") {
                    _0x11D64(_0xFF2F)
                }
            }
        }

        function _0x10D7E() {
            $(".popup-panel").each(function () {
                _0x10D59($(this))
            })
        }

        function _0x10EF0(_0xFF2F) {
            return _0xFF2F.css("display") === "none"
        }

        function _0x11D3F() {
            _0x10DED.show();
            if (_0x11752.party.length == 0 || _0x11493.cHidePartyPanel) {
                _0x10825.partyPanel.css("display", "none")
            };
            if (_0x11493.cHideChat) {
                $("#chat-panel").css("display", "none")
            };
            if (_0x11493.cHideMinimap) {
                $("#minimap-panel").css("display", "none")
            }
        }

        function _0x10D34() {
            _0x10DED.hide()
        }

        function _0x11D1A() {
            $("#guest").hide();
            $("#account-loader").show()
        }

        function _0x10D0F() {
            $("#authed").hide();
            $("#account-loader").hide();
            $("#no_cookie_consent").hide();
            $("#guest").show()
        }

        function _0x104D2(_0xFF2F) {
            var _0xFF54 = _0xFF2F.attr("id");
            _0x11493[_0xFF54] = _0xFF2F.prop("checked");
            _0x11A36(_0xFF54)
        }

        function _0x1051C(_0xFF2F) {
            var _0xFF54 = _0xFF2F.attr("id");
            _0x11493[_0xFF54] = _0xFF2F.val();
            _0x11A36(_0xFF54, _0xFF2F.val())
        }

        function _0x104F7(_0xFF2F) {
            var _0xFF54 = _0xFF2F.attr("id");
            _0x11A36(_0xFF54, _0xFF2F.val())
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
            if (!_0x105FA.consented) {
                return
            };
            _0x11493.iChatWidth = $("#chat-panel").css("width");
            _0x11493.iChatHeight = $("#chat-panel").css("height");
            window.localStorage.setItem("options", JSON.stringify(_0x11493));
            window.localStorage.setItem("keybinds", JSON.stringify(_0x10F5F));
            window.localStorage.setItem("name", $("#name-box").val());
            window.localStorage.setItem("theme", JSON.stringify(_0x11FD9));
            window.localStorage.setItem("subpanel", JSON.stringify(_0x11F8F))
        }

        function _0x110F6() {
            if (!_0x105FA.consented) {
                return
            };
            var _0x1007C = window.localStorage.getItem("theme");
            if (_0x1007C) {
                _0x11243(_0x1007C)
            };
            var _0xFFC3 = window.localStorage.getItem("keybinds");
            if (_0xFFC3) {
                _0xFFC3 = JSON.parse(_0xFFC3);
                for (var _0xFF79 in _0xFFC3) {
                    if (_0xFFC3[_0xFF79] != null && Number.isInteger(_0xFFC3[_0xFF79])) {
                        _0x10F5F[_0xFF79] = _0xFFC3[_0xFF79];
                        _0x120DC($("#" + _0xFF79))
                    }
                }
            };
            var _0x1000D = window.localStorage.getItem("options");
            if (_0x1000D) {
                _0x1000D = JSON.parse(_0x1000D);
                for (var _0xFF9E in _0x11493) {
                    if ((_0xFF9E in _0x1000D) === false) {
                        _0x1000D[_0xFF9E] = _0x11493[_0xFF9E]
                    }
                }
            } else {
                _0x1000D = _0x11493
            };
            for (var _0xFF9E in _0x1000D) {
                var _0xFF54 = _0xFF9E.charAt(0);
                if (_0xFF54 == "c") {
                    if (_0x1000D[_0xFF9E] == true) {
                        var _0xFF2F = $("#" + _0xFF9E);
                        _0xFF2F.prop("checked", _0x1000D[_0xFF9E]);
                        _0x104D2(_0xFF2F)
                    }
                } else {
                    if (_0xFF54 == "s") {
                        var _0x10032 = $("#" + _0xFF9E);
                        _0x10032.val(_0x1000D[_0xFF9E]);
                        _0x1051C(_0x10032)
                    } else {
                        if (_0xFF54 == "i") {
                            _0x11493[_0xFF9E] = _0x1000D[_0xFF9E]
                        } else {
                            if (_0xFF54 == "r") {
                                _0x11493[_0xFF9E] = _0x1000D[_0xFF9E];
                                $("#" + _0xFF9E).val(_0x11493[_0xFF9E]);
                                _0x104F7($("#" + _0xFF9E))
                            } else {
                                _0x11493[_0xFF9E] = _0x1000D[_0xFF9E]
                            }
                        }
                    }
                }
            };
            $("#chat-panel").css("width", _0x11493.iChatWidth);
            $("#chat-panel").css("height", _0x11493.iChatHeight);
            if (!_0x11493.cThemeEnabled) {
                _0x11A36("cThemeEnabled")
            };
            var _0xFFE8 = window.localStorage.getItem("name");
            if (_0xFFE8 != null) {
                $("#name-box").val(_0xFFE8)
            };
            var _0x10057 = window.localStorage.getItem("subpanel");
            if (_0x10057) {
                _0x10057 = JSON.parse(_0x10057);
                for (var _0xFF9E in _0x10057) {
                    if (!_0x10057[_0xFF9E]) {
                        continue
                    };
                    if (_0x10057[_0xFF9E].length != 0) {
                        _0x11F8F[_0xFF9E] = _0x10057[_0xFF9E]
                    }
                }
            };
            _0x11F8F.lockedName = "";
            _0x1214B()
        }

        function _0x119EC() {
            for (var _0xFF54 in _0x107DB) {
                var _0xFF2F = _0xFF54.charAt(0);
                if (_0xFF2F == "r") {
                    $("#" + _0xFF54).val(_0x107DB[_0xFF54]);
                    _0x104F7($("#" + _0xFF54))
                } else {
                    if (_0xFF2F == "u") {
                        _0x11FD9[_0xFF54] = _0x107DB[_0xFF54];
                        $("#" + _0xFF54).spectrum("set", _0x11FD9[_0xFF54]);
                        _0x11A36(_0xFF54, _0x11FD9[_0xFF54])
                    } else {
                        if (_0xFF2F == "a") {
                            _0x11CAB(_0xFF54, "")
                        } else {
                            _0x11FD9[_0xFF54] = _0x107DB[_0xFF54]
                        }
                    }
                }
            };
            _0x11FD9._FoodColors = []
        }

        function _0x11243(_0xFF2F) {
            try {
                var _0xFF9E = JSON.parse(_0xFF2F);
                for (var _0xFF79 in _0xFF9E) {
                    if (_0x11FD9[_0xFF79] != null && _0xFF9E[_0xFF79].length != 0) {
                        _0x11FD9[_0xFF79] = _0xFF9E[_0xFF79];
                        var _0xFF54 = _0xFF79.charAt(0);
                        if (_0xFF54 == "u") {
                            $("#" + _0xFF79).spectrum("set", _0x11FD9[_0xFF79]);
                            _0x11A36(_0xFF79, _0x11FD9[_0xFF79])
                        } else {
                            if (_0xFF54 == "r") {
                                $("#" + _0xFF79).val(_0x11FD9[_0xFF79]);
                                _0x104F7($("#" + _0xFF79))
                            } else {
                                if (_0xFF54 == "a") {
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
            if (/\.(json)$/i ["test"](_0xFF2F.name)) {
                var _0xFF54 = new FileReader();
                _0xFF54.addEventListener("load", function () {
                    if (!_0x11493.cThemeEnabled) {
                        _0x10A06()
                    };
                    _0x119EC();
                    _0x11243(this.result)
                }, false);
                _0xFF54.readAsText(_0xFF2F)
            }
        }

        function _0x10A06() {
            $("#cThemeEnabled").prop("checked", true).trigger("change")
        }

        function _0x11571(_0xFF79) {
            var _0xFF9E = _0xFF79.split(" ");
            var _0xFF54 = "";
            var _0xFFC3 = null;
            for (var _0xFF2F = 0; _0xFF2F < _0xFF9E.length; _0xFF2F++) {
                if (_0xFF2F != 0) {
                    _0xFF54 += " "
                };
                _0xFFC3 = _0xFF9E[_0xFF2F];
                if (_0x10903[_0xFFC3] != null) {
                    if (_0xFFC3.startsWith(":") && _0xFFC3.endsWith(":")) {
                        _0xFFC3 = _0xFFC3.substring(1, _0xFFC3.length - 1)
                    };
                    _0xFF54 += "<img src=\"https://gamedata.gota.io/emotes/" + _0xFFC3 + ".png\" height=\"17\" width=\"17\" alt=\"" + _0xFFC3 + "\">"
                } else {
                    if (gifEmoteList[_0xFFC3] != null) {
                        if (_0xFFC3.startsWith(":") && _0xFFC3.endsWith(":")) {
                            _0xFFC3 = _0xFFC3.substring(1, _0xFFC3.length - 1)
                        };
                        _0xFF54 += "<img src=\"https://gamedata.gota.io/emotes/gifs/" + _0xFFC3 + ".gif\" height=\"17\" width=\"17\" alt=\"" + _0xFFC3 + "\">"
                    } else {
                        _0xFF54 += _0xFFC3
                    }
                }
            };
            return _0xFF54
        }

        function _0x115E0(_0xFF2F) {
            this.particles = [];
            this.MAX_PARTICLES = _0xFF2F;
            this.init = function () {
                if (!_0x10972.particles) {
                    return
                };
                for (var _0xFF2F = 0; _0xFF2F < this.MAX_PARTICLES; _0xFF2F++) {
                    var _0xFF54 = new _0x11605("images/events/" + _0x10972.key + "/particles.png", Math.floor(Math.random() * 7));
                    this.particles.push(_0xFF54)
                }
            };
            this.onTick = function (_0xFF2F, _0xFF54, _0xFFC3, _0xFFE8) {
                _0xFF54 = _0xFF54 / 1000;
                for (var _0xFF79 in this.particles) {
                    var _0xFF9E = this.particles[_0xFF79];
                    _0xFF9E.draw(_0xFF2F, _0xFF54)
                }
            };
            this.init(_0xFF2F)
        }

        function _0x11605(_0xFF54, _0xFF2F) {
            this.image = null;
            this.frame = _0xFF2F;
            this.x = 0;
            this.y = 0;
            this.speed = 0;
            this.angle = 0;
            this.init = function (_0xFF2F) {
                this.image = new Image();
                this.image.src = _0xFF2F;
                this.x = Math.random();
                this.y = Math.random() - 1.25;
                this.speed = ((Math.random() * 0.00075) + 0.0005) * 60;
                this.angle = 0
            };
            this.draw = function (_0xFF2F, _0xFF54) {
                if (this.y > 1.0) {
                    this.y = (Math.random() * -0.25) + -0.1
                } else {
                    if (this.y < -1.25) {
                        this.y = -1.25
                    }
                };
                if (this.x > 1.0) {
                    this.x = 0
                } else {
                    if (this.x < 0) {
                        this.x = 1.0
                    }
                };
                this.angle += (Math.random() * 0.1) - 0.05;
                this.angle = Math.min(Math.max(-0.2, this.angle), 0.2);
                var _0xFF79 = _0xFF54 * this.speed;
                this.x += _0xFF79 * Math.sin(this.angle);
                this.y += _0xFF79 * Math.cos(this.angle);
                var _0xFFC3 = _0x101EE.width * this.x;
                var _0xFF9E = _0x101EE.height * this.y;
                _0xFF2F.drawImage(this.image, 25 * this.frame, 0, 25, 60, _0xFFC3, _0xFF9E, 25, 60)
            };
            this.init(_0xFF54)
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
            0: new _0x117E6("Random", "random", _0x1189F.NONE),
            1: new _0x117E6("Maximum Cells Upgrade", "extracells", _0x1189F.MODIFIER),
            2: new _0x117E6("Extra Consumable Slot", "extraconsumable", _0x1189F.MODIFIER),
            3: new _0x117E6("Merge", "merge", _0x1189F.PASSIVE),
            4: new _0x117E6("Grow", "grow", _0x1189F.PASSIVE),
            5: new _0x117E6("Speed", "speed", _0x1189F.PASSIVE),
            6: new _0x117E6("Shield", "shield", _0x1189F.PASSIVE),
            7: new _0x117E6("Virus", "spike", _0x1189F.CONSUMABLE),
            8: new _0x117E6("Disrupt", "disrupt", _0x1189F.CONSUMABLE),
            9: new _0x117E6("Teleport", "teleport", _0x1189F.CONSUMABLE),
            10: new _0x117E6("Disrupt", "_disrupt", _0x1189F.DEBUFF),
            11: new _0x117E6("Silver", "phoenix", _0x1189F.MODIFIER),
            12: new _0x117E6("Consumable Shield", "_shield", _0x1189F.CONSUMABLE),
            13: new _0x117E6("Magnet", "magnet", _0x1189F.PASSIVE),
            14: new _0x117E6("Decay", "decay", _0x1189F.CONSUMABLE),
            15: new _0x117E6("Decay", "_decay", _0x1189F.DEBUFF)
        };

        function _0x117E6(_0xFF54, _0xFF2F, _0xFF79) {
            this.name = _0xFF54;
            this.img = _0xFF2F;
            this.type = _0xFF79;
            this.image = null;
            this.texture = null
        }

        function _0x1111B() {
            for (var _0xFF54 in _0x1187A) {
                var _0xFF2F = _0x1187A[_0xFF54];
                var _0xFF9E = "images/powerups/" + _0xFF2F.img + ".png";
                var _0xFF79 = new Image();
                _0xFF79.addEventListener("load", function (_0xFF2F, _0xFF54) {
                    _0xFF2F.texture = _0x116E3.Texture.from(_0xFF54)
                } ["bind"](null, _0xFF2F, _0xFF79));
                _0xFF79.src = _0xFF9E;
                _0xFF2F.image = _0xFF79
            };
            _0x11830 = _0x116E3.Texture.from("images/shield.png");
            _0x1180B = _0x116E3.Texture.from("images/debuff.png")
        }

        function _0x1017F() {
            this.passiveBuffs = {};
            this.passiveSortedBuffs = [];
            this.consumableBuffs = [];
            this.cache = null;
            this.nextCacheUpdate = 0;
            this.texture = null;
            this.bonusMaxCells = 0;
            this.onAddBuff = function (_0xFF79, _0xFF9E, _0xFF54) {
                var _0xFF2F = null;
                var _0xFFC3 = _0x1187A[_0xFF79].type;
                if (_0xFFC3 != _0x1189F.CONSUMABLE) {
                    _0xFF2F = this.passiveBuffs[_0xFF79];
                    if (_0xFF2F) {
                        _0xFF2F.update(_0xFF9E, _0xFF54)
                    } else {
                        _0xFF2F = new _0x1015A(_0xFF79, _0xFF9E, _0xFF54);
                        this.passiveBuffs[_0xFF79] = _0xFF2F;
                        this.sortPassiveBuffs()
                    };
                    this.onPassiveBuffsUpdate();
                    this.markCacheForUpdate()
                } else {
                    _0xFF2F = new _0x1015A(_0xFF79, _0xFF9E, _0xFF54);
                    this.consumableBuffs.push(_0xFF2F);
                    this.markCacheForUpdate()
                };
                if (_0xFF2F) {
                    _0x11752.selfMsg("Recieved buff: " + _0xFF2F.powerup.name)
                }
            };
            this.onRemoveBuff = function (_0xFF79) {
                var _0xFF2F = null;
                var _0xFF9E = _0x1187A[_0xFF79].type;
                if (_0xFF9E != _0x1189F.CONSUMABLE) {
                    _0xFF2F = this.passiveBuffs[_0xFF79];
                    if (_0xFF2F) {
                        delete this.passiveBuffs[_0xFF79];
                        this.sortPassiveBuffs();
                        this.markCacheForUpdate();
                        this.onPassiveBuffsUpdate()
                    }
                } else {
                    for (var _0xFF54 = 0; _0xFF54 < this.consumableBuffs.length; _0xFF54++) {
                        _0xFF2F = this.consumableBuffs[_0xFF54];
                        if (_0xFF2F.id == _0xFF79) {
                            this.consumableBuffs.splice(_0xFF54, 1);
                            this.markCacheForUpdate();
                            break
                        }
                    }
                };
                if (_0xFF2F) {
                    _0x11752.selfMsg("Lost buff: " + _0xFF2F.powerup.name)
                }
            };
            this.clearBuffs = function (_0xFF9E) {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    return
                };
                var _0xFF79 = _0xFF9E ? _0xFF9E : false;
                for (var _0xFF54 in this.passiveBuffs) {
                    var _0xFF2F = this.passiveBuffs[_0xFF54];
                    if (_0xFF79 && _0xFF2F.powerup.type == _0x1189F.MODIFIER) {} else {
                        delete this.passiveBuffs[_0xFF54]
                    }
                };
                this.sortPassiveBuffs();
                this.onPassiveBuffsUpdate();
                this.consumableBuffs = [];
                this.markCacheForUpdate()
            };
            this.sortPassiveBuffs = function () {
                this.passiveSortedBuffs = [];
                if (this.passiveBuffs.length == 0) {
                    return
                };
                for (var _0xFF54 in this.passiveBuffs) {
                    var _0xFF2F = this.passiveBuffs[_0xFF54];
                    if (_0xFF2F.powerup.type == _0x1189F.MODIFIER) {
                        this.passiveSortedBuffs.splice(0, 0, _0xFF54)
                    } else {
                        this.passiveSortedBuffs.push(_0xFF54)
                    }
                }
            };
            this.onPassiveBuffsUpdate = function () {
                this.bonusMaxCells = 0;
                if (this.passiveBuffs[1] != null) {
                    var _0xFF2F = this.passiveBuffs[1];
                    this.bonusMaxCells = _0xFF2F.stack * 16
                }
            };
            this.update = function () {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    _0x11855.visible = false;
                    return
                };
                if (Date.now() >= this.nextCacheUpdate) {
                    this.updateCache();
                    this.nextCacheUpdate = Date.now() + 1000
                };
                if (!this.texture) {
                    this.texture = _0x116E3.Texture.from(this.cache.canvas);
                    _0x11855.texture = this.texture;
                    _0x11855.anchor.set(0)
                };
                _0x11855.position.x = _0x11A80.width() + 20 - _0x11708.stage.position.x;
                _0x11855.position.y = 15 - _0x11708.stage.position.y;
                _0x11855.visible = true
            };
            this.updateCache = function () {
                var _0xFF54 = (this.cache == null || this.cache.canvas == null) ? document.createElement("canvas") : this.cache.canvas;
                var _0xFF9E = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
                _0xFF54.width = 55 * _0xFF9E;
                _0xFF54.height = 105;
                this.cache = _0xFF54.getContext("2d");
                this.cache.fillStyle = "#222";
                this.cache.font = "bold 16pt Calibri";
                var _0xFFC3 = 0,
                    _0xFFE8 = 0;
                for (var _0xFF79 = 0; _0xFF79 < this.passiveSortedBuffs.length; _0xFF79++) {
                    var _0xFF2F = this.passiveBuffs[this.passiveSortedBuffs[_0xFF79]];
                    _0xFF2F.draw(this.cache, _0xFFC3, _0xFFE8);
                    _0xFFC3 += 55
                };
                _0xFFC3 = 0;
                _0xFFE8 = 55;
                for (var _0xFF79 = 0; _0xFF79 < this.consumableBuffs.length; _0xFF79++) {
                    var _0xFF2F = this.consumableBuffs[_0xFF79];
                    _0xFF2F.draw(this.cache, _0xFFC3, _0xFFE8);
                    _0xFFC3 += 55
                };
                if (this.texture) {
                    this.texture.update()
                };
                this.nextCacheUpdate = Date.now() + 1000
            };
            this.markCacheForUpdate = function () {
                this.nextCacheUpdate = 0
            }
        }
        const _0x10135 = Math.PI * 1.5;

        function _0x1015A(_0xFF54, _0xFF79, _0xFF2F) {
            this.id = _0xFF54;
            this.powerup = _0x1187A[_0xFF54];
            this.startTime = Date.now();
            this.expireTime = _0xFF2F;
            this.stack = _0xFF79;
            this.update = function (_0xFF54, _0xFF2F) {
                this.startTime = Date.now();
                this.expireTime = _0xFF2F;
                this.stack = _0xFF54
            };
            this.getCooldown = function () {
                if (Date.now() >= this.expireTime) {
                    return 2.0 * Math.PI
                } else {
                    var _0xFF54 = this.expireTime - Date.now();
                    var _0xFF79 = this.expireTime - this.startTime;
                    var _0xFF2F = Math.min(_0xFF54 / _0xFF79, 1.0) * 2.0;
                    return _0xFF2F * Math.PI
                }
            };
            this.draw = function (_0xFF2F, _0xFF54, _0xFF79) {
                _0xFF2F.drawImage(this.powerup.image, _0xFF54, _0xFF79, 50, 50);
                if (this.stack > 1) {
                    _0xFF2F.fillStyle = "#000";
                    _0xFF2F.fillText(this.stack, _0xFF54 + 35, _0xFF79 + 17)
                };
                if (this.expireTime > 0) {
                    _0xFF2F.beginPath();
                    _0xFF2F.moveTo(_0xFF54 + 25, _0xFF79 + 25);
                    _0xFF2F.arc(_0xFF54 + 25, _0xFF79 + 25, 25, _0x10135, _0x10135 - this.getCooldown(), false);
                    _0xFF2F.closePath();
                    _0xFF2F.globalAlpha = 0.75;
                    _0xFF2F.fillStyle = "#222";
                    _0xFF2F.fill();
                    _0xFF2F.globalAlpha = 1.0
                }
            }
        }
        const _0x113FF = ["hearts"];
        var _0x113DA = [];

        function _0x10C31() {
            this.delay = 0;
            this.frames = [];
            this.isGif = true;
            this.push = function (_0xFF2F) {
                this.frames.push(_0xFF2F)
            };
            this.getFrame = function (_0xFF2F) {
                return this.frames[_0xFF2F]
            };
            this.getLength = function () {
                return this.frames.length
            };
            this.getTexture = function () {
                return this.getFrame(Math.floor(_0x10FCE / this.delay) % (this.getLength()))
            };
            this.loadFromFrameData = function (_0x1000D) {
                if (_0x1000D.length === 0) {
                    return
                };
                const _0x10032 = document.createElement("canvas");
                const _0x10057 = _0x10032.getContext("2d");
                const _0xFF79 = document.createElement("canvas");
                const _0xFF9E = _0xFF79.getContext("2d");
                const _0xFFC3 = _0x1000D[0].getImage();
                this.delay = _0x1000D[0].frameInfo.delay * 10;
                _0x10032.width = _0xFFC3.width;
                _0x10032.height = _0xFFC3.height;
                _0xFF79.width = _0xFFC3.width;
                _0xFF79.height = _0xFFC3.height;
                for (const _0xFFE8 of _0x1000D) {
                    _0x10057.clearRect(0, 0, _0x10032.width, _0x10032.height);
                    _0x10057.drawImage(_0xFF79, 0, 0);
                    const _0xFF2F = _0xFFE8.getImage();
                    const _0xFF54 = _0xFF2F.getContext("2d");
                    _0xFF9E.drawImage(_0xFF2F, 0, 0);
                    _0xFF54.clearRect(0, 0, _0xFF2F.width, _0xFF2F.height);
                    _0xFF54.drawImage(_0xFF79, 0, 0);
                    const {
                        frameInfo
                    } = _0xFFE8;
                    const {
                        disposal
                    } = frameInfo;
                    if (disposal === 2) {
                        _0xFF9E.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height)
                    } else {
                        if (disposal === 3) {
                            _0xFF9E.clearRect(0, 0, _0xFF79.width, _0xFF79.height);
                            _0xFF9E.drawImage(_0x10032, 0, 0)
                        }
                    };
                    this.push(_0x116E3.Texture.from(_0xFF2F))
                }
            }
        }

        function _0x10B9D(_0xFF2F) {
            return _0x118C4[_0xFF2F % _0x118C4.length]
        }

        function _0x10B78(_0xFF2F) {
            return _0x118E9[_0xFF2F % _0x118E9.length]
        }

        function _0x10BC2(_0xFF2F) {
            return _0x106D8[_0xFF2F % _0x106D8.length]
        }

        function _0x11D89(_0xFF2F) {
            for (var _0xFF54 = _0xFF2F.length - 1; _0xFF54 > 0; _0xFF54--) {
                var _0xFF79 = Math.floor(Math.random() * (_0xFF54 + 1));
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
            var _0x1058B = _0x10566.toRgb();
            _0x10DA3[_0x10E12] = (_0x1058B.r << 16) + (_0x1058B.g << 8) + _0x1058B.b;
            _0x10DC8[_0x10E12] = _0x10566.toHexString()
        };
        const _0x118C4 = _0x11D89(_0x10DA3.slice(0));
        const _0x118E9 = _0x11D89(_0x10DC8.slice(0));
        delete _0x10DA3;
        delete _0x10DC8;
        if (_0x10972.enabled && _0x10972.foodColors) {
            _0x10B9D = function (_0xFF2F) {
                return _0x10972.foodColors[_0xFF2F % _0x10972.foodColors.length]
            }
        };
        const _0x10360 = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
        const _0x12023 = {};

        function _0x100C6(_0xFF2F) {
            if (_0xFF2F === 0 || _0xFF2F === _0x11752.playerId) {
                return "You cannot block that player."
            };
            if (_0x100A1.includes(_0xFF2F)) {
                delete _0x100A1[_0xFF2F];
                return "Unblocked player with ID: " + _0xFF2F
            };
            _0x100A1.push(_0xFF2F);
            return "Blocked player with ID: " + _0xFF2F
        }
        const _0x105B0 = {
            whisper: {
                description: "Whisper a player by ID",
                triggers: ["whisper", "t", "w"],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (isNaN(_0xFF54)) {
                        _0x11752.selfMsg("Invalid player id.");
                        return
                    };
                    var _0xFF79 = _0xFF2F.slice(1).join(" ");
                    if (_0xFF79.length != 0) {
                        _0x11752.sendPacket(new _0x11502.sendWhisper(_0xFF54, _0xFF79))
                    };
                    _0x11C86("/t " + _0xFF54 + " ")
                }
            },
            reply_whisper: {
                description: "Reply to previous whisper",
                triggers: ["reply", "r"],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F.join(" ");
                    if (_0xFF54.length != 0) {
                        _0x11752.sendPacket(new _0x11502.sendWhisper(0, _0xFF54))
                    };
                    _0x11C86("/r ")
                }
            },
            party_chat: {
                description: "Send a message to other party members",
                triggers: ["party", "p"],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F.join(" ");
                    if (_0xFF54.length != 0) {
                        _0x11752.sendPacket(new _0x11502.sendChat(_0xFF54, 1))
                    };
                    _0x11C86("/p ")
                }
            },
            invite: {
                description: "Invite a player to the party",
                triggers: ["invite", "i"],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752.sendPacket(new _0x11502.sendPartyAction(0, _0xFF54))
                    } else {
                        _0x11752.selfMsg("Invalid ID.")
                    }
                }
            },
            leave: {
                description: "Leave your current party",
                triggers: ["leave", "l"],
                action: function (_0xFF2F) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(3, 0))
                }
            },
            promote: {
                description: "Promote a party member to leader",
                triggers: ["promote"],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752.sendPacket(new _0x11502.sendPartyAction(2, _0xFF54))
                    } else {
                        _0x11752.selfMsg("Invalid ID.")
                    }
                }
            },
            kick: {
                description: "Kick a player from the party",
                triggers: ["kick"],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752.sendPacket(new _0x11502.sendPartyAction(1, _0xFF54))
                    } else {
                        _0x11752.selfMsg("Invalid ID.")
                    }
                }
            },
            clear: {
                description: "Clear the chat",
                triggers: ["clear"],
                action: function (_0xFF2F) {
                    var _0xFF54 = document.getElementById("chat-body");
                    while (_0xFF54.firstChild != null) {
                        _0xFF54.removeChild(_0xFF54.firstChild)
                    }
                }
            },
            info: {
                description: "Get your current ID",
                triggers: ["info"],
                action: function (_0xFF2F) {
                    if (_0x11752.playerId > 0) {
                        _0x11752.selfMsg("Your id is " + _0x11752.playerId)
                    } else {
                        _0x11752.selfMsg("You need to be connected to a server to use this command.")
                    }
                }
            },
            scrimmenu: {
                description: "Show the scrimmage menu",
                triggers: ["scrimmenu"],
                action: function (_0xFF2F) {
                    _0x11ACA.css("display", _0x11ACA.css("display") == "none" ? "block" : "none")
                }
            },
            join: {
                description: "Join a party with a code",
                triggers: ["join", "j"],
                action: function (_0xFF2F) {
                    var _0xFF54 = _0xFF2F[0];
                    if (_0xFF54 != null && _0xFF54.length != 0) {
                        _0x11752.sendPacket(new _0x11502.sendPartyJoin(_0xFF54))
                    }
                }
            },
            private: {
                description: "Set the party to private",
                triggers: ["private"],
                action: function (_0xFF2F) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(4, 1))
                }
            },
            public: {
                description: "Allow players to join the party without an invite",
                triggers: ["public"],
                action: function (_0xFF2F) {
                    _0x11752.sendPacket(new _0x11502.sendPartyAction(4, 0))
                }
            },
            reset_chat: {
                description: "Reset chat size",
                triggers: ["resetchat"],
                action: function (_0xFF2F) {
                    $("#chat-panel").css("width", "360px");
                    $("#chat-panel").css("height", "250px")
                }
            },
            reset_chat_tabs: {
                description: "Reset chat tab settings",
                triggers: ["resetchattabs"],
                action: function (_0xFF2F) {
                    _0x11493._ChatTabs = JSON.parse(JSON.stringify(_0x10791));
                    _0x101A4();
                    _0x1197D()
                }
            },
            spectate: {
                description: "Spectate a player",
                triggers: ["spectate", "s"],
                action: function (_0xFF2F) {
                    var _0xFF54 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF54)) {
                        _0x11752.sendPacket(new _0x11502.sendSpectate(_0xFF54))
                    } else {
                        _0x11752.selfMsg("Invalid ID.")
                    }
                }
            },
            disconnect: {
                description: "Disconnect from the server",
                triggers: ["disconnect"],
                action: function (_0xFF2F) {
                    _0x11752.disconnect()
                }
            },
            account: {
                description: "Get Account UID",
                triggers: ["account"],
                action: function (_0xFF2F) {
                    if (_0x12195 === null) {
                        _0x11752.selfMsg("You are not logged in.");
                        return
                    };
                    _0x11752.selfMsg("UID: " + _0x12195.uid)
                }
            },
            block: {
                description: "Block or unblock a player by ID",
                triggers: ["block", "b"],
                action: function (_0xFF2F) {
                    var _0xFF79 = parseInt(_0xFF2F[0]);
                    if (!isNaN(_0xFF79)) {
                        var _0xFF54 = _0x100C6(_0xFF79);
                        _0x11752.selfMsg(_0xFF54)
                    }
                }
            },
            reloadskins: {
                description: "Reloads the skin list",
                triggers: ["reloadskins"],
                action: function (_0xFF2F) {
                    if (_0x11E1D == _0x11E67.LOADING) {
                        return
                    };
                    _0x11E1D = _0x11E67.NOT_LOADED;
                    _0x111AF()
                }
            }
        };
        const _0x1190E = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "sodaWut", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
        const _0x10C0C = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
        const _0x10CEA = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        const _0x10F84 = ["", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
        var _0x10928 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "flower2", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon"];
        var _0x10997 = null;
        const _0x11CF5 = -32768;

        function _0x101C9(_0xFF0A) {
            return _0x10CEA[(_0xFF0A >> 4) & 0x0f] + _0x10CEA[_0xFF0A & 0x0f]
        }

        function _0x10A75(_0xFF9E) {
            if (_0xFF9E <= 0) {
                return "0:00"
            };
            var _0xFF2F = Math.floor(_0xFF9E / 3600);
            var _0xFF54 = Math.floor((_0xFF9E - (_0xFF2F * 3600)) / 60);
            var _0xFF79 = _0xFF9E - (_0xFF2F * 3600) - (_0xFF54 * 60);
            if (_0xFF54 < 10 && _0xFF2F > 0) {
                _0xFF54 = "0" + _0xFF54
            };
            if (_0xFF79 < 10) {
                _0xFF79 = "0" + _0xFF79
            };
            return (_0xFF2F > 0 ? _0xFF2F + ":" : "") + _0xFF54 + ":" + _0xFF79
        }

        function _0x10A50(_0xFF54) {
            var _0xFF2F = _0xFF54.toString().split(".");
            _0xFF2F[0] = _0xFF2F[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return _0xFF2F.join(".")
        }

        function _0x10E81(_0xFF79) {
            if (_0xFF79.indexOf("#") === 0) {
                _0xFF79 = _0xFF79.slice(1)
            };
            if (_0xFF79.length === 3) {
                _0xFF79 = _0xFF79[0] + _0xFF79[0] + _0xFF79[1] + _0xFF79[1] + _0xFF79[2] + _0xFF79[2]
            };
            if (_0xFF79.length !== 6) {
                throw new Error("Invalid HEX color.")
            };
            var _0xFF9E = parseInt(_0xFF79.slice(0, 2), 16),
                _0xFF54 = parseInt(_0xFF79.slice(2, 4), 16),
                _0xFF2F = parseInt(_0xFF79.slice(4, 6), 16);
            return (_0xFF9E * 0.299 + _0xFF54 * 0.587 + _0xFF2F * 0.114) > 186 ? "#000000" : "#FFFFFF"
        }

        function _0x10B53(_0xFF2F) {
            if (_0xFF2F.dataTransfer.items) {
                for (var _0xFF79 = 0; _0xFF79 < _0xFF2F.dataTransfer.items.length; _0xFF79++) {
                    if (_0xFF2F.dataTransfer.items[_0xFF79].kind === "file") {
                        var _0xFF54 = _0xFF2F.dataTransfer.items[_0xFF79].getAsFile();
                        return _0xFF54
                    }
                }
            } else {
                for (var _0xFF79 = 0; _0xFF79 < _0xFF2F.dataTransfer.files.length; _0xFF79++) {
                    return _0xFF2F.dataTransfer.files[_0xFF79]
                }
            }
        }

        function _0x1084A(_0xFF9E, _0xFF54, _0xFFC3) {
            var _0xFF79 = new Blob([_0xFF54], {
                type: _0xFFC3
            });
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(_0xFF79, _0xFF9E)
            } else {
                var _0xFF2F = document.createElement("a"),
                    _0xFFE8 = URL.createObjectURL(_0xFF79);
                _0xFF2F.href = _0xFFE8;
                _0xFF2F.download = _0xFF9E;
                document.body.appendChild(_0xFF2F);
                _0xFF2F.click();
                setTimeout(function () {
                    document.body.removeChild(_0xFF2F);
                    window.URL.revokeObjectURL(_0xFFE8)
                }, 0)
            }
        }

        function _0x10ECB(_0xFF2F) {
            return !!_0xFF2F.match(_0x10ECB.regex)
        }
        _0x10ECB.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
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
            0: "Spectator",
            1: "Blue",
            2: "Red",
            3: "Green",
            4: "Yellow",
            5: "Purple",
            6: "Orange",
            7: "Pink",
            8: "Brown"
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
        var _0x106FD = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];

        function _0x12101() {
            if (!_0x105FA.consented) {
                return
            };
            var _0xFF54 = localStorage.getItem("version");
            var _0xFF2F = version.split(".");
            if (_0xFF54 === null) {
                localStorage.setItem("version", version);
                return
            };
            _0xFF54 = _0xFF54.split(".");
            if (_0xFF2F[0] != _0xFF54[0] || _0xFF2F[1] != _0xFF54[1]) {
                localStorage.setItem("version", version);
                _0x10D59(_0x11321);
                _0x11D64($("#popup-changelog"))
            }
        }
        $(window).focus(function () {
            _0x10EA6 = true
        });
        $(window).blur(function () {
            _0x10EA6 = false
        });

        function _0x11BF2() {
            if (_0x10EA6) {
                return
            };
            if (!("Notification" in window)) {
                return
            };
            if (Notification.permission === "granted") {
                var _0xFF2F = new Notification("Your match has started.", {
                    icon: "https://gota.io/assets/images/favicon.png"
                })
            }
        }
        var _0x105FA = new _0x1061F();

        function _0x1061F() {
            this.consented = false;
            this.policyID = "CP_0918_01";
            this.policyLink = "https://gota.io/policies/privacy?v=" + this.policyID + "#cookies";
            this.consentOption = $("#cc_acceptCookies");
            this.consentCookie = {
                name: "cookieConsent",
                value: "yes+" + this.policyID,
                exdays: 365 * 2,
                path: "/web"
            };
            this.cookieBanner = {
                banner: $("#cookie-banner"),
                decline: $("#declineCookies"),
                accept: $("#acceptCookies"),
                handlersBound: false
            };
            this.init = function () {
                this.backwardsCompatable();
                this.consentOption.on("change", function (_0xFF2F) {
                    _0x105FA.consentHandler($(this).prop("checked"))
                });
                var _0xFF2F = this.getConsentCookie();
                if (_0xFF2F === this.consentCookie.value) {
                    this.consentHandler(true);
                    this.showCookieBanner(false)
                } else {
                    this.consentHandler(false);
                    this.showCookieBanner(true)
                }
            };
            this.consentHandler = function (_0xFF2F) {
                this.consented = _0xFF2F;
                aiptag.consented = _0xFF2F;
                this.consentOption.prop("checked", _0xFF2F);
                if (!_0xFF2F) {
                    this.deleteConsentCookie();
                    if (firebase.auth().currentUser !== null) {
                        firebase.auth().signOut().then(function () {}).catch((_0xFF0A) => {})
                    };
                    $("#authed").hide();
                    $("#account-loader").hide();
                    $("#guest").hide();
                    $("#no_cookie_consent").show();
                    this.showCookieBanner(true)
                } else {
                    this.createConsentCookie();
                    this.showCookieBanner(false);
                    _0x110F6();
                    _0x1121E();
                    $("#no_cookie_consent").hide();
                    if ($("#account-loader").css("display") !== "none") {
                        $("#guest").hide()
                    } else {
                        $("#guest").show()
                    }
                }
            };
            this.showCookieBanner = function (_0xFF2F) {
                if (_0xFF2F) {
                    if (!this.cookieBanner.handlersBound) {
                        this.bindBannerHandlers();
                        this.cookieBanner.handlersBound = true
                    };
                    this.cookieBanner.banner.slideDown()
                } else {
                    this.cookieBanner.banner.slideUp()
                }
            };
            this.bindBannerHandlers = function () {
                this.cookieBanner.decline.on("click", function (_0xFF2F) {
                    _0x105FA.consentHandler(false);
                    _0x105FA.showCookieBanner(false)
                });
                this.cookieBanner.accept.on("click", function (_0xFF2F) {
                    _0x105FA.consentHandler(true);
                    _0x105FA.showCookieBanner(false)
                });
                $("#cookie-banner .description").append(" <a href=\"" + this.policyLink + "\" target=\"_blank\">Our Cookie Policy!</a>")
            };
            this.createConsentCookie = function () {
                var _0xFF2F = new Date();
                _0xFF2F.setTime(_0xFF2F.getTime() + (this.consentCookie.exdays * 24 * 60 * 60 * 1000));
                var _0xFF54 = "expires=" + _0xFF2F.toUTCString();
                document.cookie = this.consentCookie.name + "=" + this.consentCookie.value + ";" + _0xFF54 + ";path=" + this.consentCookie.path + ";"
            };
            this.deleteConsentCookie = function () {
                document.cookie = this.consentCookie.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.consentCookie.path + ";"
            };
            this.getConsentCookie = function () {
                var _0xFFC3 = this.consentCookie.name + "=";
                var _0xFF79 = decodeURIComponent(document.cookie);
                var _0xFF54 = _0xFF79.split(";");
                for (var _0xFF9E = 0; _0xFF9E < _0xFF54.length; _0xFF9E++) {
                    var _0xFF2F = _0xFF54[_0xFF9E];
                    while (_0xFF2F.charAt(0) == " ") {
                        _0xFF2F = _0xFF2F.substring(1)
                    };
                    if (_0xFF2F.indexOf(_0xFFC3) == 0) {
                        return _0xFF2F.substring(_0xFFC3.length, _0xFF2F.length)
                    }
                };
                return false
            };
            this.backwardsCompatable = function () {
                var _0xFFC3 = "cookieconsent_status" + "=";
                var _0xFF79 = decodeURIComponent(document.cookie);
                var _0xFF54 = _0xFF79.split(";");
                var _0xFFE8 = null;
                for (var _0xFF9E = 0; _0xFF9E < _0xFF54.length; _0xFF9E++) {
                    var _0xFF2F = _0xFF54[_0xFF9E];
                    while (_0xFF2F.charAt(0) == " ") {
                        _0xFF2F = _0xFF2F.substring(1)
                    };
                    if (_0xFF2F.indexOf(_0xFFC3) == 0) {
                        _0xFFE8 = _0xFF2F.substring(_0xFFC3.length, _0xFF2F.length)
                    }
                };
                if (_0xFFE8 === "allow") {
                    this.createConsentCookie();
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                } else {
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                }
            }
        }
        var _0x11F45 = new _0x11F6A();

        function _0x11F6A() {
            this.playCounter = 0;
            this.deathCounter = 0;
            this.incrementPlay = function () {
                this.playCounter++;
                if (this.playCounter % 5 == 1) {
                    return true
                } else {
                    return false
                }
            }
        }

        function _0x10E37() {
            if (typeof aipPlayer != "undefined") {
                aiptag.cmd.player.push(function () {
                    adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: "Advertisement Loading...",
                        PREROLL_ELEM: document.getElementById("preroll"),
                        AIP_COMPLETE: function () {
                            if (!_0x11752.spectate) {
                                _0x11752.play()
                            } else {
                                _0x11752.spec()
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
    (_0xFF2F)("gota.io", 1, "");
    version = "3.3.7";;
    $(_0xFF9E)
})()
