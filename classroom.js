var GoogleClassroom=(function(){var k=["https://www.googleapis.com/auth/classroom.courses.readonly","https://www.googleapis.com/auth/classroom.rosters.readonly","https://www.googleapis.com/auth/classroom.coursework.students"].join(" ");
function f(s,r){return d(s,r,false,k)}var j=["https://www.googleapis.com/auth/classroom.courses.readonly","https://www.googleapis.com/auth/classroom.coursework.me"].join(" ");
function e(s,r){return d(s,r,true,j)}var g=["https://www.googleapis.com/auth/classroom.courses.readonly","https://www.googleapis.com/auth/classroom.rosters.readonly","https://www.googleapis.com/auth/classroom.coursework.students"].join(" ");
function c(s,r){return d(s,r,true,g)}function d(s,r,u,v){var t=$.Deferred();
p(function(){m(r).then(function(){return n(s,u,v)}).then(function(){t.resolve(new h(v))
})["catch"](function(w){t.reject(b(w))})},function(){t.reject()
});return t.promise()}function p(r,s){gapi.load("client:auth2",{callback:r,onerror:s})
}var i=["https://classroom.googleapis.com/$discovery/rest"];
function m(r){return gapi.client.init({apiKey:r,discoveryDocs:i})
}function n(r,s,t){return gapi.auth2.init({client_id:r,scope:t,fetch_basic_profile:s,ux_mode:"popup"}).then(function(u){return u
},function(u){throw u})}function b(r){return{errorCode:r.error,message:r.details}
}function a(s){var r=s.result.error;return{errorCode:r.status,message:r.message,statusCode:r.code,details:r.errors}
}function q(s,r){return s.listItems(s.listItemsOptions).then(function(t){r=(r||[]).concat(s.getListFromResult(t.result)||[]);
if(t.result.nextPageToken){s.listItemsOptions=s.listItemsOptions||{};
s.listItemsOptions.pageToken=t.result.nextPageToken;
return q(s,r)}else{if(s.compare){r.sort(s.compare)}return r
}},function(t){throw a(t)})}function o(r){return q({listItems:gapi.client.classroom.courses.list,listItemsOptions:r,getListFromResult:function(s){return s.courses
},compare:function(s,t){return s.name.localeCompare(t.name)
}})}function l(s){var r=s?s.getBasicProfile():null;
return r?{id:r.getId(),name:{fullName:r.getName()},emailAddress:r.getEmail(),photoUrl:r.getImageUrl()}:null
}function h(r){this.getCurrentUserState=function(){return gapi.auth2.getAuthInstance().then(function(s){var u=s.isSignedIn.get();
var v=u?s.currentUser.get():null;var t=v&&v.hasGrantedScopes(r);
var w=l(v);if(w&&!w.name.fullName){w=null}return{isSignedIn:u,hasGrantedPermissions:t,userProfile:w}
},function(s){throw b(s)})};this.signIn=function(){return gapi.auth2.getAuthInstance().signIn({prompt:"select_account"}).then(function(s){if(s.hasGrantedScopes(r)){return l(s)
}else{throw b({error:"access_denied"})}},function(s){throw b(s)
})};this.signOut=function(){return gapi.auth2.getAuthInstance().signOut()["catch"](function(s){throw b(s)
})};this.grantPermissions=function(){return gapi.auth2.getAuthInstance().then(function(s){var t=s.currentUser.get();
if(t.hasGrantedScopes(r)){return l(t)}return t.grant({prompt:"consent",scope:r}).then(function(){if(t.hasGrantedScopes(r)){return l(t)
}else{throw b({error:"access_denied"})}},function(u){throw b(u)
})},function(s){throw b(s)})};this.listMyTeacherCourses=function(){return o({teacherId:"me",courseStates:["ACTIVE"]})
};this.listCourseStudents=function(s){return q({listItems:gapi.client.classroom.courses.students.list,listItemsOptions:{courseId:s},getListFromResult:function(t){return t.students
},compare:function(t,u){return t.profile.name.fullName.localeCompare(u.profile.name.fullName)
}})};this.createCourseWork=function(s,t){return gapi.client.classroom.courses.courseWork.create({courseId:s},t).then(function(u){return u.result
},function(u){throw a(u)})};this.publishCourseWork=function(s,t){return gapi.client.classroom.courses.courseWork.patch({courseId:s,id:t,updateMask:"state"},{state:"PUBLISHED"}).then(function(u){return u.result
},function(u){throw a(u)})};this.listCourseWorkStudentSubmissions=function(s,t){return q({listItems:gapi.client.classroom.courses.courseWork.studentSubmissions.list,listItemsOptions:{courseId:s,courseWorkId:t},getListFromResult:function(u){return u.studentSubmissions
}})};this.getMyCourseWorkStudentSubmission=function(s,t){return q({listItems:gapi.client.classroom.courses.courseWork.studentSubmissions.list,listItemsOptions:{courseId:s,courseWorkId:t,userId:"me"},getListFromResult:function(u){return u.studentSubmissions
}}).then(function(u){return u.length?u[0]:null})};this.turnInStudentSubmission=function(s,t,u){return gapi.client.classroom.courses.courseWork.studentSubmissions.turnIn({courseId:s,courseWorkId:t,id:u}).then(function(v){return v
},function(v){throw a(v)})};this.uploadDraftScores=function(t){var v=gapi.client.newBatch();
if(t){for(var s=0;s<t.length;++s){var u=t[s];v.add(gapi.client.classroom.courses.courseWork.studentSubmissions.patch({courseId:u.courseId,courseWorkId:u.courseWorkId,id:u.id,updateMask:"draftGrade"},{draftGrade:u.draftGrade}))
}}return v}}return{createSetAssignmentClient:f,createDoAssignmentClient:e,createAssignmentResultsClient:c}
})();
