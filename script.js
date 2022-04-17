const buttons = document.querySelector('.buttons');

for(i = 0; i < 19; i++) {
    const e = document.createElement('button');
    buttons.append(e);
    if (i == 16){
        e.setAttribute("style", "grid-column: span 2");
    }
}

