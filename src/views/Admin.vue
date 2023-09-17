<template v-for="i in 8">
	<div class="bg-slate-50">
		<header>
			<h1 class="text-6xl mt-12 mb-6">
				Administrator
			</h1>
		</header>
		<main style="text-align:center;width:100%;margin-bottom:50px">
			<section
				class="p-6 xl:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 container m-auto grid gap-6"
				v-if="user?.email || user?.value?.email"
			>
				<div class="p-6 inline-block shadow-slate-300 shadow rounded bg-white mx-auto">
					<h3 class="mt-4 mb-3 font-semibold text-2xl text-left">
						{{user?.name || user?.value?.name}}
					</h3>
					<p class="text-slate-500 text-left">
						{{user?.email || user?.value?.email}}
					</p>
				</div>
			</section>
			<section class="p-6 m-auto container">
				<div class="">
				</div>
			</section>
			<section>
				<button
					@click="logout"
					class="bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
					v-if="user?.email || user?.value?.email"
				>
					Log out ⇾
				</button><button
					@click="login"
					class="bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
					v-else=""
				>
					Login ⇾
				</button>
			</section>
		</main>
		<Footer />
	</div>
</template>
<script>
	export default {
		setup() {},
		components: {},
		inject: ["io", "user", "login", "logout"],
		data: () => ({}),
		methods: {
			open(url) {
				location.href = url;
			}
		}
	};

</script>
<style scoped>
	body,
	html,
	#app {
		margin-top: 0px;
		margin-left: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	main {
		display: inline-block;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	em {
		font-style: normal;
		color: rgba(238, 76, 215, 1);
	}

	section button {
		border: none;
		padding-top: 10px;
		padding-right: 15px;
		padding-bottom: 10px;
		padding-left: 15px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-size: 17px;
		margin-right: 20px;
		cursor: pointer;
		transition: .5s ease background;
	}

	section button:last-child {
		margin-right: 0px;
	}

</style>