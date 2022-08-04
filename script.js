const radioButtons =  document.querySelectorAll('input[name="rate"]');
const hiddenSection  = document.querySelector('.form-section');
const nextBtn = document.querySelector('.next-btn');
console.log(radioButtons);
console.log(hiddenSection);
var a= 0;
function checkradio(){
    for(var i=0;i<radioButtons.length;i++)
    {

        if(radioButtons[i].checked)
        {
            hiddenSection.classList.remove("display");
            nextBtn.classList.add("display");
            a=1;
            break;
        }
    }
    if(a==0)
    {
        hiddenSection.classList.add("display");
        nextBtn.classList.remove("display");
    }
}


