let app= Vue.createApp({
    data(){
        return{
            model:[ 5 ],
        };
    },
});

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
    data(){
        return{
            videos:[
              {
                pic:'https://picsum.photos/seed/picsum/270/170',
                title:'lorem 1',
                author:'taker',
              },
              {
                pic:'https://picsum.photos/seed/picsum/270/170',
                title:'lorem 2',
                author:'taker',
              },
              {
                pic:'https://picsum.photos/seed/picsum/270/170',
                title:'lorem 3',
                author:'taker',
              },
              {
                pic:'https://picsum.photos/seed/picsum/270/170',
                title:'lorem 4',
                author:'taker',
              },
            ],
        };
    },
    template:`
    <div id="yt-content">
        <conent-message v-for="(video , index) in videos" 
        :video="video">
        </conent-message>
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
app.component('conent-message',{
    props:['video'],
    template:`
    <div class="conent-message">
        <div class="pic">
            <img :src=" video.pic " alt="">
        </div>
        <div class="message">
            <div class="Avatar">
                <img src="https://picsum.photos/seed/picsum/45/45"alt="">
            </div>
            <div class="text">
                <p class="title">{{ video.title }}</p>
                <div class="subtitle">
                    <p>{{ video.author }}</p>
                    <p>觀看次數：19萬次 。 發布時間18小時前</p>
                </div>
            </div>
        </div>
    </div>`,
});
app.mount('#app');