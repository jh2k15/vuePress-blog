module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }]
    ],
    dest: '.vuepress/dist',
    serviceWorker: true,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    },
    themeConfig: {
        docsDir: 'docs',
        repo: 'jh2k15/vuepress-blog',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                link: '/blog/'
            },
            {
                text: '作品',
                items: [{
                        text: 'segmentfault',
                        link: 'https://segmentfault.com/u/jh2k15'
                    },
                    {
                        text: 'weibo',
                        link: 'https://weibo.com/u/3926240039'
                    }
                ]
            },
            {
                text: '关于我',
                link: '/blog/'
            }
        ],
        sidebar: {
            '/blog/': [
                '', 
                'a', 
                'b'
            ]
        }
    }
}