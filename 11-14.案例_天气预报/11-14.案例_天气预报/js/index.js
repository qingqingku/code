/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
function getWeather(cityCode){
    myAxios({
        url: 'http://hmajax.itheima.net/api/weather',
        params:{
            city: cityCode
        }
    }).then(result => {
        console.log(result)
        const weather = result.data
        document.querySelector('.title').innerHTML = `<span class="dateShort">${weather.dateShort}</span>
        <span class="calendar">农历&nbsp;
          <span class="dateLunar">${weather.dateLunar}</span>
        </span>`
    })
}
getWeather('110100')

document.querySelector('.search-city').addEventListener('input',(e) => {
    console.log(e.target.value)
    myAxios({
        url: 'http://hmajax.itheima.net/api/weather/city',
        params: {
            city: e.target.value
        }
    }).then(result => {
        console.log(result)
        const lists = result.data.map(item => {
            return `<li class="city-item">${item.name}</li>`
        }).join('')//map,改变数组中元素，join将元素串成String
        console.log(lists)
        document.querySelector('.search-list').innerHTML = lists
    })
})