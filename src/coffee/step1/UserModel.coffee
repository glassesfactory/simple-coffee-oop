gy =
  _inArray:( elem, array )->
    i = 0
    len = array.length
    while i < len
      if array[ i ] is elem
        return i
      i++
    return -1

class Event
  listeners:{}

  constructor:()->
    @listeners = {}

  ###
    イベントリスナーを設定する
  ###
  on:(type, listener)->
    if not @listeners
      @listeners = {}
    if @listeners[ type ] is undefined
      @listeners[ type ] =[]

    if gy._inArray(listener, @listeners[type]) < 0
      @listeners[type].push listener
    return

  ###
    イベントリスナーを解除する
  ###
  off:(type, listener)->
    len = 0
    len++ for prop of @listeners
    if len < 1
      return
    arr = @listeners[type]
    if not arr
      return
    i = 0
    len = arr.length
    while i < len
      if arr[i] is listener
        if len is 1 then delete @listeners[type] else arr.splice(i,1)
        break
      i++
    return


  ###
    イベントを発火する
  ###
  emit:(type)->
    ary = @listeners[ type ]

    if ary isnt undefined
      # event.target = @
      handler.call(@, null) for handler in ary
    return



class UserModel extends Event
  id : 0
  user_id  : null
  nickname : null
  score    : 0

  constructor:(id)->
    super()
    @id = id
    @score = 0
    console.log "currentScore:", @score

  showScore:()=>
    console.log
    console.log "userID:", @id, "score:", @score

  addScore:(score)->
    @score = score
    @emit "update"

#ユーザー登録
# user = new UserModel()
# user.showScore()

# #ポイントを獲得した
# user.score = 100
# user.showScore()

# user.score = 200
# user.showScore()

notifyScoreUpdate=(event)->
  console.log "score update!"

users = []

i = 0
while i < 5
  user = new UserModel(i + 1)
  user.on "update", notifyScoreUpdate
  users.push user
  i++

console.log "========= before score update ============="

for user in users
  # user.showScore()
  if user.id is 3
    user.addScore 200

console.log "========= after score update ============="





# for user in users
#   if user.score > 0
#     user.showScore()