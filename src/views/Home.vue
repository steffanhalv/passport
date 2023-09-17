<template>
	<div class="bg-slate-50 flex flex-col h-screen overflow-auto">
		<header>
			<img
				src="@/assets/seetravel.png"
				class="mx-auto mt-20"
				style="width:350px;"
			/>
			<h2
				style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px"
				class="text-xl"
			>
				Upload your passport photo
			</h2>
		</header>
		<main
			style="width:100%"
			class="grow"
		>
			<section style="width:100%"><button
					@click="$router.push('/')"
					class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow"
				>
					Select File
				</button> </section>
			<section>
				<div
					style="background-size:contain;background-position:center;background-repeat:no-repeat;margin-right:auto;margin-left:auto;margin-top:70px;position:relative;margin-bottom:50px;max-width:calc(100% - 40px);aspect-ratio:1/.668;box-sizing:border-box;width:700px"
					class="rounded-3xl shadow-slate-200 shadow-xl screenshot"
				>
				</div><button
					@click="$router.push('/contact')"
					class="bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
				>
					Send to See Travel ⇾
				</button>
			</section>
		</main>
		<Footer class="" />
	</div>
</template>
<script>
	export default {
		components: {},
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
		text-align: center;
		width: 100%;
		margin-bottom: 50px;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	em {
		font-style: normal;
		color: #74AE86;
		background: linear-gradient(45deg, #394657 0%, #74AE86 100%);
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
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

	.logo {
		background-image: url(@/assets/your-logo.png);
	}

	.screenshot {
		background-image: url(@/assets/launch.png);
	}

	@media only screen and (max-width: 600px) {
		.logo {
			left: 0px;
		}
	}

</style>