

// function Person(name, age){
//   this.name = name
//   this.age = age
//   this.stomach = []
// }
// Person.prototype.eat = function(food){
//   if(this.stomach.length<=10){
//   this.stomach.push(food)
//   }
// }
// Person.prototype.poop = function(){
//   this.stomach.length = 0
// }
// Person.prototype.toString = function(){
//   return `${this.name}, ${this.age}`
// }
// function Baby(name, age, favoriteToy){
//   Person.call(this, name, age)
//   this.favoriteToy = favoriteToy
// }
// Baby.prototype = Object.create(Person.prototype)
// Baby.prototype.play = function(){
//   return `${this.name} is playing with ${this.favoriteToy}`
// }
// function Song(songName, artist){
//   this.songName = songName
//   this.artist = artist
//   this.isPlaying = false 
// }
// Song.prototype.play = function(){
//   this.isPlaying = true
// }
// Song.prototype.stop = function(){
//   this.isPlaying = false
// }
// function Playlist(){
//   this.songs = []
//   this.songIndex = 0
// }
// Playlist.prototype.add = function(song){
//   this.songs.push(song)
// }
// Playlist.prototype.play = function(){
//   if(this.songs.length){
//     this.songs[this.songIndex].play()
//     return `${this.songs[this.songIndex].artist}'s ${this.songs[this.songIndex].songName} started to play`
//   }
// }
// Playlist.prototype.stop = function(){
//   if(this.songs.length){
//     this.songs[this.songIndex].stop()
//     return `${this.songs[this.songIndex].songName} stopped`
//   }
// }
// Playlist.prototype.next = function(){
//   if(this.songIndex + 1 < this.songs.length){
//     const stoppedSong = this.stop()
//     this.songIndex += 1
//     return `${stoppedSong}, ${this.play()} `
//   }
// }
// const artushik = new Baby("Artushik", 23, "fire")
// const song1 = new Song("Mi Gna", "Hovo Khachatryan")
// const song2 = new Song("Xent Xent Xent", "Vardan Sargsyan")
// const song3 = new Song("Mi lar", "Tigran Zhamkochyan")
// const playlist = new Playlist()

// playlist.add(song1)
// playlist.add(song2)
// playlist.add(song3)
// console.log(playlist.play())
// console.log(playlist.next())
// console.log(playlist.play())
// console.log(playlist.next())
// console.log(playlist.stop())
// console.log(artushik.play())