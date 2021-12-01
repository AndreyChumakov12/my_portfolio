/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
    const   sliderSkillsInner = document.querySelector('.slider_skills__inner'),
            sliderBtnLeft = document.querySelector('.wrapper_btn_left'),
            sliderBtnRight = document.querySelector('.slider_btn_right');
            
        
    function sliderLeft() {
        const translateOut = function() {sliderSkillsInner.style.transform = `translateX(120px)`;};
        const translateover = function() {sliderSkillsInner.style.transform = `translateX(250px)`;};
        let i = 0;
        
        sliderBtnLeft.addEventListener('mouseenter', () => {
            translateover();
            sliderBtnLeft.addEventListener('mouseleave', translateOut);
        }); 


        sliderBtnLeft.addEventListener('click', () => { 
            if(i == 0){
                i++;
                translateover();
                sliderBtnLeft.removeEventListener('mouseleave', translateOut);
            }
            else{
                translateOut();
                sliderBtnLeft.addEventListener('mouseleave', translateOut);
                i = 0;
            } 
        });
    }

    function sliderReght() {
        const translateover = function() {sliderSkillsInner.style.transform = `translateX(-1850px)`;};
        const translateOut = function() {sliderSkillsInner.style.transform = `translateX(-1200px)`;};
        let i = 0;

        sliderBtnRight.addEventListener('mouseenter', () => {
            translateover();
            sliderBtnRight.addEventListener('mouseleave', translateOut);
        }); 

        sliderBtnRight.addEventListener('click', () => { 
        
            if(i == 0){
                i++;
                translateover();
                sliderBtnRight.removeEventListener('mouseleave', translateOut);
            }
            else{
                i = 0;
                translateOut();
                sliderBtnRight.addEventListener('mouseleave', translateOut);   
            }
        });
    }

    sliderReght();
    sliderLeft();
}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
const about =  document.querySelector('#about'),
      skills =  document.querySelector('#skills'),
      education = document.querySelector('#education'),
      experience = document.querySelector('#experience'),
      wrapper = document.querySelector('.tabs_wrapper');
const widthtTab = skills.offsetWidth;
const widthTargenTab = about.offsetWidth;




aboutAnim();

 function skillsAnim() {
     console.log(skills.offsetWidth);
     about.style.width = `${widthtTab}px`;
     about.style.right = '0px';
     skills.style.right = `${widthtTab + 40}px`;
     skills.style.width = `${widthTargenTab}px`;
     experience.style.top = '540px';
     education.style.top = '540px';
     education.style.right = '0px';
     experience.style.right = `${widthtTab + 40}px`;
} 

function aboutAnim() {
  console.log(skills.offsetWidth);
     about.style.width = `${widthTargenTab}px`;
     skills.style.width = `${widthtTab}px`;
     skills.style.right = '0px';
     about.style.right = `${widthtTab + 40}px`;
     
     experience.style.top = '540px';
     education.style.top = '540px';
     education.style.right = '0px';
     experience.style.right = `${widthtTab + 40}px`;
}
document.querySelectorAll('.btn__open').forEach((item) => {
  item.addEventListener('click', (event) => {
    let parent = item.parentElement;
      switch(parent.getAttribute('id')){
        case 'about':
          
        break;
        case 'skills':
            skillsAnim();
        break;
        case 'education':
       
        break;
        case 'experience':
          aboutAnim();
        break;
      }
  });
});




}
 module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/

window.addEventListener('DOMContentLoaded', () => {
    const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
          tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");

    slider();
    tabs();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map