_ = require "underscore"

packagejson     = require "./package.json"

module.exports = (grunt)->
  #package.json から持ってくる
  _.each _.keys( packagejson.devDependencies ),(key)-> grunt.loadNpmTasks(key) if key.indexOf( "grunt-" ) == 0

  config =
    #コーヒー用の設定
    coffee:
      #ソースコードをコンパイルする
      product:
        options:
          bare: false
        expand: true
        cwd: "src/coffee"
        src: ['*.coffee', '**/*.coffee']
        dest: "dist"
        ext: '.js'


    watch:
      coffee:
        files: ["src/*.coffee", "src/**/*.coffee"]
        tasks: ["coffee:product",]

  grunt.initConfig(config)

  #ここに生成したいファイルを追加していく

  #余計なことしないためにデフォルトを封印
  grunt.registerTask "default", ()->
    grunt.task.run [
      "watch"
    ]

