<template>
	<div class="flex-col flex bg-slate-50">
		<header>
			<img
				src="@/assets/seetravel.png"
				class="cursor-pointer mx-auto mt-8"
				style="max-width:320px"
				@click="$router.push('/')"
			/>
			<h1 class="mb-8 text-center text-6xl mt-12">
				Admin Panel
			</h1>
		</header>
		<main style="text-align:center;width:100%;margin-bottom:50px">
			<section
				class="p-6 xl:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 container m-auto grid gap-6"
				v-if="user?.email || user?.value?.email"
			>
				<div class="p-6 inline-block shadow-slate-300 shadow rounded bg-white mx-auto text-center">
					<h3 class="mb-3 font-semibold text-2xl">
						{{user?.name || user?.value?.name}}
					</h3>
					<p class="text-slate-500">
						{{user?.email || user?.value?.email}}
					</p>
				</div>
			</section>
			<section>
				<button
					@click="logout"
					class="bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white"
					v-if="user?.email || user?.value?.email"
				>
					Log out ⇾
				</button><button
					@click="login"
					class="bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white"
					v-else=""
				>
					Login ⇾
				</button>
			</section>
		</main>
		<section
			class="p-4 bg-slate-100"
			v-if="user?.email || user?.value?.email"
		>
			<div
				class="flex-col flex mx-auto mb-24 text-left"
				style="max-width:320px;width:320px"
			>
				<button
					@click="add"
					class="mt-4 bg-blue-400 from-blue-500 bg-gradient-to-br hover:bg-blue-600 hover:from-blue-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white"
				>
					Add New Group ⇾
				</button><label
					style="margin:auto;margin-top:40px;margin-bottom:20px"
					class="text-xl w-full"
				>
					Selected Group: {{selected?.title}}
				</label><select
					v-model="selected"
					class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded"
				>
					<option
						v-for="group in groups"
						:value="group"
					>{{group.title}}</option>
				</select><button
					@click="remove"
					class="mt-2 bg-red-400 from-red-500 bg-gradient-to-br hover:bg-red-600 hover:from-red-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white"
				>
					Delete {{selected?.title}}
				</button>
			</div>
			<div
				v-for="passport in passports?.data || []"
				class="border-b mx-auto mb-2 max-w-3xl flex-row flex relative pb-2"
				style="max-height:100px"
			>
				<div class="w-1/4"><input
						class="p-2 rounded shadow"
						v-model="passport.first_name"
						style="width:calc(100% - 10px)"
					/> </div>
				<div class="w-1/4">
					<input
						class="w-full p-2 rounded shadow"
						v-model="passport.last_name"
						style="width:calc(100% - 10px)"
					/>
				</div>
				<div class="relative w-1/4 max-h-full">
					<img
						:src="passport.image || placeholder"
						class="cursor-pointer object-left object-cover mx-auto"
						style="max-height:calc(100% - 35px)"
						@click="open(passport.image || placeholder)"
					/><a
						class="bg-slate-400 from-slate-500 bg-gradient-to-br hover:bg-slate-600 hover:from-slate-600 transition-shadow hover:drop-shadow-lg drop-shadow p-1 rounded text-white absolute bottom-0"
						style="left:50%;transform:translateX(-50%)"
						:href="passport.image || placeholder"
						:download="passport.media.original_name"
					>
						Download
					</a>
				</div>
				<div class="w-1/4 text-right">
					<button
						@click="removeSingle(passport)"
						class="bg-red-400 from-red-500 bg-gradient-to-br hover:bg-red-600 hover:from-red-600 transition-shadow hover:drop-shadow-lg drop-shadow p-1 mr-1 rounded text-white"
					>
						Delete
					</button><button
						@click="save(passport)"
						class="bg-green-400 from-green-500 bg-gradient-to-br hover:bg-green-600 hover:from-green-600 transition-shadow hover:drop-shadow-lg drop-shadow p-1 rounded text-white"
					>
						Save
					</button>
				</div>
			</div>
		</section><router-link
			to="/"
			class="my-12 text-center hover:text-slate-700"
		>
			Home
		</router-link>
		<Footer />
	</div>
</template>
<script>
	export default {
		inject: ["io", "user", "login", "logout"],
		components: {},
		setup() {},
		data: () => ({
			selected: null,
			placeholder: 'data:image/jpeg;base64,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',
			groups: [],
			passports: null
		}),
		async mounted() {
			await this.listGroups();
		},
		watch: {
			async selected() {
				await this.listPassports();
			},
			async 'user.name'() {
				await this.listPassports();
			}
		},
		methods: {
			async removeSingle(passport) {
				if (passport && confirm('Remove ' + passport.title + '?')) {
					await this.io.service('/types/passports')
						.remove(passport._id);
					this.passports.data = this.passports.data.filter(p => p._id !== passport._id);
				}
			},
			async save(passport) {
				await this.io.service('/types/passports')
					.patch(passport._id, passport);
				alert('Updated');
			},
			async add() {
				const title = prompt('Group Title');
				if (!title) return;
				let added = await this.io.service('/types/groups')
					.create({
						title
					});
				await this.listGroups();
				this.selected = this.groups.find(g => g._id === added._id);
			},
			async remove() {
				if (confirm('Delete group including all passports?')) {
					await this.io.service('/types/groups')
						.remove(this.selected._id);
					await this.listGroups();
					this.selected = this.groups?.[0];
				}
			},
			async listGroups() {
				this.groups = (await this.io.service('/types/groups')
						.find({
							query: {
								$limit: 1000
							}
						}))
					?.data;
				if (!this.selected) {
					this.selected = this.groups?.[0];
				}
			},
			async listPassports() {
				this.passports = await this.io.service('/types/passports')
					.find({
						query: {
							group_id: this.selected._id,
							$limit: 1000
						}
					});
			},
			open(src) {
				window.open(src, '_blank');
			}
		}
	};

</script>
<style scoped></style>