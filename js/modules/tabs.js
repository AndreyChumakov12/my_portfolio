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