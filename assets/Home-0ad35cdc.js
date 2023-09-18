import{_ as u,o,c as a,a as s,b as r,w as p,v as w,F as m,r as c,d,t as g}from"./index-abeecd27.js";import{_ as b}from"./seetravel-539a8206.js";const B={inject:["io"],data:()=>({groupSelected:null,placeholder:"data:image/jpeg;base64,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",preview:"",file:null,firstname:"",lastname:"",groups:[],loading:!1}),async mounted(){var A,t;this.groups=(A=await this.io.service("types/groups").find({query:{$limit:1e3}}))==null?void 0:A.data,this.groupSelected||(this.groupSelected=(t=this.groups)==null?void 0:t[0])},methods:{select(){let A=document.createElement("input");A.type="file",A.accept="image/*",A.onchange=async()=>{var n;const t=(n=Array.from(A.files))==null?void 0:n[0];if(t){this.file=t;const l=new FileReader;l.readAsDataURL(t),l.onload=()=>this.preview=l.result,l.onerror=()=>this.preview=""}},A.click()},async upload(){return this.io.service("types/media").create({name:this.file.name,file:await this.file.arrayBuffer()})},async submit(){var A;this.loading=!0;try{if(!this.firstname)return alert("First Name is required");if(!this.lastname)return alert("Last Name is required");if(!this.groupSelected)return alert("Group is required");if(!((A=this.file)!=null&&A.name))return alert("Passport Image is required");const t=await this.upload();await this.io.service("types/passports").create({first_name:this.firstname,last_name:this.lastname,group_id:this.groupSelected._id,media_id:t._id}),alert("Thank you, your passport has been submitted!"),this.reset()}catch(t){alert("Oops, your passport could not be submitted. Please try again or contact support."),console.error(t)}this.loading=!1},reset(){this.file=null,this.firstname="",this.lastname="",this.preview=""}}},Q={class:"from-slate-50 bg-slate-100 w-screen h-screen overflow-auto"},f={class:"flex-col flex mx-auto mb-24 text-left",style:{"max-width":"320px",width:"320px"}},h=s("img",{src:b,class:"mx-auto mt-8"},null,-1),E=s("label",{style:{margin:"auto","margin-top":"40px","margin-bottom":"40px"},class:"text-xl w-full"}," 1. Select Travel Group ",-1),v=["value"],F=s("label",{style:{margin:"auto","margin-top":"40px","margin-bottom":"40px"},class:"text-xl w-full"}," 2. First Name ",-1),y=s("label",{style:{margin:"auto","margin-top":"40px","margin-bottom":"40px"},class:"text-xl w-full"}," 3. Last Name ",-1),x=s("label",{style:{margin:"auto","margin-top":"40px","margin-bottom":"40px"},class:"text-xl w-full"}," 4. Select Passport Photo ",-1),C=["src"],K=s("label",{style:{margin:"auto","margin-top":"40px","margin-bottom":"40px"},class:"text-xl w-full mt-6"}," 5. Submit Form ",-1),U={key:1,class:"opacity-40 bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white",disabled:""};function S(A,t,n,l,I,i){return o(),a("div",Q,[s("div",f,[h,r(),E,r(),p(s("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>A.groupSelected=e),class:"hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded"},[(o(!0),a(m,null,c(A.groups,e=>(o(),a("option",{value:e},g(e.title),9,v))),256))],512),[[w,A.groupSelected]]),r(),F,r(),p(s("input",{class:"p-3 shadow -mt-6","onUpdate:modelValue":t[1]||(t[1]=e=>A.firstname=e)},null,512),[[d,A.firstname]]),r(),y,r(),p(s("input",{class:"p-3 shadow -mt-6","onUpdate:modelValue":t[2]||(t[2]=e=>A.lastname=e)},null,512),[[d,A.lastname]]),r(),x,r(),s("button",{onClick:t[3]||(t[3]=(...e)=>i.select&&i.select(...e)),class:"hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded"}," Select File "),r(),s("img",{src:A.preview||A.placeholder,class:"rounded-xl shadow-slate-200 shadow-xl screenshot w-full mt-6"},null,8,C),r(),K,r(),A.loading?(o(),a("button",U," Please Wait... ")):(o(),a("button",{key:0,onClick:t[4]||(t[4]=(...e)=>i.submit&&i.submit(...e)),class:"bg-purple-400 from-purple-500 bg-gradient-to-br hover:bg-purple-600 hover:from-purple-600 transition-shadow hover:drop-shadow-lg drop-shadow p-3 rounded text-white"}," Send to See Travel ⇾ "))])])}const P=u(B,[["render",S]]);export{P as default};
