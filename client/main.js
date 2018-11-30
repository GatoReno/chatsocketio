var socket = io.connect('http://192.168.16.128:6677',{forceNew:true});
socket.on('mensajes',function(data){
  console.log(data);
  //alert(data);
  render(data);
});
function render(data){
  var html = data.map((msn,index) => {
    return(`
      <div class="mensaje">
        <strong>${msn.nickname}</strong>
        <p>${msn.msn}</p>
      </div>
    `)
  }).join(' ');

  document.getElementById('mensajes').innerHTML = html;
}
