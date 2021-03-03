// Generated by CoffeeScript 1.11.1
var Agent,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Agent = (function(superClass) {
  extend(Agent, superClass);

  function Agent(options) {
    Agent.__super__.constructor.call(this, 0.0, 0.0);
    core.extend(this, core.defaults(options || {}, {
      radius: 10,
      damping: 0.995,
      behaviors: [],
      maxSpeed: 1.0,
      maxForce: 1.0,
      vel: new Vector(),
      acc: new Vector()
    }));
  }

  Agent.prototype.update = function() {
    var behavior, i, len, ref;
    ref = this.behaviors;
    for (i = 0, len = ref.length; i < len; i++) {
      behavior = ref[i];
      behavior.apply(this);
    }
    this.vel.add(this.acc.limit(this.maxForce));
    this.add(this.vel.limit(this.maxSpeed));
    this.vel.scale(this.damping);
    return this.acc.clear();
  };

  return Agent;

})(Vector);
