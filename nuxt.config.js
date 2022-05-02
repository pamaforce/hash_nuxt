module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '宝贝听我说',
        script: [
            { src: '/rem.js', type: 'text/javascript', charset: 'utf-8' }
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'initial-scale=1;user-scalable=no' },
            { hid: 'description', name: 'description', content: '宝贝听我说 官方网站 哈希碰撞科技有限公司' },
            { hid: 'keywords', name: 'keywords', content: '官方网站' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: ['~assets/css/normalize.css'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}