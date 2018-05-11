module.exports = {
    base: '/blog/',
    dest: './dist',
    title: 'XXY BLOG',
    description: 'xinxingyu',
    serviceWorker: true,
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.jpeg`
        }]
    ],
    // theme: 'vue',
    themeConfig: {
        repo: 'xinxingyu',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'blog',
                link: '/blog/',
                items: [{
                        text: 'JavaScript',
                        link: '/blog/JavaScript/'
                    },
                ]
            },
            {
                text: 'About',
                link: '/about/'
            }
        ],
        sidebar: {
            // '/blog/': genSidebarConfig('博客')
        }
    }
}


function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'basic-config',
            'assets',
            'markdown',
            'using-vue',
            'custom-themes',
            'i18n',
            'deploy'
        ]
    }]
}
