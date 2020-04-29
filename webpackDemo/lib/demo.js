(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mylib"] = factory();
	else
		root["mylib"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
})()
});