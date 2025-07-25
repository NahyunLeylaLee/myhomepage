<template>
  <div class="sidebar-container">
    <div class="flex-column">
      <div class="profile-content">
        <div class="profile-photo">
          <img src="../assets/img/profile.jpg" alt="profile" class="profile-image" />
        </div>
        <div class="profile-title">
          <h2 class="profile-name font-32">Nahyun Lee</h2>
          <h4 class="profile-job">Web Developer</h4>
        </div>
      </div>
      <div class="social-links">
        <a href="https://github.com/NahyunLeylaLee" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/nahyun-lee-6458a2113/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/florence1215_" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div class="contact-me">
        <a href="mailto:florence5107@gmail.com" class="button-contact-me">
          <i class="fa-regular fa-envelope"></i>
          Contact Me
        </a>
      </div>
    </div>
    <div class="copyright">
      <p>© 2022 All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (max-width: 1359px) {
  .profile-content {
    width: 100%;
    height: 400px;
  }

  .profile-image {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }

  .profile-photo {
    width: 220px;
    height: 220px;
    margin: 20px 0;
    padding-top: 10px;
  }

  .social-links {
    width: 100%;
    height: 50px;
  }

  .social-links {
    display: flex;
    justify-content: center;
  }

  .social-links>a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }

  .contact-me {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-title {
    color: #555;
    height: 100px;
  }

  .fa-github,
  .fa-linkedin,
  .fa-instagram {
    font-size: 20px;
    color: #fca072;
  }

  .button-contact-me {
    border: 2px solid #fca072;
    background-color: white;
    color: #fca072;
    border-radius: 20px;
    padding: 10px 30px;
  }

  .fa-envelope {
    color: #fca072;
  }

  .profile-job {
    font-size: 20px;
    font-weight: normal;
  }

  .sidebar-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }


  .copyright {
    font-size: 13px;
    color: #fca072;
  }
}


@media screen and (min-width: 1360px) {
  .sidebar-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .profile-content {
    width: 400px;
    height: 400px;
  }

  .profile-photo {
    width: 300px;
    height: 300px;
  }

  .profile-title {
    margin-top: 10px;
    line-height: 40px;
  }

  .profile-name {
    font-size: 35px;
  }

  .profile-job {
    font-size: 20px;
    font-weight: normal;
  }

  .profile-title {
    color: white;
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 50px;
  }

  .social-links>a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 5px;
  }

  .social-links>a:hover {
    border-radius: 15px;
    background-color: rgba(255, 255, 255, .2);
  }

  .fa-github,
  .fa-linkedin,
  .fa-instagram {
    font-size: 20px;
    color: white;
  }

  .contact-me {
    width: 400px;
    height: 100px;
    text-align: center;
    display:flex;
    justify-content: center;
    height: 50px;
  }

  .button-contact-me {
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    padding: 10px 30px;
  }

  .button-contact-me:hover {
    transition: all 0.5s ease-in-out;
    color: #FCA072;
    background-color: white;
  }

  .button-contact-me:hover>.fa-envelope {
    transition: all 0.5s ease-in-out;
    color: #FCA072;
  }

  .fa-envelope {
    font-size: 15px;
    color: white;
  }

  .copyright {
    width: 100%;
    font-size: 13px;
    position: absolute;
    bottom: 0px;
    text-align: center;
    padding-bottom: 10px;
    color: white;
  }
}

.sidebar-container{
  overflow-y:auto;
}

.contact-me{
  margin-top: 20px;
}
</style>