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