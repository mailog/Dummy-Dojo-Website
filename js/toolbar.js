var lastScrollTop = 0;
var st;

$(window).scroll(function(){    
	st = window.pageYOffset || document.documentElement.scrollTop;

	if($(window).scrollTop() == 0)
	{
		Console.Log("At the top!!!!");
	}

    /*if(isScrolledInto($('#content'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#FF1493";
		}
		//document.getElementById("home-txt").style.color = "#ffd700";
    }    
    lastScrollTop = st <= 0 ? 0 : st;*.
});

/*function isScrolledInto(elem,tlbr)
{
    var tlbr;
    if (st > lastScrollTop){
    	tlbr = $(tlbr).offset().top + $(tlbr).innerHeight()/2;// downscroll code
     } else {
    	tlbr = $(tlbr).offset().top + $(tlbr).innerHeight()/2; // upscroll code
     }
	var elemTop = $(elem).position().top;
	var elemBot = $(elem).position().top + $(elem).outerHeight(true);
    return ((tlbr > elemTop) && (tlbr < elemBot));
}*/	
