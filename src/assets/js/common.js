/**
 * 根據設備寬度判斷字體大小
 * 3.75 -> ie6標準
 * 設置只針對手機端(平板不計)
 */
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
// 阻止瀏覽器延遲300ms
window.addEventListener('load', function(){
  FastClick.attach(document.body);
}, false);
// 清除touchmove默認事件
document.documentElement.addEventListener('touchmove', function(e){
  if(e.touches.length > 1){
    e.preventDefault();
  }
}, false);