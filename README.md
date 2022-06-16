## 使用

- 初始化vue项目 vue create demo

- 安装组件库 yarn add tata-ui

- 全局导入

    import TataUi from 'tata-ui'
    import 'tata-ui/lib/heimui.css'
    
    Vue.use(TataUi)

## 组件

项目初始化

使用vue-cli脚手架快速搭建一个vue项目

    // 选择scss babel 和 eslint
    vue create tata-ui
    

启动项目

    cd tata-ui
    yarn serve
    



icon的支持

在main.js中引入字体图标文件

    import './assets/fonts/font.scss'
    

结构

    <i :class="icon" v-if="icon"></i>
    <slot></slot>
    

js

    icon: {
      type: String,
      default: ''
    }
    

样式

    // 按钮后的文本
    .hm-button [class*=hm-icon-]+span {
        margin-left: 5px;
    }
    




## 封装成UI组件库

目录调整

- 根目录创建两个文件夹packages和examples

    packages: 用于存放所有的组件
    examples: 用于进行测试,把src改成examples
    
    

- 把components中所有的组件放入到packages中
- 把fonts放到packages中
- 删除原来的src目录

vue.config.js配置

新增vue.config.js配置

    const path = require('path')
    module.exports = {
      pages: {
        index: {
          entry: 'examples/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      // 扩展 webpack 配置，使 packages 加入编译
      chainWebpack: config => {
        config.module
          .rule('js')
          .include.add(path.resolve(__dirname, 'packages')).end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
            // 修改它的选项...
            return options
          })
      }
    }
    
    

- 统一导出packages中所有的组件

    // 统一导出
    // 导入颜色选择器组件
    import Button from './button'
    import Dialog from './dialog'
    import Input from './input'
    import Checkbox from './checkbox'
    import Radio from './radio'
    import RadioGroup from './radio-group'
    import Switch from './switch'
    import CheckboxGroup from './checkbox-group'
    import Form from './form'
    import FormItem from './form-item'
    import './fonts/font.scss'
    
    // 存储组件列表
    const components = [
      Button,
      Dialog,
      Input,
      Checkbox,
      Radio,
      RadioGroup,
      Switch,
      CheckboxGroup,
      Form,
      FormItem
    ]
    
    // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
    const install = function (Vue) {
      // 遍历注册全局组件
      components.forEach(component => {
        Vue.component(component.name, component)
      })
    }
    
    // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    export default {
      install
    }
    
    
    

## 引入使用

  import Vue from 'vue'
  import App from './App.vue'
  
  import TataUi from '../packages'
  
  Vue.use(TataUi)
  
  Vue.config.productionTip = false
  
  new Vue({
    render: h => h(App)
  }).$mount('#app')
    
    
    





发布到npm与github

发布到github



发布到npm

 https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93 

- 在scripts中新增一条 打包命令

    "lib": "vue-cli-service build --target lib packages/index.js"
    
    



- 发布到npm

修改package.json文件

    "private": false,
    "main": "dist/tata-ui.umd.min.js",
    "author": {
      "name": "胡聪聪"
    },
    
    



增加 `.npmignore文件

    # 忽略目录
    examples/
    packages/
    public/
     
    # 忽略指定文件
    vue.config.js
    babel.config.js
    *.map
    
    



- npm发布

    npm login
    npm publish
    
    


