const STUDENTDB = "StudentDB"
// retourner la base de données locales
function getLocalDB(){
    if(!localStorage.getItem(STUDENTDB)){
        localStorage.setItem(STUDENTDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(STUDENTDB))
}

// mettre à jour la bd
function updateDB(db){
    localStorage.setItem(STUDENTDB, JSON.stringify(db))
}

// function d'ajout d'un etudiant
function addStudent(student){
    const db = getLocalDB()
    student.id = Date.now()+""
    db.push(student)
    updateDB(db)
}

// function pour mettre à jour l'étudiant
function updateStudent(student){
    const db = getLocalDB()
    const updatedDb = db.map(function(curStudent){
        if(curStudent.id == student.id){
            return {
                nom: student.nom,
                prenom: student.prenom,
                dateNaissance: student.dateNaissance,
                niveauScolaire: student.niveauScolaire,
                id: student.id
            }
        }
        return curStudent
    })

    updateDB(updatedDb)
}

//function pour supprimer un étudiant
function deleteStudent(student){
    const db = getLocalDB()
    const updatedDb = db.filter(function(curStudent){
        return curStudent.id != student.id;
    })

    updateDB(updatedDb)
}

// function recuperer l'étudiant par rapport à son id
function getStudent(id){
    const db = getLocalDB()
    var filteredDB = db.filter((data)=> data.id == id)
    if(filteredDB.length > 0){
        return filteredDB[0]
    }
    return null
}

// function pour rechercher un étudiant

function searchStudentByName(name){
    const db = getLocalDB()
    const filteredDb = db.filter((data)=>{
        return data.nom.toLowerCase().includes(name.toLowerCase()) || data.prenom.toLowerCase().includes(name.toLowerCase())
    })

    return filteredDb
}