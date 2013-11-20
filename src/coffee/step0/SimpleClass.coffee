###
  basic な coffee のクラス
###

class Fruit
  constructor:()->

  showInfo:()->
    console.log "ふるーつ"

class Ringo extends Fruit
  #プロパティ
  color  : null
  type   : null
  weight : 0
  size   : 0

  constructor:(@color, @type, @weight, @size)->


  showInfo:()=>
    super()
    # console.log @color, @type, @weight, @size
    color = "blue"
    console.log color
    console.log @color


class Box
  collection : []

  construcor:()->
    @collection = []


  add:(item)->
    @collection.push item

  show:()->
    console.log @collection

  remove:()->
    @collection.pop()


class Orange extends Fruit
  mikan : null
  constructor:()->


# instance = new SimpleClass()

fuji    = new Ringo("red", "fuji", 200, 10)
kougyou = new Ringo("red", "kougyoku", 100, 5)
ourin   = new Ringo("green", "ourin", 200, 8)

# box     = new Box()
# console.log "======== before insert ========"
# box.show()
# box.add kougyou
# console.log "======== after insert ========"
# box.show()
# box.remove()
# console.log "======== after remove ========"
# box.show()

#fuji のサイズをとる
console.log fuji.size

tabetai = fuji

tabetai.showInfo()

tabetai = ourin

tabetai.showInfo()

tabetai = new Orange()

tabetai.showInfo()




###
  クラスには
    * プロパティ
    * メソッド
###
