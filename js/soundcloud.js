SC.initialize({
  client_id: '30cba84d4693746b0a2fbc0649b2e42c'
})

SC.resolve('https://soundcloud.com/tritoniaradio/tritonia-128').then(function(tracks) {
  //alert(JSON.stringify(tracks))
  alert(tracks.description)
})
