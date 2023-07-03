const title = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${title.length}`);
title.forEach(
    (li)=>{
        console.log(`Categori: ${li.firstElementChild.textContent}` );
        console.log(`Element: ${li.lastElementChild.children.length}` );
    }
)
console.log(title.children)