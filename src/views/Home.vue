<template>
	<div class="bg-slate-50 flex flex-col h-screen overflow-auto">
		<header>
			<img
				src="@/assets/seetravel.png"
				class="mx-auto mt-20"
				style="width:350px;"
			/>
		</header>
		<div
			class="flex-col flex mx-auto"
			style="max-width:320px;width:320px"
		>
			<label
				style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px"
				class="text-xl"
			>
				1. Select Your Travel Group
			</label><select
				class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded ml-6"
				style="max-width:270px"
			>
				<option v-for="i in 3">Option {{i}}</option>
			</select><label
				style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px"
				class="text-xl"
			>
				2. First Name
			</label><input
				class="ml-6 p-3 shadow"
				style="max-width:270px"
			/><label
				style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px"
				class="text-xl"
			>
				3. Last Name
			</label><input
				class="ml-6 p-3 shadow"
				style="max-width:270px"
			/><button
				@click="$router.push('/')"
				class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow"
			>
				Select File
			</button>
		</div>
		<main
			style="width:100%"
			class="grow"
		>
			<section style="width:100%">
			</section>
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
	.screenshot {
		background-image: url(@/assets/launch.png);
	}

</style>