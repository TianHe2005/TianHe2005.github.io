var posts=["2024/11/11/hello-world/","2024/11/12/如何自己部署一个IDE/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };