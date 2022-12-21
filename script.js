const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  const div = document.createElement('div')
  const img = document.createElement('img')
  const links = document.querySelector('.nav_link')
  const home = document.querySelector('.home-page')
  const divContainer = document.createElement('div')
  const linksChilds = Array.from(links.children)
  const property = {
    color: '#fff',
    fontSize: '32px',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '600px',
    lineHeight: '44px',
    textDecoration: 'none',
  }

  divContainer.style.backgroundColor = '#6070FF'
  img.src = 'statics/images/Toolbar.png'
  img.style.float = 'right'
  img.style.marginRight = '1rem'
  img.addEventListener('mouseover', () => {
    img.style.cursor = 'pointer'
  })
  links.style.display = 'block'
  links.style.clear = 'both'
  divContainer.style.zIndex = '999'
  divContainer.style.position = 'fixed'
  divContainer.style.top = '0'
  divContainer.style.height = '130vh'
  divContainer.style.width = 'inherit'
  div.style.marginTop = '40px'
  links.style.listStyle = 'none'
  img.addEventListener('click', () => {
    divContainer.style.display = 'none'
  })

  div.appendChild(img)
  div.appendChild(links)
  divContainer.append(div)
  home.appendChild(divContainer)

  for (let i = 0; i < linksChilds.length; i += 1) {
    const eltChildren = linksChilds[i].children
    eltChildren[0].addEventListener('click', () => {
      divContainer.style.display = 'none'
    })
    linksChilds[i].style.marginBottom = '20px'
    Object.assign(eltChildren[0].style,property);
    
  }
})


const projects = {
  mwp1: {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'statics/images/Snapshoot_Portfolio.png',
    technolgies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2015],
  },
  mwp2: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio1.png',
    technolgies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['FACEBOOK', 'Full Stack Dev', 2015],
  },
  mwp3: {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio2.png',
    technolgies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['CANOPY', 'Back End Dev', 2015],
  },
  mwp4: {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'statics/images/Snapshoot_Portfolio3.png',
    technolgies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    generalInf: ['FACEBOOK', 'Full Stack Dev', 2015],
  },
};

const popUpBtn = document.querySelectorAll('.btn');
console.log(popUpBtn)
popUpBtn.forEach((btn) => {



  btn.addEventListener('click', () => {
    const container = document.createElement('div');
const propContainer = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  gap: '12px',
  position: 'absolute',
  width: '343px',

  left: 'calc(50% - 343px/2)',
  top: '60px',
  background: '#fff',
  border: '1px solid #dfe1e6',
  borderRadius: '16px',
}
Object.assign(container.style,propContainer);
const title = document.createElement('p');
const propTitle= {
width: '259px',
height: '36px',
fontFamily: '"Poppins"',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '32px',
lineHeight: '44px',
color: '#172b4d',
flex: 'none',
order: '0',
flexGrow: '0',
}
Object.assign(title.style,propTitle);
container.appendChild(title);
const modal = document.createElement('div');
const propModal= {
  display: 'none', 
  position: 'fixed',
  paddingtop: '100px', 
  zIndex: '1', 
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overFlow: 'auto',
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0,0.4)'
}
Object.assign(modal.style,propModal);
modal.appendChild(container);

    modal.style.display = "block";
    const parentElt = btn.parentElement.parentElement.parentElement;
    const parentId = parentElt.className
    console.log(parentId)
    parentElt.append(modal)
    
    title.innerHTML = projects[parentId].name;
    // // infos.innerHTML = `${projects[parentId].generalInf[0]}  &bullet;  ${projects[parentId].generalInf[1]}  &bullet;  ${projects[parentId].generalInf[2]}`;
    // // image.src = projects[parentId].img;
    // // description.innerHTML = projects[parentId].description.substring(0,
    // //   Math.min(250, projects[parentId].description.length));
    // // skills.innerHTML = '';
    // // projects[parentId].technolgies.forEach((element) => {
    // //   skills.innerHTML = `${skills.innerHTML}<li>${element} </li>`;
    // });

    // skills.classList.add('skills');
    // skills.classList.add('techns');

    // home.style.backgroundColor = 'rgba(193, 199, 208, 1)';
    // wrapper.style.visibility = 'visible';

    // wrapper.style.position = 'fixed';
  });
});