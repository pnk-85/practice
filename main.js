const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefualt();
    console.log(e);
})

myForm.addEventListener('submit',onsubmit);

function onsubmit(e){
e.preventDefualt();

if(nameInput.value === '' || emailInput.value === ''){\
    msg.classList.add('error');
    msg.innerHTML = 'please enter all field';

    setTimeout(() => msg.removal(), 3000);
}else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('${nameInput.value} ${emaiInput.value}'));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
}
}