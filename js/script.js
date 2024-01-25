
var music =[{name:'selena gomez',songname:'calm dowm', playlist:[{artistimage:'images/selena.jpg',track:'./Calm-Down-Calm-Down(PaglaSongs).mp3',track1:'./David-Guetta-I-m-Good-Blue-Ft-Bebe-Rexha-(HiphopMood.com).mp3',track2:'./One-Kiss(PaglaSongs).mp3',track3:'./Shape-Of-You(PagalWorlld.Com).mp3',track4:'./Doja_Cat_-_Boss_Bitch.mp3'}]}]
var playlistimage = music[0].playlist[0].artistimage;
var playlisttrack = music[0].playlist[0].track;
var playlisttrack1 = music[0].playlist[0].track1;
var playlisttrack2 = music[0].playlist[0].track2;
var playlisttrack3 = music[0].playlist[0].track3;
var playlisttrack4 = music[0].playlist[0].track4;

let audio = new Audio(playlisttrack);
let audio1 = new Audio(playlisttrack1)
let audio2 = new Audio(playlisttrack2)
let audio3 = new Audio(playlisttrack3)
let audio4 = new Audio(playlisttrack4)
function playaudio(){
         if(audio.paused)
         {
            audio.play()
            audio1.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            document.getElementById('play').className='fa-solid fa-pause'
            document.getElementById('play').innerHTML=''
            document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
            document.getElementById('selenaimg').src='images/selena.jpg'
            document.getElementById('prispan').innerHTML= 'Calm Down'
            document.getElementById('prispan1').innerHTML= 'Rema' 
         }
         else{
            audio.pause()
            document.getElementById('circleplay').className='fa-solid fa-circle-play fa-2xl';
            document.getElementById('play').className='fa-solid fa-play'
         }
 }

function playaudio1(){
        if(audio1.paused)
        {
            audio1.play()
            audio.pause()
            audio2.pause()
            audio3.pause()
            audio4.pause()
            document.getElementById('play1').className='fa-solid fa-pause'
            document.getElementById('play1').innerHTML=''
            document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
            document.getElementById('selenaimg').src='images/beberexha.jpg'
            document.getElementById('prispan').innerHTML= 'I am good'
            document.getElementById('prispan1').innerHTML= 'bebe rexha' 
            document.getElementById('play').className='fa-solid fa-play'
        }
        else{
            audio1.pause()
            document.getElementById('circleplay').className='fa-solid fa-circle-play fa-2xl';
            document.getElementById('play1').className='fa-solid fa-play'
        }
}
function playaudio2(){
    document.getElementById('play2').className='fa-solid fa-pause'
    document.getElementById('play2').innerHTML=''
    document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
    document.getElementById('selenaimg').src='images/dua lipa.jpg'
    document.getElementById('prispan').innerHTML= 'one kiss'
    document.getElementById('prispan1').innerHTML= 'dua lipa' 
      if(audio2.paused)
      {
        audio2.play()
        audio.pause()
            audio1.pause()
            audio3.pause()
            audio4.pause()
        document.getElementById('play2').className='fa-solid fa-pause'
        document.getElementById('play2').innerHTML=''
        document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
        document.getElementById('selenaimg').src='images/dua lipa.jpg'
        document.getElementById('prispan').innerHTML= 'one kiss'
        document.getElementById('prispan1').innerHTML= 'dua lipa' 
        document.getElementById('play1').className='fa-solid fa-play'
      }
      else{
        audio2.pause()
        document.getElementById('play2').className='fa-solid fa-play'
        document.getElementById('circleplay').className='fa-solid fa-circle-play fa-2xl';
      }
}
function playaudio3(){
      if(audio3.paused)
      {
        audio3.play()
        audio.pause()
            audio1.pause()
            audio2.pause()
            audio4.pause()
            document.getElementById('play3').className='fa-solid fa-pause'
        document.getElementById('play3').innerHTML=''
        document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
        document.getElementById('selenaimg').src='images/edsheern.jpg'
        document.getElementById('prispan').innerHTML= 'shape of you'
        document.getElementById('prispan1').innerHTML= 'ed sheeran'
        document.getElementById('play2').className='fa-solid fa-play'
      }
      else{
        audio3.pause()
        document.getElementById('play3').className='fa-solid fa-play'
        document.getElementById('circleplay').className='fa-solid fa-circle-play fa-2xl';
      }
}
function playaudio4(){
      if(audio4.paused)
      {
        audio4.play()
        audio.pause()
            audio1.pause()
            audio2.pause()
            audio3.pause()
        document.getElementById('play4').className='fa-solid fa-pause'
        document.getElementById('play4').innerHTML=''
        document.getElementById('circleplay').className='fa-solid fa-circle-pause fa-2xl';
        document.getElementById('selenaimg').src='images/doja cat.jpg'
        document.getElementById('prispan').innerHTML= 'boss bitch'
        document.getElementById('prispan1').innerHTML= 'doja cat'
        document.getElementById('play3').className='fa-solid fa-play'
      }
      else{
        audio4.pause()
        document.getElementById('play4').className='fa-solid fa-play'
        document.getElementById('circleplay').className='fa-solid fa-circle-play fa-2xl';
      }
}


