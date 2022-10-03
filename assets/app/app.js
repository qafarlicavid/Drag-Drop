'use strict'

const input = document.querySelector('#inp')
const boxes = document.querySelectorAll('.box')
const mainbox = document.querySelector('.mainbox')

let counter = 0;
input.addEventListener('change', function(){
    const text = document.createElement('div');
    text.classList.add('text');
    text.setAttribute('draggable',true);
    text.setAttribute('id',++counter);
    text.innerHTML=this.value;
    mainbox.append(text);
    this.value="";

    text.addEventListener('dragstart',function(e){
        e.dataTransfer.setData("textId",this.id)
     })
})

boxes.forEach(box=>{
    box.addEventListener('dragover',function(e){
        e.preventDefault();
    })

    box.addEventListener('drop', function(e){
        let data = e.dataTransfer.getData('textId');
        box.append(document.getElementById(data))
    })
})
