(function(){
document.querySelectorAll('table').forEach(function(t){if(!t.parentElement.classList.contains('tablewrap')){var w=document.createElement('div');w.className='tablewrap';t.parentNode.insertBefore(w,t);w.appendChild(t);}});
var lb=document.getElementById('lb');
document.addEventListener('click',function(e){
 var f=e.target.closest('.fig img,.heroimg img,.big img,.ic2 img');
 if(f&&lb){lb.querySelector('img').src=f.src;lb.classList.add('on');return}
 if(lb&&lb.classList.contains('on')){lb.classList.remove('on')}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb)lb.classList.remove('on')});
// filters
var cards=[].slice.call(document.querySelectorAll('.pc'));
var state={t:'all',p:'all'};
function apply(){var n=0;cards.forEach(function(c){var ok=(state.t==='all'||(c.dataset.t||'').split(' ').indexOf(state.t)>-1)&&(state.p==='all'||(c.dataset.p||'').split(' ').indexOf(state.p)>-1);c.classList.toggle('hide',!ok);if(ok)n++;});
 document.querySelectorAll('.fam').forEach(function(f){var g=f.nextElementSibling;if(g){f.style.display=g.querySelector('.pc:not(.hide)')?'':'none';}});
 var el=document.getElementById('count');if(el)el.textContent=n+'개 제품';}
document.querySelectorAll('.chipb[data-f]').forEach(function(b){b.addEventListener('click',function(){var g=b.dataset.g;state[g]=b.dataset.f;document.querySelectorAll('.chipb[data-g="'+g+'"]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});apply();});});
if(cards.length)apply();
// modal
function openSheet(id,push){var d=document.getElementById('sh-'+id);if(!d)return;if(typeof d.showModal==='function'){if(!d.open)d.showModal();}else{d.setAttribute('open','')}if(push!==false)history.replaceState(null,'','#'+id);}
cards.forEach(function(c){c.addEventListener('click',function(){openSheet(c.dataset.id)});});
document.querySelectorAll('dialog.sheet').forEach(function(d){d.addEventListener('click',function(e){if(e.target===d)d.close()});d.addEventListener('close',function(){if(location.hash.indexOf('#sh')!==0&&location.hash)history.replaceState(null,'',location.pathname)});d.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',function(){d.close()})});});
document.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();openSheet(a.dataset.open)})});
if(location.hash&&document.getElementById('sh-'+location.hash.slice(1))){setTimeout(function(){openSheet(location.hash.slice(1),false)},50)}
})();