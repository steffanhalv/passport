<template>
	<Transport
		to="body"
		v-show="authorizing"
	>
		<div
			class="w-screen h-screen absolute left-0 top-0"
			style="z-index:100000;background-color:#cacfd970"
			@click="authorizing = false"
		>
			<div
				class="shadow-xl rounded-2xl -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 fixed block m-auto max-w-sm w-screen bg-slate-100 border-box text-center py-12"
				@click.stop=""
			>
				<button
					class="w-64 mb-2 inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
					@click="autologin('google')"
				>
					<svg
						class="h-6 w-6 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="800px"
						height="800px"
						viewBox="-0.5 0 48 48"
						version="1.1"
					>
						<title>Google-color</title>
						<desc>Created with Sketch.</desc>
						<defs> </defs>
						<g
							id="Icons"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Color-"
								transform="translate(-401.000000, -860.000000)"
							>
								<g
									id="Google"
									transform="translate(401.000000, 860.000000)"
								>
									<path
										d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
										id="Fill-1"
										fill="#FBBC05"
									> </path>
									<path
										d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
										id="Fill-2"
										fill="#EB4335"
									> </path>
									<path
										d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
										id="Fill-3"
										fill="#34A853"
									> </path>
									<path
										d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
										id="Fill-4"
										fill="#4285F4"
									> </path>
								</g>
							</g>
						</g>
					</svg> <span class="ml-4">Continue with Google</span> </button> <button
					class="w-64 inline-flex items-center bg-slate-50 border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-center text-gray-800 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-6"
					@click="authorizing = false"
				>
					<span class="mx-auto">
						Cancel
					</span> </button>
			</div>
		</div>
	</Transport>
</template>
<script>
	export default {
		expose: ["login"],
		inject: ["io", "user", "reAuthenticate"],
		data: () => ({
			authorizing: false,
			origin: location.origin.startsWith("http") ? location.origin : "https://studio.vueplay.com"
		}),
		methods: {
			login() {
				this.authorizing = true;
				return new Promise(resolve => {
					if (this.user && this.user.value !== null) {
						this.authorizing = false;
						resolve(this.user);
					} else {
						this.$watch("authorizing", authorizing => {
							if (!authorizing) resolve(this.user);
						});
					}
				});
			},
			autologin(provider) {
				let w = 500;
				let h = 600;
				let y = window.top.outerHeight / 2 + window.top.screenY - h / 1.5;
				let x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
				let ref = window.open("https://passport.vueplay.com/oauth/" + provider + "?origin=" + this.origin + "/auth", "_blank", `popup=true, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
				this.validateLogin(ref);
			},
			async validateLogin(ref, tries = 0) {
				let token = "";
				let error = "";
				try {
					token = this.getToken(ref.location.hash);
				} catch (e) {}
				try {
					error = this.getError(ref.location.hash);
				} catch (e) {}
				if (!ref.closed && !error && !token && tries < 1000000000000) setTimeout(() => this.validateLogin(ref, ++tries), 100);
				else if (!ref.closed) ref.close();
				setTimeout(async () => {
					if (token) {
						await this.io.authentication.setAccessToken(token);
						await this.reAuthenticate();
						this.authorizing = false;
					} else if (error) {
						this.authorizing = false;
					} else if (tries >= 1000000000000) {
						this.authorizing = false;
					}
				});
			},
			getToken(hash) {
				if (hash.startsWith("#access_token=")) {
					let token = hash.replace("#access_token=", "");
					return token;
				}
				return "";
			},
			getError(hash) {
				if (hash.startsWith("#error=")) {
					let error = hash.replace("#error=", "");
					return error;
				}
				return "";
			}
		}
	};

</script>
<style scoped></style>