// Generated by CoffeeScript 1.11.1
var Vector;

Vector = (function() {
  Vector.add = function(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  };

  Vector.sub = function(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  };

  Vector.dist = function(v1, v2) {
    var dx, dy;
    dx = v2.x - v1.x;
    dy = v2.y - v1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  Vector.distSq = function(v1, v2) {
    var dx, dy;
    dx = v2.x - v1.x;
    dy = v2.y - v1.y;
    return dx * dx + dy * dy;
  };

  Vector.project = function(v1, v2) {
    var dot, mag, val;
    dot = v1.x * v2.x + v1.y * v2.y;
    mag = v2.x * v2.x + v2.y * v2.y;
    val = dot / mag;
    return new Vector(v2.x * val, v2.y * val);
  };

  function Vector(x, y) {
    this.x = x != null ? x : 0.0;
    this.y = y != null ? y : 0.0;
  }

  Vector.prototype.set = function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  };

  Vector.prototype.add = function(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  };

  Vector.prototype.sub = function(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  };

  Vector.prototype.mult = function(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  };

  Vector.prototype.scale = function(f) {
    this.x *= f;
    this.y *= f;
    return this;
  };

  Vector.prototype.dot = function(v) {
    return this.x * v.x + this.y * v.y;
  };

  Vector.prototype.cross = function(v) {
    return (this.x * v.y) - (this.y * v.x);
  };

  Vector.prototype.perp = function() {
    return new Vector(-this.y, this.x);
  };

  Vector.prototype.sign = function(v) {
    var ref;
    return (ref = (this.perp().dot(v)) < 0) != null ? ref : -{
      1: 1
    };
  };

  Vector.prototype.mag = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  Vector.prototype.magSq = function() {
    return this.x * this.x + this.y * this.y;
  };

  Vector.prototype.dist = function(v) {
    var dx, dy;
    dx = v.x - this.x;
    dy = v.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  Vector.prototype.distSq = function(v) {
    var dx, dy;
    dx = v.x - this.x;
    dy = v.y - this.y;
    return dx * dx + dy * dy;
  };

  Vector.prototype.angle = function() {
    return Math.atan2(this.y, this.x);
  };

  Vector.prototype.norm = function() {
    var m;
    m = Math.sqrt(this.x * this.x + this.y * this.y);
    this.x /= m;
    this.y /= m;
    return this;
  };

  Vector.prototype.limit = function(l) {
    var m, mSq;
    mSq = this.x * this.x + this.y * this.y;
    if (mSq > l * l) {
      m = Math.sqrt(mSq);
      this.x /= m;
      this.y /= m;
      this.x *= l;
      this.y *= l;
    }
    return this;
  };

  Vector.prototype.rotate = function(theta) {
    var c, s;
    s = Math.sin(theta);
    c = Math.cos(theta);
    this.x = this.x * c - this.y * s;
    this.y = this.x * s + this.y * c;
    return this;
  };

  Vector.prototype.copy = function(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  };

  Vector.prototype.clone = function() {
    return new Vector(this.x, this.y);
  };

  Vector.prototype.clear = function() {
    this.x = 0.0;
    this.y = 0.0;
    return this;
  };

  return Vector;

})();
