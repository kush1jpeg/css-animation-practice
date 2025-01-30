d = document.getElementsByClassName('d')
for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < 24; j++) {
    text = document.createElement('span')
   text.style.setProperty('--i', j);
    text.innerHTML='Please die!'
    d[i].appendChild(text)

}} 