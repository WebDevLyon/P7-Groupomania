//fichier comprenant les fonctions de vérification des inputs des users
module.exports = {
    validEmail: function (value) {
        const regexEmail = /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
        return true//regexEmail.test(value)
    },
    validPassword : function(value){
        return true
    },
    validUsername : function(value){
        return true
    }
}