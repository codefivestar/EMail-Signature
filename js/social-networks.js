let socials = {

  github: {
    url: 'https://github.com/codefivestar/',
    icon: './img/github-icon.png'
  },
  instagram: {
    url: 'https://www.instagram.com/codefivestar/',
    icon: './img/instagram-icon.png'
  }
}

let socialIcons = '';
for (let social in socials) {
  socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
}

document.getElementById('sociales').innerHTML = socialIcons;