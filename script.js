'use strict';

// Main menu
const openMenuEl = document.getElementById('open-menu');
const closeMenuEl = document.getElementById('close-menu');
const navMenu = document.querySelector('.nav-menu-container');
openMenuEl.addEventListener('click', function(){
    navMenu.classList.toggle('d-none')
    const expand = navMenu.classList.contains('d-none')
    openMenuEl.src = expand ? "./images/menu.png" : "./images/menu_cancel.png"
})

// Product submenu
const productExpEl = document.getElementById('product-plus');
const productColpEl = document.getElementById('product-minus');
const productSubMenuEl = document.getElementById('product-sub');
const navHelpEl = document.getElementById('nav-help');


function expandProductSub() {
    productSubMenuEl.classList.remove('d-none');
    productExpEl.classList.add('d-none');
    productColpEl.classList.remove('d-none');
}

function collapseProductSub(){
    productSubMenuEl.classList.add('d-none');
    productExpEl.classList.remove('d-none');
    productColpEl.classList.add('d-none');
}

productExpEl.addEventListener('click', expandProductSub);
productColpEl.addEventListener('click', collapseProductSub);

// office chair 
const ocExpEl = document.getElementById('oc-plus');
const ocColEl = document.getElementById('oc-minus');
const ocSubMenuEl = document.getElementById('oc-submenu');

const ocExpand = function() {
    ocSubMenuEl.classList.remove('d-none');
    ocExpEl.classList.add('d-none');
    ocColEl.classList.remove('d-none');
}

const ocCollapse = function() {
    ocSubMenuEl.classList.add('d-none');
    ocExpEl.classList.remove('d-none');
    ocColEl.classList.add('d-none');
}

ocExpEl.addEventListener('click', ocExpand);
ocColEl.addEventListener('click', ocCollapse);
