function goToArticle(){
var article = document.getElementById("searchBox").value;
	if(article == "常用Git开发命令和开发模式指南"){
		window.location.href="my-git-pro.html";
	}else if(article == "Gradle使用指南（译）"){
		window.location.href="gradle-userguide-zh.html";
	}else if(article == "代码整洁"){
		window.location.href="clean-code.html";
	}else if(article == "设计模式"){
		window.location.href="design-pattern.html";
	}else if(article == "用户故事与敏捷方法(1)"){
		window.location.href="user-stories-applied-for-agile-software-development-part-1.html";
	}else if(article == "用户故事与敏捷方法(2)"){
		window.location.href="user-stories-applied-for-agile-software-development-part-2.html";
	}else if(article == "用户故事与敏捷方法(3)"){
		window.location.href="user-stories-applied-for-agile-software-development-part-3.html";
	}else if(article == "测试驱动开发"){
		window.location.href="test-driven-development.html";
	}else if(article == "持续集成CI"){
		window.location.href="continuous-integration.html";
	}else if(article == "Maven的使用"){
		window.location.href="use-maven.html";
	}else if(article == "实现模式"){
		window.location.href="implementation-patterns.html"
	}
}

function getDataSource(){
	return('["常用Git开发命令和开发模式指南","Gradle使用指南（译）","代码整洁","用户故事与敏捷方法(1)","用户故事与敏捷方法(2)","用户故事与敏捷方法(3)","测试驱动开发","持续集成CI","Maven的使用",""]');
}