/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/pixi.js-legacy@5.3.1/lib/pixi-legacy.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * pixi.js-legacy - v5.3.1
 * Compiled Fri, 24 Jul 2020 20:56:48 UTC
 *
 * pixi.js-legacy is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";
Object.defineProperty(exports, "__esModule", {
	value: !0
});
var pixi_js = require("pixi.js"),
	canvasRenderer = require("@pixi/canvas-renderer"),
	canvasMesh = require("@pixi/canvas-mesh"),
	canvasGraphics = require("@pixi/canvas-graphics"),
	canvasSprite = require("@pixi/canvas-sprite"),
	canvasExtract = require("@pixi/canvas-extract"),
	canvasPrepare = require("@pixi/canvas-prepare");
require("@pixi/canvas-sprite-tiling"), require("@pixi/canvas-particles"), require("@pixi/canvas-display"), require("@pixi/canvas-text"), canvasRenderer.CanvasRenderer.registerPlugin("accessibility", pixi_js.AccessibilityManager), canvasRenderer.CanvasRenderer.registerPlugin("extract", canvasExtract.CanvasExtract), canvasRenderer.CanvasRenderer.registerPlugin("graphics", canvasGraphics.CanvasGraphicsRenderer), canvasRenderer.CanvasRenderer.registerPlugin("interaction", pixi_js.InteractionManager), canvasRenderer.CanvasRenderer.registerPlugin("mesh", canvasMesh.CanvasMeshRenderer), canvasRenderer.CanvasRenderer.registerPlugin("prepare", canvasPrepare.CanvasPrepare), canvasRenderer.CanvasRenderer.registerPlugin("sprite", canvasSprite.CanvasSpriteRenderer), Object.keys(pixi_js).forEach((function (e) {
	Object.defineProperty(exports, e, {
		enumerable: !0,
		get: function () {
			return pixi_js[e]
		}
	})
})), Object.defineProperty(exports, "CanvasRenderer", {
	enumerable: !0,
	get: function () {
		return canvasRenderer.CanvasRenderer
	}
}), Object.defineProperty(exports, "canvasUtils", {
	enumerable: !0,
	get: function () {
		return canvasRenderer.canvasUtils
	}
}), Object.defineProperty(exports, "CanvasMeshRenderer", {
	enumerable: !0,
	get: function () {
		return canvasMesh.CanvasMeshRenderer
	}
}), Object.defineProperty(exports, "CanvasGraphicsRenderer", {
	enumerable: !0,
	get: function () {
		return canvasGraphics.CanvasGraphicsRenderer
	}
}), Object.defineProperty(exports, "CanvasSpriteRenderer", {
	enumerable: !0,
	get: function () {
		return canvasSprite.CanvasSpriteRenderer
	}
}), Object.defineProperty(exports, "CanvasExtract", {
	enumerable: !0,
	get: function () {
		return canvasExtract.CanvasExtract
	}
}), Object.defineProperty(exports, "CanvasPrepare", {
	enumerable: !0,
	get: function () {
		return canvasPrepare.CanvasPrepare
	}
});
//# sourceMappingURL=/sm/fc3b275f37b9daefa4fb7bf7c368d7f4a785f5448eb37b032fc6ea4b376e1856.map