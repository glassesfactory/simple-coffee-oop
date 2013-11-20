/*
  basic な coffee のクラス
*/


(function() {
  var Box, Fruit, Orange, Ringo, fuji, kougyou, ourin, tabetai,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Fruit = (function() {
    function Fruit() {}

    Fruit.prototype.showInfo = function() {
      return console.log("ふるーつ");
    };

    return Fruit;

  })();

  Ringo = (function(_super) {
    __extends(Ringo, _super);

    Ringo.prototype.color = null;

    Ringo.prototype.type = null;

    Ringo.prototype.weight = 0;

    Ringo.prototype.size = 0;

    function Ringo(color, type, weight, size) {
      this.color = color;
      this.type = type;
      this.weight = weight;
      this.size = size;
      this.showInfo = __bind(this.showInfo, this);
    }

    Ringo.prototype.showInfo = function() {
      var color;
      Ringo.__super__.showInfo.call(this);
      color = "blue";
      console.log(color);
      return console.log(this.color);
    };

    return Ringo;

  })(Fruit);

  Box = (function() {
    function Box() {}

    Box.prototype.collection = [];

    Box.prototype.construcor = function() {
      return this.collection = [];
    };

    Box.prototype.add = function(item) {
      return this.collection.push(item);
    };

    Box.prototype.show = function() {
      return console.log(this.collection);
    };

    Box.prototype.remove = function() {
      return this.collection.pop();
    };

    return Box;

  })();

  Orange = (function(_super) {
    __extends(Orange, _super);

    Orange.prototype.mikan = null;

    function Orange() {}

    return Orange;

  })(Fruit);

  fuji = new Ringo("red", "fuji", 200, 10);

  kougyou = new Ringo("red", "kougyoku", 100, 5);

  ourin = new Ringo("green", "ourin", 200, 8);

  console.log(fuji.size);

  tabetai = fuji;

  tabetai.showInfo();

  tabetai = ourin;

  tabetai.showInfo();

  tabetai = new Orange();

  tabetai.showInfo();

  /*
    クラスには
      * プロパティ
      * メソッド
  */


}).call(this);
