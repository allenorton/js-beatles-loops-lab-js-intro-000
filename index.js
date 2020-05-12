function theBeatlesPlay (musicians, instruments) {
  var whoPlays = []
  for (var x = 0; x < musicians.length; x ++){
    whoPlays.push(musicians[x] + "plays" +instruments[x])
  }
  return whoPlays
}
