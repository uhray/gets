;(function() {
  var root = this;

  function gets() {
    var args = Array.prototype.slice.call(arguments, 0);
        f = function(d) {
          args.forEach(function(x) { d = d && d[x]; });
          return d;
        };

    function m(f) {
      f.or = function(x) { return m(function(d) { return f(d) || x; }); };
      f.map = function(fn) { return m(function(d) { return fn(f(d)); }); };
      return f;
    }

    return m(f);
  }

  // ======================================================================== //

  if (typeof exports !== 'undefined') {  // nodejs
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = gets;
    }
    exports.gets = gets
  } else if (typeof define !== 'undefined') {  // requirejs
    define([], function() { return gets; });
  } else {  // global
    root.gets = gets;
  }

}());
