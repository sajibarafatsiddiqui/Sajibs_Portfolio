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
