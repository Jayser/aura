/* jslint sloppy:true */
/* global define */

// ## Core Extension
// @fileOverview Extend the aura-core (mediator pattern).
define(['aura_core', 'backbone', 'localstorage'], function (core, Backbone, Store) {

	var auraCore = Object.create(core);
	auraCore.data.Store = Store;
	auraCore.mvc = Backbone;

	return auraCore;

});