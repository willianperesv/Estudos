
const day = require('./date')



function onloads(){
    window.onload = function(){
        const infos = document.getElementById('infos')
        
        infos.innerHTML = day.days() 
        infos.innerHTML = "aee Oirra" 

    }
}

$.ajax({
    url: 'onloads',
    data: {
        onloads()
    },
    success(data){
        onloads('get', data)
    }
})


