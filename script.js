document.onkeydown=function(e)
{
    console.log("keycode is:",e.keycode);
    if (e.keycode==38)
        {
            dino=document.querySelector('.dino');
            dino.classlist.add('animateDinos');
            setTimeout(()=>
                {
                    console.log("yes");
                    dino.classlist.remove('animateDinos');
                },700
            );
            if(e.keycode==37)
                {
                    dino=document.querySelector('.dino')
                    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                    dino.style.left=dinoX+112+"px";
                }
        }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))
 offsetX=Math.abs(dx-ox);
 offsetY=Math.abs(dy-oy);
 console.log(offsetX,offsetY)
 if(offsetX<93 && offsetY<52)
    {
        gameover.style.visibility='visible';
        obstacle.classlist.remove('obstacleAni');

    }
    else
    {
        score+=1;
    }

}, 100);
function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}