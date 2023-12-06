// Globals
const buttons_quote = document.querySelectorAll('.faq__question-button');
const questions = document.querySelectorAll('#question .faq__collapse');

buttons_quote.forEach(function(button){
    button.addEventListener('click', (e) => {
        const idButton = e.target.dataset.id;
        questions.forEach(function(question){
            const idRes = question.dataset.id;
            if(idButton === idRes){
                if(question.classList.contains('faq__collapse--visible')){
                    button.children[0].src = "/assets/images/icon-plus.svg";
                    question.classList.remove('faq__collapse--visible');
                }else{
                    button.children[0].src = "/assets/images/icon-minus.svg";
                    question.classList.add('faq__collapse--visible');
                }
            }
        });
    });
});