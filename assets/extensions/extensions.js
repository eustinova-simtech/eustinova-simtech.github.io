window.pwajet.extensions.forEach((o=>{import(`${o.src}`).catch((o=>console.error(o)))}));