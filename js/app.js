// Globals
const faq_container = document.querySelector('.faq__ul');

const data = [
    {
        id: 1,
        question: 'What is Frontend Mentor, and how will it help me?',
        answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`
    },
    {
        id: 2,
        question: 'Is Frontend Mentor free?',
        answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`
    },
    {
        id: 3,
        question: 'Can I use Frontend Mentor projects in my portfolio?',
        answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`
    },
    {
        id: 4,
        question: `How can I get help if I'm stuck on a Frontend Mentor challenge`,
        answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    showInfo();
    listeningChanges();
});

const showInfo = () => {
    data.forEach(function(faq){
        // Elements
        const li = document.createElement('LI');
        li.id = 'question';

        const question_container = document.createElement('DIV');
        question_container.classList.add('faq__question');

        const question = document.createElement('P');
        question.textContent = faq.question;

        const question_btn = document.createElement('BUTTON');
        question_btn.classList.add('faq__question-button');

        const btn_icon = document.createElement('IMG');
        btn_icon.dataset.id = faq.id;
        btn_icon.src = "/assets/images/icon-plus.svg";
        btn_icon.alt = "icon plus";

        const faq_collapse = document.createElement('UL');
        faq_collapse.classList.add('faq__collapse');
        faq_collapse.dataset.id = faq.id;

        const answer = document.createElement('LI');
        answer.textContent = faq.answer;

        // Insertion
        faq_collapse.appendChild(answer);
        question_btn.appendChild(btn_icon);
        question_container.appendChild(question);
        question_container.appendChild(question_btn);
        li.appendChild(question_container);
        li.appendChild(faq_collapse);
        faq_container.appendChild(li);
    });    
}

const listeningChanges = () => {
    const buttons_quote = document.querySelectorAll('.faq__question .faq__question-button');
    const questions = document.querySelectorAll('#question .faq__collapse');

    buttons_quote.forEach(function(button){
        button.addEventListener('click', (e) => {
            e.stopPropagation();
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
}