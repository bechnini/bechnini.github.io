(function(){
  // Matrix rain
  const canvas = document.getElementById('matrix');
  if (canvas){
    const ctx = canvas.getContext('2d');
    const chars = '01', fontSize = 16, speed = 1.15;
    let cols, rows, grid, drops;
    function resize(){
      canvas.width=innerWidth; canvas.height=innerHeight;
      cols=Math.floor(canvas.width/fontSize); rows=Math.floor(canvas.height/fontSize);
      grid=Array.from({length:rows},()=>Array.from({length:cols},()=>chars[Math.random()<.5?0:1]));
      drops=Array.from({length:cols},()=>Math.random()*rows);
    }
    function step(){
      ctx.fillStyle='rgba(13,9,4,0.10)'; ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.font=fontSize+'px "IBM Plex Mono", monospace'; ctx.textBaseline='top';
      for(let x=0;x<cols;x++){
        const y=Math.floor(drops[x]);
        if(y>=0&&y<rows){
          if(Math.random()<.35) grid[y][x]=chars[Math.random()<.5?0:1];
          ctx.fillStyle='rgba(255,200,90,0.55)'; ctx.fillText(grid[y][x],x*fontSize,y*fontSize);
          if(y-1>=0){ctx.fillStyle='rgba(255,176,0,0.28)'; ctx.fillText(grid[y-1][x],x*fontSize,(y-1)*fontSize);}
          if(y-2>=0){ctx.fillStyle='rgba(179,122,0,0.15)'; ctx.fillText(grid[y-2][x],x*fontSize,(y-2)*fontSize);}
        }
        drops[x]+=speed*(0.6+Math.random()*0.8);
        if(drops[x]>rows+Math.random()*30) drops[x]=-Math.random()*20;
      }
    }
    addEventListener('resize',resize); resize(); setInterval(step,55);
  }

  // Side gutter scroll
  const leftStrips  = document.querySelectorAll('.side-gutter.left  .side-texture');
  const rightStrips = document.querySelectorAll('.side-gutter.right .side-texture');
  if (leftStrips.length && rightStrips.length){
    const SCROLL_SPEED = 0.5;
    function updateGutters(){
      const y=scrollY;
      const lh=leftStrips[0].getBoundingClientRect().height;
      let lOff=(y*SCROLL_SPEED)%lh; if(lOff<0) lOff+=lh;
      leftStrips[0].style.transform=`translateY(${-lOff}px)`;
      leftStrips[1].style.transform=`translateY(${-lOff+lh}px)`;
      const rh=rightStrips[0].getBoundingClientRect().height;
      let rOff=(y*SCROLL_SPEED)%rh; if(rOff<0) rOff+=rh;
      rightStrips[0].style.transform=`translateY(${-rOff}px)`;
      rightStrips[1].style.transform=`translateY(${-rOff+rh}px)`;
    }
    let ticking=false;
    addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateGutters();ticking=false;});ticking=true;}},{passive:true});
    addEventListener('resize',updateGutters); updateGutters();
  }
})();
