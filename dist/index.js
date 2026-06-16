"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(f,n){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/stats-strided-scumin/dist').ndarray;function d(i){var r=i[0],e=i[1];return c(q(r,0),a(r),t(r,0),u(r),a(e),t(e,0),u(e)),e}n.exports=d
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
