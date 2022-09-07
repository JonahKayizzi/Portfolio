const hambger = document.querySelector('.hambuger');
const menu = document.querySelector('.menu');
const closebutton = document.querySelector('.close');
const logo = document.querySelector('.logo');

const openMenu = () => {
  menu.style.display = 'block';
  closebutton.style.display = 'block';
  hambger.style.display = 'none';
  logo.style.display = 'none';
};

const closeMenu = () => {
  menu.style.display = 'none';
  closebutton.style.display = 'none';
  hambger.style.display = 'block';
  logo.style.display = 'block';
};

hambger.addEventListener('click', openMenu);

closebutton.addEventListener('click', closeMenu);

menu.addEventListener('click', closeMenu);

const projects = [
    {
        id: 1,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html'
        }
        ,
        backgroundImg: '../../assets/img/1.png'
    },

    {
        id: 2,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html',
        }
        ,
        backgroundImg: '../../assets/img/2.png'
    },

    {
        id: 3,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html',
        }
        ,
        backgroundImg: '../../assets/img/3.png'
    },
    
    {
        id: 4,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html'
        }
        ,
        backgroundImg: '../../assets/img/4.png'
    },
    
    {
        id: 5,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html'
        }
        ,
        backgroundImg: '../../assets/img/5.png'
    },

    {
        id: 6,
        title: 'Multi-Post Stories Gain + Glory',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        skills: {
            skill1: 'Ruby on rails',
            skill2: 'css',
            skill3: 'JavScript',
            skill4: 'html'
        }
        ,
        backgroundImg: '../../assets/img/6.png'
    }
];

const projectsWrapper = document.getElementById('works-section');
const popupWrapper = document.getElementById('pop-section');

const createElementIdClass = (newElement, className, id) => {
    const element = document.createElement(`${newElement}`);
    element.className = `${className}`;
    element.id = `${id}`;
    return element;
}

const addHTMLAppendToParent = (inHTML, parent, child) => {
    child.innerHTML = `${inHTML}`;
    parent.appendChild(child);
    return parent
}

const createProjectsContainer = () => {
    const heading = createElementIdClass('h2','home-headings works-heading','projects-heading');
    addHTMLAppendToParent('My Recent Works', projectsWrapper, heading);  
}

createProjectsContainer();
    
projects.forEach((i) => {
    const divCard = createElementIdClass('div','works-card project1','project-card');
    addHTMLAppendToParent('',projectsWrapper, divCard);
    const divCardInner = createElementIdClass('div', 'works-card-inner','project-card-inner');
    addHTMLAppendToParent('',divCard, divCardInner);
    const projectTitle = createElementIdClass('h4','works-title','project-title');
    addHTMLAppendToParent('',divCardInner, projectTitle);
    const projectContent = createElementIdClass('p','banner-message project-content','project-content');
    addHTMLAppendToParent('',divCardInner, projectTitle);
    const skillsWrapper = createElementIdClass('ul','skill-wrap works-skills','skills-wrapper');
    addHTMLAppendToParent('',divCardInner,skillsWrapper);
    const skillItem1 = createElementIdClass('li','skill-wrap works-skills','skill-item');
    const skillItem2 = createElementIdClass('li','skill-wrap works-skills','skill-item');
    const skillItem3 = createElementIdClass('li','skill-wrap works-skills','skill-item');
    const skillItem4 = createElementIdClass('li','skill-wrap works-skills','skill-item');
    addHTMLAppendToParent('',skillsWrapper, skillItem1);
    addHTMLAppendToParent('',skillsWrapper, skillItem2);
    addHTMLAppendToParent('',skillsWrapper, skillItem3);
    addHTMLAppendToParent('',skillsWrapper, skillItem4);
    const projectDetailsButton = createElementIdClass('button','home-btn work-detail-button','project-details-button');
    addHTMLAppendToParent('See Project',divCardInner,projectDetailsButton);  

    skillItem1.innerHTML = `${projects[projects.indexOf(i)].skills.skill1}`;
    skillItem2.innerHTML = `${projects[projects.indexOf(i)].skills.skill2}`;
    skillItem3.innerHTML = `${projects[projects.indexOf(i)].skills.skill3}`;
    skillItem4.innerHTML = `${projects[projects.indexOf(i)].skills.skill4}`;
    divCard.style.backgroundImage = `${projects[projects.indexOf(i)].backgroundImg}`;
    projectTitle.innerHTML = `${projects[projects.indexOf(i)].title}`;
    projectContent.innerHTML = `${projects[projects.indexOf(i)].content}`;
                                                


});


