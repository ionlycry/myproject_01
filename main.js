// Vue.createApp({
//     data(){
//         return {
//             lessons:window.lessons
//         }
//     },
//     //template:`<div>houdunren.com--{{title}}</div>`,
    
// }).mount('#app');

const app=Vue.createApp({
    data(){
        return {
            name:'根组件--父亲',
            sid:'xry1',
            arg:'sid',
            event:'mouseenter',
        }
    },
     template:`<div :[arg]="name" @[event]=add>hhh{{name}}<cry/></div>`,
     methods: {
        add(){
            alert(3);
        }
     },
});
app.component('cry',{
    dara(){
        return{
            name:'孩子组件'
        }
    },
    template:`<h2>孩子组件-我是{{name}}</h2>`
})
const vm=app.mount('#app');//根组件的实例

setTimeout(()=>{
    vm.$data.name='陈荣艳是黑乎乎';
    vm.$data.sid='cry2222';
    vm.arg='href';
},3000);

