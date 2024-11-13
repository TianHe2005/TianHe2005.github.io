var posts=["2024/11/12/hello-world/","2024/11/12/如何自己部署一个IDE/","2024/11/12/2024年9月日常/","2024/11/12/大一总结/","2024/11/12/数据库底层原理（1）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };