const container = document.getElementById('container');
const upper = document.getElementById('upper');

container.addEventListener('click',()=>{
    if(upper.classList.contains('move')){
        upper.classList.remove('move')
    }
    else{
        upper.classList.add('move')
    }
})