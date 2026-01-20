document.addEventListener('DOMContentLoaded', ()=>{
  // Typewriter/rotator
  const phrases = ['Cybersecurity Engineer','Penetration Tester','Security Researcher','Blue Teamer'];
  let idx=0, pos=0, forward=true;
  const el = document.getElementById('type');
  function step(){
    const current = phrases[idx];
    if(forward){
      pos++;
      if(pos>=current.length){ forward=false; setTimeout(step,900); return; }
    } else {
      pos--;
      if(pos<=0){ forward=true; idx=(idx+1)%phrases.length; setTimeout(step,300); return; }
    }
    el.textContent = current.slice(0,pos);
    setTimeout(step, forward?80:40);
  }
  if(el) step();

  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', ()=> links.classList.toggle('show'))
    links.addEventListener('click', (e)=>{ if(e.target.tagName==='A') links.classList.remove('show') })
  }

  // Fill year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});
