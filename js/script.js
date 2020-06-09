function changeBorderRadius(){
    var border = [];

    border[0] = document.getElementById('tl').value;
    border[1] = document.getElementById('tr').value;
    border[2] = document.getElementById('br').value;
    border[3] = document.getElementById('bl').value;
    
    for(let i = 0; i<4; i++){
        if(border[i] < 0) border[i] = 0;
        else if(border[i] > 50) border[i] = 50;
    }
    document.getElementById('box').style.borderRadius = border[0] + '% ' + 
                                                            border[1] + '% ' + 
                                                            border[2] + '% ' + 
                                                            border[3] + '% ';                                                         
}

function copyBorderRadius() {
    var borderRadiusValues = document.getElementById('box').style.borderRadius;

    let copyText = borderRadiusValues;
    
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
  }