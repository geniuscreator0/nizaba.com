(function(){var c={};global.VEL=global.VEL||{};global.VEL.Wordwall=global.VEL.Wordwall||{};
global.VEL.Wordwall.Play=global.VEL.Wordwall.Play||{};
ss.initAssembly(c,"VEL.Wordwall.Play");var d=function(){this.$M=null;
this.$L=null;this.$F=null;this.$l=null;this.$J=null;
this.$G=null;this.$N=null;this.$m=null;this.$H=null;
this.$K=null;this.$I=null;this.$x=null;this.$v=null;
this.$t=null;this.$u=null;this.$E=null;this.$D=null;
this.$y=null;this.$w=null;this.$r=null;this.$q=null;
this.$s=null;this.$p=null;this.$A=null;this.$z=null;
this.$o=null;this.$B=null;this.$n=null;this.$C=null;
VEL.Wordwall.Global.Modules.playPage=this};d.__typeName="VEL.Wordwall.Play.PlayPage";
global.VEL.Wordwall.Play.PlayPage=d;ss.initClass(d,c,{initialize:function(){if(ServerModel.homeworkId===0){return
}this.$G=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-loading-section");
if(!ss.isNullOrEmptyString(ServerModel.deadlineEdit)){var a=new Date(ServerModel.deadlineUnix);
if(a<new Date()){(new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-deadline-block")).set_isVisible(true);
this.$G.set_isVisible(false);return}}var b=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-reset-name",ss.mkdel(this,this.$f),true);
this.$H=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-name-display");
this.$K=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-name-entry-wrapper");
this.$I=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-name-display-wrapper");
this.$F=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-invalid-section");
this.$L=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-name-section");
this.$J=new VEL.Wordwall.Global.Controls.Input.$ctor1(".js-name-entry");
this.$M=new VEL.Wordwall.Global.Controls.Checkbox.$ctor1(".js-remember-me",null);
this.$l=new VEL.Wordwall.Global.Controls.Panel.$ctor1(".js-activity-panel");
this.$m=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-activity-wrapper");
this.$N=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-join-button",ss.mkdel(this,this.$h),true);
this.$4();this.$M.set_isChecked(true);this.$g();this.$J.onChange(ss.mkdel(this,function(){this.$N.setEnable(this.$J.get_value().length>0)
}),true);$(window).on("resize orientationchange",ss.mkdel(this,function(f){this.$g()
}));VEL.Wordwall.Global.Helpers.AppHelper.load(ss.mkdel(this,this.$6))
},$6:function(){var a=0,b;var f=ss.mkdel(this,function(){$sm1:for(;
;){switch(a){case 0:a=-1;this.$G.set_isVisible(false);
if(ServerModel.registration===0){this.$0();a=-1;break $sm1
}else{if(ServerModel.registration===1){this.$1();a=-1;
break $sm1}else{if(ServerModel.registration===2){b=this.$3(true);
a=1;b.continueWith(f);return}else{if(ServerModel.registration===3){this.$2();
a=-1;break $sm1}else{throw new ss.InvalidOperationException("Unknown game registration option: "+ServerModel.registration+".")
}}}}a=-1;break $sm1;case 1:a=-1;b.getAwaitedResult();
a=-1;break $sm1;default:break $sm1}}});f()},$0:function(){this.$J.set_value("");
this.$h()},$1:function(){var a=VEL.Wordwall.Global.Modules.app.getClient();
if(a.get_isAnonymous()){this.$f()}else{var b=this.$J;
var g=this.$H;var h=a.get_fullName();g.set_text(h);
b.set_value(h);this.$I.set_isVisible(true);this.$K.set_isVisible(false)
}this.$N.setEnable(this.$J.get_value().length>0);this.$L.set_isVisible(true)
},$f:function(){this.$J.set_value("");this.$N.disable();
this.$I.set_isVisible(false);this.$K.set_isVisible(true);
if(!window.matchMedia("(pointer: coarse)").matches){this.$J.focus()
}VEL.Wordwall.Global.Modules.app.registerClient("","",false,false)
},$2:function(){VEL.Wordwall.Global.Modules.app.registerGoogleClassroomClient(ServerModel.googleClassroomAddOnUserId);
Analytics.event("student","start-gc-add-on-assignment","");
this.$j()},restart:function(){window.location.reload()
},$h:function(){VEL.Wordwall.Global.Modules.app.setFontStackId(ServerModel.fontStackId,false);
var a=this.$K.get_isVisible();VEL.Wordwall.Global.Modules.app.registerClient(this.$J.get_value(),"",a,this.$M.get_isChecked());
this.$j()},$j:function(){VEL.Wordwall.Global.Modules.app.setGameOverOptions(ServerModel.gameOver);
this.$L.set_isVisible(false);this.$x.set_isVisible(false);
this.$l.set_isVisible(true);var a=ServerModel.activityId;
var b=(ServerModel.isEmbed?10:9);VEL.Wordwall.Global.Modules.app.startGame(b,a,ServerModel.activityGuid,ServerModel.themeId,ServerModel.templateId)
},$g:function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){$("body").css("min-height",$(window).height()+2)
}this.$m.width$1($(window).width());this.$m.height$1($(window).height()-(ServerModel.isEmbed?18:0))
},$4:function(){this.$x=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-sign-in-section");
this.$v=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-profile-wrapper");
this.$t=new VEL.Wordwall.Global.Controls.Image(".js-gc-profile-image");
this.$t.setAttribute("referrerpolicy","no-referrer");
this.$u=this.$v.find(VEL.Wordwall.Global.Controls.Control).call(this.$v,".js-gc-profile-username");
this.$E=this.$v.find(VEL.Wordwall.Global.Controls.Control).call(this.$v,".js-gc-wrong-user-wrapper");
this.$D=this.$v.find(VEL.Wordwall.Global.Controls.Control).call(this.$v,".js-gc-wrong-user-link");
this.$D.onClick(ss.mkdel(this,this.$c),false,true);
this.$y=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-sign-in-wrapper");
this.$w=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-sign-in-button",ss.mkdel(this,this.$b),true);
this.$r=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-grant-permissions-wrapper");
this.$q=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-grant-permissions-button",ss.mkdel(this,this.$a),true);
this.$s=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-not-assigned-wrapper");
this.$p=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-change-user-button",ss.mkdel(this,this.$8),true);
this.$A=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-start-assignment-wrapper");
this.$z=new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-start-assignment-button",ss.mkdel(this,this.$d),true);
this.$o=new VEL.Wordwall.Global.Controls.Button.$ctor1(".js-gc-already-completed-section");
new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-already-completed-done-button",ss.mkdel(this,this.$7),true);
this.$B=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gc-turned-in-section");
new VEL.Wordwall.Global.Controls.Button.$ctor3(".js-gc-turned-in-done-button",ss.mkdel(this,this.$e),true);
this.$n=new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-gcaddon-complete-section")
},$3:function(a){var b=0,k=new ss.TaskCompletionSource(),l,m,n,o;
var p=ss.mkdel(this,function(){try{$sm1:for(;;){switch(b){case 0:b=-1;
this.$G.set_isVisible(true);this.$x.set_isVisible(false);
this.$i(null);l=VEL.Wordwall.Global.Modules.app.get_googleClassroom().getCurrentUserState();
b=1;l.continueWith(p);return;case 1:b=-1;m=l.getAwaitedResult();
this.$i(m.userProfile);n=false;this.$y.set_isVisible(false);
this.$r.set_isVisible(false);this.$s.set_isVisible(false);
this.$A.set_isVisible(false);if(ss.isNullOrUndefined(m.userProfile)){this.$E.set_isVisible(true);
this.$y.set_isVisible(true);Analytics.event("student","gc-sign-in-page","");
b=2;continue $sm1}else{if(!m.hasGrantedPermissions){this.$E.set_isVisible(true);
this.$r.set_isVisible(true);Analytics.event("student","gc-grant-permissions-page","");
b=2;continue $sm1}else{o=VEL.Wordwall.Global.Modules.app.get_googleClassroom().loadUserAssignmentData();
b=3;o.continueWith(p);return}}case 3:b=-1;o.getAwaitedResult();
if(VEL.Wordwall.Global.Modules.app.get_googleClassroom().isUserAssignedToAssignment()){n=true;
this.$E.set_isVisible(true);this.$A.set_isVisible(true);
if(a){Analytics.event("student","gc-start-assignment-page","")
}}else{this.$E.set_isVisible(false);this.$s.set_isVisible(true);
Analytics.event("student","gc-not-assigned-page","")
}b=2;continue $sm1;case 2:b=-1;this.$G.set_isVisible(false);
if(a||!n){this.$x.set_isVisible(true)}else{this.$k(m.userProfile)
}b=-1;break $sm1;default:break $sm1}}k.setResult(null)
}catch(e){k.setException(ss.Exception.wrap(e))}});p();
return k.task},$i:function(a){this.$C=a;if(ss.isValue(a)){this.$t.set_src(a.photoUrl);
this.$u.set_text(a.name.fullName);this.$v.set_isVisible(true)
}else{this.$v.set_isVisible(false);this.$t.set_src("");
this.$u.set_text("")}},$c:function(){var a=0,b,g;var h=ss.mkdel(this,function(){$sm1:for(;
;){switch(a){case 0:a=-1;b=VEL.Wordwall.Global.Modules.app.get_googleClassroom().signOutFromGoogleClassroom();
a=1;b.continueWith(h);return;case 1:a=-1;b.getAwaitedResult();
g=this.$3(false);a=2;g.continueWith(h);return;case 2:a=-1;
g.getAwaitedResult();a=-1;break $sm1;default:break $sm1
}}});h()},$b:function(){var a=this.$w;var b=VEL.Wordwall.Global.Modules.app.get_googleClassroom();
this.$9(a,ss.mkdel(b,b.signInToGoogleClassroom))},$a:function(){var a=this.$q;
var b=VEL.Wordwall.Global.Modules.app.get_googleClassroom();
this.$9(a,ss.mkdel(b,b.grantGoogleClassroomPermissions))
},$8:function(){var a=this.$p;var b=VEL.Wordwall.Global.Modules.app.get_googleClassroom();
this.$9(a,ss.mkdel(b,b.signInToGoogleClassroom))},$9:function(a,b){var m=0,n,o,p,q,r,s;
var t=ss.mkdel(this,function(){$sm1:for(;;){switch(m){case 0:m=-1;
if(a.hasLoadingGif()){return}a.addLoadingGif();if(!ss.staticEquals(b,null)){m=2;
continue $sm1}m=1;continue $sm1;case 2:case 3:case 4:if(m===2){m=3
}try{$sm2:for(;;){switch(m){case 3:m=-1;n=b();m=4;n.continueWith(t);
return;case 4:m=-1;n.getAwaitedResult();m=-1;break $sm2;
default:break $sm2}}}catch(e){e=ss.Exception.wrap(e);
if(ss.isInstanceOfType(e,ss.PromiseException)){o=ss.cast(e,ss.PromiseException);
p=VEL.Wordwall.Global.Helpers.GoogleClassroomHelper.exceptionToError(o);
q=((ss.isValue(p)&&!ss.isNullOrEmptyString(p.message))?p.message:o.get_message());
VEL.Wordwall.Global.Shell.displayErrorMessage(q,true,0)
}else{r=e;VEL.Wordwall.Global.Shell.displayErrorMessage(r.get_message(),true,0)
}}m=1;continue $sm1;case 1:m=-1;s=this.$3(false);m=5;
s.continueWith(t);return;case 5:m=-1;s.getAwaitedResult();
a.resetLoadingGif();m=-1;break $sm1;default:break $sm1
}}});t()},$d:function(){if(this.$z.hasLoadingGif()){return
}try{this.$z.addLoadingGif();this.$k(this.$C)}finally{this.$z.resetLoadingGif()
}},$k:function(a){if(VEL.Wordwall.Global.Modules.app.get_googleClassroom().hasUserAlreadyCompletedAssignment(ServerModel.gameOver)){this.$5();
return}VEL.Wordwall.Global.Modules.app.registerGoogleClassroomClient(a.id);
Analytics.event("student","start-gc-assignment","");
this.$j()},$5:function(){this.$x.set_isVisible(false);
this.$o.set_isVisible(true)},$7:function(){window.close()
},onTurnedInGoogleClassroomStudentSubmission:function(){this.$l.set_isVisible(false);
this.$B.set_isVisible(true)},$e:function(){window.close()
},onCompletedGoogleClassroomAddOnAttachment:function(){this.$l.set_isVisible(false);
this.$n.set_isVisible(true)}},null,[VEL.Wordwall.Global.Pages.IPlayPage])
})();
