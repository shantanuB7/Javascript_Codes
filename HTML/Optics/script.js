window.addEventListener('scroll', function(e) {
    
    var nav = document.getElementById('nav')
    
    console.log(document.body.scrollTop)
    
    if(document.body.scrollTop > 50) {
        
        nav.classList.add('back');
        
    } else {
        nav.classList.remove('back')
    }
})