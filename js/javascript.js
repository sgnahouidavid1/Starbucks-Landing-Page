/* Here we will have some javascript code with limit comment and documentation 
because I'm stil haven't learn that much javascript at this moment, but this code will be 
used for future reference. */

// Footer Links Accordion Code 
document.addEventListener('DOMContentLoaded', () => {
    const linkContainer = document.querySelector('.footer-links')
    linkContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.footer-group-header');
        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.link-group');
        const icon = groupHeader.querySelector('i');

        // Toogle icon between plus and minus sign
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body.
        groupBody.classList.toggle('open');

        // Closing the other Footer links bodies.
        const otherGroups = linkContainer.querySelectorAll('ul');
        // Looping through the Link groups
        otherGroups.forEach((otherGroup) => {
             if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.link-group');
                const otherIcon = otherGroup.querySelector('.footer-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

/* Hamburger rotation javascript code */
/* Getting the hamburger button Id using getElementById() function */
const btn = document.getElementById('menu-btn')
/* Getting the mobile menu Id using getElementById() function */
const nav = document.getElementById('menu')
function navToggle() {
    btn.classList.toggle('open'); /* toggles attaching the open class onto the hamburger-button class */
    nav.classList.toggle('hidden'); /* toggles attaching the hidden class onto the mobile-menu class */
    document.body.classList.toggle('no-scroll'); /* toggles attaching the no-scroll class onto the body element to prevent scrolling when the menu is open */
    /* This is to prevent the body from scrolling when the menu is open */
}
btn.addEventListener('click', navToggle)