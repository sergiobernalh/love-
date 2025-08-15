var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "¡Feliz cumpleaños! Hoy es un día muy especial y quiero que sepas cuánto te aprecio. Espero que disfrutes al máximo cada momento de este día que celebra tu vida. Mi mayor deseo es que te la pases bien y que tu corazón se llene de alegría.!  <<               Recuerdo todos esos momentos juntos en los que siempre he estado para animarte, cuidarte y amarte. Cada risa compartida y cada abrazo sincero me hacen sentir afortunado de tenerte en mi vida. Eres alguien que merece todo lo bueno, y siempre estaré aquí para protegerte y respetarte en cada paso del camino. <<<               Espero que te guste tu regalo, lo elegí con mucho cariño para ti. Quiero que cada vez que lo veas, recuerdes cuánto te valoro y lo especial que eres para mí.                                                                        > Deseándote un hermoso cumpleaños, lleno de amor, sorpresas y momentos inolvidables. Que este nuevo año de vida te traiga la felicidad que tanto mereces.  <<                  te quiero mucho....! <<                           felicidades por cumplir una de tu metas...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <SweetHeart.....! |                  <<<< Give me One chance to Prove my Love Naomi ...!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
    else if(txt1.charAt(i)=='|')
      {
        $(".bg_heart").css("background-image","url('lista.jpg')");
}
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
