window.onload=function(){
		var liNodes=document.getElementsByTagName("li");
		for(var i=0;i<liNodes.length;i++)
		{
			liNodes[i].onmouseover=function(){
				this.className="subMenuShow";
			}
			liNodes[i].onmouseout=function(){
				this.className="";
			}
		}
	}


function showbig(obj){
			var pic=obj.src;
			var smlpics=document.getElementById("smallpic");
			var imgs=smlpics.getElementsByTagName("img");
			for(var i=0;i<imgs.length;i++)
			{
				imgs[i].className="";
			}
			obj.className="pb";
			var bigpic1=document.getElementById("bigpic1");
			bigpic1.src=pic;
		}





$(document).ready(function(){
		$(".user").blur(function(){
			$(this).nextAll().remove();
			if($(this).val()=="")
			{
				$(this).parent().append("<br/><span>用户名不能为空！</span>");
			}
			else
			{
				$(this).nextAll().remove();
			}
		});
		$("input[name=password1]").blur(function(){
			$(this).nextAll().remove();
			if($(this).val()=="")
			{
				$(this).parent().append("<br/><span>密码不能为空！</span>");
			}
			else
			{
				$(this).nextAll().remove();
			}
		});
		$("input[name=password2]").blur(function(){
			if($(this).val()==$("input[name=password1]").val())
			{
				$(this).nextAll().remove();
			}
			else
			{
				$(this).parent().append("<br/><span>两次密码不一致，请重新输入！</span>");
			}
		});
		
	});


function putinn(field){
		if(field.value==field.defaultValue)
			field.value="";
	}
	function outt(field){
		if(field.value=="")
			field.value=field.defaultValue;
	}