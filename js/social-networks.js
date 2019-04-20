let socials = {
    facebook: {
      url: 'https://www.facebook.com/hidequel.puga',
      icon: './img/facebook-icon.png'
    } ,
    youtube: {
      url: 'https://www.youtube.com/channel/UCanRFllGxt0r4yakALhHoog/featured?view_as=public',
      icon: './img/youtube-icon.png'
    },
    twitter: { 
      url: 'https://twitter.com/bounty31k',
      icon: './img/twitter-icon.png'
    },
    linkedin: {
      url: 'https://es.linkedin.com/in/hidequel-puga-48344654',
      icon: './img/linkedin-icon.png'
    },
    github: {
      url: 'https://github.com/bounty31k',
      icon: './img/github-icon.png'
    } 
  }
  
  let socialIcons = '';
  for(let social in socials) {
    socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
  }
  
  document.getElementById('sociales').innerHTML = socialIcons;