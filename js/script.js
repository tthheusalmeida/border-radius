function getBorderRadiusValues(){
    var border = [];

    border[0] = document.getElementById('tl').value;
    border[1] = document.getElementById('tr').value;
    border[2] = document.getElementById('br').value;
    border[3] = document.getElementById('bl').value;
    
    for(let i = 0; i<4; i++){
        if(border[i] < 0) border[i] = 0;
        else if(border[i] > 50) border[i] = 50;
        else border[i] = 0;
        console.log(border[i]);
    }
    return border[0] + '% ' + border[1] + '% ' + border[2] + '% ' +  border[3] + '%';                                                            
}

function changeBorderRadius(){
    document.getElementById('box').style.borderRadius = getBorderRadiusValues();                                                         
}


function copyBorderRadius() {
    var borderRadius = getBorderRadiusValues();

    console.log(borderRadius);
     
    copyStringToClipboard('border-radius: ' + borderRadius + ';');

    alert('This Text was copy: border-radius: ' + borderRadius + ';');
}

function copyStringToClipboard (str) {
    var el = document.createElement('textarea');
    
    el.value = str;
    
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    el.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(el);
}
 