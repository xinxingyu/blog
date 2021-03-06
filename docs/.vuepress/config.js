const fs = require("fs")
const path = require('path')

const blogBasePath = path.resolve(__dirname, '../blog')
const getBlogChildren = (dir) => {
    let files = fs.readdirSync(dir)
    let children = files.map(file => {
        let subPath = path.join(dir, file)
        let stats = fs.statSync(subPath)
        if (stats.isDirectory()) return file
    })
    return children
}

/**
 * Type: Array
 * 博客所包含的子类数组
 */
let blogChildren = getBlogChildren(blogBasePath)

const getDirectoryTree = (dir) => {
    let result = {
        title: path.basename(dir)
    }
    let files = fs.readdirSync(dir) //同步拿到文件目录下的所有文件名

    result.children = files.map(file => {
        let subPath = path.join(dir, file) //拼接为相对路径
        let stats = fs.statSync(subPath) //拿到文件信息对象

        if (file == 'images' || /^\./.test(file)) return

        if (stats.isDirectory()) {
            return getDirectoryTree(subPath)
        }

        let basename = path.basename(subPath, '.md')

        if (basename != 'README') {
            if (!blogChildren.includes(path.basename(dir))) {
                return path.basename(dir) + '/' + path.basename(subPath, '.md')
            } else {
                return path.basename(subPath, '.md')
            }
        }
    })

    result.children = result.children.filter((item) => item)

    return result
}

const sidebarConfig = (fileName) => {
    let dir = path.resolve(__dirname, '../blog/' + fileName)
    return getDirectoryTree(dir).children
}


module.exports = {
    base: '/blog/',
    dest: './dist',
    title: 'XXY BLOG',
    description: 'xinxingyu',
    serviceWorker: true,
    head: [
        ['link', {
            rel: 'icon',
            href: `/icon.jpg`
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    // theme: 'vue',
    themeConfig: {
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        },
        repo: 'xinxingyu',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'blog',
                link: '/blog/',
                items: [{
                        text: 'Vue',
                        link: '/blog/Vue/'
                    },
                    {
                        text: '编译原理',
                        link: '/blog/CompilersPrinciples/'
                    },
                    {
                        text: 'Frame',
                        link: '/blog/Frame/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/blog/JavaScript/'
                    },
                    {
                        text: 'Css',
                        link: '/blog/Css/'
                    },
                    {
                        text: 'Node',
                        link: '/blog/Node/'
                    },
                ]
            },
            {
                text: 'About',
                link: '/about/'
            }
        ],
        sidebar: {
            '/blog/Css/': sidebarConfig('Css'),
            '/blog/JavaScript/': sidebarConfig('JavaScript'),
            '/blog/Vue/': sidebarConfig('Vue'),
            '/blog/CompilersPrinciples/': sidebarConfig('CompilersPrinciples'),
            '/blog/Frame/': sidebarConfig('Frame'),
            '/blog/Node/': sidebarConfig('Node'),
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
}



// function genSidebarConfig(title) {
//     return [
//         {
//         title: 'DesignPattern',
//         // collapsable: false,
//         children: [
//             'DesignPattern/Singleton',
//             'DesignPattern/FactoryPattern',
//         ]
//     },
//     'currying'
//     ]
// }
