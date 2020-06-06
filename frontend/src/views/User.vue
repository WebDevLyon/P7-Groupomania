<template>
  <div class="interface-content">
    <section class="profil">
        <div>
      <img src alt="Logo" />
      <h2>Votre profil</h2>
      </div>
      <p>
        Votre pseudo:
        <span>{{}}</span>
      </p>
      <p>
        Votre email pro:
        <span>{{}}</span>
      </p>
      <p>
        Votre id utilisateur:
        <span>{{}}</span>
      </p>
    </section>
    <section class="update-profil">
      <h2>Modifier vos informations</h2>
      <p>Seulement le mot de passe est modifiable</p>
      <div>
        <label for="lastPassword">Tapez votre mot de passe actuel:</label>
        <input type="text" name="lastPassword" id="lastPassword" />
      </div>
      <div class="new-user-data">
        <label for="newPassword">Tapez votre nouveau mot de passe:</label>
        <input type="text" name="newPassword" id="newPassword" />
        <label for="repeatNewPassword">Entrez de nouveau votre le mot de passe:</label>
        <input type="text" name="newPassword" id="repeatNewPassword" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style lang="scss">
.new-user-data {
}
</style>