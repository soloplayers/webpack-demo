import jpg from './assets/1.jpg';

const div=document.getElementById('app');
div.innerHTML=`
	<img src="${jpg}"  width="600px"/>
`
const btn=document.createElement('button');
btn.innerText='懒加载';
btn.addEventListener('click',()=>{
	const promise=import('./lazy');
	promise.then((module)=>{
		const fn=module.default;
		fn();
	},()=>{
		console.log('模块加载错误');
	})
})
div.appendChild(btn);