const App = {
    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentsList: false,
        }
    },

    mounted(){
        this.changeNavigationState("home");
    },

    methods: {
        goToHome() {
            this.changeNavigationState("home")
        },
        goToCreateForm() {
            this.changeNavigationState("create")
        },

        goToStudentsList() {
            this.changeNavigationState("list")
        },

        

        changeNavigationState(destination) {
            this.showCreateForm = false
            this.showHome = false
            this.showStudentsList = false

            switch (destination) {
                case "home":
                    this.showHome = true
                    break;
                case "create":
                    this.showCreateForm = true
                    break;
                case "list":
                    this.showStudentsList = true
                    break;

                default:
                    this.showHome = true
                    break;
            }
        }
    }
}

Vue.createApp(App).mount("#app")