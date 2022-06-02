
let btn_right = document.getElementById('move-items-right');
let btn_left = document.getElementById('move-items-left');
let li = document.querySelectorAll('.relation-topic li');
let ul = document.querySelector('.relation-topic ul');
let count = 0;
let count_right = 0;
let collection_wid_li = 0;

/* start work on star move */
let deg = 10;
let dis_icon = document.querySelectorAll('#star');
setInterval(() => {
    dis_icon.forEach(e => {
        e.style.transform = 'rotate(' + deg + 'deg)'; deg++;
    });

}, 100);
/* end work on star move */


li.forEach(el => { collection_wid_li += (el.clientWidth + 13); });
/* Get li element */

if (ul.clientWidth == collection_wid_li || ul.clientWidth > (collection_wid_li - 20)) {
    btn_left.style.display = 'none';
    btn_right.style.display = 'none';
} else {
    btn_left.style.display = 'block';
    btn_right.style.display = 'block';
}

btn_right.addEventListener('click', MoveX_li);
btn_left.addEventListener('click', MoveX_li);
function MoveX_li(e) {
    if (count >= 0 && e.target.id == 'move-items-right' || count > 0 && e.target.id == 'move-items-left') {
        if ((collection_wid_li - (ul.clientWidth * (count + 1))) > ul_fllowing.clientWidth) {
            count_right = 0;
            if (e.target.id == 'move-items-right') { count++; } else { count--; }
            li.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -(ul.clientWidth * count) + 'px)';
            });
        } else if (e.target.id == 'move-items-left') {
            count--;
            count_right = 0;
            li.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -(ul.clientWidth * count) + 'px)';
            });
        } else if (e.target.id == 'move-items-right' && count_right == 0) {
            count++;
            li.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -((ul.clientWidth * (count)) + (collection_wid_li - (ul.clientWidth * (count + 1)))) + 'px)';
            });
            if (e.target.id == 'move-items-right') { count_right++; }
        }
    }
}


let btn_fllowing_right = document.getElementById('move-fllowing-items-right');
let btn_fllowing_left = document.getElementById('move-fllowing-items-left');
let ul_fllowing = document.querySelector('.fllowing ul');
let li_fllowing = document.querySelectorAll('.fllowing li');
let count_fllowing = 0;
let count_right_fllowing = 0;
let collection_wid_fllowing = 0;
li_fllowing.forEach(el => { collection_wid_fllowing += (el.clientWidth + 12); });
btn_fllowing_right.addEventListener('click', MoveX_fllowing);
btn_fllowing_left.addEventListener('click', MoveX_fllowing);


if (ul_fllowing.clientWidth == collection_wid_fllowing || ul_fllowing.clientWidth > (collection_wid_fllowing - 20)) {
    btn_fllowing_left.style.display = 'none';
    btn_fllowing_right.style.display = 'none';
} else {
    btn_fllowing_left.style.display = 'block';
    btn_fllowing_right.style.display = 'block';
}



function MoveX_fllowing(e) {
    if (count_fllowing >= 0 && e.target.id == 'move-fllowing-items-right' || count_fllowing > 0 && e.target.id == 'move-fllowing-items-left') {
        if ((collection_wid_fllowing - (ul_fllowing.clientWidth * (count_fllowing + 1))) > ul_fllowing.clientWidth) {
            count_right_fllowing = 0;
            if (e.target.id == 'move-fllowing-items-right') { count_fllowing++; } else { count_fllowing--; }
            li_fllowing.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -(ul_fllowing.clientWidth * count_fllowing) + 'px)';
            });
        } else if (e.target.id == 'move-fllowing-items-left') {
            count_fllowing--;
            count_right_fllowing = 0;
            li_fllowing.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -(ul_fllowing.clientWidth * count_fllowing) + 'px)';
            });
        } else if (e.target.id == 'move-fllowing-items-right' && count_right_fllowing == 0) {
            count_fllowing++;
            li_fllowing.forEach(el => {
                el.style.transition = 'transform 0.4s ease-in-out';
                el.style.transform = 'translateX(' + -((ul_fllowing.clientWidth * (count_fllowing)) + (collection_wid_fllowing - (ul_fllowing.clientWidth * (count_fllowing + 1)))) + 'px)';
            });
            if (e.target.id == 'move-fllowing-items-right') { count_right_fllowing++; }
        }
    }
}
