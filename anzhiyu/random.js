var posts=["2024/11/11/hello-world/","2024/11/12/如何自己部署一个IDE/","2024/11/12/2024年9月日常/","2024/11/12/大一总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };