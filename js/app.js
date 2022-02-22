
const checkIfEmptyValue = (obj)=>{
    let isEmpty = false;
    for(const prop in obj){
        if(obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty
}

const showSuccessMessage = (message)=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}

const showErrorMessage = (message)=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      })
}

const App = {
    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentsList: false,
            newStudent : { 
                nom: "",
                prenom:"",
                dateNaissance: "",
                niveauScolaire: ""
            }
        }
    },

    mounted(){
        this.changeNavigationState("create");
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

        submitStudent(){
            
            if(!checkIfEmptyValue(this.newStudent)){

                if(!checkIfStudentExist(this.newStudent.nom, this.newStudent.prenom)){
                    addStudent(this.newStudent)
                    this.newStudent = { 
                        nom: "",
                        prenom:"",
                        dateNaissance: "",
                        niveauScolaire: ""
                    }
                    showSuccessMessage("etudiant ajouté avec succès!")

                }else{
                    showErrorMessage("Cet étudiant est déjà inscrit!")
                }
            }else{
                // envoyer un message d'erreur
                showErrorMessage("Veillez remplir tous les champs!")
            }
            
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