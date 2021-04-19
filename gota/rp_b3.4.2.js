const build = 2104182;
var version, showSideMenu, hideSideMenu;
(function () {
    function _0xADA3(_0xADBD, _0xADF1, _0xADE4) {
        if (!_0xADBD) {
            return
        };
        var _0xADCA = this.location.href.split("://")[1].split("/")[0].split(":")[0];
        var _0xADA3 = _0xADBD.split(",");
        for (var _0xADD7 = 0; _0xADD7 < _0xADA3.length; _0xADD7++) {
            var _0xADB0 = _0xADA3[_0xADD7];
            if (_0xADB0 == _0xADCA) {
                return
            };
            if (!_0xADF1) {
                continue
            };
            _0xADB0 = _0xADCA.split("." + _0xADB0);
            if (_0xADB0.length == 2 && !_0xADB0[1]) {
                return
            }
        };
        throw (_0xADE4 || "error")
    }

    function _0xADB0(_0xADB0) {
        var _0xADA3 = $("#" + _0xADB0);
        if (_0xADA3.css("display") == "none") {
            _0xADBD();
            _0xADA3.show(500)
        }
    }

    function _0xADBD() {
        $("#main-right").children().each(function () {
            if ($(this).css("display") == "block") {
                $(this).hide(500)
            }
        })
    }

    function _0xADCA() {
        var _0xB58F = window.PIXI;
        const _0xB645 = _0xB58F;
        window.PIXI = null;
        var _0xB652;
        const _0xB65F = new _0xB645.Container();
        const _0xAE0B = new _0xB645.Container();
        const _0xAE4C = new _0xB645.Container();
        const _0xB4BF = new _0xB645.Container();
        const _0xB17F = new _0xB645.Container();
        const _0xAF02 = new _0xB645.Container();
        const _0xB6C7 = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
        var _0xAE3F;
        _0xB4BF.addChild(_0xAE4C);
        _0xB4BF.addChild(_0xB17F);
        _0xB4BF.addChild(_0xAF02);
        _0xB65F.addChild(_0xAE0B);
        _0xB65F.addChild(_0xB4BF);
        _0xB65F.addChild(_0xB6C7);
        var _0xAE9A, _0xB4D9, _0xB4F3, _0xB66C, _0xB59C, _0xB3AE, _0xB8C2, _0xB8DC, _0xB8CF, _0xB638, _0xB903, _0xB910, _0xB91D, _0xB7E5, _0xB7D8, _0xB4CC, _0xB61E, _0xB2F8, _0xB3C8, _0xB7A4, _0xAFF9, _0xAF0F, _0xBA14, _0xB124, _0xADFE, _0xB5DD, _0xB797, _0xB088, _0xB07B, _0xB78A, _0xB3BB, _0xB4B2 = false,
            _0xB1CD = 0,
            _0xB1C0 = 0,
            _0xBA07 = null,
            _0xB9FA = null,
            _0xB290 = false,
            _0xB99F = {
                elements: [],
                callbacks: [],
                pendingFriends: [],
                timestamps: []
            },
            _0xAE25 = [],
            _0xB1DA = false,
            _0xAEB4 = null,
            _0xB346 = true,
            _0xB0C9;
        const _0xB62B = Math.PI * 2;
        const _0xAEE8 = 16,
            _0xAECE = _0xAEE8 * 2,
            _0xAEDB = (_0xAEE8 + 6) * 2,
            _0xAEF5 = _0xAEE8 / 2;
        const _0xB0D6 = {};
        const _0xB9AC = "https://discord.com/channels/166703751053312000/630428963889741854";
        const _0xADE4 = new firebase.auth.GoogleAuthProvider();
        const _0xADA3 = "https://accounts.gota.io";
        var _0xB14B = {
            key: "halloween2020",
            foodColors: [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
            customEjectedMass: false,
            particles: false,
            particlesMax: 100,
            motd: "",
            endDate: 1604188800000,
            enabled: false,
            motherCustomEnabled: false,
            motherCustom: function (_0xAD96) {},
            happyMotherCells: []
        };
        _0xB14B.enabled = new Date() < _0xB14B.endDate;
        firebase.initializeApp({
            apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
            authDomain: "accounts.gota.io",
            databaseURL: "https://gota-io.firebaseio.com",
            projectId: "gota-io",
            storageBucket: "gota-io.appspot.com",
            messagingSenderId: "570450309042",
            appId: "1:570450309042:web:380ab6c94d44de2f"
        });
        var _0xB833 = {};
        var _0xADBD = {};
        var _0xB582 = {
            levelNames: 3,
            levelSkins: 3,
            textOutlineSize: 0,
            resolution: 1
        };
        var _0xB095 = [{
            name: "All",
            flags: 255,
            maxMessages: 100
        }, {
            name: "Party",
            flags: 2,
            maxMessages: 100
        }];
        var _0xB7CB = 0;
        var _0xB575 = {
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
            _ChatTabs: JSON.parse(JSON.stringify(_0xB095))
        };
        var _0xB387 = {
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
        var _0xB37A = false;
        const _0xB0A2 = Object.assign({}, _0xB387);
        const _0xB96B = {
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
            rBorderSize: 32,
            rBackgroundOpacity: 1
        };
        const _0xB0BC = {};
        for (var _0xB36D in _0xB96B) {
            _0xB0BC[_0xB36D] = _0xB96B[_0xB36D]
        };
        const _0xB047 = {
            aCustomSpike: null,
            aCustomMother: null
        };
        var _0xB054 = [];
        var _0xB951 = {
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
        var _0xB32C = null;
        var _0xB826 = null;
        var _0xB3D5 = 0;

        function _0xB92A() {
            _0xAE9A = document.getElementById("canvas");
            _0xB4D9 = document.getElementById("minimap-canvas");
            _0xB4F3 = _0xB4D9.getContext("2d");
            _0xB4CC = $("#main");
            _0xB61E = $("#party-panel");
            _0xB2F8 = $(".hud-panel");
            _0xB78A = $("#score-panel");
            _0xB7A4 = $("#main-scrimmage");
            _0xAFF9 = $("#context-menu");
            _0xAF0F = $("#chat-input");
            _0xB3C8 = $("#leaderboard-header");
            _0xB07B = $("#scrimmage-custom");
            _0xB0D6.mouseFrozenDiv = $("#score-mouse");
            _0xB0D6.playerScore = $("#playerScore");
            _0xB0D6.playerCells = $("#playerCells");
            _0xB0D6.playerFps = $("#playerFps");
            _0xB0D6.resetInfo = $("#extra-reset-timer");
            _0xB0D6.resetTime = $("#resetTime");
            _0xB0D6.respawnInfo = $("#extra-respawn-cooldown");
            _0xB0D6.respawnCooldown = $("#respawnCooldown");
            _0xB0D6.spectatorCount = $("#spectatorCount");
            _0xB0D6.playerCellCount = 0;
            _0xB0D6.minimapCoords = $("#minimap-coordinates");
            _0xB0D6.partyPanel = _0xB61E;
            _0xB2B7();
            _0xBA14 = false;
            window.onmousemove = function (_0xADA3) {
                _0xB66C.mouseRawX = _0xADA3.clientX;
                _0xB66C.mouseRawY = _0xADA3.clientY
            };
            window.onkeydown = function (_0xADA3) {
                var _0xADB0 = _0xADA3.which || _0xADA3.keyCode || _0xADA3.charCode;
                if (_0xADB0 <= 5) {
                    return
                };
                if (_0xB37A) {
                    _0xAE18(_0xADB0);
                    _0xADA3.preventDefault();
                    return
                };
                if ($("input").is(":focus")) {
                    return
                };
                if (_0xADB0 == 27) {
                    _0xB992(_0xB4CC);
                    if (_0xB360($("#popup-profile") || _0xB360($("#popup-account-username")))) {
                        _0xB2C4($("#popup-profile"));
                        _0xB2C4($("#popup-account-username"))
                    }
                };
                if (_0xB4CC.css("display") != "none") {
                    return
                };
                _0xB66C.handleKey(_0xADB0)
            };
            window.onkeyup = function (_0xADA3) {
                var _0xADB0 = _0xADA3.which || _0xADA3.keyCode || _0xADA3.charCode;
                if (_0xADB0 == _0xB387.kEjectMass) {
                    _0xBA14 = false;
                    if (_0xB66C) {
                        _0xB66C.sendPacket(new _0xB59C.sendEjectMass(false))
                    }
                }
            };
            window.onmousedown = function (_0xADA3) {
                var _0xADB0 = _0xADA3.button + 1;
                if (_0xB37A) {
                    _0xAE18(_0xADB0);
                    _0xADA3.preventDefault();
                    return
                };
                if ($("input").is(":focus") || _0xB4CC.css("display") != "none") {
                    return
                };
                _0xB66C.handleKey(_0xADB0)
            };
            window.onmouseup = function (_0xADA3) {
                var _0xADB0 = _0xADA3.button + 1;
                if (_0xADB0 == _0xB387.kEjectMass) {
                    _0xBA14 = false;
                    if (_0xB66C) {
                        _0xB66C.sendPacket(new _0xB59C.sendEjectMass(false))
                    }
                }
            };
            window.onblur = function (_0xADA3) {
                if (_0xBA14 && !_0xB575.cPersistEjectMass) {
                    _0xBA14 = false;
                    if (_0xB66C) {
                        _0xB66C.sendPacket(new _0xB59C.sendEjectMass(false))
                    }
                }
            };
            $(document).on("wheel", function (_0xADB0) {
                if (_0xB4CC.css("display") == "none" && _0xADB0.target.id == "canvas") {
                    var _0xADA3 = _0xADB0.originalEvent.wheelDelta || (_0xADB0.originalEvent.deltaY * -1);
                    if (_0xADA3 > 0) {
                        _0xB66C.mouseZoom *= 1.1
                    } else {
                        _0xB66C.mouseZoom *= 0.9
                    };
                    _0xB66C.mouseZoom = _0xB66C.mouseZoom > 5 ? 5 : (_0xB66C.mouseZoom < 0.2 ? 0.2 : _0xB66C.mouseZoom)
                }
            });
            document.addEventListener("contextmenu", function (_0xADA3) {
                _0xADA3.preventDefault()
            });
            _0xB409();
            _0xB3FC();
            var _0xADCA = window.location.href.split("#").slice(1).join("#").split("&");
            var _0xADE4 = "";
            if (_0xADCA[0]) {
                _0xADE4 = _0xADCA[0].toLowerCase()
            };
            if (_0xADCA[1]) {
                _0xADFE = _0xADCA[1]
            };
            if (_0xADE4 != null && _0xADE4 != "") {
                _0xADE4 = _0xADE4[0].toUpperCase() + _0xADE4.slice(1);
                _0xB826 = function () {
                    var _0xADA3 = null;
                    if ((_0xADA3 = _0xB242(_0xADE4)) != null) {
                        _0xB7FF(_0xADA3.name);
                        _0xB7F2(_0xADA3.region)
                    } else {
                        _0xADB0()
                    }
                }
            } else {
                _0xB826 = _0xADB0
            };
            firebase.database().ref("/game").on("value", function (_0xADCA) {
                var _0xADA3 = _0xADCA.val();
                if (_0xADA3.version !== version) {
                    _0xB66C.selfMsg("Woah! Version " + _0xADA3.version + " is now available. Press Ctrl+R to update!")
                };
                if (_0xB3BB != _0xADA3.motd && _0xADA3.motd !== "") {
                    _0xB3BB = _0xADA3.motd;
                    _0xB66C.selfMsg(_0xADA3.motd)
                };
                if (_0xADA3.listRefresh != _0xB3D5) {
                    _0xB3D5 = _0xADA3.listRefresh;
                    _0xB833 = {};
                    _0xADBD(_0xB826);
                    clearInterval(_0xB32C);
                    _0xB32C = setInterval(() => {
                        _0xADBD()
                    }, _0xADA3.listRefresh)
                };
                for (var _0xADB0 in _0xADA3.titles) {
                    _0xB985[_0xADB0] = _0xADA3.titles[_0xADB0]
                }
            });

            function _0xADBD(_0xADB0) {
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: _0xADA3 + "/api/v1/utilities/servers",
                    success: function (_0xADA3) {
                        for (var _0xADE4 of _0xADA3) {
                            var _0xADFE = [];
                            for (var _0xADCA of _0xADE4.servers) {
                                var _0xADD7 = _0xADCA.players + "/" + _0xADCA.playersMax;
                                var _0xADF1 = new _0xB819(_0xADCA.name, _0xADCA.address, _0xADD7, _0xADCA.gamemode, _0xADE4.region, _0xADCA.ssl, _0xADCA.order);
                                _0xADF1.playersCurrent = _0xADCA.players;
                                _0xADFE.push(_0xADF1)
                            };
                            _0xADFE.sort((_0xADA3, _0xADB0) => {
                                return _0xADA3.order - _0xADB0.order
                            });
                            _0xB833[_0xADE4.region] = {};
                            for (var _0xADBD = 0; _0xADBD < _0xADFE.length; _0xADBD++) {
                                var _0xADF1 = _0xADFE[_0xADBD];
                                _0xB833[_0xADE4.region][_0xADF1.name] = _0xADF1
                            }
                        };
                        _0xB44A();
                        if (_0xADB0 != null) {
                            _0xADB0()
                        } else {
                            if (_0xB7E5 != null) {
                                _0xB7FF(_0xB7E5.name)
                            }
                        }
                    },
                    error: function (_0xAD96) {
                        _0xB44A()
                    }
                })
            }

            function _0xADB0() {
                if (_0xB7E5 != null) {
                    _0xB7FF(_0xB7E5.name);
                    return
                };
                _0xB7F2("eu");
                _0xB7FF("Vendetta")
            }
            _0xB8C2 = {};
            _0xB8DC = {};
            _0xB8CF = _0xB8E9.NOT_LOADED;
            _0xB498();
            $(window).unload(_0xB54E);
            _0xB66C = new _0xAFC5();
            _0xB59C = new _0xB5A9();
            _0xB3E2();
            _0xB006.init();
            _0xB72F();
            var _0xADD7 = {
                view: _0xAE9A,
                transparent: true,
                forceCanvas: _0xB575.sRenderType === "CANVAS",
                antialias: !_0xB575.cDisableAA
            };
            _0xB652 = {
                renderer: _0xB645.autoDetectRenderer(_0xADD7),
                stage: _0xB65F
            };
            $(window).resize(_0xB55B);
            _0xB55B();
            _0xB3AE = Date.now();
            fps = 0;
            _0xB66C.selfMsg("Welcome to Gota.io!");
            if (_0xB14B.enabled && _0xB14B.motd !== "") {
                _0xB66C.selfMsg(_0xB14B.motd)
            };
            if (_0xB14B.enabled && _0xB14B.particles && !_0xB575.cDisableEventSkins) {
                _0xB5DD = new _0xB5EA(_0xB14B.particlesMax)
            };
            _0xB9D3();
            requestAnimationFrame(_0xB978)
        }

        function _0xB55B() {
            _0xAE9A.width = window.innerWidth * _0xB582.resolution;
            _0xAE9A.height = window.innerHeight * _0xB582.resolution;
            _0xB652.renderer.resize(_0xAE9A.width, _0xAE9A.height);
            _0xB652.stage.position.x = (window.innerWidth * _0xB582.resolution) / 2;
            _0xB652.stage.position.y = (window.innerHeight * _0xB582.resolution) / 2
        }

        function _0xB199(_0xADA3) {
            for (var _0xADB0 in _0xB96B) {
                if (_0xADB0.charAt(0) == "u") {
                    _0xADA3(_0xADB0)
                }
            }
        }

        function _0xB978() {
            var _0xADBD = (Date.now() - _0xB3AE);
            _0xB3AE = Date.now();
            var _0xADB0 = Math.min(_0xADBD / _0xB575.rAnimationDelay, 1.0);
            _0xB1CD += _0xADBD;
            for (var _0xADCA in _0xB66C.foodObjects) {
                _0xAE18 = _0xB66C.foodObjects[_0xADCA];
                if (_0xAE18.steps > 0) {
                    _0xAE18.animate(_0xADB0)
                };
                _0xAE18.handleFood()
            };
            for (var _0xADCA in _0xB66C.bucket) {
                _0xAE18 = _0xB66C.bucket[_0xADCA];
                if (_0xAE18.steps > 0) {
                    _0xAE18.animate(_0xADB0)
                };
                _0xAE18.handle()
            };
            var _0xADFE = 0,
                _0xAE0B = 0,
                _0xADA3 = 0,
                _0xAE32 = 0,
                _0xAE18 = null;
            for (var _0xADCA in _0xB66C.myCells) {
                _0xAE18 = _0xB66C.myCells[_0xADCA];
                if (_0xAE18 != null) {
                    _0xADFE += _0xAE18.x;
                    _0xAE0B += _0xAE18.y;
                    _0xAE32 += _0xAE18.size;
                    _0xADA3++
                }
            };
            if (_0xADA3 != 0) {
                _0xB66C.centerX = _0xADFE / _0xADA3;
                _0xB66C.centerY = _0xAE0B / _0xADA3;
                _0xB66C.centerSteps = 0;
                if (_0xB575.cDisableAutoZoom) {
                    _0xB66C.scale_base = 0.2 * Math.max(_0xAE9A.height / 540, _0xAE9A.width / 960)
                } else {
                    _0xB66C.scale_base = Math.pow(Math.min(64.0 / _0xAE32, 1), 0.4) * Math.max(_0xAE9A.height / 540, _0xAE9A.width / 960)
                }
            };
            if (_0xB66C.centerSteps > 0) {
                _0xB66C.centerX += (_0xB66C.centerX_ - _0xB66C.centerX) * _0xADB0;
                _0xB66C.centerY += (_0xB66C.centerY_ - _0xB66C.centerY) * _0xADB0
            };
            var _0xADF1 = _0xB66C.scale_base * _0xB66C.mouseZoom;
            _0xB66C.scale = (9 * _0xB66C.scale + _0xADF1) / 10;
            _0xB4BF.scale.x = _0xB66C.scale;
            _0xB4BF.scale.y = _0xB66C.scale;
            _0xB4BF.pivot.x = _0xB66C.centerX;
            _0xB4BF.pivot.y = _0xB66C.centerY;
            if (_0xB66C.isConnected() && _0xB4CC.css("display") == "none") {
                if (!_0xB66C.mouseFrozen) {
                    var _0xADD7 = _0xB4BF.pivot.x - (_0xB652.stage.position.x / _0xB66C.scale) + ((_0xB66C.mouseRawX * _0xB582.resolution) / _0xB66C.scale);
                    var _0xADE4 = _0xB4BF.pivot.y - (_0xB652.stage.position.y / _0xB66C.scale) + ((_0xB66C.mouseRawY * _0xB582.resolution) / _0xB66C.scale);
                    _0xB66C.sendPacket(new _0xB59C.sendMouse(_0xADD7, _0xADE4))
                }
            };
            if (!_0xB575.cHideMinimap) {
                _0xB0FD(_0xADB0)
            };
            if (_0xB575.cShowCoordinates) {
                _0xB0F0()
            };
            _0xB66C.buffHolder.update();
            _0xB652.renderer.render(_0xB652.stage);
            _0xB1C0++;
            if (_0xB1CD >= 1000) {
                _0xB0D6.playerFps.html(_0xB1C0);
                var _0xAE3F = Date.now();
                if (_0xB66C.serverData.resetType > 0 && _0xB66C.serverData.resetTime > 0) {
                    _0xB0D6.resetInfo.css("display", "block");
                    var _0xAE25 = Math.max(0, Math.floor((_0xB66C.serverData.resetTime - _0xAE3F) / 1000));
                    _0xB0D6.resetTime.html(_0xB1B3(_0xAE25))
                } else {
                    _0xB0D6.resetInfo.css("display", "none")
                };
                if (_0xB66C.respawnCooldown > 0 && _0xB66C.respawnCooldown >= _0xAE3F) {
                    _0xB0D6.respawnInfo.css("display", "block");
                    var _0xAE25 = Math.max(0, Math.ceil((_0xB66C.respawnCooldown - _0xAE3F) / 1000));
                    _0xB0D6.respawnCooldown.html(_0xB1B3(_0xAE25))
                } else {
                    if (_0xB66C.respawnCooldown < 0) {
                        _0xB0D6.respawnInfo.css("display", "block");
                        _0xB0D6.respawnCooldown.html("NEVER")
                    } else {
                        _0xB0D6.respawnInfo.css("display", "none")
                    }
                };
                _0xB1CD = 0;
                _0xB1C0 = 0
            };
            _0xB66C.playerRegistry.handleUpdatedPlayers();
            requestAnimationFrame(_0xB978)
        }

        function _0xB276() {
            if (_0xB575.cShowBorder && _0xB66C.serverData.border.enabled) {
                if (_0xAE3F != null) {
                    _0xAE3F.parent.removeChild(_0xAE3F);
                    _0xAE3F.destroy();
                    _0xAE3F = null
                };
                _0xAE3F = new _0xB645.Graphics();
                _0xAE3F.lineStyle(_0xB96B.rBorderSize, _0xB645.utils.string2hex(tinycolor(_0xB96B.uiGameBorderColor).toHexString()));
                _0xAE3F.drawRect(_0xB66C.serverData.border.left, _0xB66C.serverData.border.top, _0xB66C.serverData.border.width, _0xB66C.serverData.border.height);
                _0xAE4C.addChild(_0xAE3F);
                _0xAE3F.visible = true
            } else {
                if (_0xAE3F != null) {
                    _0xAE3F.parent.removeChild(_0xAE3F);
                    _0xAE3F.destroy();
                    _0xAE3F = null
                }
            }
        }

        function _0xB0F0() {
            _0xB0D6.minimapCoords.css({
                "color": _0xB96B.uiForegroundColor
            });
            _0xB0D6.minimapCoords.html("X: " + _0xB66C.centerX.toFixed(0) + " Y: " + _0xB66C.centerY.toFixed(0))
        }

        function _0xB0FD(_0xADA3) {
            if (!_0xB66C.serverData.border.enabled) {
                return
            };
            _0xB4F3.clearRect(0, 0, _0xB4D9.width, _0xB4D9.height);
            _0xB4F3.font = "12px Calibri";
            for (var _0xADB0 = 0; _0xADB0 < _0xB66C.party.length; _0xADB0++) {
                var _0xADBD = _0xB66C.party[_0xADB0];
                if (_0xADBD.state === _0xB611.ALIVE && _0xADBD.id != _0xB66C.playerId) {
                    _0xB500(_0xB4F3, _0xADBD.name, _0xADBD.x, _0xADBD.y, 4, _0xADBD.mmColor, true);
                    _0xADBD.x += (_0xADBD.x_ - _0xADBD.x) * _0xADA3;
                    _0xADBD.y += (_0xADBD.y_ - _0xADBD.y) * _0xADA3
                }
            };
            _0xB500(_0xB4F3, _0xB66C.name, _0xB66C.centerX, _0xB66C.centerY, 6, "#fefefe", false)
        }

        function _0xB54E() {
            _0xB77D()
        }

        function _0xAFC5() {
            this.socket = null;
            this.currentServer = null;
            this.currentServerName = null;
            this.spectate = false;
            this.name = "";
            this.playerId = 0;
            this.bucket = {};
            this.foodObjects = {};
            this.myCells = {};
            this.playerRegistry = new _0xB686();
            this.buffHolder = new _0xAE73();
            this.centerX = 0;
            this.centerY = 0;
            this.centerX_ = 0;
            this.centerY_ = 0;
            this.centerSteps = 0;
            this.scale = 0.5;
            this.scale_ = 0.5;
            this.scale_base = 0.5;
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
        _0xAFC5.prototype.clearStats = function () {
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
        _0xAFC5.prototype.play = function () {
            if (_0xB7E5 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.name = $("#name-box").val();
            this.spectate = false;
            this.currentServerName = _0xB7E5.name;
            $("#playerServer").html(this.currentServerName);
            _0xB43D();
            if (this.isConnected() && this.currentServer == _0xB7E5.ip) {
                this.sendPacket(new _0xB59C.setName(this.name))
            } else {
                this.connect(_0xB7E5.ip)
            };
            _0xB881();
            _0xB2C4(_0xB4CC);
            ga("send", "event", "Game", "webMenu", "Play")
        };
        _0xAFC5.prototype.spec = function () {
            if (_0xB7E5 == null) {
                this.selfMsg("No server selected!");
                return
            };
            this.spectate = true;
            _0xB43D();
            if (this.isConnected() && this.currentServer == _0xB7E5.ip) {
                this.sendPacket(new _0xB59C.sendSpectate())
            } else {
                this.connect(_0xB7E5.ip)
            };
            _0xB881();
            _0xB2C4(_0xB4CC);
            ga("send", "event", "Game", "webMenu", "Spectate")
        };
        _0xAFC5.prototype.connect = function (_0xADB0) {
            if (this.socket != null) {
                this.socket.nextUrl = _0xADB0;
                this.disconnect(_0xADB0);
                return
            };
            this.currentServer = _0xADB0;
            this.currentServerName = _0xB7E5.name;
            this.selfMsg("Connecting to " + this.currentServerName + "...");
            if (_0xB7E5.ssl == 1) {
                this.socket = new WebSocket("wss://" + _0xADB0)
            } else {
                this.socket = new WebSocket("ws://" + _0xADB0)
            };
            this.socket.binaryType = "arraybuffer";
            var _0xADA3 = this;
            this.socket.onopen = this.onConnect.bind(this);
            this.socket.onmessage = this.onMessage.bind(this);
            this.socket.onclose = function (_0xADB0) {
                _0xADA3.reset();
                _0xADA3.selfMsg("You have been disconnected from the server. Reason: " + (_0xADB0.reason === "" ? "Unknown" : _0xADB0.reason));
                if (this.nextUrl != null) {
                    _0xADA3.connect(this.nextUrl)
                }
            };
            this.socket.onerror = function (_0xADBD) {
                _0xADA3.reset();
                this.nextUrl = null;
                _0xADA3.selfMsg("Error connecting to server... Retrying every second.");
                setTimeout(function () {
                    if (_0xADA3.isConnected() == false && _0xADA3.socket == null) {
                        _0xADA3.connect(_0xADB0)
                    }
                }, 1000)
            };
            document.body.classList.add("hide-captcha-badge")
        };
        _0xAFC5.prototype.disconnect = function (_0xADA3) {
            if (this.socket != null) {
                this.socket.close()
            }
        };
        _0xAFC5.prototype.clearBuckets = function () {
            for (var _0xADA3 in this.bucket) {
                this.bucket[_0xADA3].onDelete();
                delete this.bucket[_0xADA3]
            };
            for (var _0xADA3 in this.foodObjects) {
                this.foodObjects[_0xADA3].onDelete();
                delete this.foodObjects[_0xADA3]
            }
        };
        _0xAFC5.prototype.reset = function () {
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
                _0xB9ED()
            }
        };
        _0xAFC5.prototype.handleKey = function (_0xADB0) {
            if (_0xADB0 == _0xB387.kEjectMass) {
                _0xBA14 = true;
                this.sendPacket(new _0xB59C.sendEjectMass(true))
            } else {
                if (_0xADB0 == _0xB387.kSplit) {
                    this.sendPacket(new _0xB59C.sendKey(17))
                } else {
                    if (_0xADB0 == _0xB387.kToggleSpec) {
                        this.sendPacket(new _0xB59C.sendKey(18))
                    } else {
                        if (_0xADB0 == _0xB387.kDoubleSplit) {
                            this.sendPacket(new _0xB59C.sendKey(17));
                            this.sendPacket(new _0xB59C.sendKey(17))
                        } else {
                            if (_0xADB0 == _0xB387.kTripleSplit) {
                                for (var _0xADA3 = 0; _0xADA3 < 3; _0xADA3++) {
                                    this.sendPacket(new _0xB59C.sendKey(17))
                                }
                            } else {
                                if (_0xADB0 == _0xB387.kQuadSplit) {
                                    for (var _0xADA3 = 0; _0xADA3 < 4; _0xADA3++) {
                                        this.sendPacket(new _0xB59C.sendKey(17))
                                    }
                                } else {
                                    if (_0xADB0 == _0xB387.kHexaSplit) {
                                        for (var _0xADA3 = 0; _0xADA3 < 6; _0xADA3++) {
                                            this.sendPacket(new _0xB59C.sendKey(17))
                                        }
                                    } else {
                                        if (_0xADB0 == 38) {
                                            this.mouseZoom *= 1.05;
                                            this.mouseZoom = _0xB66C.mouseZoom > 5 ? 5 : (this.mouseZoom < 0.2 ? 0.2 : this.mouseZoom)
                                        } else {
                                            if (_0xADB0 == 40) {
                                                this.mouseZoom *= 0.95;
                                                this.mouseZoom = _0xB66C.mouseZoom > 5 ? 5 : (this.mouseZoom < 0.2 ? 0.2 : this.mouseZoom)
                                            } else {
                                                if (_0xADB0 == _0xB387.kFreezeMouse) {
                                                    this.mouseFrozen = !this.mouseFrozen;
                                                    if (this.mouseFrozen) {
                                                        _0xB0D6.mouseFrozenDiv.css("display", "block")
                                                    } else {
                                                        _0xB0D6.mouseFrozenDiv.css("display", "none")
                                                    }
                                                } else {
                                                    if (_0xADB0 == _0xB387.kContextMenu) {
                                                        _0xAF91()
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
        _0xAFC5.prototype.isConnected = function () {
            if (this.socket == null) {
                return false
            } else {
                return this.socket.readyState == 1
            }
        };
        _0xAFC5.prototype.sendPacket = function (_0xADA3) {
            if (this.isConnected()) {
                this.socket.send(_0xADA3)
            }
        };
        _0xAFC5.prototype.onConnect = function () {
            _0xAE25 = [];
            _0xB165();
            this.sendPacket(new _0xB59C.connectionStart());
            this.sendPing();
            this.sendOptions();
            if (firebase.auth().currentUser !== null) {
                firebase.auth().currentUser.getIdToken(true).then((_0xADA3) => {
                    _0xB66C.sendPacket(new _0xB59C.sendAuthToken(_0xADA3))
                }).catch((_0xAD96) => {
                    return _0xB283(_0xAD96, true)
                });
                return
            } else {
                if (!this.spectate) {
                    this.sendPacket(new _0xB59C.setName(this.name))
                } else {
                    this.sendPacket(new _0xB59C.sendSpectate())
                }
            }
        };
        _0xAFC5.prototype.sendPing = function () {
            if (this.isConnected()) {
                _0xB638 = +new Date;
                this.sendPacket(new _0xB59C.sendPing())
            }
        };
        _0xAFC5.prototype.sendOptions = function () {
            if (this.isConnected()) {
                this.sendPacket(new _0xB59C.sendOptions())
            }
        };
        _0xAFC5.prototype.selfMsg = function (_0xADB0) {
            var _0xADA3 = document.createElement("td");
            var _0xADBD = document.createElement("span");
            _0xADBD.style.color = "#DDDD00";
            _0xADBD.innerHTML = "[System] " + _0xB5D0(_0xADB0);
            _0xADA3.appendChild(_0xADBD);
            _0xADCA(_0xAF77.SYSTEM, _0xADA3)
        };
        _0xAFC5.prototype.selfMsgWithJoinCode = function (_0xADD7, _0xADA3) {
            var _0xADBD = document.createElement("td");
            var _0xADE4 = document.createElement("span");
            _0xADE4.style.color = "#DDDD00";
            _0xADE4.innerHTML = "[System] " + _0xB5D0(_0xADD7);
            _0xADBD.appendChild(_0xADE4);
            var _0xADB0 = document.createElement("span");
            _0xADB0.style.color = "#DDDD00";
            _0xADB0.innerHTML = _0xADA3;
            _0xADB0.style.pointerEvents = "all";
            _0xADB0.style.userSelect = "all";
            _0xADBD.appendChild(_0xADB0);
            _0xADCA(_0xAF77.SYSTEM, _0xADBD)
        };
        _0xAFC5.prototype.clearParty = function (_0xADA3) {
            this.party = [];
            this.partyIds = {};
            this.partyLeader = -1;
            this.partyIndex = -1;
            $("#party-panel").css("display", "none");
            if (_0xB07B.css("display") == "block") {
                this.handleCustomGameLeave()
            };
            if (this.partyCode != null || _0xADFE != null) {
                this.partyCode = _0xADFE = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0xAFC5.prototype.isPartyLeader = function () {
            return this.partyLeader == this.playerId
        };
        _0xAFC5.prototype.getServerMaxCells = function () {
            return this.serverData.maxCells + this.buffHolder.bonusMaxCells
        };
        _0xAFC5.prototype.onMessage = function (_0xADB0) {
            var _0xADA3 = new DataView(_0xADB0.data);
            var _0xADBD = _0xADA3.getUint8(0);
            _0xADA3.offset = 1;
            switch (_0xADBD) {
            case 2:
                this.handleUpdate(_0xADA3);
                break;
            case 10:
                this.handlePosition(_0xADA3);
                break;
            case 21:
                this.handleStats(_0xADA3);
                break;
            case 22:
                this.showSubPanel(_0xADA3);
                break;
            case 23:
                this.updateSubPanel(_0xADA3);
                break;
            case 40:
                this.handleInvite(_0xADA3);
                break;
            case 41:
                this.handlePartyInfo(_0xADA3);
                break;
            case 45:
                this.handlePartyData(_0xADA3);
                break;
            case 43:
                this.handlePartyJoinCode(_0xADA3);
                break;
            case 49:
                this.handleLeaderboard(_0xADA3);
                break;
            case 50:
                this.handleLeaderboardCustom(_0xADA3);
                break;
            case 63:
                this.handleRespawnCooldown(_0xADA3);
                break;
            case 64:
                this.handleMapData(_0xADA3);
                break;
            case 65:
                this.handleClearNodes();
                break;
            case 66:
                this.handleUpdateBorder(_0xADA3);
                break;
            case 68:
                this.handleResetTime(_0xADA3);
                break;
            case 69:
                this.handleSpectators(_0xADA3);
                break;
            case 70:
                this.handleSystemMsg(_0xADA3);
                break;
            case 71:
                this.handlePing();
                break;
            case 72:
                this.handleChat(_0xADA3);
                break;
            case 73:
                this.handleWhisper(_0xADA3);
                break;
            case 80:
                this.handleShowScrimmageMenu();
                break;
            case 81:
                this.handleQueueData(_0xADA3);
                break;
            case 82:
                this.handleQueueLeave(_0xADA3);
                break;
            case 83:
                this.handleMatchState(_0xADA3);
                break;
            case 90:
                this.handleScrimmageData(_0xADA3);
                break;
            case 91:
                this.handleCustomGameShow(_0xADA3);
                break;
            case 92:
                this.handleCustomGameUpdate(_0xADA3);
                break;
            case 93:
                this.handleCustomGameLeave();
                break;
            case 94:
                this.handleShowCustomGameLobbies(_0xADA3);
                break;
            case 100:
                this.handleAddBuff(_0xADA3);
                break;
            case 101:
                this.handleRemoveBuff(_0xADA3);
                break;
            case 102:
                this.handleClearBuffs(_0xADA3);
                break;
            case 103:
                this.handleAuthenticated(_0xADA3);
                break;
            case 104:
                this.handleProfile(_0xADA3);
                break
            }
        };
        _0xAFC5.prototype.handleUpdate = function (_0xADF1) {
            while (true) {
                var _0xADBD = _0xADF1.getUint16(_0xADF1.offset, true);
                _0xADF1.offset += 2;
                if (_0xADBD == 0) {
                    break
                };
                var _0xADD7 = this.playerRegistry.getPlayer(_0xADBD);
                var _0xADB0 = false;
                if (_0xADD7 == null) {
                    _0xADD7 = new _0xB679(_0xADBD)
                } else {
                    _0xADB0 = true
                };
                _0xADD7.cellColor = (_0xADF1.getUint8(_0xADF1.offset++) << 16) + (_0xADF1.getUint8(_0xADF1.offset++) << 8) + _0xADF1.getUint8(_0xADF1.offset++);
                _0xADD7.name = _0xB715(_0xADF1);
                _0xADD7.setSkin(_0xB722(_0xADF1));
                _0xADD7.setFlags(_0xADF1.getUint8(_0xADF1.offset++));
                if ((_0xADD7.flags & 2) == 2) {
                    _0xADD7.nameColor = "#" + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset++)) + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset++)) + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset++));
                    _0xADD7.parseEffect(_0xADF1.getUint8(_0xADF1.offset++));
                    _0xADD7.nameFont = _0xADF1.getUint8(_0xADF1.offset++)
                };
                if (!_0xADB0) {
                    _0xB66C.playerRegistry.add(_0xADD7)
                } else {
                    _0xB66C.playerRegistry.updatePlayer(_0xADD7)
                }
            };
            while (true) {
                var _0xADBD = _0xADF1.getUint16(_0xADF1.offset, true);
                _0xADF1.offset += 2;
                if (_0xADBD == 0) {
                    break
                };
                var _0xADE4 = _0xADF1.getUint8(_0xADF1.offset++);
                var _0xADCA;
                if (_0xADE4 == 0) {
                    _0xADCA = this.foodObjects[_0xADBD]
                } else {
                    _0xADCA = this.bucket[_0xADBD]
                };
                if (_0xADCA == null) {
                    _0xADCA = new _0xAEC1(_0xADBD);
                    _0xADCA.setType(_0xADE4);
                    _0xADCA.setX(_0xADF1.getInt16(_0xADF1.offset, true));
                    _0xADCA.setY(_0xADF1.getInt16(_0xADF1.offset + 2, true));
                    _0xADF1.offset += 4;
                    switch (_0xADE4) {
                    case 0:
                        _0xADCA.color = _0xB228(_0xADCA.id);
                        break;
                    case 1:
                        _0xADCA.setSize(_0xADF1.getUint16(_0xADF1.offset, true));
                        _0xADF1.offset += 2;
                        _0xADCA.parsedColor = "#" + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset)) + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset + 1)) + _0xAE8D(_0xADF1.getUint8(_0xADF1.offset + 2));
                        _0xADCA.color = (_0xADF1.getUint8(_0xADF1.offset++) << 16) + (_0xADF1.getUint8(_0xADF1.offset++) << 8) + _0xADF1.getUint8(_0xADF1.offset++);
                        _0xADCA.skin = _0xADF1.getUint8(_0xADF1.offset++) - 1;
                        break;
                    case 2:
                        _0xADCA.setSize(_0xADF1.getUint16(_0xADF1.offset, true));
                        _0xADF1.offset += 2;
                        _0xADCA.playerId = _0xADF1.getUint16(_0xADF1.offset, true);
                        _0xADF1.offset += 2;
                        break;
                    case 3:
                        _0xADCA.setSize(_0xADF1.getUint16(_0xADF1.offset, true));
                        _0xADF1.offset += 2;
                        break;
                    case 4:
                        _0xADCA.setSize(_0xADF1.getUint16(_0xADF1.offset, true));
                        _0xADF1.offset += 2;
                        break;
                    case 5:
                        _0xADCA.setSize(40);
                        _0xADCA.buff = _0xADF1.getUint8(_0xADF1.offset++);
                        break
                    };
                    _0xADCA.onCreate();
                    if (_0xADE4 == 0) {
                        this.foodObjects[_0xADBD] = _0xADCA
                    } else {
                        this.bucket[_0xADBD] = _0xADCA
                    };
                    if (_0xADCA.playerId == this.playerId) {
                        this.myCells[_0xADBD] = _0xADCA
                    }
                } else {
                    _0xADCA.updateX(_0xADF1.getInt16(_0xADF1.offset, true));
                    _0xADCA.updateY(_0xADF1.getInt16(_0xADF1.offset + 2, true));
                    _0xADF1.offset += 4;
                    switch (_0xADE4) {
                    case 0:
                        break;
                    case 1:
                        _0xADCA.size_ = _0xADF1.getUint16(_0xADF1.offset, true);
                        _0xADF1.offset += 2;
                        _0xADF1.offset += 4;
                        break;
                    case 2:
                        _0xADCA.size_ = _0xADF1.getUint16(_0xADF1.offset, true);
                        _0xADF1.offset += 2;
                        _0xADF1.offset += 2;
                        break;
                    case 3:
                        _0xADCA.size_ = _0xADF1.getUint16(_0xADF1.offset, true);
                        _0xADF1.offset += 2;
                        break;
                    case 4:
                        _0xADCA.size_ = _0xADF1.getUint16(_0xADF1.offset, true);
                        _0xADF1.offset += 2;
                        break;
                    case 5:
                        _0xADF1.offset++;
                        break
                    };
                    _0xADCA.steps = 30
                }
            };
            var _0xADA3 = _0xADF1.getUint16(_0xADF1.offset, true);
            _0xADF1.offset += 2;
            while (_0xADA3 > 0) {
                var _0xADBD = _0xADF1.getUint16(_0xADF1.offset, true);
                _0xADF1.offset += 2;
                _0xB66C.playerRegistry.remove(_0xADBD);
                _0xADA3--
            };
            _0xADA3 = _0xADF1.getUint16(_0xADF1.offset, true);
            _0xADF1.offset += 2;
            while (_0xADA3 > 0) {
                var _0xADBD = _0xADF1.getUint16(_0xADF1.offset, true);
                _0xADF1.offset += 2;
                var _0xADCA = this.bucket[_0xADBD] || this.foodObjects[_0xADBD];
                if (_0xADCA != null) {
                    if (_0xADCA.type == 0) {
                        delete this.foodObjects[_0xADBD]
                    } else {
                        delete this.bucket[_0xADBD]
                    };
                    if (_0xADCA.playerId == this.playerId) {
                        delete this.myCells[_0xADBD];
                        if (Object.keys(this.myCells).length == 0) {
                            if (_0xB575.cAutoRespawn) {
                                if ($("#main").css("display") == "none") {
                                    _0xB66C.play()
                                }
                            } else {
                                if (_0xB7A4.css("display") != "block") {
                                    _0xB88E(_0xB4CC)
                                };
                                aiptag.cmd.display.push(function () {
                                    aipDisplayTag.refresh("GOT_gota-io_336x280")
                                })
                            }
                        }
                    };
                    _0xADCA.onDelete()
                };
                _0xADA3--
            };
            this.sortCells()
        };
        _0xAFC5.prototype.handlePosition = function (_0xADA3) {
            this.centerX_ = _0xADA3.getFloat32(_0xADA3.offset, true);
            _0xADA3.offset += 4;
            this.centerY_ = _0xADA3.getFloat32(_0xADA3.offset, true);
            _0xADA3.offset += 4;
            this.centerSteps = 30;
            if (!_0xB575.cDisableAutoZoom) {
                this.scale_base = _0xADA3.getFloat32(_0xADA3.offset, true)
            }
        };
        _0xAFC5.prototype.handleRespawnCooldown = function (_0xADB0) {
            var _0xADA3 = _0xADB0.getFloat64(_0xADB0.offset, true);
            this.respawnCooldown = _0xADA3
        };
        _0xAFC5.prototype.handleMapData = function (_0xADA3) {
            this.playerId = _0xADA3.getUint16(_0xADA3.offset, true);
            _0xADA3.offset += 2 + 1;
            this.handleUpdateBorder(_0xADA3);
            this.serverData.maxCells = _0xADA3.getUint16(_0xADA3.offset, true);
            _0xADA3.offset += 2;
            $("#playerId").html(_0xB66C.playerId);
            this.updateCellCounter(0, true);
            if (_0xADFE != null) {
                _0xB66C.sendPacket(new _0xB59C.sendPartyJoin(_0xADFE))
            };
            _0xB7A4.css("display", "none");
            $("#scrimmage-btn-leave").css("display", "none")
        };
        _0xAFC5.prototype.handleUpdateBorder = function (_0xADA3) {
            this.serverData.border = {};
            this.serverData.border.left = _0xADA3.getInt16(_0xADA3.offset, true);
            this.serverData.border.top = _0xADA3.getInt16(_0xADA3.offset + 2, true);
            this.serverData.border.right = _0xADA3.getInt16(_0xADA3.offset + 4, true);
            this.serverData.border.bottom = _0xADA3.getInt16(_0xADA3.offset + 6, true);
            _0xADA3.offset += 8;
            this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
            this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
            this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0;
            _0xB276()
        };
        _0xAFC5.prototype.handleResetTime = function (_0xADBD) {
            var _0xADB0 = _0xADBD.getUint8(_0xADBD.offset++);
            var _0xADA3 = _0xADBD.getFloat64(_0xADBD.offset, true);
            this.serverData.resetType = _0xADB0;
            this.serverData.resetTime = _0xADA3
        };
        _0xAFC5.prototype.handleSpectators = function (_0xADA3) {
            this.spectators = _0xADA3.getUint16(_0xADA3.offset, true);
            this.updateSpectators()
        };
        _0xAFC5.prototype.handleClearNodes = function (_0xADA3) {
            this.clearBuckets()
        };
        _0xAFC5.prototype.handleLeaderboard = function (_0xADFE) {
            var _0xADD7 = document.getElementById("leaderboard-canvas");
            var _0xADB0 = _0xADD7.getContext("2d");
            _0xB3C8.text("Leaderboard");
            var _0xADA3 = _0xADFE.getUint32(_0xADFE.offset, true);
            _0xADFE.offset += 4;
            _0xADD7.width = 200;
            _0xADD7.height = (20 * _0xADA3) + 5;
            _0xADB0.font = "16px Calibri";
            var _0xADF1 = 20;
            for (var _0xADBD = 0; _0xADBD < _0xADA3; _0xADBD++) {
                var _0xADCA = _0xADFE.getUint16(_0xADFE.offset, true);
                _0xADFE.offset += 2;
                var _0xADE4 = _0xB715(_0xADFE) || "An unnamed cell";
                if (_0xADCA == this.playerId) {
                    _0xADB0.fillStyle = _0xB96B.uiLeaderboardHighlightSelf
                } else {
                    if (this.partyIds[_0xADCA] != null) {
                        _0xADB0.fillStyle = _0xB96B.uiLeaderboardHighlightParty
                    } else {
                        _0xADB0.fillStyle = _0xB96B.uiForegroundColor
                    }
                };
                _0xADB0.fillText((_0xADBD + 1) + ". " + _0xADE4, 10, _0xADF1);
                _0xADF1 += 20
            }
        };
        _0xAFC5.prototype.handleLeaderboardCustom = function (_0xAE0B) {
            var _0xADD7 = document.getElementById("leaderboard-canvas");
            var _0xADBD = _0xADD7.getContext("2d");
            _0xB3C8.html("Leaderboard");
            var _0xADA3 = _0xAE0B.getUint16(_0xAE0B.offset, true);
            var _0xADB0 = _0xAE0B.getUint8(_0xAE0B.offset + 2, true);
            var _0xADFE = _0xAE0B.getUint8(_0xAE0B.offset + 3, true);
            _0xAE0B.offset += 4;
            _0xADD7.width = 200;
            _0xADD7.height = (20 * _0xADA3) + 5;
            _0xADBD.font = "16px Calibri";
            var _0xADF1 = 20;
            for (var _0xADCA = 0; _0xADCA < _0xADA3; _0xADCA++) {
                var _0xADE4 = _0xB722(_0xAE0B);
                if (_0xADCA == _0xADB0) {
                    _0xADBD.fillStyle = _0xB96B.uiLeaderboardHighlightSelf
                } else {
                    _0xADBD.fillStyle = _0xB96B.uiForegroundColor
                };
                _0xADBD.fillText(_0xADE4, 5, _0xADF1);
                _0xADF1 += 20
            }
        };
        _0xAFC5.prototype.handlePing = function () {
            var _0xADA3 = +new Date - _0xB638;
            if (!_0xB575.cColoredPing) {
                if (_0xADA3 < 100) {
                    $("#playerPing").css({
                        "color": _0xB96B.uiGameColorSuccess
                    })
                } else {
                    if (_0xADA3 < 200) {
                        $("#playerPing").css({
                            "color": _0xB96B.uiGameColorWarning
                        })
                    } else {
                        $("#playerPing").css({
                            "color": _0xB96B.uiGameColorError
                        })
                    }
                }
            } else {
                $("#playerPing").css({
                    "color": _0xB96B.uiForegroundColor
                })
            };
            $("#playerPing").html(_0xADA3 + "ms")
        };
        _0xAFC5.prototype.handleChat = function (_0xAE73) {
            var _0xADA3 = _0xAE73.getUint8(_0xAE73.offset++);
            var _0xAE18 = "rgb(" + _0xAE73.getUint8(_0xAE73.offset++) + "," + _0xAE73.getUint8(_0xAE73.offset++) + "," + _0xAE73.getUint8(_0xAE73.offset++) + ")";
            var _0xADBD = _0xAE73.getUint8(_0xAE73.offset++);
            var _0xAE3F = _0xAE73.getUint16(_0xAE73.offset, true);
            _0xAE73.offset += 2;
            if (_0xAE25.includes(_0xAE3F)) {
                return
            };
            var _0xAE59 = _0xB715(_0xAE73);
            _0xAE73.getUint8(_0xAE73.offset++);
            var _0xAE0B = _0xB5D0(_0xB715(_0xAE73)) || "An unnamed cell";
            var _0xADFE = _0xB5D0(_0xB715(_0xAE73));
            var _0xADD7 = _0xAF77.ALL;
            var _0xADB0;
            switch (_0xADA3) {
            case 1:
                _0xADB0 = "Party";
                _0xADD7 = _0xAF77.PARTY;
                break;
            case 2:
                _0xADB0 = "Admin";
                _0xADD7 = _0xAF77.ADMIN;
                break;
            default:
                _0xADB0 = "All";
                break
            };
            if (_0xAE59.length > 0) {
                _0xB5D0(_0xADB0 += " - " + _0xAE59)
            };
            var _0xADF1 = document.createElement("td");
            var _0xAE4C = document.createElement("span");
            _0xAE4C.innerHTML = "[" + _0xADB0 + "] ";
            _0xADF1.appendChild(_0xAE4C);
            var _0xAE32 = document.createElement("span");
            _0xAE32.innerText = _0xAE0B;
            _0xAE32.dataset.playerId = _0xAE3F;
            _0xAE32.style.color = _0xAE18;
            _0xAE32.className = "chat-name";
            _0xAE32.oncontextmenu = _0xAF29;
            _0xADF1.appendChild(_0xAE32);
            var _0xAE66 = document.createElement("span");
            _0xAE66.style.color = _0xAF1C[_0xADBD];
            if (_0xADBD == 0) {
                _0xAE66.innerHTML = ": " + _0xB5C3(_0xADFE)
            } else {
                var _0xADE4 = document.createElement("span");
                _0xADE4.innerHTML = ": ";
                _0xADF1.appendChild(_0xADE4);
                _0xAE66.innerHTML = _0xB5C3(_0xADFE)
            };
            _0xADF1.appendChild(_0xAE66);
            _0xADCA(_0xADD7, _0xADF1)
        };
        _0xAFC5.prototype.handleWhisper = function (_0xAE59) {
            var _0xAE0B = _0xB5D0(_0xB715(_0xAE59)) || "An unnamed cell";
            var _0xAE32 = _0xAE59.getUint16(_0xAE59.offset, true);
            _0xAE59.offset += 2;
            if (_0xAE25.includes(_0xAE32)) {
                return
            };
            var _0xAE18 = "rgb(" + _0xAE59.getUint8(_0xAE59.offset++) + "," + _0xAE59.getUint8(_0xAE59.offset++) + "," + _0xAE59.getUint8(_0xAE59.offset++) + ")";
            var _0xADD7 = _0xB5D0(_0xB715(_0xAE59)) || "An unnamed cell";
            var _0xADF1 = _0xAE59.getUint16(_0xAE59.offset, true);
            _0xAE59.offset += 2;
            var _0xADE4 = "rgb(" + _0xAE59.getUint8(_0xAE59.offset++) + "," + _0xAE59.getUint8(_0xAE59.offset++) + "," + _0xAE59.getUint8(_0xAE59.offset++) + ")";
            var _0xADBD = _0xB5D0(_0xB715(_0xAE59));
            var _0xADB0 = document.createElement("td");
            var _0xAE3F = document.createElement("span");
            _0xAE3F.innerText = _0xAE0B;
            _0xAE3F.dataset.playerId = _0xAE32;
            _0xAE3F.style.color = _0xAE18;
            _0xAE3F.className = "chat-name";
            _0xAE3F.oncontextmenu = _0xAF29;
            _0xADB0.appendChild(_0xAE3F);
            var _0xADA3 = document.createElement("span");
            _0xADA3.innerHTML = " > ";
            _0xADB0.appendChild(_0xADA3);
            var _0xADFE = document.createElement("span");
            _0xADFE.innerText = _0xADD7;
            _0xADFE.dataset.playerId = _0xADF1;
            _0xADFE.style.color = _0xADE4;
            _0xADFE.className = "chat-name";
            _0xADFE.oncontextmenu = _0xAF29;
            _0xADB0.appendChild(_0xADFE);
            var _0xAE4C = document.createElement("span");
            _0xAE4C.innerHTML = ": " + _0xB5C3(_0xADBD);
            _0xADB0.appendChild(_0xAE4C);
            _0xADCA(_0xAF77.WHISPER, _0xADB0)
        };
        _0xAFC5.prototype.handleSystemMsg = function (_0xADB0) {
            var _0xADA3 = _0xB715(_0xADB0);
            this.selfMsg(_0xADA3)
        };
        _0xAFC5.prototype.handleAuthenticated = function (_0xADB0) {
            var _0xADA3 = _0xADB0.getUint8(1);
            switch (_0xADA3) {
            case _0xADF1.SUCCESS:
                break;
            case _0xADF1.FAILURE:
                this.selfMsg("Invalid authentication token! Please logout and try again!");
                break
            };
            if (!this.spectate) {
                this.sendPacket(new _0xB59C.setName(this.name))
            } else {
                this.sendPacket(new _0xB59C.sendSpectate())
            }
        };
        _0xAFC5.prototype.handleProfile = function (_0xADBD) {
            var _0xADA3 = _0xB722(_0xADBD);
            var _0xADB0 = JSON.parse(_0xADA3);
            _0xB430(_0xADB0, _0xB4CC, true)
        };
        _0xAFC5.prototype.handleInvite = function (_0xADBD) {
            if (_0xB575.cAutoDecline) {
                _0xB66C.sendPacket(new _0xB59C.sendInviteResponse(false))
            } else {
                var _0xADB0 = _0xB5D0(_0xB715(_0xADBD));
                var _0xADA3 = document.getElementById("popup-party-text");
                _0xADA3.innerText = _0xADB0 + " has invited you to a party.";
                _0xB88E($("#popup-party"))
            }
        };
        _0xAFC5.prototype.handlePartyInfo = function (_0xAE0B) {
            var _0xADD7 = {};
            var _0xADF1 = [];
            var _0xADE4 = -1;
            var _0xADA3 = _0xAE0B.getUint16(_0xAE0B.offset, true);
            _0xAE0B.offset += 2;
            for (var _0xADBD = 0; _0xADBD < _0xADA3; _0xADBD++) {
                var _0xADCA = {};
                var _0xADB0 = _0xAE0B.getUint8(_0xAE0B.offset++);
                _0xADCA.id = _0xAE0B.getUint16(_0xAE0B.offset, true);
                _0xADD7[_0xADCA.id] = _0xADBD;
                _0xAE0B.offset += 2;
                if (_0xADB0 == 1) {
                    _0xADE4 = _0xADCA.id;
                    _0xADCA.isLeader = true
                } else {
                    _0xADCA.isLeader = false
                };
                _0xADCA.name = _0xB715(_0xAE0B) || "An unnamed cell";
                _0xADCA.x = 0;
                _0xADCA.y = 0;
                _0xADCA.x_ = 0;
                _0xADCA.y_ = 0;
                _0xADCA.score = 0;
                _0xADCA.cache = -1;
                _0xADCA.team = 0;
                _0xADCA.state = _0xB611.UNKNOWN;
                if (this.partyIds[_0xADCA.id] != null) {
                    var _0xADFE = this.party[this.partyIds[_0xADCA.id]];
                    _0xADCA.x = _0xADFE.x;
                    _0xADCA.y = _0xADFE.y;
                    _0xADCA.x_ = _0xADFE.x_;
                    _0xADCA.y_ = _0xADFE.y_;
                    _0xADCA.state = _0xADFE.state;
                    _0xADCA.score = _0xADFE.score;
                    _0xADCA.cache = _0xADFE.cache;
                    _0xADCA.mmColor = _0xADFE.mmColor
                } else {
                    _0xADCA.mmColor = _0xB21B(_0xADCA.id)
                };
                _0xADF1.push(_0xADCA)
            };
            this.party = _0xADF1;
            this.partyIds = _0xADD7;
            if (this.partyLeader != _0xADE4) {
                this.partyLeader = _0xADE4;
                if (_0xB07B.css("display") == "block") {
                    ScrimmageHelper.checkLeader()
                }
            };
            if (_0xADA3 > 0) {
                this.drawParty()
            } else {
                this.clearParty()
            }
        };
        _0xAFC5.prototype.handlePartyData = function (_0xADCA) {
            var _0xADA3 = _0xADCA.getUint16(_0xADCA.offset, true);
            _0xADCA.offset += 2;
            if (_0xADA3 != this.party.length) {
                return
            };
            for (var _0xADB0 = 0; _0xADB0 < _0xADA3; _0xADB0++) {
                var _0xADBD = this.party[_0xADB0];
                _0xADBD.state = _0xADCA.getUint8(_0xADCA.offset++);
                if (_0xADBD.state === _0xB611.ALIVE) {
                    _0xADBD.x_ = _0xADCA.getInt16(_0xADCA.offset, true);
                    _0xADBD.y_ = _0xADCA.getInt16(_0xADCA.offset + 2, true);
                    _0xADBD.score = _0xADCA.getInt32(_0xADCA.offset + 4, true);
                    _0xADCA.offset += 8
                }
            };
            this.drawParty()
        };
        _0xAFC5.prototype.handlePartyJoinCode = function (_0xADBD) {
            var _0xADA3 = _0xB722(_0xADBD);
            this.partyCode = _0xB722(_0xADBD);
            if (this.partyCode.length != 0) {
                this.selfMsgWithJoinCode(_0xADA3, this.partyCode);
                $("#popup-party-code-content input").val(this.partyCode);
                $("#popup-party-code").show();
                var _0xADB0 = "#" + this.currentServerName + "&" + this.partyCode;
                window.history.pushState("page", "", _0xADB0)
            } else {
                this.selfMsg(_0xADA3);
                this.partyCode = null;
                window.history.pushState("page", "", " ")
            }
        };
        _0xAFC5.prototype.handleStats = function (_0xADBD) {
            var _0xADA3 = _0xADBD.getUint16(_0xADBD.offset, true);
            _0xADBD.offset += 2;
            this.stats.name = _0xB715(_0xADBD) || "An unnamed cell";
            this.stats.alive += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.eatenFood += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.eatenEject += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.eatenVirus += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.eatenPlayer += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.gainFood += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.gainEject += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.gainVirus += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            this.stats.gainPlayer += _0xADBD.getUint32(_0xADBD.offset, true);
            _0xADBD.offset += 4;
            var _0xADB0 = $("#main-stats");
            _0xADB0.empty();
            _0xADB0.append("<span>Name: " + this.stats.name + " (" + _0xADA3 + ")</span><br>");
            _0xADB0.append("<span>Alive: " + _0xB1B3(this.stats.alive) + "</span><br>");
            _0xADB0.append("<span>Food eaten: " + this.stats.eatenFood + " (" + this.stats.gainFood + ")</span><br>");
            _0xADB0.append("<span>Ejected mass eaten: " + this.stats.eatenEject + " (" + this.stats.gainEject + ")</span><br>");
            _0xADB0.append("<span>Viruses eaten: " + this.stats.eatenVirus + " (" + this.stats.gainVirus + ")</span><br>");
            _0xADB0.append("<span>Player cells eaten: " + this.stats.eatenPlayer + " (" + this.stats.gainPlayer + ")</span><br>")
        };
        _0xAFC5.prototype.showSubPanel = function (_0xADB0) {
            var _0xADA3 = _0xADB0.getUint8(_0xADB0.offset++) == 1;
            this.subPanelOverride = _0xADA3;
            _0xB9ED();
            if (_0xADA3) {
                if (!this.serverData.hasSentSubPanel) {
                    _0xB9E0();
                    this.serverData.hasSentSubPanel = true
                };
                document.body.classList.add("hide-captcha-badge")
            }
        };
        _0xAFC5.prototype.updateSubPanel = function (_0xADA3) {
            if (_0xBA07) {
                _0xB3EF(_0xBA07.uid)
            }
        };
        _0xAFC5.prototype.updateSpectators = function () {
            _0xB0D6.spectatorCount.html(this.spectators)
        };
        _0xAFC5.prototype.handleAddBuff = function (_0xADCA) {
            var _0xADA3 = _0xADCA.getUint8(_0xADCA.offset++);
            var _0xADBD = _0xADCA.getUint8(_0xADCA.offset++);
            var _0xADB0 = _0xADCA.getFloat64(_0xADCA.offset, true);
            _0xADCA.offset += 8;
            this.buffHolder.onAddBuff(_0xADA3, _0xADBD, _0xADB0)
        };
        _0xAFC5.prototype.handleRemoveBuff = function (_0xADB0) {
            var _0xADA3 = _0xADB0.getUint8(_0xADB0.offset++);
            this.buffHolder.onRemoveBuff(_0xADA3)
        };
        _0xAFC5.prototype.handleClearBuffs = function (_0xADB0) {
            var _0xADA3 = _0xADB0.getUint8(_0xADB0.offset++) == 1 ? true : false;
            this.buffHolder.clearBuffs(_0xADA3)
        };
        _0xAFC5.prototype.sortCells = function () {
            _0xAF02.children.sort(function (_0xADA3, _0xADB0) {
                return _0xADA3.parentCell.size - _0xADB0.parentCell.size
            });
            this.updateScorePanel()
        };
        _0xAFC5.prototype.updateScorePanel = function () {
            var _0xADB0 = 0;
            var _0xADA3 = 0;
            for (var _0xADBD in this.myCells) {
                var _0xADCA = this.myCells[_0xADBD];
                _0xADB0 += _0xADCA.getRealMass();
                _0xADA3++
            };
            if (_0xADB0 > this.score) {
                this.score = _0xADB0;
                _0xB0D6.playerScore.html(this.score.toLocaleString())
            };
            this.updateCellCounter(_0xADA3)
        };
        _0xAFC5.prototype.updateCellCounter = function (_0xADA3, _0xADB0) {
            if (_0xB0D6.playerCellCount != _0xADA3 || _0xADB0) {
                _0xB0D6.playerCellCount = _0xADA3;
                _0xB0D6.playerCells.html(_0xADA3 + "/" + this.getServerMaxCells());
                if (!_0xB575.cColoredCellCount) {
                    var _0xADBD = _0xADA3 / this.getServerMaxCells();
                    if (_0xADBD >= 1.0) {
                        _0xB0D6.playerCells.css({
                            "color": _0xB96B.uiGameColorError
                        })
                    } else {
                        if (_0xADBD >= 0.5) {
                            _0xB0D6.playerCells.css({
                                "color": _0xB96B.uiGameColorWarning
                            })
                        } else {
                            _0xB0D6.playerCells.css({
                                "color": _0xB96B.uiGameColorSuccess
                            })
                        }
                    }
                } else {
                    _0xB0D6.playerCells.css({
                        "color": _0xB96B.uiForegroundColor
                    })
                }
            }
        };
        _0xAFC5.prototype.drawParty = function () {
            if (this.party.length == 0) {
                return
            };
            if (_0xB575.cHidePartyPanel) {
                _0xB0D6.partyPanel.css("display", "none")
            } else {
                if (_0xB0D6.partyPanel.css("display") == "none" && _0xB2F8.css("display") != "none") {
                    _0xB0D6.partyPanel.css("display", "block")
                }
            };
            var _0xADFE = document.getElementById("party-canvas");
            var _0xADA3 = _0xADFE.getContext("2d");
            _0xADA3.font = "16px Calibri";
            var _0xADBD = 0;
            var _0xADCA = 0;
            var _0xAE18 = 0;
            for (var _0xADB0 = 0; _0xADB0 < this.party.length; _0xADB0++) {
                var _0xADD7 = this.party[_0xADB0];
                if (_0xADD7.cache == -1) {
                    _0xADD7.cache = _0xADA3.measureText((_0xADB0 + 1) + ". " + _0xADD7.name).width
                };
                if (_0xADD7.cache > _0xADBD) {
                    _0xADBD = _0xADD7.cache
                };
                if (_0xADD7.state === _0xB611.ALIVE || _0xADD7.state === _0xB611.UNKNOWN) {
                    _0xADD7.scoreText = _0xADD7.score.toLocaleString();
                    _0xAE18 += _0xADD7.score
                } else {
                    if (_0xADD7.state === _0xB611.DEAD) {
                        _0xADD7.scoreText = "DEAD"
                    } else {
                        if (_0xADD7.state === _0xB611.SPECTATE) {
                            _0xADD7.scoreText = "SPEC"
                        }
                    }
                };
                var _0xAE0B = _0xADA3.measureText(_0xADD7.scoreText).width;
                if (_0xAE0B > _0xADCA) {
                    _0xADCA = _0xAE0B
                }
            };
            var _0xAE25 = _0xAE18.toLocaleString();
            _0xADCA = Math.max(_0xADCA, _0xADA3.measureText(_0xAE25).width);
            _0xADFE.width = 15 + _0xADBD + 50 + _0xADCA;
            _0xADFE.height = (20 * this.party.length) + 5 + (this.party.length > 1 ? 20 : 0);
            _0xADA3.font = "16px Calibri";
            var _0xADF1 = 20;
            var _0xADE4 = 5 + _0xADBD + 50;
            for (var _0xADB0 = 0; _0xADB0 < this.party.length; _0xADB0++) {
                var _0xADD7 = this.party[_0xADB0];
                _0xADA3.fillStyle = _0xADD7.isLeader ? _0xB96B.uiPartyLeaderColor : _0xB96B.uiForegroundColor;
                _0xADA3.fillText((_0xADB0 + 1) + ". " + _0xADD7.name, 5, _0xADF1);
                _0xADA3.fillText(_0xADD7.scoreText, _0xADE4, _0xADF1);
                _0xADF1 += 20
            };
            if (this.party.length > 1) {
                _0xADA3.fillStyle = _0xB96B.uiForegroundColor;
                _0xADA3.fillText("Total:", 5, _0xADF1);
                _0xADA3.fillText(_0xAE25, _0xADE4, _0xADF1)
            }
        };
        _0xAFC5.prototype.handleShowScrimmageMenu = function () {
            _0xB4CC.stop(true, false);
            _0xB4CC.css("display", "none");
            _0xB7A4.css("display", "block");
            $("#scrimmage-btn-leave").css("display", "none");
            _0xB66C.serverData.border.enabled = false
        };
        _0xAFC5.prototype.handleQueueData = function (_0xADF1) {
            var _0xADBD = _0xB722(_0xADF1);
            var _0xADE4 = _0xADF1.getUint32(_0xADF1.offset, true);
            _0xADF1.offset += 4;
            var _0xADD7 = _0xADF1.offset < _0xADF1.byteLength ? _0xADF1.getUint8(_0xADF1.offset) : -1;
            var _0xADB0 = document.getElementById("leaderboard-canvas");
            var _0xADA3 = _0xADB0.getContext("2d");
            _0xB3C8.html("Queue");
            _0xADB0.width = 200;
            _0xADB0.height = (20 * (2 + (_0xADD7 != -1 ? 1 : 0))) + 5;
            _0xADA3.font = "16px Calibri";
            var _0xADCA = 20;
            _0xADA3.fillStyle = _0xB96B.uiForegroundColor;
            _0xADA3.fillText("Mode: " + _0xADBD, 5, _0xADCA);
            _0xADCA += 20;
            _0xADA3.fillText("Time: " + _0xB1B3(_0xADE4), 5, _0xADCA);
            if (_0xADD7 != -1) {
                _0xADCA += 20;
                _0xADA3.fillText("Queued players: " + _0xADD7, 5, _0xADCA)
            }
        };
        _0xAFC5.prototype.handleQueueLeave = function (_0xADCA) {
            var _0xADBD = _0xB722(_0xADCA);
            var _0xADB0 = document.getElementById("leaderboard-canvas");
            var _0xADA3 = _0xADB0.getContext("2d");
            _0xADB0.width = 0;
            _0xADB0.height = 0;
            this.selfMsg("You have left the queue for [" + _0xADBD + "]")
        };
        _0xAFC5.prototype.handleMatchState = function (_0xADB0) {
            var _0xADA3 = _0xADB0.byteLength == 1 ? 0 : _0xADB0.getUint8(_0xADB0.offset++);
            if (_0xADA3 == 0) {
                this.selfMsg("A match has been found. Good luck and have fun!");
                _0xB80C()
            } else {
                if (_0xADA3 == 1) {
                    $("#scrimmage-btn-leave").css("display", "block")
                }
            }
        };
        _0xAFC5.prototype.handleScrimmageData = function (_0xAE32) {
            var _0xADA3 = _0xAE32.getUint8(_0xAE32.offset++);
            var _0xAE0B = $("#scrimmage-mode-select");
            var _0xADFE = $("#scrimmage-mode-info");
            var _0xAE25 = parseInt(_0xAE0B.val());
            _0xAE0B.empty();
            _0xADFE.empty();
            var _0xADB0 = {};
            while (_0xADA3 > 0) {
                var _0xADD7 = _0xAE32.getUint8(_0xAE32.offset++);
                var _0xAE18 = _0xB722(_0xAE32);
                var _0xADE4 = _0xB722(_0xAE32);
                var _0xADBD = document.createElement("option");
                _0xADBD.innerHTML = _0xAE18;
                _0xADBD.value = _0xADD7;
                _0xAE0B.append(_0xADBD);
                _0xADBD = document.createElement("div");
                _0xADBD.innerHTML = _0xADE4;
                _0xADBD.id = "scrimmage-info-" + _0xADD7;
                _0xADBD.style.display = "none";
                _0xADFE.append(_0xADBD);
                _0xADB0[_0xADD7] = true;
                _0xADA3--
            };
            _0xB797 = {
                "modes": {},
                "sizes": {},
                "maps": []
            };
            if (_0xAE32.byteLength - 1 > _0xAE32.offset) {
                _0xADA3 = _0xAE32.getUint8(_0xAE32.offset++);
                while (_0xADA3 > 0) {
                    var _0xADD7 = _0xAE32.getUint8(_0xAE32.offset++);
                    var _0xAE18 = _0xB722(_0xAE32);
                    _0xB797.modes[_0xADD7] = {
                        "id": _0xADD7,
                        "name": _0xAE18
                    };
                    _0xADA3--
                };
                _0xADA3 = _0xAE32.getUint8(_0xAE32.offset++);
                while (_0xADA3 > 0) {
                    var _0xADD7 = _0xAE32.getUint8(_0xAE32.offset++);
                    var _0xAE18 = _0xB722(_0xAE32);
                    _0xB797.sizes[_0xADD7] = {
                        "id": _0xADD7,
                        "name": _0xAE18
                    };
                    _0xADA3--
                };
                _0xADA3 = _0xAE32.getUint8(_0xAE32.offset++);
                while (_0xADA3 > 0) {
                    var _0xAE18 = _0xB722(_0xAE32);
                    var _0xADF1 = {
                        "name": _0xAE18,
                        "startmass": 0,
                        "teams": 0,
                        "modes": [],
                        "sizes": []
                    };
                    var _0xADCA = _0xAE32.getUint8(_0xAE32.offset++);
                    while (_0xADCA > 0) {
                        _0xADF1.modes.push(_0xAE32.getUint8(_0xAE32.offset++));
                        _0xADCA--
                    };
                    var _0xADCA = _0xAE32.getUint8(_0xAE32.offset++);
                    while (_0xADCA > 0) {
                        _0xADF1.sizes.push(_0xAE32.getUint8(_0xAE32.offset++));
                        _0xADCA--
                    };
                    _0xADF1.startmass = _0xAE32.getUint16(_0xAE32.offset, true);
                    _0xAE32.offset += 2;
                    _0xADF1.respawnDelay = _0xAE32.getInt16(_0xAE32.offset, true);
                    _0xAE32.offset += 2;
                    _0xADF1.teams = _0xAE32.getUint8(_0xAE32.offset++);
                    _0xB797.maps.push(_0xADF1);
                    _0xADA3--
                }
            };
            $("#scrimmage-custom-btn-container").css("display", _0xB797.maps.length == 0 ? "none" : "block");
            $("#scrimmage-map").empty();
            for (var _0xADCA = 0; _0xADCA < _0xB797.maps.length; _0xADCA++) {
                $("#scrimmage-map").append("<option value='" + _0xADCA + "'>" + _0xB797.maps[_0xADCA].name + "</option>")
            };
            if (_0xADB0[_0xAE25] != null) {
                _0xAE0B.val(_0xAE25);
                _0xAE0B.trigger("change")
            } else {
                _0xAE0B.prop("selectedIndex", 0);
                _0xAE0B.trigger("change")
            }
        };
        _0xAFC5.prototype.handleCustomGameUpdate = function (_0xADD7) {
            var _0xADBD = _0xADD7.getUint8(_0xADD7.offset++);
            switch (_0xADBD) {
            case _0xB06E.MAP:
                ScrimmageHelper.updateMap(_0xADD7.getUint8(_0xADD7.offset++));
                break;
            case _0xB06E.MODE:
                ScrimmageHelper.updateMode(_0xADD7.getUint8(_0xADD7.offset++));
                break;
            case _0xB06E.SIZE:
                ScrimmageHelper.updateSize(_0xADD7.getUint8(_0xADD7.offset++));
                break;
            case _0xB06E.STARTMASS:
                ScrimmageHelper.updateStartMass(_0xADD7.getUint16(_0xADD7.offset, true));
                _0xADD7.offset += 2;
                break;
            case _0xB06E.LOCK:
                ScrimmageHelper.updateLock(_0xADD7.getUint8(_0xADD7.offset++) === 1 ? true : false);
                break;
            case _0xB06E.PLAYER_UPDATE:
                var _0xADB0 = _0xADD7.getUint8(_0xADD7.offset++);
                var _0xADCA = _0xADD7.getUint8(_0xADD7.offset++);
                _0xB66C.party[_0xADB0].team = _0xADCA;
                ScrimmageHelper.updatePlayerById(_0xADB0);
                break;
            case _0xB06E.PLAYER_LIST:
                var _0xADA3 = _0xADD7.getUint8(_0xADD7.offset++);
                var _0xADB0 = 0;
                while (_0xADA3 > 0) {
                    _0xB66C.party[_0xADB0].team = _0xADD7.getUint8(_0xADD7.offset++);
                    _0xADA3--;
                    _0xADB0++
                };
                ScrimmageHelper.updatePlayers();
                break;
            case _0xB06E.VIRUS_DENSITY:
                ScrimmageHelper.updateVirusDensity(_0xADD7.getUint16(_0xADD7.offset, true));
                _0xADD7.offset += 2;
                break;
            case _0xB06E.RESPAWN_DELAY:
                ScrimmageHelper.updateRespawnDelay(_0xADD7.getInt16(_0xADD7.offset, true));
                _0xADD7.offset += 2;
                break;
            case _0xB06E.AUTOSPLIT:
                ScrimmageHelper.updateAutoSplit(_0xADD7.getUint8(_0xADD7.offset++) === 1 ? true : false);
                break;
            case _0xB06E.PUBLIC:
                ScrimmageHelper.updatePublic(_0xADD7.getUint8(_0xADD7.offset++) === 1 ? true : false);
                break;
            case _0xB06E.PASSWORD:
                ScrimmageHelper.updatePassword(_0xADD7.getUint8(_0xADD7.offset++) === 1 ? true : false);
                break;
            case _0xB06E.NAME:
                ScrimmageHelper.updateName(_0xB715(_0xADD7));
                break
            }
        };
        _0xAFC5.prototype.handleCustomGameShow = function (_0xAE3F) {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-custom").css("display", "block");
            var _0xADF1 = _0xB715(_0xAE3F);
            var _0xADD7 = _0xAE3F.getUint8(_0xAE3F.offset++);
            var _0xADE4 = _0xAE3F.getUint8(_0xAE3F.offset++);
            var _0xAE25 = _0xAE3F.getUint8(_0xAE3F.offset++);
            var _0xAE32 = _0xAE3F.getUint16(_0xAE3F.offset, true);
            _0xAE3F.offset += 2;
            var _0xAE4C = _0xAE3F.getUint16(_0xAE3F.offset, true);
            _0xAE3F.offset += 2;
            var _0xAE18 = _0xAE3F.getInt16(_0xAE3F.offset, true);
            _0xAE3F.offset += 2;
            var _0xADB0 = _0xAE3F.getUint8(_0xAE3F.offset++) === 1 ? true : false;
            var _0xADCA = _0xAE3F.getUint8(_0xAE3F.offset++) === 1 ? true : false;
            var _0xAE0B = _0xAE3F.getUint8(_0xAE3F.offset++) === 1 ? true : false;
            var _0xADFE = _0xAE3F.getUint8(_0xAE3F.offset++) === 1 ? true : false;
            var _0xADA3 = _0xAE3F.getUint8(_0xAE3F.offset++);
            var _0xADBD = 0;
            while (_0xADA3 > 0) {
                _0xB66C.party[_0xADBD].team = _0xAE3F.getUint8(_0xAE3F.offset++);
                _0xADA3--;
                _0xADBD++
            };
            ScrimmageHelper.updateName(_0xADF1);
            ScrimmageHelper.updateMap(_0xADD7);
            ScrimmageHelper.updateMode(_0xADE4);
            ScrimmageHelper.updateSize(_0xAE25);
            ScrimmageHelper.updateStartMass(_0xAE32);
            ScrimmageHelper.updateVirusDensity(_0xAE4C);
            ScrimmageHelper.updateLock(_0xADCA);
            ScrimmageHelper.updateRespawnDelay(_0xAE18);
            ScrimmageHelper.updateAutoSplit(_0xADB0);
            ScrimmageHelper.updatePublic(_0xAE0B);
            ScrimmageHelper.updatePassword(_0xADFE);
            ScrimmageHelper.updatePlayers();
            ScrimmageHelper.checkLeader()
        };
        _0xAFC5.prototype.handleCustomGameLeave = function () {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-menu").css("display", "block")
        };
        _0xAFC5.prototype.handleShowCustomGameLobbies = function (_0xADD7) {
            $(".scrimmage-full").css("display", "none");
            $("#scrimmage-lobbies").css("display", "block");
            _0xB088 = {};
            var _0xADCA = $("#scrimmage-lobbies-tbody");
            _0xADCA.empty();
            while (true) {
                var _0xADBD = _0xADD7.getUint32(_0xADD7.offset, true);
                _0xADD7.offset += 4;
                if (_0xADBD == 0) {
                    break
                };
                var _0xADA3 = {};
                _0xADA3.id = _0xADBD;
                _0xADA3.name = _0xB715(_0xADD7);
                _0xADA3.leaderId = _0xADD7.getUint32(_0xADD7.offset);
                _0xADD7.offset += 4;
                _0xADA3.leaderName = _0xB715(_0xADD7) || "An unnamed cell";
                _0xADA3.map = _0xADD7.getUint8(_0xADD7.offset++);
                _0xADA3.mode = _0xADD7.getUint8(_0xADD7.offset++);
                _0xADA3.size = _0xADD7.getUint16(_0xADD7.offset, true);
                _0xADD7.offset += 2;
                _0xADA3.maxSize = _0xADD7.getUint16(_0xADD7.offset, true);
                _0xADD7.offset += 2;
                _0xADA3.hasPasscode = _0xADD7.getUint8(_0xADD7.offset++) == 1 ? true : false;
                _0xB088[_0xADA3.id] = _0xADA3;
                var _0xADB0 = _0xADA3.hasPasscode ? "<div class='scrimmage-lock'></div>" : "";
                _0xADCA.append("<tr partyId='" + _0xADA3.id + "'><td><span>" + _0xADB0 + _0xB5D0(_0xADA3.name) + "</span></td><td><span>" + _0xB5D0(_0xADA3.leaderName) + "</span></td><td><span>" + _0xB797.maps[_0xADA3.map].name + "</span></td><td><span>" + _0xB797.modes[_0xADA3.mode].name + "</span></td><td><span>" + _0xADA3.size + "/" + _0xADA3.maxSize + "</span></td></tr>")
            };
            $("#scrimmage-lobbies-tbody tr").on("click", function () {
                $(".custom-game-selected").removeClass("custom-game-selected");
                _0xB7D8 = $(this).attr("partyId");
                $(this).addClass("custom-game-selected")
            })
        };
        ScrimmageHelper = {
            updateName: function (_0xADA3) {
                $("#scrimmage-name").text(_0xADA3)
            },
            updateMap: function (_0xADB0) {
                $("#scrimmage-map option[value='" + _0xADB0 + "']").prop("selected", true);
                var _0xADBD = _0xB797.maps[_0xADB0];
                $("#scrimmage-mapmode").empty();
                for (var _0xADA3 = 0; _0xADA3 < _0xADBD.modes.length; _0xADA3++) {
                    var _0xADCA = _0xB797.modes[_0xADBD.modes[_0xADA3]];
                    $("#scrimmage-mapmode").append("<option value='" + _0xADA3 + "'>" + _0xADCA.name + "</option>")
                };
                $("#scrimmage-mapsize").empty();
                for (var _0xADA3 = 0; _0xADA3 < _0xADBD.sizes.length; _0xADA3++) {
                    var _0xADD7 = _0xB797.sizes[_0xADBD.sizes[_0xADA3]];
                    $("#scrimmage-mapsize").append("<option value='" + _0xADA3 + "'>" + _0xADD7.name + "</option>")
                };
                ScrimmageHelper.updateMode(0);
                ScrimmageHelper.updateSize(0);
                ScrimmageHelper.updateStartMass(_0xADBD.startmass);
                $("#scrimmage-startmass").attr("placeholder", _0xADBD.startmass);
                ScrimmageHelper.updateRespawnDelay(_0xADBD.respawnDelay);
                $("#scrimmage-map").attr("data", _0xADB0);
                _0xB66C.customGameMap = _0xADBD
            },
            updateMode: function (_0xADA3) {
                $("#scrimmage-mapmode option[value='" + _0xADA3 + "']").prop("selected", true);
                $("#scrimmage-mapmode").attr("data", _0xADA3)
            },
            updateSize: function (_0xADA3) {
                $("#scrimmage-mapsize option[value='" + _0xADA3 + "']").prop("selected", true);
                $("#scrimmage-mapsize").attr("data", _0xADA3)
            },
            updateStartMass: function (_0xADA3) {
                $("#scrimmage-startmass").val(_0xADA3);
                $("#scrimmage-startmass").attr("data", _0xADA3)
            },
            updateVirusDensity: function (_0xADA3) {
                $("#scrimmage-virusDensity").val(_0xADA3);
                $("#scrimmage-virusDensity").attr("data", _0xADA3)
            },
            updateRespawnDelay: function (_0xADA3) {
                $("#scrimmage-respawnDelay").val(_0xADA3);
                $("#scrimmage-respawnDelay").attr("data", _0xADA3)
            },
            updateAutoSplit: function (_0xADA3) {
                $("#scrimmage-autoSplit").prop("checked", _0xADA3)
            },
            updatePublic: function (_0xADA3) {
                $("#scrimmage-public").prop("checked", _0xADA3)
            },
            updatePassword: function (_0xADA3) {
                $("#scrimmage-password").prop("checked", _0xADA3)
            },
            updateLock: function (_0xADA3) {
                $("#scrimmage-lockteams").prop("checked", _0xADA3);
                ScrimmageHelper.checkLock()
            },
            checkLock: function () {
                if ($("#scrimmage-lockteams").prop("checked") && !_0xB66C.isPartyLeader()) {
                    $("#cgp-" + _0xB66C.partyIndex).attr("disabled", "disabled")
                } else {
                    $("#cgp-" + _0xB66C.partyIndex).removeAttr("disabled")
                }
            },
            checkLeader: function () {
                if (_0xB66C.isPartyLeader()) {
                    $(".custom-game").removeAttr("disabled")
                } else {
                    $(".custom-game").attr("disabled", "disabled");
                    ScrimmageHelper.checkLock()
                }
            },
            updatePlayerById: function (_0xADA3) {
                var _0xADB0 = _0xB66C.party[_0xADA3];
                $("#cgp-" + _0xADA3 + " option[value='" + _0xADB0.team + "']").prop("selected", true);
                $("#cgp-name-" + _0xADA3).text(_0xADB0.name);
                $("#cgp-name-" + _0xADA3).css("color", _0xB061[_0xADB0.team])
            },
            updatePlayers: function () {
                $("#scrimmage-custom-players").empty();
                for (var _0xADA3 = 0; _0xADA3 < _0xB66C.party.length; _0xADA3++) {
                    var _0xADB0 = _0xB66C.party[_0xADA3];
                    if (_0xADB0.id == _0xB66C.playerId) {
                        _0xB66C.partyIndex = _0xADA3
                    };
                    $("#scrimmage-custom-players").append("<tr><td><span id='cgp-name-" + _0xADA3 + "'>" + _0xADB0.name + "</span></td>" + ScrimmageHelper.getTeamOptions(_0xADA3, _0xB66C.customGameMap.teams) + "</tr>");
                    $("#cgp-" + _0xADA3 + " option[value='" + _0xADB0.team + "']").prop("selected", true);
                    $("#cgp-name-" + _0xADA3).css("color", _0xB061[_0xADB0.team]);
                    $("#cgp-" + _0xADA3).on("change", function (_0xADB0) {
                        var _0xADBD = parseInt($(this).attr("id").match("\\d+")[0]);
                        var _0xADCA = $(this).find("option:selected").val();
                        $("#cgp-" + _0xADA3 + " option[value='" + $(this).attr("data") + "']").prop("selected", true);
                        _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.PLAYER_UPDATE, _0xADBD, _0xADCA))
                    })
                };
                ScrimmageHelper.checkLeader()
            },
            getTeamOptions: function (_0xADB0, _0xADCA) {
                var _0xADBD = "";
                if (_0xADCA != null && _0xADCA > 1) {
                    _0xADBD = "<td><select class='custom-game' id='cgp-" + _0xADB0 + "'><option value='0'>Spectator</option>";
                    for (var _0xADA3 = 1; _0xADA3 <= _0xADCA; _0xADA3++) {
                        _0xADBD += "<option value='" + _0xADA3 + "' class='t" + _0xADA3 + "'>" + _0xB7B1[_0xADA3] + "</option>"
                    };
                    _0xADBD += "</select></td>"
                };
                return _0xADBD
            }
        };

        function _0xAEC1(_0xADA3) {
            this.id = _0xADA3;
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
        _0xAEC1.prototype.setType = function (_0xADA3) {
            this.type = _0xADA3
        };
        _0xAEC1.prototype.setX = function (_0xADA3) {
            this.x_ = _0xADA3;
            this.x = _0xADA3
        };
        _0xAEC1.prototype.setY = function (_0xADA3) {
            this.y_ = _0xADA3;
            this.y = _0xADA3
        };
        _0xAEC1.prototype.updateX = function (_0xADA3) {
            this.x_ = _0xADA3
        };
        _0xAEC1.prototype.updateY = function (_0xADA3) {
            this.y_ = _0xADA3
        };
        _0xAEC1.prototype.setSize = function (_0xADA3) {
            this.size_ = _0xADA3;
            this.size = _0xADA3
        };
        _0xAEC1.prototype.getMass = function () {
            return (this.size * this.size) / 25 >> 0
        };
        _0xAEC1.prototype.getRealMass = function () {
            return (this.size_ * this.size_) / 25 >> 0
        };
        _0xAEC1.prototype.animate = function (_0xADA3) {
            this.x += ((this.x_ - this.x) * _0xADA3);
            this.y += ((this.y_ - this.y) * _0xADA3);
            this.size += ((this.size_ - this.size) * _0xADA3);
            this.steps--
        };
        _0xAEC1.prototype.getSizeCache = function () {
            var _0xADE4 = this.getMass();
            if (_0xADE4 != this.massLastAmount || this.massLastAmount < 0) {
                var _0xADF1;
                if (_0xB582.massType == 1) {
                    _0xADF1 = this.toShortString(_0xADE4)
                } else {
                    _0xADF1 = _0xADE4.toString()
                };
                var _0xAE0B = 0;
                var _0xADBD = 0;
                for (var _0xADCA = 0; _0xADCA < _0xADF1.length; _0xADCA++) {
                    var _0xADA3 = _0xADF1.charAt(_0xADCA);
                    var _0xADD7 = _0xB8B5.getNumber(_0xADA3);
                    _0xAE0B += _0xADD7.width - 2;
                    _0xADBD = Math.max(_0xADD7.height, _0xADBD)
                };
                if (this.cache == null) {
                    this.cache = _0xB645.RenderTexture.create(_0xAE0B, _0xADBD)
                } else {
                    if (_0xAE0B != this.cache.width || _0xADBD != this.cache.height) {
                        this.cache.destroy({
                            children: true,
                            texture: true,
                            baseTexture: true
                        });
                        this.cache = _0xB645.RenderTexture.create(_0xAE0B, _0xADBD)
                    }
                };
                var _0xADB0 = _0xB8B5.cacheContainer;
                var _0xADFE = 0;
                for (var _0xADCA = 0; _0xADCA < _0xADF1.length; _0xADCA++) {
                    var _0xADA3 = _0xADF1.charAt(_0xADCA);
                    var _0xADD7 = _0xB8B5.getSizeCacheSprite();
                    _0xADD7.texture = _0xB8B5.getNumber(_0xADA3).texture;
                    _0xADD7.position.x = _0xADFE;
                    _0xADB0.addChild(_0xADD7);
                    _0xADFE += _0xADD7.width - 2
                };
                _0xB652.renderer.render(_0xADB0, this.cache, true);
                _0xB8B5.clearCacheContainer();
                this.massLastAmount = _0xADE4
            };
            return this.cache
        };
        _0xAEC1.prototype.toShortString = function (_0xADB0) {
            if (_0xADB0 < 1000) {
                return _0xADB0.toString()
            } else {
                if (_0xADB0 < 1000000) {
                    var _0xADA3 = Math.floor(_0xADB0 / 100) / 10;
                    return _0xADA3.toFixed(1) + "K"
                } else {
                    if (_0xADB0 < 1000000000) {
                        var _0xADA3 = Math.floor(_0xADB0 / 100000) / 10;
                        return _0xADA3.toFixed(1) + "M"
                    } else {
                        if (_0xADB0 >= 1000000000) {
                            var _0xADA3 = Math.floor(_0xADB0 / 100000000) / 10;
                            return _0xADA3.toFixed(1) + "B"
                        }
                    }
                }
            };
            return _0xADB0.toString()
        };

        function _0xB8A8() {
            this.cache = {};
            this.cacheContainer = new _0xB645.Container();
            this.sprites = [];
            this.spritesIndex = 0;
            this.getNumber = function (_0xADA3) {
                return this.cache[_0xADA3]
            };
            this.clearCacheContainer = function () {
                while (this.cacheContainer.children[0]) {
                    this.cacheContainer.removeChild(this.cacheContainer.children[0])
                };
                this.spritesIndex = 0
            };
            this.getSizeCacheSprite = function () {
                while (this.spritesIndex >= this.sprites.length) {
                    this.sprites.push(new _0xB645.Sprite())
                };
                return this.sprites[this.spritesIndex++]
            };
            this.buildSizeCache = function () {
                var _0xADA3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "K", "B", "T"];
                for (var _0xADB0 of _0xADA3) {
                    var _0xADBD = new _0xB645.Text(_0xADB0, {
                        fontFamily: "Verdana",
                        fontWeight: "bold",
                        fontSize: 54,
                        fill: "#fff",
                        stroke: "black",
                        strokeThickness: _0xB582.textOutlineSize
                    });
                    this.cache[_0xADB0] = _0xADBD
                }
            }
        }
        const _0xB8B5 = new _0xB8A8();
        _0xAEC1.prototype.handleFood = function () {
            if (this.needsPixiUpdate) {
                while (this.container.children[0]) {
                    var _0xADA3 = this.container.children[0];
                    this.container.removeChild(_0xADA3);
                    _0xADA3.destroy()
                };
                var _0xADB0 = new _0xB645.Graphics();
                if (_0xB575.cThemeEnabled && _0xB054.length > 0) {
                    _0xADB0.beginFill(_0xB235(this.id))
                } else {
                    _0xADB0.beginFill(this.color)
                };
                _0xADB0.drawCircle(0, 0, 1);
                _0xADB0.endFill();
                _0xADB0.scale.set(6);
                this.container.addChild(_0xADB0);
                this.needsPixiUpdate = false
            };
            this.container.visible = (_0xB66C.scale > 0.12 || _0xB575.cDisableAutoNameHiding) && !_0xB575.cHideFood;
            this.container.position.set(this.x, this.y)
        };
        _0xAEC1.prototype.drawSpikeData = function (_0xADA3) {
            if (_0xADA3.spiked == 1) {
                if (this.spikeSprite == null) {
                    this.spikeSprite = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
                    this.spikeSprite.anchor.set(0.5);
                    this.spikeSprite.width = _0xAECE;
                    this.spikeSprite.height = _0xAECE;
                    this.container.addChildAt(this.spikeSprite, 0)
                };
                this.circle.visible = false;
                if (_0xB047.aCustomSpike) {
                    this.spikeSprite.texture = _0xB047.aCustomSpike
                } else {
                    this.spikeSprite.texture = _0xB903
                };
                this.spikeSprite.visible = true
            } else {
                if (_0xADA3.spiked == 2) {
                    if (this.spikeSprite == null) {
                        this.spikeSprite = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
                        this.spikeSprite.anchor.set(0.5);
                        this.spikeSprite.width = _0xAECE;
                        this.spikeSprite.height = _0xAECE;
                        this.container.addChildAt(this.spikeSprite, 0)
                    };
                    this.circle.visible = false;
                    if (_0xB047.aCustomMother) {
                        this.spikeSprite.texture = _0xB047.aCustomMother
                    } else {
                        this.spikeSprite.texture = _0xB910
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
        _0xAEC1.prototype.handle = function () {
            switch (this.type) {
            case 0:
                break;
            case 1:
                if (this.needsPixiUpdate) {
                    if (this.skin >= 0 && this.skin < _0xB131.length && _0xB131[this.skin].naturalHeight > 0) {
                        this.skinId = this.skin + ":" + this.color;
                        this.ejectedMassSprite = new _0xB645.Sprite(_0xB10A.getSkin(this));
                        this.ejectedMassSprite.anchor.set(0.5);
                        this.ejectedMassSprite.width = this.size * 2;
                        this.ejectedMassSprite.height = this.size * 2;
                        this.container.addChild(this.ejectedMassSprite)
                    } else {
                        var _0xADA3 = new _0xB645.Graphics();
                        _0xADA3.beginFill(this.color);
                        _0xADA3.drawCircle(0, 0, 8);
                        _0xADA3.endFill();
                        _0xADA3.scale.set(this.size / 8);
                        this.container.addChild(_0xADA3)
                    };
                    this.needsPixiUpdate = false
                };
                this.container.position.set(this.x, this.y);
                break;
            case 2:
                var _0xADCA = _0xB66C.playerRegistry.getPlayerById(this.playerId);
                var _0xADD7 = _0xB693.ALL;
                if (_0xB66C.playerId == this.playerId) {
                    _0xADD7 = _0xB693.SELF
                } else {
                    if (_0xB66C.partyIds[this.playerId] != null) {
                        _0xADD7 = _0xB693.PARTY
                    }
                };
                if (this.needsPixiUpdate) {
                    _0xADA3 = new _0xB645.Graphics();
                    _0xADA3.beginFill(_0xADCA.cellColor);
                    _0xADA3.drawCircle(0, 0, _0xAEE8);
                    _0xADA3.endFill();
                    this.container.addChild(_0xADA3);
                    this.circle = _0xADA3;
                    this.skinsContainer = new _0xB645.Container();
                    this.container.addChild(this.skinsContainer);
                    this.needsPixiSkinUpdate = true;
                    this.massSprite = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
                    this.container.addChild(this.massSprite);
                    if (_0xADCA.name.length > 0) {
                        var _0xADBD = _0xADCA.getNameCache(_0xADCA.cacheUpdate);
                        this.nameSprite = new _0xB645.Sprite(_0xADBD.texture);
                        this.nameSprite.visible = false;
                        this.container.addChild(this.nameSprite);
                        this.nameEffectSprite = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
                        this.nameSprite.addChild(this.nameEffectSprite)
                    };
                    this.drawSpikeData(_0xADCA);
                    this.needsPixiUpdate = false
                };
                this.skinsContainer.visible = _0xB582.levelSkins >= _0xADD7 && _0xADCA.spiked == 0;
                if (this.skinsContainer.visible) {
                    var _0xADFE = _0xADCA.getSkin();
                    if (_0xADFE != null) {
                        if (this.needsPixiSkinUpdate) {
                            this.skinSprite = new _0xB645.Sprite(_0xB645.Texture.EMPTY);
                            this.skinSprite.anchor.set(0.5);
                            this.skinSprite.width = _0xAECE;
                            this.skinSprite.height = _0xAECE;
                            this.skinsContainer.addChild(this.skinSprite);
                            this.needsPixiSkinUpdate = false
                        };
                        if (!_0xADFE.isGif) {
                            if (_0xADFE !== this.skinSprite.texture) {
                                this.skinSprite.texture = _0xADFE
                            }
                        } else {
                            this.skinSprite.texture = _0xADFE.getTexture()
                        }
                    }
                };
                if (_0xADCA.cacheUpdate) {
                    if (this.nameSprite) {
                        this.nameSprite.texture = _0xADCA.getNameCache(_0xADCA.cacheUpdate).texture;
                        this.nameSprite.texture.update()
                    };
                    this.drawSpikeData(_0xADCA)
                };
                var _0xADE4 = 4 / this.size;
                var _0xAE0B = Math.max(_0xADE4, 0.16) / 2;
                var _0xADF1 = _0xB66C.scale >= _0xADE4 * 4 || _0xB575.cDisableAutoNameHiding;
                if (this.nameSprite) {
                    this.nameSprite.visible = _0xB582.levelNames >= _0xADD7 && _0xADF1;
                    if (this.nameSprite.visible) {
                        this.nameSprite.scale.set(_0xAE0B);
                        this.nameSprite.x = -(this.nameSprite.width / 2);
                        if (!_0xADCA.lowerName) {
                            this.nameSprite.y = -Math.floor(this.nameSprite.height / 2)
                        } else {
                            this.nameSprite.y = _0xAEF5 - Math.floor(this.nameSprite.height / 2)
                        };
                        if (_0xADCA.effect == 1 && _0xB50D[0] != null) {
                            var _0xAE18 = _0xB50D[0].getTexture();
                            this.nameEffectSprite.scale.set(this.nameSprite.texture.width / _0xAE18.width, this.nameSprite.texture.height / _0xAE18.height);
                            this.nameEffectSprite.texture = _0xAE18
                        }
                    }
                };
                if (_0xB575.cShowMass && _0xADD7 <= _0xB693.PARTY && _0xADF1) {
                    var _0xADB0 = this.getSizeCache();
                    this.massSprite.texture = _0xADB0;
                    this.massSprite.scale.set(_0xAE0B);
                    this.massSprite.x = -(this.massSprite.width / 2);
                    if (this.nameSprite != null) {
                        this.massSprite.y = this.nameSprite.y + this.nameSprite.height
                    } else {
                        this.massSprite.y = -Math.floor(this.massSprite.height / 2)
                    };
                    this.massSprite.visible = true
                } else {
                    this.massSprite.visible = false
                };
                if ((_0xADCA.flags & 4) == 4) {
                    if (!this.debuffSprite) {
                        this.debuffSprite = new _0xB645.Sprite(_0xB6AD);
                        this.debuffSprite.anchor.set(0.5);
                        this.debuffSprite.width = _0xAEDB;
                        this.debuffSprite.height = _0xAEDB;
                        this.container.addChild(this.debuffSprite)
                    }
                } else {
                    if (this.debuffSprite) {
                        this.debuffSprite.parent.removeChild(this.debuffSprite);
                        this.debuffSprite.destroy();
                        this.debuffSprite = null
                    }
                };
                if ((_0xADCA.flags & 1) == 1) {
                    if (!this.shieldSprite) {
                        this.shieldSprite = new _0xB645.Sprite(_0xB6BA);
                        this.shieldSprite.anchor.set(0.5);
                        this.shieldSprite.width = _0xAEDB;
                        this.shieldSprite.height = _0xAEDB;
                        this.container.addChild(this.shieldSprite)
                    }
                } else {
                    if (this.shieldSprite) {
                        this.shieldSprite.parent.removeChild(this.shieldSprite);
                        this.shieldSprite.destroy();
                        this.shieldSprite = null
                    }
                };
                this.container.scale.set(this.size / _0xAEE8);
                this.container.position.set(this.x, this.y);
                break;
            case 3:
                if (this.needsPixiUpdate) {
                    if (!this.sprite) {
                        this.sprite = new _0xB645.Sprite();
                        this.sprite.anchor.set(0.5);
                        this.sprite.width = 128;
                        this.sprite.height = 128;
                        this.container.addChild(this.sprite)
                    };
                    if (_0xB047.aCustomSpike) {
                        this.sprite.texture = _0xB047.aCustomSpike
                    } else {
                        this.sprite.texture = _0xB903
                    };
                    this.needsPixiUpdate = false
                };
                this.container.scale.set(this.size / 64);
                this.container.position.set(this.x, this.y);
                break;
            case 4:
                if (this.needsPixiUpdate) {
                    if (!this.sprite) {
                        this.sprite = new _0xB645.Sprite();
                        this.container.addChild(this.sprite)
                    };
                    if (_0xB047.aCustomMother) {
                        this.sprite.texture = _0xB047.aCustomMother
                    } else {
                        this.sprite.texture = _0xB910
                    };
                    if (_0xB14B.enabled && _0xB14B.motherCustomEnabled && !_0xB575.cDisableEventSkins && !_0xB047.aCustomMother) {
                        _0xB14B.motherCustom(this)
                    } else {
                        this.setDefaultSpriteAnchor()
                    };
                    this.needsPixiUpdate = false
                };
                if (!_0xB047.aCustomMother && _0xB14B.enabled) {
                    if (this.size >= 100 && !_0xB575.cDisableEventSkins) {
                        this.sprite.texture = _0xB91D
                    } else {
                        this.sprite.texture = _0xB910
                    }
                };
                this.container.scale.set(this.size / 64);
                this.container.position.set(this.x, this.y);
                break;
            case 5:
                if (this.needsPixiUpdate) {
                    this.sprite = new _0xB645.Sprite(_0xB6D4[this.buff].texture);
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
        _0xAEC1.prototype.setDefaultSpriteAnchor = function () {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128
        };
        _0xAEC1.prototype.onCreate = function () {
            if (!this.container) {
                this.container = new _0xB645.Container();
                this.container.parentCell = this;
                this.needsPixiUpdate = true;
                if (this.type != 0) {
                    _0xAF02.addChild(this.container)
                } else {
                    _0xB17F.addChild(this.container)
                }
            }
        };
        _0xAEC1.prototype.onDelete = function () {
            _0xB10A.onDelete(this);
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

        function _0xB686() {
            this.bucket = {};
            this.defaultData;
            this.updatedPlayers = [];
            this.init = function () {
                this.defaultData = new _0xB679(0);
                this.defaultData.name = "";
                this.defaultData.cellColor = 0xaaaaaa
            };
            this.add = function (_0xADA3) {
                this.bucket[_0xADA3.id] = _0xADA3
            };
            this.remove = function (_0xADA3) {
                this.bucket[_0xADA3].onDelete();
                delete this.bucket[_0xADA3]
            };
            this.clear = function () {
                for (var _0xADA3 in this.bucket) {
                    this.remove(_0xADA3)
                }
            };
            this.getPlayer = function (_0xADA3) {
                return this.bucket[_0xADA3]
            };
            this.getPlayerById = function (_0xADB0) {
                var _0xADA3 = this.bucket[_0xADB0];
                return _0xADA3 != null ? _0xADA3 : this.defaultData
            };
            this.updatePlayer = function (_0xADA3) {
                _0xADA3.cacheUpdate = true;
                this.updatedPlayers.push(_0xADA3)
            };
            this.handleUpdatedPlayers = function () {
                while (this.updatedPlayers.length > 0) {
                    var _0xADA3 = this.updatedPlayers.shift();
                    _0xADA3.cacheUpdate = false
                }
            };
            this.init()
        }

        function _0xB679(_0xADA3) {
            this.id = _0xADA3;
            this.name;
            this.skin;
            this.skinCache;
            this.cellColor;
            this.nameColor = "#fff";
            this.flags = 0;
            this.effect = 0;
            this.nameFont = 0;
            this.lowerName = false;
            this.nameCache = null;
            this.cacheUpdate = false;
            this.spiked = 0;
            this.setFlags = function (_0xADA3) {
                this.flags = _0xADA3;
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
            this.parseEffect = function (_0xADA3) {
                if (_0xADA3 >= 64) {
                    _0xADA3 -= 64;
                    this.lowerName = true
                } else {
                    this.lowerName = false
                };
                this.effect = _0xADA3
            };
            this.getNameCache = function (_0xADA3) {
                if (_0xADA3 || this.nameCache == null) {
                    var _0xADB0 = _0xB20E(this.nameFont);
                    var _0xADCA, _0xADBD;
                    if (_0xADB0 == _0xB0AF) {
                        _0xADCA = "bold";
                        _0xADBD = _0xB582.textOutlineSize
                    } else {
                        _0xADCA = "normal";
                        _0xADBD = 9
                    };
                    if (!this.nameCache || _0xADB0 != _0xB0AF) {
                        this.nameCache = new _0xB645.Text(this.name, {
                            fontFamily: _0xADB0.font,
                            fontWeight: _0xADCA,
                            fontSize: _0xADB0.size,
                            fill: this.nameColor,
                            stroke: _0xADB0.outlineColor,
                            strokeThickness: _0xADBD
                        })
                    } else {
                        this.nameCache.text = this.name;
                        this.nameCache.style.fontFamily = _0xADB0.font;
                        this.nameCache.style.stroke = _0xADB0.outlineColor;
                        this.nameCache.style.fontWeight = _0xADCA;
                        this.nameCache.style.fontSize = _0xADB0.size;
                        this.nameCache.style.fill = this.nameColor;
                        this.nameCache.updateText()
                    };
                    this.nameCache.width
                };
                return this.nameCache
            };
            this.setSkin = function (_0xADA3) {
                if (_0xADA3.length == 0) {
                    this.skin = null;
                    this.skinCache = null
                } else {
                    if (_0xADA3 !== this.skin) {
                        this.skin = _0xADA3;
                        this.skinCache = null
                    }
                }
            };
            this.getSkin = function () {
                if (this.skinCache != null) {
                    return this.skinCache
                };
                if (this.skin != null) {
                    if (!_0xB8DC[this.skin]) {
                        _0xB8DC[this.skin] = _0xB8E9.LOADING;
                        if (this.skin.endsWith(".gif")) {
                            var _0xADBD = this.skin;
                            var _0xADA3 = this;
                            gifFrames({
                                url: "https://skin-data.gota.io/uploads/" + _0xADBD,
                                frames: "all",
                                cumulative: false,
                                outputType: "canvas"
                            }).then(function (_0xADA3) {
                                var _0xADB0 = new _0xB25C();
                                _0xADB0.loadFromFrameData(_0xADA3);
                                _0xB8DC[_0xADBD] = _0xB8E9.LOADED;
                                _0xB8C2[_0xADBD] = _0xADB0
                            }).catch(function (_0xADB0) {
                                _0xADA3.skin = null
                            })
                        } else {
                            var _0xADB0 = new Image();
                            _0xADB0.crossOrigin = "";
                            var _0xADBD = this.skin;
                            _0xADB0.addEventListener("load", function () {
                                var _0xADA3 = document.createElement("canvas");
                                _0xADA3.width = 512;
                                _0xADA3.height = 512;
                                var _0xADCA = _0xADA3.getContext("2d");
                                _0xADCA.beginPath();
                                _0xADCA.arc(256, 256, 256, 0, _0xB62B, false);
                                _0xADCA.closePath();
                                _0xADCA.clip();
                                _0xADCA.drawImage(_0xADB0, 0, 0, 512, 512);
                                var _0xADD7 = _0xB645.Texture.fromCanvas(_0xADA3);
                                _0xB8DC[_0xADBD] = _0xB8E9.LOADED;
                                _0xB8C2[_0xADBD] = _0xADD7
                            });
                            _0xADB0.addEventListener("error", function () {
                                _0xB8DC[_0xADBD] = _0xB8E9.ERROR
                            });
                            _0xADB0.src = "https://skin-data.gota.io/uploads/" + this.skin
                        }
                    } else {
                        if (_0xB8DC[this.skin] == _0xB8E9.LOADED) {
                            this.skinCache = _0xB8C2[this.skin];
                            return this.skinCache
                        } else {
                            if (_0xB8DC[this.skin] == _0xB8E9.ERROR) {
                                this.skin = null
                            }
                        }
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

        function _0xB117() {
            this.bucket = {};
            this.getSkin = function (_0xADA3) {
                if (!_0xADA3.skinId) {
                    return
                };
                if (this.bucket[_0xADA3.skinId] == null) {
                    this.bucket[_0xADA3.skinId] = {
                        count: 1,
                        cache: this.createMaskCache(_0xADA3)
                    }
                } else {
                    this.bucket[_0xADA3.skinId].count = this.bucket[_0xADA3.skinId].count + 1
                };
                return this.bucket[_0xADA3.skinId].cache
            };
            this.onDelete = function (_0xADA3) {
                if (_0xADA3.ejectedMassSprite) {
                    _0xADA3.ejectedMassSprite.texture = _0xB645.Texture.EMPTY;
                    if (this.bucket[_0xADA3.skinId] != null) {
                        var _0xADB0 = this.bucket[_0xADA3.skinId];
                        _0xADB0.count = _0xADB0.count - 1;
                        if (_0xADB0.count <= 0) {
                            delete this.bucket[_0xADA3.skinId];
                            _0xADB0.cache.destroy()
                        }
                    }
                }
            };
            this.createMaskCache = function (_0xADCA, _0xADD7) {
                var _0xADA3 = document.createElement("canvas");
                var _0xADBD = _0xADA3.getContext("2d");
                _0xADA3.width = 32;
                _0xADA3.height = 32;
                _0xADBD.drawImage(_0xB131[_0xADCA.skin], 0, 0, 32, 32);
                _0xADBD.globalCompositeOperation = "source-in";
                _0xADBD.fillStyle = _0xADCA.parsedColor;
                _0xADBD.rect(0, 0, 32, 32);
                _0xADBD.fill();
                var _0xADB0 = _0xB645.Texture.from(_0xADA3);
                _0xADB0.cacheAsBitmap = true;
                _0xADB0.width;
                return _0xADB0
            }
        }
        const _0xB10A = new _0xB117();

        function _0xB5A9() {}
        _0xB5A9.prototype.connectionStart = function () {
            var _0xADB0 = "Gota Web " + version;
            var _0xADA3 = new ArrayBuffer(1 + _0xADB0.length + 1 + 1);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 255);
            _0xADBD.setUint8(1, 6);
            _0xBA2E(2, _0xADBD, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.setName = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 1 + ((_0xADB0.length + 1) * 2));
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 0);
            _0xBA21(1, _0xADBD, _0xADB0);
            if (_0xB575.cSilentLogin) {
                _0xADBD.setUint8(2 + (_0xADB0.length * 2) + 1, 1)
            };
            return _0xADA3
        };
        _0xB5A9.prototype.sendKey = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendMouse = function (_0xADBD, _0xADCA) {
            var _0xADA3 = new ArrayBuffer(9);
            var _0xADB0 = new DataView(_0xADA3);
            _0xADB0.setUint8(0, 16);
            _0xADB0.setInt32(1, _0xADBD, true);
            _0xADB0.setInt32(5, _0xADCA, true);
            return _0xADA3
        };
        _0xB5A9.prototype.sendEjectMass = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, _0xADB0 ? 3 : 4);
            return _0xADA3
        };
        _0xB5A9.prototype.sendPing = function () {
            var _0xADA3 = new ArrayBuffer(1);
            var _0xADB0 = new DataView(_0xADA3);
            _0xADB0.setUint8(0, 71);
            return _0xADA3
        };
        _0xB5A9.prototype.sendSpectate = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 2);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 1);
            if (_0xADB0) {
                _0xADBD.setUint16(1, _0xADB0, true)
            };
            return _0xADA3
        };
        _0xB5A9.prototype.sendChat = function (_0xADBD, _0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 1 + ((_0xADBD.length + 1) * 2));
            var _0xADCA = new DataView(_0xADA3);
            _0xADCA.setUint8(0, 72);
            _0xADCA.setUint8(1, _0xADB0);
            _0xBA21(2, _0xADCA, _0xADBD);
            return _0xADA3
        };
        _0xB5A9.prototype.sendInviteResponse = function (_0xADA3) {
            var _0xADB0 = new ArrayBuffer(2);
            var _0xADBD = new DataView(_0xADB0);
            _0xADBD.setUint8(0, 41);
            _0xADBD.setUint8(1, _0xADA3 ? 1 : 0);
            return _0xADB0
        };
        _0xB5A9.prototype.sendPartyAction = function (_0xADA3, _0xADBD) {
            var _0xADB0 = new ArrayBuffer(6);
            var _0xADCA = new DataView(_0xADB0);
            _0xADCA.setUint8(0, 40);
            _0xADCA.setUint8(1, _0xADA3);
            _0xADCA.setUint32(2, _0xADBD, true);
            return _0xADB0
        };
        _0xB5A9.prototype.sendPartyJoin = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + _0xADB0.length + 1);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 42);
            _0xBA2E(1, _0xADBD, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendShowProfile = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 2);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 103);
            _0xADBD.setUint16(1, _0xADB0, true);
            return _0xADA3
        };
        _0xB5A9.prototype.sendWhisper = function (_0xADB0, _0xADBD) {
            var _0xADA3 = new ArrayBuffer(5 + ((_0xADBD.length + 1) * 2));
            var _0xADCA = new DataView(_0xADA3);
            _0xADCA.setUint8(0, 73);
            _0xADCA.setUint32(1, _0xADB0, true);
            _0xBA21(5, _0xADCA, _0xADBD);
            return _0xADA3
        };
        _0xB5A9.prototype.sendSubPanel = function (_0xADB0) {
            var _0xADBD = !_0xADB0 ? 1 : _0xADB0.length + 1;
            var _0xADA3 = new ArrayBuffer(1 + 6 + (_0xB951.skinName.length + 1) + _0xADBD);
            var _0xADCA = new DataView(_0xADA3);
            _0xADCA.setUint8(0, 10);
            _0xADCA.setUint8(1, _0xB951.nameColor.r);
            _0xADCA.setUint8(2, _0xB951.nameColor.g);
            _0xADCA.setUint8(3, _0xB951.nameColor.b);
            _0xADCA.setUint8(4, _0xB951.chatColor);
            _0xADCA.setUint8(5, _0xB951.effect);
            _0xADCA.setUint8(6, _0xB951.lowerName ? 1 : 0);
            _0xBA2E(7, _0xADCA, _0xB951.skinName);
            if (_0xADBD > 1) {
                _0xBA2E(8 + _0xB951.skinName.length, _0xADCA, _0xADB0)
            };
            return _0xADA3
        };
        _0xB5A9.prototype.sendOptions = function () {
            var _0xADA3 = new ArrayBuffer(1 + 2);
            var _0xADB0 = new DataView(_0xADA3);
            _0xADB0.setUint8(0, 104);
            _0xADB0.setUint16(1, _0xB575.rViewDistance, true);
            return _0xADA3
        };
        _0xB5A9.prototype.sendQueue = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 4);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 80);
            _0xADBD.setUint8(1, _0xADB0);
            _0xADBD.setUint8(2, 0);
            _0xADBD.setUint16(3, 0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendCustomGame = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + 1);
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 90);
            _0xADBD.setUint8(1, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendLeaveMatch = function () {
            var _0xADA3 = new ArrayBuffer(1);
            var _0xADB0 = new DataView(_0xADA3);
            _0xADB0.setUint8(0, 81);
            return _0xADA3
        };
        _0xB5A9.prototype.sendShowLobbies = function () {
            var _0xADA3 = new ArrayBuffer(1 + 1);
            var _0xADB0 = new DataView(_0xADA3);
            _0xADB0.setUint8(0, 93);
            return _0xADA3
        };
        _0xB5A9.prototype.sendJoinLobby = function (_0xADB0, _0xADBD) {
            var _0xADA3 = new ArrayBuffer(1 + 4 + (_0xADBD.length * 2) + 2);
            var _0xADCA = new DataView(_0xADA3);
            _0xADCA.setUint8(0, 94);
            _0xADCA.setUint32(1, _0xADB0, true);
            _0xBA21(5, _0xADCA, _0xADBD);
            return _0xADA3
        };
        _0xB5A9.prototype.sendCaptcha = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + (_0xADB0.length + 1));
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 100);
            _0xBA2E(1, _0xADBD, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendAuthToken = function (_0xADB0) {
            var _0xADA3 = new ArrayBuffer(1 + (_0xADB0.length + 1));
            var _0xADBD = new DataView(_0xADA3);
            _0xADBD.setUint8(0, 101);
            _0xBA2E(1, _0xADBD, _0xADB0);
            return _0xADA3
        };
        _0xB5A9.prototype.sendCustomGameUpdate = function (_0xADB0, _0xADBD, _0xADCA) {
            var _0xADA3 = new ArrayBuffer(1 + 3);
            var _0xADD7 = new DataView(_0xADA3);
            _0xADD7.setUint8(0, 91);
            _0xADD7.setUint8(1, _0xADB0);
            if (_0xADB0 == _0xB06E.STARTMASS || _0xADB0 == _0xB06E.VIRUS_DENSITY) {
                _0xADD7.setUint16(2, _0xADBD, false)
            } else {
                if (_0xADB0 == _0xB06E.RESPAWN_DELAY) {
                    _0xADD7.setInt16(2, _0xADBD, false)
                } else {
                    _0xADD7.setUint8(2, _0xADBD);
                    _0xADD7.setUint8(3, _0xADCA)
                }
            };
            return _0xADA3
        };
        _0xB5A9.prototype.sendCustomGameUpdateString = function (_0xADB0, _0xADBD) {
            var _0xADA3 = new ArrayBuffer(1 + 3 + (_0xADBD.length * 2));
            var _0xADCA = new DataView(_0xADA3);
            _0xADCA.setUint8(0, 92);
            _0xADCA.setUint8(1, _0xADB0);
            _0xBA21(2, _0xADCA, _0xADBD);
            return _0xADA3
        };

        function _0xBA2E(_0xADB0, _0xADCA, _0xADBD) {
            for (var _0xADA3 = 0; _0xADA3 < _0xADBD.length; _0xADA3++) {
                _0xADCA.setUint8(_0xADB0, _0xADBD.charCodeAt(_0xADA3));
                _0xADB0++
            };
            _0xADCA.setUint8(_0xADB0, 0)
        }

        function _0xBA21(_0xADB0, _0xADCA, _0xADBD) {
            for (var _0xADA3 = 0; _0xADA3 < _0xADBD.length; _0xADA3++) {
                _0xADCA.setUint16(_0xADB0, _0xADBD.charCodeAt(_0xADA3), true);
                _0xADB0 += 2
            };
            _0xADCA.setUint16(_0xADB0, 0, true)
        }

        function _0xB722(_0xADBD) {
            var _0xADB0 = "";
            while (true) {
                var _0xADA3 = _0xADBD.getUint8(_0xADBD.offset);
                _0xADBD.offset++;
                if (_0xADA3 == 0) {
                    break
                };
                _0xADB0 += String.fromCharCode(_0xADA3)
            };
            return _0xADB0
        }

        function _0xB715(_0xADBD) {
            var _0xADB0 = "";
            while (true) {
                var _0xADA3 = _0xADBD.getUint16(_0xADBD.offset, true);
                _0xADBD.offset += 2;
                if (_0xADA3 == 0) {
                    break
                };
                _0xADB0 += String.fromCharCode(_0xADA3)
            };
            return _0xADB0
        }

        function _0xB8F6(_0xADB0) {
            while (true) {
                var _0xADA3 = _0xADB0.getUint16(_0xADB0.offset, true);
                _0xADB0.offset += 2;
                if (_0xADA3 == 0) {
                    break
                }
            }
        }

        function _0xB283(_0xADA3, _0xADB0) {
            console.error(_0xADA3.message, _0xADA3.code);
            if (_0xADB0) {
                switch (_0xADA3.code) {
                case "auth/user-disabled":
                    alert("This account has been permanently suspended by an administrator.");
                    break;
                case "auth/popup-closed-by-user":
                    break;
                default:
                    alert(_0xADA3.message + " (" + _0xADA3.code + ")");
                    break
                }
            }
        }

        function _0xAEA7(_0xADA3) {
            return _0xADA3.charAt(0).toUpperCase() + _0xADA3.slice(1)
        }

        function _0xB4A5(_0xADA3) {
            switch (_0xADA3) {
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
                return _0xADA3;
                break
            }
        }

        function _0xB02D(_0xADE4, _0xADD7) {
            var _0xADBD = "";
            var _0xADCA = "";
            var _0xADB0 = "white";
            if (_0xADD7.flags.STAFF) {
                _0xADCA = "Gota.io Staff";
                _0xADBD = "build";
                _0xADB0 = "royalblue"
            } else {
                if (_0xADD7.flags.VERIFIED) {
                    _0xADCA = "Verified Player";
                    _0xADBD = "check_circle"
                } else {
                    return
                }
            };
            var _0xADA3 = document.createElement("i");
            _0xADA3.className = "material-icons";
            _0xADA3.id = "user-badge";
            _0xADA3.innerText = _0xADBD;
            _0xADA3.style.color = _0xADB0;
            $(_0xADA3).attr("data-balloon", _0xADCA);
            $(_0xADA3).attr("data-balloon-pos", "up");
            $(_0xADE4).append(_0xADA3)
        }

        function _0xB020(_0xADB0, _0xADBD) {
            var _0xADA3 = document.createElement("i");
            _0xADA3.className = "material-icons";
            _0xADA3.innerText = _0xADB0;
            _0xADA3.setAttribute("data-balloon", _0xADBD);
            _0xADA3.setAttribute("data-balloon-pos", "up");
            return _0xADA3
        }

        function _0xB03A(_0xAE4C, _0xAE73, _0xADFE, _0xADBD) {
            var _0xADE4 = document.createElement("li");
            _0xADE4.className = "user-embed";
            var _0xADD7 = document.createElement("img");
            _0xADD7.src = _0xAE4C.avatar;
            _0xADD7.alt = _0xAE4C.username;
            _0xADE4.appendChild(_0xADD7);
            var _0xADF1 = document.createElement("div");
            _0xADF1.className = "info";
            var _0xAE59 = document.createElement("div");
            _0xAE59.className = "username";
            _0xAE59.innerText = _0xAE4C.username;
            _0xADF1.appendChild(_0xAE59);
            _0xB02D(_0xAE59, _0xAE4C);
            var _0xAE3F = document.createElement("div");
            var _0xAE0B = false;
            var _0xAE32 = null;
            if (_0xADFE) {
                _0xAE32 = _0xAEA7(_0xAE4C.presence.server);
                if ((_0xAE4C.presence.timestamp + (1000 * 60)) < new Date().getTime() || _0xAE4C.presence.id === undefined) {
                    _0xAE3F.className = "status offline";
                    _0xAE3F.innerText = "Not playing on any server"
                } else {
                    _0xAE0B = true;
                    _0xAE3F.className = "status " + (_0xAE4C.presence.status === "ONLINE" ? "online" : "spectate");
                    _0xAE3F.innerText = (_0xAE4C.presence.status === "ONLINE" ? "Playing " : "Spectating ") + _0xAE4C.presence.gamemode + " on " + _0xAE32 + " (ID " + _0xAE4C.presence.id + ")"
                }
            } else {
                _0xAE3F.className = "status pending";
                _0xAE3F.innerText = "Pending Friend Request"
            };
            _0xADF1.appendChild(_0xAE3F);
            var _0xADB0 = document.createElement("div");
            _0xADB0.className = "actions";
            var _0xAE66 = _0xB020("face", "View Profile");
            _0xAE66.addEventListener("click", function (_0xADA3) {
                _0xB430(_0xAE4C, $("#main-social"))
            });
            _0xADB0.append(_0xAE66);
            if (_0xADFE && _0xAE0B) {
                var _0xAE18 = _0xB020("input", "Join Server");
                _0xAE18.addEventListener("click", function (_0xADA3) {
                    _0xB7FF(_0xAE32);
                    _0xB66C.play();
                    _0xB66C.selfMsg(_0xAE4C.username + "'s ID is " + _0xAE4C.presence.id);
                    _0xB2C4($("#main-social"))
                });
                _0xADB0.appendChild(_0xAE18)
            };
            if (!_0xADFE) {
                var _0xADCA = _0xB020("done", "Add as Friend");
                _0xADCA.isHandlingRequest = false;
                _0xADCA.addEventListener("click", function (_0xADB0) {
                    if (_0xADCA.isHandlingRequest) {
                        return
                    };
                    _0xADCA.isHandlingRequest = true;
                    firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                        fetch(_0xADA3 + "/api/v1/social/friends", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                token: _0xADB0,
                                target: _0xAE4C.uid,
                                action: 2
                            })
                        }).then((_0xADA3) => {
                            return _0xADA3.json()
                        }).then((_0xADA3) => {
                            if (_0xADA3.code !== 200) {
                                alert(_0xADA3.message)
                            };
                            _0xADCA.isHandlingRequest = false
                        }).catch((_0xADA3) => {
                            alert(_0xADA3);
                            _0xADCA.isHandlingRequest = false
                        })
                    }).catch((_0xADA3) => {
                        _0xB283(_0xADA3, true);
                        _0xADCA.isHandlingRequest = false
                    })
                });
                _0xADB0.appendChild(_0xADCA)
            };
            var _0xAE25 = _0xB020("block", "Remove Friend");
            _0xAE25.isHandlingRequest = false;
            _0xAE25.addEventListener("click", function (_0xADB0) {
                if (_0xAE25.isHandlingRequest || !confirm("Are you sure you want to remove \"" + _0xAE4C.username + "\" as your friend?")) {
                    return
                };
                _0xAE25.isHandlingRequest = true;
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADB0,
                            target: _0xAE4C.uid,
                            action: 4
                        })
                    }).then((_0xADA3) => {
                        return _0xADA3.json()
                    }).then((_0xADA3) => {
                        alert(_0xADA3.message);
                        if (_0xADA3.code === 200) {
                            firebase.database().ref(_0xB99F.callbacks[_0xAE4C.uid]).off();
                            _0xB99F.elements[_0xAE4C.uid].remove();
                            delete _0xB99F.callbacks[_0xAE4C.uid];
                            delete _0xB99F.elements[_0xAE4C.uid]
                        };
                        _0xAE25.isHandlingRequest = false
                    }).catch((_0xADA3) => {
                        alert(_0xADA3);
                        _0xAE25.isHandlingRequest = false
                    })
                }).catch((_0xADA3) => {
                    _0xB283(_0xADA3, true);
                    _0xAE25.isHandlingRequest = false
                })
            });
            _0xADB0.appendChild(_0xAE25);
            _0xADF1.appendChild(_0xADB0);
            _0xADE4.appendChild(_0xADF1);
            if (_0xADBD) {
                return _0xAE73.appendChild(_0xADE4)
            } else {
                return _0xADE4
            }
        }

        function _0xB430(_0xADBD, _0xADB0, _0xADA3) {
            if (_0xADB0) {
                _0xB2C4(_0xADB0)
            };
            $("#profile-username").text(_0xADBD.username);
            $("#profile-avatar").attr("src", _0xADBD.avatar);
            $("#profile-avatar").attr("alt", _0xADBD.username);
            $("#profile-level").html("Level " + _0xADBD.levelData.level + "&nbsp;&nbsp;&nbsp;[" + _0xB1A6(_0xADBD.levelData.xp_current) + "/" + _0xB1A6(_0xADBD.levelData.xp_needed) + "]");
            if (_0xADBD.title && _0xADBD.title > 0 && _0xB985[_0xADBD.title]) {
                $("#profile-title").text(_0xB985[_0xADBD.title])
            } else {
                $("#profile-title").text("")
            };
            $("#profile-name").off("click");
            if (_0xADBD.uid == _0xBA07.uid) {
                $("#profile-name").on("click", function () {
                    $("#popup-profile").hide();
                    _0xB992($("#popup-account-username"))
                });
                $("#profile-name").css("cursor", "pointer")
            } else {
                $("#profile-name").css("cursor", "default")
            };
            if (_0xADBD.flags.STAFF) {
                $("#profile-avatar").addClass("spin")
            } else {
                $("#profile-avatar").removeClass("spin")
            };
            _0xB02D($("#profile-username"), _0xADBD);
            $("#profile-close-btn").off("click");
            $("#profile-close-btn").on("click", function () {
                if (!_0xADA3) {
                    _0xB88E(_0xB4CC)
                };
                _0xB2C4($("#popup-profile"))
            });
            _0xB88E($("#popup-profile"))
        }

        function _0xB457(_0xADB0) {
            if (_0xB290) {
                return
            };
            var _0xADBD = $("#social-friends .user-list")[0];
            var _0xADCA = $("#social-friends .user-list")[1];
            $("#social-uid").text(_0xADB0.uid);
            firebase.database().ref("/friendships/" + _0xADB0.uid).on("value", function (_0xADE4) {
                if (_0xADE4.val() === null) {
                    var _0xADF1 = document.createElement("div");
                    var _0xADFE = document.createElement("span");
                    _0xADF1.className = "title-text center";
                    _0xADFE.innerText = "You have no friends 😥";
                    _0xADF1.appendChild(_0xADFE);
                    _0xADBD.appendChild(_0xADF1);
                    return
                };
                var _0xADB0 = _0xADE4.val();
                var _0xADD7 = false;
                Object.keys(_0xADB0).map((_0xADE4) => {
                    var _0xADF1 = _0xADB0[_0xADE4];
                    if (!_0xADF1 && !_0xADD7) {
                        _0xADD7 = true;
                        firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                            fetch(_0xADA3 + "/api/v1/social/friends/pending", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    token: _0xADB0
                                })
                            }).then((_0xADA3) => {
                                return _0xADA3.json()
                            }).then((_0xADA3) => {
                                if (_0xADA3.code === 200) {
                                    _0xADA3.profiles.forEach((_0xADB0) => {
                                        if (!_0xB99F.pendingFriends.includes(_0xADB0)) {
                                            _0xB99F.pendingFriends.push(_0xADB0.uid)
                                        };
                                        if (_0xB99F.elements[_0xADB0.uid]) {
                                            var _0xADA3 = _0xB03A(_0xADB0, _0xB99F.elements[_0xADB0.uid], false, false);
                                            _0xADCA.replaceChild(_0xADA3, _0xB99F.elements[_0xADB0.uid]);
                                            _0xB99F.elements[_0xADE4] = _0xADA3;
                                            return
                                        };
                                        _0xB99F.elements[_0xADB0.uid] = _0xB03A(_0xADB0, _0xADCA, false, true)
                                    })
                                }
                            })
                        }).catch((_0xAD96) => {
                            return _0xB283(_0xAD96, false)
                        });
                        return
                    };
                    if (!_0xB99F.callbacks[_0xADE4]) {
                        var _0xADFE = "/users/" + _0xADE4;
                        _0xB99F.callbacks[_0xADE4] = _0xADFE;
                        firebase.database().ref(_0xADFE).on("value", function (_0xADCA) {
                            if (_0xADCA.val() === null) {
                                return
                            };
                            var _0xADB0 = _0xADCA.val();
                            _0xB99F.timestamps[_0xADB0.uid] = _0xADB0.presence.timestamp;
                            if (_0xB99F.pendingFriends.includes(_0xADE4)) {
                                _0xB99F.pendingFriends.slice(_0xB99F.pendingFriends.indexOf(_0xADE4), 1);
                                _0xB99F.elements[_0xADE4].remove();
                                var _0xADA3 = _0xB03A(_0xADB0, _0xB99F.elements[_0xADE4], true, false);
                                _0xADBD.appendChild(_0xADA3);
                                _0xB99F.elements[_0xADE4] = _0xADA3;
                                return
                            };
                            if (_0xB99F.elements[_0xADE4]) {
                                var _0xADA3 = _0xB03A(_0xADB0, _0xB99F.elements[_0xADE4], true, false);
                                _0xADBD.replaceChild(_0xADA3, _0xB99F.elements[_0xADE4]);
                                _0xB99F.elements[_0xADE4] = _0xADA3;
                                return
                            };
                            _0xB99F.elements[_0xADE4] = _0xB03A(_0xADB0, _0xADBD, true, true)
                        })
                    }
                })
            });
            setInterval(function () {
                for (var _0xADA3 in _0xB99F.timestamps) {
                    if (!_0xB99F.timestamps.hasOwnProperty(_0xADA3)) {
                        return
                    };
                    var _0xADCA = _0xB99F.timestamps[_0xADA3];
                    if ((_0xADCA + (1000 * 60)) < new Date().getTime() || _0xADCA === undefined) {
                        var _0xADBD = _0xB99F.elements[_0xADA3].children[1].children[1];
                        _0xADBD.innerText = "Not playing on any server";
                        _0xADBD.className = "status offline";
                        var _0xADB0 = _0xB99F.elements[_0xADA3].children[1].children[2].children[1];
                        if (_0xADB0.dataset.balloon === "Join Server") {
                            _0xADB0.remove()
                        }
                    }
                }
            }, 1000 * 60);
            _0xB290 = true
        }

        function _0xB498() {
            if (_0xB14B.enabled && !_0xB575.cDisableEventSkins) {
                $("body").toggleClass("event-" + _0xB14B.key)
            };
            $(".server-tab").on("click", function () {
                var _0xADA3 = $(this).attr("region");
                _0xB7F2(_0xADA3)
            });
            $("#btn-play").on("click", function () {
                if (_0xB7E5 == null || Date.now() < _0xB0C9) {
                    return
                };
                if (Object.keys(_0xB66C.myCells).length != 0 && this.currentServerName == _0xB7E5.name) {
                    _0xB2C4(_0xB4CC);
                    return
                };
                _0xB66C.spectate = false;
                if (_0xB937.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0xB2C4(_0xB4CC);
                    _0xB2B7();
                    _0xB0C9 = Date.now() + 2000
                } else {
                    _0xB66C.play()
                }
            });
            $("#btn-servers").on("click", function () {
                _0xADB0("main-servers")
            });
            $("#btn-options").on("click", function () {
                _0xADB0("main-options")
            });
            $("#btn-themes").on("click", function () {
                _0xADB0("main-themes")
            });
            $("#btn-cellpanel").on("click", function () {
                _0xADB0("main-subpanel")
            });
            $("#btn-reddit").on("click", function () {
                window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank")
            });
            $("#btn-discord").on("click", function () {
                window.open("https://gota.io/discord", "_blank")
            });
            $("#name-box").keypress(function (_0xADA3) {
                if (_0xADA3.keyCode == 13 && $(this).is(":focus")) {
                    _0xB66C.play()
                }
            });
            $("#btn-spec").on("click", function () {
                if (_0xB7E5 == null || Date.now() < _0xB0C9) {
                    return
                };
                if (_0xB66C.spectate && this.currentServerName == _0xB7E5.name) {
                    _0xB2C4(_0xB4CC);
                    return
                };
                _0xB66C.spectate = true;
                if (_0xB937.incrementPlay() && typeof adplayer != "undefined") {
                    aiptag.cmd.player.push(function () {
                        adplayer.startPreRoll()
                    });
                    _0xB2C4(_0xB4CC);
                    _0xB2B7();
                    _0xB0C9 = Date.now() + 2000
                } else {
                    _0xB66C.spec()
                }
            });
            $("#chat-input").keyup(function (_0xADA3) {
                var _0xADCA = $(this).val();
                var _0xADD7 = _0xADCA.split(" ");
                if (_0xADA3.keyCode == 13 && $(this).is(":focus")) {
                    _0xB13E($(this).val())
                };
                if (_0xADCA.length == 0 || _0xADCA.endsWith(" ") || _0xADA3.keyCode == 13) {
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide()
                } else {
                    if (_0xADCA.startsWith("/")) {
                        if (_0xADD7.length > 1) {
                            return
                        };
                        $("#autocomplete-panel").html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                        var _0xADE4 = -1;
                        Object.values(_0xAFEC).map((_0xADA3) => {
                            if ((_0xADE4 = _0xADA3.triggers.findIndex((_0xADA3) => {
                                    return _0xADA3.toLowerCase().startsWith(_0xADD7[0].substring(1).toLowerCase())
                                })) > -1) {
                                $("#autocomplete-panel tbody").append("<tr><td>" + _0xADA3.triggers[_0xADE4] + "</td><td>" + _0xADA3.triggers + "</td><td>" + _0xADA3.description + "</td></tr>")
                            }
                        });
                        if ($("#autocomplete-panel tbody").children().length == 0) {
                            $("#autocomplete-panel").hide()
                        } else {
                            $("#autocomplete-panel").show()
                        }
                    } else {
                        if (_0xADD7[_0xADD7.length - 1].startsWith(":")) {
                            $("#autocomplete-panel").html("");
                            var _0xADB0 = Object.keys(_0xB124).filter((_0xADA3) => {
                                return _0xADA3.toLowerCase().includes(_0xADD7[_0xADD7.length - 1].substring(1).toLowerCase())
                            });
                            var _0xADBD = Object.keys(gifEmoteList).filter((_0xADA3) => {
                                return _0xADA3.toLowerCase().includes(_0xADD7[_0xADD7.length - 1].substring(1).toLowerCase())
                            });
                            if (_0xADB0.length === 0 && _0xADBD.length === 0) {
                                $("#autocomplete-panel").html("");
                                $("#autocomplete-panel").hide();
                                return
                            } else {
                                $("#autocomplete-panel").show()
                            };
                            if (_0xADB0.length > 0) {
                                $("#autocomplete-panel").append("<h3>Emotes</h3>");
                                _0xADB0.forEach((_0xADA3) => {
                                    $("#autocomplete-panel").append("<img name='" + _0xADA3 + "' title='" + _0xADA3 + "' src='https://gamedata.gota.io/emotes/" + _0xADA3 + ".png' />")
                                })
                            };
                            if (_0xADBD.length > 0) {
                                $("#autocomplete-panel").append("<h3>Gifs</h3>");
                                _0xADBD.forEach((_0xADA3) => {
                                    $("#autocomplete-panel").append("<img name='" + _0xADA3 + "' title='" + _0xADA3 + "' src='https://gamedata.gota.io/emotes/gifs/" + _0xADA3 + ".gif' />")
                                })
                            }
                        }
                    }
                }
            });
            $("#autocomplete-panel").on("click", function (_0xADA3) {
                var _0xADB0 = _0xB1F4().split(" ");
                if (_0xADA3.target.nodeName === "TD") {
                    _0xB840("/" + _0xADA3.target.parentElement.children[0].innerHTML + " ");
                    $("#autocomplete-panel").html("");
                    $("#autocomplete-panel").hide();
                    $("#chat-input").focus()
                } else {
                    if (_0xADA3.target.nodeName === "IMG") {
                        _0xB840(_0xB1F4().substring(0, (_0xB1F4().length - _0xADB0[_0xADB0.length - 1].length)) + _0xADA3.target.attributes.name.nodeValue + " ");
                        $("#autocomplete-panel").html("");
                        $("#autocomplete-panel").hide();
                        $("#chat-input").focus()
                    }
                }
            });
            $("#animationDelay").on("change", function () {
                var _0xADA3 = parseInt($(this).val());
                if (isNaN(_0xADA3)) {
                    _0xADA3 = 90
                };
                _0xB575.rAnimationDelay = Math.min(Math.max(_0xADA3, 25), 250);
                $("#animationDelay").val(_0xB575.rAnimationDelay);
                $("#rAnimationDelay").val(_0xB575.rAnimationDelay)
            });
            $("#viewDistance").on("change", function () {
                var _0xADA3 = parseInt($(this).val());
                if (isNaN(_0xADA3)) {
                    _0xADA3 = 100
                };
                _0xB575.rViewDistance = Math.min(Math.max(_0xADA3, 50), 200);
                $("#viewDistance").val(_0xB575.rViewDistance);
                $("#rViewDistance").val(_0xB575.rViewDistance);
                _0xB66C.sendOptions()
            });
            $("#uiScale").on("change", function () {
                var _0xADA3 = parseInt($(this).val());
                if (isNaN(_0xADA3)) {
                    _0xADA3 = 100
                };
                _0xADA3 *= 0.01;
                _0xB575.rUiScale = Math.min(Math.max(_0xADA3, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0xB575.rUiScale * 100).toFixed(0));
                $("#rUiScale").val(_0xB575.rUiScale);
                $(".ui-scale").css("transform", "scale(" + _0xB575.rUiScale + ")")
            });
            $("#chat-emote-btn").css("background-image", "url(https://gamedata.gota.io/emotes/" + _0xB708[Math.floor(Math.random() * _0xB708.length)] + ".png)");
            $("#chat-emote-btn").on("click", function () {
                $("#emote-panel").toggle()
            });
            $("#emote-panel ul li img").on("click", function (_0xADA3) {
                _0xADD7(_0xADA3.target.name + " ");
                $("#chat-input").focus()
            });
            (function () {
                var _0xADA3 = document.getElementById("chat-panel");
                document.getElementById("chat-resize").addEventListener("mousedown", _0xADBD, false);
                var _0xADE4, _0xADF1, _0xADD7, _0xADCA;

                function _0xADBD(_0xADBD) {
                    _0xADE4 = _0xADBD.clientX;
                    _0xADF1 = _0xADBD.clientY;
                    _0xADD7 = parseInt(document.defaultView.getComputedStyle(_0xADA3).width, 10);
                    _0xADCA = parseInt(document.defaultView.getComputedStyle(_0xADA3).height, 10);
                    document.documentElement.addEventListener("mousemove", _0xADB0, false);
                    document.documentElement.addEventListener("mouseup", _0xADFE, false)
                }

                function _0xADB0(_0xADB0) {
                    _0xADA3.style.width = (_0xADD7 + _0xADB0.clientX - _0xADE4) + "px";
                    _0xADA3.style.height = (_0xADCA - (_0xADB0.clientY - _0xADF1)) + "px"
                }

                function _0xADFE(_0xADA3) {
                    document.documentElement.removeEventListener("mousemove", _0xADB0, false);
                    document.documentElement.removeEventListener("mouseup", _0xADFE, false)
                }
            })();
            $(".checkbox-options").on("change", function (_0xAD96) {
                _0xAF9E($(this))
            });
            $(".options-container select").on("change", function (_0xAD96) {
                _0xAFB8($(this))
            });
            $(".options-container input[type=range]").on("change", function (_0xAD96) {
                _0xAFAB($(this))
            });
            $("#btn-changelog").on("click", function () {
                _0xB2C4($("#popup-changelog"));
                _0xB88E(_0xB4CC);
                window.open(_0xB9AC, "_blank")
            });
            $("#btn-close-changelog").on("click", function () {
                _0xB2C4($("#popup-changelog"));
                _0xB88E(_0xB4CC)
            });
            $("#btn-accept").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendInviteResponse(true));
                _0xB2C4($("#popup-party"))
            });
            $("#btn-decline").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendInviteResponse(false));
                _0xB2C4($("#popup-party"))
            });
            $("#popup-party-code-content button").on("click", function () {
                $("#popup-party-code-content input").select();
                document.execCommand("Copy");
                $("#popup-party-code").hide()
            });
            $("#menu-invite").on("click", function () {
                var _0xADA3 = _0xAFF9.data("selected");
                _0xB66C.sendPacket(new _0xB59C.sendPartyAction(0, _0xADA3))
            });
            $("#menu-whisper").on("click", function () {
                var _0xADA3 = _0xAFF9.data("selected");
                var _0xADB0 = $("#chat-input").val();
                $("#chat-input").val("/t " + _0xADA3 + " " + _0xADB0)
            });
            $("#menu-profile").on("click", function () {
                var _0xADA3 = _0xAFF9.data("selected");
                _0xB66C.sendPacket(new _0xB59C.sendShowProfile(_0xADA3))
            });
            $("#menu-pu_pr").on("click", function () {
                if (_0xB66C.partyCode == undefined) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(4, 0));
                    $("#menu-pu_pr span").text("Private")
                } else {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(4, 1));
                    $("#menu-pu_pr span").text("Public")
                }
            });
            $("#menu-promote").on("click", function () {
                var _0xADA3 = _0xAFF9.data("party") + 1;
                if (_0xADA3 >= 0) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(2, _0xADA3))
                }
            });
            $("#menu-kick").on("click", function () {
                var _0xADA3 = _0xAFF9.data("party") + 1;
                if (_0xADA3 >= 0) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(1, _0xADA3))
                }
            });
            $("#menu-spectate").on("click", function () {
                var _0xADA3 = _0xAFF9.data("selected");
                if (_0xADA3 >= 0) {
                    _0xB66C.sendPacket(new _0xB59C.sendSpectate(_0xADA3))
                }
            });
            $("#menu-block").on("click", function () {
                var _0xADB0 = parseInt(_0xAFF9.data("selected"));
                var _0xADA3 = _0xAE32(_0xADB0);
                _0xB66C.selfMsg(_0xADA3)
            });
            $(document).on("click", function (_0xADA3) {
                _0xAFF9.hide();
                if (_0xADA3.target.id !== "chat-emote-btn") {
                    $("#emote-panel").hide()
                };
                if ($("#popup-party-code").css("display") !== "none" && _0xADA3.target.id !== "popup-party-code") {
                    $("#popup-party-code").hide()
                }
            });
            $("#aEditChatTabs").on("click", function (_0xADA3) {
                _0xAE80();
                _0xB2C4(_0xB4CC);
                _0xB88E($("#popup-chat-tab-editor"))
            });
            $("#cte-tab-selector").on("change", _0xAF50);
            $("#btn-chat-tab-editor-add").on("click", _0xAF36);
            $("#btn-chat-tab-editor-remove").on("click", _0xAF43);
            $("#btn-chat-tab-editor-update").on("click", _0xAF6A);
            $(".custom-asset-skinner").on("click", function () {
                $("#popup-asset-skinner .title-text").text($(this).text());
                $("#input-asset-skinner").attr("asset", $(this).attr("id")).val("");
                _0xB2C4(_0xB4CC);
                _0xB88E($("#popup-asset-skinner"))
            });
            $("#btn-custom-asset-set").on("click", function () {
                if (!_0xB575.cThemeEnabled) {
                    _0xB18C()
                };
                var _0xADB0 = $("#input-asset-skinner").val();
                if (_0xADB0) {
                    var _0xADA3 = $("#input-asset-skinner").attr("asset");
                    if (_0xADA3.charAt(0) == "a" && _0xB96B[_0xADA3] != null) {
                        _0xB84D(_0xADA3, _0xADB0)
                    }
                };
                $("#popup-asset-skinner .back-button").trigger("click")
            });
            $("#btn-custom-asset-clear").on("click", function () {
                if (!_0xB575.cThemeEnabled) {
                    _0xB18C()
                };
                var _0xADA3 = $("#input-asset-skinner").attr("asset");
                if (_0xADA3.charAt(0) == "a" && _0xB96B[_0xADA3] != null) {
                    _0xB84D(_0xADA3, "")
                }
            });
            $("#popup-asset-skinner").on("dragover", false).on("drop", function (_0xADA3) {
                if (!_0xB575.cThemeEnabled) {
                    _0xB18C()
                };
                var _0xADBD = $("#input-asset-skinner").attr("asset");
                if (_0xADBD.charAt(0) == "a" && _0xB96B[_0xADBD] != null) {
                    var _0xADB0 = _0xB201(_0xADA3.originalEvent);
                    if (/\.(jpe?g|png|gif)$/i ["test"](_0xADB0.name)) {
                        var _0xADCA = new FileReader();
                        _0xADCA.addEventListener("load", function () {
                            _0xB84D(_0xADBD, this.result)
                        }, false);
                        _0xADCA.readAsDataURL(_0xADB0)
                    }
                };
                return false
            });
            $("#btn-food-colors").on("click", function () {
                _0xB9B9();
                _0xB2C4(_0xB4CC);
                _0xB88E($("#popup-food-colors"))
            });
            $("#btn-theme-export").on("click", function () {
                if (!_0xB575.cThemeEnabled) {
                    return
                };
                var _0xADB0 = "theme.json";
                var _0xADA3 = JSON.stringify(_0xB96B, null, 2);
                _0xB0E3(_0xADB0, _0xADA3, "text/plain")
            });
            $("#btn-theme-import").on("click", function () {
                $("#theme-import").trigger("click")
            });
            $("#theme-import").on("change", function () {
                var _0xADB0 = $(this).prop("files");
                if (_0xADB0.length > 0) {
                    var _0xADA3 = _0xADB0[0];
                    _0xB48B(_0xADA3)
                }
            });
            $("#main-themes .options-container").on("dragover", false).on("drop", function (_0xADA3) {
                var _0xADB0 = _0xB201(_0xADA3.originalEvent);
                _0xB48B(_0xADB0);
                return false
            });
            $("#cGlobalLeaderboard").on("change", function () {
                if (!_0xBA07 || _0xB1DA) {
                    return
                };
                _0xB1DA = true;
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/options/setFlags", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADB0
                        })
                    }).then(((_0xADA3) => {
                        return _0xADA3.json()
                    })).then((_0xADA3) => {
                        _0xB1DA = false;
                        $(this).prop("checked", _0xADA3.message)
                    }).catch((_0xADA3) => {
                        console.error(_0xADA3);
                        _0xB1DA = false;
                        alert(_0xADA3)
                    })
                }).catch((_0xAD96) => {
                    _0xB283(_0xAD96, true);
                    _0xB1DA = false
                })
            });
            firebase.auth().onAuthStateChanged(function (_0xADA3) {
                if (_0xADA3) {
                    if (!_0xB006.consented) {
                        firebase.auth().signOut().then(function () {});
                        return
                    };
                    _0xB874();
                    if (_0xB66C.isConnected() && firebase.auth().currentUser !== null) {
                        firebase.auth().currentUser.getIdToken(true).then((_0xADA3) => {
                            _0xB66C.sendPacket(new _0xB59C.sendAuthToken(_0xADA3))
                        }).catch((_0xAD96) => {
                            return _0xB283(_0xAD96, true)
                        })
                    };
                    var _0xADB0 = firebase.database().ref("users/" + _0xADA3.uid);
                    var _0xADCA = false;
                    _0xADB0.on("value", function (_0xAE0B) {
                        var _0xADD7 = _0xAE0B.val();
                        if (!_0xADD7) {
                            return
                        };
                        if (!_0xADCA) {
                            $("#account-loader").hide();
                            $("#authed").show();
                            $("#authed").attr("style", "display: flex;");
                            $("#cGlobalLeaderboard").removeAttr("disabled");
                            $("#cGlobalLeaderboard").prop("checked", _0xADD7.flags.PUBLIC);
                            _0xADCA = true
                        };
                        _0xBA07 = _0xADD7;
                        $("#account-avatar").attr("src", _0xADD7.avatar);
                        $("#account-username").text(_0xADD7.username);
                        _0xB02D($("#account-username"), _0xADD7);
                        $("#account-level").html("Level " + _0xADD7.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + _0xB1A6(_0xADD7.levelData.xp_current) + "/" + _0xB1A6(_0xADD7.levelData.xp_needed) + " XP");
                        $(".xp-meter > span").each(function () {
                            var _0xADA3 = ((_0xADD7.levelData.xp_current / _0xADD7.levelData.xp_needed) * 100);
                            $(this).animate({
                                width: _0xADA3 + "%"
                            }, 1200)
                        });
                        if (!_0xB66C.accountListeners.loadServers) {
                            _0xB66C.accountListeners.loadServers = firebase.database().ref("servers/account/" + _0xBA07.uid).on("value", function (_0xADD7) {
                                var _0xADA3 = _0xADD7.val();
                                if (!_0xADA3) {
                                    return
                                };
                                _0xADBD = {};
                                for (var _0xADB0 in _0xADA3) {
                                    var _0xADCA = _0xADA3[_0xADB0];
                                    if (_0xADCA.up) {
                                        _0xADBD[_0xADCA.name] = new _0xB819(_0xADCA.name, _0xADCA.ip + ":" + _0xADCA.port, "?", _0xADCA.gamemode, _0xADCA.region, _0xADCA.ssl, 0)
                                    }
                                };
                                _0xB44A();
                                if (_0xB7E5 != null) {
                                    _0xB7FF(_0xB7E5.name)
                                }
                            })
                        };
                        if (_0xADD7.flags.DISCORD_LINKED && !_0xB66C.accountListeners.loadDiscord) {
                            _0xB66C.accountListeners.loadDiscord = firebase.firestore().collection("discord").doc(_0xBA07.uid).onSnapshot((_0xADA3) => {
                                if (_0xADA3.exists) {
                                    $("#discordLinkStatus").text("Your account is linked with " + _0xADA3.data().username + "#" + _0xADA3.data().discrim);
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
                        if (_0xADD7.tokens !== undefined) {
                            var _0xADF1 = new Date();
                            _0xADF1.setMonth(_0xADF1.getMonth() + _0xADD7.tokens);
                            if (_0xADD7.tokens == 0) {
                                $("#redeem-tokens").hide();
                                $("#token-amount").text("You have 0 tokens.")
                            } else {
                                $("#redeem-tokens").show();
                                $("#token-amount").text("You have " + _0xADD7.tokens + " tokens, maximum expiry date: " + _0xADF1.toString());
                                $("#redeem-spend").attr("max", _0xADD7.tokens)
                            }
                        } else {
                            $("#token-amount").text("You have 0 tokens.")
                        };
                        if (_0xBA07.title && _0xBA07.title > 0 && _0xB9FA && _0xB9FA.titles && _0xB9FA.titles.length > 0) {
                            var _0xADB0 = $("#account-titles");
                            var _0xADFE = 0;
                            for (var _0xADE4 = 0; _0xADE4 < _0xB9FA.titles.length; _0xADE4++) {
                                if (_0xB9FA.titles[_0xADE4] == _0xBA07.title) {
                                    _0xADFE = _0xADE4 + 1
                                }
                            };
                            if (_0xADFE > 0) {
                                _0xADB0.val(_0xADFE)
                            }
                        };
                        if (!_0xB66C.accountListeners.loadPrivateData) {
                            _0xB66C.accountListeners.loadPrivateData = firebase.database().ref("private/" + _0xADA3.uid).on("value", function (_0xADD7) {
                                var _0xADB0 = _0xADD7.val();
                                if (!_0xADB0) {
                                    return
                                };
                                _0xB9FA = _0xADB0;
                                if (_0xB9FA.titles && _0xB9FA.titles.length > 0) {
                                    var _0xADA3 = $("#account-titles");
                                    var _0xADCA = 0;
                                    _0xADA3.empty();
                                    _0xADA3.append("<option value='0'>Default Title</option>");
                                    for (var _0xADBD = 0; _0xADBD < _0xADB0.titles.length; _0xADBD++) {
                                        _0xADA3.append("<option value='" + (_0xADBD + 1) + "'>" + _0xB985[_0xB9FA.titles[_0xADBD]] + "</option>");
                                        if (_0xB9FA.titles[_0xADBD] == _0xBA07.title) {
                                            _0xADCA = _0xADBD + 1
                                        }
                                    };
                                    if (_0xADCA > 0) {
                                        _0xADA3.val(_0xADCA)
                                    };
                                    _0xADA3.css("display", "inline-block")
                                } else {
                                    $("#account-titles").css("display", "none")
                                };
                                if (_0xB9FA.message && _0xB9FA.message.title && _0xB9FA.message.content && !_0xB9FA.message.read) {
                                    $("#popup-message-title").text(_0xB9FA.message.title);
                                    $("#popup-message-content").html(_0xB9FA.message.content);
                                    _0xB88E($("#popup-message"));
                                    _0xB2C4(_0xB4CC)
                                }
                            })
                        };
                        if (_0xB290) {
                            _0xB457(_0xBA07)
                        };
                        _0xB3EF(_0xADA3.uid)
                    })
                } else {
                    $("#cGlobalLeaderboard").attr("disabled");
                    if (!_0xB006.consented) {
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
                if (_0xB006.consented) {
                    firebase.auth().signInWithPopup(_0xADE4).then(function (_0xAD96) {}).catch((_0xAD96) => {
                        return _0xB283(_0xAD96, true)
                    })
                }
            });
            $("#account-logout").on("click", function () {
                firebase.auth().signOut().then(function () {
                    $("#authed").hide(500);
                    $("#guest").show();
                    $("#discordLinkStatus").hide();
                    $(".discord-login-container").show()
                }).catch((_0xAD96) => {
                    return _0xB283(_0xAD96, true)
                })
            });
            $("#account-shop").on("click", function () {
                window.open("https://trello.com/c/Hdnxuxuc/2-account-system", "_blank")
            });
            $("#account-social").on("click", function () {
                if (!_0xBA07) {
                    return
                };
                _0xB457(_0xBA07);
                _0xB88E($("#main-social"));
                _0xB2C4($(_0xB4CC))
            });
            $("#social-back-button").on("click", function () {
                _0xB2C4($("#main-social"));
                _0xB88E($(_0xB4CC))
            });
            $("#account-profile").on("click", function () {
                _0xB430(_0xBA07, _0xB4CC)
            });
            $("#food-colors-close-btn").on("click", function () {
                _0xB992(_0xB4CC);
                _0xB2C4($("#popup-food-colors"))
            });

            function _0xADCA(_0xADB0, _0xADA3) {
                if (_0xADB0) {
                    $(_0xADA3).prop("disabled", false);
                    $(_0xADA3).text("Set");
                    return
                };
                $(_0xADA3).prop("disabled", true);
                $(_0xADA3).text("...")
            }
            $("#account-titles").on("change", function () {
                if (_0xB1DA) {
                    return
                };
                var _0xADB0 = parseInt($(this).val());
                _0xB1DA = true;
                firebase.auth().currentUser.getIdToken().then((_0xADBD) => {
                    fetch(_0xADA3 + "/api/v1/options/setTitle", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADBD,
                            title: _0xADB0
                        })
                    }).then(((_0xADA3) => {
                        return _0xADA3.json()
                    })).then((_0xAD96) => {
                        _0xB1DA = false
                    }).catch((_0xADA3) => {
                        console.error(_0xADA3);
                        _0xB1DA = false
                    })
                }).catch((_0xAD96) => {
                    _0xB283(_0xAD96, true);
                    _0xB1DA = false
                })
            });
            $("#popup-message-read-btn").on("click", function () {
                if (_0xB1DA) {
                    return
                };
                _0xB2C4($("#popup-message"));
                _0xB992(_0xB4CC);
                _0xB1DA = true;
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/options/markAsRead", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADB0
                        })
                    }).then(((_0xADA3) => {
                        return _0xADA3.json()
                    })).then((_0xAD96) => {
                        _0xB1DA = false
                    }).catch((_0xADA3) => {
                        console.error(_0xADA3);
                        _0xB1DA = false
                    })
                }).catch((_0xAD96) => {
                    _0xB283(_0xAD96, true);
                    _0xB1DA = false
                })
            });
            $("#account-set-username-btn").on("click", function () {
                if (!_0xBA07) {
                    return
                };
                _0xADCA(false, this);
                var _0xADB0 = $("#account-username-input").val();
                if (!_0xADB0 || _0xADB0 == "" || _0xADB0.trim() == "") {
                    alert("Please provide a username!");
                    _0xADCA(true, this);
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xADBD) => {
                    fetch(_0xADA3 + "/api/v1/social/username", {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADBD,
                            username: _0xADB0
                        })
                    }).then((_0xADA3) => {
                        return _0xADA3.json()
                    }).then((_0xADA3) => {
                        _0xADCA(true, this);
                        if (_0xADA3.code == 200) {
                            _0xB992(_0xB4CC);
                            $("#popup-account-username").hide();
                            return
                        };
                        alert(_0xADA3.message)
                    }).catch((_0xADA3) => {
                        console.error(_0xADA3);
                        alert(_0xADA3);
                        _0xADCA(true, this)
                    })
                }).catch((_0xAD96) => {
                    _0xADCA(true, this);
                    _0xB283(_0xAD96, true)
                })
            });
            $(".popup-panel .back-button").on("click", function () {
                _0xB2D1();
                _0xB992(_0xB4CC)
            });
            $("#discordLink").on("click", function () {
                if (!_0xBA07) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xADA3) => {
                    window.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + _0xADA3, "popup", "width=600,height=700")
                })
            });
            $("#discordUnlink").on("click", function () {
                if (!_0xBA07) {
                    return
                };
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/options/discord/unlink", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0xADB0
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0xADA3) => {
                        return _0xADA3.json()
                    }).then((_0xADA3) => {
                        alert(_0xADA3.message)
                    })
                }).catch((_0xAD96) => {
                    return _0xB283(_0xAD96)
                })
            });
            $("#redeem-tokens").submit(function (_0xADB0) {
                _0xADB0.preventDefault();
                if (!_0xBA07) {
                    return
                };
                if (!confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
                    return
                };
                var _0xADBD = $("#redeem-name").val();
                var _0xADCA = $("#redeem-spend").val();
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/options/redeem", {
                        method: "POST",
                        body: JSON.stringify({
                            token: _0xADB0,
                            name: _0xADBD,
                            spend: parseInt(_0xADCA)
                        }),
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then((_0xADA3) => {
                        return _0xADA3.json()
                    }).then((_0xADA3) => {
                        alert(_0xADA3.message);
                        if (_0xADA3.code === 200) {
                            _0xB3EF(_0xBA07.uid)
                        }
                    })
                }).catch((_0xAD96) => {
                    return _0xB283(_0xAD96)
                })
            });
            $(".error-banner").on("click", function () {
                $(this).hide()
            });
            $("#btn-add-friend").on("click", function (_0xADB0) {
                _0xADB0.preventDefault();
                if (!_0xBA07) {
                    return
                };
                var _0xADCA = prompt("Enter friend's UID (found above add friend button)");
                if (!_0xADCA) {
                    return
                };
                var _0xADBD = _0xADCA.replace(/\s/g, "");
                if (typeof _0xADCA !== "string" || _0xADBD.length === 0) {
                    return alert("Please enter a valid UID")
                };
                firebase.auth().currentUser.getIdToken().then((_0xADB0) => {
                    fetch(_0xADA3 + "/api/v1/social/friends", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: _0xADB0,
                            target: _0xADBD,
                            action: 1
                        })
                    }).then((_0xADA3) => {
                        return _0xADA3.json()
                    }).then((_0xADA3) => {
                        alert(_0xADA3.message)
                    })
                }).catch((_0xAD96) => {
                    return _0xB283(_0xAD96, true)
                })
            });
            document.getElementById("party-canvas").oncontextmenu = _0xB604;
            $(document).keyup(function (_0xADA3) {
                if (_0xADA3.keyCode == 13) {
                    var _0xADB0 = $("#chat-input");
                    if (document.activeElement.tagName != "INPUT") {
                        var _0xADBD = _0xADB0[0];
                        if (_0xADBD) {
                            _0xADBD.setSelectionRange(_0xADBD.value.length, _0xADBD.value.length)
                        };
                        _0xADB0.focus()
                    } else {
                        if (_0xADB0.is(":focus")) {
                            _0xADB0.blur()
                        }
                    }
                }
            });
            $(window).bind("beforeunload", function () {
                return "Are you sure you want to leave Gota.io?"
            });
            _0xB763();
            $(".keybinds-btn").on("click", function () {
                $(".keybinds-btn").removeClass("keybinds-btn-selected");
                $(this).addClass("keybinds-btn-selected");
                _0xB37A = true
            });
            $("#btn-reset-keybinds").on("click", function () {
                $(".keybinds-btn").each(function () {
                    var _0xADA3 = $(this);
                    var _0xADB0 = _0xADA3.attr("id");
                    if (_0xB0A2[_0xADB0] != null) {
                        _0xB387[_0xADB0] = _0xB0A2[_0xADB0];
                        _0xB9C6(_0xADA3)
                    }
                })
            });
            $("#scrimmage-mode-select").on("change", function () {
                $("#scrimmage-mode-info").children().css("display", "none");
                $("#scrimmage-info-" + $(this).val()).css("display", "block")
            });
            $("#btn-queue").on("click", function () {
                var _0xADA3 = parseInt($("#scrimmage-mode-select").val());
                var _0xADB0 = isNaN(_0xADA3) ? 0 : Math.min(Math.max(_0xADA3, 0), 100);
                _0xB66C.sendPacket(new _0xB59C.sendQueue(_0xADB0));
                $(this).blur()
            });
            $("#btn-leave-match").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendLeaveMatch())
            });
            $("#btn-custom-create").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendCustomGame(0));
                $(this).blur()
            });
            $("#btn-custom-return").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendCustomGame(1))
            });
            $("#btn-custom-start").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendCustomGame(2))
            });
            $("#btn-custom-lobbies").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendShowLobbies())
            });
            $("#btn-lobbies-refresh").on("click", function () {
                _0xB66C.sendPacket(new _0xB59C.sendShowLobbies())
            });
            $("#btn-lobbies-join").on("click", function () {
                if (_0xB7D8 === 0) {
                    return
                };
                var _0xADB0 = _0xB7D8;
                var _0xADBD = "";
                var _0xADA3 = _0xB088[_0xADB0];
                if (_0xADA3 == null) {
                    return
                };
                if (_0xADA3.hasPasscode) {
                    _0xADBD = prompt("Enter the password to join this game", "")
                };
                if (_0xADBD == null) {
                    _0xADBD = ""
                };
                _0xB66C.sendPacket(new _0xB59C.sendJoinLobby(_0xADB0, _0xADBD))
            });
            $("#btn-lobbies-return").on("click", function () {
                $(".scrimmage-full").css("display", "none");
                $("#scrimmage-menu").css("display", "block")
            });
            $("#scrimmage-map").on("change", function (_0xADB0) {
                var _0xADBD = $(this).find("option:selected").val();
                var _0xADA3 = $(this).attr("data");
                if (_0xADBD != _0xADA3) {
                    $("#scrimmage-map option[value='" + _0xADA3 + "']").prop("selected", true);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.MAP, _0xADBD))
                }
            });
            $("#scrimmage-mapmode").on("change", function (_0xADB0) {
                var _0xADBD = $(this).find("option:selected").val();
                var _0xADA3 = $(this).attr("data");
                if (_0xADBD != _0xADA3) {
                    $("#scrimmage-mapmode option[value='" + _0xADA3 + "']").prop("selected", true);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.MODE, _0xADBD))
                }
            });
            $("#scrimmage-mapsize").on("change", function (_0xADB0) {
                var _0xADBD = $(this).find("option:selected").val();
                var _0xADA3 = $(this).attr("data");
                if (_0xADBD != _0xADA3) {
                    $("#scrimmage-mapsize option[value='" + _0xADA3 + "']").prop("selected", true);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.SIZE, _0xADBD))
                }
            });
            $("#scrimmage-startmass").on("change", function (_0xADB0) {
                var _0xADBD = $(this).val();
                var _0xADA3 = $(this).attr("data");
                if (isNaN(_0xADBD)) {
                    $(this).val(_0xADA3);
                    return
                };
                _0xADBD = Math.max(1, Math.min(parseInt(_0xADBD), 32000));
                if (_0xADBD != _0xADA3) {
                    $(this).val(_0xADA3);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.STARTMASS, _0xADBD))
                }
            });
            $("#scrimmage-virusDensity").on("change", function (_0xADB0) {
                var _0xADBD = $(this).val();
                var _0xADA3 = $(this).attr("data");
                if (isNaN(_0xADBD)) {
                    $(this).val(_0xADA3);
                    return
                };
                _0xADBD = Math.max(0, Math.min(parseInt(_0xADBD), 1000));
                if (_0xADBD != _0xADA3) {
                    $(this).val(_0xADA3);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.VIRUS_DENSITY, _0xADBD))
                }
            });
            $("#scrimmage-respawnDelay").on("change", function (_0xADB0) {
                var _0xADBD = $(this).val();
                var _0xADA3 = $(this).attr("data");
                if (isNaN(_0xADBD)) {
                    $(this).val(_0xADA3);
                    return
                };
                _0xADBD = Math.max(-1, Math.min(parseInt(_0xADBD), 600));
                if (_0xADBD != _0xADA3) {
                    $(this).val(_0xADA3);
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.RESPAWN_DELAY, _0xADBD))
                }
            });
            $("#scrimmage-lockteams").on("change", function (_0xADA3) {
                var _0xADB0 = $(this).prop("checked");
                $(this).prop("checked", !_0xADB0);
                _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.LOCK, _0xADB0 == true ? 1 : 0))
            });
            $("#scrimmage-autoSplit").on("change", function (_0xADA3) {
                var _0xADB0 = $(this).prop("checked");
                $(this).prop("checked", !_0xADB0);
                _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.AUTOSPLIT, _0xADB0 == true ? 1 : 0))
            });
            $("#scrimmage-public").on("change", function (_0xADA3) {
                var _0xADB0 = $(this).prop("checked");
                $(this).prop("checked", !_0xADB0);
                _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdate(_0xB06E.PUBLIC, _0xADB0 == true ? 1 : 0))
            });
            $("#scrimmage-password").on("change", function (_0xADA3) {
                var _0xADBD = $(this).prop("checked");
                $(this).prop("checked", !_0xADBD);
                var _0xADB0 = "";
                if (_0xADBD) {
                    _0xADB0 = prompt("Enter a password to join your game (32 max characters)", "")
                };
                if (_0xADB0 == null) {
                    _0xADB0 = ""
                };
                _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdateString(_0xB06E.PASSWORD, _0xADB0))
            });
            $("#scrimmage-name").on("click", function (_0xADA3) {
                if (!_0xB66C.isPartyLeader()) {
                    return
                };
                var _0xADB0 = prompt("Enter a new name for your game (32 max characters)", $(this).text());
                if (_0xADB0 != null) {
                    _0xB66C.sendPacket(new _0xB59C.sendCustomGameUpdateString(_0xB06E.NAME, _0xADB0))
                }
            })
        }

        function _0xB43D() {
            if (window.grecaptcha === undefined) {
                return
            };
            _0xAEB4 = window.grecaptcha;
            window.grecaptcha = undefined;
            _0xAEB4.ready(function () {})
        }

        function _0xB165() {
            _0xAEB4.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
                action: "login"
            }).then(function (_0xADA3) {
                _0xB66C.sendPacket(new _0xB59C.sendCaptcha(_0xADA3));
                document.body.classList.add("hide-captcha-badge");
                if (!_0xB66C.spectate) {
                    _0xB66C.play()
                } else {
                    _0xB66C.spec()
                }
            })
        }

        function _0xB3E2() {
            _0xB199(function (_0xADA3) {
                $("#" + _0xADA3).spectrum({
                    color: _0xB96B[_0xADA3],
                    preferredFormat: "hex",
                    showInput: true,
                    showAlpha: true,
                    clickoutFiresChange: false,
                    change: function (_0xADB0) {
                        _0xB96B[_0xADA3] = _0xADB0.toRgbString();
                        _0xB770(_0xADA3, _0xB96B[_0xADA3])
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
                change: function (_0xADA3) {
                    if (!_0xB575.cThemeEnabled) {
                        _0xB18C()
                    };
                    var _0xADB0 = _0xADA3.toHexString();
                    if (!_0xB96B._FoodColors.includes(_0xADB0)) {
                        _0xB96B._FoodColors.push(_0xADB0);
                        _0xB9B9()
                    }
                }
            })
        }

        function _0xB9B9() {
            var _0xADBD = $("#food-color-list");
            _0xADBD.empty();
            if (_0xB96B._FoodColors.length == 0) {
                _0xB749();
                return
            };
            try {
                for (var _0xADB0 in _0xB96B._FoodColors) {
                    var _0xADA3 = _0xB96B._FoodColors[_0xADB0];
                    _0xADBD.append("<div c='" + _0xADA3 + "' style='background:" + _0xADA3 + ";color:" + _0xB339(_0xADA3) + ";'><span>" + _0xADA3 + "</span><div><button class='btn-food-color'>X</button></div></div>")
                };
                $(".btn-food-color").on("click", function () {
                    var _0xADBD = $(this).parents().eq(1).attr("c");
                    var _0xADA3, _0xADB0;
                    while ((_0xADA3 = _0xB96B._FoodColors.indexOf(_0xADBD)) !== -1) {
                        _0xB96B._FoodColors.splice(_0xADA3, 1);
                        _0xADB0 = true
                    };
                    if (_0xADB0) {
                        _0xB9B9()
                    }
                })
            } catch (e) {
                _0xB96B._FoodColors = [];
                _0xADBD.empty()
            };
            _0xB749()
        }

        function _0xB749() {
            _0xB054 = [];
            for (var _0xADA3 of _0xB96B._FoodColors) {
                _0xB054.push(_0xB645.utils.string2hex(_0xADA3))
            };
            for (var _0xADB0 in _0xB66C.foodObjects) {
                _0xB66C.foodObjects[_0xADB0].needsPixiUpdate = true
            }
        }

        function _0xAE18(_0xADBD) {
            var _0xADB0 = $(".keybinds-btn-selected");
            _0xB37A = false;
            if (_0xADB0.size() == 0) {
                return
            };
            var _0xADA3 = _0xADB0.first();
            _0xADB0.removeClass("keybinds-btn-selected");
            if (_0xADBD != 27) {
                _0xB387[_0xADA3.attr("id")] = _0xADBD
            } else {
                _0xB387[_0xADA3.attr("id")] = -1
            };
            _0xB9C6(_0xADA3)
        }

        function _0xB9C6(_0xADA3) {
            var _0xADB0 = _0xB387[_0xADA3.attr("id")];
            _0xADA3.html(_0xB3A1(_0xADB0))
        }

        function _0xB3A1(_0xADA3) {
            return _0xADA3 > 0 ? _0xB394[_0xADA3].toUpperCase() : "&nbsp;"
        }

        function _0xB409() {
            var _0xADA3 = document.getElementById("logo");
            if (_0xB575.cDisableEventSkins || !_0xB14B.enabled) {
                _0xADA3.style.backgroundImage = "url('images/logo.png')"
            } else {
                if (_0xB14B.enabled) {
                    _0xADA3.style.backgroundImage = "url('images/events/" + _0xB14B.key + "/logo.png')"
                }
            }
        }

        function _0xB3FC() {
            _0xB464();
            _0xB124 = {};
            gifEmoteList = {};
            for (var _0xADB0 in _0xB708) {
                var _0xADA3 = _0xB708[_0xADB0];
                $(".emote-list").append("<li><img name='" + _0xADA3 + "' title='" + _0xADA3 + "' src='https://gamedata.gota.io/emotes/" + _0xADA3 + ".png' /></li>");
                _0xB124[_0xADA3] = true
            };
            for (var _0xADB0 in _0xB24F) {
                var _0xADA3 = _0xB24F[_0xADB0];
                $(".gif-list").append("<li><img name='" + _0xADA3 + "' title='" + _0xADA3 + "' src='https://gamedata.gota.io/emotes/gifs/" + _0xADA3 + ".gif' /></li>");
                gifEmoteList[_0xADA3] = true
            };
            for (var _0xADB0 = 0; _0xADB0 < _0xB131.length; _0xADB0++) {
                var _0xADD7 = _0xB131[_0xADB0];
                $("#spEffect").append("<option value=\"" + (_0xADB0 + 1) + "\">" + _0xADD7.charAt(0).toUpperCase() + _0xADD7.slice(1) + "</option>");
                var _0xADCA = new Image();
                _0xADCA.src = "images/ejectedmass_skins/" + _0xADD7 + ".png";
                _0xB131[_0xADB0] = _0xADCA
            };
            if (_0xB14B.enabled && _0xB14B.customEjectedMass) {
                _0xB158 = new Image();
                _0xB158.src = "images/events/" + _0xB14B.key + "/ejected_mass.png"
            };
            _0xB423();
            for (var _0xADB0 = 0; _0xADB0 < _0xB51A.length; _0xADB0++) {
                var _0xADBD = _0xADB0;
                gifFrames({
                    url: "images/effects/" + _0xB51A[_0xADBD] + ".gif",
                    frames: "all",
                    cumulative: false,
                    outputType: "canvas"
                }).then(function (_0xADA3) {
                    var _0xADB0 = new _0xB25C();
                    _0xADB0.loadFromFrameData(_0xADA3);
                    _0xB50D[_0xADBD] = _0xADB0
                })
            }
        }

        function _0xB464() {
            var _0xADA3, _0xADD7;
            if (!_0xB575.cDisableEventSkins && _0xB14B.enabled) {
                _0xADA3 = "images/events/" + _0xB14B.key;
                _0xADD7 = "/spike_mother_happy.png"
            } else {
                _0xADA3 = "images";
                _0xADD7 = "/spike_mother.png"
            };
            var _0xADB0 = new Image();
            _0xADB0.addEventListener("load", function () {
                _0xB903 = _0xB645.Texture.from(_0xADB0);
                if (_0xB66C) {
                    for (var _0xADA3 in _0xB66C.bucket) {
                        var _0xADBD = _0xB66C.bucket[_0xADA3];
                        if (_0xADBD.type == 3) {
                            _0xADBD.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0xADBD = new Image();
            _0xADBD.addEventListener("load", function () {
                _0xB910 = _0xB645.Texture.from(_0xADBD);
                if (_0xB66C) {
                    for (var _0xADA3 in _0xB66C.bucket) {
                        var _0xADB0 = _0xB66C.bucket[_0xADA3];
                        if (_0xADB0.type == 4) {
                            _0xADB0.needsPixiUpdate = true
                        }
                    }
                }
            });
            var _0xADCA = new Image();
            _0xADCA.addEventListener("load", function () {
                _0xB91D = _0xB645.Texture.from(_0xADCA);
                if (_0xB66C) {
                    for (var _0xADA3 in _0xB66C.bucket) {
                        var _0xADB0 = _0xB66C.bucket[_0xADA3];
                        if (_0xADB0.type == 4) {
                            _0xADB0.needsPixiUpdate = true
                        }
                    }
                }
            });
            _0xADB0.src = _0xADA3 + "/spike.png";
            _0xADBD.src = _0xADA3 + "/spike_mother.png";
            _0xADCA.src = _0xADA3 + _0xADD7
        }
        const _0xAF84 = {
            "cDisableAA": function () {
                if (_0xB652) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "sRenderType": function () {
                if (_0xB652) {
                    $("#performance-refresh").css("display", "table-row")
                }
            },
            "cHideId": function () {
                var _0xADA3 = _0xB575.cHideId ? "none" : "block";
                $(".pID").css("display", _0xADA3)
            },
            "cHideServerDisplay": function () {
                var _0xADA3 = _0xB575.cHideServerDisplay ? "none" : "block";
                $(".psvr").css("display", _0xADA3)
            },
            "cTransCells": function () {
                _0xAF02.alpha = _0xB575.cTransCells ? 0.5 : 1.0
            },
            "cColoredCellCount": function () {
                _0xB66C.updateCellCounter(_0xB0D6.playerCellCount, true)
            },
            "cHideChat": function () {
                var _0xADA3 = _0xB575.cHideChat ? "none" : "block";
                $("#chat-panel").css("display", _0xADA3)
            },
            "cHideMinimap": function () {
                var _0xADA3 = _0xB575.cHideMinimap ? "none" : "block";
                $("#minimap-panel").css("display", _0xADA3)
            },
            "cHideScorePanel": function () {
                var _0xADA3 = _0xB575.cHideScorePanel ? "none" : "inline-block";
                $("#score-panel").css("display", _0xADA3)
            },
            "cHideLeaderboard": function () {
                var _0xADA3 = _0xB575.cHideLeaderboard ? "none" : "block";
                $("#leaderboard-panel").css("display", _0xADA3)
            },
            "cHideExtraPanel": function () {
                var _0xADA3 = _0xB575.cHideExtraPanel ? "none" : "block";
                $("#extra-panel").css("display", _0xADA3)
            },
            "cShowCoordinates": function () {
                var _0xADA3 = _0xB575.cShowCoordinates ? "block" : "none";
                $("#minimap-coordinates").css("display", _0xADA3);
                _0xB763()
            },
            "cDisableAutoZoom": function () {
                if (_0xB575.cDisableAutoZoom) {
                    _0xB66C.scale_base = 0.2 * Math.max(_0xAE9A.height / 540, _0xAE9A.width / 960)
                }
            },
            "cThemeEnabled": function () {
                if (!_0xB575.cThemeEnabled) {
                    _0xB756();
                    _0xB199(function (_0xADA3) {
                        $("#" + _0xADA3).spectrum("disable")
                    })
                } else {
                    _0xB199(function (_0xADA3) {
                        $("#" + _0xADA3).spectrum("enable")
                    })
                }
            },
            "cShowBorder": function () {
                _0xB276()
            },
            "cDisableEventSkins": function () {
                if (_0xB14B.enabled) {
                    $("body").toggleClass("event-" + _0xB14B.key)
                };
                if (_0xB5DD === undefined && !_0xB575.cDisableEventSkins) {
                    _0xB5DD = new _0xB5EA(_0xB14B.particlesMax)
                };
                _0xB464();
                _0xB409()
            },
            "cResizableChat": function () {
                $("#chat-resize").css("display", _0xB575.cResizableChat ? "block" : "none")
            },
            "sShowNames": function () {
                _0xB582.levelNames = _0xB693[_0xB575.sShowNames]
            },
            "sShowSkins": function () {
                _0xB582.levelSkins = _0xB693[_0xB575.sShowSkins]
            },
            "sMassType": function () {
                _0xB582.massType = _0xB4E6[_0xB575.sMassType]
            },
            "sTextOutlines": function () {
                _0xB582.textOutlineSize = _0xB95E[_0xB575.sTextOutlines];
                for (var _0xADA3 in _0xB66C.playerRegistry.bucket) {
                    var _0xADB0 = _0xB66C.playerRegistry.bucket[_0xADA3];
                    if (_0xADB0.nameCache) {
                        _0xADB0.nameCache.style.strokeThickness = _0xB582.textOutlineSize
                    };
                    _0xB66C.playerRegistry.updatePlayer(_0xADB0)
                };
                _0xB8B5.buildSizeCache()
            },
            "sQuality": function () {
                var _0xADA3 = _0xB582.resolution;
                _0xB582.resolution = _0xB269[_0xB575.sQuality];
                if (_0xADA3 !== _0xB582.resolution) {
                    $(window).trigger("resize")
                }
            },
            "uiForegroundColor": function (_0xADA3) {
                if (_0xB66C) {
                    _0xB66C.drawParty()
                };
                $(".fg-interface-color").css("color", _0xADA3);
                $(".interface-color").css("color", _0xADA3);
                $(".gota-btn").css("color", _0xADA3).css("border-color", _0xADA3);
                $(".popup-panel").css("color", _0xADA3);
                $(".main").css("color", _0xADA3);
                $(".main-bottom-stats").css("border-color", _0xADA3)
            },
            "uiBackgroundColor": function (_0xADA3) {
                $(".interface-color").css("background-color", _0xADA3);
                $(".gota-btn").css("background-color", _0xADA3);
                $(".popup-panel").css("background-color", _0xADA3)
            },
            "uiBorderColor": function (_0xADA3) {
                $(".ui-pane").css("border-color", _0xADA3);
                $(".main").css("border-color", _0xADA3);
                $(".popup-panel").css("border-color", _0xADA3);
                $("#chat-tab-container").css("border-color", _0xADA3);
                $(".chat-tab").css("border-color", _0xADA3)
            },
            "uiMenuBackgroundColor": function (_0xADA3) {
                $(".main").css("background-color", _0xADA3)
            },
            "uiMenuSubBackgroundColor": function (_0xADB0) {
                $(".options-container").css("background-color", _0xADB0);
                $(".server-active").css("background-color", _0xADB0);
                $("#server-content").css("background-color", _0xADB0);
                $("#main-account").css("background-color", _0xADB0);
                var _0xADBD = tinycolor("white");
                var _0xADA3 = tinycolor(_0xADB0).getAlpha();
                _0xADBD.setAlpha(_0xADA3 * Math.min(Math.max(1 - _0xADA3, 0.25), 1));
                $(".server-table tbody").css("background-color", _0xADBD.toRgbString())
            },
            "uiPartyLeaderColor": function (_0xADA3) {
                if (_0xB66C) {
                    _0xB66C.drawParty()
                }
            },
            "uiGameBackgroundColor": function (_0xADA3) {
                document.body.style.background = _0xADA3
            },
            "uiGameBorderColor": function () {
                _0xB276()
            },
            "rUiScale": function (_0xADA3) {
                _0xB575.rUiScale = Math.min(Math.max(_0xADA3, 0.5), 1.25);
                $("#uiScale").val(Number.parseFloat(_0xB575.rUiScale * 100).toFixed(0));
                $(".ui-scale").css("transform", "scale(" + _0xB575.rUiScale + ")")
            },
            "rAnimationDelay": function (_0xADA3) {
                _0xB575.rAnimationDelay = Math.min(Math.max(_0xADA3, 25), 250);
                $("#animationDelay").val(_0xB575.rAnimationDelay)
            },
            "rViewDistance": function (_0xADA3) {
                _0xB575.rViewDistance = Math.min(Math.max(_0xADA3, 50), 200);
                $("#viewDistance").val(_0xB575.rViewDistance);
                _0xB66C.sendOptions()
            },
            "rBorderSize": function (_0xADA3) {
                _0xB96B.rBorderSize = Math.min(Math.max(_0xADA3, 1), 256);
                $("#borderSize").text(_0xB96B.rBorderSize);
                _0xB276()
            },
            "rBackgroundOpacity": function (_0xADA3) {
                _0xB96B.rBackgroundOpacity = Math.min(Math.max(_0xADA3, 0), 1);
                $("#backgroundOpacity").text(Number.parseFloat(_0xB96B.rBackgroundOpacity * 100).toFixed(0));
                document.getElementById("canvas-background").style.opacity = _0xB96B.rBackgroundOpacity
            },
            "aCustomBackground": function (_0xADA3) {
                document.getElementById("canvas-background").style.backgroundImage = "url('" + _0xADA3 + "')";
                document.getElementById("canvas-background").style.backgroundSize = "100% 100%"
            },
            "aCustomSpike": function (_0xADCA) {
                if (_0xB047.aCustomSpike) {
                    _0xB047.aCustomSpike.destroy()
                };
                _0xB047.aCustomSpike = null;
                for (var _0xADB0 in _0xB66C.bucket) {
                    var _0xADBD = _0xB66C.bucket[_0xADB0];
                    if (_0xADBD.type == 3) {
                        _0xADBD.needsPixiUpdate = true
                    }
                };
                if (_0xADCA.length == 0) {
                    return
                };
                var _0xADA3 = new Image();
                _0xADA3.crossOrigin = "";
                _0xADA3.addEventListener("load", function () {
                    _0xB047.aCustomSpike = _0xB645.Texture.from(_0xADA3)
                });
                _0xADA3.addEventListener("error", function () {
                    _0xB66C.selfMsg("Unable to load custom theme virus.")
                });
                _0xADA3.src = _0xADCA
            },
            "aCustomMother": function (_0xADCA) {
                if (_0xB047.aCustomMother) {
                    _0xB047.aCustomMother.destroy()
                };
                _0xB047.aCustomMother = null;
                for (var _0xADB0 in _0xB66C.bucket) {
                    var _0xADBD = _0xB66C.bucket[_0xADB0];
                    if (_0xADBD.type == 4) {
                        _0xADBD.needsPixiUpdate = true
                    }
                };
                if (_0xADCA.length == 0) {
                    return
                };
                var _0xADA3 = new Image();
                _0xADA3.crossOrigin = "";
                _0xADA3.addEventListener("load", function () {
                    _0xB047.aCustomMother = _0xB645.Texture.from(_0xADA3)
                });
                _0xADA3.addEventListener("error", function () {
                    _0xB66C.selfMsg("Unable to load custom theme mother cell.")
                });
                _0xADA3.src = _0xADCA
            }
        };

        function _0xB763() {
            if (!_0xB575.cShowCoordinates) {
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

        function _0xB471() {
            _0xB85A();
            $("#btn-chg-ln").on("click", function () {
                if (!_0xB4B2) {
                    return
                };
                var _0xADB0 = prompt("Enter new locked name!");
                if (!_0xADB0) {
                    return
                };
                var _0xADA3 = null;
                if (typeof _0xADB0 !== "string") {
                    _0xADA3 = "Please enter a valid name!"
                };
                if (_0xADB0.length < 2) {
                    _0xADA3 = "Locked names must be 2 or more characters long."
                };
                if (_0xADB0.length > 20) {
                    _0xADA3 = "Locked names must be 20 or less characters long."
                };
                if (_0xADA3 !== null) {
                    alert(_0xADA3);
                    return
                };
                _0xADB0 = _0xADB0.trim();
                if (confirm("You are about to change your locked name to: '" + _0xADB0 + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                    _0xB9E0(_0xADB0)
                }
            });
            $("#btn-updateSP").on("click", function () {
                _0xB9E0()
            });
            $("#btn-subpanel-rules").on("click", function () {
                _0xB951.rules = true;
                _0xB9ED()
            })
        }

        function _0xB85A() {
            _0xB9ED();
            $("#spNameColor").spectrum({
                color: _0xB951.nameColor,
                showAlpha: false,
                showInput: true,
                preferredFormat: "rgb"
            });
            $("#spChatColor").spectrum({
                showPaletteOnly: true,
                showPalette: true,
                color: _0xAF1C[_0xB951.chatColor],
                palette: _0xAF1C
            });
            $("#spSkinName").val(_0xB951.skinName);
            $("#spLowerName").prop("checked", _0xB951.lowerName);
            $("#spEffect select").val(_0xB951.effect)
        }

        function _0xB9E0(_0xADCA) {
            _0xB951.skinName = $("#spSkinName").val().toLowerCase();
            _0xB951.lowerName = $("#spLowerName").prop("checked");
            _0xB951.nameColor = $("#spNameColor").spectrum("get").toRgb();
            var _0xADB0 = $("#spChatColor").spectrum("get").toHexString().toUpperCase();
            var _0xADA3 = 0;
            for (var _0xADBD = 0; _0xADBD < _0xAF1C.length; _0xADBD++) {
                if (_0xAF1C[_0xADBD] == _0xADB0) {
                    _0xADA3 = _0xADBD;
                    break
                }
            };
            _0xB951.chatColor = _0xADA3;
            _0xB951.effect = parseInt($("#spEffect").val());
            _0xB66C.sendPacket(new _0xB59C.sendSubPanel(_0xADCA))
        }

        function _0xB9ED() {
            if (_0xB4B2 || _0xB66C.subPanelOverride) {
                $("#btn-reddit").css("display", "none");
                $("#btn-cellpanel").css("display", "block");
                if (_0xB4B2) {
                    $(".subpanel-name-dashboard").css("display", "")
                } else {
                    $(".subpanel-name-dashboard").css("display", "none")
                };
                if (_0xB951.rules) {
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

        function _0xB3EF(_0xADA3) {
            if (!_0xB66C.accountListeners.loadSubPanel) {
                _0xB66C.accountListeners.loadSubPanel = firebase.firestore().collection("accounts").doc(_0xADA3).onSnapshot((_0xADA3) => {
                    if (!_0xADA3.exists || !_0xADA3.data().locked) {
                        _0xB4B2 = false;
                        if ($("#main-subpanel").css("display") !== "none") {
                            _0xADB0("main-servers")
                        }
                    } else {
                        _0xB4B2 = true;
                        $("#spLockedName").html(_0xADA3.data().name);
                        if (_0xADA3.data().lastChange !== undefined) {
                            $("#btn-chg-ln").attr("title", "Last Changed: " + new Date(_0xADA3.data().lastChange).toLocaleString())
                        };
                        if (_0xADA3.data().expiry !== null) {
                            $("#spExpiry").html(new Date(_0xADA3.data().expiry.seconds * 1000).toLocaleString())
                        } else {
                            $("#spExpiry").html("Never")
                        }
                    };
                    _0xB9ED();
                    _0xB66C.accountListeners.loadSubPanel();
                    _0xB66C.accountListeners.loadSubPanel = null
                }, (_0xADA3) => {
                    _0xB66C.accountListeners.loadSubPanel();
                    _0xB66C.accountListeners.loadSubPanel = null
                })
            }
        }

        function _0xB819(_0xADBD, _0xADA3, _0xADD7, _0xADB0, _0xADE4, _0xADF1, _0xADCA) {
            this.name = _0xADBD;
            this.ip = _0xADA3;
            this.players = _0xADD7;
            this.mode = _0xADB0;
            this.region = _0xADE4;
            this.playersCurrent = 0;
            this.ssl = _0xADF1;
            this.order = _0xADCA
        }

        function _0xB44A() {
            $("#servers-body-eu").html("");
            $("#servers-body-na").html("");
            $("#servers-body-ap").html("");
            for (var _0xADA3 in _0xB833) {
                for (var _0xADB0 in _0xB833[_0xADA3]) {
                    var _0xADCA = _0xB833[_0xADA3][_0xADB0];
                    $("#servers-body-" + _0xADCA.region).append("<tr id=\"s_" + _0xADCA.name + "\" class=\"server-row\" server=\"" + _0xADCA.name + "\"><td class=\"server-table-name\">" + _0xADCA.name + "</td><td class=\"server-table-players\">" + _0xADCA.players + "</td><td class=\"server-table-mode\">" + _0xADCA.mode + "</td></tr>")
                }
            };
            for (var _0xADB0 in _0xADBD) {
                var _0xADCA = _0xADBD[_0xADB0];
                $("#servers-body-" + _0xADCA.region).prepend("<tr id=\"s_" + _0xADCA.name + "\" class=\"account-server server-row\" server=\"" + _0xADCA.name + "\"><td class=\"server-table-name\">" + _0xADCA.name + "</td><td class=\"server-table-players\">" + _0xADCA.players + "</td><td class=\"server-table-mode\">" + _0xADCA.mode + "</td></tr>")
            };
            $(".server-row").on("click", function () {
                _0xB7FF($(this).attr("server"))
            })
        }

        function _0xB1E7(_0xADA3) {
            for (var _0xADB0 in _0xADBD) {
                if (_0xADA3.toLowerCase() === _0xADB0.toLowerCase()) {
                    return _0xADBD[_0xADB0]
                }
            };
            return null
        }

        function _0xB242(_0xADA3) {
            for (var _0xADB0 in _0xB833) {
                for (var _0xADBD in _0xB833[_0xADB0]) {
                    if (_0xADBD.toLowerCase() === _0xADA3.toLowerCase()) {
                        return _0xB833[_0xADB0][_0xADBD]
                    }
                }
            };
            return null
        }

        function _0xB7FF(_0xADA3) {
            if (_0xB7E5 != null) {
                $("#s_" + _0xB7E5.name).removeClass("server-selected")
            };
            _0xB7E5 = _0xB242(_0xADA3) || (Object.keys(_0xADBD).length > 0 ? _0xB1E7(_0xADA3) : null);
            if (_0xB7E5 != null) {
                $("#s_" + _0xB7E5.name).addClass("server-selected")
            }
        }

        function _0xB7F2(_0xADA3) {
            _0xADA3 = _0xADA3.toLowerCase();
            var _0xADB0 = $("#server-tab-" + _0xADA3);
            $(".server-active").css("background-color", "inherit");
            $("#server-tab-container").children().removeClass("server-active");
            _0xADB0.addClass("server-active");
            $(".server-active").css("background-color", _0xB96B.uiMenuSubBackgroundColor);
            $("#server-content").children().css("display", "none");
            $("#servers-" + _0xADA3).css("display", "block")
        }

        function _0xADCA(_0xADB0, _0xADE4) {
            var _0xADCA = 0;
            for (tab in _0xB575._ChatTabs) {
                var _0xADFE = _0xB575._ChatTabs[tab];
                if ((_0xADB0 & _0xADFE.flags) != _0xADB0) {
                    continue
                };
                var _0xADD7 = $("#chat-body-" + tab + " tr").length;
                if (_0xADD7 >= _0xADFE.maxMessages) {
                    $("#chat-body-" + tab + " tr:first-child").remove()
                };
                var _0xADA3 = _0xADCA > 0 ? _0xADE4.cloneNode(true) : _0xADE4;
                _0xADCA++;
                var _0xADF1 = document.createElement("tr");
                _0xADF1.appendChild(_0xADA3);
                document.getElementById("chat-body-" + tab).appendChild(_0xADF1);
                var _0xADBD = $("#chat-container-" + tab);
                if (_0xADBD[0].scrollHeight - _0xADBD[0].scrollTop < _0xADBD.outerHeight() + 150) {
                    _0xADBD.scrollTop(_0xADBD[0].scrollHeight)
                }
            }
        }

        function _0xB13E(_0xADA3) {
            if (_0xADA3.length == 0) {
                return
            } else {
                if (_0xADA3.charAt(0) == "/") {
                    _0xB5B6(_0xADA3)
                } else {
                    _0xB66C.sendPacket(new _0xB59C.sendChat(_0xADA3, 0));
                    _0xB840("")
                }
            }
        }

        function _0xB840(_0xADA3) {
            $("#chat-input").val(_0xADA3)
        }

        function _0xADD7(_0xADA3) {
            $("#chat-input").val(_0xB1F4() + _0xADA3)
        }

        function _0xB1F4() {
            return $("#chat-input").val()
        }

        function _0xB5B6(_0xADCA) {
            var _0xADD7 = _0xADCA.split(" ");
            var _0xADB0 = _0xADD7[0];
            var _0xADA3 = _0xADB0.substring(1);
            _0xB840("");
            var _0xADBD = false;
            Object.keys(_0xAFEC).findIndex((_0xADB0) => {
                if (_0xAFEC[_0xADB0].triggers.findIndex((_0xADB0) => {
                        return _0xADB0.toUpperCase() === _0xADA3.toUpperCase()
                    }) > -1 && _0xADBD == false) {
                    _0xAFEC[_0xADB0].action(_0xADD7.slice(1));
                    _0xADBD = true;
                    return
                }
            });
            if (_0xADBD == false) {
                _0xB66C.selfMsg("Invalid command!")
            }
        }

        function _0xB72F() {
            var _0xADB0 = $("#chat-tab-container");
            var _0xADA3 = $("#chat-container");
            _0xADB0.empty();
            _0xADA3.empty();
            for (var _0xADBD in _0xB575._ChatTabs) {
                var _0xADCA = _0xB575._ChatTabs[_0xADBD];
                if (_0xADCA.name.length == 0) {
                    _0xADCA.name = "Unnamed"
                };
                _0xADB0.append("<li class='chat-tab' id='chat-tab-" + _0xADBD + "' name='" + _0xADBD + "'><span>" + _0xADCA.name + "</span></li>");
                _0xADA3.append("<div class='chat-inner-container' id='chat-container-" + _0xADBD + "'><table class='chat-table'><tbody id='chat-body-" + _0xADBD + "'></tbody></table></div>")
            };
            $(".chat-tab").on("click", function () {
                _0xB7BE($(this).attr("name"))
            }).css("border-color", _0xB96B.uiBorderColor);
            if (_0xB7CB >= 0 && _0xB7CB < _0xB575._ChatTabs.length) {
                _0xB7BE(_0xB7CB)
            } else {
                _0xB7BE(0)
            }
        }

        function _0xB73C() {
            for (var _0xADA3 in _0xB575._ChatTabs) {
                var _0xADB0 = _0xB575._ChatTabs[_0xADA3];
                if (!_0xADB0) {
                    continue
                };
                if (_0xADB0.name.length == 0) {
                    _0xADB0.name = "Unnamed"
                };
                var _0xADBD = $("#chat-tab-" + _0xADA3);
                if (_0xADBD) {
                    _0xADBD.html("<span>" + _0xADB0.name + "</span>")
                }
            }
        }

        function _0xB7BE(_0xADA3) {
            $(".chat-tab").removeClass("chat-active-tab");
            $(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
            _0xB7CB = _0xADA3;
            var _0xADB0 = _0xB575._ChatTabs[_0xADA3];
            if (!_0xADB0) {
                return
            };
            $("#chat-tab-" + _0xADA3).addClass("chat-active-tab");
            $("#chat-container-" + _0xADA3).addClass("chat-active-container").css("display", "block")
        }

        function _0xAE80(_0xADBD = 0) {
            var _0xADA3 = $("#cte-tab-selector");
            _0xADA3.empty();
            for (var _0xADB0 in _0xB575._ChatTabs) {
                _0xADA3.append("<option value='" + _0xADB0 + "'>" + _0xB575._ChatTabs[_0xADB0].name + "</option>")
            };
            _0xADA3.prop("selectedIndex", _0xADBD);
            _0xADA3.trigger("change")
        }

        function _0xAF50(_0xADBD) {
            var _0xADE4 = $("#cte-tab-selector").val();
            var _0xADD7 = {
                name: "",
                flags: 0,
                maxMessages: 0
            };
            var _0xADB0 = _0xB575._ChatTabs[_0xADE4];
            if (_0xADB0) {
                for (var _0xADCA in _0xADD7) {
                    _0xADD7[_0xADCA] = _0xADB0[_0xADCA]
                }
            };
            $("#cte-tab-name").val(_0xADD7.name);
            for (var _0xADF1 in _0xAF77) {
                var _0xADA3 = (_0xAF77[_0xADF1] & _0xADD7.flags) == _0xAF77[_0xADF1];
                $("#cte-type-" + _0xADF1.toLowerCase()).prop("checked", _0xADA3)
            };
            $("#cte-max-messages").val(_0xADD7.maxMessages)
        }

        function _0xAF6A(_0xADA3) {
            var _0xADCA = $("#cte-tab-selector").val();
            var _0xADFE = _0xB575._ChatTabs[_0xADCA];
            if (!_0xADFE) {
                return
            };
            var _0xADF1 = _0xADFE.name;
            var _0xADE4 = $("#cte-tab-name").val();
            if (_0xADE4.length == 0) {
                return
            };
            var _0xADBD = _0xADE4 != _0xADF1;
            var _0xADB0 = 0;
            var _0xADD7 = parseInt($("#cte-max-messages").val());
            for (var _0xAE0B in _0xAF77) {
                if ($("#cte-type-" + _0xAE0B.toLowerCase()).prop("checked")) {
                    _0xADB0 += _0xAF77[_0xAE0B]
                }
            };
            _0xADFE.name = _0xADE4;
            _0xADFE.flags = _0xADB0;
            _0xADFE.maxMessages = _0xADD7;
            if (_0xADBD) {
                _0xAE80(_0xADCA);
                _0xB73C()
            }
        }

        function _0xAF36() {
            var _0xADA3 = {
                name: "New",
                flags: 0,
                maxMessages: 100
            };
            _0xB575._ChatTabs.push(_0xADA3);
            _0xAE80(_0xB575._ChatTabs.length - 1);
            _0xB72F()
        }

        function _0xAF43() {
            var _0xADA3 = $("#cte-tab-selector").val();
            var _0xADB0 = _0xB575._ChatTabs[_0xADA3];
            if (!_0xADB0) {
                return
            };
            _0xB575._ChatTabs.splice(_0xADA3, 1);
            _0xAE80();
            _0xB72F()
        }

        function _0xAF5D(_0xADD7) {
            var _0xADA3 = parseInt($("#cte-tab-selector").val());
            var _0xADCA = _0xB575._ChatTabs[_0xADA3];
            if (!_0xADCA) {
                return
            };
            var _0xADB0;
            if (_0xADD7) {
                _0xADB0 = _0xADA3 - 1
            } else {
                _0xADB0 = _0xADA3 + 1
            };
            var _0xADBD = _0xB575._ChatTabs[_0xADB0];
            if (!_0xADBD) {
                return
            };
            _0xB575._ChatTabs[_0xADA3] = _0xADBD;
            _0xB575._ChatTabs[_0xADB0] = _0xADCA;
            _0xAE80(_0xADB0);
            _0xB73C();
            _0xB7BE(_0xADB0)
        }
        var _0xAF29 = function (_0xADA3) {
            _0xB568(_0xADA3, this.innerText, this.dataset.playerId, -1)
        };
        var _0xB604 = function (_0xADA3) {
            var _0xADCA = _0xADA3.offsetY;
            var _0xADBD = Math.floor(_0xADCA / 20);
            if (_0xADCA % 20 < 5) {
                return
            };
            var _0xADB0 = _0xB66C.party[_0xADBD];
            if (_0xADB0 == null) {
                return
            };
            _0xB568(_0xADA3, _0xADB0.name, _0xADB0.id, _0xADBD)
        };

        function _0xB568(_0xADA3, _0xADBD, _0xADB0, _0xADD7) {
            var _0xADCA = document.getElementById("context-name");
            _0xADCA.innerText = _0xADBD || "An unnamed cell";
            _0xAFF9.data("selected", _0xADB0);
            _0xAFF9.data("party", _0xADD7);
            $(".context-action").css("display", "none");
            if (_0xADD7 == -1) {
                $("#menu-invite").css("display", "block");
                $("#menu-whisper").css("display", "block");
                $("#menu-block").css("display", "block");
                $("#menu-profile").css("display", "block")
            } else {
                $("#menu-whisper").css("display", "block");
                $("#menu-profile").css("display", "block");
                if (_0xB66C.isPartyLeader()) {
                    $("#menu-pu_pr").css("display", "block");
                    $("#menu-promote").css("display", "block");
                    $("#menu-kick").css("display", "block")
                }
            };
            if (_0xB66C.spectate) {
                $("#menu-spectate").css("display", "block")
            };
            _0xAFF9.css("display", "block");
            _0xAFF9.css("left", Math.min(_0xB66C.mouseRawX, window.innerWidth - _0xAFF9.width()));
            _0xAFF9.css("top", Math.min(_0xB66C.mouseRawY, window.innerHeight - _0xAFF9.height()))
        }

        function _0xB5D0(_0xADA3) {
            return _0xADA3.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function _0xB500(_0xADB0, _0xADE4, _0xAE25, _0xAE32, _0xAE18, _0xADA3, _0xADD7) {
            var _0xADBD = ((_0xAE25 - _0xB66C.serverData.border.left) / _0xB66C.serverData.border.width) * _0xB4D9.width;
            var _0xADCA = ((_0xAE32 - _0xB66C.serverData.border.top) / _0xB66C.serverData.border.height) * _0xB4D9.height;
            _0xADB0.beginPath();
            _0xADB0.arc(_0xADBD, _0xADCA, _0xAE18, 0, _0xB62B, false);
            _0xADB0.fillStyle = _0xADA3;
            _0xADB0.fill();
            if (_0xADD7) {
                var _0xAE0B = (_0xADB0.measureText(_0xADE4).width / 2);
                var _0xADF1 = _0xADBD - _0xAE0B;
                var _0xADFE = _0xADCA - 5;
                _0xADB0.fillText(_0xADE4, _0xADF1, _0xADFE)
            }
        }

        function _0xAF91(_0xADB0) {
            var _0xAE18 = _0xB4BF.pivot.x - (_0xB652.stage.position.x / _0xB66C.scale) + ((_0xB66C.mouseRawX * _0xB582.resolution) / _0xB66C.scale);
            var _0xAE25 = _0xB4BF.pivot.y - (_0xB652.stage.position.y / _0xB66C.scale) + ((_0xB66C.mouseRawY * _0xB582.resolution) / _0xB66C.scale);
            var _0xADFE = null;
            var _0xADD7;
            for (var _0xADBD in _0xB66C.bucket) {
                _0xADD7 = _0xB66C.bucket[_0xADBD];
                if (_0xADD7.size < 25) {
                    continue
                };
                var _0xAE0B = _0xADD7.y - _0xADD7.size;
                var _0xADA3 = _0xADD7.y + _0xADD7.size;
                var _0xADCA = _0xADD7.x - _0xADD7.size;
                var _0xADF1 = _0xADD7.x + _0xADD7.size;
                if (_0xAE25 > _0xADA3) {
                    continue
                };
                if (_0xAE25 < _0xAE0B) {
                    continue
                };
                if (_0xAE18 > _0xADF1) {
                    continue
                };
                if (_0xAE18 < _0xADCA) {
                    continue
                };
                _0xADFE = _0xADD7;
                break
            };
            if (_0xADFE != null && _0xADFE.playerId != 0 && (!_0xADB0 || _0xADB0.target.id == "canvas")) {
                var _0xADE4 = _0xB66C.playerRegistry.getPlayer(_0xADFE.playerId);
                if (_0xADE4 != null) {
                    _0xB568(_0xADB0, _0xADE4.name, _0xADFE.playerId, -1)
                }
            }
        }

        function _0xB88E(_0xADA3) {
            if (_0xADA3.css("display") == "none") {
                _0xADA3.css("display", "block");
                _0xADA3.animate({
                    opacity: 1
                }, 500)
            }
        }

        function _0xB2C4(_0xADA3) {
            if (_0xADA3.css("display") == "block" && _0xADA3.css("opacity") == 1) {
                _0xADA3.animate({
                    opacity: 0
                }, 500, function () {
                    _0xADA3.css("display", "none")
                })
            }
        }

        function _0xB992(_0xADA3) {
            if (_0xADA3.css("display") == "block" && _0xADA3.css("opacity") == 1) {
                _0xB2C4(_0xADA3)
            } else {
                if (_0xADA3.css("display") == "none") {
                    _0xB88E(_0xADA3)
                }
            }
        }

        function _0xB2D1() {
            $(".popup-panel").each(function () {
                _0xB2C4($(this))
            })
        }

        function _0xB360(_0xADA3) {
            return _0xADA3.css("display") === "none"
        }

        function _0xB881() {
            _0xB2F8.show();
            if (_0xB66C.party.length == 0 || _0xB575.cHidePartyPanel) {
                _0xB0D6.partyPanel.css("display", "none")
            };
            if (_0xB575.cHideChat) {
                $("#chat-panel").css("display", "none")
            };
            if (_0xB575.cHideMinimap) {
                $("#minimap-panel").css("display", "none")
            }
        }

        function _0xB2B7() {
            _0xB2F8.hide()
        }

        function _0xB874() {
            $("#guest").hide();
            $("#account-loader").show()
        }

        function _0xB2AA() {
            $("#authed").hide();
            $("#account-loader").hide();
            $("#no_cookie_consent").hide();
            $("#guest").show()
        }

        function _0xAF9E(_0xADA3) {
            var _0xADB0 = _0xADA3.attr("id");
            _0xB575[_0xADB0] = _0xADA3.prop("checked");
            _0xB770(_0xADB0)
        }

        function _0xAFB8(_0xADA3) {
            var _0xADB0 = _0xADA3.attr("id");
            _0xB575[_0xADB0] = _0xADA3.val();
            _0xB770(_0xADB0, _0xADA3.val())
        }

        function _0xAFAB(_0xADA3) {
            var _0xADB0 = _0xADA3.attr("id");
            _0xB770(_0xADB0, _0xADA3.val())
        }

        function _0xB770(_0xADA3, _0xADB0) {
            var _0xAD96 = _0xAF84[_0xADA3];
            if (_0xAD96 != null) {
                _0xAD96(_0xADB0)
            }
        }

        function _0xB84D(_0xAD96, _0xADA3) {
            if (_0xADA3 != null) {
                _0xB96B[_0xAD96] = _0xADA3;
                _0xB770(_0xAD96, _0xADA3)
            }
        }

        function _0xB77D() {
            if (!_0xB006.consented) {
                return
            };
            _0xB575.iChatWidth = $("#chat-panel").css("width");
            _0xB575.iChatHeight = $("#chat-panel").css("height");
            window.localStorage.setItem("options", JSON.stringify(_0xB575));
            window.localStorage.setItem("keybinds", JSON.stringify(_0xB387));
            window.localStorage.setItem("name", $("#name-box").val());
            window.localStorage.setItem("theme", JSON.stringify(_0xB96B));
            window.localStorage.setItem("subpanel", JSON.stringify(_0xB951))
        }

        function _0xB416() {
            if (!_0xB006.consented) {
                return
            };
            var _0xAE18 = window.localStorage.getItem("theme");
            if (_0xAE18) {
                _0xB47E(_0xAE18)
            };
            var _0xADD7 = window.localStorage.getItem("keybinds");
            if (_0xADD7) {
                _0xADD7 = JSON.parse(_0xADD7);
                for (var _0xADBD in _0xADD7) {
                    if (_0xADD7[_0xADBD] != null && Number.isInteger(_0xADD7[_0xADBD])) {
                        _0xB387[_0xADBD] = _0xADD7[_0xADBD];
                        _0xB9C6($("#" + _0xADBD))
                    }
                }
            };
            var _0xADF1 = window.localStorage.getItem("options");
            if (_0xADF1) {
                _0xADF1 = JSON.parse(_0xADF1);
                for (var _0xADCA in _0xB575) {
                    if ((_0xADCA in _0xADF1) === false) {
                        _0xADF1[_0xADCA] = _0xB575[_0xADCA]
                    }
                }
            } else {
                _0xADF1 = _0xB575
            };
            for (var _0xADCA in _0xADF1) {
                var _0xADB0 = _0xADCA.charAt(0);
                if (_0xADB0 == "c") {
                    if (_0xADF1[_0xADCA] == true) {
                        var _0xADA3 = $("#" + _0xADCA);
                        _0xADA3.prop("checked", _0xADF1[_0xADCA]);
                        _0xAF9E(_0xADA3)
                    }
                } else {
                    if (_0xADB0 == "s") {
                        var _0xADFE = $("#" + _0xADCA);
                        _0xADFE.val(_0xADF1[_0xADCA]);
                        _0xAFB8(_0xADFE)
                    } else {
                        if (_0xADB0 == "i") {
                            _0xB575[_0xADCA] = _0xADF1[_0xADCA]
                        } else {
                            if (_0xADB0 == "r") {
                                _0xB575[_0xADCA] = _0xADF1[_0xADCA];
                                $("#" + _0xADCA).val(_0xB575[_0xADCA]);
                                _0xAFAB($("#" + _0xADCA))
                            } else {
                                _0xB575[_0xADCA] = _0xADF1[_0xADCA]
                            }
                        }
                    }
                }
            };
            $("#chat-panel").css("width", _0xB575.iChatWidth);
            $("#chat-panel").css("height", _0xB575.iChatHeight);
            if (!_0xB575.cThemeEnabled) {
                _0xB770("cThemeEnabled")
            };
            var _0xADE4 = window.localStorage.getItem("name");
            if (_0xADE4 != null) {
                $("#name-box").val(_0xADE4)
            };
            var _0xAE0B = window.localStorage.getItem("subpanel");
            if (_0xAE0B) {
                _0xAE0B = JSON.parse(_0xAE0B);
                for (var _0xADCA in _0xAE0B) {
                    if (!_0xAE0B[_0xADCA]) {
                        continue
                    };
                    if (_0xAE0B[_0xADCA].length != 0) {
                        _0xB951[_0xADCA] = _0xAE0B[_0xADCA]
                    }
                }
            };
            _0xB951.lockedName = "";
            _0xB9ED()
        }

        function _0xB756() {
            for (var _0xADB0 in _0xB0BC) {
                var _0xADA3 = _0xADB0.charAt(0);
                if (_0xADA3 == "r") {
                    $("#" + _0xADB0).val(_0xB0BC[_0xADB0]);
                    _0xAFAB($("#" + _0xADB0))
                } else {
                    if (_0xADA3 == "u") {
                        _0xB96B[_0xADB0] = _0xB0BC[_0xADB0];
                        $("#" + _0xADB0).spectrum("set", _0xB96B[_0xADB0]);
                        _0xB770(_0xADB0, _0xB96B[_0xADB0])
                    } else {
                        if (_0xADA3 == "a") {
                            _0xB84D(_0xADB0, "")
                        } else {
                            _0xB96B[_0xADB0] = _0xB0BC[_0xADB0]
                        }
                    }
                }
            };
            _0xB96B._FoodColors = []
        }

        function _0xB47E(_0xADA3) {
            try {
                var _0xADCA = JSON.parse(_0xADA3);
                for (var _0xADBD in _0xADCA) {
                    if (_0xB96B[_0xADBD] != null && _0xADCA[_0xADBD].length != 0) {
                        _0xB96B[_0xADBD] = _0xADCA[_0xADBD];
                        var _0xADB0 = _0xADBD.charAt(0);
                        if (_0xADB0 == "u") {
                            $("#" + _0xADBD).spectrum("set", _0xB96B[_0xADBD]);
                            _0xB770(_0xADBD, _0xB96B[_0xADBD])
                        } else {
                            if (_0xADB0 == "r") {
                                $("#" + _0xADBD).val(_0xB96B[_0xADBD]);
                                _0xAFAB($("#" + _0xADBD))
                            } else {
                                if (_0xADB0 == "a") {
                                    _0xB84D(_0xADBD, _0xB96B[_0xADBD])
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                _0xB756()
            } finally {
                _0xB749()
            }
        }

        function _0xB48B(_0xADA3) {
            if (/\.(json)$/i ["test"](_0xADA3.name)) {
                var _0xADB0 = new FileReader();
                _0xADB0.addEventListener("load", function () {
                    if (!_0xB575.cThemeEnabled) {
                        _0xB18C()
                    };
                    _0xB756();
                    _0xB47E(this.result)
                }, false);
                _0xADB0.readAsText(_0xADA3)
            }
        }

        function _0xB18C() {
            $("#cThemeEnabled").prop("checked", true).trigger("change")
        }

        function _0xB5C3(_0xADBD) {
            var _0xADCA = _0xADBD.split(" ");
            var _0xADB0 = "";
            var _0xADD7 = null;
            for (var _0xADA3 = 0; _0xADA3 < _0xADCA.length; _0xADA3++) {
                if (_0xADA3 != 0) {
                    _0xADB0 += " "
                };
                _0xADD7 = _0xADCA[_0xADA3];
                if (_0xB124[_0xADD7] != null) {
                    if (_0xADD7.startsWith(":") && _0xADD7.endsWith(":")) {
                        _0xADD7 = _0xADD7.substring(1, _0xADD7.length - 1)
                    };
                    _0xADB0 += "<img src=\"https://gamedata.gota.io/emotes/" + _0xADD7 + ".png\" height=\"17\" width=\"17\" alt=\"" + _0xADD7 + "\">"
                } else {
                    if (gifEmoteList[_0xADD7] != null) {
                        if (_0xADD7.startsWith(":") && _0xADD7.endsWith(":")) {
                            _0xADD7 = _0xADD7.substring(1, _0xADD7.length - 1)
                        };
                        _0xADB0 += "<img src=\"https://gamedata.gota.io/emotes/gifs/" + _0xADD7 + ".gif\" height=\"17\" width=\"17\" alt=\"" + _0xADD7 + "\">"
                    } else {
                        _0xADB0 += _0xADD7
                    }
                }
            };
            return _0xADB0
        }

        function _0xB5EA(_0xADA3) {
            this.particles = [];
            this.MAX_PARTICLES = _0xADA3;
            this.init = function () {
                if (!_0xB14B.particles) {
                    return
                };
                for (var _0xADA3 = 0; _0xADA3 < this.MAX_PARTICLES; _0xADA3++) {
                    var _0xADB0 = new _0xB5F7("images/events/" + _0xB14B.key + "/particles.png", Math.floor(Math.random() * 7));
                    this.particles.push(_0xADB0)
                }
            };
            this.onTick = function (_0xADA3, _0xADB0, _0xADD7, _0xADE4) {
                _0xADB0 = _0xADB0 / 1000;
                for (var _0xADBD in this.particles) {
                    var _0xADCA = this.particles[_0xADBD];
                    _0xADCA.draw(_0xADA3, _0xADB0)
                }
            };
            this.init(_0xADA3)
        }

        function _0xB5F7(_0xADB0, _0xADA3) {
            this.image = null;
            this.frame = _0xADA3;
            this.x = 0;
            this.y = 0;
            this.speed = 0;
            this.angle = 0;
            this.init = function (_0xADA3) {
                this.image = new Image();
                this.image.src = _0xADA3;
                this.x = Math.random();
                this.y = Math.random() - 1.25;
                this.speed = ((Math.random() * 0.00075) + 0.0005) * 60;
                this.angle = 0
            };
            this.draw = function (_0xADA3, _0xADB0) {
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
                var _0xADBD = _0xADB0 * this.speed;
                this.x += _0xADBD * Math.sin(this.angle);
                this.y += _0xADBD * Math.cos(this.angle);
                var _0xADD7 = _0xAE9A.width * this.x;
                var _0xADCA = _0xAE9A.height * this.y;
                _0xADA3.drawImage(this.image, 25 * this.frame, 0, 25, 60, _0xADD7, _0xADCA, 25, 60)
            };
            this.init(_0xADB0)
        }
        const _0xB6E1 = {
            MODIFIER: 1,
            PASSIVE: 2,
            CONSUMABLE: 3,
            DEBUFF: 4,
            NONE: 0
        };
        var _0xB6AD, _0xB6BA;
        var _0xB6D4 = {
            0: new _0xB6A0("Random", "random", _0xB6E1.NONE),
            1: new _0xB6A0("Maximum Cells Upgrade", "extracells", _0xB6E1.MODIFIER),
            2: new _0xB6A0("Extra Consumable Slot", "extraconsumable", _0xB6E1.MODIFIER),
            3: new _0xB6A0("Merge", "merge", _0xB6E1.PASSIVE),
            4: new _0xB6A0("Grow", "grow", _0xB6E1.PASSIVE),
            5: new _0xB6A0("Speed", "speed", _0xB6E1.PASSIVE),
            6: new _0xB6A0("Shield", "shield", _0xB6E1.PASSIVE),
            7: new _0xB6A0("Virus", "spike", _0xB6E1.CONSUMABLE),
            8: new _0xB6A0("Disrupt", "disrupt", _0xB6E1.CONSUMABLE),
            9: new _0xB6A0("Teleport", "teleport", _0xB6E1.CONSUMABLE),
            10: new _0xB6A0("Disrupt", "_disrupt", _0xB6E1.DEBUFF),
            11: new _0xB6A0("Silver", "phoenix", _0xB6E1.MODIFIER),
            12: new _0xB6A0("Consumable Shield", "_shield", _0xB6E1.CONSUMABLE),
            13: new _0xB6A0("Magnet", "magnet", _0xB6E1.PASSIVE),
            14: new _0xB6A0("Decay", "decay", _0xB6E1.CONSUMABLE),
            15: new _0xB6A0("Decay", "_decay", _0xB6E1.DEBUFF)
        };

        function _0xB6A0(_0xADB0, _0xADA3, _0xADBD) {
            this.name = _0xADB0;
            this.img = _0xADA3;
            this.type = _0xADBD;
            this.image = null;
            this.texture = null
        }

        function _0xB423() {
            for (var _0xADB0 in _0xB6D4) {
                var _0xADA3 = _0xB6D4[_0xADB0];
                var _0xADCA = "images/powerups/" + _0xADA3.img + ".png";
                var _0xADBD = new Image();
                _0xADBD.addEventListener("load", function (_0xADA3, _0xADB0) {
                    _0xADA3.texture = _0xB645.Texture.from(_0xADB0)
                } ["bind"](null, _0xADA3, _0xADBD));
                _0xADBD.src = _0xADCA;
                _0xADA3.image = _0xADBD
            };
            _0xB6BA = _0xB645.Texture.from("images/shield.png");
            _0xB6AD = _0xB645.Texture.from("images/debuff.png")
        }

        function _0xAE73() {
            this.passiveBuffs = {};
            this.passiveSortedBuffs = [];
            this.consumableBuffs = [];
            this.cache = null;
            this.nextCacheUpdate = 0;
            this.texture = null;
            this.bonusMaxCells = 0;
            this.onAddBuff = function (_0xADBD, _0xADCA, _0xADB0) {
                var _0xADA3 = null;
                var _0xADD7 = _0xB6D4[_0xADBD].type;
                if (_0xADD7 != _0xB6E1.CONSUMABLE) {
                    _0xADA3 = this.passiveBuffs[_0xADBD];
                    if (_0xADA3) {
                        _0xADA3.update(_0xADCA, _0xADB0)
                    } else {
                        _0xADA3 = new _0xAE66(_0xADBD, _0xADCA, _0xADB0);
                        this.passiveBuffs[_0xADBD] = _0xADA3;
                        this.sortPassiveBuffs()
                    };
                    this.onPassiveBuffsUpdate();
                    this.markCacheForUpdate()
                } else {
                    _0xADA3 = new _0xAE66(_0xADBD, _0xADCA, _0xADB0);
                    this.consumableBuffs.push(_0xADA3);
                    this.markCacheForUpdate()
                };
                if (_0xADA3) {
                    _0xB66C.selfMsg("Recieved buff: " + _0xADA3.powerup.name)
                }
            };
            this.onRemoveBuff = function (_0xADBD) {
                var _0xADA3 = null;
                var _0xADCA = _0xB6D4[_0xADBD].type;
                if (_0xADCA != _0xB6E1.CONSUMABLE) {
                    _0xADA3 = this.passiveBuffs[_0xADBD];
                    if (_0xADA3) {
                        delete this.passiveBuffs[_0xADBD];
                        this.sortPassiveBuffs();
                        this.markCacheForUpdate();
                        this.onPassiveBuffsUpdate()
                    }
                } else {
                    for (var _0xADB0 = 0; _0xADB0 < this.consumableBuffs.length; _0xADB0++) {
                        _0xADA3 = this.consumableBuffs[_0xADB0];
                        if (_0xADA3.id == _0xADBD) {
                            this.consumableBuffs.splice(_0xADB0, 1);
                            this.markCacheForUpdate();
                            break
                        }
                    }
                };
                if (_0xADA3) {
                    _0xB66C.selfMsg("Lost buff: " + _0xADA3.powerup.name)
                }
            };
            this.clearBuffs = function (_0xADCA) {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    return
                };
                var _0xADBD = _0xADCA ? _0xADCA : false;
                for (var _0xADB0 in this.passiveBuffs) {
                    var _0xADA3 = this.passiveBuffs[_0xADB0];
                    if (_0xADBD && _0xADA3.powerup.type == _0xB6E1.MODIFIER) {} else {
                        delete this.passiveBuffs[_0xADB0]
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
                for (var _0xADB0 in this.passiveBuffs) {
                    var _0xADA3 = this.passiveBuffs[_0xADB0];
                    if (_0xADA3.powerup.type == _0xB6E1.MODIFIER) {
                        this.passiveSortedBuffs.splice(0, 0, _0xADB0)
                    } else {
                        this.passiveSortedBuffs.push(_0xADB0)
                    }
                }
            };
            this.onPassiveBuffsUpdate = function () {
                this.bonusMaxCells = 0;
                if (this.passiveBuffs[1] != null) {
                    var _0xADA3 = this.passiveBuffs[1];
                    this.bonusMaxCells = _0xADA3.stack * 16
                }
            };
            this.update = function () {
                if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
                    _0xB6C7.visible = false;
                    return
                };
                if (Date.now() >= this.nextCacheUpdate) {
                    this.updateCache();
                    this.nextCacheUpdate = Date.now() + 1000
                };
                if (!this.texture) {
                    this.texture = _0xB645.Texture.from(this.cache.canvas);
                    _0xB6C7.texture = this.texture;
                    _0xB6C7.anchor.set(0)
                };
                _0xB6C7.position.x = _0xB78A.width() + 20 - _0xB652.stage.position.x;
                _0xB6C7.position.y = 15 - _0xB652.stage.position.y;
                _0xB6C7.visible = true
            };
            this.updateCache = function () {
                var _0xADB0 = (this.cache == null || this.cache.canvas == null) ? document.createElement("canvas") : this.cache.canvas;
                var _0xADCA = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
                _0xADB0.width = 55 * _0xADCA;
                _0xADB0.height = 105;
                this.cache = _0xADB0.getContext("2d");
                this.cache.fillStyle = "#222";
                this.cache.font = "bold 16pt Calibri";
                var _0xADD7 = 0,
                    _0xADE4 = 0;
                for (var _0xADBD = 0; _0xADBD < this.passiveSortedBuffs.length; _0xADBD++) {
                    var _0xADA3 = this.passiveBuffs[this.passiveSortedBuffs[_0xADBD]];
                    _0xADA3.draw(this.cache, _0xADD7, _0xADE4);
                    _0xADD7 += 55
                };
                _0xADD7 = 0;
                _0xADE4 = 55;
                for (var _0xADBD = 0; _0xADBD < this.consumableBuffs.length; _0xADBD++) {
                    var _0xADA3 = this.consumableBuffs[_0xADBD];
                    _0xADA3.draw(this.cache, _0xADD7, _0xADE4);
                    _0xADD7 += 55
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
        const _0xAE59 = Math.PI * 1.5;

        function _0xAE66(_0xADB0, _0xADBD, _0xADA3) {
            this.id = _0xADB0;
            this.powerup = _0xB6D4[_0xADB0];
            this.startTime = Date.now();
            this.expireTime = _0xADA3;
            this.stack = _0xADBD;
            this.update = function (_0xADB0, _0xADA3) {
                this.startTime = Date.now();
                this.expireTime = _0xADA3;
                this.stack = _0xADB0
            };
            this.getCooldown = function () {
                if (Date.now() >= this.expireTime) {
                    return 2.0 * Math.PI
                } else {
                    var _0xADB0 = this.expireTime - Date.now();
                    var _0xADBD = this.expireTime - this.startTime;
                    var _0xADA3 = Math.min(_0xADB0 / _0xADBD, 1.0) * 2.0;
                    return _0xADA3 * Math.PI
                }
            };
            this.draw = function (_0xADA3, _0xADB0, _0xADBD) {
                _0xADA3.drawImage(this.powerup.image, _0xADB0, _0xADBD, 50, 50);
                if (this.stack > 1) {
                    _0xADA3.fillStyle = "#000";
                    _0xADA3.fillText(this.stack, _0xADB0 + 35, _0xADBD + 17)
                };
                if (this.expireTime > 0) {
                    _0xADA3.beginPath();
                    _0xADA3.moveTo(_0xADB0 + 25, _0xADBD + 25);
                    _0xADA3.arc(_0xADB0 + 25, _0xADBD + 25, 25, _0xAE59, _0xAE59 - this.getCooldown(), false);
                    _0xADA3.closePath();
                    _0xADA3.globalAlpha = 0.75;
                    _0xADA3.fillStyle = "#222";
                    _0xADA3.fill();
                    _0xADA3.globalAlpha = 1.0
                }
            }
        }
        const _0xB51A = ["hearts"];
        var _0xB50D = [];

        function _0xB25C() {
            this.delay = 0;
            this.frames = [];
            this.isGif = true;
            this.push = function (_0xADA3) {
                this.frames.push(_0xADA3)
            };
            this.getFrame = function (_0xADA3) {
                return this.frames[_0xADA3]
            };
            this.getLength = function () {
                return this.frames.length
            };
            this.getTexture = function () {
                return this.getFrame(Math.floor(_0xB3AE / this.delay) % (this.getLength()))
            };
            this.loadFromFrameData = function (_0xADF1) {
                if (_0xADF1.length === 0) {
                    return
                };
                const _0xADFE = document.createElement("canvas");
                const _0xAE0B = _0xADFE.getContext("2d");
                const _0xADBD = document.createElement("canvas");
                const _0xADCA = _0xADBD.getContext("2d");
                const _0xADD7 = _0xADF1[0].getImage();
                this.delay = _0xADF1[0].frameInfo.delay * 10;
                _0xADFE.width = _0xADD7.width;
                _0xADFE.height = _0xADD7.height;
                _0xADBD.width = _0xADD7.width;
                _0xADBD.height = _0xADD7.height;
                for (const _0xADE4 of _0xADF1) {
                    _0xAE0B.clearRect(0, 0, _0xADFE.width, _0xADFE.height);
                    _0xAE0B.drawImage(_0xADBD, 0, 0);
                    const _0xADA3 = _0xADE4.getImage();
                    const _0xADB0 = _0xADA3.getContext("2d");
                    _0xADCA.drawImage(_0xADA3, 0, 0);
                    _0xADB0.clearRect(0, 0, _0xADA3.width, _0xADA3.height);
                    _0xADB0.drawImage(_0xADBD, 0, 0);
                    const {
                        frameInfo
                    } = _0xADE4;
                    const {
                        disposal
                    } = frameInfo;
                    if (disposal === 2) {
                        _0xADCA.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height)
                    } else {
                        if (disposal === 3) {
                            _0xADCA.clearRect(0, 0, _0xADBD.width, _0xADBD.height);
                            _0xADCA.drawImage(_0xADFE, 0, 0)
                        }
                    };
                    this.push(_0xB645.Texture.from(_0xADA3))
                }
            }
        }

        function _0xB228(_0xADA3) {
            return _0xB6EE[_0xADA3 % _0xB6EE.length]
        }

        function _0xB21B(_0xADA3) {
            return _0xB6FB[_0xADA3 % _0xB6FB.length]
        }

        function _0xB235(_0xADA3) {
            return _0xB054[_0xADA3 % _0xB054.length]
        }

        function _0xB89B(_0xADA3) {
            for (var _0xADB0 = _0xADA3.length - 1; _0xADB0 > 0; _0xADB0--) {
                var _0xADBD = Math.floor(Math.random() * (_0xADB0 + 1));
                var _0xADCA = _0xADA3[_0xADB0];
                _0xADA3[_0xADB0] = _0xADA3[_0xADBD];
                _0xADA3[_0xADBD] = _0xADCA
            };
            return _0xADA3
        }
        var _0xB2DE = [];
        var _0xB2EB = [];
        for (var _0xB305 = 0; _0xB305 < 180; _0xB305++) {
            var _0xAFD2 = tinycolor({
                h: (_0xB305 * 2),
                s: 97.25,
                v: 100
            });
            var _0xAFDF = _0xAFD2.toRgb();
            _0xB2DE[_0xB305] = (_0xAFDF.r << 16) + (_0xAFDF.g << 8) + _0xAFDF.b;
            _0xB2EB[_0xB305] = _0xAFD2.toHexString()
        };
        const _0xB6EE = _0xB89B(_0xB2DE.slice(0));
        const _0xB6FB = _0xB89B(_0xB2EB.slice(0));
        delete _0xB2DE;
        delete _0xB2EB;
        if (_0xB14B.enabled && _0xB14B.foodColors) {
            _0xB228 = function (_0xADA3) {
                return _0xB14B.foodColors[_0xADA3 % _0xB14B.foodColors.length]
            }
        };
        const _0xAF1C = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
        const _0xB985 = {};

        function _0xAE32(_0xADA3) {
            if (_0xADA3 === 0 || _0xADA3 === _0xB66C.playerId) {
                return "You cannot block that player."
            };
            if (_0xAE25.includes(_0xADA3)) {
                delete _0xAE25[_0xADA3];
                return "Unblocked player with ID: " + _0xADA3
            };
            _0xAE25.push(_0xADA3);
            return "Blocked player with ID: " + _0xADA3
        }
        const _0xAFEC = {
            whisper: {
                description: "Whisper a player by ID",
                triggers: ["whisper", "t", "w"],
                action: function (_0xADA3) {
                    var _0xADB0 = parseInt(_0xADA3[0]);
                    if (isNaN(_0xADB0)) {
                        _0xB66C.selfMsg("Invalid player id.");
                        return
                    };
                    var _0xADBD = _0xADA3.slice(1).join(" ");
                    if (_0xADBD.length != 0) {
                        _0xB66C.sendPacket(new _0xB59C.sendWhisper(_0xADB0, _0xADBD))
                    };
                    _0xB840("/t " + _0xADB0 + " ")
                }
            },
            reply_whisper: {
                description: "Reply to previous whisper",
                triggers: ["reply", "r"],
                action: function (_0xADA3) {
                    var _0xADB0 = _0xADA3.join(" ");
                    if (_0xADB0.length != 0) {
                        _0xB66C.sendPacket(new _0xB59C.sendWhisper(0, _0xADB0))
                    };
                    _0xB840("/r ")
                }
            },
            party_chat: {
                description: "Send a message to other party members",
                triggers: ["party", "p"],
                action: function (_0xADA3) {
                    var _0xADB0 = _0xADA3.join(" ");
                    if (_0xADB0.length != 0) {
                        _0xB66C.sendPacket(new _0xB59C.sendChat(_0xADB0, 1))
                    };
                    _0xB840("/p ")
                }
            },
            invite: {
                description: "Invite a player to the party",
                triggers: ["invite", "i"],
                action: function (_0xADA3) {
                    var _0xADB0 = parseInt(_0xADA3[0]);
                    if (!isNaN(_0xADB0)) {
                        _0xB66C.sendPacket(new _0xB59C.sendPartyAction(0, _0xADB0))
                    } else {
                        _0xB66C.selfMsg("Invalid ID.")
                    }
                }
            },
            leave: {
                description: "Leave your current party",
                triggers: ["leave", "l"],
                action: function (_0xADA3) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(3, 0))
                }
            },
            promote: {
                description: "Promote a party member to leader",
                triggers: ["promote"],
                action: function (_0xADA3) {
                    var _0xADB0 = parseInt(_0xADA3[0]);
                    if (!isNaN(_0xADB0)) {
                        _0xB66C.sendPacket(new _0xB59C.sendPartyAction(2, _0xADB0))
                    } else {
                        _0xB66C.selfMsg("Invalid ID.")
                    }
                }
            },
            kick: {
                description: "Kick a player from the party",
                triggers: ["kick"],
                action: function (_0xADA3) {
                    var _0xADB0 = parseInt(_0xADA3[0]);
                    if (!isNaN(_0xADB0)) {
                        _0xB66C.sendPacket(new _0xB59C.sendPartyAction(1, _0xADB0))
                    } else {
                        _0xB66C.selfMsg("Invalid ID.")
                    }
                }
            },
            clear: {
                description: "Clear the chat",
                triggers: ["clear"],
                action: function (_0xADA3) {
                    var _0xADB0 = document.getElementById("chat-body");
                    while (_0xADB0.firstChild != null) {
                        _0xADB0.removeChild(_0xADB0.firstChild)
                    }
                }
            },
            info: {
                description: "Get your current ID",
                triggers: ["info"],
                action: function (_0xADA3) {
                    if (_0xB66C.playerId > 0) {
                        _0xB66C.selfMsg("Your id is " + _0xB66C.playerId)
                    } else {
                        _0xB66C.selfMsg("You need to be connected to a server to use this command.")
                    }
                }
            },
            scrimmenu: {
                description: "Show the scrimmage menu",
                triggers: ["scrimmenu"],
                action: function (_0xADA3) {
                    _0xB7A4.css("display", _0xB7A4.css("display") == "none" ? "block" : "none")
                }
            },
            join: {
                description: "Join a party with a code",
                triggers: ["join", "j"],
                action: function (_0xADA3) {
                    var _0xADB0 = _0xADA3[0];
                    if (_0xADB0 != null && _0xADB0.length != 0) {
                        _0xB66C.sendPacket(new _0xB59C.sendPartyJoin(_0xADB0))
                    }
                }
            },
            private: {
                description: "Set the party to private",
                triggers: ["private"],
                action: function (_0xADA3) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(4, 1))
                }
            },
            public: {
                description: "Allow players to join the party without an invite",
                triggers: ["public"],
                action: function (_0xADA3) {
                    _0xB66C.sendPacket(new _0xB59C.sendPartyAction(4, 0))
                }
            },
            reset_chat: {
                description: "Reset chat size",
                triggers: ["resetchat"],
                action: function (_0xADA3) {
                    $("#chat-panel").css("width", "360px");
                    $("#chat-panel").css("height", "250px")
                }
            },
            reset_chat_tabs: {
                description: "Reset chat tab settings",
                triggers: ["resetchattabs"],
                action: function (_0xADA3) {
                    _0xB575._ChatTabs = JSON.parse(JSON.stringify(_0xB095));
                    _0xAE80();
                    _0xB72F()
                }
            },
            spectate: {
                description: "Spectate a player",
                triggers: ["spectate", "s"],
                action: function (_0xADA3) {
                    var _0xADB0 = parseInt(_0xADA3[0]);
                    if (!isNaN(_0xADB0)) {
                        _0xB66C.sendPacket(new _0xB59C.sendSpectate(_0xADB0))
                    } else {
                        _0xB66C.selfMsg("Invalid ID.")
                    }
                }
            },
            disconnect: {
                description: "Disconnect from the server",
                triggers: ["disconnect"],
                action: function (_0xADA3) {
                    _0xB66C.disconnect()
                }
            },
            account: {
                description: "Get Account UID",
                triggers: ["account"],
                action: function (_0xADA3) {
                    if (_0xBA07 === null) {
                        _0xB66C.selfMsg("You are not logged in.");
                        return
                    };
                    _0xB66C.selfMsg("UID: " + _0xBA07.uid)
                }
            },
            block: {
                description: "Block or unblock a player by ID",
                triggers: ["block", "b"],
                action: function (_0xADA3) {
                    var _0xADBD = parseInt(_0xADA3[0]);
                    if (!isNaN(_0xADBD)) {
                        var _0xADB0 = _0xAE32(_0xADBD);
                        _0xB66C.selfMsg(_0xADB0)
                    }
                }
            }
        };
        const _0xB708 = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "sodaWut", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
        const _0xB24F = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
        const _0xB29D = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        const _0xB394 = ["", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
        var _0xB131 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "flower2", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon"];
        var _0xB158 = null;
        const _0xB867 = -32768;

        function _0xAE8D(_0xAD96) {
            return _0xB29D[(_0xAD96 >> 4) & 0x0f] + _0xB29D[_0xAD96 & 0x0f]
        }

        function _0xB1B3(_0xADCA) {
            if (_0xADCA <= 0) {
                return "0:00"
            };
            var _0xADA3 = Math.floor(_0xADCA / 3600);
            var _0xADB0 = Math.floor((_0xADCA - (_0xADA3 * 3600)) / 60);
            var _0xADBD = _0xADCA - (_0xADA3 * 3600) - (_0xADB0 * 60);
            if (_0xADB0 < 10 && _0xADA3 > 0) {
                _0xADB0 = "0" + _0xADB0
            };
            if (_0xADBD < 10) {
                _0xADBD = "0" + _0xADBD
            };
            return (_0xADA3 > 0 ? _0xADA3 + ":" : "") + _0xADB0 + ":" + _0xADBD
        }

        function _0xB1A6(_0xADB0) {
            var _0xADA3 = _0xADB0.toString().split(".");
            _0xADA3[0] = _0xADA3[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return _0xADA3.join(".")
        }

        function _0xB339(_0xADBD) {
            if (_0xADBD.indexOf("#") === 0) {
                _0xADBD = _0xADBD.slice(1)
            };
            if (_0xADBD.length === 3) {
                _0xADBD = _0xADBD[0] + _0xADBD[0] + _0xADBD[1] + _0xADBD[1] + _0xADBD[2] + _0xADBD[2]
            };
            if (_0xADBD.length !== 6) {
                throw new Error("Invalid HEX color.")
            };
            var _0xADCA = parseInt(_0xADBD.slice(0, 2), 16),
                _0xADB0 = parseInt(_0xADBD.slice(2, 4), 16),
                _0xADA3 = parseInt(_0xADBD.slice(4, 6), 16);
            return (_0xADCA * 0.299 + _0xADB0 * 0.587 + _0xADA3 * 0.114) > 186 ? "#000000" : "#FFFFFF"
        }

        function _0xB201(_0xADA3) {
            if (_0xADA3.dataTransfer.items) {
                for (var _0xADBD = 0; _0xADBD < _0xADA3.dataTransfer.items.length; _0xADBD++) {
                    if (_0xADA3.dataTransfer.items[_0xADBD].kind === "file") {
                        var _0xADB0 = _0xADA3.dataTransfer.items[_0xADBD].getAsFile();
                        return _0xADB0
                    }
                }
            } else {
                for (var _0xADBD = 0; _0xADBD < _0xADA3.dataTransfer.files.length; _0xADBD++) {
                    return _0xADA3.dataTransfer.files[_0xADBD]
                }
            }
        }

        function _0xB0E3(_0xADCA, _0xADB0, _0xADD7) {
            var _0xADBD = new Blob([_0xADB0], {
                type: _0xADD7
            });
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(_0xADBD, _0xADCA)
            } else {
                var _0xADA3 = document.createElement("a"),
                    _0xADE4 = URL.createObjectURL(_0xADBD);
                _0xADA3.href = _0xADE4;
                _0xADA3.download = _0xADCA;
                document.body.appendChild(_0xADA3);
                _0xADA3.click();
                setTimeout(function () {
                    document.body.removeChild(_0xADA3);
                    window.URL.revokeObjectURL(_0xADE4)
                }, 0)
            }
        }

        function _0xB353(_0xADA3) {
            return !!_0xADA3.match(_0xB353.regex)
        }
        _0xB353.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
        const _0xB693 = {
            ALL: 3,
            PARTY: 2,
            SELF: 1,
            NONE: 0
        };
        const _0xB4E6 = {
            DEFAULT: 0,
            SHORT: 1
        };
        const _0xB95E = {
            THICK: 9,
            THIN: 2,
            NONE: 0
        };
        const _0xB269 = {
            ULTRA: 1.0,
            HIGH: 0.8,
            MEDIUM: 0.7,
            LOW: 0.5,
            VERYLOW: 0.25
        };
        const _0xB06E = {
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
        const _0xB7B1 = {
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
        const _0xADF1 = {
            FAILURE: 1,
            SUCCESS: 0
        };
        const _0xB8E9 = {
            ERROR: -1,
            NOT_LOADED: 0,
            LOADING: 1,
            LOADED: 2
        };
        const _0xAF77 = {
            ALL: 0x01,
            PARTY: 0x02,
            WHISPER: 0x04,
            SYSTEM: 0x08,
            ADMIN: 0x10
        };
        const _0xB611 = {
            UNKNOWN: -1,
            ALIVE: 0,
            DEAD: 1,
            SPECTATE: 2
        };
        var _0xB061 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];

        function _0xB527(_0xADB0, _0xADBD, _0xADA3) {
            this.font = _0xADB0;
            this.size = _0xADBD;
            this.outlineColor = _0xADA3 ? _0xADA3 : "#000"
        }
        const _0xB534 = {
            0: new _0xB527("Verdana", 54),
            1: new _0xB527("Blox2", 75),
            2: new _0xB527("burnstown", 81),
            3: new _0xB527("CHLORINR", 75),
            4: new _0xB527("Facon", 75),
            5: new _0xB527("FFFFORWA", 54),
            6: new _0xB527("GypsyCurse", 75),
            7: new _0xB527("Monoton-Regular", 75),
            8: new _0xB527("pdark", 75),
            101: new _0xB527("IceCaps", 81, "#00c9ff"),
            102: new _0xB527("BrazierFlame", 81, "#e25822")
        };
        const _0xB0AF = _0xB534[0];

        function _0xB20E(_0xAD96) {
            return _0xAD96 > 0 && _0xB534[_0xAD96] ? _0xB534[_0xAD96] : _0xB0AF
        }
        for (var _0xB312 in _0xB534) {
            var _0xB172 = _0xB534[_0xB312];
            var _0xB541 = new FontFaceObserver(_0xB172.font);
            _0xB541.load(null, 10000).then(() => {}, () => {})
        };
        _0xB645.TextMetrics._fonts["normal normal normal 75px \"Blox2\""] = {
            ascent: 70,
            descent: 16,
            fontSize: 69
        };

        function _0xB9D3() {
            if (!_0xB006.consented) {
                return
            };
            var _0xADB0 = localStorage.getItem("version");
            var _0xADA3 = version.split(".");
            if (_0xADB0 === null) {
                localStorage.setItem("version", version);
                return
            };
            _0xADB0 = _0xADB0.split(".");
            if (_0xADA3[0] != _0xADB0[0] || _0xADA3[1] != _0xADB0[1]) {
                localStorage.setItem("version", version);
                _0xB2C4(_0xB4CC);
                _0xB88E($("#popup-changelog"))
            }
        }
        $(window).focus(function () {
            _0xB346 = true
        });
        $(window).blur(function () {
            _0xB346 = false
        });

        function _0xB80C() {
            if (_0xB346) {
                return
            };
            if (!("Notification" in window)) {
                return
            };
            if (Notification.permission === "granted") {
                var _0xADA3 = new Notification("Your match has started.", {
                    icon: "https://gota.io/assets/images/favicon.png"
                })
            }
        }
        var _0xB006 = new _0xB013();

        function _0xB013() {
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
                this.consentOption.on("change", function (_0xADA3) {
                    _0xB006.consentHandler($(this).prop("checked"))
                });
                var _0xADA3 = this.getConsentCookie();
                if (_0xADA3 === this.consentCookie.value) {
                    this.consentHandler(true);
                    this.showCookieBanner(false)
                } else {
                    this.consentHandler(false);
                    this.showCookieBanner(true)
                }
            };
            this.consentHandler = function (_0xADA3) {
                this.consented = _0xADA3;
                aiptag.consented = _0xADA3;
                this.consentOption.prop("checked", _0xADA3);
                if (!_0xADA3) {
                    this.deleteConsentCookie();
                    if (firebase.auth().currentUser !== null) {
                        firebase.auth().signOut().then(function () {}).catch((_0xAD96) => {})
                    };
                    $("#authed").hide();
                    $("#account-loader").hide();
                    $("#guest").hide();
                    $("#no_cookie_consent").show();
                    this.showCookieBanner(true)
                } else {
                    this.createConsentCookie();
                    this.showCookieBanner(false);
                    _0xB416();
                    _0xB471();
                    $("#no_cookie_consent").hide();
                    if ($("#account-loader").css("display") !== "none") {
                        $("#guest").hide()
                    } else {
                        $("#guest").show()
                    }
                }
            };
            this.showCookieBanner = function (_0xADA3) {
                if (_0xADA3) {
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
                this.cookieBanner.decline.on("click", function (_0xADA3) {
                    _0xB006.consentHandler(false);
                    _0xB006.showCookieBanner(false)
                });
                this.cookieBanner.accept.on("click", function (_0xADA3) {
                    _0xB006.consentHandler(true);
                    _0xB006.showCookieBanner(false)
                });
                $("#cookie-banner .description").append(" <a href=\"" + this.policyLink + "\" target=\"_blank\">Our Cookie Policy!</a>")
            };
            this.createConsentCookie = function () {
                var _0xADA3 = new Date();
                _0xADA3.setTime(_0xADA3.getTime() + (this.consentCookie.exdays * 24 * 60 * 60 * 1000));
                var _0xADB0 = "expires=" + _0xADA3.toUTCString();
                document.cookie = this.consentCookie.name + "=" + this.consentCookie.value + ";" + _0xADB0 + ";path=" + this.consentCookie.path + ";"
            };
            this.deleteConsentCookie = function () {
                document.cookie = this.consentCookie.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.consentCookie.path + ";"
            };
            this.getConsentCookie = function () {
                var _0xADD7 = this.consentCookie.name + "=";
                var _0xADBD = decodeURIComponent(document.cookie);
                var _0xADB0 = _0xADBD.split(";");
                for (var _0xADCA = 0; _0xADCA < _0xADB0.length; _0xADCA++) {
                    var _0xADA3 = _0xADB0[_0xADCA];
                    while (_0xADA3.charAt(0) == " ") {
                        _0xADA3 = _0xADA3.substring(1)
                    };
                    if (_0xADA3.indexOf(_0xADD7) == 0) {
                        return _0xADA3.substring(_0xADD7.length, _0xADA3.length)
                    }
                };
                return false
            };
            this.backwardsCompatable = function () {
                var _0xADD7 = "cookieconsent_status" + "=";
                var _0xADBD = decodeURIComponent(document.cookie);
                var _0xADB0 = _0xADBD.split(";");
                var _0xADE4 = null;
                for (var _0xADCA = 0; _0xADCA < _0xADB0.length; _0xADCA++) {
                    var _0xADA3 = _0xADB0[_0xADCA];
                    while (_0xADA3.charAt(0) == " ") {
                        _0xADA3 = _0xADA3.substring(1)
                    };
                    if (_0xADA3.indexOf(_0xADD7) == 0) {
                        _0xADE4 = _0xADA3.substring(_0xADD7.length, _0xADA3.length)
                    }
                };
                if (_0xADE4 === "allow") {
                    this.createConsentCookie();
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                } else {
                    document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;"
                }
            }
        }
        var _0xB937 = new _0xB944();

        function _0xB944() {
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

        function _0xB31F() {
            if (typeof aipPlayer != "undefined") {
                aiptag.cmd.player.push(function () {
                    adplayer = new aipPlayer({
                        AD_WIDTH: 960,
                        AD_HEIGHT: 540,
                        AD_CENTERPLAYER: false,
                        LOADING_TEXT: "Advertisement Loading...",
                        PREROLL_ELEM: document.getElementById("preroll"),
                        AIP_COMPLETE: function () {
                            if (!_0xB66C.spectate) {
                                _0xB66C.play()
                            } else {
                                _0xB66C.spec()
                            }
                        }
                    })
                })
            } else {}
        }
        _0xB31F();
        _0xB92A()
    }
    showSideMenu = _0xADB0;
    hideSideMenu = _0xADBD;
    (_0xADA3)("gota.io", 1, "");
    version = "3.4.2";;
    $(_0xADCA)
})()
