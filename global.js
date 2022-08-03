(function(b,a,f){window.dataLayer=window.dataLayer||[];
var d=VEL.Wordwall.Global.Helpers.UrlHelper.isRelease();
var c=ServerModel.isAdmin!==f&&ServerModel.isAdmin===true;
if(!c||!d){var e=d?"UA-29211054-4":"UA-29211054-5";
(function(k,q,n,j,p,h,l){k.GoogleAnalyticsObject=p;
k[p]=k[p]||function(){(k[p].q=k[p].q||[]).push(arguments)
},k[p].l=1*new Date();h=q.createElement(n),l=q.getElementsByTagName(n)[0];
h.async=1;h.src=j;l.parentNode.insertBefore(h,l)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
a.get("/api/getclientid",function(g){ga("create",e,{storage:"none",clientId:g});
if(ServerModel.userId!==f&&ServerModel.userId==0){ga("require","GTM-TFB5KWF")
}ga("set","anonymizeIp",true);ga("send","pageview")
})}b.event=function(h,g,i){if(!c||!d){if(i===f||i===null){i=""
}ga("send",{hitType:"event",eventCategory:h,eventAction:g,eventLabel:i})
}if(!d){a("#error_report").css("background-color","green");
a("#error_report").text("EVENT: "+h+"|"+g+"|"+i);a("#error_report").removeClass("hidden")
}}}(window.Analytics=window.Analytics||{},jQuery));
