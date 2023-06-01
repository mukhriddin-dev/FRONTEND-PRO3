<template>
    <header>
        <div class="container">
          <nav>
            <a href="#" class="logo">VUEJS.UZ</a>
    
            <ul class="list">
              <li class="item"><a href="#home" class="link">Home</a></li>
              <li class="item"><a href="#about" class="link">About</a></li>
              <li class="item"><a href="#service" class="link">Service</a></li>
              <li class="item"><a href="#blog" class="link">Blog</a></li>
              <li class="item"><a href="#contact" class="link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    
</template>

<script>

</script>


<style>
header{
    width: 100%;
    background-color: seagreen;
  }
  
  nav {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    
  }
  
  .logo{
    font-weight: 800;
    font-size: 24px;
    text-decoration: none;
    color:#fff;
  }
  
  .list{
    display: flex;
    column-gap: 60px;
  }
  
  .item{
    text-transform: uppercase;
    list-style-type: none;
  }
  
  .link{
    text-decoration: none;
    color:#fff;
  }
  
  .link:hover{
    color:yellowgreen;
  }
  
</style>