function setBackground(){
    const COLOR = document.getElementById('colorSelect').value
    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('bgcolor',COLOR)

}