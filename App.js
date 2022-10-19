const content = document.querySelectorAll('.content');
const listItem = document.querySelectorAll('nav ul li');

listItem.forEach((item,index)=>{
         item.addEventListener('click',()=>{
                hideAllContents();
                hideAllItems();
                item.classList.add('active');
                content[index].classList.add('show');
         });
});
function hideAllContents(){
    content.forEach(content =>content.classList.remove('show'));
}
function hideAllItems(){
    listItem.forEach(item =>item.classList.remove('active'));
}
