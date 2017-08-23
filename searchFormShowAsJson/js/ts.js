
/*调取后台数据*/
function queryTrack() {
    var trackHBF = document.trackHBF;
    var bizCode = trackHBF.bizCode.value;
    var deviceId = trackHBF.deviceId.value;
    var qpsTime = trackHBF.qpsTime.value;
    var size = trackHBF.size.value;
    var startTimestamp = trackHBF.startTimestamp.value;
    var endTimestamp = trackHBF.endTimestamp.value;
    $.ajax({
        type: "GET",
        url: "/tsQuery",
        data: "rest=getTrack&bizCode="+bizCode+"&deviceId="+deviceId
        +"&qpsTime="+qpsTime+"&startTimestamp="+startTimestamp
        +"&endTimestamp="+endTimestamp+"&size="+size,
        timeout:15000,
        beforeSend:function(XMLHttpRequest){
              //alert('远程调用开始...');
              $("#loading").show();
         },
        success: function(msg){
            $("#loading").hide();
            var obj = eval('(' + msg + ')');
            var descStr;
            try{
                descStr = eval('(' + obj.desc + ')');
            }catch(error){
                descStr = obj.desc;
            }
            obj.desc = descStr;
            editor.set(obj);
        },
        complete:function(XMLHttpRequest,textStatus){
              // alert('远程调用成功，状态文本值：'+textStatus);
             $("#loading").hide();
        },
         error:function(XMLHttpRequest,textStatus,errorThrown){
            alert('error...状态文本值：'+textStatus+" 异常信息："+errorThrown);
           $("#loading").hide();
        }
    });
}

//测试
function que() {
    $("#loading").show();
    setTimeout(function(){
        $("#loading").hide();
    },5000);

}
