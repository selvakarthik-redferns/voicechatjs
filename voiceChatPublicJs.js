window.addEventListener('click',handleOnCick())

function handleOnCick(){
    console.log('Clicked');
}

window.removeEventListener('click',handleOnCick)
