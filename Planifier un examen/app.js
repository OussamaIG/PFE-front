const app = Vue.createApp({
    data(){
        return{
            profile: false,
        };
    },
    methods:{
        showprofile(){
            if(this.profile === false){
                this.profile = true;
            }else{
                this.profile = false;
            }
        }
    },
    computed:{
        showpf(){
            return{opacity1 : this.profile};
        }
    }
});
app.mount("#profile");