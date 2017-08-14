<template>
	<div class="container">
		<canvas ref="$canvas"></canvas>
		<ul class="article-list" v-if="!loading">
			<router-link
				tag="li"
				class="article-list-item"
				:to="{ name: 'article', params: { article: item.number } }"
				:key="item.id"
				v-for="item of issues"
			>
				<div class="article-list-item__head">
					<span 
						:style="{ borderColor: `#${label.color}`, color: `#${label.color}` }" 
						class="article-list-item__label" 
						v-for="label of item.labels"
						:key="label.id"
					>
						{{ label.name }}
					</span>
					<span class="article-list-item__title">{{ item.title }}</span>
				</div>
				<div class="article-list-item__footer">
					<span class="article-list-item__author">Posted by {{ item.user.login }} on </span>
					<time class="article-list-item__time">{{ item.created_at | time }}</time>
				</div>
			</router-link>
		</ul>
		<div class="spinner" v-else>
			<div class="spinner__circle1"></div>
			<div class="spinner__circle2"></div>
		</div>
	</div>
</template>

<script>
	import { getIssues } from '@/api/issues';
	import moment from 'moment';

	export default {
		data() {
			return {
				issues: [],
				loading: true,
			};
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.getList();
			});
		},
		beforeRouteUpdate(to, from, next) {
			next(); // 先放行
			this.getList(to.params.label).then();
		},
		methods: {
			async getList(label) {
				this.loading = true;
				const labels = label || this.$route.params.label;
				try {
					const res = await getIssues({ labels });
					const data = await res.json();
					this.issues = data;
					this.loading = false;
				} catch (e) {
					// console.log(e);
				}
			},
		},
		filters: {
			time(val) {
				return moment(val).format('YYYY/MM/DD HH:mm');
			},
		},
		mounted() {
			// document.addEventListener('touchmove', function (e) {
			//     e.preventDefault()
			// })
			const $canvas = this.$refs.$canvas;
			const x = $canvas.getContext('2d');
			const pr = window.devicePixelRatio || 1;
			const w = window.innerWidth;
			const h = window.innerHeight - 500;
			const f = 90;
			let r = 0;
			const u = Math.PI * 2;
			$canvas.width = w * pr;
			$canvas.height = h * pr;
			x.scale(pr, pr);
			x.globalAlpha = 0.6;
			let q;
			const y = (p) => {
				const t = p + (Math.random() * 2 - 1.1) * f;
				return (t > h || t < 0) ? y(p) : t;
			};
			const d = (i, j) => {
				x.beginPath();
				x.moveTo(i.x, i.y);
				x.lineTo(j.x, j.y);
				const k = j.x + (Math.random() * 2 - 0.25) * f;
				const n = y(j.y);
				x.lineTo(k, n);
				x.closePath();
				r -= u / -50;
				x.fillStyle = `#${(Math.cos(r) * 127 + 128 << 16 | Math.cos(r + u / 3) * 127 + 128 << 8 | Math.cos(r + u / 3 * 2) * 127 + 128).toString(16)}`;
				x.fill();
				q[0] = q[1];
				q[1] = { x: k, y: n };
			};
			const run = () => {
				x.clearRect(0, 0, w, h);
				q = [
					{ x: 0, y: h * 0.7 + f },
					{ x: 0, y: h * 0.7 - f },
				];
				while (q[1].x < w + f) {
					d(q[0], q[1]);
				}
			};
			document.onclick = run;
			document.ontouchstart = run;
			run();
		},
	};
</script>

<style lang="scss">
	@import '../scss/list.scss';
</style>
