module.exports = {
    plugins: {
        tailwindcss:{},
        //'@tailwindcss/jit':{},
        autoprefixer:{}
    }
}
/*
module.exports = (opts = {}) => {
       checkOpts(opts)
       return {
         postcssPlugin: 'postcss-dark-theme-class',
         Once (root, { result }) {
            root.walkAtRules(atrule => { … })
         }
       }
     }
     module.exports.postcss = true*/