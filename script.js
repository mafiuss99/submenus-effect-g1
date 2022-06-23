const menu = document.querySelector(".menu-cascade > ul");
const menuLinks = document.querySelectorAll(".menu-cascade a");
const buttons = document.querySelectorAll(".menu-cascade button");

const handleMenuLinksSlideEffect = () => {
    menuLinks.forEach(el => {
            
        const sibling = el.nextElementSibling;

        if(sibling?.classList?.contains("subitems")) {
                    
            handleLinksActions({
                el,
                sibling,
                menu
            })

            const btnBack = sibling?.getElementsByTagName("button")[0];

            if(btnBack) handleBtnBackActions({btnBack, menu})
        }
    });
}

const handleLinksActions = ({el, sibling, menu}) => {
    el.href = "javascript:void(0)";
    el.addEventListener('click', () => {
        sibling.style.display = 'block';
        const posX = menu.getBoundingClientRect().left;
        menu.setAttribute("style",`transform: translateX(${posX - 120}px`);
    });
}

const handleBtnBackActions = ({btnBack, menu}) => {
    btnBack.addEventListener("click", () => {
        const posX = menu.getBoundingClientRect().left;
        menu.setAttribute("style",`transform: translateX(${posX + 120}px`);
        setTimeout(() => {
            sibling.style.display = 'none'
        }, 300)
    });     
}
    
document.addEventListener("DOMContentLoaded", () => {
    handleMenuLinksSlideEffect();
})