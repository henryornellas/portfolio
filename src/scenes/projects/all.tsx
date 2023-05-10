import shredded from '/src/assets/shredded.png';
import ziba from '/src/assets/ziba.png';     
import blog from '/src/assets/blog.png';     
import authentication from '/src/assets/authentication.png';     
import dinder from '/src/assets/dinder.png';     




export const all = [
    {
        src: shredded,
        name: 'SHREDDED 🔴',
        description: 'Gym brand website that provides information about gym services, different classes, and membership plans.',
        code: 'https://github.com/henryornellas/shredded',
        liveDemo: 'https://11080c6a.shredded.pages.dev/',
        tech1: 'TailwindCSS',
        tech2: 'Typescript',
        order: 'first',

    },
    {
        src: ziba,
        name: 'ZIBA DELIVERY 🛒',
        description: 'Delivery website where users can choose different type of foods and add them to cart. With a modern and intuitive design.',
        code: 'https://github.com/henryornellas/ziba-delivery',
        liveDemo: 'https://henryornellas.github.io/ziba-delivery',
        tech1: 'React',
        tech2: 'CSS',
        order: 'last',

    },
    {
        src: blog,
        name: 'EJS BLOG 📕',
        description: 'A Blog website where you can write your notes and post them. It features a simple design and easy posting experience.',
        code: 'https://github.com/henryornellas/EJS-Blog',
        liveDemo: 'https://cute-boa-gloves.cyclic.app/',
        tech1: 'NodeJS',
        tech2: 'MongoDB',
        order: 'first'
    },
    {
        src: authentication,
        name: 'SECRETS 🔑',
        description: 'App for posting your secrets anonymously when authenticated, it uses passport and google auths to register, login and save cookies.',
        code: 'https://github.com/henryornellas/authentication-test',
        liveDemo: 'https://authentication-rp1h.onrender.com/',
        tech1: 'NodeJS',
        tech2: 'MongoDB',
        order: 'last'
    },
    {
        src: dinder,
        name: 'DINDER 🔥',
        description: 'Relationship App page displaying plans and users testimonials using the Bootstrap framework.',
        code: 'https://github.com/henryornellas/Dinder',
        liveDemo: 'https://henryornellas.github.io/Dinder/',
        tech1: 'Bootstrap',
        tech2: 'Javascript',
        order: 'first'
    }
]