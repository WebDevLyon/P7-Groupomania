<template>
  <div class="card mb-4 w-75 mx-auto">
    <div class="card-header">Post by {{user}} le {{jour}} à {{heure}}</div>
    <div class="card-body">
      <img :src="attachment" class="card-img-top" alt="..." />
      <div class="card-text">
        <p class="mb-0">{{text}}</p>
      </div>
    </div>
    <div class="d-flex card-footer">
      <div class="mx-1">{{like}}</div>
      <div>
        <i class="fas fa-thumbs-up mx-1"></i>
        <i class="fas fa-thumbs-down mx-1"></i>
      </div>
      <div class="mx-1">
        <a href="#" class="text-reset">Commentaire</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    user: {
      type: String,
      default: "anonyme"
    },
    jour: {
      type: String,
      required: true
    },
    heure: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ""
    },
    like: {
      type: Number,
      default: 0
    },
    attachment:{
      type:String,
      default:""
    }
  },
  mounted(){
    let test = document.getElementsByClassName('card-img-top')
    test.forEach(img=>{
      if(img.src!=""){
        console.log('test réussi')
      }else{
        img.style.display = "none"
      }
    })
  }
};
</script>

<style>
</style>