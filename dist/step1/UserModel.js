(function() {
  var Event, UserModel, gy, i, notifyScoreUpdate, user, users, _i, _len,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  gy = {
    _inArray: function(elem, array) {
      var i, len;
      i = 0;
      len = array.length;
      while (i < len) {
        if (array[i] === elem) {
          return i;
        }
        i++;
      }
      return -1;
    }
  };

  Event = (function() {
    Event.prototype.listeners = {};

    function Event() {
      this.listeners = {};
    }

    /*
      イベントリスナーを設定する
    */


    Event.prototype.on = function(type, listener) {
      if (!this.listeners) {
        this.listeners = {};
      }
      if (this.listeners[type] === void 0) {
        this.listeners[type] = [];
      }
      if (gy._inArray(listener, this.listeners[type]) < 0) {
        this.listeners[type].push(listener);
      }
    };

    /*
      イベントリスナーを解除する
    */


    Event.prototype.off = function(type, listener) {
      var arr, i, len, prop;
      len = 0;
      for (prop in this.listeners) {
        len++;
      }
      if (len < 1) {
        return;
      }
      arr = this.listeners[type];
      if (!arr) {
        return;
      }
      i = 0;
      len = arr.length;
      while (i < len) {
        if (arr[i] === listener) {
          if (len === 1) {
            delete this.listeners[type];
          } else {
            arr.splice(i, 1);
          }
          break;
        }
        i++;
      }
    };

    /*
      イベントを発火する
    */


    Event.prototype.emit = function(type) {
      var ary, handler, _i, _len;
      ary = this.listeners[type];
      if (ary !== void 0) {
        for (_i = 0, _len = ary.length; _i < _len; _i++) {
          handler = ary[_i];
          handler.call(this, null);
        }
      }
    };

    return Event;

  })();

  UserModel = (function(_super) {
    __extends(UserModel, _super);

    UserModel.prototype.id = 0;

    UserModel.prototype.user_id = null;

    UserModel.prototype.nickname = null;

    UserModel.prototype.score = 0;

    function UserModel(id) {
      this.showScore = __bind(this.showScore, this);
      UserModel.__super__.constructor.call(this);
      this.id = id;
      this.score = 0;
      console.log("currentScore:", this.score);
    }

    UserModel.prototype.showScore = function() {
      console.log;
      return console.log("userID:", this.id, "score:", this.score);
    };

    UserModel.prototype.addScore = function(score) {
      this.score = score;
      return this.emit("update");
    };

    return UserModel;

  })(Event);

  notifyScoreUpdate = function(event) {
    return console.log("score update!");
  };

  users = [];

  i = 0;

  while (i < 5) {
    user = new UserModel(i + 1);
    user.on("update", notifyScoreUpdate);
    users.push(user);
    i++;
  }

  console.log("========= before score update =============");

  for (_i = 0, _len = users.length; _i < _len; _i++) {
    user = users[_i];
    if (user.id === 3) {
      user.addScore(200);
    }
  }

  console.log("========= after score update =============");

}).call(this);
