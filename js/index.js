let app = new Vue({
    el:'#app',
    data:{
        // 搜索条件
        productName:'',
        // 轮播信息
        swipeList:[
            {image:'images/1.jpg',text:'你好'},
            {image:'images/2.jpg',text:'我好'},
            {image:'images/3.jpg',text:'大家好'},
            {image:'images/4.jpg',text:'好好学习'},
            {image:'images/5.jpg',text:'天天向上'}
        ],
        // 导航菜单列表定义
        menuList:[
            {image:'images/nav01.png',text:'京东超市'},
            {image:'images/nav02.png',text:'数码电器'},
            {image:'images/nav03.png',text:'京东新百贷'},
            {image:'images/nav04.png',text:'京东生鲜'},
            {image:'images/nav05.png',text:'京东到家'},
            {image:'images/nav06.png',text:'充值缴费'},
            {image:'images/nav07.png',text:'附近好店'},
            {image:'images/nav08.png',text:'PLUS会员'},
            {image:'images/nav09.png',text:'京东国际'},
            {image:'images/nav10.png',text:'京东拍卖'}
        ],
        // 秒杀商品列表
        miaoShaList:[
            {image:'images/m01.jpg',price:49.9},
            {image:'images/m02.jpg',price:30},
            {image:'images/m03.jpg',price:500},
            {image:'images/m04.jpg',price:200},
            {image:'images/m05.jpg',price:400},
            {image:'images/m06.jpg',price:600}
        ],
        // 设置底部菜单默认项
        active:0,
        // 商品列表信息
        productList:[
            
        ]
    },
    methods:{
        // 顶部标题右侧登录操作
        onClickRight() {
            location.href = "login.html"
        },
        // 搜索商品
        onSearch() {
            console.log("搜索...",this.productName);
            // ajax
        }
    },
    mounted(){
        let that = this ;
        $.ajax({
            url: 'http://localhost:8088/api/product/list_product',
            type: 'get',
            success: function (res) {
                console.log(res);
                if(res.code==200) {
                    that.productList = res.data ;
                }
            }
        });
    }
});