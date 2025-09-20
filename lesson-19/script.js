console.log('log from javascript')

const elById = document.getElementById('id-1');
console.log('elById: ', elById);
elById.style.color = 'purple';

const elByClass = document.getElementsByClassName('class-1');
console.log('elByClass: ', elByClass);
elByClass[0].style.color = 'yellow';

const GroupElByClass = document.getElementsByClassName('group-class');
console.log('GroupElByClass: ', GroupElByClass);
GroupElByClass[0].style.color = 'yellow';
GroupElByClass[1].style.color = 'pink';
GroupElByClass[2].style.color = 'cyan';



