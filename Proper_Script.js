// ==UserScript==
// @name            Gota Fixes Beta
// @description     Beta testing for Gota Fixes
// @version         1.0.0
// @author          Camlan
// @discord         Camlan#9322
// @youtube         https://www.youtube.com/user/camlan11
// @match           https://gota.io/web/*
// @downloadUrl     https://dl.dropboxusercontent.com/s/5a99903f346tbx9/gota_fixes_beta.min.user.js
// @run-at          document-start
// ==/UserScript==
var _0x2de0 = ['KEaQT', 'iCDip', 'ZKhSW', 'pmDEo', 'qActe', 'stop', 'fBXBK', 'qXirO', 'TiYbb', 'GMCey', 'pLXsS', '[^ ]+)+)+[', 'IJHoT', 'string', 'EPcoA', 'ercontent.', '2/modded.j', '^([^ ]+( +', 'gmMuF', 'xkxfc', 'fVqTj', 'TTJMr', 'action', 'function *', 'vulmC', 'lercm', 'return /\" ', 'e) {}', 'xxvfY', 'https://dl', 'PNFmv', 'Error', 'InRCR', 'XzkYC', 'Tyxdi', 'cvwmU', 'debu', 'constructo', 'chain', 'send', 'QQDcj', 'com/s/a71v', '^ ]}', 'EqhKi', 'iWjxL', 'test', 'AMDZR', 'kMIMy', 'bsQVv', 'AlGCw', 'EBnwx', '\\( *\\)', 'concat', 'TpmkQ', 'FUpUo', 'RgbrC', 'while (tru', 'call', '0-9a-zA-Z_', 'stateObjec', 'n8ay7k8lh2', '+ this + \"', 'apply', 'VgjmC', '$]*)', 'DKaKz', 'gger', '\\+\\+ *(?:[', 'yUyte', 'a-zA-Z_$][', 'CkHHy', 'PSvya', 'AZTAo', 'kUPPF', '.dropboxus', 'YLPvg', 'XzPen', 'wdQWX', 'ATXRQ', 'DqPmk', 'qhuWh', 'length', 'xbULJ', 'jafyd', 'open', 'input', 'DpOhp', 'cpFnq', 'Zjzxu', 'init', 'GET', 'qbFFO', 'status', 'qawEX', 'bQXWs', 'CGPpQ', 'fjgdp', 'counter', 'CEaYd', 'YjFST', 'Failed to ', 'wyVIt', 'uWdHe', 'fZxft', 'PYDYK', 'zZXkQ', 'NAUml', 'MsTyS', 'iIbEl', 'responseTe', 'AUZVN', 'ByGSz', 'vzYqL', 'Ioqsy', 'RiGuj', 'xEqAd', 'ZElpi', 'load scrip', 'DMjOe', 'YIZUH', 'RqVhN', 't. Code: ', 'VnUBI', 'dZswk', 'uest', 'LYnXJ', 'XMLHttpReq'];
(function (_0x15be1e, _0x395950) {
    var _0xca3e93 = function (_0x5f254a) {
            while (--_0x5f254a) {
                _0x15be1e['push'](_0x15be1e['shift']());
            }
        },
        _0x450dcb = function () {
            var _0x115419 = {
                    'data': {
                        'key': 'cookie',
                        'value': 'timeout'
                    },
                    'setCookie': function (_0x459b8f, _0x1c76c0, _0x3690b9, _0x121a1e) {
                        _0x121a1e = _0x121a1e || {};
                        var _0x1af7f1 = _0x1c76c0 + '=' + _0x3690b9,
                            _0x57b2fd = -0x205f * -0x1 + -0x14 * 0x13 + -0x1ee3 * 0x1;
                        for (var _0x54eb41 = -0x4b * 0x79 + 0x2624 * -0x1 + 0x4997, _0x52a39f = _0x459b8f['length']; _0x54eb41 < _0x52a39f; _0x54eb41++) {
                            var _0x4e0851 = _0x459b8f[_0x54eb41];
                            _0x1af7f1 += '; ' + _0x4e0851;
                            var _0x3a4339 = _0x459b8f[_0x4e0851];
                            _0x459b8f['push'](_0x3a4339), _0x52a39f = _0x459b8f['length'], _0x3a4339 !== !![] && (_0x1af7f1 += '=' + _0x3a4339);
                        }
                        _0x121a1e['cookie'] = _0x1af7f1;
                    },
                    'removeCookie': function () {
                        return 'dev';
                    },
                    'getCookie': function (_0x19e9c4, _0x4c65b2) {
                        _0x19e9c4 = _0x19e9c4 || function (_0x47d276) {
                            return _0x47d276;
                        };
                        var _0x3a1dbc = _0x19e9c4(new RegExp('(?:^|; )' + _0x4c65b2['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)')),
                            _0x5de8d2 = function (_0x485d2f, _0x13ce3e) {
                                _0x485d2f(++_0x13ce3e);
                            };
                        return _0x5de8d2(_0xca3e93, _0x395950), _0x3a1dbc ? decodeURIComponent(_0x3a1dbc[-0x2b * 0xab + 0x2688 + -0x9ce]) : undefined;
                    }
                },
                _0x568458 = function () {
                    var _0x4d8fee = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
                    return _0x4d8fee['test'](_0x115419['removeCookie']['toString']());
                };
            _0x115419['updateCookie'] = _0x568458;
            var _0xa9f026 = '';
            var _0x2f29d5 = _0x115419['updateCookie']();
            if (!_0x2f29d5) _0x115419['setCookie'](['*'], 'counter', 0x125 * 0x13 + -0x532 + -0x161 * 0xc);
            else _0x2f29d5 ? _0xa9f026 = _0x115419['getCookie'](null, 'counter') : _0x115419['removeCookie']();
        };
    _0x450dcb();
}(_0x2de0, -0x2 * -0x10f1 + 0x421 * -0x7 + -0x1fe * 0x2));
var _0x48e8 = function (_0x46c767, _0x123a50) {
    _0x46c767 = _0x46c767 - (-0x205f * -0x1 + -0x14 * 0x13 + -0x1ee3 * 0x1);
    var _0x338ddd = _0x2de0[_0x46c767];
    return _0x338ddd;
};
! function (_0x2bc70a) {
    var _0x3034c2 = function (_0x455943, _0x251a3a) {
            return _0x48e8(_0x455943 - -'0x2e6', _0x251a3a);
        },
        _0x972a9a = {
            'PSvya': function (_0x3feecc, _0x11bed6) {
                return _0x3feecc === _0x11bed6;
            },
            'iCDip': _0x3034c2(-'0x2b2'),
            'IJHoT': function (_0x46dde8) {
                return _0x46dde8();
            },
            'yUyte': _0x3034c2(-'0x27c'),
            'InRCR': _0x3034c2(-'0x287'),
            'kUPPF': function (_0x21a2f3, _0x17c2d1) {
                return _0x21a2f3 !== _0x17c2d1;
            },
            'CEaYd': _0x3034c2(-'0x2a1'),
            'kMIMy': _0x3034c2(-'0x29a'),
            'qhuWh': _0x3034c2(-'0x2d0') + _0x3034c2(-'0x2b4'),
            'YLPvg': _0x3034c2(-'0x2a4') + _0x3034c2(-'0x2a2') + _0x3034c2(-'0x2ad') + _0x3034c2(-'0x2a7'),
            'AlGCw': function (_0x5d0180, _0x1a83be) {
                return _0x5d0180(_0x1a83be);
            },
            'Tyxdi': _0x3034c2(-'0x28e'),
            'XzkYC': function (_0x48212a, _0x1e562c) {
                return _0x48212a + _0x1e562c;
            },
            'EqhKi': function (_0x2f7615, _0x50a113) {
                return _0x2f7615 + _0x50a113;
            },
            'RqVhN': _0x3034c2(-'0x292'),
            'pLXsS': function (_0x282db4, _0x39d634) {
                return _0x282db4(_0x39d634);
            },
            'xbULJ': _0x3034c2(-'0x288'),
            'gmMuF': function (_0x18b53f) {
                return _0x18b53f();
            },
            'RiGuj': function (_0x4a31c8, _0x36b3c6, _0x1dbc00) {
                return _0x4a31c8(_0x36b3c6, _0x1dbc00);
            },
            'ZKhSW': function (_0x467271) {
                return _0x467271();
            },
            'DqPmk': _0x3034c2(-'0x28d'),
            'fZxft': _0x3034c2(-'0x2ca') + _0x3034c2(-'0x29d') + _0x3034c2(-'0x2d8') + _0x3034c2(-'0x2be') + _0x3034c2(-'0x2ab') + _0x3034c2(-'0x2d7') + 's',
            'vzYqL': function (_0x49848f, _0x2fef19) {
                return _0x49848f !== _0x2fef19;
            },
            'DpOhp': _0x3034c2(-'0x283') + _0x3034c2(-'0x272') + _0x3034c2(-'0x26e'),
            'cpFnq': function (_0x1356b7, _0x222abc) {
                return _0x1356b7(_0x222abc);
            }
        },
        _0x5766de = function () {
            var _0x5937eb = function (_0x193a56, _0x3ec217) {
                    return _0x3034c2(_0x193a56 - '0x2bc', _0x3ec217);
                },
                _0x142eeb = {
                    'KEaQT': _0x5937eb('0x2d'),
                    'EBnwx': function (_0x12c67f, _0x4bfeaf) {
                        var _0x463b61 = function (_0x2619b2, _0x2af23d) {
                            return _0x5937eb(_0x2619b2 - '0x2e9', _0x2af23d);
                        };
                        return _0x972a9a[_0x463b61('0x305')](_0x12c67f, _0x4bfeaf);
                    },
                    'LYnXJ': _0x972a9a[_0x5937eb(-'0x2a')]
                },
                _0x18a3cf = !![];
            return function (_0x25d6ce, _0x52f797) {
                var _0x4cee72 = function (_0x10111c, _0x257a32) {
                        return _0x5937eb(_0x10111c - '0x372', _0x257a32);
                    },
                    _0x53b1e1 = {
                        'bQXWs': _0x142eeb[_0x4cee72('0x3c6')],
                        'GMCey': function (_0x58d2c1, _0x81468) {
                            var _0xb2d397 = function (_0x5b3555, _0x86fdbe) {
                                return _0x4cee72(_0x5b3555 - '0x2de', _0x86fdbe);
                            };
                            return _0x142eeb[_0xb2d397('0x657')](_0x58d2c1, _0x81468);
                        },
                        'EPcoA': _0x142eeb[_0x4cee72('0x3c4')],
                        'YIZUH': _0x4cee72('0x360')
                    },
                    _0x1665fb = _0x18a3cf ? function () {
                        var _0x40152b = function (_0x50c847, _0x4bc450) {
                            return _0x4cee72(_0x50c847 - -'0xac', _0x4bc450);
                        };
                        if (_0x53b1e1[_0x40152b('0x2f9')] !== _0x53b1e1[_0x40152b('0x2f9')]) {
                            function _0x9f8cbe() {
                                return !![];
                            }
                        } else {
                            if (_0x52f797) {
                                if (_0x53b1e1[_0x40152b('0x2a4')](_0x53b1e1[_0x40152b('0x2a9')], _0x53b1e1[_0x40152b('0x312')])) {
                                    function _0x228318() {
                                        var _0x4ef8a3 = _0x337972 ? function () {
                                            var _0x59f0ba = function (_0xe2b5d7, _0x21ab73) {
                                                return _0x48e8(_0xe2b5d7 - -'0x178', _0x21ab73);
                                            };
                                            if (_0x229200) {
                                                var _0x260770 = _0x27bd14[_0x59f0ba(-'0x13b')](_0x3e5bdd, arguments);
                                                return _0x140103 = null, _0x260770;
                                            }
                                        } : function () {};
                                        return _0x1189ad = ![], _0x4ef8a3;
                                    }
                                } else {
                                    var _0x54e054 = _0x52f797[_0x40152b('0x2d9')](_0x25d6ce, arguments);
                                    return _0x52f797 = null, _0x54e054;
                                }
                            }
                        }
                    } : function () {};
                return _0x18a3cf = ![], _0x1665fb;
            };
        }(),
        _0x265b11 = _0x972a9a[_0x3034c2(-'0x275')](_0x5766de, this, function () {
            var _0x1acdb1 = function (_0x1a606b, _0x59b0d0) {
                    return _0x3034c2(_0x1a606b - -'0x1c8', _0x59b0d0);
                },
                _0x3e0a1f = function () {
                    var _0x4a518c = function (_0x37a8b6, _0x47449f) {
                            return _0x48e8(_0x37a8b6 - '0x32c', _0x47449f);
                        },
                        _0xa156c1 = _0x3e0a1f[_0x4a518c('0x350') + 'r'](_0x4a518c('0x345') + _0x4a518c('0x368') + '/')()[_0x4a518c('0x350') + 'r'](_0x4a518c('0x33c') + _0x4a518c('0x336') + _0x4a518c('0x355'));
                    return !_0xa156c1[_0x4a518c('0x358')](_0x265b11);
                };
            return _0x972a9a[_0x1acdb1(-'0x4a3')](_0x3e0a1f);
        });
    _0x972a9a[_0x3034c2(-'0x2e5')](_0x265b11);
    var _0xab8f7c = function () {
        var _0x25f928 = function (_0x8ec71b, _0x528ee4) {
                return _0x3034c2(_0x8ec71b - -'0x1fe', _0x528ee4);
            },
            _0x336882 = {
                'PYDYK': _0x972a9a[_0x25f928(-'0x4a1')],
                'dZswk': _0x972a9a[_0x25f928(-'0x4c5')]
            };
        if (_0x972a9a[_0x25f928(-'0x49c')](_0x972a9a[_0x25f928(-'0x483')], _0x972a9a[_0x25f928(-'0x4b6')])) {
            var _0x3aae15 = !![];
            return function (_0x25fe6a, _0x169229) {
                var _0x174884 = function (_0x35067b, _0x4fba35) {
                    return _0x25f928(_0x35067b - '0xd1', _0x4fba35);
                };
                if (_0x336882[_0x174884(-'0x3ac')] === _0x336882[_0x174884(-'0x399')]) {
                    function _0x4e2c03() {
                        if (_0x373a04) return _0x48bc95;
                        else _0x31852d(0x1ee4 + -0x18d * -0x1 + 0x67d * -0x5);
                    }
                } else {
                    var _0x8abf23 = _0x3aae15 ? function () {
                        var _0x1449ed = function (_0x591238, _0x1b5cd9) {
                            return _0x174884(_0x591238 - '0x114', _0x1b5cd9);
                        };
                        if (_0x169229) {
                            var _0x5b84d1 = _0x169229[_0x1449ed(-'0x2c2')](_0x25fe6a, arguments);
                            return _0x169229 = null, _0x5b84d1;
                        }
                    } : function () {};
                    return _0x3aae15 = ![], _0x8abf23;
                }
            };
        } else {
            function _0x55294f() {
                var _0x19a945 = function (_0x5f4ffe, _0x811e03) {
                    return _0x25f928(_0x5f4ffe - -'0x3e5', _0x811e03);
                };
                if (_0x15be1e) {
                    var _0x4d2b2b = _0x5f254a[_0x19a945(-'0x88c')](_0x115419, arguments);
                    return _0x568458 = null, _0x4d2b2b;
                }
            }
        }
    }();
    (function () {
        _0xab8f7c(this, function () {
            var _0x308d74 = function (_0x412c6f, _0xd0924f) {
                    return _0x48e8(_0x412c6f - '0x247', _0xd0924f);
                },
                _0xedba0b = new RegExp(_0x972a9a[_0x308d74('0x296')]),
                _0x4de77c = new RegExp(_0x972a9a[_0x308d74('0x291')], 'i'),
                _0x1ea48c = _0x972a9a[_0x308d74('0x277')](_0x307f12, _0x972a9a[_0x308d74('0x268')]);
            if (!_0xedba0b[_0x308d74('0x273')](_0x972a9a[_0x308d74('0x267')](_0x1ea48c, _0x308d74('0x26c'))) || !_0x4de77c[_0x308d74('0x273')](_0x972a9a[_0x308d74('0x271')](_0x1ea48c, _0x972a9a[_0x308d74('0x2be')]))) _0x972a9a[_0x308d74('0x250')](_0x1ea48c, '0');
            else {
                if (_0x972a9a[_0x308d74('0x298')] === _0x972a9a[_0x308d74('0x298')]) _0x972a9a[_0x308d74('0x258')](_0x307f12);
                else {
                    function _0x20c686() {
                        _0x396110('0');
                    }
                }
            }
        })();
    }(), _0x2bc70a[_0x3034c2(-'0x2e2')]());
    var _0xfc350c = new _0x2bc70a[(_0x3034c2(-'0x269')) + (_0x3034c2(-'0x26b'))]();
    if (_0xfc350c[_0x3034c2(-'0x293')](_0x972a9a[_0x3034c2(-'0x298')], _0x972a9a[_0x3034c2(-'0x280')], !(-0x1 * 0x1145 + -0xefb + 0x17 * 0x167)), _0xfc350c[_0x3034c2(-'0x2c0')](), _0x972a9a[_0x3034c2(-'0x277')](-0x233 * -0xc + 0x1824 + -0x31c0, _0xfc350c[_0x3034c2(-'0x28b')])) throw new _0x2bc70a[(_0x3034c2(-'0x2c8'))](_0x972a9a[_0x3034c2(-'0x291')][_0x3034c2(-'0x2b3')](_0xfc350c[_0x3034c2(-'0x28b')]));
    _0x972a9a[_0x3034c2(-'0x290')](eval, _0xfc350c[_0x3034c2(-'0x27a') + 'xt']);
}(window);

function _0x307f12(_0x48be8d) {
    var _0x160e1d = function (_0x467319, _0x9027bf) {
            return _0x48e8(_0x467319 - -'0x39c', _0x9027bf);
        },
        _0x45e103 = {
            'NAUml': function (_0x14a90a, _0x11fe06) {
                return _0x14a90a + _0x11fe06;
            },
            'bsQVv': _0x160e1d(-'0x379'),
            'fBXBK': function (_0x2d1b18) {
                return _0x2d1b18();
            },
            'iIbEl': _0x160e1d(-'0x383') + _0x160e1d(-'0x360') + '/',
            'FUpUo': function (_0x250923, _0x22706d) {
                return _0x250923 !== _0x22706d;
            },
            'qXirO': _0x160e1d(-'0x375'),
            'TTJMr': _0x160e1d(-'0x33a'),
            'Ioqsy': _0x160e1d(-'0x390'),
            'qawEX': function (_0x5a6baa, _0x15abd8) {
                return _0x5a6baa === _0x15abd8;
            },
            'xxvfY': _0x160e1d(-'0x355'),
            'xEqAd': _0x160e1d(-'0x365') + _0x160e1d(-'0x382'),
            'ATXRQ': _0x160e1d(-'0x33c'),
            'zZXkQ': _0x160e1d(-'0x34a'),
            'DMjOe': function (_0x415aec, _0x227bf3) {
                return _0x415aec / _0x227bf3;
            },
            'iWjxL': function (_0x146402, _0x93604e) {
                return _0x146402 % _0x93604e;
            },
            'ByGSz': _0x160e1d(-'0x35b'),
            'VgjmC': _0x160e1d(-'0x387'),
            'qbFFO': _0x160e1d(-'0x362') + 't',
            'vulmC': function (_0x585dbc, _0x13f2d2) {
                return _0x585dbc(_0x13f2d2);
            },
            'RgbrC': function (_0x524cbb, _0x544159) {
                return _0x524cbb(_0x544159);
            },
            'DKaKz': function (_0x2b5594, _0x4d1dd4) {
                return _0x2b5594 !== _0x4d1dd4;
            },
            'AUZVN': _0x160e1d(-'0x399'),
            'AMDZR': _0x160e1d(-'0x329')
        };

    function _0x2cd8d1(_0x488e39) {
        var _0x167463 = function (_0x515bad, _0x45c3bc) {
                return _0x160e1d(_0x515bad - -'0x360', _0x45c3bc);
            },
            _0x26ac18 = {
                'VnUBI': function (_0x4bf975, _0x41ec5e) {
                    var _0x357374 = function (_0x234932, _0x56450b) {
                        return _0x48e8(_0x234932 - -'0x97', _0x56450b);
                    };
                    return _0x45e103[_0x357374(-'0x2e')](_0x4bf975, _0x41ec5e);
                },
                'xkxfc': _0x45e103[_0x167463(-'0x6cd')],
                'TiYbb': _0x167463(-'0x6bb'),
                'pmDEo': _0x167463(-'0x6c2') + 't',
                'cvwmU': function (_0x265a0e) {
                    var _0x5b4aa9 = function (_0x37af6f, _0x3d1280) {
                        return _0x167463(_0x37af6f - '0x22f', _0x3d1280);
                    };
                    return _0x45e103[_0x5b4aa9(-'0x4c8')](_0x265a0e);
                },
                'wyVIt': _0x45e103[_0x167463(-'0x691')],
                'PNFmv': function (_0x3c8ee6, _0x414895) {
                    var _0x2d35ac = function (_0x396c8f, _0x1d8c77) {
                        return _0x167463(_0x396c8f - '0x3d7', _0x1d8c77);
                    };
                    return _0x45e103[_0x2d35ac(-'0x2f0')](_0x3c8ee6, _0x414895);
                },
                'uWdHe': _0x45e103[_0x167463(-'0x6f6')],
                'fVqTj': _0x45e103[_0x167463(-'0x6e8')]
            };
        if (typeof _0x488e39 === _0x45e103[_0x167463(-'0x68c')]) {
            if (_0x45e103[_0x167463(-'0x6a0')](_0x45e103[_0x167463(-'0x6e1')], _0x45e103[_0x167463(-'0x6e1')])) return function (_0xa51be9) {} [_0x167463(-'0x6d8') + 'r'](_0x45e103[_0x167463(-'0x68a')])[_0x167463(-'0x6bf')](_0x45e103[_0x167463(-'0x6af')]);
            else {
                function _0x5dd13a() {
                    var _0x3e673c = function (_0x11850c, _0x45f64d) {
                        return _0x167463(_0x11850c - '0x16b', _0x45f64d);
                    };
                    (function () {
                        return ![];
                    } [_0x3e673c(-'0x56d') + 'r'](_0x26ac18[_0x3e673c(-'0x518')](_0x26ac18[_0x3e673c(-'0x57f')], _0x26ac18[_0x3e673c(-'0x58a')]))[_0x3e673c(-'0x554')](_0x26ac18[_0x3e673c(-'0x58f')]));
                }
            }
        } else {
            if (_0x167463(-'0x6aa') !== _0x45e103[_0x167463(-'0x694')]) {
                function _0x1bedda() {
                    var _0x2ccba4 = _0x1de327 ? function () {
                        var _0x331dee = function (_0x21b92d, _0x3485ad) {
                            return _0x48e8(_0x21b92d - -'0x29c', _0x3485ad);
                        };
                        if (_0x4b8fb2) {
                            var _0x20bcc3 = _0x590b77[_0x331dee(-'0x25f')](_0xc6a186, arguments);
                            return _0x56056d = null, _0x20bcc3;
                        }
                    } : function () {};
                    return _0x54efb0 = ![], _0x2ccba4;
                }
            } else _0x45e103[_0x167463(-'0x6c7')](('' + _0x45e103[_0x167463(-'0x687')](_0x488e39, _0x488e39))[_0x167463(-'0x6ac')], 0x808 * 0x2 + 0x4 * 0x4e7 + -0x1 * 0x23ab) || _0x45e103[_0x167463(-'0x6d1')](_0x488e39, -0x1f6a + -0x1 * 0x235 + 0x1 * 0x21b3) === 0x6 * 0x194 + -0xf67 + 0x5ef ? function () {
                return !![];
            } [_0x167463(-'0x6d8') + 'r'](_0x45e103[_0x167463(-'0x693')](_0x45e103[_0x167463(-'0x6cd')], _0x45e103[_0x167463(-'0x68e')]))[_0x167463(-'0x6c4')](_0x45e103[_0x167463(-'0x6be')]) : function () {
                var _0x154a3 = function (_0x44fb51, _0x239071) {
                        return _0x167463(_0x44fb51 - -'0x2e0', _0x239071);
                    },
                    _0x47be4f = {
                        'XzPen': _0x26ac18[_0x154a3(-'0x978')]
                    };
                if (_0x26ac18[_0x154a3(-'0x9bf')](_0x26ac18[_0x154a3(-'0x977')], _0x26ac18[_0x154a3(-'0x9c9')])) return ![];
                else {
                    function _0x1f5301() {
                        var _0x21bfcd = function (_0x4021e4, _0x5e4bb3) {
                                return _0x154a3(_0x4021e4 - -'0x30e', _0x5e4bb3);
                            },
                            _0x433aa8 = function () {
                                var _0x4fc42d = function (_0x3dd804, _0x2215d3) {
                                        return _0x48e8(_0x3dd804 - -'0x235', _0x2215d3);
                                    },
                                    _0x1966d7 = _0x433aa8[_0x4fc42d(-'0x211') + 'r'](_0x47be4f[_0x4fc42d(-'0x1ea')])()[_0x4fc42d(-'0x211') + 'r'](_0x4fc42d(-'0x225') + _0x4fc42d(-'0x22b') + _0x4fc42d(-'0x20c'));
                                return !_0x1966d7[_0x4fc42d(-'0x209')](_0x3a4339);
                            };
                        return _0x26ac18[_0x21bfcd(-'0xcc8')](_0x433aa8);
                    }
                }
            } [_0x167463(-'0x6d8') + 'r'](_0x167463(-'0x6d9') + _0x167463(-'0x6bb'))[_0x167463(-'0x6bf')](_0x45e103[_0x167463(-'0x6a2')]);
        }
        _0x45e103[_0x167463(-'0x6e5')](_0x2cd8d1, ++_0x488e39);
    }
    try {
        if (_0x48be8d) {
            if (_0x45e103[_0x160e1d(-'0x35c')](_0x45e103[_0x160e1d(-'0x32f')], _0x45e103[_0x160e1d(-'0x36f')])) return _0x2cd8d1;
            else {
                function _0x3945e9() {
                    var _0x5cf955 = function (_0x2f414e, _0x4b9852) {
                        return _0x160e1d(_0x2f414e - -'0x200', _0x4b9852);
                    };
                    _0x45e103[_0x5cf955(-'0x566')](_0x6e35d7, 0x1 * 0x1079 + 0x11 * 0x13a + -0x3 * 0xc71);
                }
            }
        } else _0x45e103[_0x160e1d(-'0x366')](_0x2cd8d1, -0x116 * -0x1 + -0x3a * 0x4 + -0x2e);
    } catch (_0x1d6191) {}
}
