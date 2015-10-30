/**
 * Created by julien.zhang on 2015/10/27.
 */

//发布为相对路径
fis.config.set('roadmap.relative', true);

//处理sass
fis.config.set('modules.parser.scss', 'sass');
fis.config.set('modules.parser.sass', 'sass');
fis.config.set('roadmap.ext.scss', 'css');
fis.config.set('roadmap.ext.sass', 'css');


//静态资源文件域名设置;
fis.config.merge({
    roadmap : {
        domain:''
    }
});

//部署配置
fis.config.set('roadmap.path', [

    {
        reg:/.*\.(?:js|sass|css|png|jpg|gif|html)/i,
        release: '$&'
    },

    //任何其它文件不发布
    {
        reg: /\w+.(?:json|cmd)/i,
        release: false
    }
]);


//使用fis release --dest local来使用这个配置
fis.config.merge({
    deploy : {
        local : {
            to : '../www',
            exclude: /(?:\/_[^/]+\.\w+)|(?:\.(?:cmd|json))$/i
        }
    }
});