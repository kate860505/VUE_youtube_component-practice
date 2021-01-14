let app= Vue.createApp({});

app.component('yt-header',{
    template:`
    <div id="yt-header">
        <div id="logo">
            <img src="https://picsum.photos/seed/picsum/50/50" alt="">
        </div>
        <search-bar></search-bar>
        <user-actions></user-actions>
    </div>`,
});
app.component('yt-menu',{
    template:`
    <div id="yt-menu">
        <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">發燒影片</a></li>
        </ul>
    </div>`,
});
app.component('yt-content',{
    template:`
    <div id="yt-content">
        content
    </div>`,
});

app.component('search-bar',{
    template:`
    <div id="search-bar">
            <input type="text">
            <button>search</button>
    </div>`,
});
app.component('user-actions',{
    template:`
    <div id="user-actions">
        <ul>
            <li><a href="#">通知</a></li>
            <li><a href="#">Profile</a></li>
        </ul>     
    </div>`,
});
app.mount('#app');