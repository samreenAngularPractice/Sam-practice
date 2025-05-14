// const task = document.querySelector('#task-1')
// task.style.color='white' 
// task.style.backgroundColor='black' 

const task1 = document.getElementById('task-1')
task1.style.color='white' 
task1.style.backgroundColor='black' 

// const title = document.querySelector('title')
// //console.dir(title)
// title.textContent = 'Assignment Solved'

// const title = document.querySelector('head')
// //console.dir(title)
// title.documents.textContent = "Assignment Solved"
const tit = document.getElementsByTagName('head')
tit[0].getElementsByTagName('title')[0].textContent = "Assignment - Solved!" 