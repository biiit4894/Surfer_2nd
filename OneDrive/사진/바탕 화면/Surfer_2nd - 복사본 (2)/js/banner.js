// $(document).ready(function(){
//     $("a").on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 200, function(){
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// 사이트 접속 시 문장 순서대로 애니메이션 
$(document).ready(function () {
    var jbTime = 2000;
    $('.surfer_line1').animate({
        opacity: '1'
    }, jbTime, function () {
        $('.surfer_line2').animate({
            opacity: '1'
        }, jbTime, function () {
            $('.surfer_line3').animate({
                opacity: '1'
            }, jbTime, function () {
                $('.surfer_line4').animate({
                    opacity: '1'
                }, jbTime, function () {
                    $('.scroll_icon_wrap').animate({
                        opacity: '1'
                    }, jbTime)
                });
            });
        });
    });
});

// 랜딩페이지 마우스오버, 마우스아웃 효과
const chungwonSpan = document.querySelector("span#chungwon");
const sanitaryWorkerSpan = document.querySelector("span#sanitary_worker")

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });


function handleChungwonMouseOver() {
    chungwonSpan.style.background = 'linear-gradient(to top, transparent 22%, #40b5eb 22%, #40b5eb 85%, transparent 85%)';
    chungwonSpan.style.setProperty('--animate-duration', '0.5s');
    animateCSS("span#chungwon", 'flipInX');
}

function handleChungwonMouseOut() {
    chungwonSpan.style.background = 'none';
}

function handleWorkerMouseOver() {
    sanitaryWorkerSpan.style.background = 'linear-gradient(to top, transparent 24%, #40b5eb 24%, #40b5eb 85%, transparent 85%)';
    sanitaryWorkerSpan.style.setProperty('--animate-duration', '0.5s');
    animateCSS("span#sanitary_worker", 'flipInX');

}

function handleWorkerMouseOut() {
    sanitaryWorkerSpan.style.background = 'none';
}


chungwonSpan.addEventListener("mouseover", handleChungwonMouseOver);
chungwonSpan.addEventListener("mouseout", handleChungwonMouseOut);
sanitaryWorkerSpan.addEventListener("mouseover", handleWorkerMouseOver);
sanitaryWorkerSpan.addEventListener("mouseout", handleWorkerMouseOut);