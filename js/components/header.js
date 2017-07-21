Vue.component('header-test',{
	template: `
	<ul>
		<li v-for="link in links"> 
			<a :href="link.a">{{link.name}}</a>
		</li>
	</ul>
 `,
 data() {
	 return {
		links: [
			{
				name: "google",
				a: "http://google.co.ve"
			},
			{
				name: "youtube",
				a: "http://youtube.com"
			}
		]
	 }
 }
})