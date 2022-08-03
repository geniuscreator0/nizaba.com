if(typeof(global)==="undefined"){if(typeof(window)!=="undefined"){global=window
}else{if(typeof(self)!=="undefined"){global=self}}}(function(aa){var bE={__assemblies:{}};
bE.initAssembly=function v(fL,n,fM){fM=fM||{};fL.name=n;
fL.toString=function(){return this.name};fL.__types={};
fL.getResourceNames=function(){return Object.keys(fM)
};fL.getResourceDataBase64=function(fN){return fM[fN]||null
};fL.getResourceData=function(fN){var fO=fM[fN];return fO?bE.dec64(fO):null
};bE.__assemblies[n]=fL};bE.initAssembly(bE,"mscorlib");
bE.load=function dh(n){return bE.__assemblies[n]||require(n)
};var L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",I;
bE.enc64=function(n,fL){var fQ="",fP;for(fP=0;fP<n.length;
fP+=3){var fM=n[fP],fN=n[fP+1],fO=n[fP+2];fQ+=(fL&&fP&&!(fP%57)?"\n":"")+L[fM>>2]+L[((fM&3)<<4)|(fN>>4)]+(fP<n.length-1?L[((fN&15)<<2)|(fO>>6)]:"=")+(fP<n.length-2?L[fO&63]:"=")
}return fQ};bE.dec64=function(fR){fR=fR.replace(/\s/g,"");
I=I||(function(){var fT={"=":-1};for(var fS=0;fS<64;
fS++){fT[L[fS]]=fS}return fT})();var n=Array(Math.max(fR.length*3/4-2,0)),fP;
for(fP=0;fP<fR.length;fP+=4){var fQ=fP*3/4,fL=I[fR[fP]],fM=I[fR[fP+1]],fN=I[fR[fP+2]],fO=I[fR[fP+3]];
n[fQ]=(fL<<2)|(fM>>4);if(fN>=0){n[fQ+1]=((fM&15)<<4)|(fN>>2)
}if(fO>=0){n[fQ+2]=((fN&3)<<6)|fO}}return n};bE.getAssemblies=function ct(){return Object.keys(bE.__assemblies).map(function(fL){return bE.__assemblies[fL]
})};bE.isNullOrUndefined=function c8(n){return(n===null)||(n===undefined)
};bE.isValue=function dc(n){return(n!==null)&&(n!==undefined)
};bE.referenceEquals=function dx(n,fL){return bE.isValue(n)?n===fL:!bE.isValue(fL)
};bE.mkdict=function dp(){var n=(arguments.length!=1?arguments:arguments[0]);
var fM={};for(var fL=0;fL<n.length;fL+=2){fM[n[fL]]=n[fL+1]
}return fM};bE.clone=function b8(fL,n){return n?fL.$clone(n):n
};bE.coalesce=function b9(n,fL){return bE.isValue(n)?n:fL
};bE.isDate=function c3(n){return Object.prototype.toString.call(n)==="[object Date]"
};bE.isArray=function c1(n){return Object.prototype.toString.call(n)==="[object Array]"
};bE.isTypedArrayType=function da(n){return["Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray"].indexOf(bE.getTypeFullName(n))>=0
};bE.isArrayOrTypedArray=function c1(n){return bE.isArray(n)||bE.isTypedArrayType(bE.getInstanceType(n))
};bE.getHashCode=function cC(fL){if(!bE.isValue(fL)){throw new eH("Cannot get hash code of null")
}else{if(typeof(fL.getHashCode)==="function"){return fL.getHashCode()
}else{if(typeof(fL)==="boolean"){return fL?1:0}else{if(typeof(fL)==="number"){var fN=fL.toExponential();
fN=fN.substr(0,fN.indexOf("e"));return parseInt(fN.replace(".",""),10)&4294967295
}else{if(typeof(fL)==="string"){var fM=0;for(var n=0;
n<fL.length;n++){fM=(fM*31+fL.charCodeAt(n))&4294967295
}return fM}else{if(bE.isDate(fL)){return fL.valueOf()&4294967295
}else{return bE.defaultHashCode(fL)}}}}}}};bE.defaultHashCode=function cg(n){return n.$__hashCode__||(n.$__hashCode__=(Math.random()*4294967296)|0)
};bE.equals=function cn(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(n!==bE&&typeof(n.equals)==="function"){return n.equals(fL)
}}if(bE.isDate(n)&&bE.isDate(fL)){return n.valueOf()===fL.valueOf()
}else{if(typeof(n)==="function"&&typeof(fL)==="function"){return bE.delegateEquals(n,fL)
}else{if(bE.isNullOrUndefined(n)&&bE.isNullOrUndefined(fL)){return true
}else{return n===fL}}}};bE.compare=function ca(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(typeof(n)==="number"||typeof(n)==="string"||typeof(n)==="boolean"){return n<fL?-1:(n>fL?1:0)
}else{if(bE.isDate(n)){return bE.compare(n.valueOf(),fL.valueOf())
}else{return n.compareTo(fL)}}}};bE.equalsT=function co(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(typeof(n)==="number"||typeof(n)==="string"||typeof(n)==="boolean"){return n===fL
}else{if(bE.isDate(n)){return n.valueOf()===fL.valueOf()
}else{return n.equalsT(fL)}}}};bE.staticEquals=function dL(n,fL){if(!bE.isValue(n)){return !bE.isValue(fL)
}else{return bE.isValue(fL)?bE.equals(n,fL):false}};
bE.shallowCopy=function dJ(fO,fP){var fM=Object.keys(fO);
for(var n=0,fN=fM.length;n<fN;n++){var fL=fM[n];fP[fL]=fO[fL]
}};bE.isLower=function c6(n){var fL=String.fromCharCode(n);
return fL===fL.toLowerCase()&&fL!==fL.toUpperCase()
};bE.isUpper=function db(n){var fL=String.fromCharCode(n);
return fL!==fL.toLowerCase()&&fL===fL.toUpperCase()
};bE.toLower=function dQ(n){var fL=String.fromCharCode(n);
return fL.toLowerCase().charCodeAt(0)};bE.toUpper=function dS(n){var fL=String.fromCharCode(n);
return fL.toUpperCase().charCodeAt(0)};bE.isNumber=function aG(n){return n>=48&&n<=57||n>=1776&&n<=1785||n>=3046&&n<=3058
};bE.isWhiteSpace=function aH(n){return n<=32};bE.isCurrency=function(n){return n===36||n>=162&&n<=165||n>=8352&&n<=8383||n===3065||n===3647||n===43064||n===65020
};bE.isLetter=function aF(n){return !(bE.isNumber(n)||bE.isPunctuation(n)||bE.isWhiteSpace(n)||bE.isCurrency(n))
};bE.isPunctuation=function c9(n){if(n>=8192&&n<=8303||n>=11776&&n<=11903||n===161||n===191||n===171||n===183||n===187){return true
}var fL=String.fromCharCode(n);return"!\"#%&'()*,-./:;?@[\\]_{}".indexOf(fL)!==-1
};if(typeof(window)=="object"){if(!window.Element){window.Element=function(){};
window.Element.isInstanceOfType=function(n){return n&&typeof n.constructor==="undefined"&&typeof n.tagName==="string"
}}window.Element.__typeName="Element";if(!window.XMLHttpRequest){window.XMLHttpRequest=function(){var fM=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];
for(var fL=0;fL<fM.length;fL++){try{var fN=new ActiveXObject(fM[fL]);
return fN}catch(n){}}return null}}bE.parseXml=function(fN){try{if(DOMParser){var n=new DOMParser();
return n.parseFromString(fN,"text/xml")}else{var fO=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];
for(var fM=0;fM<fO.length;fM++){var fP=new ActiveXObject(fO[fM]);
fP.async=false;fP.loadXML(fN);fP.setProperty("SelectionLanguage","XPath");
return fP}}}catch(fL){}return null}}bE.clearKeys=function b7(fL){for(var fM in fL){if(fL.hasOwnProperty(fM)){delete fL[fM]
}}};bE.keyExists=function de(n,fL){return n[fL]!==undefined
};if(!Object.keys){Object.keys=(function(){var fN=Object.prototype.hasOwnProperty,fM=!({toString:null}).propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],fL=n.length;
return function(fP){if(typeof fP!=="object"&&(typeof fP!=="function"||fP===null)){throw new TypeError("Object.keys called on non-object")
}var fR=[],fQ,fO;for(fQ in fP){if(fN.call(fP,fQ)){fR.push(fQ)
}}if(fM){for(fO=0;fO<fL;fO++){if(fN.call(fP,n[fO])){fR.push(n[fO])
}}}return fR}}())}bE.getKeyCount=function cH(n){return Object.keys(n).length
};bE.__genericCache={};bE._makeGenericTypeName=function bK(n,fN){var fM=n.__typeName;
for(var fL=0;fL<fN.length;fL++){fM+=(fL===0?"[":",")+"["+bE.getTypeQName(fN[fL])+"]"
}fM+="]";return fM};bE.makeGenericType=function dl(n,fM){var fL=bE._makeGenericTypeName(n,fM);
return bE.__genericCache[fL]||n.apply(null,fM)};bE.registerGenericClassInstance=function dz(fM,fL,fQ,fO,n,fN){var fP=bE._makeGenericTypeName(fL,fQ);
bE.__genericCache[fP]=fM;fM.__typeName=fP;fM.__genericTypeDefinition=fL;
fM.__typeArguments=fQ;bE.initClass(fM,fL.__assembly,fO,n(),fN())
};bE.registerGenericInterfaceInstance=function dA(fM,fL,fP,fN,n){var fO=bE._makeGenericTypeName(fL,fP);
bE.__genericCache[fO]=fM;fM.__typeName=fO;fM.__genericTypeDefinition=fL;
fM.__typeArguments=fP;bE.initInterface(fM,fL.__assembly,fN,n())
};bE.isGenericTypeDefinition=function c4(n){return n.__isGenericTypeDefinition||false
};bE.getGenericTypeDefinition=function cB(n){return n.__genericTypeDefinition||null
};bE.getGenericParameterCount=function cA(n){return n.__typeArgumentCount||0
};bE.getGenericArguments=function cz(n){return n.__typeArguments||null
};bE.setMetadata=function bO(fN,fM){if(fM.members){for(var n=0;
n<fM.members.length;n++){var fL=fM.members[n];fL.typeDef=fN;
if(fL.adder){fL.adder.typeDef=fN}if(fL.remover){fL.remover.typeDef=fN
}if(fL.getter){fL.getter.typeDef=fN}if(fL.setter){fL.setter.typeDef=fN
}}}fN.__metadata=fM;if(fM.variance){fN.isAssignableFrom=function(fR){var fO=function(fV,fW){if(fW.__genericTypeDefinition===fV.__genericTypeDefinition&&fW.__typeArguments.length==fV.__typeArguments.length){for(var fS=0;
fS<fV.__typeArguments.length;fS++){var fX=fV.__metadata.variance[fS],fU=fV.__typeArguments[fS],fT=fW.__typeArguments[fS];
switch(fX){case 1:if(!bE.isAssignableFrom(fU,fT)){return false
}break;case 2:if(!bE.isAssignableFrom(fT,fU)){return false
}break;default:if(fT!==fU){return false}}}return true
}return false};if(fR.__interface&&fO(this,fR)){return true
}var fQ=bE.getInterfaces(fR);for(var fP=0;fP<fQ.length;
fP++){if(fQ[fP]===this||fO(this,fQ[fP])){return true
}}return false}}};bE.initClass=function cU(fM,n,fP,fL,fO){fM.__class=true;
fM.__assembly=n;if(!fM.__typeArguments){n.__types[fM.__typeName]=fM
}if(fL&&fL!==Object){var fN=function(){};fN.prototype=fL.prototype;
fM.prototype=new fN();fM.prototype.constructor=fM}bE.shallowCopy(fP,fM.prototype);
if(fO){fM.__interfaces=fO}};bE.initGenericClass=function cW(fL,n,fM){fL.__class=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;fL.__typeArgumentCount=fM;
fL.__isGenericTypeDefinition=true};bE.initInterface=function cX(fM,n,fN,fL){fM.__interface=true;
fM.__assembly=n;if(!fM.__typeArguments){n.__types[fM.__typeName]=fM
}if(fL){fM.__interfaces=fL}bE.shallowCopy(fN,fM.prototype);
fM.isAssignableFrom=function(fO){return bE.contains(bE.getInterfaces(fO),this)
}};bE.initGenericInterface=function cW(fL,n,fM){fL.__interface=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;fL.__typeArgumentCount=fM;
fL.__isGenericTypeDefinition=true};bE.initEnum=function cV(fL,n,fM,fN){fL.__enum=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;bE.shallowCopy(fM,fL.prototype);
fL.getDefaultValue=fL.createInstance=function(){return fN?null:0
};fL.isInstanceOfType=function(fO){return typeof(fO)==(fN?"string":"number")
}};bE.getBaseType=function cw(fM){if(fM===Object||fM.__interface){return null
}else{if(Object.getPrototypeOf){return Object.getPrototypeOf(fM.prototype).constructor
}else{var fL=fM.prototype;if(Object.prototype.hasOwnProperty.call(fL,"constructor")){try{var n=fL.constructor;
delete fL.constructor;return fL.constructor}finally{fL.constructor=n
}}return fL.constructor}}};bE.getTypeFullName=function cL(n){return n.__typeName||n.name||(n.toString().match(/^\s*function\s*([^\s(]+)/)||[])[1]||"Object"
};bE.getTypeQName=function cL(n){return bE.getTypeFullName(n)+(n.__assembly?", "+n.__assembly.name:"")
};bE.getTypeName=function cM(fN){var fL=bE.getTypeFullName(fN);
var n=fL.indexOf("[");var fM=fL.lastIndexOf(".",n>=0?n:fL.length);
return fM>0?fL.substr(fM+1):fL};bE.getTypeNamespace=function cN(fN){var fL=bE.getTypeFullName(fN);
var n=fL.indexOf("[");var fM=fL.lastIndexOf(".",n>=0?n:fL.length);
return fM>0?fL.substr(0,fM):""};bE.getTypeAssembly=function cK(n){if(bE.contains([Date,Number,Boolean,String,Function,Array],n)){return bE
}else{return n.__assembly||null}};bE._getAssemblyType=function bJ(fL,fN){var fO=[];
if(fL.__types){return fL.__types[fN]||null}else{var n=fN.split(".");
for(var fM=0;fM<n.length;fM++){fL=fL[n[fM]];if(!bE.isValue(fL)){return null
}}if(typeof fL!=="function"){return null}return fL}};
bE.getAssemblyTypes=function cu(n){var fL=[];if(n.__types){for(var fM in n.__types){if(n.__types.hasOwnProperty(fM)){fL.push(n.__types[fM])
}}}else{var fN=function(fQ,fP){for(var fO in fQ){if(fQ.hasOwnProperty(fO)){fN(fQ[fO],fO)
}}if(typeof(fQ)==="function"&&bE.isUpper(fP.charCodeAt(0))){fL.push(fQ)
}};fN(n,"")}return fL};bE.createAssemblyInstance=function ce(n,fM){var fL=bE.getType(fM,n);
return fL?bE.createInstance(fL):null};bE.getInterfaces=function cE(n){if(n.__interfaces){return n.__interfaces
}else{if(n===Date||n===Number){return[er,ek,et]}else{if(n===Boolean||n===String){return[er,ek]
}else{if(n===Array||bE.isTypedArrayType(n)){return[eo,ej,eu]
}else{return[]}}}}};bE.isInstanceOfType=function c5(n,fL){if(bE.isNullOrUndefined(n)){return false
}if(typeof(fL.isInstanceOfType)==="function"){return fL.isInstanceOfType(n)
}return bE.isAssignableFrom(fL,bE.getInstanceType(n))
};bE.isAssignableFrom=function c2(n,fL){return n===fL||(typeof(n.isAssignableFrom)==="function"&&n.isAssignableFrom(fL))||fL.prototype instanceof n
};bE.isClass=function fH(n){return(n.__class==true||n===Array||n===Function||n===RegExp||n===String||n===Error||n===Object)
};bE.isEnum=function fI(n){return !!n.__enum};bE.isFlags=function fJ(n){return n.__metadata&&n.__metadata.enumFlags||false
};bE.isInterface=function fK(n){return !!n.__interface
};bE.safeCast=function dH(n,fL){if(fL===true){return n
}else{if(fL===false){return null}else{return bE.isInstanceOfType(n,fL)?n:null
}}};bE.cast=function b5(n,fL){if(n===null||typeof(n)==="undefined"||typeof(n)==="object"){return n
}else{if(fL===true||(fL!==false&&bE.isInstanceOfType(n,fL))){return n
}}throw new ew("Cannot cast object to type "+bE.getTypeFullName(fL))
};bE.getInstanceType=function cD(fL){if(!bE.isValue(fL)){throw new eH("Cannot get type of null")
}try{return fL.constructor}catch(n){return Object}};
bE._getType=function(fS,n,fO){var fN=!fO;fO=fO||/[[,\]]/g;
var fL=fO.lastIndex,fM=fO.exec(fS),fR,fQ=[];if(fM){fR=fS.substring(fL,fM.index);
switch(fM[0]){case"[":if(fS[fM.index+1]!="["){return null
}for(;;){fO.exec(fS);var fP=bE._getType(fS,aa,fO);if(!fP){return null
}fQ.push(fP);fM=fO.exec(fS);if(fM[0]==="]"){break}else{if(fM[0]!==","){return null
}}}fM=fO.exec(fS);if(fM&&fM[0]===","){fO.exec(fS);if(!(n=bE.__assemblies[(fO.lastIndex>0?fS.substring(fM.index+1,fO.lastIndex-1):fS.substring(fM.index+1)).trim()])){return null
}}break;case"]":break;case",":fO.exec(fS);if(!(n=bE.__assemblies[(fO.lastIndex>0?fS.substring(fM.index+1,fO.lastIndex-1):fS.substring(fM.index+1)).trim()])){return null
}break}}else{fR=fS.substring(fL)}if(fN&&fO.lastIndex){return null
}var fP=bE._getAssemblyType(n,fR.trim());return fQ.length?bE.makeGenericType(fP,fQ):fP
};bE.getType=function cJ(fL,n){return fL?bE._getType(fL,n||aa):null
};bE.getDefaultValue=function cx(n){if(typeof(n.getDefaultValue)==="function"){return n.getDefaultValue()
}else{if(n===Boolean){return false}else{if(n===Date){return new Date(0)
}else{if(n===Number){return 0}}}}return null};bE.createInstance=function cf(n){if(typeof(n.createInstance)==="function"){return n.createInstance()
}else{if(n===Boolean){return false}else{if(n===Date){return new Date(0)
}else{if(n===Number){return 0}else{if(n===String){return""
}else{return new n()}}}}}};bE.applyConstructor=function bQ(fL,n){var fM=function(){fL.apply(this,n)
};fM.prototype=fL.prototype;return new fM()};bE.getAttributes=function cv(fS,fL,fO){var fQ=[];
if(fO){var fM=bE.getBaseType(fS);if(fM){var n=bE.getAttributes(fM,fL,true);
for(var fN=0;fN<n.length;fN++){var fR=bE.getInstanceType(n[fN]);
if(!fR.__metadata||!fR.__metadata.attrNoInherit){fQ.push(n[fN])
}}}}if(fS.__metadata&&fS.__metadata.attr){for(var fN=0;
fN<fS.__metadata.attr.length;fN++){var n=fS.__metadata.attr[fN];
if(fL==null||bE.isInstanceOfType(n,fL)){var fR=bE.getInstanceType(n);
if(!fR.__metadata||!fR.__metadata.attrAllowMultiple){for(var fP=fQ.length-1;
fP>=0;fP--){if(bE.isInstanceOfType(fQ[fP],fR)){fQ.splice(fP,1)
}}}fQ.push(n)}}}return fQ};bE.getMembers=function cI(fW,fR,fM,fS,fT){var fV=[];
if((fM&72)==72||(fM&6)==4){var fL=bE.getBaseType(fW);
if(fL){fV=bE.getMembers(fL,fR&~1,fM&(fM&64?255:247)&(fM&2?251:255),fS,fT)
}}var fN=function(fY){if((fR&fY.type)&&(((fM&4)&&!fY.isStatic)||((fM&8)&&fY.isStatic))&&(!fS||fY.name===fS)){if(fT){if((fY.params||[]).length!==fT.length){return
}for(var fX=0;fX<fT.length;fX++){if(fT[fX]!==fY.params[fX]){return
}}}fV.push(fY)}};if(fW.__metadata&&fW.__metadata.members){for(var fO=0;
fO<fW.__metadata.members.length;fO++){var fQ=fW.__metadata.members[fO];
fN(fQ);for(var fP=0;fP<4;fP++){var n=["getter","setter","adder","remover"][fP];
if(fQ[n]){fN(fQ[n])}}}}if(fM&256){while(fW){var fU=[];
for(var fO=0;fO<fV.length;fO++){if(fV[fO].typeDef===fW){fU.push(fV[fO])
}}if(fU.length>1){throw new d2("Ambiguous match")}else{if(fU.length===1){return fU[0]
}}fW=bE.getBaseType(fW)}return null}return fV};bE.midel=function dm(fN,fO,fP){if(fN.isStatic&&!!fO){throw new d3("Cannot specify target for static method")
}else{if(!fN.isStatic&&!fO){throw new d3("Must specify target for instance method")
}}var fM;if(fN.fget){fM=function(){return(fN.isStatic?fN.typeDef:this)[fN.fget]
}}else{if(fN.fset){fM=function(fQ){(fN.isStatic?fN.typeDef:this)[fN.fset]=fQ
}}else{fM=fN.def||(fN.isStatic||fN.sm?fN.typeDef[fN.sname]:fO[fN.sname]);
if(fN.tpcount){if(!fP||fP.length!==fN.tpcount){throw new d3("Wrong number of type arguments")
}fM=fM.apply(null,fP)}else{if(fP&&fP.length){throw new d3("Cannot specify type arguments for non-generic method")
}}if(fN.exp){var n=fM;fM=function(){return n.apply(this,Array.prototype.slice.call(arguments,0,arguments.length-1).concat(arguments[arguments.length-1]))
}}if(fN.sm){var fL=fM;fM=function(){return fL.apply(null,[this].concat(Array.prototype.slice.call(arguments)))
}}}}return bE.mkdel(fO,fM)};bE.invokeCI=function c0(fL,n){if(fL.exp){n=n.slice(0,n.length-1).concat(n[n.length-1])
}if(fL.def){return fL.def.apply(null,n)}else{if(fL.sm){return fL.typeDef[fL.sname].apply(null,n)
}else{return bE.applyConstructor(fL.sname?fL.typeDef[fL.sname]:fL.typeDef,n)
}}};bE.fieldAccess=function cp(n,fL){if(n.isStatic&&!!fL){throw new d3("Cannot specify target for static field")
}else{if(!n.isStatic&&!fL){throw new d3("Must specify target for instance field")
}}fL=n.isStatic?n.typeDef:fL;if(arguments.length===3){fL[n.sname]=arguments[2]
}else{return fL[n.sname]}};var et=function av(){};et.__typeName="ss.IFormattable";
bE.IFormattable=et;bE.initInterface(et,bE,{format:null});
bE.format=function cq(fL,n){if(typeof(fL)==="number"){return bE.formatNumber(fL,n)
}else{if(bE.isDate(fL)){return bE.formatDate(fL,n)}else{return fL.format(n)
}}};var ek=function al(){};ek.__typeName="ss.IComparable";
bE.IComparable=ek;bE.initInterface(ek,bE,{compareTo:null});
var er=function at(){};er.__typeName="ss.IEquatable";
bE.IEquatable=er;bE.initInterface(er,bE,{equalsT:null});
bE.formatNumber=function cs(fL,n){if(bE.isNullOrUndefined(n)||(n.length==0)||(n=="i")){return fL.toString()
}return bE.netFormatNumber(fL,n,d9.invariantCulture.numberFormat)
};bE.localeFormatNumber=function dj(fL,n){if(bE.isNullOrUndefined(n)||(n.length==0)||(n=="i")){return fL.toLocaleString()
}return bE.netFormatNumber(fL,n,d9.currentCulture.numberFormat)
};bE._commaFormatNumber=function bF(fV,fQ,fL,n){var fN=null;
var fM=fV.indexOf(fL);if(fM>0){fN=fV.substr(fM);fV=fV.substr(0,fM)
}var fU=bE.startsWithString(fV,"-");if(fU){fV=fV.substr(1)
}var fP=0;var fR=fQ[fP];if(fV.length<fR){return(fU?"-":"")+(fN?fV+fN:fV)
}var fS=fV.length;var fX="";var fO=false;while(!fO){var fT=fR;
var fY=fS-fT;if(fY<0){fR+=fY;fT+=fY;fY=0;fO=true}if(!fT){break
}var fW=fV.substr(fY,fT);if(fX.length){fX=fW+n+fX}else{fX=fW
}fS-=fT;if(fP<fQ.length-1){fP++;fR=fQ[fP]}}if(fU){fX="-"+fX
}return fN?fX+fN:fX};bE.netFormatNumber=function dr(fO,n,fP){var fN=(fP&&fP.getFormat(eI))||d9.currentCulture.numberFormat;
var fR="";var fQ=-1;if(n.length>1){fQ=parseInt(n.substr(1),10)
}var fL=n.charAt(0);switch(fL){case"d":case"D":fR=parseInt(Math.abs(fO)).toString();
if(fQ!=-1){fR=bE.padLeftString(fR,fQ,48)}if(fO<0){fR="-"+fR
}break;case"x":case"X":fR=parseInt(Math.abs(fO)).toString(16);
if(fL=="X"){fR=fR.toUpperCase()}if(fQ!=-1){fR=bE.padLeftString(fR,fQ,48)
}break;case"e":case"E":if(fQ==-1){fR=fO.toExponential()
}else{fR=fO.toExponential(fQ)}if(fL=="E"){fR=fR.toUpperCase()
}break;case"f":case"F":case"n":case"N":if(fQ==-1){fQ=fN.numberDecimalDigits
}fR=fO.toFixed(fQ).toString();if(fQ&&(fN.numberDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.numberDecimalSeparator+fR.substr(fM+1)
}if((fL=="n")||(fL=="N")){fR=bE._commaFormatNumber(fR,fN.numberGroupSizes,fN.numberDecimalSeparator,fN.numberGroupSeparator)
}break;case"c":case"C":if(fQ==-1){fQ=fN.currencyDecimalDigits
}fR=Math.abs(fO).toFixed(fQ).toString();if(fQ&&(fN.currencyDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.currencyDecimalSeparator+fR.substr(fM+1)
}fR=bE._commaFormatNumber(fR,fN.currencyGroupSizes,fN.currencyDecimalSeparator,fN.currencyGroupSeparator);
if(fO<0){fR=bE.formatString(fN.currencyNegativePattern,fR)
}else{fR=bE.formatString(fN.currencyPositivePattern,fR)
}break;case"p":case"P":if(fQ==-1){fQ=fN.percentDecimalDigits
}fR=(Math.abs(fO)*100).toFixed(fQ).toString();if(fQ&&(fN.percentDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.percentDecimalSeparator+fR.substr(fM+1)
}fR=bE._commaFormatNumber(fR,fN.percentGroupSizes,fN.percentDecimalSeparator,fN.percentGroupSeparator);
if(fO<0){fR=bE.formatString(fN.percentNegativePattern,fR)
}else{fR=bE.formatString(fN.percentPositivePattern,fR)
}break}return fR};bE.tryParseFloat=function dX(fN,fM){fM.$=0;
var fL=parseFloat(fN,10);if(isNaN(fL)){return false
}fM.$=fL;return true};bE.tryParseBool=function dW(fL,n){if((/^\s*true\s*$/i).test(fL)){n.$=true;
return true}if((/^\s*false\s*$/i).test(fL)){n.$=false;
return true}n.$=false;return false};bE.netSplit=function ds(fQ,fR,fL,fN){var fO=new RegExp(fR.map(bE.regexpEscape).join("|"),"g"),fP=[],fM,n;
for(n=0;;n=fO.lastIndex){if(fM=fO.exec(fQ)){if(fN!==1||fM.index>n){if(fP.length===fL-1){fP.push(fQ.substr(n));
return fP}else{fP.push(fQ.substring(n,fM.index))}}}else{if(fN!==1||n!==fQ.length){fP.push(fQ.substr(n))
}return fP}}};bE.compareStrings=function cb(fL,fM,n){if(n==1){if(fL){fL=fL.toUpperCase()
}if(fM){fM=fM.toUpperCase()}}fL=fL||"";fM=fM||"";if(fL==fM){return 0
}if(fL<fM){return -1}return 1};bE.endsWithString=function cm(n,fL){if(!fL.length){return true
}if(fL.length>n.length){return false}return(n.substr(n.length-fL.length)==fL)
};bE._formatString=function bI(n,fM,fL){if(!bE._formatRE){bE._formatRE=/\{\{|\}\}|\{[^\}\{]+\}/g
}return n.replace(bE._formatRE,function(fQ){if(fQ==="{{"||fQ==="}}"){return fQ.charAt(0)
}var fP=parseInt(fQ.substr(1),10);var fR=fM[fP+1];if(bE.isNullOrUndefined(fR)){return""
}if(bE.isInstanceOfType(fR,et)){var fO=null;var fN=fQ.indexOf(":");
if(fN>0){fO=fQ.substring(fN+1,fQ.length-1)}return bE.format(fR,fO)
}else{return fL?fR.toLocaleString():fR.toString()}})
};bE.formatString=function e1(n){return bE._formatString(n,arguments,false)
};bE.stringFromChar=function dM(n,fL){var fN=n;for(var fM=1;
fM<fL;fM++){fN+=n}return fN};bE.htmlDecode=function cO(n){return n.replace(/&([^;]+);/g,function(fL,fM){if(fM[0]==="#"){return String.fromCharCode(parseInt(fM.substr(1),10))
}switch(fM){case"quot":return'"';case"apos":return"'";
case"amp":return"&";case"lt":return"<";case"gt":return">";
default:return"&"+fM+";"}})};bE.htmlEncode=function cP(n){return n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
};bE.jsEncode=function dd(fL,n){fL=fL.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"');
return n?'"'+fL+'"':fL};bE.indexOfAnyString=function cR(fP,n,fQ,fL){var fO=fP.length;
if(!fO){return -1}n=String.fromCharCode.apply(null,n);
fQ=fQ||0;fL=fL||fO;var fM=fQ+fL-1;if(fM>=fO){fM=fO-1
}for(var fN=fQ;fN<=fM;fN++){if(n.indexOf(fP.charAt(fN))>=0){return fN
}}return -1};bE.insertString=function cZ(fL,n,fO){if(!fO){return fL
}if(!n){return fO+fL}var fM=fL.substr(0,n);var fN=fL.substr(n);
return fM+fO+fN};bE.isNullOrEmptyString=function c7(n){return !n||!n.length
};bE.lastIndexOfAnyString=function df(fP,n,fQ,fL){var fO=fP.length;
if(!fO){return -1}n=String.fromCharCode.apply(null,n);
fQ=fQ||fO-1;fL=fL||fO;var fM=fQ-fL+1;if(fM<0){fM=0}for(var fN=fQ;
fN>=fM;fN--){if(n.indexOf(fP.charAt(fN))>=0){return fN
}}return -1};bE.localeFormatString=function dk(n){return bE._formatString(n,arguments,true)
};bE.padLeftString=function dt(fL,fM,n){if(fL.length<fM){n=String.fromCharCode(n||32);
return bE.stringFromChar(n,fM-fL.length)+fL}return fL
};bE.padRightString=function du(fL,fM,n){if(fL.length<fM){n=String.fromCharCode(n||32);
return fL+bE.stringFromChar(n,fM-fL.length)}return fL
};bE.removeString=function dD(fM,fL,n){if(!n||((fL+n)>this.length)){return fM.substr(0,fL)
}return fM.substr(0,fL)+fM.substr(fL+n)};bE.replaceAllString=function dF(fM,fL,n){n=n||"";
return fM.split(fL).join(n)};bE.startsWithString=function dK(fL,n){if(!n.length){return true
}if(n.length>fL.length){return false}return(fL.substr(0,n.length)==n)
};if(!String.prototype.trim){String.prototype.trim=function e2(){return bE.trimStartString(bE.trimEndString(this))
}}bE.trimEndString=function dT(fL,n){return fL.replace(n?new RegExp("["+String.fromCharCode.apply(null,n)+"]+$"):/\s*$/,"")
};bE.trimStartString=function dU(fL,n){return fL.replace(n?new RegExp("^["+String.fromCharCode.apply(null,n)+"]+"):/^\s*/,"")
};bE.trimString=function dV(fL,n){return bE.trimStartString(bE.trimEndString(fL,n),n)
};bE.lastIndexOfString=function dg(fM,fN,fO,n){var fL=fM.lastIndexOf(fN,fO);
return(fL<(fO-n+1))?-1:fL};bE.indexOfString=function cT(fM,fN,fO,n){var fL=fM.indexOf(fN,fO);
return((fL+fN.length)<=(fO+n))?fL:-1};String.getEnumerator=function(n){var fL=new Object();
fL.array=n;fL.index=-1;fL.moveNext=function(){this.index++;
return(this.index<this.array.length)};fL.reset=function(){this.index=-1
};fL.current=function(){return this.array[this.index].charCodeAt(0)
};fL.dispose=function(){};return fL};bE.divRem=function cl(n,fL,fN){var fM=n%fL;
fN.$=fM;return(n-fM)/fL};bE.round=function dG(fO,fL,fP){var fN=Math.pow(10,fL||0);
fO*=fN;var fQ=(fO>0)|-(fO<0);if(fO%1===0.5*fQ){var fM=Math.floor(fO);
return(fM+(fP?(fQ>0):(fM%2*fQ)))/fN}return Math.round(fO)/fN
};var es=function au(){};es.__typeName="ss.IFormatProvider";
bE.IFormatProvider=es;bE.initInterface(es,bE,{getFormat:null});
var eI=function bo(){};eI.__typeName="ss.NumberFormatInfo";
bE.NumberFormatInfo=eI;bE.initClass(eI,bE,{getFormat:function bp(n){return(n===eI)?this:null
}},null,[es]);eI.invariantInfo=new eI();bE.shallowCopy({naNSymbol:"NaN",negativeSign:"-",positiveSign:"+",negativeInfinitySymbol:"-Infinity",positiveInfinitySymbol:"Infinity",percentSymbol:"%",percentGroupSizes:[3],percentDecimalDigits:2,percentDecimalSeparator:".",percentGroupSeparator:",",percentPositivePattern:0,percentNegativePattern:0,currencySymbol:"$",currencyGroupSizes:[3],currencyDecimalDigits:2,currencyDecimalSeparator:".",currencyGroupSeparator:",",currencyNegativePattern:0,currencyPositivePattern:0,numberGroupSizes:[3],numberDecimalDigits:2,numberDecimalSeparator:".",numberGroupSeparator:","},eI.invariantInfo);
var ea=function C(){};ea.__typeName="ss.DateTimeFormatInfo";
bE.DateTimeFormatInfo=ea;bE.initClass(ea,bE,{getFormat:function D(n){return n===ea?this:null
}},null,[es]);ea.invariantInfo=new ea();bE.shallowCopy({amDesignator:"AM",pmDesignator:"PM",dateSeparator:"/",timeSeparator:":",gmtDateTimePattern:"ddd, dd MMM yyyy HH:mm:ss 'GMT'",universalDateTimePattern:"yyyy-MM-dd HH:mm:ssZ",sortableDateTimePattern:"yyyy-MM-ddTHH:mm:ss",dateTimePattern:"dddd, MMMM dd, yyyy h:mm:ss tt",longDatePattern:"dddd, MMMM dd, yyyy",shortDatePattern:"M/d/yyyy",longTimePattern:"h:mm:ss tt",shortTimePattern:"h:mm tt",firstDayOfWeek:0,dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],minimizedDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December",""],shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},ea.invariantInfo);
var eM=function eS(){this._stopTime=0;this._startTime=0;
this.isRunning=false};eM.startNew=function eX(){var n=new eM();
n.start();return n};if(typeof(window)!=="undefined"&&window.performance&&window.performance.now){eM.frequency=1000000;
eM.isHighResolution=true;eM.getTimestamp=function(){return Math.round(window.performance.now()*1000)
}}else{if(typeof(process)!=="undefined"&&process.hrtime){eM.frequency=1000000000;
eM.isHighResolution=true;eM.getTimestamp=function(){var n=process.hrtime();
return n[0]*1000000000+n[1]}}else{eM.frequency=1000;
eM.isHighResolution=false;eM.getTimestamp=function(){return new Date().valueOf()
}}}eM.__typeName="ss.Stopwatch";bE.Stopwatch=eM;bE.initClass(eM,bE,{reset:function eU(){this._stopTime=this._startTime=eM.getTimestamp();
this.isRunning=false},ticks:function eZ(){return(this.isRunning?eM.getTimestamp():this._stopTime)-this._startTime
},milliseconds:function eT(){return Math.round(this.ticks()/eM.frequency*1000)
},timeSpan:function e0(){return new eR(this.milliseconds()*10000)
},start:function eW(){if(this.isRunning){return}this._startTime=eM.getTimestamp();
this.isRunning=true},stop:function eY(){if(!this.isRunning){return
}this._stopTime=eM.getTimestamp();this.isRunning=false
},restart:function eV(){this.isRunning=false;this.start()
}});bE._flatIndex=function bH(n,fN){if(fN.length!=(n._sizes?n._sizes.length:1)){throw new d3("Invalid number of indices")
}if(fN[0]<0||fN[0]>=(n._sizes?n._sizes[0]:n.length)){throw new d3("Index 0 out of range")
}var fM=fN[0];if(n._sizes){for(var fL=1;fL<n._sizes.length;
fL++){if(fN[fL]<0||fN[fL]>=n._sizes[fL]){throw new d3("Index "+fL+" out of range")
}fM=fM*n._sizes[fL]+fN[fL]}}return fM};bE.arrayGet2=function bW(n,fM){var fL=bE._flatIndex(n,fM);
var fN=n[fL];return typeof fN!=="undefined"?fN:n._defvalue
};bE.arrayGet=function bV(n){return bE.arrayGet2(n,Array.prototype.slice.call(arguments,1))
};bE.arraySet2=function b4(n,fN,fM){var fL=bE._flatIndex(n,fM);
n[fL]=fN};bE.arraySet=function b3(){return bE.arraySet2(arguments[0],arguments[arguments.length-1],Array.prototype.slice.call(arguments,1,arguments.length-1))
};bE.arrayRank=function b1(n){return n._sizes?n._sizes.length:1
};bE.arrayLength=function bY(n,fL){if(fL>=(n._sizes?n._sizes.length:1)){throw new d3("Invalid dimension")
}return n._sizes?n._sizes[fL]:n.length};bE.arrayExtract=function bT(n,fM,fL){if(!bE.isValue(fL)){return n.slice(fM)
}return n.slice(fM,fM+fL)};bE.arrayAddRange=function bR(n,fM){if(fM instanceof Array){n.push.apply(n,fM)
}else{var fL=bE.getEnumerator(fM);try{while(fL.moveNext()){bE.add(n,fL.current())
}}finally{if(bE.isInstanceOfType(fL,en)){bE.cast(fL,en).dispose()
}}}};bE.arrayClone=function bS(n){if(n.length===1){return[n[0]]
}else{return Array.apply(null,n)}};bE.arrayPeekFront=function b0(n){if(n.length){return n[0]
}throw new ex("Array is empty")};bE.arrayPeekBack=function bZ(n){if(n.length){return n[n.length-1]
}throw new ex("Array is empty")};bE.indexOfArray=function cS(n,fM,fN){fN=fN||0;
for(var fL=fN;fL<n.length;fL++){if(bE.staticEquals(n[fL],fM)){return fL
}}return -1};bE.arrayInsertRange=function bX(n,fN,fO){if(fO instanceof Array){if(fN===0){n.unshift.apply(n,fO)
}else{for(var fM=0;fM<fO.length;fM++){n.splice(fN+fM,0,fO[fM])
}}}else{var fL=bE.getEnumerator(fO);try{while(fL.moveNext()){n.insert(fN,fL.current());
fN++}}finally{if(bE.isInstanceOfType(fL,en)){bE.cast(fL,en).dispose()
}}}};if(!Array.prototype.map){Array.prototype.map=function o(n,fM){var fN=this.length;
var fO=new Array(fN);for(var fL=0;fL<fN;fL++){if(fL in this){fO[fL]=n.call(fM,this[fL],fL,this)
}}return fO}}bE.arrayRemoveRange=function b2(n,fM,fL){n.splice(fM,fL)
};if(!Array.prototype.some){Array.prototype.some=function p(n,fM){var fN=this.length;
for(var fL=0;fL<fN;fL++){if(fL in this&&n.call(fM,this[fL],fL,this)){return true
}}return false}}bE.arrayFromEnumerable=function bU(fL){if(!bE.isValue(fL)){return null
}var n=bE.getEnumerator(fL),fM=[];try{while(n.moveNext()){fM.push(n.current())
}}finally{n.dispose()}return fM};bE.multidimArray=function dq(fL,fO){var n=[];
n._defvalue=fL;n._sizes=[arguments[1]];var fN=arguments[1];
for(var fM=2;fM<arguments.length;fM++){fN*=arguments[fM];
n._sizes[fM-1]=arguments[fM]}n.length=fN;return n};
bE.repeat=function dE(fN,n){var fM=[];for(var fL=0;
fL<n;fL++){fM.push(fN)}return fM};bE.utcNow=function dZ(){var n=new Date();
return new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds())
};bE.toUTC=function dR(n){return new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds())
};bE.fromUTC=function dP(n){return new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()))
};bE.today=function dO(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate())
};bE.formatDate=function cr(n,fL){if(bE.isNullOrUndefined(fL)||(fL.length==0)||(fL=="i")){return n.toString()
}if(fL=="id"){return n.toDateString()}if(fL=="it"){return n.toTimeString()
}return bE._netFormatDate(n,fL,false)};bE.localeFormatDate=function di(n,fL){if(bE.isNullOrUndefined(fL)||(fL.length==0)||(fL=="i")){return n.toLocaleString()
}if(fL=="id"){return n.toLocaleDateString()}if(fL=="it"){return n.toLocaleTimeString()
}return bE._netFormatDate(n,fL,true)};bE._netFormatDate=function bM(n,fM,fT){var fL=fT?d9.currentCulture.dateTimeFormat:d9.invariantCulture.dateTimeFormat;
if(fM.length==1){switch(fM){case"f":fM=fL.longDatePattern+" "+fL.shortTimePattern;
break;case"F":fM=fL.dateTimePattern;break;case"d":fM=fL.shortDatePattern;
break;case"D":fM=fL.longDatePattern;break;case"t":fM=fL.shortTimePattern;
break;case"T":fM=fL.longTimePattern;break;case"g":fM=fL.shortDatePattern+" "+fL.shortTimePattern;
break;case"G":fM=fL.shortDatePattern+" "+fL.longTimePattern;
break;case"R":case"r":fL=d9.InvariantCulture.dateTimeFormat;
fM=fL.gmtDateTimePattern;break;case"u":fM=fL.universalDateTimePattern;
break;case"U":fM=fL.dateTimePattern;n=new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds());
break;case"s":fM=fL.sortableDateTimePattern;break}}if(fM.charAt(0)=="%"){fM=fM.substr(1)
}if(!Date._formatRE){Date._formatRE=/'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g
}var fR=Date._formatRE;var fS=new eN();fR.lastIndex=0;
while(true){var fO=fR.lastIndex;var fP=fR.exec(fM);
fS.append(fM.slice(fO,fP?fP.index:fM.length));if(!fP){break
}var fN=fP[0];var fQ=fN;switch(fN){case"dddd":fQ=fL.dayNames[n.getDay()];
break;case"ddd":fQ=fL.shortDayNames[n.getDay()];break;
case"dd":fQ=bE.padLeftString(n.getDate().toString(),2,48);
break;case"d":fQ=n.getDate();break;case"MMMM":fQ=fL.monthNames[n.getMonth()];
break;case"MMM":fQ=fL.shortMonthNames[n.getMonth()];
break;case"MM":fQ=bE.padLeftString((n.getMonth()+1).toString(),2,48);
break;case"M":fQ=(n.getMonth()+1);break;case"yyyy":fQ=n.getFullYear();
break;case"yy":fQ=bE.padLeftString((n.getFullYear()%100).toString(),2,48);
break;case"y":fQ=(n.getFullYear()%100);break;case"h":case"hh":fQ=n.getHours()%12;
if(!fQ){fQ="12"}else{if(fN=="hh"){fQ=bE.padLeftString(fQ.toString(),2,48)
}}break;case"HH":fQ=bE.padLeftString(n.getHours().toString(),2,48);
break;case"H":fQ=n.getHours();break;case"mm":fQ=bE.padLeftString(n.getMinutes().toString(),2,48);
break;case"m":fQ=n.getMinutes();break;case"ss":fQ=bE.padLeftString(n.getSeconds().toString(),2,48);
break;case"s":fQ=n.getSeconds();break;case"t":case"tt":fQ=(n.getHours()<12)?fL.amDesignator:fL.pmDesignator;
if(fN=="t"){fQ=fQ.charAt(0)}break;case"fff":fQ=bE.padLeftString(n.getMilliseconds().toString(),3,48);
break;case"ff":fQ=bE.padLeftString(n.getMilliseconds().toString(),3).substr(0,2);
break;case"f":fQ=bE.padLeftString(n.getMilliseconds().toString(),3).charAt(0);
break;case"z":fQ=n.getTimezoneOffset()/60;fQ=((fQ>=0)?"-":"+")+Math.floor(Math.abs(fQ));
break;case"zz":case"zzz":fQ=n.getTimezoneOffset()/60;
fQ=((fQ>=0)?"-":"+")+Math.floor(bE.padLeftString(Math.abs(fQ)).toString(),2,48);
if(fN=="zzz"){fQ+=fL.timeSeparator+Math.abs(bE.padLeftString(n.getTimezoneOffset()%60).toString(),2,48)
}break;default:if(fQ.charAt(0)=="'"){fQ=fQ.substr(1,fQ.length-2).replace(/\\'/g,"'")
}break}fS.append(fQ)}return fS.toString()};bE._parseExactDate=function bN(f1,fR,fY,f0){fY=(fY&&fY.getFormat(ea))||d9.currentCulture.dateTimeFormat;
var fN=fY.amDesignator,fX=fY.pmDesignator;var fL=function(f5){var f3="1234567890";
for(var f4=0;f4<f5.length;f4++){if(f3.indexOf(f5.charAt(f4))==-1){return false
}}return true};var n=function(f6,f3,f5,f4){for(var f8=f4;
f8>=f5;f8--){var f7=f6.substring(f3,f3+f8);if(f7.length<f5){return null
}if(fL(f7)){return f7}}return null};f1=f1+"";fR=fR+"";
var fU=0;var fT=0;var fP="";var fZ="";var f2=0,fW=1,fQ=1,fS=0,fV=0,fM=0,fO="";
while(fT<fR.length){fP=fR.charAt(fT);fZ="";while((fR.charAt(fT)==fP)&&(fT<fR.length)){fZ+=fR.charAt(fT++)
}if(fZ=="yyyy"||fZ=="yy"||fZ=="y"){if(fZ=="yyyy"){f2=n(f1,fU,4,4)
}if(fZ=="yy"){f2=n(f1,fU,2,2)}if(fZ=="y"){f2=n(f1,fU,2,4)
}if(f2==null){return null}fU+=f2.length;if(f2.length==2){if(f2>30){f2=1900+(f2-0)
}else{f2=2000+(f2-0)}}}else{if(fZ=="MM"||fZ=="M"){fW=n(f1,fU,fZ.length,2);
if(fW==null||(fW<1)||(fW>12)){return null}fU+=fW.length
}else{if(fZ=="dd"||fZ=="d"){fQ=n(f1,fU,fZ.length,2);
if(fQ==null||(fQ<1)||(fQ>31)){return null}fU+=fQ.length
}else{if(fZ=="hh"||fZ=="h"){fS=n(f1,fU,fZ.length,2);
if(fS==null||(fS<1)||(fS>12)){return null}fU+=fS.length
}else{if(fZ=="HH"||fZ=="H"){fS=n(f1,fU,fZ.length,2);
if(fS==null||(fS<0)||(fS>23)){return null}fU+=fS.length
}else{if(fZ=="mm"||fZ=="m"){fV=n(f1,fU,fZ.length,2);
if(fV==null||(fV<0)||(fV>59)){return null}fU+=fV.length
}else{if(fZ=="ss"||fZ=="s"){fM=n(f1,fU,fZ.length,2);
if(fM==null||(fM<0)||(fM>59)){return null}fU+=fM.length
}else{if(fZ=="t"){if(f1.substring(fU,fU+1).toLowerCase()==fN.charAt(0).toLowerCase()){fO=fN
}else{if(f1.substring(fU,fU+1).toLowerCase()==fX.charAt(0).toLowerCase()){fO=fX
}else{return null}}fU+=1}else{if(fZ=="tt"){if(f1.substring(fU,fU+2).toLowerCase()==fN.toLowerCase()){fO=fN
}else{if(f1.substring(fU,fU+2).toLowerCase()==fX.toLowerCase()){fO=fX
}else{return null}}fU+=2}else{if(f1.substring(fU,fU+fZ.length)!=fZ){return null
}else{fU+=fZ.length}}}}}}}}}}}if(fU!=f1.length){return null
}if(fW==2){if(((f2%4==0)&&(f2%100!=0))||(f2%400==0)){if(fQ>29){return null
}}else{if(fQ>28){return null}}}if((fW==4)||(fW==6)||(fW==9)||(fW==11)){if(fQ>30){return null
}}if(fS<12&&fO==fX){fS=fS-0+12}else{if(fS>11&&fO==fN){fS-=12
}}if(f0){return new Date(Date.UTC(f2,fW-1,fQ,fS,fV,fM))
}else{return new Date(f2,fW-1,fQ,fS,fV,fM)}};bE.parseExactDate=function dv(fM,n,fL){return bE._parseExactDate(fM,n,fL,false)
};bE.parseExactDateUTC=function dw(fM,n,fL){return bE._parseExactDate(fM,n,fL,true)
};bE._delegateContains=function bG(fN,fM,fL){for(var n=0;
n<fN.length;n+=2){if(fN[n]===fM&&fN[n+1]===fL){return true
}}return false};bE._mkdel=function bL(fL){var n=function(){if(fL.length==2){return fL[1].apply(fL[0],arguments)
}else{var fM=bE.arrayClone(fL);for(var fN=0;fN<fM.length;
fN+=2){if(bE._delegateContains(fL,fM[fN],fM[fN+1])){fM[fN+1].apply(fM[fN],arguments)
}}return null}};n._targets=fL;return n};bE.mkdel=function dn(fL,n){if(!fL){return n
}return bE._mkdel([fL,n])};bE.delegateCombine=function ci(n,fL){if(!n){if(!fL._targets){return bE.mkdel(null,fL)
}return fL}if(!fL){if(!n._targets){return bE.mkdel(null,n)
}return n}var fM=n._targets?n._targets:[null,n];var fN=fL._targets?fL._targets:[null,fL];
return bE._mkdel(fM.concat(fN))};bE.delegateRemove=function ck(n,fL){if(!n||(n===fL)){return null
}if(!fL){return n}var fQ=n._targets;var fO=null;var fN;
if(fL._targets){fO=fL._targets[0];fN=fL._targets[1]
}else{fN=fL}for(var fM=0;fM<fQ.length;fM+=2){if((fQ[fM]===fO)&&(fQ[fM+1]===fN)){if(fQ.length==2){return null
}var fP=bE.arrayClone(fQ);fP.splice(fM,2);return bE._mkdel(fP)
}}return n};bE.delegateEquals=function cj(n,fL){if(n===fL){return true
}if(!n._targets&&!fL._targets){return false}var fN=n._targets||[null,n],fO=fL._targets||[null,fL];
if(fN.length!=fO.length){return false}for(var fM=0;
fM<fN.length;fM++){if(fN[fM]!==fO[fM]){return false
}}return true};bE.delegateClone=function ch(n){return n._targets?bE._mkdel(n._targets):function(){return n.apply(this,arguments)
}};bE.thisFix=function dN(n){return function(){var fM=[this];
for(var fL=0;fL<arguments.length;fL++){fM.push(arguments[fL])
}return n.apply(n,fM)}};bE.getInvocationList=function cF(n){if(!n._targets){return[n]
}var fM=[];for(var fL=0;fL<n._targets.length;fL+=2){fM.push(bE.mkdel(n._targets[fL],n._targets[fL+1]))
}return fM};bE.regexpEscape=function dy(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
};bE.Debug=aa.Debug||function(){};bE.Debug.__typeName="Debug";
if(!bE.Debug.writeln){bE.Debug.writeln=function H(n){if(aa.console){if(aa.console.debug){aa.console.debug(n);
return}else{if(aa.console.log){aa.return}}}else{if(aa.opera&&aa.opera.postError){aa.opera.postError(n);
return}}}}bE.Debug._fail=function E(n){bE.Debug.writeln(n);
};bE.Debug.assert=function F(n,fL){if(!n){fL="Assert failed: "+fL;
if(confirm(fL+"\r\n\r\nBreak into debugger?")){bE.Debug._fail(fL)
}}};bE.Debug.fail=function G(n){bE.Debug._fail(n)};
var ed=function M(){};ed.__typeName="ss.Enum";bE.Enum=ed;
bE.initClass(ed,bE,{});ed.parse=function O(n,fR){var fT=n.prototype;
if(!bE.isFlags(n)){for(var fL in fT){if(fL===fR){return fT[fL]
}}}else{var fQ=fR.split("|");var fS=0;var fO=true;for(var fN=fQ.length-1;
fN>=0;fN--){var fP=fQ[fN].trim();var fM=false;for(var fL in fT){if(fL===fP){fS|=fT[fL];
fM=true;break}}if(!fM){fO=false;break}}if(fO){return fS
}}throw new d3("Invalid Enumeration Value")};ed.toString=function P(n,fN){var fO=n.prototype;
if(!bE.isFlags(n)||(fN===0)){for(var fL in fO){if(fO[fL]===fN){return fL
}}throw new d3("Invalid Enumeration Value")}else{var fM=[];
for(var fL in fO){if(fO[fL]&fN){bE.add(fM,fL)}}if(!fM.length){throw new d3("Invalid Enumeration Value")
}return fM.join(" | ")}};ed.getValues=function N(n){var fM=[];
var fN=n.prototype;for(var fL in fN){if(fN.hasOwnProperty(fL)){fM.push(fN[fL])
}}return fM};ed.getName=function P(n,fM){var fN=n.prototype;
for(var fL in fN){if(fN.hasOwnProperty(fL)){if(fN[fL]===fM){return fL
}}}throw new d3("Invalid Enumeration Value")};var d9=function A(fL,fM,n){this.name=fL;
this.numberFormat=fM;this.dateTimeFormat=n};d9.__typeName="ss.CultureInfo";
bE.CultureInfo=d9;bE.initClass(d9,bE,{getFormat:function B(n){switch(n){case eI:return this.numberFormat;
case ea:return this.dateTimeFormat;default:return null
}}},null,[es]);d9.invariantCulture=new d9("en-US",eI.invariantInfo,ea.invariantInfo);
d9.currentCulture=d9.invariantCulture;var ep=function aq(){};
ep.__typeName="ss.IEnumerator";bE.IEnumerator=ep;bE.initInterface(ep,bE,{current:null,moveNext:null,reset:null},[en]);
var eo=function ap(){};eo.__typeName="ss.IEnumerable";
bE.IEnumerable=eo;bE.initInterface(eo,bE,{getEnumerator:null});
bE.getEnumerator=function cy(n){return n.getEnumerator?n.getEnumerator():new d6(n)
};var ej=function ak(){};ej.__typeName="ss.ICollection";
bE.ICollection=ej;bE.initInterface(ej,bE,{get_count:null,add:null,clear:null,contains:null,remove:null});
bE.count=function cd(n){return n.get_count?n.get_count():n.length
};bE.add=function bP(fL,n){if(fL.add){fL.add(n)}else{if(bE.isArray(fL)){fL.push(n)
}else{throw new eF()}}};bE.clear=function b6(n){if(n.clear){n.clear()
}else{if(bE.isArray(n)){n.length=0}else{throw new eF()
}}};bE.remove=function dB(fM,fL){if(fM.remove){return fM.remove(fL)
}else{if(bE.isArray(fM)){var n=bE.indexOf(fM,fL);if(n>=0){fM.splice(n,1);
return true}return false}else{throw new eF()}}};bE.contains=function cc(fL,n){if(fL.contains){return fL.contains(n)
}else{return bE.indexOf(fL,n)>=0}};var eR=function fB(n){this.ticks=n||0
};eR.getDefaultValue=eR.createInstance=function fD(){return new eR(0)
};eR.__typeName="ss.TimeSpan";bE.TimeSpan=eR;bE.initClass(eR,bE,{compareTo:function fC(n){return this.ticks<n.ticks?-1:(this.ticks>n.ticks?1:0)
},equals:function fE(n){return bE.isInstanceOfType(n,eR)&&n.ticks===this.ticks
},equalsT:function fF(n){return n.ticks===this.ticks
},toString:function fG(){var n=function(fO,fN){return bE.padLeftString(fO+"",fN||2,48)
};var fM=this.ticks;var fL="";if(Math.abs(fM)>=864000000000){fL+=n((fM/864000000000)|0)+".";
fM%=864000000000}fL+=n(fM/36000000000|0)+":";fM%=36000000000;
fL+=n(fM/600000000|0)+":";fM%=600000000;fL+=n(fM/10000000|0);
fM%=10000000;if(fM>0){fL+="."+n(fM,7)}return fL}},null,[ek,er]);
eR.__class=false;var eq=function ar(){};eq.__typeName="ss.IEqualityComparer";
bE.IEqualityComparer=eq;bE.initInterface(eq,bE,{areEqual:null,getObjectHashCode:null});
var el=function am(){};el.__typeName="ss.IComparer";
bE.IComparer=el;bE.initInterface(el,bE,{compare:null});
bE.unbox=function dY(n){if(!bE.isValue(n)){throw new ex("Nullable object must have a value.")
}return n};var eG=function aZ(fL){var n=function(){};
n.isInstanceOfType=function(fM){return bE.isInstanceOfType(fM,fL)
};bE.registerGenericClassInstance(n,eG,[fL],{},function(){return null
},function(){return[]});return n};eG.__typeName="ss.Nullable$1";
bE.Nullable$1=eG;bE.initGenericClass(eG,bE,1);eG.eq=function a6(n,fL){return !bE.isValue(n)?!bE.isValue(fL):(n===fL)
};eG.ne=function a6(n,fL){return !bE.isValue(n)?bE.isValue(fL):(n!==fL)
};eG.le=function a9(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n<=fL
};eG.ge=function a7(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n>=fL
};eG.lt=function bb(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n<fL
};eG.gt=function a8(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n>fL
};eG.sub=function bl(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n-fL:null
};eG.add=function a0(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n+fL:null
};eG.mod=function bc(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n%fL:null
};eG.div=function a5(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n/fL:null
};eG.mul=function bd(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n*fL:null
};eG.band=function a2(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n&fL:null
};eG.bor=function a3(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n|fL:null
};eG.xor=function bm(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n^fL:null
};eG.shl=function bi(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n<<fL:null
};eG.srs=function bj(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n>>fL:null
};eG.sru=function bk(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n>>>fL:null
};eG.and=function a1(n,fL){if(n===true&&fL===true){return true
}else{if(n===false||fL===false){return false}else{return null
}}};eG.or=function bg(n,fL){if(n===true||fL===true){return true
}else{if(n===false&&fL===false){return false}else{return null
}}};eG.not=function bf(n){return bE.isValue(n)?!n:null
};eG.neg=function be(n){return bE.isValue(n)?-n:null
};eG.pos=function bh(n){return bE.isValue(n)?+n:null
};eG.cpl=function a4(n){return bE.isValue(n)?~n:null
};eG.lift=function ba(){for(var n=0;n<arguments.length;
n++){if(!bE.isValue(arguments[n])){return null}}return arguments[0].apply(null,Array.prototype.slice.call(arguments,1))
};var eu=function aw(){};eu.__typeName="ss.IList";bE.IList=eu;
bE.initInterface(eu,bE,{get_item:null,set_item:null,indexOf:null,insert:null,removeAt:null},[ej,eo]);
bE.getItem=function cG(fL,n){return fL.get_item?fL.get_item(n):fL[n]
};bE.setItem=function dI(fL,n,fM){fL.set_item?fL.set_item(n,fM):(fL[n]=fM)
};bE.indexOf=function cQ(fM,fL){if(bE.isArrayOrTypedArray(fM)){for(var n=0;
n<fM.length;n++){if(bE.staticEquals(fM[n],fL)){return n
}}return -1}else{return fM.indexOf(fL)}};bE.insert=function cY(fM,n,fL){if(fM.insert){fM.insert(n,fL)
}else{if(bE.isArray(fM)){fM.splice(n,0,fL)}else{throw new eF()
}}};bE.removeAt=function dC(fL,n){if(fL.removeAt){fL.removeAt(n)
}else{if(bE.isArray(fL)){fL.splice(n,1)}else{throw new eF()
}}};var em=function an(){};em.__typeName="ss.IDictionary";
bE.IDictionary=em;bE.initInterface(em,bE,{get_item:null,set_item:null,get_keys:null,get_values:null,containsKey:null,add:null,remove:null,tryGetValue:null},[eo]);
var ev=function ax(){};ev.__typeName="ss.Int32";bE.Int32=ev;
bE.initClass(ev,bE,{},Object,[er,ek,et]);ev.__class=false;
ev.isInstanceOfType=function aA(n){return typeof(n)==="number"&&isFinite(n)&&Math.round(n,0)==n
};ev.getDefaultValue=ev.createInstance=function az(){return 0
};ev.div=function ay(n,fL){if(!bE.isValue(n)||!bE.isValue(fL)){return null
}if(fL===0){throw new ec()}return ev.trunc(n/fL)};ev.trunc=function aB(fL){return bE.isValue(fL)?(fL>0?Math.floor(fL):Math.ceil(fL)):null
};ev.tryParse=function aC(fP,fO,fM,fL){fO.$=0;if(!/^[+-]?[0-9]+$/.test(fP)){return 0
}var fN=parseInt(fP,10);if(fN<fM||fN>fL){return false
}fO.$=fN;return true};var eA=function aP(){};eA.__typeName="ss.JsDate";
bE.JsDate=eA;bE.initClass(eA,bE,{},Object,[er,ek]);
eA.createInstance=function aQ(){return new Date()};
eA.isInstanceOfType=function aR(n){return n instanceof Date
};var d6=function q(n){this._array=n;this._index=-1
};d6.__typeName="ss.ArrayEnumerator";bE.ArrayEnumerator=d6;
bE.initClass(d6,bE,{moveNext:function t(){this._index++;
return(this._index<this._array.length)},reset:function u(){this._index=-1
},current:function r(){if(this._index<0||this._index>=this._array.length){throw"Invalid operation"
}return this._array[this._index]},dispose:function s(){}},null,[ep,en]);
var eJ=function bq(n){this._keys=Object.keys(n);this._index=-1;
this._object=n};eJ.__typeName="ss.ObjectEnumerator";
bE.ObjectEnumerator=eJ;bE.initClass(eJ,bE,{moveNext:function bt(){this._index++;
return(this._index<this._keys.length)},reset:function bu(){this._index=-1
},current:function br(){if(this._index<0||this._index>=this._keys.length){throw new ex("Invalid operation")
}var n=this._keys[this._index];return{key:n,value:this._object[n]}
},dispose:function bs(){}},null,[ep,en]);var ee=function Q(){};
ee.__typeName="ss.EqualityComparer";bE.EqualityComparer=ee;
bE.initClass(ee,bE,{areEqual:function R(n,fL){return bE.staticEquals(n,fL)
},getObjectHashCode:function S(n){return bE.isValue(n)?bE.getHashCode(n):0
}},null,[eq]);ee.def=new ee();var d8=function x(n){this.f=n
};d8.__typeName="ss.Comparer";bE.Comparer=d8;bE.initClass(d8,bE,{compare:function y(n,fL){return this.f(n,fL)
}},null,[el]);d8.def=new d8(function z(n,fL){if(!bE.isValue(n)){return !bE.isValue(fL)?0:-1
}else{if(!bE.isValue(fL)){return 1}else{return bE.compare(n,fL)
}}});var d0=function a(n,fL){this._dict=n;this._isKeys=fL
};var eb=function J(fL,fM){var n=function(fS,fO){this.countField=0;
this.buckets={};this.comparer=fO||ee.def;if(bE.isInstanceOfType(fS,em)){var fP=bE.getEnumerator(fS);
try{while(fP.moveNext()){var fN=fP.current();this.add(fN.key,fN.value)
}}finally{if(bE.isInstanceOfType(fP,en)){bE.cast(fP,en).dispose()
}}}else{if(fS){var fR=Object.keys(fS);for(var fQ=0;
fQ<fR.length;fQ++){this.add(fR[fQ],fS[fR[fQ]])}}}};
bE.registerGenericClassInstance(n,eb,[fL,fM],{_setOrAdd:function(fS,fT,fN){var fQ=this.comparer.getObjectHashCode(fS);
var fP={key:fS,value:fT};if(this.buckets.hasOwnProperty(String(fQ))){var fO=this.buckets[fQ];
for(var fR=0;fR<fO.length;fR++){if(this.comparer.areEqual(fO[fR].key,fS)){if(fN){throw new d3("Key "+fS+" already exists.")
}fO[fR]=fP;return}}fO.push(fP)}else{this.buckets[fQ]=[fP]
}this.countField++},add:function(fN,fO){this._setOrAdd(fN,fO,true)
},set_item:function(fN,fO){this._setOrAdd(fN,fO,false)
},_get:function(fR){var fP=this.comparer.getObjectHashCode(fR);
if(this.buckets.hasOwnProperty(String(fP))){var fN=this.buckets[fP];
for(var fQ=0;fQ<fN.length;fQ++){var fO=fN[fQ];if(this.comparer.areEqual(fO.key,fR)){return fO.value!==undefined?fO.value:null
}}}return undefined},get_item:function(fN){var fO=this._get(fN);
if(fO===undefined){throw new eC("Key "+fN+" does not exist.")
}return fO},tryGetValue:function(fN,fP){var fO=this._get(fN);
if(fO!==undefined){fP.$=fO;return true}else{fP.$=bE.getDefaultValue(fM);
return false}},containsKey:function(fQ){var fO=this.comparer.getObjectHashCode(fQ);
if(!this.buckets.hasOwnProperty(String(fO))){return false
}var fN=this.buckets[fO];for(var fP=0;fP<fN.length;
fP++){if(this.comparer.areEqual(fN[fP].key,fQ)){return true
}}return false},clear:function(){this.countField=0;
this.buckets={}},remove:function(fQ){var fO=this.comparer.getObjectHashCode(fQ);
if(!this.buckets.hasOwnProperty(String(fO))){return false
}var fN=this.buckets[fO];for(var fP=0;fP<fN.length;
fP++){if(this.comparer.areEqual(fN[fP].key,fQ)){fN.splice(fP,1);
if(fN.length==0){delete this.buckets[fO]}this.countField--;
return true}}return false},get_count:function(){return this.countField
},_getEnumerator:function(fQ){var fP=Object.keys(this.buckets),fO=-1,fN;
return new ez(function(){if(fO<0||fN>=(this.buckets[fP[fO]].length-1)){fN=-1;
fO++}if(fO>=fP.length){return false}fN++;return true
},function(){return fQ(this.buckets[fP[fO]][fN])},null,this)
},get_keys:function(){return new d0(this,true)},get_values:function(){return new d0(this,false)
},getEnumerator:function(){return this._getEnumerator(function(fN){return fN
})}},function(){return null},function(){return[em,eo]
});return n};eb.__typeName="ss.Dictionary$2";bE.Dictionary$2=eb;
bE.initGenericClass(eb,bE,2);d0.__typeName="ss.$DictionaryCollection";
bE.$DictionaryCollection=d0;bE.initClass(d0,bE,{get_count:function e(){return this._dict.get_count()
},contains:function d(fN){if(this._isKeys){return this._dict.containsKey(fN)
}else{for(var fL in this._dict.buckets){if(this._dict.buckets.hasOwnProperty(fL)){var n=this._dict.buckets[fL];
for(var fM=0;fM<n.length;fM++){if(this._dict.comparer.areEqual(n[fM].value,fN)){return true
}}}}return false}},getEnumerator:function f(n){return this._dict._getEnumerator(this._isKeys?function(fL){return fL.key
}:function(fL){return fL.value})},add:function b(n){throw new ex("Collection is read-only")
},clear:function c(){throw new ex("Collection is read-only")
},remove:function g(){throw new ex("Collection is read-only")
}},null,[eo,ej]);var en=function ao(){};en.__typeName="ss.IDisposable";
bE.IDisposable=en;bE.initInterface(en,bE,{dispose:null});
var eN=function e3(n){this._parts=(bE.isValue(n)&&n!="")?[n]:[];
this.length=bE.isValue(n)?n.length:0};eN.__typeName="ss.StringBuilder";
bE.StringBuilder=eN;bE.initClass(eN,bE,{append:function e4(n){if(bE.isValue(n)){var fL=n.toString();
bE.add(this._parts,fL);this.length+=fL.length}return this
},appendChar:function e5(n){return this.append(String.fromCharCode(n))
},appendLine:function e6(n){this.append(n);this.append("\r\n");
return this},appendLineChar:function e7(n){return this.appendLine(String.fromCharCode(n))
},clear:function e8(){this._parts=[];this.length=0},toString:function e9(){return this._parts.join("")
}});var eL=function bx(fQ){var n=(fQ===undefined)?parseInt(Date.now()%2147483648):parseInt(Math.abs(fQ));
this.inext=0;this.inextp=21;this.seedArray=new Array(56);
for(var fL=0;fL<56;fL++){this.seedArray[fL]=0}n=161803398-n;
if(n<0){n+=2147483648}this.seedArray[55]=n;var fP=1;
for(var fL=1;fL<55;fL++){var fM=(21*fL)%55;this.seedArray[fM]=fP;
fP=n-fP;if(fP<0){fP+=2147483648}n=this.seedArray[fM]
}for(var fN=1;fN<5;fN++){for(var fO=1;fO<56;fO++){this.seedArray[fO]-=this.seedArray[1+(fO+30)%55];
if(this.seedArray[fO]<0){this.seedArray[fO]+=2147483648
}}}};eL.__typeName="ss.Random";bE.Random=eL;bE.initClass(eL,bE,{next:function by(){return this.sample()*2147483648|0
},nextMax:function bB(n){return this.sample()*n|0},nextMinMax:function bC(fL,n){return(this.sample()*(n-fL)+fL)|0
},nextBytes:function bz(n){for(var fL=0;fL<n.length;
fL++){n[fL]=(this.sample()*256)|0}},nextDouble:function bA(){return this.sample()
},sample:function bD(){if(++this.inext>=56){this.inext=1
}if(++this.inextp>=56){this.inextp=1}var n=this.seedArray[this.inext]-this.seedArray[this.inextp];
if(n<0){n+=2147483648}this.seedArray[this.inext]=n;
return n*(1/2147483648)}});var ef=function T(){};ef.__typeName="ss.EventArgs";
bE.EventArgs=ef;bE.initClass(ef,bE,{});ef.Empty=new ef();
var eg=function U(fL,n){this._message=fL||"An error occurred.";
this._innerException=n||null;this._error=new Error()
};eg.__typeName="ss.Exception";bE.Exception=eg;bE.initClass(eg,bE,{get_message:function W(){return this._message
},get_innerException:function V(){return this._innerException
},get_stack:function X(){return this._error.stack}});
eg.wrap=function Y(n){if(bE.isInstanceOfType(n,eg)){return n
}else{if(n instanceof TypeError){return new eH(n.message,new eB(n))
}else{if(n instanceof RangeError){return new d5(null,n.message,new eB(n))
}else{if(n instanceof Error){return new eB(n)}else{return new eg(n.toString())
}}}}};var eE=function aX(fL,n){eg.call(this,fL||"The method or operation is not implemented.",n)
};eE.__typeName="ss.NotImplementedException";bE.NotImplementedException=eE;
bE.initClass(eE,bE,{},eg);var eF=function aY(fL,n){eg.call(this,fL||"Specified method is not supported.",n)
};eF.__typeName="ss.NotSupportedException";bE.NotSupportedException=eF;
bE.initClass(eF,bE,{},eg);var d1=function h(fL,n){this.innerExceptions=bE.isValue(n)?bE.arrayFromEnumerable(n):[];
eg.call(this,fL||"One or more errors occurred.",this.innerExceptions.length?this.innerExceptions[0]:null)
};d1.__typeName="ss.AggregateException";bE.AggregateException=d1;
bE.initClass(d1,bE,{flatten:function i(){var fM=[];
for(var fL=0;fL<this.innerExceptions.length;fL++){var n=this.innerExceptions[fL];
if(bE.isInstanceOfType(n,d1)){fM.push.apply(fM,n.flatten().innerExceptions)
}else{fM.push(n)}}return new d1(this._message,fM)}},eg);
var eK=function bv(n,fM,fL){eg.call(this,fM||(n.length&&n[0]?n[0].toString():"An error occurred"),fL);
this.arguments=bE.arrayClone(n)};eK.__typeName="ss.PromiseException";
bE.PromiseException=eK;bE.initClass(eK,bE,{get_arguments:function bw(){return this._arguments
}},eg);var eB=function aS(n,fM,fL){eg.call(this,fM||n.message,fL);
this.error=n};eB.__typeName="ss.JsErrorException";bE.JsErrorException=eB;
bE.initClass(eB,bE,{get_stack:function X(){return this.error.stack
}},eg);var d3=function k(fL,fM,n){eg.call(this,fL||"Value does not fall within the expected range.",n);
this.paramName=fM||null};d3.__typeName="ss.ArgumentException";
bE.ArgumentException=d3;bE.initClass(d3,bE,{},eg);var d4=function l(fM,fL,n){if(!fL){fL="Value cannot be null.";
if(fM){fL+="\nParameter name: "+fM}}d3.call(this,fL,fM,n)
};d4.__typeName="ss.ArgumentNullException";bE.ArgumentNullException=d4;
bE.initClass(d4,bE,{},d3);var d5=function m(fN,fM,fL,n){if(!fM){fM="Value is out of range.";
if(fN){fM+="\nParameter name: "+fN}}d3.call(this,fM,fN,fL);
this.actualValue=n||null};d5.__typeName="ss.ArgumentOutOfRangeException";
bE.ArgumentOutOfRangeException=d5;bE.initClass(d5,bE,{},d3);
var eh=function Z(fL,n){eg.call(this,fL||"Invalid format.",n)
};eh.__typeName="ss.FormatException";bE.FormatException=eh;
bE.initClass(eh,bE,{},eg);var ec=function K(fL,n){eg.call(this,fL||"Division by 0.",n)
};ec.__typeName="ss.DivideByZeroException";bE.DivideByZeroException=ec;
bE.initClass(ec,bE,{},eg);var ew=function aD(fL,n){eg.call(this,fL||"The cast is not valid.",n)
};ew.__typeName="ss.InvalidCastException";bE.InvalidCastException=ew;
bE.initClass(ew,bE,{},eg);var ex=function aE(fL,n){eg.call(this,fL||"Operation is not valid due to the current state of the object.",n)
};ex.__typeName="ss.InvalidOperationException";bE.InvalidOperationException=ex;
bE.initClass(ex,bE,{},eg);var eH=function bn(fL,n){eg.call(this,fL||"Object is null.",n)
};eH.__typeName="ss.NullReferenceException";bE.NullReferenceException=eH;
bE.initClass(eH,bE,{},eg);var eC=function aT(fL,n){eg.call(this,fL||"Key not found.",n)
};eC.__typeName="ss.KeyNotFoundException";bE.KeyNotFoundException=eC;
bE.initClass(eC,bE,{},eg);var d2=function j(fL,n){eg.call(this,fL||"Ambiguous match.",n)
};d2.__typeName="ss.AmbiguousMatchException";bE.AmbiguousMatchException=d2;
bE.initClass(d2,bE,{},eg);var ey=function aI(fL,n){this._getEnumerator=fL;
this._this=n};ey.__typeName="ss.IteratorBlockEnumerable";
bE.IteratorBlockEnumerable=ey;bE.initClass(ey,bE,{getEnumerator:function aJ(){return this._getEnumerator.call(this._this)
}},null,[eo]);var ez=function aK(fN,fM,fL,n){this._moveNext=fN;
this._getCurrent=fM;this._dispose=fL;this._this=n};
ez.__typeName="ss.IteratorBlockEnumerator";bE.IteratorBlockEnumerator=ez;
bE.initClass(ez,bE,{moveNext:function aN(){try{return this._moveNext.call(this._this)
}catch(n){if(this._dispose){this._dispose.call(this._this)
}throw n}},current:function aL(){return this._getCurrent.call(this._this)
},reset:function aO(){throw new eF("Reset is not supported.")
},dispose:function aM(){if(this._dispose){this._dispose.call(this._this)
}}},null,[ep,en]);var eD=function aU(n){this._valueFactory=n;
this.isValueCreated=false};eD.__typeName="ss.Lazy";
bE.Lazy=eD;bE.initClass(eD,bE,{value:function aV(){if(!this.isValueCreated){this._value=this._valueFactory();
delete this._valueFactory;this.isValueCreated=true}return this._value
}});var eO=function fa(n,fL){this._action=n;this._state=fL;
this.exception=null;this.status=0;this._thens=[];this._result=null
};eO.delay=function fh(n){var fL=new eP();setTimeout(function(){fL.setResult(0)
},n);return fL.task};eO.fromResult=function fm(n){var fL=new eO();
fL.status=5;fL._result=n;return fL};eO.run=function fs(n){var fL=new eP();
setTimeout(function(){try{fL.setResult(n())}catch(fM){fL.setException(eg.wrap(fM))
}},0);return fL.task};eO.whenAll=function fu(fP){var fQ=new eP();
if(fP.length===0){fQ.setResult([])}else{var fO=new Array(fP.length),fN=fP.length,n=false,fL=[];
for(var fM=0;fM<fP.length;fM++){(function(fR){fP[fR].continueWith(function(fS){switch(fS.status){case 5:fO[fR]=fS.getResult();
break;case 6:n=true;break;case 7:bE.arrayAddRange(fL,fS.exception.innerExceptions);
break;default:throw new ex("Invalid task status "+fS.status)
}if(--fN===0){if(fL.length>0){fQ.setException(fL)}else{if(n){fQ.setCanceled()
}else{fQ.setResult(fO)}}}})})(fM)}}return fQ.task};
eO.whenAny=function fv(fL){if(!fL.length){throw new d3("Must wait for at least one task","tasks")
}var fM=new eP();for(var n=0;n<fL.length;n++){fL[n].continueWith(function(fN){switch(fN.status){case 5:fM.trySetResult(fN);
break;case 6:fM.trySetCanceled();break;case 7:fM.trySetException(fN.exception.innerExceptions);
break;default:throw new ex("Invalid task status "+fN.status)
}})}return fM.task};eO.fromDoneCallback=function fj(fO,fM,fN){var fP=new eP(),n;
if(typeof(fM)==="number"){n=Array.prototype.slice.call(arguments,3);
if(fM<0){fM+=n.length+1}}else{n=Array.prototype.slice.call(arguments,2);
fN=fM;fM=n.length}var fL=function(fQ){fP.setResult(fQ)
};n=n.slice(0,fM).concat(fL,n.slice(fM));fO[fN].apply(fO,n);
return fP.task};eO.fromPromise=function fl(fL,n){var fM=new eP();
if(typeof(n)==="number"){n=(function(fN){return function(){return arguments[fN>=0?fN:(arguments.length+fN)]
}})(n)}else{if(typeof(n)!=="function"){n=function(){return Array.prototype.slice.call(arguments,0)
}}}fL.then(function(){fM.setResult(typeof(n)==="function"?n.apply(null,arguments):null)
},function(){fM.setException(new eK(Array.prototype.slice.call(arguments,0)))
});return fM.task};eO.fromNode=function fk(fO,fM,fN){var fP=new eP(),n;
if(typeof(fM)==="function"){n=Array.prototype.slice.call(arguments,3)
}else{n=Array.prototype.slice.call(arguments,2);fN=fM;
fM=function(){return arguments[0]}}var fL=function(fQ){if(fQ){fP.setException(eg.wrap(fQ))
}else{fP.setResult(fM.apply(null,Array.prototype.slice.call(arguments,1)))
}};n.push(fL);fO[fN].apply(fO,n);return fP.task};eO.__typeName="ss.Task";
bE.Task=eO;bE.initClass(eO,bE,{continueWith:function fg(fL){var fN=new eP();
var n=this;var fM=function(){try{fN.setResult(fL(n))
}catch(fO){fN.setException(eg.wrap(fO))}};if(this.isCompleted()){setTimeout(fM,0)
}else{this._thens.push(fM)}return fN.task},start:function ft(){if(this.status!==0){throw new ex("Task was already started.")
}var n=this;this.status=3;setTimeout(function(){try{var fM=n._action(n._state);
delete n._action;delete n._state;n._complete(fM)}catch(fL){n._fail(new d1(null,[eg.wrap(fL)]))
}},0)},_runCallbacks:function ff(){for(var n=0;n<this._thens.length;
n++){this._thens[n](this)}delete this._thens},_complete:function fc(n){if(this.isCompleted()){return false
}this._result=n;this.status=5;this._runCallbacks();
return true},_fail:function fd(n){if(this.isCompleted()){return false
}this.exception=n;this.status=7;this._runCallbacks();
return true},_cancel:function fb(){if(this.isCompleted()){return false
}this.status=6;this._runCallbacks();return true},isCanceled:function fp(){return this.status===6
},isCompleted:function fq(){return this.status>=5},isFaulted:function fr(){return this.status===7
},_getResult:function fe(n){switch(this.status){case 5:return this._result;
case 6:throw new ex("Task was cancelled.");case 7:throw n?this.exception.innerExceptions[0]:this.exception;
default:throw new ex("Task is not yet completed.")}},getResult:function fo(){return this._getResult(false)
},getAwaitedResult:function fn(){return this._getResult(true)
},dispose:function fi(){}},null,[en]);var eQ=function(){};
eQ.__typeName="ss.TaskStatus";bE.TaskStatus=eQ;bE.initEnum(eQ,bE,{created:0,running:3,ranToCompletion:5,canceled:6,faulted:7});
var eP=function fw(){this.task=new eO();this.task.status=3
};eP.__typeName="ss.TaskCompletionSource";bE.TaskCompletionSource=eP;
bE.initClass(eP,bE,{setCanceled:function fx(){if(!this.task._cancel()){throw new ex("Task was already completed.")
}},setResult:function fz(n){if(!this.task._complete(n)){throw new ex("Task was already completed.")
}},setException:function fy(n){if(!this.trySetException(n)){throw new ex("Task was already completed.")
}},trySetCanceled:function fA(){return this.task._cancel()
},trySetResult:function fz(n){return this.task._complete(n)
},trySetException:function fy(n){if(bE.isInstanceOfType(n,eg)){n=[n]
}return this.task._fail(new d1(null,n))}});var d7=function w(){ef.call(this);
this.cancel=false};d7.__typeName="ss.CancelEventArgs";
bE.CancelEventArgs=d7;bE.initClass(d7,bE,{},ef);var ei=function ab(){};
ei.$valid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/ig;
ei.$split=/^(.{8})(.{4})(.{4})(.{4})(.{12})$/;ei.empty="00000000-0000-0000-0000-000000000000";
ei.$rng=new eL();ei.__typeName="ss.Guid";bE.Guid=ei;
bE.initClass(ei,bE,{},Object,[er,ek]);ei.__class=false;
ei.isInstanceOfType=function ag(n){return typeof(n)==="string"&&n.match(ei.$valid)
};ei.getDefaultValue=ei.createInstance=function ac(){return ei.empty
};ei.parse=function ai(fM,n){var fL={};if(ei.tryParse(fM,n,fL)){return fL.$
}throw new eh("Unable to parse UUID")};ei.tryParse=function aj(fO,fL,fN){fN.$=ei.empty;
if(!bE.isValue(fO)){throw new d4("uuid")}if(!fL){var fM=/^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$/ig.exec(fO);
if(fM){fN.$=fM.slice(1).join("-").toLowerCase();return true
}}else{if(fL==="N"){var fM=ei.$split.exec(fO);if(!fM){return false
}fO=fM.slice(1).join("-")}else{if(fL==="B"||fL==="P"){var n=fL==="B";
if(fO[0]!==(n?"{":"(")||fO[fO.length-1]!==(n?"}":")")){return false
}fO=fO.substr(1,fO.length-2)}}if(fO.match(ei.$valid)){fN.$=fO.toLowerCase();
return true}}return false};ei.format=function ad(fL,n){switch(n){case"N":return fL.replace(/-/g,"");
case"B":return"{"+fL+"}";case"P":return"("+fL+")";default:return fL
}};ei.fromBytes=function ae(n){if(!n||n.length!==16){throw new d3("b","Must be 16 bytes")
}var fL=n.map(function(fM){return bE.formatNumber(fM&255,"x2")
}).join("");return ei.$split.exec(fL).slice(1).join("-")
};ei.newGuid=function ah(){var n=Array(16);ei.$rng.nextBytes(n);
n[6]=n[6]&15|64;n[8]=n[8]&191|128;return ei.fromBytes(n)
};ei.getBytes=function af(fN){var n=Array(16);var fM=fN.replace(/-/g,"");
for(var fL=0;fL<16;fL++){n[fL]=parseInt(fM.substr(fL*2,2),16)
}return n};if(aa.ss){for(var aW in bE){if(bE.hasOwnProperty(aW)){aa.ss[aW]=bE[aW]
}}}else{aa.ss=bE}})(global);(function(j,n){var e={Identity:function(s){return s
},True:function(){return true},Blank:function(){}};
var m={Boolean:typeof true,Number:typeof 0,String:typeof"",Object:typeof{},Undefined:typeof n,Function:typeof function(){}};
var o={createLambda:function(w){if(w==null){return e.Identity
}if(typeof w==m.String){if(w==""){return e.Identity
}else{if(w.indexOf("=>")==-1){var C=new RegExp("[$]+","g");
var A=0;var z;while(z=C.exec(w)){var B=z[0].length;
if(B>A){A=B}}var s=[];for(var x=1;x<=A;x++){var u="";
for(var y=0;y<x;y++){u+="$"}s.push(u)}var t=Array.prototype.join.call(s,",");
return new Function(t,"return "+w)}else{var v=w.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
return new Function(v[1],"return "+v[2])}}}return w
},isIEnumerable:function(t){if(typeof Enumerator!==m.Undefined){try{new Enumerator(t);
return true}catch(s){}}return false},defineProperty:(Object.defineProperties!=null)?function(t,s,u){Object.defineProperty(t,s,{enumerable:false,configurable:true,writable:true,value:u})
}:function(t,s,u){t[s]=u},compare:function(s,t){return(s===t)?0:(s>t)?1:-1
},dispose:function(s){if(s!=null){s.dispose()}}};var l={Before:0,Running:1,After:2};
var g=function(t,v,s){var w=new r();var u=l.Before;
this.current=w.current;this.reset=function(){throw new Error("Reset is not supported")
};this.moveNext=function(){try{switch(u){case l.Before:u=l.Running;
t();case l.Running:if(v.apply(w)){return true}else{this.dispose();
return false}case l.After:return false}}catch(x){this.dispose();
throw x}};this.dispose=function(){if(u!=l.Running){return
}try{s()}finally{u=l.After}}};var a={};ss.initAssembly(a,"linq");
ss.initClass(g,a,{},null,[ss.IDisposable]);var r=function(){var s=null;
this.current=function(){return s};this.yieldReturn=function(t){s=t;
return true};this.yieldBreak=function(){return false
}};var d=function(s){this.getEnumerator=s};ss.initClass(d,a,{},null,[ss.IEnumerable]);
d.Utils={};d.Utils.createLambda=function(s){return o.createLambda(s)
};d.Utils.createEnumerable=function(s){return new d(s)
};d.Utils.createEnumerator=function(t,u,s){return new g(t,u,s)
};d.Utils.extendTo=function(v){var w=v.prototype;var s;
if(v===Array){s=b.prototype;o.defineProperty(w,"getSource",function(){return this
})}else{s=d.prototype;o.defineProperty(w,"getEnumerator",function(){return d.from(this).getEnumerator()
})}for(var u in s){var t=s[u];if(w[u]==t){continue}if(w[u]!=null){u=u+"ByLinq";
if(w[u]==t){continue}}if(t instanceof Function){o.defineProperty(w,u,t)
}}};d.choice=function(){var s=arguments;return new d(function(){return new g(function(){s=(s[0] instanceof Array)?s[0]:(s[0].getEnumerator!=null)?s[0].toArray():s
},function(){return this.yieldReturn(s[Math.floor(Math.random()*s.length)])
},e.Blank)})};d.cycle=function(){var s=arguments;return new d(function(){var t=0;
return new g(function(){s=(s[0] instanceof Array)?s[0]:(s[0].getEnumerator!=null)?s[0].toArray():s
},function(){if(t>=s.length){t=0}return this.yieldReturn(s[t++])
},e.Blank)})};d.empty=function(){return new d(function(){return new g(e.Blank,function(){return false
},e.Blank)})};d.from=function(u){if(u==null){return d.empty()
}if(u instanceof d){return u}if(typeof u==m.Number||typeof u==m.Boolean){return d.repeat(u,1)
}if(typeof u==m.String){return new d(function(){var v=0;
return new g(e.Blank,function(){return(v<u.length)?this.yieldReturn(u.charAt(v++)):false
},e.Blank)})}var t=ss.safeCast(u,ss.IEnumerable);if(t){var s;
return new d(function(){return new g(function(){s=ss.getEnumerator(t)
},function(){var v=s.moveNext();return v?this.yieldReturn(s.current()):false
},function(){var v=ss.safeCast(s,ss.IDisposable);if(v){v.dispose()
}})})}if(typeof u!=m.Function){if(typeof u.length==m.Number){return new b(u)
}if(!(u instanceof Object)&&o.isIEnumerable(u)){return new d(function(){var w=true;
var v;return new g(function(){v=new Enumerator(u)},function(){if(w){w=false
}else{v.moveNext()}return(v.atEnd())?false:this.yieldReturn(v.item())
},e.Blank)})}if(typeof Windows===m.Object&&typeof u.first===m.Function){return new d(function(){var w=true;
var v;return new g(function(){v=u.first()},function(){if(w){w=false
}else{v.moveNext()}return(v.hasCurrent)?this.yieldReturn(v.current):this.yieldBreak()
},e.Blank)})}}return new d(function(){var v=[];var w=0;
return new g(function(){for(var x in u){var y=u[x];
if(!(y instanceof Function)&&Object.prototype.hasOwnProperty.call(u,x)){v.push({key:x,value:y})
}}},function(){return(w<v.length)?this.yieldReturn(v[w++]):false
},e.Blank)})},d.make=function(s){return d.repeat(s,1)
};d.matches=function(t,u,s){if(s==null){s=""}if(u instanceof RegExp){s+=(u.ignoreCase)?"i":"";
s+=(u.multiline)?"m":"";u=u.source}if(s.indexOf("g")===-1){s+="g"
}return new d(function(){var v;return new g(function(){v=new RegExp(u,s)
},function(){var w=v.exec(t);return(w)?this.yieldReturn(w):false
},e.Blank)})};d.range=function(t,s,u){if(u==null){u=1
}return new d(function(){var w;var v=0;return new g(function(){w=t-u
},function(){return(v++<s)?this.yieldReturn(w+=u):this.yieldBreak()
},e.Blank)})};d.rangeDown=function(t,s,u){if(u==null){u=1
}return new d(function(){var w;var v=0;return new g(function(){w=t+u
},function(){return(v++<s)?this.yieldReturn(w-=u):this.yieldBreak()
},e.Blank)})};d.rangeTo=function(s,u,t){if(t==null){t=1
}if(s<u){return new d(function(){var v;return new g(function(){v=s-t
},function(){var w=v+=t;return(w<=u)?this.yieldReturn(w):this.yieldBreak()
},e.Blank)})}else{return new d(function(){var v;return new g(function(){v=s+t
},function(){var w=v-=t;return(w>=u)?this.yieldReturn(w):this.yieldBreak()
},e.Blank)})}};d.repeat=function(t,s){if(s!=null){return d.repeat(t).take(s)
}return new d(function(){return new g(e.Blank,function(){return this.yieldReturn(t)
},e.Blank)})};d.repeatWithFinalize=function(t,s){t=o.createLambda(t);
s=o.createLambda(s);return new d(function(){var u;return new g(function(){u=t()
},function(){return this.yieldReturn(u)},function(){if(u!=null){s(u);
u=null}})})};d.generate=function(t,s){if(s!=null){return d.generate(t).take(s)
}t=o.createLambda(t);return new d(function(){return new g(e.Blank,function(){return this.yieldReturn(t())
},e.Blank)})};d.toInfinity=function(s,t){if(s==null){s=0
}if(t==null){t=1}return new d(function(){var u;return new g(function(){u=s-t
},function(){return this.yieldReturn(u+=t)},e.Blank)
})};d.toNegativeInfinity=function(s,t){if(s==null){s=0
}if(t==null){t=1}return new d(function(){var u;return new g(function(){u=s+t
},function(){return this.yieldReturn(u-=t)},e.Blank)
})};d.unfold=function(t,s){s=o.createLambda(s);return new d(function(){var u=true;
var v;return new g(e.Blank,function(){if(u){u=false;
v=t;return this.yieldReturn(v)}v=s(v);return this.yieldReturn(v)
},e.Blank)})};d.defer=function(s){return new d(function(){var t;
return new g(function(){t=d.from(s()).getEnumerator()
},function(){return(t.moveNext())?this.yieldReturn(t.current()):this.yieldBreak()
},function(){o.dispose(t)})})};d.prototype.traverseBreadthFirst=function(s,t){var u=this;
s=o.createLambda(s);t=o.createLambda(t);return new d(function(){var w;
var x=0;var v=[];return new g(function(){w=u.getEnumerator()
},function(){while(true){if(w.moveNext()){v.push(w.current());
return this.yieldReturn(t(w.current(),x))}var y=d.from(v).selectMany(function(z){return s(z)
});if(!y.any()){return false}else{x++;v=[];o.dispose(w);
w=y.getEnumerator()}}},function(){o.dispose(w)})})};
d.prototype.traverseDepthFirst=function(s,t){var u=this;
s=o.createLambda(s);t=o.createLambda(t);return new d(function(){var w=[];
var v;return new g(function(){v=u.getEnumerator()},function(){while(true){if(v.moveNext()){var x=t(v.current(),w.length);
w.push(v);v=d.from(s(v.current())).getEnumerator();
return this.yieldReturn(x)}if(w.length<=0){return false
}o.dispose(v);v=w.pop()}},function(){try{o.dispose(v)
}finally{d.from(w).forEach(function(x){x.dispose()})
}})})};d.prototype.flatten=function(){var s=this;return new d(function(){var t;
var u=null;return new g(function(){t=s.getEnumerator()
},function(){while(true){if(u!=null){if(u.moveNext()){return this.yieldReturn(u.current())
}else{u=null}}if(t.moveNext()){if(t.current() instanceof Array){o.dispose(u);
u=d.from(t.current()).selectMany(e.Identity).flatten().getEnumerator();
continue}else{return this.yieldReturn(t.current())}}return false
}},function(){try{o.dispose(t)}finally{o.dispose(u)
}})})};d.prototype.recordwise=function(s){var t=this;
s=o.createLambda(s);return new d(function(){var u;return new g(function(){u=t.getEnumerator();
u.moveNext()},function(){var v=u.current();return(u.moveNext())?this.yieldReturn(s(v,u.current())):false
},function(){o.dispose(u)})})};d.prototype.scan=function(u,s){var t;
if(s==null){s=o.createLambda(u);t=false}else{s=o.createLambda(s);
t=true}var v=this;return new d(function(){var w;var y;
var x=true;return new g(function(){w=v.getEnumerator()
},function(){if(x){x=false;if(!t){if(w.moveNext()){return this.yieldReturn(y=w.current())
}}else{return this.yieldReturn(y=u)}}return(w.moveNext())?this.yieldReturn(y=s(y,w.current())):false
},function(){o.dispose(w)})})};d.prototype.select=function(s){s=o.createLambda(s);
if(s.length<=1){return new q(this,null,s)}else{var t=this;
return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){return(u.moveNext())?this.yieldReturn(s(u.current(),v++)):false
},function(){o.dispose(u)})})}};d.prototype.selectMany=function(s,t){var u=this;
s=o.createLambda(s);if(t==null){t=function(v,w){return w
}}t=o.createLambda(t);return new d(function(){var v;
var x=n;var w=0;return new g(function(){v=u.getEnumerator()
},function(){if(x===n){if(!v.moveNext()){return false
}}do{if(x==null){var y=s(v.current(),w++);x=d.from(y).getEnumerator()
}if(x.moveNext()){return this.yieldReturn(t(v.current(),x.current()))
}o.dispose(x);x=null}while(v.moveNext());return false
},function(){try{o.dispose(v)}finally{o.dispose(x)}})
})};d.prototype.where=function(s){s=o.createLambda(s);
if(s.length<=1){return new p(this,s)}else{var t=this;
return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){while(u.moveNext()){if(s(u.current(),v++)){return this.yieldReturn(u.current())
}}return false},function(){o.dispose(u)})})}};d.prototype.choose=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){while(u.moveNext()){var w=s(u.current(),v++);
if(w!=null){return this.yieldReturn(w)}}return this.yieldBreak()
},function(){o.dispose(u)})})};d.prototype.ofType=function(t){var s=this;
return new d(function(){var u;return new g(function(){u=ss.getEnumerator(s)
},function(){while(u.moveNext()){var w=ss.safeCast(u.current(),t);
if(ss.isValue(w)){return this.yieldReturn(w)}}return false
},function(){o.dispose(u)})})};d.prototype.zip=function(){var s=arguments;
var u=o.createLambda(arguments[arguments.length-1]);
var v=this;if(arguments.length==2){var t=arguments[0];
return new d(function(){var w;var y;var x=0;return new g(function(){w=v.getEnumerator();
y=d.from(t).getEnumerator()},function(){if(w.moveNext()&&y.moveNext()){return this.yieldReturn(u(w.current(),y.current(),x++))
}return false},function(){try{o.dispose(w)}finally{o.dispose(y)
}})})}else{return new d(function(){var w;var x=0;return new g(function(){var y=d.make(v).concat(d.from(s).takeExceptLast().select(d.from)).select(function(z){return z.getEnumerator()
}).toArray();w=d.from(y)},function(){if(w.all(function(z){return z.moveNext()
})){var y=w.select(function(z){return z.current()}).toArray();
y.push(x++);return this.yieldReturn(u.apply(null,y))
}else{return this.yieldBreak()}},function(){d.from(w).forEach(o.dispose)
})})}};d.prototype.merge=function(){var s=arguments;
var t=this;return new d(function(){var u;var v=-1;return new g(function(){u=d.make(t).concat(d.from(s).select(d.from)).select(function(w){return w.getEnumerator()
}).toArray()},function(){while(u.length>0){v=(v>=u.length-1)?0:v+1;
var w=u[v];if(w.moveNext()){return this.yieldReturn(w.current())
}else{w.dispose();u.splice(v--,1)}}return this.yieldBreak()
},function(){d.from(u).forEach(o.dispose)})})};d.prototype.join=function(t,v,u,w,s){v=o.createLambda(v);
u=o.createLambda(u);w=o.createLambda(w);var x=this;
return new d(function(){var B;var A;var z=null;var y=0;
return new g(function(){B=x.getEnumerator();A=d.from(t).toLookup(u,e.Identity,s)
},function(){while(true){if(z!=null){var C=z[y++];if(C!==n){return this.yieldReturn(w(B.current(),C))
}C=null;y=0}if(B.moveNext()){var D=v(B.current());z=A.get(D).toArray()
}else{return false}}},function(){o.dispose(B)})})};
d.prototype.groupJoin=function(t,v,u,w,s){v=o.createLambda(v);
u=o.createLambda(u);w=o.createLambda(w);var x=this;
return new d(function(){var y=x.getEnumerator();var z=null;
return new g(function(){y=x.getEnumerator();z=d.from(t).toLookup(u,e.Identity,s)
},function(){if(y.moveNext()){var A=z.get(v(y.current()));
return this.yieldReturn(w(y.current(),A))}return false
},function(){o.dispose(y)})})};d.prototype.all=function(s){s=o.createLambda(s);
var t=true;this.forEach(function(u){if(!s(u)){t=false;
return false}});return t};d.prototype.any=function(t){t=o.createLambda(t);
var s=this.getEnumerator();try{if(arguments.length==0){return s.moveNext()
}while(s.moveNext()){if(t(s.current())){return true
}}return false}finally{o.dispose(s)}};d.prototype.isEmpty=function(){return !this.any()
};d.prototype.concat=function(){var u=this;if(arguments.length==1){var t=arguments[0];
return new d(function(){var v;var w;return new g(function(){v=u.getEnumerator()
},function(){if(w==null){if(v.moveNext()){return this.yieldReturn(v.current())
}w=d.from(t).getEnumerator()}if(w.moveNext()){return this.yieldReturn(w.current())
}return false},function(){try{o.dispose(v)}finally{o.dispose(w)
}})})}else{var s=arguments;return new d(function(){var v;
return new g(function(){v=d.make(u).concat(d.from(s).select(d.from)).select(function(w){return w.getEnumerator()
}).toArray()},function(){while(v.length>0){var w=v[0];
if(w.moveNext()){return this.yieldReturn(w.current())
}else{w.dispose();v.splice(0,1)}}return this.yieldBreak()
},function(){d.from(v).forEach(o.dispose)})})}};d.prototype.insert=function(s,t){var u=this;
return new d(function(){var w;var y;var v=0;var x=false;
return new g(function(){w=u.getEnumerator();y=d.from(t).getEnumerator()
},function(){if(v==s&&y.moveNext()){x=true;return this.yieldReturn(y.current())
}if(w.moveNext()){v++;return this.yieldReturn(w.current())
}if(!x&&y.moveNext()){return this.yieldReturn(y.current())
}return false},function(){try{o.dispose(w)}finally{o.dispose(y)
}})})};d.prototype.alternate=function(s){var t=this;
return new d(function(){var w;var x;var v;var u;return new g(function(){if(s instanceof Array||s.getEnumerator!=null){v=d.from(d.from(s).toArray())
}else{v=d.make(s)}x=t.getEnumerator();if(x.moveNext()){w=x.current()
}},function(){while(true){if(u!=null){if(u.moveNext()){return this.yieldReturn(u.current())
}else{u=null}}if(w==null&&x.moveNext()){w=x.current();
u=v.getEnumerator();continue}else{if(w!=null){var y=w;
w=null;return this.yieldReturn(y)}}return this.yieldBreak()
}},function(){try{o.dispose(x)}finally{o.dispose(u)
}})})};d.prototype.contains=function(u,s){s=s||ss.EqualityComparer.def;
var t=this.getEnumerator();try{while(t.moveNext()){if(s.areEqual(t.current(),u)){return true
}}return false}finally{o.dispose(t)}};d.prototype.defaultIfEmpty=function(s){var t=this;
if(s===n){s=null}return new d(function(){var u;var v=true;
return new g(function(){u=t.getEnumerator()},function(){if(u.moveNext()){v=false;
return this.yieldReturn(u.current())}else{if(v){v=false;
return this.yieldReturn(s)}}return false},function(){o.dispose(u)
})})};d.prototype.distinct=function(s){return this.except(d.empty(),s)
};d.prototype.distinctUntilChanged=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var v;var u;var w;
return new g(function(){v=t.getEnumerator()},function(){while(v.moveNext()){var x=s(v.current());
if(w){w=false;u=x;return this.yieldReturn(v.current())
}if(u===x){continue}u=x;return this.yieldReturn(v.current())
}return this.yieldBreak()},function(){o.dispose(v)})
})};d.prototype.except=function(t,s){var u=this;return new d(function(){var v;
var w;return new g(function(){v=u.getEnumerator();w=new (ss.makeGenericType(ss.Dictionary$2,[Object,Object]))(null,s);
d.from(t).forEach(function(x){w.add(x)})},function(){while(v.moveNext()){var x=v.current();
if(!w.containsKey(x)){w.add(x);return this.yieldReturn(x)
}}return false},function(){o.dispose(v)})})};d.prototype.intersect=function(t,s){var u=this;
return new d(function(){var v;var w;var x;return new g(function(){v=u.getEnumerator();
w=new (ss.makeGenericType(ss.Dictionary$2,[Object,Object]))(null,s);
d.from(t).forEach(function(y){w.add(y)});x=new (ss.makeGenericType(ss.Dictionary$2,[Object,Object]))(null,s)
},function(){while(v.moveNext()){var y=v.current();
if(!x.containsKey(y)&&w.containsKey(y)){x.add(y);return this.yieldReturn(y)
}}return false},function(){o.dispose(v)})})};d.prototype.sequenceEqual=function(u,s){s=s||ss.EqualityComparer.def;
var t=this.getEnumerator();try{var v=d.from(u).getEnumerator();
try{while(t.moveNext()){if(!v.moveNext()||!s.areEqual(t.current(),v.current())){return false
}}if(v.moveNext()){return false}return true}finally{o.dispose(v)
}}finally{o.dispose(t)}};d.prototype.union=function(t,s){var u=this;
return new d(function(){var v;var x;var w;return new g(function(){v=u.getEnumerator();
w=new (ss.makeGenericType(ss.Dictionary$2,[Object,Object]))(null,s)
},function(){var y;if(x===n){while(v.moveNext()){y=v.current();
if(!w.containsKey(y)){w.add(y);return this.yieldReturn(y)
}}x=d.from(t).getEnumerator()}while(x.moveNext()){y=x.current();
if(!w.containsKey(y)){w.add(y);return this.yieldReturn(y)
}}return false},function(){try{o.dispose(v)}finally{o.dispose(x)
}})})};d.prototype.orderBy=function(t,s){return new i(this,t,s,false)
};d.prototype.orderByDescending=function(t,s){return new i(this,t,s,true)
};d.prototype.reverse=function(){var s=this;return new d(function(){var t;
var u;return new g(function(){t=s.toArray();u=t.length
},function(){return(u>0)?this.yieldReturn(t[--u]):false
},e.Blank)})};d.prototype.shuffle=function(){var s=this;
return new d(function(){var t;return new g(function(){t=s.toArray()
},function(){if(t.length>0){var u=Math.floor(Math.random()*t.length);
return this.yieldReturn(t.splice(u,1)[0])}return false
},e.Blank)})};d.prototype.weightedSample=function(t){t=o.createLambda(t);
var s=this;return new d(function(){var u;var v=0;return new g(function(){u=s.choose(function(y){var w=t(y);
if(w<=0){return null}v+=w;return{value:y,bound:v}}).toArray()
},function(){if(u.length>0){var w=Math.floor(Math.random()*v)+1;
var y=-1;var z=u.length;while(z-y>1){var x=Math.floor((y+z)/2);
if(u[x].bound>=w){z=x}else{y=x}}return this.yieldReturn(u[z].value)
}return this.yieldBreak()},e.Blank)})};d.prototype.groupBy=function(u,t,v,s){var w=this;
u=o.createLambda(u);t=o.createLambda(t);if(v!=null){v=o.createLambda(v)
}return new d(function(){var x;return new g(function(){x=w.toLookup(u,t,s).toEnumerable().getEnumerator()
},function(){while(x.moveNext()){return(v==null)?this.yieldReturn(x.current()):this.yieldReturn(v(x.current().key(),x.current()))
}return false},function(){o.dispose(x)})})};d.prototype.partitionBy=function(v,t,w,s){var x=this;
v=o.createLambda(v);t=o.createLambda(t);s=s||ss.EqualityComparer.def;
var u;if(w==null){u=false;w=function(z,y){return new f(z,y)
}}else{u=true;w=o.createLambda(w)}return new d(function(){var y;
var A;var z=[];return new g(function(){y=x.getEnumerator();
if(y.moveNext()){A=v(y.current());z.push(t(y.current()))
}},function(){var B;while((B=y.moveNext())==true){if(s.areEqual(A,v(y.current()))){z.push(t(y.current()))
}else{break}}if(z.length>0){var C=(u)?w(A,d.from(z)):w(A,z);
if(B){A=v(y.current());z=[t(y.current())]}else{z=[]
}return this.yieldReturn(C)}return false},function(){o.dispose(y)
})})};d.prototype.buffer=function(s){var t=this;return new d(function(){var u;
return new g(function(){u=t.getEnumerator()},function(){var v=[];
var w=0;while(u.moveNext()){v.push(u.current());if(++w>=s){return this.yieldReturn(v)
}}if(v.length>0){return this.yieldReturn(v)}return false
},function(){o.dispose(u)})})};d.prototype.aggregate=function(u,s,t){t=o.createLambda(t);
return t(this.scan(u,s,t).last())};d.prototype.average=function(t){t=o.createLambda(t);
var u=0;var s=0;this.forEach(function(v){u+=t(v);++s
});return u/s};d.prototype.count=function(t){t=(t==null)?e.True:o.createLambda(t);
var s=0;this.forEach(function(v,u){if(t(v,u)){++s}});
return s};d.prototype.max=function(s){if(s==null){s=e.Identity
}return this.select(s).aggregate(function(t,u){return(t>u)?t:u
})};d.prototype.min=function(s){if(s==null){s=e.Identity
}return this.select(s).aggregate(function(t,u){return(t<u)?t:u
})};d.prototype.maxBy=function(s){s=o.createLambda(s);
return this.aggregate(function(t,u){return(s(t)>s(u))?t:u
})};d.prototype.minBy=function(s){s=o.createLambda(s);
return this.aggregate(function(t,u){return(s(t)<s(u))?t:u
})};d.prototype.sum=function(s){if(s==null){s=e.Identity
}return this.select(s).aggregate(0,function(t,u){return t+u
})};d.prototype.elementAt=function(t){var u;var s=false;
this.forEach(function(w,v){if(v==t){u=w;s=true;return false
}});if(!s){throw new Error("index is less than 0 or greater than or equal to the number of elements in source.")
}return u};d.prototype.elementAtOrDefault=function(u,s){if(s===n){s=null
}var v;var t=false;this.forEach(function(y,w){if(w==u){v=y;
t=true;return false}});return(!t)?s:v};d.prototype.first=function(t){if(t!=null){return this.where(t).first()
}var u;var s=false;this.forEach(function(v){u=v;s=true;
return false});if(!s){throw new Error("first:No element satisfies the condition.")
}return u};d.prototype.firstOrDefault=function(u,s){if(s===n){s=null
}if(u!=null){return this.where(u).firstOrDefault(null,s)
}var v;var t=false;this.forEach(function(w){v=w;t=true;
return false});return(!t)?s:v};d.prototype.last=function(t){if(t!=null){return this.where(t).last()
}var u;var s=false;this.forEach(function(v){s=true;
u=v});if(!s){throw new Error("last:No element satisfies the condition.")
}return u};d.prototype.lastOrDefault=function(u,s){if(s===n){s=null
}if(u!=null){return this.where(u).lastOrDefault(null,s)
}var v;var t=false;this.forEach(function(w){t=true;
v=w});return(!t)?s:v};d.prototype.single=function(t){if(t!=null){return this.where(t).single()
}var u;var s=false;this.forEach(function(v){if(!s){s=true;
u=v}else{throw new Error("single:sequence contains more than one element.")
}});if(!s){throw new Error("single:No element satisfies the condition.")
}return u};d.prototype.singleOrDefault=function(u,s){if(s===n){s=null
}if(u!=null){return this.where(u).singleOrDefault(null,s)
}var v;var t=false;this.forEach(function(w){if(!t){t=true;
v=w}else{throw new Error("single:sequence contains more than one element.")
}});return(!t)?s:v};d.prototype.skip=function(s){var t=this;
return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator();
while(v++<s&&u.moveNext()){}},function(){return(u.moveNext())?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.skipWhile=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;var v=0;var w=false;
return new g(function(){u=t.getEnumerator()},function(){while(!w){if(u.moveNext()){if(!s(u.current(),v++)){w=true;
return this.yieldReturn(u.current())}continue}else{return false
}}return(u.moveNext())?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.take=function(s){var t=this;
return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){return(v++<s&&u.moveNext())?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.takeWhile=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){return(u.moveNext()&&s(u.current(),v++))?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.takeExceptLast=function(s){if(s==null){s=1
}var t=this;return new d(function(){if(s<=0){return t.getEnumerator()
}var u;var v=[];return new g(function(){u=t.getEnumerator()
},function(){while(u.moveNext()){if(v.length==s){v.push(u.current());
return this.yieldReturn(v.shift())}v.push(u.current())
}return false},function(){o.dispose(u)})})};d.prototype.takeFromLast=function(s){if(s<=0||s==null){return d.empty()
}var t=this;return new d(function(){var w;var u;var v=[];
return new g(function(){w=t.getEnumerator()},function(){while(w.moveNext()){if(v.length==s){v.shift()
}v.push(w.current())}if(u==null){u=d.from(v).getEnumerator()
}return(u.moveNext())?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.indexOf=function(u,s){var t=null;
if(typeof(u)===m.Function){this.forEach(function(w,v){if(u(w,v)){t=v;
return false}})}else{s=s||ss.EqualityComparer.def;this.forEach(function(w,v){if(s.areEqual(w,u)){t=v;
return false}})}return(t!==null)?t:-1};d.prototype.lastIndexOf=function(t,s){var u=-1;
if(typeof(t)===m.Function){this.forEach(function(w,v){if(t(w,v)){u=v
}})}else{s=s||ss.EqualityComparer.def;this.forEach(function(w,v){if(s.areEqual(w,t)){u=v
}})}return u};d.prototype.asEnumerable=function(){return d.from(this)
};d.prototype.toArray=function(){var s=[];this.forEach(function(t){s.push(t)
});return s};d.prototype.toLookup=function(v,u,s){v=o.createLambda(v);
u=o.createLambda(u);var t=new (ss.makeGenericType(ss.Dictionary$2,[Object,Object]))(null,s);
var w=[];this.forEach(function(B){var A=v(B);var z=u(B);
var y={$:null};if(t.tryGetValue(A,y)){y.$.push(z)}else{w.push(A);
t.add(A,[z])}});return new h(t,w)};d.prototype.toObject=function(t,s){t=o.createLambda(t);
s=o.createLambda(s);var u={};this.forEach(function(v){u[t(v)]=s(v)
});return u};d.prototype.toDictionary=function(v,u,w,x,s){v=o.createLambda(v);
u=o.createLambda(u);var t=new (ss.makeGenericType(ss.Dictionary$2,[w,x]))(null,s);
this.forEach(function(y){t.add(v(y),u(y))});return t
};d.prototype.toJSONString=function(s,t){if(typeof JSON===m.Undefined||JSON.stringify==null){throw new Error("toJSONString can't find JSON.stringify. This works native JSON support Browser or include json2.js")
}return JSON.stringify(this.toArray(),s,t)};d.prototype.toJoinedString=function(t,s){if(t==null){t=""
}if(s==null){s=e.Identity}return this.select(s).toArray().join(t)
};d.prototype.doAction=function(s){var t=this;s=o.createLambda(s);
return new d(function(){var u;var v=0;return new g(function(){u=t.getEnumerator()
},function(){if(u.moveNext()){s(u.current(),v++);return this.yieldReturn(u.current())
}return false},function(){o.dispose(u)})})};d.prototype.forEach=function(s){s=o.createLambda(s);
var u=0;var t=this.getEnumerator();try{while(t.moveNext()){if(s(t.current(),u++)===false){break
}}}finally{o.dispose(t)}};d.prototype.write=function(u,t){if(u==null){u=""
}t=o.createLambda(t);var s=true;this.forEach(function(v){if(s){s=false
}else{document.write(u)}document.write(t(v))})};d.prototype.writeLine=function(s){s=o.createLambda(s);
this.forEach(function(t){document.writeln(s(t)+"<br />")
})};d.prototype.force=function(){var s=this.getEnumerator();
try{while(s.moveNext()){}}finally{o.dispose(s)}};d.prototype.letBind=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;return new g(function(){u=d.from(s(t)).getEnumerator()
},function(){return(u.moveNext())?this.yieldReturn(u.current()):false
},function(){o.dispose(u)})})};d.prototype.share=function(){var u=this;
var t;var s=false;return new c(function(){return new g(function(){if(t==null){t=u.getEnumerator()
}},function(){if(s){throw new Error("enumerator is disposed")
}return(t.moveNext())?this.yieldReturn(t.current()):false
},e.Blank)},function(){s=true;o.dispose(t)})};d.prototype.memoize=function(){var v=this;
var s;var u;var t=false;return new c(function(){var w=-1;
return new g(function(){if(u==null){u=v.getEnumerator();
s=[]}},function(){if(t){throw new Error("enumerator is disposed")
}w++;if(s.length<=w){return(u.moveNext())?this.yieldReturn(s[w]=u.current()):false
}return this.yieldReturn(s[w])},e.Blank)},function(){t=true;
o.dispose(u);s=null})};d.prototype.catchError=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;return new g(function(){u=t.getEnumerator()
},function(){try{return(u.moveNext())?this.yieldReturn(u.current()):false
}catch(v){s(v);return false}},function(){o.dispose(u)
})})};d.prototype.finallyAction=function(s){s=o.createLambda(s);
var t=this;return new d(function(){var u;return new g(function(){u=t.getEnumerator()
},function(){return(u.moveNext())?this.yieldReturn(u.current()):false
},function(){try{o.dispose(u)}finally{s()}})})};d.prototype.log=function(s){s=o.createLambda(s);
return this.doAction(function(t){if(typeof console!==m.Undefined){}})
};d.prototype.trace=function(s,t){if(s==null){s="Trace"
}t=o.createLambda(t);return this.doAction(function(u){if(typeof console!==m.Undefined){}})
};var i=function(w,u,s,t,v){this.source=w;this.keySelector=o.createLambda(u);
this.comparer=s||ss.Comparer.def;this.descending=t;
this.parent=v};i.prototype=new d();i.prototype.createOrderedEnumerable=function(u,s,t){return new i(this.source,u,s,t,this)
};i.prototype.thenBy=function(t,s){return this.createOrderedEnumerable(t,s,false)
};i.prototype.thenByDescending=function(t,s){return this.createOrderedEnumerable(t,s,true)
};i.prototype.getEnumerator=function(){var v=this;var s;
var u;var t=0;return new g(function(){s=[];u=[];v.source.forEach(function(y,x){s.push(y);
u.push(x)});var w=k.create(v,null);w.GenerateKeys(s);
u.sort(function(x,y){return w.compare(x,y)})},function(){return(t<u.length)?this.yieldReturn(s[u[t++]]):false
},e.Blank)};var k=function(v,t,u,s){this.keySelector=v;
this.comparer=t;this.descending=u;this.child=s;this.keys=null
};k.create=function(u,t){var s=new k(u.keySelector,u.comparer,u.descending,t);
if(u.parent!=null){return k.create(u.parent,s)}return s
};k.prototype.GenerateKeys=function(w){var v=w.length;
var u=this.keySelector;var t=new Array(v);for(var s=0;
s<v;s++){t[s]=u(w[s])}this.keys=t;if(this.child!=null){this.child.GenerateKeys(w)
}};k.prototype.compare=function(t,u){var s=this.comparer.compare(this.keys[t],this.keys[u]);
if(s==0){if(this.child!=null){return this.child.compare(t,u)
}return o.compare(t,u)}return(this.descending)?-s:s
};var c=function(t,s){this.dispose=s;d.call(this,t)
};c.prototype=new d();var b=function(s){this.getSource=function(){return s
}};b.prototype=new d();b.prototype.any=function(s){return(s==null)?(this.getSource().length>0):d.prototype.any.apply(this,arguments)
};b.prototype.count=function(s){return(s==null)?this.getSource().length:d.prototype.count.apply(this,arguments)
};b.prototype.elementAt=function(s){var t=this.getSource();
return(0<=s&&s<t.length)?t[s]:d.prototype.elementAt.apply(this,arguments)
};b.prototype.elementAtOrDefault=function(t,s){if(s===n){s=null
}var u=this.getSource();return(0<=t&&t<u.length)?u[t]:s
};b.prototype.first=function(s){var t=this.getSource();
return(s==null&&t.length>0)?t[0]:d.prototype.first.apply(this,arguments)
};b.prototype.firstOrDefault=function(t,s){if(s===n){s=null
}if(t!=null){return d.prototype.firstOrDefault.apply(this,arguments)
}var u=this.getSource();return u.length>0?u[0]:s};b.prototype.last=function(s){var t=this.getSource();
return(s==null&&t.length>0)?t[t.length-1]:d.prototype.last.apply(this,arguments)
};b.prototype.lastOrDefault=function(t,s){if(s===n){s=null
}if(t!=null){return d.prototype.lastOrDefault.apply(this,arguments)
}var u=this.getSource();return u.length>0?u[u.length-1]:s
};b.prototype.skip=function(s){var t=this.getSource();
return new d(function(){var u;return new g(function(){u=(s<0)?0:s
},function(){return(u<t.length)?this.yieldReturn(t[u++]):false
},e.Blank)})};b.prototype.takeExceptLast=function(s){if(s==null){s=1
}return this.take(this.getSource().length-s)};b.prototype.takeFromLast=function(s){return this.skip(this.getSource().length-s)
};b.prototype.reverse=function(){var s=this.getSource();
return new d(function(){var t;return new g(function(){t=s.length
},function(){return(t>0)?this.yieldReturn(s[--t]):false
},e.Blank)})};b.prototype.sequenceEqual=function(t,s){if((t instanceof b||t instanceof Array)&&s==null&&d.from(t).count()!=this.count()){return false
}return d.prototype.sequenceEqual.apply(this,arguments)
};b.prototype.toJoinedString=function(t,s){var u=this.getSource();
if(s!=null||!(u instanceof Array)){return d.prototype.toJoinedString.apply(this,arguments)
}if(t==null){t=""}return u.join(t)};b.prototype.getEnumerator=function(){return new ss.ArrayEnumerator(this.getSource())
};var p=function(t,s){this.prevSource=t;this.prevPredicate=s
};p.prototype=new d();p.prototype.where=function(t){t=o.createLambda(t);
if(t.length<=1){var u=this.prevPredicate;var s=function(v){return u(v)&&t(v)
};return new p(this.prevSource,s)}else{return d.prototype.where.call(this,t)
}};p.prototype.select=function(s){s=o.createLambda(s);
return(s.length<=1)?new q(this.prevSource,this.prevPredicate,s):d.prototype.select.call(this,s)
};p.prototype.getEnumerator=function(){var t=this.prevPredicate;
var u=this.prevSource;var s;return new g(function(){s=u.getEnumerator()
},function(){while(s.moveNext()){if(t(s.current())){return this.yieldReturn(s.current())
}}return false},function(){o.dispose(s)})};var q=function(u,s,t){this.prevSource=u;
this.prevPredicate=s;this.prevSelector=t};q.prototype=new d();
q.prototype.where=function(s){s=o.createLambda(s);return(s.length<=1)?new p(this,s):d.prototype.where.call(this,s)
};q.prototype.select=function(u){u=o.createLambda(u);
if(u.length<=1){var t=this.prevSelector;var s=function(v){return u(t(v))
};return new q(this.prevSource,this.prevPredicate,s)
}else{return d.prototype.select.call(this,u)}};q.prototype.getEnumerator=function(){var t=this.prevPredicate;
var u=this.prevSelector;var v=this.prevSource;var s;
return new g(function(){s=v.getEnumerator()},function(){while(s.moveNext()){if(t==null||t(s.current())){return this.yieldReturn(u(s.current()))
}}return false},function(){o.dispose(s)})};var h=function(s,t){this.count=function(){return s.get_count()
};this.get=function(u){var w={$:null};var v=s.tryGetValue(u,w);
return d.from(v?w.$:[])};this.contains=function(u){return s.containsKey(u)
};this.toEnumerable=function(){return d.from(t).select(function(u){return new f(u,s.get_item(u))
})};this.getEnumerator=function(){return this.toEnumerable().getEnumerator()
}};ss.initClass(h,a,{},null,[ss.IEnumerable]);var f=function(t,s){this.key=function(){return t
};b.call(this,s)};f.prototype=new b();if(typeof define===m.Function&&define.amd){define("linqjs",[],function(){return d
});j.Enumerable=d}else{if(typeof module!==m.Undefined&&module.exports){module.exports=d;
global.Enumerable=d}else{j.Enumerable=d}}})(this);(function(){var aa={};
global.VEL=global.VEL||{};global.VEL.Wordwall=global.VEL.Wordwall||{};
global.VEL.Wordwall.Global=global.VEL.Wordwall.Global||{};
global.VEL.Wordwall.Global.Enums=global.VEL.Wordwall.Global.Enums||{};
global.VEL.Wordwall.Global.Extensions=global.VEL.Wordwall.Global.Extensions||{};
global.VEL.Wordwall.Global.Interop=global.VEL.Wordwall.Global.Interop||{};
global.VEL.Wordwall.Global.Json=global.VEL.Wordwall.Global.Json||{};
global.VEL.Wordwall.Global.Json.GoogleClassroom=global.VEL.Wordwall.Global.Json.GoogleClassroom||{};
global.VEL.Wordwall.Global.Serialization=global.VEL.Wordwall.Global.Serialization||{};
global.VEL.Wordwall.Global.Server=global.VEL.Wordwall.Global.Server||{};
ss.initAssembly(aa,"VEL.Wordwall.Global");var ac=function(){};
ac.__typeName="ServerHelper";ac.get_isLoggedIn=function(){return ServerModel.userId!==0
};ac.get_isGuest=function(){return ServerModel.userId===0
};ac.get_htmlDecodedActivityTitle=function(){return(ss.isNullOrEmptyString(ServerModel.htmlEcodedActivityTitle)?ServerModel.htmlEcodedActivityTitle:ss.htmlDecode(ServerModel.htmlEcodedActivityTitle))
};global.ServerHelper=ac;var aV=function(){};aV.__typeName="VEL.Wordwall.Global.Enums.ActivityOptionsScope";
global.VEL.Wordwall.Global.Enums.ActivityOptionsScope=aV;
var aX=function(){};aX.__typeName="VEL.Wordwall.Global.Enums.AudioSetting";
global.VEL.Wordwall.Global.Enums.AudioSetting=aX;var aZ=function(){};
aZ.__typeName="VEL.Wordwall.Global.Enums.EventType";
global.VEL.Wordwall.Global.Enums.EventType=aZ;var a1=function(){};
a1.__typeName="VEL.Wordwall.Global.Enums.ExperimentTriggerType";
global.VEL.Wordwall.Global.Enums.ExperimentTriggerType=a1;
var a3=function(){};a3.__typeName="VEL.Wordwall.Global.Enums.ExportEnum";
global.VEL.Wordwall.Global.Enums.ExportEnum=a3;var a5=function(){};
a5.__typeName="VEL.Wordwall.Global.Enums.FeatureRuleTargetType";
global.VEL.Wordwall.Global.Enums.FeatureRuleTargetType=a5;
var a7=function(){};a7.__typeName="VEL.Wordwall.Global.Enums.FeatureSwitchType";
global.VEL.Wordwall.Global.Enums.FeatureSwitchType=a7;
var a9=function(){};a9.__typeName="VEL.Wordwall.Global.Enums.FormatEnum";
global.VEL.Wordwall.Global.Enums.FormatEnum=a9;var bR=function(){};
bR.__typeName="VEL.Wordwall.Global.Enums.GameOverOptionsEnum";
global.VEL.Wordwall.Global.Enums.GameOverOptionsEnum=bR;
var bT=function(){};bT.__typeName="VEL.Wordwall.Global.Enums.GoogleClassroomAssignToOption";
global.VEL.Wordwall.Global.Enums.GoogleClassroomAssignToOption=bT;
var bV=function(){};bV.__typeName="VEL.Wordwall.Global.Enums.MyActivitiesVariation";
global.VEL.Wordwall.Global.Enums.MyActivitiesVariation=bV;
var bX=function(){};bX.__typeName="VEL.Wordwall.Global.Enums.PageIds";
global.VEL.Wordwall.Global.Enums.PageIds=bX;var bZ=function(){};
bZ.__typeName="VEL.Wordwall.Global.Enums.RegistrationEnum";
global.VEL.Wordwall.Global.Enums.RegistrationEnum=bZ;
var b1=function(){};b1.__typeName="VEL.Wordwall.Global.Enums.ThemeActions";
global.VEL.Wordwall.Global.Enums.ThemeActions=b1;var b3=function(){};
b3.__typeName="VEL.Wordwall.Global.Extensions.DateTimeExtensions";
b3.toUnix=function(a){return a-new Date(1970,1-1,1)
};b3.fromUnix=function(a){return new Date(a)};global.VEL.Wordwall.Global.Extensions.DateTimeExtensions=b3;
var b5=function(){this.x=0;this.y=0};b5.__typeName="VEL.Wordwall.Global.Extensions.IntPoint";
b5.$ctor1=function(a,b){this.x=0;this.y=0;this.x=a;
this.y=b};global.VEL.Wordwall.Global.Extensions.IntPoint=b5;
var b7=function(){};b7.__typeName="VEL.Wordwall.Global.Extensions.NumberExtensions";
b7.clamp=function(a){return function(b,c,d){if(ss.isNullOrUndefined(b)){return b
}if(ss.compare(b,c)<0){return c}if(ss.compare(b,d)>0){return d
}return b}};global.VEL.Wordwall.Global.Extensions.NumberExtensions=b7;
var b9=function(){};b9.__typeName="VEL.Wordwall.Global.Extensions.StringExtensions";
b9.toArrayOfIntegers=function(a){return(ss.isNullOrEmptyString(a)?[]:Enumerable.from(a.split(String.fromCharCode(44))).select(function(b){return parseInt(b)
}).toArray())};global.VEL.Wordwall.Global.Extensions.StringExtensions=b9;
var cb=function(){};cb.__typeName="VEL.Wordwall.Global.Interop.Constants";
global.VEL.Wordwall.Global.Interop.Constants=cb;var cd=function(){};
cd.__typeName="VEL.Wordwall.Global.Interop.Constants$Blob";
global.VEL.Wordwall.Global.Interop.Constants$Blob=cd;
var cf=function(){};cf.__typeName="VEL.Wordwall.Global.Interop.Constants$Cdn";
global.VEL.Wordwall.Global.Interop.Constants$Cdn=cf;
var ch=function(){};ch.__typeName="VEL.Wordwall.Global.Interop.Constants$ContentSounds";
global.VEL.Wordwall.Global.Interop.Constants$ContentSounds=ch;
var cj=function(){};cj.__typeName="VEL.Wordwall.Global.Interop.Constants$Homework";
global.VEL.Wordwall.Global.Interop.Constants$Homework=cj;
var cl=function(){};cl.__typeName="VEL.Wordwall.Global.Interop.Constants$Sound";
global.VEL.Wordwall.Global.Interop.Constants$Sound=cl;
var ab=function(){};ab.__typeName="VEL.Wordwall.Global.Interop.Constants$ThemeBlobStorage";
global.VEL.Wordwall.Global.Interop.Constants$ThemeBlobStorage=ab;
var ad=function(){this.ActivityId=0;this.ThemeId=0;
this.BookmarkId=0;this.TemplateId=0;this.Author=null;
this.AuthorId=0;this.ParentFolderId=0;this.TemplateName=null;
this.Guid=null;this.IsShared=false;this.IsShareable=false;
this.IsEditable=false;this.CanHomework=false;this.Thumbnail=null;
this.HasResults=false;this.HasCopyrightInfringement=false;
this.Likes=0;this.FontStackId=0;bQ.call(this)};ad.__typeName="VEL.Wordwall.Global.Json.ActivityInfo";
global.VEL.Wordwall.Global.Json.ActivityInfo=ad;var aW=function(){this.ActivityID=0;
this.ActivityGuid=null};aW.__typeName="VEL.Wordwall.Global.Json.ActivityReference";
global.VEL.Wordwall.Global.Json.ActivityReference=aW;
var aY=function(a){var b=function(){this.Asset=ss.getDefaultValue(a);
this.Message=null};ss.registerGenericClassInstance(b,aY,[a],{},function(){return null
},function(){return[]});return b};aY.__typeName="VEL.Wordwall.Global.Json.AddAssetResponse$1";
ss.initGenericClass(aY,aa,1);global.VEL.Wordwall.Global.Json.AddAssetResponse$1=aY;
var a0=function(){this.Name=null;this.AgeBandId=null
};a0.__typeName="VEL.Wordwall.Global.Json.AgeBandData";
global.VEL.Wordwall.Global.Json.AgeBandData=a0;var a2=function(){this.ThemeId=0;
this.Index=0;this.SortIndex=0;this.Name=null;this.FullName=null;
this.XmlFullName=null;this.Parts=null;this.Url=null;
this.FileSize=0};a2.__typeName="VEL.Wordwall.Global.Json.Asset";
global.VEL.Wordwall.Global.Json.Asset=a2;var a4=function(){this.TagName=null;
this.Type=null;this.Animation="";this.Shuffle=false;
this.Volume=1;this.SoundAssets=null};a4.__typeName="VEL.Wordwall.Global.Json.AudioAsset";
global.VEL.Wordwall.Global.Json.AudioAsset=a4;var a6=function(){this.TagName=null;
this.Type=null;this.LiveAudioAsset=null;this.EditAudioAsset=null
};a6.__typeName="VEL.Wordwall.Global.Json.AudioWorkItem";
global.VEL.Wordwall.Global.Json.AudioWorkItem=a6;var a8=function(){this.Msg=null;
this.Cta=null;this.Url=null};a8.__typeName="VEL.Wordwall.Global.Json.BannerJson";
global.VEL.Wordwall.Global.Json.BannerJson=a8;var bQ=function(){this.Name=null;
this.Plays=0;this.ModifiedUnix=0;this.LastPlayedUnix=0;
this.IsInRecycleBin=false};bQ.__typeName="VEL.Wordwall.Global.Json.BaseInfo";
global.VEL.Wordwall.Global.Json.BaseInfo=bQ;var bS=function(){this.CanSave=false;
this.Message=null};bS.__typeName="VEL.Wordwall.Global.Json.CanSaveXmlData";
global.VEL.Wordwall.Global.Json.CanSaveXmlData=bS;var bU=function(){this.Themes=null
};bU.__typeName="VEL.Wordwall.Global.Json.EditImageAssetsData";
global.VEL.Wordwall.Global.Json.EditImageAssetsData=bU;
var bW=function(){this.Themes=null;this.RootFolderPath=null;
this.TemplatesRequirements=null};bW.__typeName="VEL.Wordwall.Global.Json.EditSoundAssetsData";
global.VEL.Wordwall.Global.Json.EditSoundAssetsData=bW;
var bY=function(){this.ErrorMessage=null};bY.__typeName="VEL.Wordwall.Global.Json.ErrorJson";
global.VEL.Wordwall.Global.Json.ErrorJson=bY;var b0=function(){this.FolderId=0;
this.ParentFolderId=0;this.Level=0;this.Path=null;this.ItemCount=0;
bQ.call(this)};b0.__typeName="VEL.Wordwall.Global.Json.FolderInfo";
global.VEL.Wordwall.Global.Json.FolderInfo=b0;var b2=function(){this.AgeBands=null
};b2.__typeName="VEL.Wordwall.Global.Json.GetAgeBandsResultJson";
global.VEL.Wordwall.Global.Json.GetAgeBandsResultJson=b2;
var b4=function(){this.Subjects=null};b4.__typeName="VEL.Wordwall.Global.Json.GetSubjectsResultJson";
global.VEL.Wordwall.Global.Json.GetSubjectsResultJson=b4;
var b6=function(){this.HomeworkId=0;this.Title=null;
this.Url=null;this.Screenshot=null;this.ActivityId=0;
this.ActivityGuid=null;this.ThemeId=0;this.EndTime=null;
this.EndTimeString=null;this.Registration=0;this.GameOver=0
};b6.__typeName="VEL.Wordwall.Global.Json.HomeworkInfo";
global.VEL.Wordwall.Global.Json.HomeworkInfo=b6;var b8=function(){this.HomeworkSubmissionId=0
};b8.__typeName="VEL.Wordwall.Global.Json.HomeworkSubmissionInfo";
global.VEL.Wordwall.Global.Json.HomeworkSubmissionInfo=b8;
var ca=function(){a2.call(this)};ca.__typeName="VEL.Wordwall.Global.Json.ImageAsset";
global.VEL.Wordwall.Global.Json.ImageAsset=ca;var cc=function(){this.Name=null;
this.LiveImageAssets=null;this.EditImageAssets=null
};cc.__typeName="VEL.Wordwall.Global.Json.ImageAssetImage";
global.VEL.Wordwall.Global.Json.ImageAssetImage=cc;
var ce=function(){this.Id=0;this.Name=null;this.CurrentUserId=null;
this.XmlAssets=null};ce.__typeName="VEL.Wordwall.Global.Json.ImageAssetTheme";
global.VEL.Wordwall.Global.Json.ImageAssetTheme=ce;
var cg=function(){};cg.__typeName="VEL.Wordwall.Global.Json.ImageSizeEnum";
global.VEL.Wordwall.Global.Json.ImageSizeEnum=cg;var ci=function(){this.entryId=0;
this.name=null;this.score=0;this.time=0};ci.__typeName="VEL.Wordwall.Global.Json.LeaderboardEntryJson";
global.VEL.Wordwall.Global.Json.LeaderboardEntryJson=ci;
var ck=function(){};ck.__typeName="VEL.Wordwall.Global.Json.LeaderboardEnum";
global.VEL.Wordwall.Global.Json.LeaderboardEnum=ck;
var cm=function(){this.enabled=false;this.allowDuplicates=false;
this.entryCount=0;this.removalTime=0;this.error=null
};cm.__typeName="VEL.Wordwall.Global.Json.LeaderboardOptionJson";
global.VEL.Wordwall.Global.Json.LeaderboardOptionJson=cm;
var ae=function(){this.ImageAssets=null;this.RootFolderPath=null
};ae.__typeName="VEL.Wordwall.Global.Json.ManageImageAssetsData";
global.VEL.Wordwall.Global.Json.ManageImageAssetsData=ae;
var ag=function(){this.SoundAssets=null;this.RootFolderPath=null
};ag.__typeName="VEL.Wordwall.Global.Json.ManageSoundAssetsData";
global.VEL.Wordwall.Global.Json.ManageSoundAssetsData=ag;
var ai=function(){this.Activities=null;this.Folders=null;
this.Bookmarks=null;this.Breadcrumbs=null};ai.__typeName="VEL.Wordwall.Global.Json.MyActivitiesData";
global.VEL.Wordwall.Global.Json.MyActivitiesData=ai;
var ak=function(){this.Data=null;this.IsBlocked=false;
this.IsOk=false};ak.__typeName="VEL.Wordwall.Global.Json.MyActivitiesDuplicateResponse";
global.VEL.Wordwall.Global.Json.MyActivitiesDuplicateResponse=ak;
var am=function(){this.Results=null;this.Folders=null;
this.Breadcrumbs=null};am.__typeName="VEL.Wordwall.Global.Json.MyResultsData";
global.VEL.Wordwall.Global.Json.MyResultsData=am;var ao=function(){this.Success=false;
this.Code=null;this.ConnectionId=null};ao.__typeName="VEL.Wordwall.Global.Json.OpenInfo";
global.VEL.Wordwall.Global.Json.OpenInfo=ao;var aq=function(){this.Amount=0;
this.Currency=null};aq.__typeName="VEL.Wordwall.Global.Json.PriceJson";
global.VEL.Wordwall.Global.Json.PriceJson=aq;var at=function(){this.Pdf=null;
this.Screen200=null;this.Screen400=null;this.Screen800=null
};at.__typeName="VEL.Wordwall.Global.Json.PrintJson";
global.VEL.Wordwall.Global.Json.PrintJson=at;var av=function(){this.Ok=false;
this.Message=null};av.__typeName="VEL.Wordwall.Global.Json.RenewalJson";
global.VEL.Wordwall.Global.Json.RenewalJson=av;var ax=function(){this.Title=null;
this.Type=0;this.ActivityId=0;this.ActivityGuid=null;
this.ResultId=0;this.ParentFolderId=0;this.UrlCode=null;
this.TemplateName=null;this.NumberOfPlayers=0;this.Modified=null;
this.Deadline=null;this.IsClosed=false;this.ShareableLink=null;
this.IsInRecycleBin=false;this.IsGoogleClassroom=false;
this.Thumbnail=null};ax.__typeName="VEL.Wordwall.Global.Json.ResultInfo";
global.VEL.Wordwall.Global.Json.ResultInfo=ax;var az=function(){};
az.__typeName="VEL.Wordwall.Global.Json.ResultTypeEnum";
global.VEL.Wordwall.Global.Json.ResultTypeEnum=az;var aB=function(){this.Volume=1;
this.Pitch=0;this.Scene="";a2.call(this)};aB.__typeName="VEL.Wordwall.Global.Json.SoundAsset";
global.VEL.Wordwall.Global.Json.SoundAsset=aB;var aD=function(){this.Audios=null;
this.Id=0;this.Name=null;this.CurrentUserId=null;this.XmlContent=null;
this.Requirements=null};aD.__typeName="VEL.Wordwall.Global.Json.SoundAssetTheme";
global.VEL.Wordwall.Global.Json.SoundAssetTheme=aD;
var aF=function(){this.Name=null;this.SubjectId=null
};aF.__typeName="VEL.Wordwall.Global.Json.SubjectData";
global.VEL.Wordwall.Global.Json.SubjectData=aF;var aH=function(){this.RedirectTo=null;
this.Error=null;this.ClientSecret=null};aH.__typeName="VEL.Wordwall.Global.Json.SubscribeJson";
global.VEL.Wordwall.Global.Json.SubscribeJson=aH;var aJ=function(){this.Success=false;
this.Error=null};aJ.__typeName="VEL.Wordwall.Global.Json.TagResultJson";
global.VEL.Wordwall.Global.Json.TagResultJson=aJ;var aL=function(){this.Tag=null;
this.Text=null;this.SoundTypes=null};aL.__typeName="VEL.Wordwall.Global.Json.TemplateRequirements";
global.VEL.Wordwall.Global.Json.TemplateRequirements=aL;
var aM=function(){this.Name=null;this.AnimationSounds=null
};aM.__typeName="VEL.Wordwall.Global.Json.ThemeRequirements";
global.VEL.Wordwall.Global.Json.ThemeRequirements=aM;
var aN=function(){this.UserId=null;this.WorkName=null;
this.IsMyWork=false};aN.__typeName="VEL.Wordwall.Global.Json.ThemeResourceWork";
global.VEL.Wordwall.Global.Json.ThemeResourceWork=aN;
var aO=function(){this.Text=null;this.Value=null;this.ValidationMessage=null
};aO.__typeName="VEL.Wordwall.Global.Json.ThemeTemplateOption";
global.VEL.Wordwall.Global.Json.ThemeTemplateOption=aO;
var aP=function(){this.PlayUrlPattern=null;this.TemplateOptions=null
};aP.__typeName="VEL.Wordwall.Global.Json.ThemeTemplatesData";
global.VEL.Wordwall.Global.Json.ThemeTemplatesData=aP;
var aQ=function(){this.Unix=0;this.Readable=null;this.Editable=null
};aQ.__typeName="VEL.Wordwall.Global.Json.TimeInfo";
global.VEL.Wordwall.Global.Json.TimeInfo=aQ;var aR=function(){this.Translation=null
};aR.__typeName="VEL.Wordwall.Global.Json.TranslateResultJson";
global.VEL.Wordwall.Global.Json.TranslateResultJson=aR;
var aS=function(){this.MaleId=null;this.FemaleId=null;
this.DisplayName=null;this.LanguageId=0;this.LocaleId=0;
this.IsDefault=false};aS.__typeName="VEL.Wordwall.Global.Json.TtsOption";
global.VEL.Wordwall.Global.Json.TtsOption=aS;var aT=function(){this.Content=null;
this.Deleted=false;this.Changed=false;a2.call(this)
};aT.__typeName="VEL.Wordwall.Global.Json.XmlAsset";
global.VEL.Wordwall.Global.Json.XmlAsset=aT;var aU=function(){this.id=null;
this.name=null};aU.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Course";
global.VEL.Wordwall.Global.Json.GoogleClassroom.Course=aU;
var af=function(){this.courseId=null;this.id=null;this.title=null;
this.materials=null;this.state=null;this.alternateLink=null;
this.dueDate=null;this.dueTime=null;this.maxPoints=null;
this.workType=null;this.assigneeMode=null;this.individualStudentsOptions=null
};af.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.CourseWork";
global.VEL.Wordwall.Global.Json.GoogleClassroom.CourseWork=af;
var ah=function(){this.year=0;this.month=0;this.day=0
};ah.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Date";
ah.create=function(a){var b=ss.toUTC(a);var c=new ah();
c.year=b.getFullYear();c.month=b.getMonth()+1;c.day=b.getDate();
return c};ah.create$1=function(a){return(ss.isValue(a)?ah.create(ss.unbox(a)):null)
};global.VEL.Wordwall.Global.Json.GoogleClassroom.Date=ah;
var aj=function(){this.message=null;this.statusCode=0;
this.errorCode=null};aj.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.GoogleClassroomError";
global.VEL.Wordwall.Global.Json.GoogleClassroom.GoogleClassroomError=aj;
var al=function(){this.studentIds=null};al.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.IndividualStudentsOptions";
global.VEL.Wordwall.Global.Json.GoogleClassroom.IndividualStudentsOptions=al;
var an=function(){this.url=null;this.title=null;this.thumbnailUrl=null
};an.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Link";
global.VEL.Wordwall.Global.Json.GoogleClassroom.Link=an;
var ap=function(){this.link=null};ap.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Material";
ap.createLinkMaterial=function(a){var b=new ap();var c=new an();
c.url=a;b.link=c;return b};global.VEL.Wordwall.Global.Json.GoogleClassroom.Material=ap;
var ar=function(){this.fullName=null};ar.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Name";
global.VEL.Wordwall.Global.Json.GoogleClassroom.Name=ar;
var au=function(){this.courseId=null;this.userId=null;
this.profile=null};au.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.Student";
global.VEL.Wordwall.Global.Json.GoogleClassroom.Student=au;
var aw=function(){this.courseId=null;this.courseWorkId=null;
this.id=null;this.userId=null;this.state=null;this.draftGrade=0
};aw.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.StudentSubmission";
global.VEL.Wordwall.Global.Json.GoogleClassroom.StudentSubmission=aw;
var ay=function(){this.hours=0;this.minutes=0;this.seconds=0;
this.nanos=0};ay.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.TimeOfDay";
ay.create=function(a){var b=ss.toUTC(a);var c=new ay();
c.hours=b.getHours();c.minutes=b.getMinutes();c.seconds=b.getSeconds();
return c};ay.create$1=function(a){return(ss.isValue(a)?ay.create(ss.unbox(a)):null)
};global.VEL.Wordwall.Global.Json.GoogleClassroom.TimeOfDay=ay;
var aA=function(){this.id=null;this.name=null;this.emailAddress=null;
this.photoUrl=null};aA.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.UserProfile";
global.VEL.Wordwall.Global.Json.GoogleClassroom.UserProfile=aA;
var aC=function(){this.isSignedIn=false;this.hasGrantedPermissions=false;
this.userProfile=null};aC.__typeName="VEL.Wordwall.Global.Json.GoogleClassroom.UserState";
global.VEL.Wordwall.Global.Json.GoogleClassroom.UserState=aC;
var aE=function(){};aE.__typeName="VEL.Wordwall.Global.Serialization.JsonClassAttribute";
global.VEL.Wordwall.Global.Serialization.JsonClassAttribute=aE;
var aG=function(a){this.tag=null;this.tag=a};aG.__typeName="VEL.Wordwall.Global.Serialization.XmlClassAttribute";
global.VEL.Wordwall.Global.Serialization.XmlClassAttribute=aG;
var aI=function(){};aI.__typeName="VEL.Wordwall.Global.Server.CookieNames";
global.VEL.Wordwall.Global.Server.CookieNames=aI;var aK=function(){};
aK.__typeName="VEL.Wordwall.Global.Server.SwitchKeys";
global.VEL.Wordwall.Global.Server.SwitchKeys=aK;ss.initClass(ac,aa,{});
ss.initEnum(aV,aa,{thisActivity:0,defaultForTemplate:1,revertToDefault:2,revertToAuthor:3});
ss.initEnum(aX,aa,{muteMusic:0,muteSounds:1});ss.initEnum(aZ,aa,{subscribe:101,manualCancel:102,autoCancel:103,upgradePlan:104,downgradePlan:105,addCard:106,changeCard:107,authorizeCard:108,require3dSecure:109,failedPayment:110,renewalNotice:111,paymentReceived:112,paymentBlocked:113,schoolStep4Completed:114,pickTemplate:201,createResource:202,editResource:203,playYourOwn:204,printOrDownload:205,deleteResource:206,shareResource:207,restoreResource:208,makePrivate:209,mathsGenerator:210,play10Times:211,duplicateResource:212,deleteFolder:213,restoreFolder:214,createFolder:215,setAssignment:216,loadPrintable:217,changeTheme:218,signUp:301});
ss.initEnum(a1,aa,{signUp:1,pickTemplate:2,createTemplate:3,subscribe:4,setAssignment:5,createFolder:6});
ss.initEnum(a3,aa,{excel:0,csv:1});ss.initEnum(a5,aa,{user:1,locale:2,language:3,tier:4,page:5,template:6});
ss.initEnum(a7,aa,{boolean$1:1,integer:2,strings:3,gameOption:4,script:5,style:6,theme:7,test:666});
ss.initEnum(a9,aa,{interactive:1,printable:4});ss.initEnum(bR,aa,{none:0,showAnswers:1,leaderboard:2,restart:4,goToNextGame:8,all:15});
ss.initEnum(bT,aa,{allStudents:0,selectedStudents:1});
ss.initEnum(bV,aa,{default$1:0,teacherSharedActivities:1,googleClassroomAddOn:2});
ss.initEnum(bX,aa,{Unknown:0,Resource:1,Teacher:2,Community:3,Home:20,PricePlans:4,PricePlans_School:5,Contact:6,Result:7,MyActivities:8,MyResults:9,Account_MySchool:10,Account_PersonalDetails:11,Payment_Subscribe:12,Payment_SchoolPlan:13,Payment_ManagePayments:14,Payment_FailedPayment:15,Create_PickTemplate:16,Create_EnterContent:17,Create_EditContent:18});
ss.initEnum(bZ,aa,{anonymous:0,enterNames:1,googleClassroom:2,googleClassroomAddOn:3});
ss.initEnum(b1,aa,{None:0,Hide:1,Show:2,Default:3,Promote:4,Demote:5,Replace:6});
ss.initClass(b3,aa,{});ss.initClass(b5,aa,{});b5.$ctor1.prototype=b5.prototype;
ss.initClass(b7,aa,{});ss.initClass(b9,aa,{});ss.initClass(cb,aa,{});
ss.initClass(cd,aa,{});ss.initClass(cf,aa,{});ss.initClass(ch,aa,{});
ss.initClass(cj,aa,{});ss.initClass(cl,aa,{});ss.initClass(ab,aa,{});
ss.initClass(bQ,aa,{});ss.initClass(ad,aa,{},bQ);ss.initClass(aW,aa,{});
ss.initClass(a0,aa,{});ss.initClass(a2,aa,{});ss.initClass(a4,aa,{});
ss.initClass(a6,aa,{});ss.initClass(a8,aa,{});ss.initClass(bS,aa,{});
ss.initClass(bU,aa,{});ss.initClass(bW,aa,{});ss.initClass(bY,aa,{});
ss.initClass(b0,aa,{},bQ);ss.initClass(b2,aa,{});ss.initClass(b4,aa,{});
ss.initClass(b6,aa,{});ss.initClass(b8,aa,{});ss.initClass(ca,aa,{},a2);
ss.initClass(cc,aa,{});ss.initClass(ce,aa,{});ss.initEnum(cg,aa,{all:0,small:1,medium:2,large:3});
ss.initClass(ci,aa,{});ss.initEnum(ck,aa,{unknown:-1,none:0,scoreAndTime:1,scoreOnly:2,timeOnly:3});
ss.initClass(cm,aa,{});ss.initClass(ae,aa,{});ss.initClass(ag,aa,{});
ss.initClass(ai,aa,{});ss.initClass(ak,aa,{});ss.initClass(am,aa,{});
ss.initClass(ao,aa,{});ss.initClass(aq,aa,{});ss.initClass(at,aa,{});
ss.initClass(av,aa,{});ss.initClass(ax,aa,{});ss.initEnum(az,aa,{assignment:0,multiplayer:1});
ss.initClass(aB,aa,{},a2);ss.initClass(aD,aa,{});ss.initClass(aF,aa,{});
ss.initClass(aH,aa,{});ss.initClass(aJ,aa,{});ss.initClass(aL,aa,{});
ss.initClass(aM,aa,{});ss.initClass(aN,aa,{});ss.initClass(aO,aa,{});
ss.initClass(aP,aa,{});ss.initClass(aQ,aa,{});ss.initClass(aR,aa,{});
ss.initClass(aS,aa,{});ss.initClass(aT,aa,{},a2);ss.initClass(aU,aa,{});
ss.initClass(af,aa,{});ss.initClass(ah,aa,{});ss.initClass(aj,aa,{});
ss.initClass(al,aa,{});ss.initClass(an,aa,{});ss.initClass(ap,aa,{});
ss.initClass(ar,aa,{});ss.initClass(au,aa,{});ss.initClass(aw,aa,{});
ss.initClass(ay,aa,{});ss.initClass(aA,aa,{});ss.initClass(aC,aa,{});
ss.initClass(aE,aa,{});ss.initClass(aG,aa,{});ss.initClass(aI,aa,{});
ss.initClass(aK,aa,{});ss.setMetadata(bR,{enumFlags:true});
ss.setMetadata(ci,{attr:[new aE()],members:[{name:".ctor",type:1,params:[]},{name:"EntryId",type:4,returnType:ss.Int32,sname:"entryId"},{name:"Name",type:4,returnType:String,sname:"name"},{name:"Score",type:4,returnType:ss.Int32,sname:"score"},{name:"Time",type:4,returnType:ss.Int32,sname:"time"}]});
ss.setMetadata(cm,{attr:[new aE()],members:[{name:".ctor",type:1,params:[]},{name:"AllowDuplicates",type:4,returnType:Boolean,sname:"allowDuplicates"},{name:"Enabled",type:4,returnType:Boolean,sname:"enabled"},{name:"EntryCount",type:4,returnType:ss.Int32,sname:"entryCount"},{name:"Error",type:4,returnType:String,sname:"error"},{name:"RemovalTime",type:4,returnType:ss.Int32,sname:"removalTime"}]});
(function(){cb.myActivitiesItemLimit=500;cb.myResultsItemLimit=500
})();(function(){cd.url="//wordwall.blob.core.windows.net/"
})();(function(){cf.url="//az779572.vo.msecnd.net/"
})();(function(){ch.liveBitRate=64;ch.containerName="content-sounds";
ch.maleVoice="male";ch.femaleVoice="female"})();(function(){cj.submissionsFolder="homework-submissions"
})();(function(){cl.soundVolume=0.1;cl.musicVolume=0.05
})();(function(){ab.themeAssetsStorageUrl="//wordwallthemeassets.blob.core.windows.net/";
ab.containerName="editing-themes";ab.soundsSourceFolder="sounds/src/";
ab.imagesSourceFolder="images/src/";ab.themeXmlsFolderPattern="xml/{0}/";
ab.xmlsNamePattern="xml/{0}/{1}/{2}/{3}";ab.audiosXmlName="Audios.xml";
ab.animationsXmlName="Animations.xml";ab.buildersFolderName="Builders";
ab.scenesFolderName="Scenes";ab.settingsXmlName="Settings.xml";
ab.paletteXmlName="Palette.xml";ab.debugXmlName="Debug.xml";
ab.workNameRegex="^[a-zA-Z0-9]+$";ab.assetNameRegex="^[a-z0-9._/-]+$";
ab.maxSoundAssetFileSize=512000})();(function(){aO.AllTemplateValue="All"
})();(function(){af.allStudentsAssigneeMode="ALL_STUDENTS";
af.individualStudentsAssigneeMode="INDIVIDUAL_STUDENTS"
})();(function(){aj.iframeInitializationFailed="idpiframe_initialization_failed";
aj.popUpClosedByUserErrorCode="popup_closed_by_user";
aj.accessDenied="access_denied";aj.immediateFailed="immediate_failed"
})();(function(){aw.submissionStateTurnedIn="TURNED_IN"
})();(function(){aI.login="login7";aI.googleLogin="googlelogin1";
aI.experiment="expt";aI.banner="banner";aI.xmasBanner="xmasbanner";
aI.registered="registered"})();(function(){aK.zendeskWidget="Zendesk_Widget";
aK.userFeedback="User_Feedback";aK.templateFeedback="Template_Feedback";
aK.editorHelp="Editor_Help";aK.communityBasic="Community_Basic";
aK.hideGcAssignment="Hide_Gc_Assignment";aK.oldCroatian="Old_Croatian";
aK.contentSounds="Content_Sounds";aK.limitDuplication="Limit_Duplication";
aK.useStripeCheckoutForSubscriptions="Subscription_Stripe_Checkout";
aK.oldTurkish="Old_Turkish";aK.useStripeTaxForSchools="School_Stripe_Tax";
aK.schoolInvoiceFields="School_Invoice_Fields";aK.basicLimit5Activities="Basic_Limit_5_Activities";
aK.folderPlay="Folder_Play";aK.animatedPageTransitions="Animated_Page_Transitions"
})()})();(function(){var aa={};global.VEL=global.VEL||{};
global.VEL.Wordwall=global.VEL.Wordwall||{};global.VEL.Wordwall.Global=global.VEL.Wordwall.Global||{};
global.VEL.Wordwall.Global.Controls=global.VEL.Wordwall.Global.Controls||{};
global.VEL.Wordwall.Global.Controls.Breadcrumbs=global.VEL.Wordwall.Global.Controls.Breadcrumbs||{};
global.VEL.Wordwall.Global.Extensions=global.VEL.Wordwall.Global.Extensions||{};
global.VEL.Wordwall.Global.Helpers=global.VEL.Wordwall.Global.Helpers||{};
global.VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn=global.VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn||{};
global.VEL.Wordwall.Global.Interop=global.VEL.Wordwall.Global.Interop||{};
global.VEL.Wordwall.Global.Modals=global.VEL.Wordwall.Global.Modals||{};
global.VEL.Wordwall.Global.Modals.SharePages=global.VEL.Wordwall.Global.Modals.SharePages||{};
global.VEL.Wordwall.Global.Pages=global.VEL.Wordwall.Global.Pages||{};
ss.initAssembly(aa,"VEL.Wordwall.Global.Web");var ac=function(){};
ac.__typeName="VEL.Wordwall.Global.LogHelper";ac.error=function(a,b){var c="message="+encodeURIComponent(b)+"&scriptUrl="+encodeURIComponent(a)+"&requestUrl="+encodeURIComponent(window.location.href);
$.ajax({url:"/errorajax/logjserror",type:"POST",data:c,contentType:"application/x-www-form-urlencoded"})
};ac.event=function(a,b){var c="name="+encodeURIComponent(a)+"&requestUrl="+encodeURIComponent(window.location.href)+"&value="+encodeURIComponent(b);
$.ajax({url:"/errorajax/logjsevent",type:"POST",data:c,contentType:"application/x-www-form-urlencoded"})
};global.VEL.Wordwall.Global.LogHelper=ac;var a5=function(){};
a5.__typeName="VEL.Wordwall.Global.Modules";global.VEL.Wordwall.Global.Modules=a5;
var b2=function(){};b2.__typeName="VEL.Wordwall.Global.Shell";
b2.initialize=function(){console.log("We're hiring.\r\nhttps://wordwall.net/jobs");
b2.$x=new cr.$ctor1(".js-progress-wrapper");b2.$A=new cr.$ctor1("#toast_popup_wrapper");
b2.$z=new cr.$ctor1("#toast_popup");b2.$m=new cr.$ctor1("#error_report");
b2.isErrorPage=(new cr.$ctor1("#error_wrapper")).get_exists();
window.addEventListener("error",b2.$7);b2.$q=new cr.$ctor1("#last_message");
if(ServerModel.isEmbed){return}var a=cM.get("login7");
if(ss.isNullOrUndefined(a)){b2.$l=Strings.languageId
}else{b2.$l=a}var b=new cr.$ctor1(".js-header-ajax");
if(b.get_exists()){$.get("/shellajax/header/"+b2.$l,function(c){b.set_html(ss.cast(c,String));
b2.$9()})}else{b2.$0()}};b2.$9=function(){var a=new cr.$ctor1(".js-footer-ajax");
if(a.get_exists()){$.get(ServerModel.footerAjax,ss.mkdel(this,function(d){a.set_html(ss.cast(d,String));
new cl(".js-footer-languages .js-change-language",b2.$6);
b2.$1()}))}cI.initialize();cK.initialize();b2.$2();
b2.$i();var b=new cj.$ctor3(".js-menu-button-mobile",b2.$j,true);
b2.$r=new cr.$ctor1("#logo");b2.$o=new cj.$ctor3("#shell_faded_overlay",b2.$8,true);
b2.$w=new cj.$ctor3("#profile_button",b2.$b,true);b2.$t=new cr.$ctor1(".js-overlay-menu");
b2.$s=new cj.$ctor3(".js-overlay-mask",b2.$5,true);
b2.$k=new cr.$ctor1("body");b2.$v=new cr.$ctor1("nav");
b2.$u=new cr.$ctor1("#topbar_mobile_buttons");b2.$y=new cr.$ctor1(".js-search-suggestions-wrapper");
b2.$p=new cr.$ctor1(".js-language-selector");new cj.$ctor3(".js-language-btn",b2.$a,true);
new cl(".js-language-selector .js-change-language",b2.$6);
b2.$0();b2.$B=$(window).width();$(window).on("resize",function(d){b2.$c()
});var c=cM.get("registered");if(ss.isValue(c)){Analytics.event("account","registered",c);
cM.remove("registered")}};b2.$0=function(){var a=new cl(".js-btn-load",null);
a.onClicks(function(d){d.addLoadingGif()},false,false);
var b=new cj.$ctor3(".js-scroll-to-top",b2.scrollToTop,true);
b.onClick(b2.scrollToTop,false,false);var c=new cl(".js-scroll-to-anchor",b2.$f);
c.onClicks(b2.$f,false,false)};b2.scrollToTop=function(){var a=Math.min(350,ss.Int32.div(window.scrollY,2));
var b=new cr.$ctor1("html,body");b.animate("scrollTop",0,a,null,null)
};b2.scrollIntoView=function(a,b){var c=window.scrollY;
var d=window.scrollY+window.innerHeight;var e=a.get_domObject().offset().top-b;
var f=a.get_domObject().offset().top+a.height()+b;if(e<c){(new cr.$ctor1("html,body")).animate("scrollTop",e,250,null,null)
}else{if(f>d){var g=Math.min(f-window.innerHeight,e);
(new cr.$ctor1("html,body")).animate("scrollTop",g,250,null,null)
}}};b2.writeError=function(a){if(aq.isRelease()){return
}if(ss.isNullOrUndefined(a)){b2.$m.set_isVisible(false);
return}b2.$m.CSS$1("background-color","#ff0000");b2.$m.set_text(a);
b2.$m.set_isVisible(true)};b2.displayMessage=function(a,b,c){if(!aq.isRelease()){b2.$q.set_text(a);
b2.$q.set_isVisible(true)}if(c===-1){c=4000}b2.$z.set_html(a);
b2.$z.removeClass("error");if(b){b2.$A.fadeInOut(200,c,1000)
}else{b2.$A.fadeIn(200)}};b2.hideMessage=function(){b2.$A.set_isVisible(false)
};b2.displayErrorMessage=function(a,b,c){b2.displayMessage(a,b,c);
b2.$z.addClass("error");b2.displayError=a};b2.displayNetworkErrorMessage=function(){b2.displayErrorMessage(Strings.global_NetworkError,true,0)
};b2.hideProgress=function(){b2.$x.set_isVisible(false)
};b2.showProgress=function(){b2.$x.set_isVisible(true)
};b2.$f=function(a){var b=a.get_href();if(ss.isNullOrUndefined(b)||!(b.indexOf("#")!==-1)){return
}var c=new cr.$ctor1("a[name="+b.split(String.fromCharCode(35))[1]+"]");
if(c.get_exists()){var d=new cr.$ctor1("html,body");
d.animate("scrollTop",c.get_domObject().offset().top,800,function(){c.focus()
},null)}};b2.$c=function(){var a=$(window).width();
if(a!==b2.$B){b2.$B=a;b2.$4();b2.$5();b2.$i()}};b2.$8=function(){b2.$4();
b2.$5()};b2.$j=function(){if(b2.$v.hasClass("open")){b2.$4()
}else{b2.$e()}};b2.$d=function(){b2.$o.addClass("open")
};b2.$3=function(){b2.$o.removeClass("open")};b2.$e=function(){b2.$k.CSS$1("overflow-y","hidden");
window.scrollTo(0,0);b2.$v.addClass("open");b2.$d()
};b2.$4=function(){b2.$k.CSS$1("overflow-y","auto");
b2.$v.removeClass("open");b2.$3()};b2.$b=function(){var a=$(document).width()-b2.$w.get_domObject().offset().left-b2.$w.get_outerWidth();
var b=$(document).width()-b2.$t.get_outerWidth()-15;
a=Math.min(a,b);b2.$5();b2.$t.set_isVisible(true);b2.$t.CSS("right",a);
b2.$w.addClass("is-open");b2.$s.set_isVisible(true)
};b2.$5=function(){b2.$p.set_isVisible(false);b2.$s.set_isVisible(false);
b2.$t.set_isVisible(false);b2.$w.removeClass("is-open")
};b2.$i=function(){if(cO.isPortraitPhoneSized()){return
}if(window.location.href.toLowerCase().indexOf("managepayments")!==-1){(new cr.$ctor1(".js-fix-payment")).set_isVisible(false)
}var a=[".js-tag-line",".js-home",".js-username-display",".js-community",".js-features",".js-upgrade"];
var b=new cr.$ctor1("header");for(var c=0;c<a.length;
c++){var d=a[c];(new cr.$ctor3(b.get_domObject(),d)).set_isVisible(true)
}for(var e=0;e<a.length;e++){var f=a[e];if(b.height()>60){(new cr.$ctor3(b.get_domObject(),f)).set_isVisible(false)
}else{break}}};b2.$2=function(){var a=(window.location.pathname+window.location.search).toLowerCase();
if(a.length>2){b2.$g(a,".js-log-in");b2.$g(a,".js-sign-up");
b2.$g(a,".js-account-localization")}};b2.$1=function(){if(cO.isPhoneSized()){return
}if(((window.FS1===undefined||window.FS1.Zendesk_Widget===undefined)?false:window.FS1.Zendesk_Widget)){$('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=961dbe10-f368-47cd-9f49-3cca5ae89bc5"></script>').appendTo(document.head);
b2.$h(ServerModel.iso6391Code)}if(((window.FS1===undefined||window.FS1.User_Feedback===undefined)?false:window.FS1.User_Feedback)){new cj.$ctor3(".js-give-feedback",function(){(new aT()).open()
},true);(new cr.$ctor1(".js-user-feedback")).set_isVisible(true)
}};b2.$h=function(a){if(typeof(window.zE)=="function"){$("<script type =\"text/javascript\"> zE('webWidget', 'setLocale', '"+a+"'); </script>").appendTo(document.head)
}else{window.setTimeout(function(){b2.$h(a)},500)}};
b2.$g=function(a,b){var c=new cl(b,null);var d=c.getEach();
for(var e=0;e<d.length;e++){var f=d[e];var g=f.get_href();
if(ss.isValue(g)&&(ServerHelper.get_isLoggedIn()||!(a.indexOf("/account/")!==-1))&&!(g.indexOf("redirectto=")!==-1)&&!(a.indexOf("nocache=")!==-1)){if(g.indexOf("?")!==-1){g+="&"
}else{g+="?"}g+="redirectto="+encodeURIComponent(a);
f.set_href(g)}}};b2.$a=function(){if(cO.isRTL()){b2.$p.CSS$1("left","5px");
b2.$p.CSS$1("right","auto")}else{b2.$p.CSS$1("left","auto");
b2.$p.CSS$1("right","5px")}b2.$p.set_isVisible(true);
b2.$s.set_isVisible(true)};b2.$6=function(a){var b=a.getAttribute("data-language");
window.location.href="/account/redirectlanguage?languageId="+b+"&redirectTo="+encodeURIComponent(window.location.pathname+window.location.search)
};b2.$7=function(a){var b=ss.cast(a,b4);var c=((ss.isValue(b.error)&&!ss.isNullOrEmptyString(b.error._message))?b.error._message:b.message);
var d=b.lineno+":"+b.filename+":"+c;b2.writeError(d);
if(!b2.$n){b2.$n=true;window.setTimeout(function(){var e=b.lineno+":"+b.colno+" ";
if(ss.isValue(b.error)){e+=b.message+"\r\n"+c+"\r\n"+ss.coalesce(b.error._error,"")
}else{e+=b.message}ac.error(b.filename,e)},100)}b2.jsErrors+=d+"|"
};global.VEL.Wordwall.Global.Shell=b2;var b4=function(){this.lineno=0;
this.colno=0;this.filename=null;this.message=null;this.error=null
};b4.__typeName="VEL.Wordwall.Global.Shell$ErrorEvent";
global.VEL.Wordwall.Global.Shell$ErrorEvent=b4;var b6=function(){this._error=null;
this._message=null};b6.__typeName="VEL.Wordwall.Global.Shell$ErrorEvent$ErrorStack";
global.VEL.Wordwall.Global.Shell$ErrorEvent$ErrorStack=b6;
var b8=function(a){this.$8=null;this.$9=null;this.$b=null;
this.$6=null;this.$c=null;this.$a=null;this.$d=0;this.$7=null;
b5.$ctor1.call(this,a);this.$2()};b8.__typeName="VEL.Wordwall.Global.Controls.ActionsMenu";
global.VEL.Wordwall.Global.Controls.ActionsMenu=b8;
var cf=function(a){this.$1=null;cr.$ctor1.call(this,a);
this.$1=this.find(cr).call(this,"source")};cf.__typeName="VEL.Wordwall.Global.Controls.Audio";
global.VEL.Wordwall.Global.Controls.Audio=cf;var ch=function(a){cj.$ctor3.call(this,".js-background-fader",a,true);
ch.$0=this};ch.__typeName="VEL.Wordwall.Global.Controls.BackgroundFader";
ch.forceHide=function(){if(ss.isValue(ch.$0)){ch.$0.set_isVisible(false)
}};global.VEL.Wordwall.Global.Controls.BackgroundFader=ch;
var cj=function(a){cr.$ctor2.call(this,$(a))};cj.__typeName="VEL.Wordwall.Global.Controls.Button";
cj.$ctor1=function(a){cr.$ctor1.call(this,a)};cj.$ctor4=function(a,b,c){cr.$ctor3.call(this,a,b);
this.onClick(c,false,true)};cj.$ctor3=function(a,b,c){cr.$ctor1.call(this,a);
this.onClick(b,false,c)};cj.$ctor2=function(a){cr.$ctor2.call(this,a)
};global.VEL.Wordwall.Global.Controls.Button=cj;var cl=function(a,b){this.$1=null;
cr.$ctor1.call(this,a);this.$1=Enumerable.from(this.get_domObject().get()).select(function(c){return new cj(c)
}).toArray();if(!ss.staticEquals(b,null)){this.get_domObject().on("click",ss.mkdel(this,function(c){c.preventDefault();
c.stopPropagation();var d=$(c.target);var e=Enumerable.from(this.$1).firstOrDefault(function(f){return f.get_domObject().is(d)||f.get_domObject().find(d).length!==0
},ss.getDefaultValue(cj));if(ss.isValue(e)){b(e)}}))
}};cl.__typeName="VEL.Wordwall.Global.Controls.Buttons";
global.VEL.Wordwall.Global.Controls.Buttons=cl;var cn=function(a){this.$0=null;
this.$0=ss.cast(a,ss.isValue(a)&&(ss.isInstanceOfType(a,Element)&&a.tagName==="CANVAS"))
};cn.__typeName="VEL.Wordwall.Global.Controls.Canvas";
cn.$ctor1=function(a){this.$0=null;var b=$(a).get(0);
this.$0=ss.cast(b,ss.isValue(b)&&(ss.isInstanceOfType(b,Element)&&b.tagName==="CANVAS"))
};cn.create=function(){var a=new cn(document.createElement("canvas"));
return a};global.VEL.Wordwall.Global.Controls.Canvas=cn;
var cp=function(a,b){cj.$ctor2.call(this,$(a));if(!ss.staticEquals(b,null)){this.get_domObject().on("click",function(c){b()
})}};cp.__typeName="VEL.Wordwall.Global.Controls.Checkbox";
cp.$ctor2=function(a,b,c){cj.$ctor2.call(this,a.find(b));
if(!ss.staticEquals(c,null)){this.get_domObject().on("click",function(d){c()
})}};cp.$ctor1=function(a,b){cj.$ctor1.call(this,a);
if(!ss.staticEquals(b,null)){this.get_domObject().on("click",function(c){b()
})}};global.VEL.Wordwall.Global.Controls.Checkbox=cp;
var cr=function(a){this.$1$1=null;this.set_domObject($(a))
};cr.__typeName="VEL.Wordwall.Global.Controls.Control";
cr.$ctor1=function(a){this.$1$1=null;this.set_domObject($(a))
};cr.$ctor2=function(a){this.$1$1=null;this.set_domObject(a)
};cr.$ctor3=function(a,b){this.$1$1=null;this.set_domObject((ss.isNullOrUndefined(a)?$(b):a.find(b)))
};cr.$ctor4=function(a,b,c,d){this.$1$1=null;this.set_domObject(ai.buildTemplate(b,c));
if(d){this.$0(a)}else{this.appendTo(a)}};cr.create=function(a){return function(b,c,d,e){var f=(ss.isNullOrUndefined(d)?"":ss.formatString("id='{0}'",d));
var g=(ss.isNullOrEmptyString(e)?"":ss.formatString("class='{0}'",e));
var h=$(ss.formatString("<{0} {1} {2}></{0}>",c,f,g));
var i=new a(h);if(ss.isNullOrUndefined(b)){i.appendTo(new cr.$ctor1("body"))
}else{i.appendTo(b)}return i}};cr.createFromTemplate=function(a){return function(b,c,d,e){var f=ai.buildTemplate(c,d);
var g=new a(f);if(e){g.$0(b)}else{g.appendTo(b)}return g
}};global.VEL.Wordwall.Global.Controls.Control=cr;var ct=function(a){this.$1=null;
cr.$ctor1.call(this,a);this.$1=Enumerable.from(this.get_domObject().get()).select(function(b){return new cr(b)
}).toArray()};ct.__typeName="VEL.Wordwall.Global.Controls.Controls";
ct.$ctor1=function(a,b){this.$1=null;cr.$ctor3.call(this,a.get_domObject(),b);
this.$1=Enumerable.from(this.get_domObject().get()).select(function(c){return new cr(c)
}).toArray()};global.VEL.Wordwall.Global.Controls.Controls=ct;
var cv=function(a,b){cN.$ctor1.call(this,a);var c=this.getData("dateformat",null,false);
if(ss.isValue(c)){$.datepicker.setDefaults({dateFormat:c})
}this.get_domObject().datepicker();if(!ss.staticEquals(b,null)){this.onChange(b,false)
}};cv.__typeName="VEL.Wordwall.Global.Controls.DatePicker";
global.VEL.Wordwall.Global.Controls.DatePicker=cv;var cx=function(){};
cx.__typeName="VEL.Wordwall.Global.Controls.DragStatusEnum";
global.VEL.Wordwall.Global.Controls.DragStatusEnum=cx;
var cz=function(){this.$2=null;this.$3=null;this.$4=null;
this.$1=null;this.$6=0;this.$7=0;this.$5=0;cr.$ctor1.call(this,".js-drag-wrapper");
this.$2=new cr.$ctor1(".js-drag-icon");this.$3=new cr.$ctor1(".js-drag-name");
this.$4=new cr.$ctor1(".js-drag-ok");this.$1=new cr.$ctor1(".js-drag-blocked")
};cz.__typeName="VEL.Wordwall.Global.Controls.DragWrapper";
global.VEL.Wordwall.Global.Controls.DragWrapper=cz;
var cB=function(a){cN.call(this,a)};cB.__typeName="VEL.Wordwall.Global.Controls.FileInput";
cB.$ctor2=function(a,b){cN.$ctor1.call(this,a);this.onChange(b,false)
};cB.$ctor1=function(a){cN.$ctor1.call(this,a)};cB.$ctor3=function(a,b){cN.$ctor3.call(this,a,b)
};global.VEL.Wordwall.Global.Controls.FileInput=cB;
var cD=function(a){cr.$ctor2.call(this,a)};cD.__typeName="VEL.Wordwall.Global.Controls.FolderTreeItem";
cD.create=function(a,b,c){for(var d=0;d<b.Level;d++){a.append(cr.create(cr).call(null,a,"div",null,"folder-indent"))
}var e=cr.createFromTemplate(cD).call(null,a,"folder_tree_item_template",[b.Name],false);
e.onClick(function(){c(b)},false,true);return e};global.VEL.Wordwall.Global.Controls.FolderTreeItem=cD;
var cF=function(a,b){this.$1=null;cr.$ctor1.call(this,a);
var c=b;if(ss.isNullOrUndefined(c)){c=this.attribute("action")
}this.$1=c};cF.__typeName="VEL.Wordwall.Global.Controls.Form";
global.VEL.Wordwall.Global.Controls.Form=cF;var cH=function(a){cr.$ctor2.call(this,a)
};cH.__typeName="VEL.Wordwall.Global.Controls.Icon";
cH.$ctor1=function(a,b){cr.$ctor3.call(this,a,b)};cH.create=function(a,b){return cr.create(cH).call(null,a,"i",null,b)
};global.VEL.Wordwall.Global.Controls.Icon=cH;var cJ=function(){};
cJ.__typeName="VEL.Wordwall.Global.Controls.IItemsDragContainer";
global.VEL.Wordwall.Global.Controls.IItemsDragContainer=cJ;
var cL=function(a){this.$2=null;cr.$ctor1.call(this,a);
var b=this.get_domObject().get(0);this.$2=ss.cast(b,ss.isValue(b)&&(ss.isInstanceOfType(b,Element)&&b.tagName==="IMG"))
};cL.__typeName="VEL.Wordwall.Global.Controls.Image";
cL.$ctor1=function(a,b,c){this.$2=null;cr.call(this,a);
this.$2=ss.cast(a,ss.isValue(a)&&(ss.isInstanceOfType(a,Element)&&a.tagName==="IMG"));
if(!ss.staticEquals(b,null)){this.$2.onload=ss.mkdel(this,function(d){b(this)
})}if(!ss.staticEquals(c,null)){this.$2.onerror=function(d){c()
}}};cL.create=function(a,b,c){var d=new cL.$ctor1(document.createElement("img"),b,c);
if(ss.isValue(a)){d.$2.src=a}return d};global.VEL.Wordwall.Global.Controls.Image=cL;
var cN=function(a){this.$5=null;this.$4=null;this.$6=null;
this.$7=null;cr.call(this,a)};cN.__typeName="VEL.Wordwall.Global.Controls.Input";
cN.$ctor2=function(a,b){this.$5=null;this.$4=null;this.$6=null;
this.$7=null;cr.$ctor1.call(this,a);this.onChange(b,false)
};cN.$ctor1=function(a){this.$5=null;this.$4=null;this.$6=null;
this.$7=null;cr.$ctor1.call(this,a)};cN.$ctor3=function(a,b){this.$5=null;
this.$4=null;this.$6=null;this.$7=null;cr.$ctor3.call(this,a,b)
};cN.$ctor4=function(a,b,c){this.$5=null;this.$4=null;
this.$6=null;this.$7=null;cr.$ctor3.call(this,a,b);
this.onChange(c,false)};global.VEL.Wordwall.Global.Controls.Input=cN;
var cP=function(a,b){this.$1=null;cr.$ctor1.call(this,a);
this.$1=Enumerable.from(this.get_domObject().get()).select(function(c){var d=new cN(c);
d.onChange(function(){b(d)},false);return d}).toArray()
};cP.__typeName="VEL.Wordwall.Global.Controls.Inputs";
global.VEL.Wordwall.Global.Controls.Inputs=cP;var ab=function(a,b,c){this.$1=null;
b9.call(this,a);if(ss.isValue(b)){this.set_value(ss.unbox(b))
}if(!ss.staticEquals(c,null)){this.onChange(c)}};ab.__typeName="VEL.Wordwall.Global.Controls.IntSelect";
global.VEL.Wordwall.Global.Controls.IntSelect=ab;var ad=function(a,b,c){cj.$ctor2.call(this,null);
var d=new ai("#generic_modal_template_btn",[]);this.set_domObject(d.build([null,c,a]));
this.get_domObject().on("click",ss.mkdel(this,function(e){this.addLoadingGif();
e.preventDefault();e.stopPropagation();b()}))};ad.__typeName="VEL.Wordwall.Global.Controls.ModalButton";
global.VEL.Wordwall.Global.Controls.ModalButton=ad;
var a6=function(){};a6.__typeName="VEL.Wordwall.Global.Controls.OrderByEnum";
global.VEL.Wordwall.Global.Controls.OrderByEnum=a6;
var b3=function(a,b,c){this.$6=null;this.$5=0;this.$4=null;
this.$3$1=false;cj.$ctor1.call(this,a);this.$6=c;this.$5=b;
this.$4=new cr.$ctor3(this.get_domObject(),".js-order-arrow");
this.set_canToggle(true);this.onClick(ss.mkdel(this,this.$1),false,true)
};b3.__typeName="VEL.Wordwall.Global.Controls.OrderByToggle";
global.VEL.Wordwall.Global.Controls.OrderByToggle=b3;
var b5=function(a){cr.call(this,a)};b5.__typeName="VEL.Wordwall.Global.Controls.Panel";
b5.$ctor1=function(a){cr.$ctor1.call(this,a)};b5.$ctor3=function(a,b){cr.$ctor3.call(this,a,b)
};b5.$ctor2=function(a){cr.$ctor2.call(this,a)};global.VEL.Wordwall.Global.Controls.Panel=b5;
var b7=function(a,b){this.$1=null;cj.$ctor1.call(this,b7.$0(a));
this.$1=a;if(!ss.staticEquals(b,null)){this.onChange(b)
}};b7.__typeName="VEL.Wordwall.Global.Controls.Radio";
b7.$0=function(a){if(ss.startsWithString(a,"#")||ss.startsWithString(a,".")){return a
}return"input:radio[name="+a+"]"};global.VEL.Wordwall.Global.Controls.Radio=b7;
var b9=function(a){cr.$ctor1.call(this,a)};b9.__typeName="VEL.Wordwall.Global.Controls.Select";
global.VEL.Wordwall.Global.Controls.Select=b9;var cg=function(a,b,c){this.$1=null;
b9.call(this,a);if(ss.isValue(b)){this.set_value(b)
}if(!ss.staticEquals(c,null)){this.onChange(c)}};cg.__typeName="VEL.Wordwall.Global.Controls.StringSelect";
global.VEL.Wordwall.Global.Controls.StringSelect=cg;
var ci=function(){};ci.__typeName="VEL.Wordwall.Global.Controls.ValidateEnum";
global.VEL.Wordwall.Global.Controls.ValidateEnum=ci;
var ck=function(a){cm.call(this,a)};ck.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.BackBreadcrumb";
ck.create=function(a,b){var c=cr.createFromTemplate(ck).call(null,b,"back_breadcrumb_template",[],false);
var d=new cj.$ctor3(".js-breadcrumb-back",ss.mkdel(a,a.onBack),true);
c.set_info(new VEL.Wordwall.Global.Json.FolderInfo());
return c};global.VEL.Wordwall.Global.Controls.Breadcrumbs.BackBreadcrumb=ck;
var cm=function(a){this.$3$1=null;cj.$ctor2.call(this,a)
};cm.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.Breadcrumb";
global.VEL.Wordwall.Global.Controls.Breadcrumbs.Breadcrumb=cm;
var co=function(a,b,c){this.$5=null;this.$2=null;this.$3=null;
this.$4=null;b5.$ctor1.call(this,".js-breadcrumb-trail");
this.$5=a;this.$2=b;this.$3=c};co.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.BreadcrumbTrail";
global.VEL.Wordwall.Global.Controls.Breadcrumbs.BreadcrumbTrail=co;
var cq=function(a){cm.call(this,a)};cq.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.FolderBreadcrumb";
cq.create$1=function(a,b,c,d){var e=new VEL.Wordwall.Global.Json.FolderInfo();
e.FolderId=0;e.Path=c;e.Name=d;var f=e;return cq.create(a,b,f)
};cq.create=function(a,b,c){var d=cr.createFromTemplate(cq).call(null,b,"folder_breadcrumb_template",[c.Path,c.Name],false);
d.set_info(c);d.onClick(function(){a.onOpenFolder(d.get_info(),false)
},false,true);d.setupDragAndDrop(a.getItemsDragContainer());
return d};global.VEL.Wordwall.Global.Controls.Breadcrumbs.FolderBreadcrumb=cq;
var cs=function(a){cm.call(this,a)};cs.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.HomeBreadcrumb";
cs.create=function(a,b,c,d){var e=cr.createFromTemplate(cs).call(null,b,"home_breadcrumb_template",[c,d],false);
var f=new VEL.Wordwall.Global.Json.FolderInfo();f.FolderId=0;
f.Path=c;f.Name=d;e.set_info(f);var g=null;if(ServerModel.userId>0){g=function(){a.onOpenFolder(e.get_info(),false)
}}e.onClick(g,false,true);e.setupDragAndDrop(a.getItemsDragContainer());
return e};global.VEL.Wordwall.Global.Controls.Breadcrumbs.HomeBreadcrumb=cs;
var cu=function(a){cm.call(this,a)};cu.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.RecycleBreadcrumb";
cu.create=function(a){var b=cr.createFromTemplate(cu).call(null,a,"recycle_breadcrumb_template",null,false);
return b};global.VEL.Wordwall.Global.Controls.Breadcrumbs.RecycleBreadcrumb=cu;
var cw=function(a){cm.call(this,a)};cw.__typeName="VEL.Wordwall.Global.Controls.Breadcrumbs.SearchBreadcrumb";
cw.create=function(a){var b=cr.createFromTemplate(cw).call(null,a,"search_breadcrumb_template",null,false);
return b};global.VEL.Wordwall.Global.Controls.Breadcrumbs.SearchBreadcrumb=cw;
var cy=function(){};cy.__typeName="VEL.Wordwall.Global.Extensions.jQueryExtensions";
cy.getIntPoint=function(a){if(ss.isNullOrUndefined(a)){return null
}var b=a.originalEvent;if(ss.isValue(b)){return new VEL.Wordwall.Global.Extensions.IntPoint.$ctor1(b.pageX,b.pageY)
}return new VEL.Wordwall.Global.Extensions.IntPoint.$ctor1(a.pageX,a.pageY)
};global.VEL.Wordwall.Global.Extensions.jQueryExtensions=cy;
var cA=function(){};cA.__typeName="VEL.Wordwall.Global.Helpers.ActivityHelper";
cA.onThumbnailError=function(a){a.onerror=null;if(!cA.$0){var b=a.src.lastIndexOf(String.fromCharCode(47));
if(b!==-1){var c=a.src.substr(b+1);if(c.length>=32){$.get("/resourceajax/reportscreenshot?guid="+c);
cA.$0=true}}}a.src="//az779572.vo.msecnd.net/res/content/images/no_screenshot.png|1bi_m__4rvzijs6tyo7ecaw2.png"
};cA.isTitleShareable=function(a){if(ss.isNullOrEmptyString(a)){return false
}a=a.toLowerCase().trim();var b=Strings.enterContent_Generic_Untitled.trim().toLowerCase();
var c=Strings.enterContent_Generic_CopyOf.trim().toLowerCase();
if(ss.endsWithString(c,"{0}")){c=ss.replaceAllString(c,"{0}","").trim();
if(ss.startsWithString(a,b)||ss.startsWithString(a,c)){return false
}}else{if(ss.startsWithString(c,"{0}")){c=ss.replaceAllString(c,"{0}","").trim();
if(ss.startsWithString(a,b)||ss.endsWithString(a,c)){return false
}}else{}}return true};cA.getShortUrl=function(a,b){var c=window.location.href.split(String.fromCharCode(47))[3];
var d=c.length===2||c.length===5&&c.charCodeAt(2)===45;
if(d){c="/"+c}else{c=""}var e=window.location.host+c+"/resource/"+a;
return(b?("https://"+e):e)};cA.getActivityUrl=function(a,b){return((b===4)?"/print/":"/resource/")+a
};cA.getActivityEditContentUrl=function(a,b,c){var d="/create/editcontent?guid="+a;
if(b!==0){d+="&templateId="+b}if(c!==0){d+="&folderId="+c
}return d};cA.getShortFolderPlayUrl=function(a,b){var c=window.location.host+"/folderplay/"+a;
return(b?("https://"+c):c)};global.VEL.Wordwall.Global.Helpers.ActivityHelper=cA;
var cC=function(){};cC.__typeName="VEL.Wordwall.Global.Helpers.AjaxHelper";
cC.get_inProgress=function(){return cC.$1$1};cC.set_inProgress=function(a){cC.$1$1=a
};cC.displayProgress=function(){cC.set_inProgress(true);
b2.showProgress()};cC.isTrue=function(a){return ss.isValue(a)&&a.toString().toLowerCase()==="true"
};cC.isFail=function(a){if(ss.isNullOrUndefined(a)){return true
}return a.toString().toLowerCase()==="false"};cC.success=function(a,b){if(ss.isValue(a)){b2.displayMessage(a,true,-1)
}else{b2.hideMessage()}b2.hideProgress();if(!b){aZ.closeActiveModal()
}cC.set_inProgress(false)};cC.error=function(a){b2.displayErrorMessage(ss.coalesce(a,Strings.myActivities_DefaultError),true,0);
b2.hideProgress();aZ.closeActiveModal();cC.set_inProgress(false)
};cC.networkErrorAndReload=function(a,b,c){b2.displayNetworkErrorMessage();
window.setTimeout(function(){window.location.reload()
},2000)};cC.isClientErrorStatusCode=function(a){return a>=400&&a<500
};global.VEL.Wordwall.Global.Helpers.AjaxHelper=cC;
var cE=function(){};cE.__typeName="VEL.Wordwall.Global.Helpers.AppHelper";
cE.load=function(a){if(ss.isNullOrEmptyString(ServerModel.appBundleUrl)){throw new ss.Exception("Could not load app due to null or empty ServerModel.AppBundleUrl")
}else{var b=ServerModel.appBundleUrl.split(String.fromCharCode(59));
$.ajaxSetup({cache:true});$.getScript(b[0],function(c){$.getScript(b[1],function(d){$.getScript(b[2],function(e){$.ajaxSetup({cache:false});
a()})})})}};global.VEL.Wordwall.Global.Helpers.AppHelper=cE;
var cG=function(){};cG.__typeName="VEL.Wordwall.Global.Helpers.AssignmentHelper";
cG.setAssignment=function(a,b){var c="/resultajax/setassignment?activityId="+a.get_activityId()+"&templateId="+a.get_templateId()+"&activityGuid="+a.get_activityGuid()+"&register="+b.Registration+"&gameover="+b.GameOver+"&deadline="+encodeURIComponent(b.EndTimeString)+"&title="+encodeURIComponent(b.Title);
return $.post(c)};cG.setAssignmentAsync=function(a,b){return ss.Task.fromPromise(cG.setAssignment(a,b),0)
};cG.setGoogleClassroomAssignment=function(a,b,c){var d="/resultajax/setgoogleclassroomassignment?assignmentid="+a+"&gccourseid="+encodeURIComponent(b)+"&gccourseworkid="+encodeURIComponent(c);
return $.post(d)};cG.setGoogleClassroomAssignmentAsync=function(a,b,c){return ss.Task.fromPromise(cG.setGoogleClassroomAssignment(a,b,c))
};global.VEL.Wordwall.Global.Helpers.AssignmentHelper=cG;
var cI=function(){};cI.__typeName="VEL.Wordwall.Global.Helpers.AutoSaveHelper";
cI.initialize=function(){if(!cI.$1()){return}var a=new cr.$ctor1(".js-auto-save-wrapper");
var b=new cj.$ctor1(".js-auto-save-link");b.set_href("/create/entercontent?guid="+window.localStorage["autosave.guid"]+"&templateId="+window.localStorage["autosave.templateid"]+"&autosave=true");
var c=new cr.$ctor1(".js-auto-save-title");c.set_text(cI.$0());
var d=new cj.$ctor3(".js-auto-save-close",function(){cI.clear();
a.remove()},true);window.setTimeout(function(){a.slideDown(400,null)
},1000)};cI.clear=function(){window.localStorage.removeItem("autosave.guid")
};cI.$1=function(){var a=window.localStorage["autosave.user"];
if(!ss.referenceEquals(a,ServerModel.userId.toString())||ServerHelper.get_isGuest()){return false
}var b=window.localStorage["autosave.time"];if(ss.isValue(b)){var c=parseInt(b);
var d=VEL.Wordwall.Global.Extensions.DateTimeExtensions.toUnix(new Date());
if(d-c>604800000){cI.clear()}}var e=window.localStorage["autosave.guid"];
return ss.isValue(e)&&!ss.referenceEquals(ServerModel.activityGuid,e)&&!(window.location.href.indexOf("guid="+e)!==-1)
};cI.$0=function(){var a=window.localStorage["autosave.title"];
if(ss.isNullOrEmptyString(a)||a==="null"){return Strings.enterContent_Generic_Untitled
}else{return a}};global.VEL.Wordwall.Global.Helpers.AutoSaveHelper=cI;
var cK=function(){};cK.__typeName="VEL.Wordwall.Global.Helpers.BannerHelper";
cK.initialize=function(){cK.$5=new cr.$ctor1(".js-banner-wrapper");
cK.$2=cK.$5.find(cr).call(cK.$5,".js-banner-content");
cK.$3=cK.$5.find(cr).call(cK.$5,".js-banner-cta");cK.$4=cK.$5.find(cr).call(cK.$5,".js-banner-dismiss");
cK.$4.onClick(cK.$0,false,true);if(!ServerHelper.get_isLoggedIn()){cK.$0();
return}var a=cM.get("xmasbanner");if(!ss.isNullOrEmptyString(a)){cK.$6=true;
cK.$1(a);return}var b=cM.get("banner");if(!ss.isNullOrEmptyString(b)){cK.$1(b)
}};cK.$1=function(a){try{var b=JSON.parse(a);cK.$2.set_html(b.Msg);
if(ss.isValue(b.Cta)){cK.$3.set_html(b.Cta+cK.$3.get_html());
cK.$3.set_isVisible(true);if(ss.isValue(b.Url)){cK.$3.onClick(function(){window.location.href=b.Url
},false,true);cK.$3.addClass("clickable")}}cK.$5.set_isVisible(true)
}catch(c){}};cK.$0=function(){cM.remove((cK.$6?"xmasbanner":"banner"));
cK.$5.set_isVisible(false);if(cK.$6){$.ajax({url:"/accountajax/dismissbanner",type:"POST"})
}};global.VEL.Wordwall.Global.Helpers.BannerHelper=cK;
var cM=function(){};cM.__typeName="VEL.Wordwall.Global.Helpers.CookieHelper";
cM.get=function(a){try{var b=new RegExp("(^| )"+a+"=([^;]+)");
var c=document.cookie.match(b);if(ss.isValue(c)&&c.length>2){return c[2]
}}catch(d){}return null};cM.remove=function(a){try{document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
}catch(b){}};global.VEL.Wordwall.Global.Helpers.CookieHelper=cM;
var cO=function(){};cO.__typeName="VEL.Wordwall.Global.Helpers.DeviceHelper";
cO.isPhoneSized=function(){return window.innerWidth<=660||window.innerHeight<=500
};cO.isPortraitPhoneSized=function(){return window.innerWidth<=660
};cO.isInternetExplorer=function(){var a=window.navigator.userAgent;
return a.indexOf("MSIE ")!==-1||a.indexOf("Trident/")!==-1||a.indexOf("Edge/")!==-1
};cO.isRTL=function(){return document.documentElement.getAttribute("dir")==="rtl"
};cO.isWebpSupported=function(a){if(ss.isValue(cO.$0)){a(ss.unbox(cO.$0))
}else{var b=new Image();b.onload=function(c){cO.$0=b.width>0&&b.height>0;
a(ss.unbox(cO.$0))};b.onerror=function(c){cO.$0=false;
a(false)};b.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
}};global.VEL.Wordwall.Global.Helpers.DeviceHelper=cO;
var cQ=function(){};cQ.__typeName="VEL.Wordwall.Global.Helpers.EventsHelper";
cQ.add=function(a,b){$.get("/eventsajax/add/"+a+"/"+encodeURIComponent(b))
};global.VEL.Wordwall.Global.Helpers.EventsHelper=cQ;
var ae=function(a){this.$0=null;this.$0=a};ae.__typeName="VEL.Wordwall.Global.Helpers.GoogleClassroomErrorReporter";
global.VEL.Wordwall.Global.Helpers.GoogleClassroomErrorReporter=ae;
var ag=function(){};ag.__typeName="VEL.Wordwall.Global.Helpers.GoogleClassroomHelper";
ag.exceptionToError=function(a){return((a.arguments.length!==0)?ss.cast(a.arguments[0],VEL.Wordwall.Global.Json.GoogleClassroom.GoogleClassroomError):null)
};ag.exceptionToLogErrorMessage=function(a){var b=ag.exceptionToError(a);
var c=(ss.isValue(b)?b.message:null);var d=(ss.isValue(b)?b.errorCode:null);
var e="Google Classroom error: "+(!ss.isNullOrEmptyString(c)?c:a.get_message())+(!ss.isNullOrEmptyString(d)?(" ("+d+")"):"");
return e};global.VEL.Wordwall.Global.Helpers.GoogleClassroomHelper=ag;
var ai=function(a,b){this.$1=null;this.$2=null;this.$1=b;
if(ss.startsWithString(a,"<")){this.$2=a}else{if(!ss.startsWithString(a,"#")){a="#"+a
}var c=$(a);if(c.length===0){throw new ss.ArgumentException("template id='"+a+"' not found")
}this.$2=c.html();this.$2=this.$0(this.$2)}};ai.__typeName="VEL.Wordwall.Global.Helpers.HtmlTemplate";
ai.clearCache=function(){ai.$0.clear()};ai.buildTemplate=function(a,b){return $(ai.toString(a,b))
};ai.toString=function(a,b){var c={$:null};if(ai.$0.tryGetValue(a,c)){return c.$.toString$1(b)
}c.$=new ai(a,[]);ai.$0.set_item(a,c.$);return c.$.toString$1(b)
};global.VEL.Wordwall.Global.Helpers.HtmlTemplate=ai;
var ak=function(){};ak.__typeName="VEL.Wordwall.Global.Helpers.NativeShareHelper";
ak.share=function(a,b,c){if(!(navigator.share!=undefined)||ss.isNullOrEmptyString(a)){return false
}navigator.share({url:a,title:b,text:c});return true
};global.VEL.Wordwall.Global.Helpers.NativeShareHelper=ak;
var am=function(){};am.__typeName="VEL.Wordwall.Global.Helpers.RedirectHelper";
am.setupRedirectButtons=function(a,b){new cl(a,function(c){window.location.href=c.getAttribute(b)
})};global.VEL.Wordwall.Global.Helpers.RedirectHelper=am;
var ao=function(){};ao.__typeName="VEL.Wordwall.Global.Helpers.SettingsHelper";
ao.set=function(a,b,c){try{if(c){window.sessionStorage[a]=b.toString()
}else{window.localStorage[a]=b.toString()}}catch(d){}};
ao.get$1=function(a,b){var c={};if(ss.Int32.tryParse(ao.get$2(a,b.toString()),c)){return c.$
}else{return b}};ao.get=function(a,b){return ao.get$2(a,b.toString()).toLowerCase()==="true"
};ao.get$2=function(a,b){try{var c=window.localStorage[a];
if(c===undefined){c=window.sessionStorage[a];if(c===undefined){c=b
}}return c}catch(d){return b}};ao.remove=function(a){try{window.localStorage.removeItem(a);
window.sessionStorage.removeItem(a)}catch(b){}};global.VEL.Wordwall.Global.Helpers.SettingsHelper=ao;
var aq=function(){};aq.__typeName="VEL.Wordwall.Global.Helpers.UrlHelper";
aq.localize=function(a){var b=window.location.href.split(String.fromCharCode(47));
if(b.length<4){return a}var c=b[3];var d=c.length===2||c.length===5&&c.charCodeAt(2)===45;
if(d){return"/"+c+a}else{return a}};aq.getUrlParameter=function(a){var b=window.location.search;
var c=b.indexOf(a+"=");if(c===-1){return null}var d=c+1+a.length;
var e=b.indexOf(String.fromCharCode(38),d);var f;if(e===-1){f=b.substring(d)
}else{f=b.substr(d,e-d)}f=ss.replaceAllString(f,"+","%20");
return decodeURIComponent(f)};aq.isRelease=function(){return window.location.href.indexOf("wordwall.net")!==-1
};global.VEL.Wordwall.Global.Helpers.UrlHelper=aq;var at=function(){};
at.__typeName="VEL.Wordwall.Global.Helpers.ValidityHelper";
at.isEmail=function(a){if(ss.isNullOrUndefined(a)||a.length<4){return false
}if(ss.endsWithString(a,"@wordwall.co.uk")){return at.$2.test(a)
}return at.$0.test(a)};at.isPassword=function(a){return ss.isValue(a)&&a.length>=ServerModel.minPasswordLength
};global.VEL.Wordwall.Global.Helpers.ValidityHelper=at;
var av=function(){this.type=null;this.action=null};
av.__typeName="VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.AddOnHostMessage";
global.VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.AddOnHostMessage=av;
var ax=function(){this.courseID=null;this.postID=null;
this.addOnToken=null};ax.__typeName="VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.AttachmentDiscoveryData";
global.VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.AttachmentDiscoveryData=ax;
var az=function(){};az.__typeName="VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.GoogleClassroomAddOnHelper";
az.initializeAttachmentDiscovery=function(){if(!ss.isNullOrEmptyString(ServerModel.googleClassroomAddOnCourseId)&&!ss.isNullOrEmptyString(ServerModel.googleClassroomAddOnPostId)){var a=new ax();
a.courseID=ServerModel.googleClassroomAddOnCourseId;
a.postID=ServerModel.googleClassroomAddOnPostId;a.addOnToken=ServerModel.googleClassroomAddOnToken;
var b=a;window.sessionStorage.setItem("GoogleClassroomAddOnAttachmentDiscovery",JSON.stringify(b))
}else{var c=ss.cast(JSON.parse(window.sessionStorage.getItem("GoogleClassroomAddOnAttachmentDiscovery")),ax);
if(ss.isValue(c)){ServerModel.googleClassroomAddOnCourseId=c.courseID;
ServerModel.googleClassroomAddOnPostId=c.postID;ServerModel.googleClassroomAddOnToken=c.addOnToken
}}};az.closeAddOn=function(){if(!ss.referenceEquals(window.parent,window.self)){var a=window.parent;
var b=new av();b.type="Classroom";b.action="closeIframe";
a.postMessage(b,"*")}else{window.close()}};az.getSelectActivityUrl=function(a){return az.$0("/googleclassroomaddon/selectactivity"+((a!==0)?("/folder/"+a):""))
};az.getAttachmentDiscoveryPreviewUrl=function(a){return az.$0("/googleclassroomaddon/attachmentdiscoverypreview?activityId="+a)
};az.getAttachmentDiscoveryEditContentUrl=function(a,b,c){var d="/googleclassroomaddon/attachmentdiscoveryeditcontent?guid="+encodeURIComponent(a).replace(/%20/g,"+");
if(b!==0){d+="&templateId="+b}if(c!==0){d+="&folderId="+c
}return az.$0(d)};az.getAttachmentDiscoveryOptionsUrl=function(a){return az.$0("/googleclassroomaddon/attachmentdiscoveryoptions?activityId="+a)
};az.getCreateActivityPickTemplateUrl=function(a){var b="/googleclassroomaddon/createpicktemplate";
if(a!==0){b+="?folderID="+a}return az.$0(b)};az.getCreateUrl=function(a,b){var c="/googleclassroomaddon/createtemplate?templateId="+a;
if(b!==0){c+="&folderID="+b}return az.$0(c)};az.getCreateActivityOptionsUrl=function(a){return az.$0("/googleclassroomaddon/createoptions?activityId="+a)
};az.$0=function(a){var b=ServerModel.googleClassroomAddOnLanguageCode;
var c=!ss.isNullOrEmptyString(b)&&b!=="en";return(c?("/"+b+a):a)
};az.attachActivityToPostAndClose=function(a,b,c,d,e,f,g){var h=0,i=new ss.TaskCompletionSource(),j,k,l,m,n,o;
var p=function(){var q=true;try{$sm1:for(;;){switch(h){case 0:h=-1;
j="Error creating Google Classroom add-on attachment";
h=1;continue $sm1;case 1:case 2:case 3:if(h===1){h=2
}try{$sm2:for(;;){switch(h){case 2:h=-1;b2.showProgress();
k=ss.Task.fromPromise(az.createGoogleClassroomAddOnAttachmentRecord(a,b,c,d,e,f),0);
h=3;k.continueWith(p);q=false;return;case 3:h=-1;k.getAwaitedResult();
az.closeAddOn();h=-1;break $sm2;default:break $sm2}}}catch(r){r=ss.Exception.wrap(r);
if(ss.isInstanceOfType(r,ss.PromiseException)){l=ss.cast(r,ss.PromiseException);
m=Enumerable.from(l.arguments).firstOrDefault(null,ss.getDefaultValue(Object));
n=((ss.isValue(m)&&cC.isClientErrorStatusCode(m.status))?m.statusText:null);
az.$2.reportError$1(ss.coalesce(n,Strings.myActivities_DefaultError),j,l)
}else{o=r;if(!ss.staticEquals(g,null)){g()}az.$2.reportError$1(Strings.myActivities_DefaultError,j,o)
}}finally{if(q){b2.hideProgress()}}h=-1;break $sm1;
default:break $sm1}}i.setResult(null)}catch(r){i.setException(ss.Exception.wrap(r))
}};p();return i.task};az.createGoogleClassroomAddOnAttachmentRecord=function(a,b,c,d,e,f){var g="/googleclassroomaddonajax/createaddonattachment?activityId="+a+"&activityGuid="+encodeURIComponent(b).replace(/%20/g,"+")+"&templateId="+c+"&courseId="+encodeURIComponent(d).replace(/%20/g,"+")+"&postId="+encodeURIComponent(e).replace(/%20/g,"+")+"&addOnToken="+encodeURIComponent(f).replace(/%20/g,"+");
return $.post(g)};az.uploadStudentAttachmentScore=function(a,b){var c="/googleclassroomaddonajax/uploadstudentattachmentscore?homeworkGameID="+a+"&homeworkSubmissionID="+b;
return $.post(c)};global.VEL.Wordwall.Global.Helpers.GoogleClassroomAddOn.GoogleClassroomAddOnHelper=az;
var aB=function(){};aB.__typeName="VEL.Wordwall.Global.Interop.DragDealer";
global.VEL.Wordwall.Global.Interop.DragDealer=aB;var aD=function(){this.steps=0;
this.speed=0;this.slide=false;this.css3=false;this.callback=null
};aD.__typeName="VEL.Wordwall.Global.Interop.DragDealerOptions";
global.VEL.Wordwall.Global.Interop.DragDealerOptions=aD;
var aF=function(a){this.$0=null;this.$0=a};aF.__typeName="VEL.Wordwall.Global.Interop.GoogleClassroomClient";
aF.createSetAssignmentClient=function(a,b){var c=0,d=new ss.TaskCompletionSource(),e;
var f=function(){try{$sm1:for(;;){switch(c){case 0:c=-1;
e=ss.Task.fromPromise(GoogleClassroom.createSetAssignmentClient(a,b),0);
c=1;e.continueWith(f);return;case 1:c=-1;d.setResult(new aF(e.getAwaitedResult()));
return;default:break $sm1}}}catch(g){d.setException(ss.Exception.wrap(g))
}};f();return d.task};aF.createDoAssignmentClient=function(a,b){var c=0,d=new ss.TaskCompletionSource(),e;
var f=function(){try{$sm1:for(;;){switch(c){case 0:c=-1;
e=ss.Task.fromPromise(GoogleClassroom.createDoAssignmentClient(a,b),0);
c=1;e.continueWith(f);return;case 1:c=-1;d.setResult(new aF(e.getAwaitedResult()));
return;default:break $sm1}}}catch(g){d.setException(ss.Exception.wrap(g))
}};f();return d.task};aF.createAssignmentResultsClient=function(a,b){var c=0,d=new ss.TaskCompletionSource(),e;
var f=function(){try{$sm1:for(;;){switch(c){case 0:c=-1;
e=ss.Task.fromPromise(GoogleClassroom.createAssignmentResultsClient(a,b),0);
c=1;e.continueWith(f);return;case 1:c=-1;d.setResult(new aF(e.getAwaitedResult()));
return;default:break $sm1}}}catch(g){d.setException(ss.Exception.wrap(g))
}};f();return d.task};global.VEL.Wordwall.Global.Interop.GoogleClassroomClient=aF;
var aH=function(){};aH.__typeName="VEL.Wordwall.Global.Modals.$0";
var aJ=function(a){this.$e=null;aZ.call(this,"prompt-modal","prompt-modal-wrapper");
this.$e=a};aJ.__typeName="VEL.Wordwall.Global.Modals.CancelModal";
global.VEL.Wordwall.Global.Modals.CancelModal=aJ;var aL=function(a,b){this.$h=null;
this.$g=null;this.$f=null;this.$e=null;aZ.call(this,null,"deadline-modal-wrapper");
this.$g=a;this.$h=b};aL.__typeName="VEL.Wordwall.Global.Modals.DeadlineModal";
global.VEL.Wordwall.Global.Modals.DeadlineModal=aL;
var aN=function(a,b){this.$f=0;this.$h=null;this.$g=null;
aZ.call(this,"edit-metadata-modal","edit-metadata-modal-wrapper");
this.$f=a;this.$h=b};aN.__typeName="VEL.Wordwall.Global.Modals.EditTagsModal";
global.VEL.Wordwall.Global.Modals.EditTagsModal=aN;
var aP=function(a,b,c){this.$g=0;this.$f=0;this.$e=0;
aZ.call(this,"feedback-modal","feedback-modal-wrapper");
this.$g=a;this.$f=b;this.$e=c};aP.__typeName="VEL.Wordwall.Global.Modals.ExperimentFeedbackModal";
global.VEL.Wordwall.Global.Modals.ExperimentFeedbackModal=aP;
var aR=function(a,b){this.$g=0;this.$f=0;aZ.call(this,"prompt-modal","prompt-modal-wrapper");
this.$g=a;this.$f=b};aR.__typeName="VEL.Wordwall.Global.Modals.ExportModal";
global.VEL.Wordwall.Global.Modals.ExportModal=aR;var aT=function(){this.$e=false;
aZ.call(this,"feedback-modal","feedback-modal-wrapper")
};aT.__typeName="VEL.Wordwall.Global.Modals.FeedbackModal";
global.VEL.Wordwall.Global.Modals.FeedbackModal=aT;
var aV=function(){};aV.__typeName="VEL.Wordwall.Global.Modals.IActivity";
global.VEL.Wordwall.Global.Modals.IActivity=aV;var aX=function(a,b,c,d,e,f,g){this.$k=null;
this.$h=0;this.$i=null;this.$j=null;this.$f=null;this.$l=false;
this.$e=null;this.$g=null;aZ.call(this,"input-modal","input-modal-wrapper");
this.$k=a;this.$i=b;this.$h=c;this.$j=d;this.$f=e;this.$l=f;
this.$e=g};aX.__typeName="VEL.Wordwall.Global.Modals.InputModal";
global.VEL.Wordwall.Global.Modals.InputModal=aX;var aZ=function(a,b){this.$a=false;
this.$9=false;this.$4=null;this.$d=null;this.$c=null;
this.$1=null;this.$b=null;this.$8=null;this.$3=null;
this.$6=null;this.$5=null;this.$7=null;this.noMaxHeight=false;
this.$2=null;this.$2=[];this.$4=ss.coalesce(a,"");this.$d=ss.coalesce(b,"")
};aZ.__typeName="VEL.Wordwall.Global.Modals.Modal";
aZ.closeActiveModal=function(){if(ss.isValue(aZ.$0)){aZ.$0.closeModal()
}};aZ.openNewTab=function(a){var b=window.open(a,"_blank");
if(ss.isValue(b)){b.focus()}};aZ.openPopup=function(a){var b=600;
var c=500;var d=window.innerWidth;var e=window.innerHeight;
var f=ss.Int32.div(d,2)-300+10;var g=ss.Int32.div(e,2)-250+50;
var h=window.open(a,"_blank","scrollbars=yes, width="+b+", height="+c+", top="+g+", left="+f);
if(ss.isValue(h)){h.focus()}};global.VEL.Wordwall.Global.Modals.Modal=aZ;
var a1=function(a){this.$f=null;this.$e=null;aZ.call(this,null,"move-item-modal-wrapper");
this.$f=a};a1.__typeName="VEL.Wordwall.Global.Modals.MoveModal";
global.VEL.Wordwall.Global.Modals.MoveModal=a1;var a3=function(a,b,c){this.$f=null;
this.$g=null;this.$h=null;aZ.call(this,"prompt-modal","prompt-modal-wrapper");
this.$f=a;this.$g=b;this.$h=c};a3.__typeName="VEL.Wordwall.Global.Modals.OkModal";
global.VEL.Wordwall.Global.Modals.OkModal=a3;var af=function(a,b){this.$h=null;
aZ.call(this,a,b+" paged-modal");this.$h=[]};af.__typeName="VEL.Wordwall.Global.Modals.PagedModal";
global.VEL.Wordwall.Global.Modals.PagedModal=af;var ah=function(){aZ.call(this,"progress-modal","progress-modal-wrapper")
};ah.__typeName="VEL.Wordwall.Global.Modals.ProgressModal";
global.VEL.Wordwall.Global.Modals.ProgressModal=ah;
var aj=function(a){this.$e=null;this.$f=null;aZ.call(this,"prompt-modal secret-modal","prompt-modal-wrapper");
this.$f=a};aj.__typeName="VEL.Wordwall.Global.Modals.ResultsLinkModal";
global.VEL.Wordwall.Global.Modals.ResultsLinkModal=aj;
var al=function(){this.$g=null;aZ.call(this,"prompt-modal","prompt-modal-wrapper")
};al.__typeName="VEL.Wordwall.Global.Modals.SendAsEmailModal";
global.VEL.Wordwall.Global.Modals.SendAsEmailModal=al;
var an=function(a){this.$o=false;this.$p=false;this.$n=false;
this.$m=false;this.startOnPublish=false;this.$3$1=null;
this.$3$2=null;af.call(this,"share-activity-modal","share-activity-modal-wrapper");
this.$l(a)};an.__typeName="VEL.Wordwall.Global.Modals.ShareModal";
an.$ctor1=function(a){this.$o=false;this.$p=false;this.$n=false;
this.$m=false;this.startOnPublish=false;this.$3$1=null;
this.$3$2=null;af.call(this,"share-activity-modal","share-activity-modal-wrapper");
this.$j(a)};an.openAsEmbed=function(a){var b=new an.$ctor1(a);
b.$o=true;b.open()};an.openAsQr$1=function(a){var b=new an.$ctor1(a);
if(a.get_isShared()){b.$p=true}else{b.startOnPublish=true;
b2.displayMessage(Strings.share_IsPrivate,true,-1)}b.open()
};an.openAsQr=function(a){cC.displayProgress();var b="/resultajax/gethomeworkinfo?homeworkId="+a;
$.getJSON(b,function(c){cC.success(null,false);var d=new an(c);
d.$p=true;d.open()})};an.openAsAssignment=function(a,b){var c=new an.$ctor1(a);
c.$n=true;c.$m=b;c.open()};an.openAsShare=function(a){var b=new an.$ctor1(a);
b.startOnPublish=true;b.open()};an.loadShareModal=function(a){cC.displayProgress();
var b="/resultajax/gethomeworkinfo?homeworkId="+a;$.getJSON(b,function(c){cC.success(null,false);
var d=new an(c);d.open()})};global.VEL.Wordwall.Global.Modals.ShareModal=an;
var ap=function(a){this.$e=null;aZ.call(this,"simple-modal","popup-info-modal-wrapper");
this.$e=a};ap.__typeName="VEL.Wordwall.Global.Modals.WelcomeBackModal";
global.VEL.Wordwall.Global.Modals.WelcomeBackModal=ap;
var ar=function(a,b,c,d){this.$g=null;this.$j=null;
this.$h=null;this.$i=null;aZ.call(this,"prompt-modal","prompt-modal-wrapper");
this.$g=a;this.$j=b;this.$h=c;this.$i=d};ar.__typeName="VEL.Wordwall.Global.Modals.YesNoModal";
global.VEL.Wordwall.Global.Modals.YesNoModal=ar;var au=function(){};
au.__typeName="VEL.Wordwall.Global.Modals.SharePages.$0";
var aw=function(a){var b=function(c){this.$0=null;this.$0=c
};ss.registerGenericClassInstance(b,aw,[a],{get_$domObject:function(){return $(this.get_$selector())
},get_$selector:null},function(){return null},function(){return[au]
});return b};aw.__typeName="VEL.Wordwall.Global.Modals.SharePages.$1";
ss.initGenericClass(aw,aa,1);var ay=function(a){this.$8=null;
this.$9=null;this.$7=null;aG.call(this,a);this.$8=new cF(".js-email-link-form",null);
if(ss.isValue(this.$0.$k())){this.$8.setByName("HomeworkId",this.$0.$k().HomeworkId.toString())
}else{if(ss.isValue(this.$0.$i())){this.$8.setByName("ActivityId",this.$0.$i().get_activityId().toString())
}}this.$7=new cN.$ctor1(".js-email-addresses-input");
this.$7.onKeyDown(ss.mkdel(this,this.$1));this.$9=new cj.$ctor4(this.get_$domObject(),".js-send-email-button",ss.mkdel(this,this.$6));
var b=new cj.$ctor4(this.get_$domObject(),".js-email-addresses-add-btn",ss.mkdel(this,this.$5));
Analytics.event("share","email-open","")};ay.__typeName="VEL.Wordwall.Global.Modals.SharePages.$10";
var aA=function(a,b,c){this.$c=0;this.$8=null;this.$e=null;
this.$a=null;this.$d=null;this.$b=null;this.$7=null;
this.$9=false;aG.call(this,a);var d=new cr.$ctor1(".js-embed-loading");
var e=new cr.$ctor1(".js-embed-settings");d.set_isVisible(true);
e.set_isVisible(false);this.$c=b;this.$8=new b5.$ctor1(".js-embed-templates");
this.$e=new b7("embed_type",ss.mkdel(this,function(){this.$3(null)
}));this.$a=new ab(".js-embed-language",null,ss.mkdel(this,function(g){this.$3(null)
}));this.$d=new ab(".js-embed-theme",null,ss.mkdel(this,function(g){this.$3(null)
}));this.$7=new cN.$ctor1(".js-embed-code-textarea");
this.$b=new cr.$ctor1(".js-embed-preview-wrapper");
var f=new cj.$ctor3(".js-copy-embed",ss.mkdel(this,this.$1),true);
if(b===2||b===3){this.$a.set_isVisible(false);this.$a.get_label().set_isVisible(false);
this.$d.set_isVisible(false);this.$d.get_label().set_isVisible(false)
}window.setTimeout(ss.mkdel(this,function(){this.$2(ss.mkdel(this,function(){this.$3(ss.mkdel(this,function(){d.set_isVisible(false);
e.set_isVisible(true);this.$5(c)}))}))}),(c?0:500))
};aA.__typeName="VEL.Wordwall.Global.Modals.SharePages.$11";
var aC=function(){};aC.__typeName="VEL.Wordwall.Global.Modals.SharePages.$12";
var aE=function(a){this.$4=false;this.$6=null;this.$5=null;
this.$3=null;aG.call(this,a);this.$6=new cN.$ctor3(this.get_$domObject(),".js-resource-title");
this.$6.set_value(a.$i().get_title());this.$5=new cj.$ctor4(this.get_$domObject(),".js-next-publish",ss.mkdel(this,this.$2));
this.$3=new aW(this.get_$domObject(),a.$i().get_activityId());
if(a.startOnPublish){var b=new cN.$ctor3(this.get_$domObject(),".js-share-title");
b.set_text(Strings.share_Resource_Title);var c=new cj.$ctor4(this.get_$domObject(),".js-back-step",ss.mkdel(this,this.$2));
var d=new cj.$ctor4(this.get_$domObject(),".js-share-private",ss.mkdel(this,this.$1));
c.set_isVisible(false);d.set_isVisible(true)}Analytics.event("share","publish-page","")
};aE.__typeName="VEL.Wordwall.Global.Modals.SharePages.$13";
var aG=function(a){ss.makeGenericType(aw,[an]).call(this,a)
};aG.__typeName="VEL.Wordwall.Global.Modals.SharePages.$2";
var aI=function(a,b,c){this.$4=null;this.$5=null;this.$6=null;
this.$7=null;aG.call(this,a);this.$4=b;this.$5=c;this.$6=new cj.$ctor1(".js-view-gc-assignment-on-gc");
this.$7=new cj.$ctor1(".js-view-gc-assignment-on-wordwall");
this.$3()};aI.__typeName="VEL.Wordwall.Global.Modals.SharePages.$3";
var aK=function(a,b,c,d){this.$j=null;this.$g=null;
this.$k=null;this.$i=null;this.$d=null;this.$e=null;
this.$f=null;this.$m=null;this.$h=null;this.$l=null;
aG.call(this,a);this.$j=b;this.$g=c;this.$k=d;this.$i=new cg(".js-gc-course-select",null,null);
var e=new b7(".js-gc-assign-to-radio",null);e.set_value(0);
this.$d=e;this.$e=new cr.$ctor1(".js-gc-assign-to-student-list");
this.$f=new cr.$ctor1(".js-gc-assign-to-student-no-students");
this.$m=new cj.$ctor1(".js-gc-share-button");this.$h=new cj.$ctor1(this.get_$selector()+" .js-back-step");
this.$b();this.$2();Analytics.event("share","gc-assignment-page","")
};aK.__typeName="VEL.Wordwall.Global.Modals.SharePages.$4";
aK.$0=function(a){return((ss.isValue(a)&&a.Unix!==0)?VEL.Wordwall.Global.Extensions.DateTimeExtensions.fromUnix(a.Unix):null)
};var aM=function(a){aG.call(this,a)};aM.__typeName="VEL.Wordwall.Global.Modals.SharePages.$5";
var aO=function(a,b,c,d){aG.call(this,a);var e=new cr.$ctor1(".js-qr-title");
e.set_text(b);var f=e;var g=new Image();g.src=c;var h=g;
var i=new cL.$ctor1(h,null,null);var j=new cr.$ctor1(".js-qr-image");
j.empty();j.append(i);var k=new cj.$ctor1(".js-back-step");
if(d){k.set_isVisible(true)}};aO.__typeName="VEL.Wordwall.Global.Modals.SharePages.$6";
var aQ=function(a,b){this.$a=null;this.$b=0;aG.call(this,a);
this.$b=b;var c=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-email",ss.mkdel(this,this.$1));
var d=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-facebook",ss.mkdel(this,this.$3));
var e=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-twitter",ss.mkdel(this,this.$7));
var f=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-embed",ss.mkdel(this,this.$2));
var g=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-qr",ss.mkdel(this,this.$6));
var h=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-google",ss.mkdel(this,this.$4));
var i=new cj.$ctor4(this.get_$domObject(),".js-share-modal-by-vk",ss.mkdel(this,this.$8));
var j=new cj.$ctor4(this.get_$domObject(),".js-share-modal-native",ss.mkdel(this,this.$5));
if(navigator.share!=undefined&&cO.isPhoneSized()){j.set_isVisible(true)
}else{d.set_isVisible(true);e.set_isVisible(true);if(ServerModel.useVk){i.set_isVisible(true)
}}h.set_isVisible(b===0||b===1||((window.FS1===undefined||window.FS1.Hide_Gc_Assignment===undefined)?false:window.FS1.Hide_Gc_Assignment)&&(b===2||b===3));
this.$a=new cN.$ctor3(this.get_$domObject(),".js-share-link-input");
var k=new cj.$ctor4(this.get_$domObject(),".js-share-link-copy",ss.mkdel(this.$a,this.$a.copy));
var l=new cj.$ctor4(this.get_$domObject(),".js-back-step",ss.mkdel(this,this.$9));
if(b===2||b===3){this.$a.set_value(this.$0.$k().Url)
}else{this.$a.set_value(cA.getShortUrl(this.$0.$i().get_activityId(),true));
if(this.$0.$i().get_isAuthor()){(new cr.$ctor3(l.get_domObject(),".js-settings-text")).set_isVisible(true);
(new cr.$ctor3(l.get_domObject(),".js-back-text")).set_isVisible(false)
}else{l.set_isVisible(false)}if(this.$0.$i().get_hasCopyrightInfringement()){var m=new cr.$ctor1(".js-share-copyright");
m.set_isVisible(true);var n=new cr.$ctor1(".js-share-link");
n.set_isVisible(false);l.set_isVisible(false);var o=new cr.$ctor1(".js-share-buttons");
o.set_isVisible(false)}}};aQ.__typeName="VEL.Wordwall.Global.Modals.SharePages.$7";
var aS=function(a,b){this.$p=null;this.$m=null;this.$n=null;
this.$f=null;this.$k=null;this.$i=null;this.$j=null;
this.$o=null;this.$e=null;this.$g=null;this.$h=null;
this.$l=null;aG.call(this,a);this.$p=new cN.$ctor1(".js-results-title");
var c=new b7(".js-register-radio",null);c.set_value(1);
this.$m=c;this.$n=new cr.$ctor1(".js-register-gc-options");
var d=new b7(".js-deadline-radio",null);d.set_value(0);
this.$f=d;this.$g=new cv(".js-deadline-date",null);
this.$h=new ab(".js-deadline-time",900,null);var e=new cp.$ctor1(".js-gameover-review",null);
e.set_isChecked(true);this.$k=e;var f=new cp.$ctor1(".js-gameover-leaderboard",null);
f.set_isChecked(false);this.$i=f;var g=new cp.$ctor1(".js-gameover-restart",null);
g.set_isChecked(true);this.$j=g;this.$l=new cN.$ctor1(".js-gc-max-points");
this.$o=new cj.$ctor3(".js-next-start",ss.mkdel(this,this.$5),true);
this.$e=new cj.$ctor1(this.get_$selector()+" .js-back-step");
(new cr.$ctor1(".js-register-option-expt")).set_isVisible(!b);
this.$a();this.$4();this.$8();Analytics.event("share","assignment-page","")
};aS.__typeName="VEL.Wordwall.Global.Modals.SharePages.$8";
var aU=function(a,b,c,d){this.$2$1=null;this.$2$2=null;
cr.call(this,b);this.$6(a);this.$2(new cp.$ctor2(this.get_domObject(),"input",ss.mkdel(this,function(){d(this)
})));var e=new cj.$ctor4(this.get_domObject(),".js-edit-tag",ss.mkdel(this,function(){c(this)
}))};aU.__typeName="VEL.Wordwall.Global.Modals.SharePages.$9";
var aW=function(a,b){this.$z=[];this.$m=[];this.$A=[];
this.$t=false;this.$y=null;this.$x=null;this.$w=null;
this.$p=null;this.$l=null;this.$v=null;this.$n=null;
this.$h=null;this.$j=null;this.$i=null;this.$o=null;
this.$u=null;this.$r=null;this.$s=null;this.$q=null;
this.$k=null;this.$g=0;cr.$ctor2.call(this,a);this.$g=b;
this.$p=new cr.$ctor3(this.get_domObject(),".js-edit-wrapper");
this.$l=new cr.$ctor3(this.get_domObject(),".js-add-wrapper");
this.$v=new cr.$ctor3(this.get_domObject(),".js-remove-wrapper");
var c=new cj.$ctor4(this.get_domObject(),".js-popup-inner",function(){});
this.$n=new cN.$ctor3(this.get_domObject(),".js-edit-input");
this.$h=new cN.$ctor3(this.get_domObject(),".js-add-input");
var d=new cj.$ctor4(this.get_domObject(),".js-popup-cancel",ss.mkdel(this,this.$c));
this.$o=new cj.$ctor4(this.get_domObject(),".js-edit-ok",ss.mkdel(this,this.$a));
var e=new cj.$ctor4(this.get_domObject(),".js-edit-delete",ss.mkdel(this,this.$9));
this.$i=new cj.$ctor4(this.get_domObject(),".js-add-ok",null);
this.$j=new cr.$ctor3(this.get_domObject(),".js-add-title");
this.$u=new cj.$ctor4(this.get_domObject(),".js-remove-ok",ss.mkdel(this,this.$d));
this.$r=new b5.$ctor3(this.get_domObject(),".js-insert-tags");
if(this.$r.get_isEmpty()){this.$5()}else{this.$1()}};
aW.__typeName="VEL.Wordwall.Global.Modals.SharePages.EditTagsSection";
global.VEL.Wordwall.Global.Modals.SharePages.EditTagsSection=aW;
var aY=function(){};aY.__typeName="VEL.Wordwall.Global.Pages.IActivityPage";
global.VEL.Wordwall.Global.Pages.IActivityPage=aY;var a0=function(){};
a0.__typeName="VEL.Wordwall.Global.Pages.IEditorPage";
global.VEL.Wordwall.Global.Pages.IEditorPage=a0;var a2=function(){};
a2.__typeName="VEL.Wordwall.Global.Pages.IFolderPlayPage";
global.VEL.Wordwall.Global.Pages.IFolderPlayPage=a2;
var a4=function(){};a4.__typeName="VEL.Wordwall.Global.Pages.IMyActivitiesPage";
global.VEL.Wordwall.Global.Pages.IMyActivitiesPage=a4;
var a7=function(){};a7.__typeName="VEL.Wordwall.Global.Pages.IMyItemsPage";
global.VEL.Wordwall.Global.Pages.IMyItemsPage=a7;var a8=function(){};
a8.__typeName="VEL.Wordwall.Global.Pages.IMyResultsPage";
global.VEL.Wordwall.Global.Pages.IMyResultsPage=a8;
var a9=function(){};a9.__typeName="VEL.Wordwall.Global.Pages.IPlayPage";
global.VEL.Wordwall.Global.Pages.IPlayPage=a9;var b0=function(){};
b0.__typeName="VEL.Wordwall.Global.Pages.IResultPage";
global.VEL.Wordwall.Global.Pages.IResultPage=b0;var b1=function(){};
b1.__typeName="VEL.Wordwall.Global.Pages.ModeEnum";
global.VEL.Wordwall.Global.Pages.ModeEnum=b1;ss.initClass(ac,aa,{});
ss.initClass(a5,aa,{});ss.initClass(b2,aa,{});ss.initClass(b4,aa,{});
ss.initClass(b6,aa,{});ss.initClass(cr,aa,{get_domObject:function(){return this.$1$1
},set_domObject:function(a){this.$1$1=a},get_element:function(){return this.get_domObject().get(0)
},get_html:function(){return this.get_domObject().html()
},set_html:function(a){this.get_domObject().html(a)
},get_text:function(){return this.get_domObject().text()
},set_text:function(a){this.get_domObject().text(a)
},onClick:function(a,b,c){if(ss.staticEquals(a,null)){return
}this.get_domObject().on("click",function(d){if(b&&(d.ctrlKey||d.altKey||d.shiftKey)){return
}if(c){d.preventDefault();d.stopPropagation()}a()})
},onHover:function(a,b){if(!ss.staticEquals(a,null)){this.get_domObject().on("mouseover",function(c){a()
})}if(!ss.staticEquals(b,null)){this.get_domObject().on("mouseout",function(c){b()
})}},offClick:function(){this.get_domObject().off("click")
},onBlur:function(a){this.get_domObject().on("blur",function(b){b.preventDefault();
b.stopPropagation();a()})},get_children:function(){return Enumerable.from(this.get_domObject().children().get()).select(function(a){return new cr(a)
}).toArray()},find:function(a){return function(b){return ss.cast(new a(this.get_domObject().find(b)),a)
}},get_exists:function(){return this.get_domObject().length>0
},empty:function(){this.get_domObject().empty()},get_isEmpty:function(){var a=this.get_domObject().text();
return ss.isNullOrEmptyString(a.trim())},animate:function(a,b,c,d,e){var f={};
f[a]=b;this.get_domObject().stop().animate(f,c,e,d)
},focus:function(){this.get_domObject().focus()},fadeIn:function(a){this.set_isVisible(true);
this.get_domObject().fadeIn(a)},fadeOut:function(a){this.get_domObject().fadeOut(a);
window.setTimeout(ss.mkdel(this,function(){this.set_isVisible(false)
}),a)},fadeInOut:function(a,b,c){this.fadeIn(a);window.setTimeout(ss.mkdel(this,function(){this.fadeOut(c)
}),b+a)},remove:function(){this.get_domObject().remove()
},replaceWith:function(a){this.get_domObject().replaceWith(a)
},get_isHighlighted:function(){return this.hasClass("highlighted")
},set_isHighlighted:function(a){if(a){this.addClass("highlighted")
}else{this.removeClass("highlighted")}},get_isHovered:function(){if(this.get_domObject().length<1){return false
}return $(this.get_domObject()[0]).is(":hover")},get_isChecked:function(){return this.get_domObject().prop("checked")
},set_isChecked:function(a){this.get_domObject().prop("checked",a)
},getData:function(a,b,c){var d=this.get_domObject();
var e;do{e=d.attr("data-"+a);if(ss.isValue(e)||c===false){break
}d=d.parent();if(ss.isNullOrUndefined(d)||d.length===0){break
}}while(true);if(ss.isNullOrUndefined(e)){return b}return e
},getDataAsInt:function(a,b,c){var d=this.getData(a,null,c);
var e={};if(ss.Int32.tryParse(d,e)){return e.$}return b
},getDataAsIntList:function(a,b){var c=this.getData(a,null,b).split(",");
var d=[];var e={};for(var f=0;f<c.length;f++){var g=c[f];
if(ss.Int32.tryParse(g,e)){d.push(e.$)}}return d},getDataAsBool:function(a,b,c){var d=this.getData(a,null,c);
if(ss.isNullOrUndefined(d)){return b}return d.toLowerCase()==="true"
},getAttribute:function(a){return this.get_domObject().attr(a)
},setAttribute:function(a,b){this.get_domObject().attr(a,b.toString())
},removeAttribute:function(a){this.get_domObject().removeAttr(a)
},addClass:function(a){this.get_domObject().addClass(a)
},removeClass:function(a){this.get_domObject().removeClass(a)
},hasClass:function(a){return this.get_domObject().hasClass(a)
},height:function(){return this.get_domObject().height()
},height$1:function(a){this.get_domObject().height(a)
},width:function(){return this.get_domObject().width()
},width$1:function(a){this.get_domObject().width(a)
},width$2:function(a){this.get_domObject().width(a)
},get_outerWidth:function(){return this.get_domObject().outerWidth(true)
},get_outerHeight:function(){return this.get_domObject().outerHeight(true)
},CSS:function(a,b){this.get_domObject().css(a,b)},CSS$1:function(a,b){this.get_domObject().css(a,b)
},prepend:function(a){this.prepend$1(a.get_domObject())
},prepend$1:function(a){this.get_domObject().prepend(a)
},append:function(a){this.append$1(a.get_domObject())
},append$1:function(a){this.get_domObject().append(a)
},appendTo:function(a){this.get_domObject().appendTo(a.get_domObject())
},insertAfter:function(a){this.get_domObject().insertAfter(a.get_domObject())
},$0:function(a){this.get_domObject().prependTo(a.get_domObject())
},attribute:function(a){return this.get_domObject().attr(a)
},attribute$1:function(a,b){this.get_domObject().attr(a,b.toString())
},get_isVisible:function(){return !this.hasClass("hidden")
},set_isVisible:function(a){if(a){this.removeClass("hidden")
}else{this.addClass("hidden")}},setEnable:function(a){if(a){this.enable()
}else{this.disable()}},enable:function(){this.get_domObject().removeClass("unavailable");
this.get_domObject().prop("disabled",false);this.get_domObject().prop("readonly",false)
},disable:function(){this.get_domObject().addClass("unavailable");
this.get_domObject().prop("disabled",true);this.get_domObject().prop("readonly",true)
},slideUp:function(a,b){this.get_domObject().slideUp(a,b)
},slideDown:function(a,b){this.get_domObject().slideDown(a,b)
}});cr.$ctor1.prototype=cr.$ctor2.prototype=cr.$ctor3.prototype=cr.$ctor4.prototype=cr.prototype;
ss.initClass(b5,aa,{contains:function(a){return this.get_domObject().find(a.get_domObject()).length!==0
},scrollIntoView:function(){var a=this.get_domObject()[0];
var b=a.offsetTop+a.offsetHeight-window.innerHeight;
if(b<window.scrollY){return}var c={};c.scrollTop=Math.max(0,b);
$("html, body").animate(c)},get_isScrolledIntoView:function(){if(!this.get_exists()){return false
}var a=$(window).scrollTop();var b=a+$(window).height();
var c=this.get_domObject().offset().top;var d=c+this.get_domObject().height();
return c>a&&c<b||d>a&&d<b||c<=a&&d>=b}},cr);b5.$ctor1.prototype=b5.$ctor3.prototype=b5.$ctor2.prototype=b5.prototype;
ss.initClass(b8,aa,{$2:function(){this.$8=new b5.$ctor3(this.get_domObject(),".js-menu-dropdown");
if(!this.$8.get_exists()){return}this.$7=new ch(ss.mkdel(this,this.$1));
this.$9=new b5.$ctor3(this.get_domObject(),".js-menu-inline");
this.$b=new cj.$ctor4(this.get_domObject(),".js-menu-toggle",ss.mkdel(this,this.$5));
this.$6=new cH.$ctor1(this.get_domObject(),".js-menu-toggle-icon");
this.$c=new cr.$ctor3(this.get_domObject(),".js-more-separator");
$(window).on("resize",ss.mkdel(this,function(e){var f=$(window).width();
if(this.$d===f){return}this.$d=f;this.refresh()}));
this.$a=[];var a=this.$9.get_domObject().find(".js-menu-item").get();
for(var b=0;b<a.length;b++){var c=a[b];var d=new cr(c);
this.$a.push(d);d.get_domObject().on("click",ss.mkdel(this,function(e){this.$1()
}))}this.refresh()},refresh:function(){if(!this.$8.get_exists()){return
}var a=cO.isPortraitPhoneSized();this.set_isVisible(true);
this.$1();var b=Enumerable.from(this.$a).where(function(o){return o.get_isVisible()&&!(a&&o.hasClass("hide-on-mobile"))
});var c=b.where(function(o){return !o.hasClass("js-never-menu")&&!o.hasClass("js-always-menu")
});var d=b.count(function(o){return o.hasClass("js-never-menu")
});var e=b.where(function(o){return o.hasClass("js-always-menu")
});var f=b.any(function(o){return o.hasClass("js-always-menu")
});this.$b.set_isVisible(f);var g=e.getEnumerator();
try{while(g.moveNext()){var h=g.current();if(!this.$8.contains(h)){h.get_domObject().detach().appendTo(this.$8.get_domObject())
}}}finally{g.dispose()}var i=c.getEnumerator();try{while(i.moveNext()){var j=i.current();
if(!this.$9.contains(j)){j.get_domObject().detach().appendTo(this.$9.get_domObject())
}}}finally{i.dispose()}var k=this.$3();if(k){this.$b.set_isVisible(true);
this.$c.set_isVisible(true);var l=d+c.count();var m=c.reverse().getEnumerator();
try{while(m.moveNext()){var n=m.current();l--;n.get_domObject().detach().prependTo(this.$8.get_domObject());
k=this.$3();if(!k){break}}}finally{m.dispose()}this.$c.set_isVisible(l!==0)
}else{this.$b.set_isVisible(f)}this.set_isVisible(b.any(function(o){return o.get_isVisible()
}))},$3:function(){var a=this.$b.get_domObject().position();
if(ss.isNullOrUndefined(a)){return false}var b=this.$9.get_children();
for(var c=0;c<b.length;c++){var d=b[c];if(d.hasClass("js-menu-item")){var e=d.get_domObject().position().top;
if(e!==a.top){return true}}}return false},$5:function(){if(this.$8.get_isVisible()){this.$1()
}else{this.$4();var a=this.$8.get_domObject();var b=a.offset().top+a.height()+20;
var c=window.scrollY+window.innerHeight;if(c<b){var d=window.scrollY+(b-c);
var e={};e.scrollTop=d;$("html,body").animate(e,250)
}}},$1:function(){this.$7.fadeOut$1();this.$6.removeClass("fa-angle-up");
this.$6.addClass("fa-angle-down");this.$8.set_isVisible(false)
},$4:function(){this.$7.fadeIn$1();this.$6.addClass("fa-angle-up");
this.$6.removeClass("fa-angle-down");this.$8.set_isVisible(true)
}},b5);ss.initClass(cf,aa,{play$1:function(a,b){if(ss.isValue(b)){this.setVolume(ss.unbox(b))
}this.setSource(a);this.play()},play:function(){this.get_element().play()
},pause:function(){this.get_element().pause()},stop:function(){this.pause();
this.seek(0)},seek:function(a){this.get_element().currentTime=a
},setSource:function(a){this.stop();this.$1.setAttribute("src",a);
this.get_element().load()},setVolume:function(a){this.get_element().volume=a
}},cr);ss.initClass(cj,aa,{get_href:function(){return this.get_domObject().attr("href")
},set_href:function(a){this.get_domObject().attr("href",a)
},hasLoadingGif:function(){return this.get_domObject().hasClass("is-loading")
},resetLoadingGif:function(){this.get_domObject().removeClass("is-loading");
this.get_domObject().find(".js-is-loading").remove();
this.get_domObject().css("color","");this.get_domObject().prop("disabled",false);
window.setTimeout(ss.mkdel(this,function(){this.get_domObject().prop("disabled",false)
}),0)},addLoadingGif:function(){if(this.get_domObject().hasClass("is-loading")){return
}var a=((!this.get_domObject().hasClass("grey")&&!this.get_domObject().hasClass("white"))?"#spinner_blue":"#spinner_grey");
var b=$(a).clone();b.addClass("js-is-loading");b.removeClass("hidden");
this.get_domObject().addClass("is-loading");var c=this.get_domObject().width();
var d=this.get_domObject().height();this.get_domObject().prepend(b);
this.get_domObject().css("color","transparent");this.get_domObject().width(c);
this.get_domObject().height(d);window.setTimeout(ss.mkdel(this,function(){this.get_domObject().prop("disabled",true)
}),0)}},cr);cj.$ctor1.prototype=cj.$ctor4.prototype=cj.$ctor3.prototype=cj.$ctor2.prototype=cj.prototype;
ss.initClass(ch,aa,{fadeIn$1:function(){this.set_isVisible(true);
this.CSS$1("transition","opacity 0.5s");this.CSS$1("opacity","0.08");
this.CSS$1("visibility","visible")},fadeOut$1:function(){this.CSS$1("transition","opacity 0.5s,visibility 0s linear 0.5s");
this.CSS$1("opacity","0");this.CSS$1("visibility","hidden")
}},cj);ss.initClass(cl,aa,{onClicks:function(a,b,c){if(ss.staticEquals(a,null)){return
}this.get_domObject().on("click",ss.mkdel(this,function(d){if(b&&(d.ctrlKey||d.altKey||d.shiftKey)){return
}var e=$(d.target);var f=Enumerable.from(this.$1).firstOrDefault(function(g){return g.get_domObject().is(e)||g.get_domObject().find(e).length!==0
},ss.getDefaultValue(cj));if(c){d.preventDefault();
d.stopPropagation()}if(ss.isValue(f)){a(f)}}))},get:function(a){return this.$1[a]
},getEach:function(){return this.$1},getOthers:function(a){return Enumerable.from(this.$1).where(function(b){return !a.get_domObject().is(b.get_domObject())
})}},cr);ss.initClass(cn,aa,{get_width:function(){return this.$0.width
},set_width:function(a){this.$0.width=a},get_height:function(){return this.$0.height
},set_height:function(a){this.$0.height=a},get_context:function(){return ss.cast(this.$0.getContext("2d"),CanvasRenderingContext2D)
},get_isReady:function(){return this.$0.clientWidth>0&&this.$0.clientHeight>0
},normalize:function(){if(this.$0.width!==this.$0.clientWidth||this.$0.height!==this.$0.clientHeight){this.$0.width=this.$0.clientWidth;
this.$0.height=this.$0.clientHeight}},on:function(a,b){$(this.$0).on(a,b)
},addClass:function(a){this.$0.classList.add(a)},removeClass:function(a){if(this.$0.classList.contains(a)){this.$0.classList.remove(a)
}},rotate:function(){var a=cn.create();a.set_width(this.get_width());
a.set_height(this.get_height());a.get_context().drawImage(this.$0,0,0);
this.set_height(a.get_width());this.set_width(a.get_height());
var b=this.get_context();b.save();b.translate(a.get_height(),0);
b.rotate(Math.PI/2);b.drawImage(a.$0,0,0);b.restore()
},flip:function(a){var b=cn.create();b.set_width(this.get_width());
b.set_height(this.get_height());b.get_context().drawImage(this.$0,0,0);
var c=this.get_context();c.save();if(a){c.translate(b.get_width(),0);
c.scale(-1,1)}else{c.translate(0,b.get_height());c.scale(1,-1)
}c.drawImage(b.$0,0,0);c.restore()},getRect:function(){return this.$0.getBoundingClientRect()
},crop:function(a,b,c,d){var e=cn.create();e.set_width(this.get_width());
e.set_height(this.get_height());e.get_context().drawImage(this.$0,0,0);
this.set_width(c);this.set_height(d);var f=this.get_context();
f.fillStyle="white";f.fillRect(0,0,c,d);f.drawImage(e.$0,a,b,c,d,0,0,c,d)
},toBase64:function(){var a=this.get_context().getImageData(0,0,this.get_width(),this.get_height()).data;
for(var b=0;b<a.length;b+=12){if(a[b+3]<255){var c=this.$0.toDataURL("image/png",null);
return c.substring(c.indexOf(String.fromCharCode(44))+1)
}}var d=this.$0.toDataURL("image/jpeg",null);var e=this.$0.toDataURL("image/png",null);
var f=((d.length<e.length)?d:e);return f.substring(f.indexOf(String.fromCharCode(44))+1)
}});cn.$ctor1.prototype=cn.prototype;ss.initClass(cp,aa,{},cj);
cp.$ctor2.prototype=cp.$ctor1.prototype=cp.prototype;
ss.initClass(ct,aa,{get:function(a){return this.$1[a]
},getEach:function(){return this.$1},getOthers:function(a){return Enumerable.from(this.$1).where(function(b){return !a.get_domObject().is(b.get_domObject())
})}},cr);ct.$ctor1.prototype=ct.prototype;ss.initClass(cN,aa,{get_isEmpty:function(){return this.get_domObject().length===0||this.get_value().length===0
},get_value:function(){return this.get_domObject().val()
},set_value:function(a){this.get_domObject().val(a)
},get_maxLength:function(){var a=this.get_domObject().attr("maxlength");
if(ss.isNullOrEmptyString(a)){return null}return parseInt(a)
},set_maxLength:function(a){if(ss.isNullOrUndefined(a)){this.get_domObject().removeAttr("maxlength")
}else{this.get_domObject().attr("maxlength",ss.unbox(a).toString())
}},blur:function(){this.get_domObject().blur()},selectEnd:function(){if(window.matchMedia("(pointer: coarse)").matches){return
}var a=this.get_value();this.set_value("");this.focus();
this.set_value(a)},selectAll:function(){var a=this.get_domObject().get(0);
switch(a.tagName.toLowerCase()){case"textarea":break;
case"input":break}this.get_domObject().select()},get_files:function(){var a=this.get_domObject().get(0);
return ss.cast(a,ss.isValue(a)&&(ss.isInstanceOfType(a,Element)&&a.tagName==="INPUT")).files
},onEnter:function(a){this.get_domObject().on("keydown",function(b){if(b.keyCode===13||b.which===13){b.preventDefault();
b.stopPropagation()}});this.get_domObject().on("keyup",function(b){if(b.keyCode===13||b.which===13){b.preventDefault();
b.stopPropagation();a()}})},onKeyUp:function(a){this.get_domObject().on("keyup",function(b){if(!a(b.keyCode)){b.stopPropagation();
b.preventDefault()}})},onKeyDown:function(a){this.get_domObject().on("keydown",function(b){if(!a(b.keyCode)){b.stopPropagation();
b.preventDefault()}})},onChange:function(a,b){this.get_domObject().on((b?"change input":"change"),function(c){a()
})},offChange:function(){this.get_domObject().off("change input")
},setEnable$1:function(a){if(a){this.enable$1()}else{this.disable$1()
}},enable$1:function(){this.get_domObject().removeClass("unavailable");
this.get_domObject().prop("disabled",false);this.get_domObject().prop("readonly",false)
},disable$1:function(){this.get_domObject().addClass("unavailable");
this.get_domObject().prop("disabled",true);this.get_domObject().prop("readonly",true)
},copy:function(){this.selectAll();document.execCommand("copy")
},get_hasValidationError:function(){return this.hasClass("invalid")
},setupValidation:function(a,b){if(!this.get_exists()){return
}if(b){if(ss.staticEquals(a,null)){throw new ss.ArgumentException()
}this.$7=ss.mkdel(this,function(){this.$2();a()})}else{this.$7=a||ss.mkdel(this,this.$2)
}this.$5=new cr.$ctor2(this.get_domObject().siblings(".js-validation-icon-wrapper").first());
this.$4=new cr.$ctor2(this.$5.get_domObject().find(".js-validation-icon"));
this.$6=new cr.$ctor2(this.$5.get_domObject().find(".js-validation-optional"));
var c=0;var d=this.get_value();this.get_domObject().on("input",ss.mkdel(this,function(g){this.get_domObject().removeAttr("data-input-is-valid")
}));var e=this.get_domObject().attr("type");var f=((e==="file"||e==="hidden")?"change":"input");
this.get_domObject().on(f,ss.mkdel(this,function(g){var h=this.getAttribute("data-input-is-valid");
var i=ss.isValue(h)&&h.toLowerCase()==="true";if(ss.referenceEquals(this.get_value(),d)||i){return
}d=this.get_value();this.validate(3);if(c!==0){window.clearTimeout(c)
}c=window.setTimeout(this.$7,500)}));this.$7()},$2:function(){var a=this.get_value().length;
if(a>50){this.validate(2)}else{if(a>0){this.validate(1)
}else{this.validate(3)}}},validate:function(a){switch(a){case 0:this.$7();
break;case 1:this.removeClass("invalid");this.addClass("valid");
this.$4.addClass("valid");this.$4.removeClass("invalid");
this.$4.addClass("fa-check-circle");this.$4.removeClass("fa-close");
this.$3();this.$4.set_isVisible(true);this.$6.set_isVisible(false);
break;case 2:this.removeClass("valid");this.addClass("invalid");
this.$4.removeClass("valid");this.$4.addClass("invalid");
this.$4.removeClass("fa-check-circle");this.$4.addClass("fa-close");
this.$3();this.$4.set_isVisible(true);break;case 4:this.$3();
this.removeClass("invalid");this.removeClass("valid");
this.$4.removeClass("valid");this.$4.removeClass("invalid");
this.$4.addClass("fa-check-circle");this.$4.removeClass("fa-close");
this.$4.set_isVisible(true);this.$6.set_isVisible(true);
break;case 3:if(this.get_domObject().length>0&&!ss.isNullOrEmptyString(this.get_value())){this.$4.set_isVisible(false);
this.removeClass("invalid");this.removeClass("valid");
this.$4.removeClass("valid");this.$4.removeClass("invalid");
this.$4.addClass("fa-check-circle");this.$4.removeClass("fa-close");
this.$1()}else{this.validate(4)}break}},$3:function(){this.$5.get_domObject().find(".js-loading-gif").remove()
},$1:function(){var a=this.$5.get_domObject().find(".js-loading-gif");
if(a.length===0){this.$5.get_domObject().append("<span class='js-loading-gif'><img src='//az779572.vo.msecnd.net/res/content/images/input_loading.gif|1bxrvgqh092ohm092vwv3_g2.gif'></span>")
}},setReadonly:function(a){this.get_domObject().prop("readonly",a)
}},cr);cN.$ctor2.prototype=cN.$ctor1.prototype=cN.$ctor3.prototype=cN.$ctor4.prototype=cN.prototype;
ss.initClass(cv,aa,{},cN);ss.initEnum(cx,aa,{none:0,ok:1,blocked:2});
ss.initClass(cz,aa,{get_status:function(){return this.$5
},set_status:function(a){if(this.$5===a){return}this.$5=a;
switch(a){case 0:this.$4.set_isVisible(false);this.$1.set_isVisible(false);
break;case 1:this.$4.set_isVisible(true);this.$1.set_isVisible(false);
break;case 2:this.$4.set_isVisible(false);this.$1.set_isVisible(true);
break}},setPosition:function(a,b){this.$6=a;this.$7=b;
this.CSS("left",a+12);this.CSS("top",b+12)},hasMoved:function(a,b){return(this.$6-a)*(this.$6-a)+(this.$7-b)*(this.$7-b)>20
},setItemName:function(a){this.$3.set_text(a)},setItemImage:function(a){this.$2.get_domObject().attr("src",a)
}},cr);ss.initClass(cB,aa,{get_files$1:function(){var a=this.get_element();
return ss.cast(a,ss.isValue(a)&&(ss.isInstanceOfType(a,Element)&&a.tagName==="INPUT")).files
},get_file:function(){if(ss.isNullOrUndefined(this.get_files$1())||this.get_files$1().length===0){return null
}return this.get_files$1().item(0)},setAccepts:function(a){this.get_domObject().attr("accepts",a.join(","))
}},cN);cB.$ctor2.prototype=cB.$ctor1.prototype=cB.$ctor3.prototype=cB.prototype;
ss.initClass(cD,aa,{},cr);ss.initClass(cF,aa,{submitByAjax:function(a,b){$.ajax({url:this.$1,type:"POST",data:this.serialize(),success:function(c,d,e){if(!ss.staticEquals(a,null)){a(c)
}},error:function(c,d,e){if(!ss.staticEquals(b,null)){b()
}}})},submit:function(){this.get_domObject().submit()
},serialize:function(){return this.get_domObject().serialize()
},setByName:function(a,b){$("input[name="+a+"]").val(b)
}},cr);ss.initClass(cH,aa,{},cr);cH.$ctor1.prototype=cH.prototype;
ss.initInterface(cJ,aa,{onMouseEnter:null,onMouseLeave:null});
ss.initClass(cL,aa,{get_src:function(){return this.$2.src
},set_src:function(a){this.$2.src=a},get_isPortrait:function(){return this.$2.width<this.$2.height
},convertToBase64:function(a,b){var c=this.$1(a,b);
return c.toBase64()},copyToCanvas:function(a){a.set_width(this.$2.naturalWidth);
a.set_height(this.$2.naturalHeight);a.get_context().drawImage(this.$2,0,0)
},$1:function(a,b){var c=cn.create();var d=((b===3)?200:100);
if(a>d){var e=Math.sqrt(a/d);c.set_width(ss.Int32.trunc(this.$2.naturalWidth/e));
c.set_height(ss.Int32.trunc(this.$2.naturalHeight/e))
}else{c.set_width(this.$2.naturalWidth);c.set_height(this.$2.naturalHeight)
}c.get_context().drawImage(this.$2,0,0,this.$2.naturalWidth,this.$2.naturalHeight,0,0,c.get_width(),c.get_height());
return c}},cr);cL.$ctor1.prototype=cL.prototype;ss.initClass(cP,aa,{get:function(a){return this.$1[a]
},getEach:function(){return this.$1}},cr);ss.initClass(b9,aa,{get_selectedOption:function(){return new cr.$ctor2(this.get_domObject().find("option:selected"))
},get_label:function(){return new cr.$ctor2($("label[for="+this.getAttribute("id")+"]"))
},get_text:function(){var a=this.get_domObject().val();
var b=this.get_domObject().find("option[value="+a+"]");
return b.text()},set_text:function(a){var b=this.get_domObject().find("option[value="+a+"]");
this.get_domObject().val(b.val())},blur:function(){this.get_domObject().blur()
}},cr);ss.initClass(ab,aa,{onChange:function(a){this.$1=a;
this.get_domObject().on("change",ss.mkdel(this,function(b){this.$1(this.get_value())
}))},offChange:function(){this.$1=null;this.get_domObject().off("change")
},get_value:function(){return parseInt(this.get_domObject().val())
},set_value:function(a){var b=a.toString();if(ss.referenceEquals(b,this.get_domObject().val())){return
}this.get_domObject().val(b);if(!ss.staticEquals(this.$1,null)){this.$1(a)
}}},b9);ss.initClass(ad,aa,{},cj);ss.initEnum(a6,aa,{name$1:0,lastPlayed:1,modified:2,created:3,deadline:4,plays:5});
ss.initClass(b3,aa,{get_canToggle:function(){return this.$3$1
},set_canToggle:function(a){this.$3$1=a},get_ascending:function(){return this.$4.hasClass("fa-sort-asc")
},set_ascending:function(a){if(a){this.$4.addClass("fa-sort-asc");
this.$4.removeClass("fa-sort-desc")}else{this.$4.addClass("fa-sort-desc");
this.$4.removeClass("fa-sort-asc")}},get_selected:function(){return this.get_domObject().hasClass("is-selected")
},set_selected:function(a){this.$3(!a);if(a){this.get_domObject().addClass("is-selected");
this.$4.removeClass("transparent")}else{this.get_domObject().removeClass("is-selected");
this.$4.addClass("transparent")}},$1:function(){if(this.get_selected()&&!this.get_canToggle()){return
}this.$6(this.$5,(this.get_selected()?!this.get_ascending():this.get_ascending()))
},$2:function(){return this.$4.hasClass("transparent")
},$3:function(a){if(a){this.$4.addClass("transparent")
}else{this.$4.removeClass("transparent")}}},cj);ss.initClass(b7,aa,{onChange:function(a){this.get_domObject().on("change",function(b){a()
})},offChange:function(){this.get_domObject().off("change")
},get_value:function(){return parseInt($(b7.$0(this.$1)+":checked").val())
},set_value:function(a){$(b7.$0(this.$1)+"[value="+a+"]").prop("checked",true)
}},cj);ss.initClass(cg,aa,{onChange:function(a){this.$1=a;
this.get_domObject().on("change",ss.mkdel(this,function(b){this.$1(this.get_value())
}))},offChange:function(){this.$1=null;this.get_domObject().off("change")
},get_value:function(){return this.get_domObject().val()
},set_value:function(a){if(ss.referenceEquals(a,this.get_domObject().val())){return
}this.get_domObject().val(a);if(!ss.staticEquals(this.$1,null)){this.$1(a)
}},addOption:function(a,b,c){var d=(c?" selected":"");
this.get_domObject().append("<option value='"+b+"'"+d+">"+a+"</option>")
}},b9);ss.initEnum(ci,aa,{initialize:0,pass:1,fail:2,reset:3,clear:4});
ss.initClass(cm,aa,{get_info:function(){return this.$3$1
},set_info:function(a){this.$3$1=a},setupDragAndDrop:function(a){this.get_domObject().on("mouseenter",ss.mkdel(this,function(b){a.onMouseEnter(this)
}));this.get_domObject().on("mouseleave",ss.mkdel(this,function(b){a.onMouseLeave(this)
}))},showDropOver:function(){this.addClass("drop-over")
},hideDropOver:function(){this.removeClass("drop-over")
}},cj);ss.initClass(ck,aa,{},cm);ss.initClass(co,aa,{setMode:function(a){if(a===this.$4){return
}var b=ss.isNullOrUndefined(this.$4)&&ss.isNullOrUndefined(ServerModel.folderIds);
this.$4=a;if(this.$4===1||this.$4===2||b){this.$1()
}},addFolders:function(a){this.$1();for(var b=0;b<a.length;
b++){var c=a[b];cq.create(this.$5,this,c)}},$1:function(){this.empty();
if(this.$4===1){ck.create(this.$5,this);cw.create(this)
}else{if(this.$4===2){ck.create(this.$5,this);cu.create(this)
}else{if(this.$4===3){cs.create(this.$5,this,"/teacher/"+ServerModel.authorUserId,ServerModel.authorUsername)
}else{if(this.$4===0){cs.create(this.$5,this,this.$2,this.$3)
}}}}}},b5);ss.initClass(cq,aa,{},cm);ss.initClass(cs,aa,{},cm);
ss.initClass(cu,aa,{},cm);ss.initClass(cw,aa,{},cm);
ss.initClass(cy,aa,{});ss.initClass(cA,aa,{});ss.initClass(cC,aa,{});
ss.initClass(cE,aa,{});ss.initClass(cG,aa,{});ss.initClass(cI,aa,{});
ss.initClass(cK,aa,{});ss.initClass(cM,aa,{});ss.initClass(cO,aa,{});
ss.initClass(cQ,aa,{});ss.initClass(ae,aa,{reportGoogleClassroomError:function(a,b,c){this.reportError(a,b+": "+ag.exceptionToLogErrorMessage(c))
},reportError$1:function(a,b,c){this.reportError(a,b+": "+c.get_message())
},reportError:function(a,b){b2.displayErrorMessage(a,true,5000);
ac.error(this.$0,b)}});ss.initClass(ag,aa,{});ss.initClass(ai,aa,{toString$1:function(a){if(ss.isValue(a)&&a.length!==0){return ss.formatString.apply(null,[this.$2].concat(a))
}else{if(ss.isValue(this.$1)&&this.$1.length!==0){return ss.formatString.apply(null,[this.$2].concat(this.$1))
}else{return this.$2}}},build:function(a){return $(this.toString$1(a))
},$0:function(a){if(!(a.indexOf("data-template")!==-1)){return a
}var b=$(a);var c=b.find("div[data-template]");var d=c.get();
for(var e=0;e<d.length;e++){var f=d[e];var g=f.getAttribute("data-template");
var h=ai.buildTemplate(g,[]);$(f).first().replaceWith(h)
}return b.get(0).outerHTML}});ss.initClass(ak,aa,{});
ss.initClass(am,aa,{});ss.initClass(ao,aa,{});ss.initClass(aq,aa,{});
ss.initClass(at,aa,{});ss.initClass(av,aa,{});ss.initClass(ax,aa,{});
ss.initClass(az,aa,{});ss.initClass(aB,aa,{setStep:function(a,b,c){},getStep:function(){return null
}});ss.initClass(aD,aa,{});ss.initClass(aF,aa,{getCurrentUserState:function(){return ss.Task.fromPromise(this.$0.getCurrentUserState(),0)
},signIn:function(a){var b=0,c=new ss.TaskCompletionSource(),d,e,f,g,h,i;
var j=ss.mkdel(this,function(){try{$sm1:for(;;){switch(b){case 0:case 1:case 2:if(b===0){b=1
}try{$sm2:for(;;){switch(b){case 1:b=-1;d=ss.Task.fromPromise(this.$0.signIn(),0);
b=2;d.continueWith(j);return;case 2:b=-1;e=d.getAwaitedResult();
Analytics.event("account","gc-sign-in-success",a);c.setResult(e);
return;default:break $sm2}}}catch(k){k=ss.Exception.wrap(k);
if(ss.isInstanceOfType(k,ss.PromiseException)){f=ss.cast(k,ss.PromiseException);
g=ag.exceptionToError(f);h=(ss.isValue(g)?g.errorCode:null);
i="gc-sign-in-failure"+(!ss.isNullOrEmptyString(h)?("-"+ss.replaceAllString(h,String.fromCharCode(95),String.fromCharCode(45))):"");
Analytics.event("account",i,a);throw k}else{throw k
}}b=-1;break $sm1;default:break $sm1}}c.setResult(null)
}catch(k){c.setException(ss.Exception.wrap(k))}});j();
return c.task},grantPermissions:function(){return ss.Task.fromPromise(this.$0.grantPermissions(),0)
},signOut:function(){return ss.Task.fromPromise(this.$0.signOut())
},listMyTeacherCourses:function(){return ss.Task.fromPromise(this.$0.listMyTeacherCourses(),0)
},listCourseStudents:function(a){return ss.Task.fromPromise(this.$0.listCourseStudents(a),0)
},createCourseWork:function(a,b){return ss.Task.fromPromise(this.$0.createCourseWork(a,b),0)
},publishCourseWork:function(a,b){return ss.Task.fromPromise(this.$0.publishCourseWork(a,b),0)
},listCourseWorkStudentSubmissions:function(a,b){return ss.Task.fromPromise(this.$0.listCourseWorkStudentSubmissions(a,b),0)
},getMyCourseWorkStudentSubmission:function(a,b){return ss.Task.fromPromise(this.$0.getMyCourseWorkStudentSubmission(a,b),0)
},turnInStudentSubmission:function(a,b,c){return ss.Task.fromPromise(this.$0.turnInStudentSubmission(a,b,c))
},uploadDraftScores:function(a){return ss.Task.fromPromise(this.$0.uploadDraftScores(a))
}});ss.initEnum(aH,aa,{$3:0,$2:1,$0:2,$1:3});ss.initClass(aZ,aa,{open:function(){aZ.closeActiveModal();
aZ.$0=this;this.$a=true;b2.hideMessage();this.$c=new cr.$ctor1(".js-modal-view-wrapper");
this.$1=new cr.$ctor1(".js-modal-view-bg");this.$b=new b5.$ctor1(".js-modal-view");
this.$1.onClick(ss.mkdel(this,this.onBackgroundOrCloseButtonClick),false,true);
var a=ai.buildTemplate("modal_template",[this.$4,this.$d]);
this.$b.append$1(a);this.$b.width$2("");this.$8=new b5.$ctor1(".js-modal-view-box");
this.$3=new b5.$ctor1(".js-modal-content");this.$6=new cr.$ctor1(".js-modal-header");
this.$7=new cr.$ctor1(".js-modal-header-text");this.$5=new cr.$ctor1(".js-modal-footer-wrapper");
this.hideHeader();this.initialize();var b=new cj.$ctor3(".js-close-modal-view",ss.mkdel(this,this.onBackgroundOrCloseButtonClick),true);
if(Enumerable.from(this.$2).any()){this.$5.append$1($("<div class='clear'></div>"))
}window.requestAnimationFrame(ss.mkdel(this,function(c){this.resize()
}));$("body").css("overflow","hidden");ch.forceHide();
this.$c.fadeIn(250)},initialize:null,onClose:function(){},onBackgroundOrCloseButtonClick:function(){this.closeModal()
},closeModal:function(){if(ss.isNullOrUndefined(aZ.$0)){return
}this.onClose();aZ.$0=null;this.$a=false;this.$b.empty();
this.$1.offClick();this.$c.set_isVisible(false);$("body").css("overflow","auto");
$(window).trigger("resize")},setContent:function(a){var b=$("<div>"+a+"</div>");
this.$0(b);return b},$0:function(a){this.$3.empty();
this.$3.append$1(a);if(ss.isInstanceOfType(this,af)){return
}var b=$(".js-modal-content h1");var c=b.text();if(!ss.isNullOrEmptyString(c)){b.remove();
this.setHeader(c)}},setHeader:function(a){this.$7.set_html(a);
this.$7.set_isVisible(true)},hideHeader:function(){this.$7.set_isVisible(false)
},hideHeaderAndClose:function(){this.$6.set_isVisible(false)
},addTemplateToModal:function(a,b){var c=ai.buildTemplate(a,b);
this.$0(c)},addButton:function(a,b,c){var d=new ad(a,b,c);
this.$2.push(d);this.$5.append$1(d.get_domObject());
return d},centerModalButtons:function(){this.$5.CSS$1("text-align","center");
var a=$(".js-modal-footer-wrapper button");a.css("float","none");
a.css("margin-left","4px");a.css("margin-right","4px")
},resize:function(){if(!this.$a){return}var a=Math.max(250,$(window).height());
var b=ss.Int32.trunc(a*0.94);this.$b.CSS("max-height",b);
if(!this.noMaxHeight){var c=((a<500)?10:100);var d=this.$b.height()-this.$6.get_outerHeight()-this.$5.height()-c;
this.$3.CSS("max-height",d)}var e=Math.min(b,this.$8.get_outerHeight());
var f=ss.Int32.trunc((a-e)/2.5);this.$b.CSS("top",f);
if(!this.$9){this.$b.animate("opacity",1,250,ss.mkdel(this,function(){this.$9=false
}),null)}this.$9=true}});ss.initClass(aJ,aa,{initialize:function(){this.addTemplateToModal("cancel_modal_template",[]);
this.centerModalButtons();var a=new cj.$ctor3(".js-yes-button",ss.mkdel(this,function(){var c=$("input[name=CancelOption]:checked");
var d=$("textarea[name=CancelText]");this.$e(c.val(),d.val())
}),true);var b=new cj.$ctor1("input[name=CancelOption]");
b.onClick(ss.mkdel(a,a.enable),false,false)}},aZ);ss.initClass(aL,aa,{initialize:function(){this.addTemplateToModal("deadline_modal_template",[]);
this.$e=new cv("#deadline_date",null);if(ss.isNullOrEmptyString(this.$g)){this.$f=new ab("#deadline_time",900,null);
this.$e.set_value("")}else{var a=this.$g.split(String.fromCharCode(32));
var b=Enumerable.from(a).last().split(":");var c=parseInt(b[0])*100+parseInt(b[1]);
this.$f=new ab("#deadline_time",c,null);this.$e.set_value(Enumerable.from(a).first())
}this.addButton(VEL.Wordwall.Core.Toolbox.Extensions.StringExtensions.toCapitalizeWords(Strings.result_SetButton),ss.mkdel(this,function(){this.$h(this.$f.get_text()+" "+this.$e.get_value())
}),"js-set-button");this.addButton(VEL.Wordwall.Core.Toolbox.Extensions.StringExtensions.toCapitalizeWords(Strings.result_NoDeadline),ss.mkdel(this,function(){this.$h("")
}),"white js-remove-button")}},aZ);ss.initClass(aN,aa,{initialize:function(){this.addTemplateToModal("edit_tags_modal_template",[]);
var a=$(".js-modal-view-box");this.$g=new aW(a,this.$f);
this.addButton(Strings.menu_Done,ss.mkdel(this,this.$e),"js-ok-button")
},$e:function(){var a="/resourceajax/settags?activityId="+this.$f+"&subjects="+this.$g.getSubjects()+"&agebands="+this.$g.getAgeBands()+"&topics="+this.$g.getTopics();
$.ajax(a,{data:null,type:"GET",success:ss.mkdel(this,function(b,c,d){Analytics.event("activity","edit-tags","");
this.closeModal();if(!ss.staticEquals(this.$h,null)){this.$h()
}}),error:function(b,c,d){b2.displayNetworkErrorMessage()
}})}},aZ);ss.initClass(aP,aa,{initialize:function(){var a="?userId="+this.$g+"&templateId="+this.$f+"&activityId="+this.$e;
var b=this.setContent("<iframe src='/feedback/experimental/"+a+"' frameBorder='0' scrolling='no'></iframe>");
var c=b.find("iframe");c.on("load",ss.mkdel(this,function(d){if(c.get(0).contentWindow.location.href.toLowerCase()==="about:blank"){this.closeModal()
}}))}},aZ);ss.initClass(aR,aa,{initialize:function(){this.addTemplateToModal("export_modal_template",[]);
this.addButton("CSV",ss.mkdel(this,function(){this.$e(1)
}),"js-export-csv");this.addButton("Excel",ss.mkdel(this,function(){this.$e(0)
}),"js-export-excel")},$e:function(a){this.closeModal();
var b=((this.$g===0)?"assignment":"multiplayer");var c=((a===0)?"excel":"csv");
var d="/resultajax/export?type="+b+"&resultId="+this.$f+"&format="+c;
$("#file_downloader").remove();$("body").append("<iframe id='file_downloader' style='display:none;'></iframe>");
$("#file_downloader").attr("src",d)}},aZ);ss.initClass(aT,aa,{openAsRateIdeas:function(){this.$e=true;
this.open()},initialize:function(){var a="/feedback/";
if(this.$e){a="/feedback/rateideas?index=1&count=-1&hidebackbutton=true";
Analytics.event("feedback","rateideas_clicked","")}else{Analytics.event("feedback","footer_clicked","")
}var b=this.setContent("<iframe src='"+a+"' frameBorder='0' scrolling='no'></iframe>");
var c=b.find("iframe");c.on("load",ss.mkdel(this,function(d){if(c.get(0).contentWindow.location.href.toLowerCase()==="about:blank"){this.closeModal()
}}))}},aZ);ss.initInterface(aV,aa,{get_activityId:null,get_themeId:null,get_activityGuid:null,get_longUrl:null,get_templateId:null,get_title:null,set_title:null,get_isShared:null,set_isShared:null,get_isAuthor:null,get_canHomework:null,get_hasResults:null,get_hasCopyrightInfringement:null,get_screenshot:null});
ss.initClass(aX,aa,{initialize:function(){this.addTemplateToModal("input_modal_template",[this.$k,this.$j,this.$h]);
this.$g=new cN.$ctor1(".js-input-text");this.$g.set_maxLength(this.$h);
this.addButton(this.$e,ss.mkdel(this,function(){this.$i(this.$g.get_value())
}),"js-ok-button");this.$g.onEnter(ss.mkdel(this,function(){this.$i(this.$g.get_value())
}));this.$g.set_value(this.$f);if(this.$l){this.$g.selectAll()
}window.setTimeout(ss.mkdel(this.$g,this.$g.focus),1)
}},aZ);ss.initClass(a1,aa,{get_folderTreeAjaxUrl:null,isFolderExcluded:null,initialize:function(){this.addTemplateToModal("move_modal_template",[]);
var a=new cr.$ctor1(".js-folder-tree");$.getJSON(this.get_folderTreeAjaxUrl(),ss.mkdel(this,function(b){this.$e=b;
$(".js-tree-loading").hide();for(var c=0;c<b.length;
c++){var d=b[c];if(!this.isFolderExcluded(d)){cD.create(a,d,this.$f)
}}this.resize()}))},isFolderInside:function(a,b){var c=Enumerable.from(this.$e).firstOrDefault(function(d){return d.FolderId===b
},ss.getDefaultValue(VEL.Wordwall.Global.Json.FolderInfo));
while(ss.isValue(c)){if(c.FolderId===a){return true
}if(c.FolderId===0){break}c=Enumerable.from(this.$e).firstOrDefault(function(d){return d.FolderId===c.ParentFolderId
},ss.getDefaultValue(VEL.Wordwall.Global.Json.FolderInfo))
}return false}},aZ);ss.initClass(a3,aa,{initialize:function(){this.hideHeader();
this.setContent(this.$f);if(this.$f.indexOf("js-ok-button")!==-1){var a=new cj.$ctor3(".js-ok-button",ss.mkdel(this,this.$e),true)
}else{this.addButton(Strings.menu_Ok,ss.mkdel(this,this.$e),"focusable js-ok-button");
this.centerModalButtons()}if(!ss.staticEquals(this.$h,null)){this.$h()
}},$e:function(){this.closeModal();if(!ss.staticEquals(this.$g,null)){this.$g()
}}},aZ);ss.initClass(af,aa,{initialize:function(){var a=$(".js-modal-content");
a.on("click",".js-back-step",ss.mkdel(this,function(b){this.$e()
}))},$f:function(a){var b=$(".js-step-active");var c=$(a.get_$selector());
b.removeClass("active js-step-active");c.addClass("active js-step-active ");
ss.clear(this.$h);this.$h.push(a)},$g:function(a){var b=$(".js-step-active");
var c=$(a.get_$selector());b.removeClass("active slidein back-slideout back-slidein js-step-active").addClass("slideout deactivating");
c.removeClass("slideout back-slideout back-slidein").addClass("active slidein js-step-active");
window.setTimeout(function(){b.removeClass("deactivating")
},600);if(this.$h.length!==0&&ss.referenceEquals(ss.getInstanceType(Enumerable.from(this.$h).last()),ss.getInstanceType(a))){ss.removeAt(this.$h,this.$h.length-1)
}this.$h.push(a)},$e:function(){if(this.$h.length<2){this.closeModal();
return}ss.removeAt(this.$h,this.$h.length-1);var a=$(".js-step-active");
var b=$(Enumerable.from(this.$h).last().get_$selector());
a.removeClass("active back-slidein slideout slidein js-step-active").addClass("back-slideout deactivating");
b.removeClass("back-slideout slideout slidein").addClass("active back-slidein js-step-active");
window.setTimeout(function(){a.removeClass("deactivating")
},600)}},aZ);ss.initClass(ah,aa,{initialize:function(){},onBackgroundOrCloseButtonClick:function(){}},aZ);
ss.initClass(aj,aa,{initialize:function(){this.addTemplateToModal("results_modal_template",[]);
this.$e=new cN.$ctor1(".js-input-text");this.$e.set_value(this.$f);
var a=new cj.$ctor3(".js-copy-button",ss.mkdel(this.$e,this.$e.copy),true);
Analytics.event("result","share-results-url","")}},aZ);
ss.initClass(al,aa,{initialize:function(){this.addTemplateToModal("send_as_email_modal_template",[]);
this.addButton(Strings.menu_Ok,ss.mkdel(this,this.$e),"js-send-button");
this.centerModalButtons();this.$g=new cN.$ctor1(".js-send-email-input");
this.$g.focus()},$e:function(){aZ.closeActiveModal();
var a=this.$g.getAttribute("data-ajax");var b=ServerModel.emailData;
if(ss.isNullOrUndefined(b)){b=ServerModel.dataUrl}a+="?data="+b+"&languageId="+Strings.languageId+"&email="+encodeURIComponent(this.$g.get_value()).replace(/%20/g,"+");
$.ajax({url:a,success:ss.mkdel(this,function(c,d,e){this.$f(/^\s*true\s*$/i.test(c.toString()))
}),error:function(c,d,e){b2.displayNetworkErrorMessage()
}})},$f:function(a){if(a){b2.displayMessage(Strings.share_Email_Success,true,-1)
}else{b2.displayErrorMessage(Strings.share_Email_Error,true,0)
}}},aZ);ss.initClass(an,aa,{initialize:function(){this.addTemplateToModal("share_activity_steps_template",[]);
if(this.startOnPublish){if(this.$i().get_isShared()||this.$i().get_hasCopyrightInfringement()){this.$f(new aQ(this,1))
}else{this.$f(new aE(this))}return}else{if(this.$n){this.$f(new aS(this,this.$m))
}else{if(this.$o){this.$f(new aA(this,(this.$i().get_isShared()?1:0),true))
}else{if(this.$p){var a="/resourceajax/qr?resourceType=";
var b;if(ss.isValue(this.$k())){b=this.$k().Url;a+="homework&id="+this.$k().HomeworkId
}else{b=cA.getShortUrl(this.$i().get_activityId(),false);
a+="activity&id="+this.$i().get_activityId()}a+="&imagetype=png&pixels=410";
this.$f(new aO(this,b,a,false))}else{if(ss.isValue(this.$k())){this.$f(new aQ(this,3))
}}}}}af.prototype.initialize.call(this)},$i:function(){return this.$3$1
},$j:function(a){this.$3$1=a},$k:function(){return this.$3$2
},$l:function(a){this.$3$2=a}},af);an.$ctor1.prototype=an.prototype;
ss.initClass(ap,aa,{get_exists:function(){return(new cr.$ctor1("#welcome_back_template")).get_exists()
},initialize:function(){this.addTemplateToModal("welcome_back_template",[]);
var a=new cj.$ctor3(".js-redirect-to-login-btn",ss.mkdel(this,function(){window.location.href="/account/login?user="+this.$e
}),true);var b=new cj.$ctor1(".js-redirect-to-login-link");
b.set_href(b.get_href()+"?email="+this.$e)}},aZ);ss.initClass(ar,aa,{initialize:function(){this.hideHeader();
this.setContent(this.$g);this.addButton(Strings.menu_Yes,ss.mkdel(this,this.$f),"focusable js-yes-button");
this.addButton(Strings.menu_No,ss.mkdel(this,this.$e),"medium white js-no-button focusable");
this.centerModalButtons();$(".js-yes-button").focus();
if(!ss.staticEquals(this.$i,null)){this.$i()}},$f:function(){this.closeModal();
if(!ss.staticEquals(this.$j,null)){this.$j()}},$e:function(){this.closeModal();
if(!ss.staticEquals(this.$h,null)){this.$h()}}},aZ);
ss.initInterface(au,aa,{get_$domObject:null,get_$selector:null});
ss.initClass(aG,aa,{},ss.makeGenericType(aw,[an]),[au]);
ss.initClass(ay,aa,{get_$selector:function(){return".js-step-email"
},$5:function(){this.$4();this.$7.focus()},$1:function(a){b2.hideMessage();
if(a===188||a===32||a===13){this.$4();this.$7.focus();
return false}return true},$6:function(){this.$4();var a=this.$8.get_domObject().find(".js-recognised-email-address-blob");
if(a.length===0){b2.displayErrorMessage(Strings.share_Email_MustAddEmail,true,0);
this.$9.resetLoadingGif();this.$7.focus();return}this.$8.submitByAjax(ss.mkdel(this,this.$3),ss.mkdel(this,this.$2))
},$4:function(){var a=this.$7.get_value();if(ss.isNullOrEmptyString(a)){return
}var b=this.$7.get_domObject().parents(".js-email-link-form").first().find(".js-recognised-addresses")[0];
if(at.isEmail(a)){b2.hideMessage();var c=ai.buildTemplate("recognised_email_address_blob_template",[a]);
b.appendChild(c.get(0));this.$7.set_value("");new cj.$ctor4(c,".js-address-blob-remove",function(){c.remove()
})}else{b2.displayErrorMessage(Strings.share_Email_NotValid,true,0)
}},$3:function(a){this.$0.$e();b2.displayMessage(Strings.share_Email_Success,true,-1);
b2.hideProgress();Analytics.event("share","email-success","")
},$2:function(){b2.displayErrorMessage(Strings.share_Email_Error,true,0);
this.$9.resetLoadingGif();b2.hideProgress();Analytics.event("share","email-error","")
}},aG,[au]);ss.initClass(aA,aa,{$2:function(a){if(ss.isNullOrUndefined(a5.app)){cE.load(ss.mkdel(this,function(){this.$2(a)
}));return}var b=a5.app;var c=-1;var d=null;if(ss.isValue(a5.myActivitiesPage)){c=this.$0.$i().get_activityId();
d=this.$0.$i().get_activityGuid()}else{if(ss.isValue(a5.myResultsPage)||ss.isValue(a5.resultPage)){c=this.$0.$k().ActivityId;
d=this.$0.$k().ActivityGuid}}if(c!==-1&&ss.isValue(d)&&(ss.isNullOrUndefined(b.get_document())||!ss.referenceEquals(b.get_document().get_guid(),d))){b.open(d,false,c,1,ss.mkdel(this,function(i){this.$2(a)
}));return}if(ss.isNullOrUndefined(b.get_document())||ss.isNullOrUndefined(b.get_document().get_selectedGame())){window.setTimeout(ss.mkdel(this,function(){this.$2(a)
}),200);return}var e=b.get_document().get_template().get_id();
var f=Enumerable.from(VEL.Wordwall.Core.View.Themes.ThemeHelper.getAvailableThemeIds(e)).select(VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme);
var g=f.getEnumerator();try{while(g.moveNext()){var h=g.current();
this.$d.get_domObject().append('<option value="'+h.id+'">'+h.get_title()+"</option>")
}}finally{g.dispose()}if(ss.isValue(this.$0.$k())){b.setThemeId(this.$0.$k().ThemeId,false)
}else{b.setThemeId(this.$0.$i().get_themeId(),false)
}this.$d.set_value(b.getThemeSelection().selected.id);
this.$a.set_value(parseInt(Strings.languageId));a()
},$5:function(a){if(a){if(this.$0.$i().get_canHomework()){if(ServerHelper.get_isGuest()){(new cr.$ctor1(".js-guest-cta")).set_isVisible(true)
}else{(new cr.$ctor1(".js-assignment-cta")).set_isVisible(true);
new cj.$ctor3(".js-next-set-assignment",ss.mkdel(this,this.$4),true)
}}}else{(new cr.$ctor1(".js-back-cta")).set_isVisible(true)
}Analytics.event("share","embed-show","")},$3:function(a){var b;
var c=a5.app;if(this.$c===2||this.$c===3){b="/embedajax/gethomeworktemplates?homeworkId="+this.$0.$k().HomeworkId
}else{b="/embedajax/getactivitytemplates?activityId="+this.$0.$i().get_activityId()+"&languageId="+this.$a.get_value()+"&themeId="+this.$d.get_value();
if(ss.isValue(c.get_document())){b=b+"&templateId="+c.get_document().get_template().get_id()+"&fontStackId="+c.getFontStackId()
}}$.get(b,null,ss.mkdel(this,function(d){this.$8.set_html(ss.cast(d,String));
ai.clearCache();this.$6();if(!ss.staticEquals(a,null)){a()
}}))},$6:function(){var a;var b;var c=a5.app;switch(this.$e.get_value()){case 2:a=ai.toString("embed_icon_template",[]).trim();
b="<div>"+a+"</div>";this.$d.set_value(c.getThemeSelection().selected.id);
this.$d.setAttribute("disabled","disabled");break;case 1:a=ai.toString("embed_image_template",[]).trim();
b="<div>"+a+"</div>";this.$d.set_value(c.getThemeSelection().selected.id);
this.$d.setAttribute("disabled","disabled");break;case 0:a=ai.toString("embed_iframe_template",[]).trim();
b=ss.replaceAllString(a,"?","?footer=false&");this.$d.removeAttribute("disabled");
break;default:throw new ss.NotImplementedException()
}this.$7.set_html(a);this.$b.set_html(b)},$1:function(){this.$7.copy();
Analytics.event("share","embed-copy","")},$4:function(){if(this.$9){return
}this.$9=true;$.get("/experimentajax/recruit/"+5,ss.mkdel(this,function(a){this.$9=false;
this.$0.$g(new aS(this.$0,ss.cast(a,String)==="1"||((window.FS1===undefined||window.FS1.Hide_Gc_Assignment===undefined)?false:window.FS1.Hide_Gc_Assignment)))
}))},get_$selector:function(){return".js-step-embed"
}},aG,[au]);ss.initEnum(aC,aa,{$0:0,$2:1,$1:2});ss.initClass(aE,aa,{$1:function(){aZ.closeActiveModal();
var a="/resourceajax/makeprivate?activityId="+this.$0.$i().get_activityId();
$.ajax(a,{data:null,type:"GET",success:ss.mkdel(this,function(b,c,d){this.$0.$i().set_isShared(false);
b2.displayMessage(Strings.share_NowPrivate,true,-1)
}),error:function(b,c,d){b2.displayNetworkErrorMessage()
}})},get_$selector:function(){return".js-step-resource-setup"
},$2:function(){if(this.$4){return}if(!cA.isTitleShareable(this.$6.get_value())){b2.displayErrorMessage(Strings.enterContent_Generic_TitleError,true,0);
return}this.$4=true;this.$5.addLoadingGif();var a="/resourceajax/publish?activityId="+this.$0.$i().get_activityId()+"&subjects="+this.$3.getSubjects()+"&agebands="+this.$3.getAgeBands()+"&topics="+this.$3.getTopics()+"&title="+encodeURIComponent(this.$6.get_value());
$.ajax(a,{data:null,type:"GET",success:ss.mkdel(this,function(b,c,d){this.$4=false;
this.$0.$i().set_title(this.$6.get_value());if(ss.isValue(a5.activityPage)){a5.activityPage.updateTags()
}this.$0.$i().set_isShared(true);this.$0.$g(new aQ(this.$0,0));
this.$5.resetLoadingGif();Analytics.event("share","publish-success","")
}),error:ss.mkdel(this,function(b,c,d){b2.displayNetworkErrorMessage();
this.$4=false;this.$5.resetLoadingGif()})})}},aG,[au]);
ss.initClass(aI,aa,{get_$selector:function(){return".js-step-gc-assignment-done"
},$3:function(){this.$6.offClick();this.$6.onClick(ss.mkdel(this,this.$1),false,true);
this.$7.offClick();this.$7.onClick(ss.mkdel(this,this.$2),false,true)
},$1:function(){aZ.openNewTab(this.$5.alternateLink)
},$2:function(){window.location.href="/result/a/"+this.$4.HomeworkId
}},aG,[au]);ss.initClass(aK,aa,{$b:function(){this.$i.offChange();
this.$i.onChange(ss.mkdel(this,this.$8));this.$d.offChange();
this.$d.onChange(ss.mkdel(this,this.$6));this.$m.offClick();
this.$m.onClick(ss.mkdel(this,this.$9),false,true)},get_$selector:function(){return".js-step-gc-assignment"
},$2:function(){var a=0,b,c,d,e,f,g,h,i;var j=ss.mkdel(this,function(){$sm1:for(;
;){switch(a){case 0:a=-1;b="Error fetching Google Classroom courses";
a=1;continue $sm1;case 1:case 2:case 3:if(a===1){a=2
}try{$sm2:for(;;){switch(a){case 2:a=-1;this.$i.empty();
c=this.$j.listMyTeacherCourses();a=3;c.continueWith(j);
return;case 3:a=-1;d=c.getAwaitedResult();e=Enumerable.from(d).firstOrDefault(null,ss.getDefaultValue(VEL.Wordwall.Global.Json.GoogleClassroom.Course));
for(f=0;f<d.length;f++){g=d[f];this.$i.addOption(g.name,g.id,ss.referenceEquals(g,e))
}this.$8((ss.isValue(e)?e.id:null));a=-1;break $sm2;
default:break $sm2}}}catch(k){k=ss.Exception.wrap(k);
if(ss.isInstanceOfType(k,ss.PromiseException)){h=ss.cast(k,ss.PromiseException);
aK.$2.reportGoogleClassroomError(Strings.myActivities_DefaultError,b,h)
}else{i=k;aK.$2.reportError$1(Strings.myActivities_DefaultError,b,i)
}}a=-1;break $sm1;default:break $sm1}}});j()},$8:function(a){var b=0,c;
var d=ss.mkdel(this,function(){$sm1:for(;;){switch(b){case 0:b=-1;
if(ss.isNullOrEmptyString(a)){this.$1();b=-1;break $sm1
}else{c=this.$c(a);b=1;c.continueWith(d);return}case 1:b=-1;
c.getAwaitedResult();b=-1;break $sm1;default:break $sm1
}}});d()},$c:function(a){var b=0,c=new ss.TaskCompletionSource(),d,e,f,g;
var h=ss.mkdel(this,function(){try{$sm1:for(;;){switch(b){case 0:b=-1;
d="Error fetching Google Classroom students";b=1;continue $sm1;
case 1:case 2:case 3:if(b===1){b=2}try{$sm2:for(;;){switch(b){case 2:b=-1;
this.$1();e=this.$j.listCourseStudents(a);this.$l=e;
b=3;e.continueWith(h);return;case 3:b=-1;e.getAwaitedResult();
if(!ss.referenceEquals(e,this.$l)){c.setResult(null);
return}this.$3(e.getResult());this.$6();b=-1;break $sm2;
default:break $sm2}}}catch(i){i=ss.Exception.wrap(i);
if(ss.isInstanceOfType(i,ss.PromiseException)){f=ss.cast(i,ss.PromiseException);
aK.$2.reportGoogleClassroomError(Strings.myActivities_DefaultError,d,f)
}else{g=i;aK.$2.reportError$1(Strings.myActivities_DefaultError,d,g)
}}b=-1;break $sm1;default:break $sm1}}c.setResult(null)
}catch(i){c.setException(ss.Exception.wrap(i))}});h();
return c.task},$1:function(){this.$e.empty();this.$e.set_isVisible(false);
this.$f.set_isVisible(false)},$3:function(a){if(ss.isValue(a)&&a.length!==0){this.$e.set_html(ss.arrayFromEnumerable(Enumerable.from(a).select(function(b){return ss.formatString("<li><input type='checkbox' id='{0}' class='js-gc-assign-to-student' value='{1}'/> <label for='{0}'>{2}</label></li>",ss.htmlEncode("gc_assign_to_student_"+b.userId),ss.htmlEncode(b.userId),ss.htmlEncode(b.profile.name.fullName))
})).join(""));this.$e.set_isVisible(true);this.$f.set_isVisible(false)
}else{this.$e.empty();this.$e.set_isVisible(false);
this.$f.set_isVisible(true)}},$6:function(){var a=this.$d.get_value()===1;
this.$e.get_domObject().find("input").each(function(b,c){(new cp(c,null)).setEnable(a)
});this.$e.get_domObject().find("label").each(function(b,c){$(c).toggleClass("unavailable",!a)
})},$9:function(){var a=0,b,c,d,e,f,g,h,i,j,k,l;var m=ss.mkdel(this,function(){var n=true;
$sm1:for(;;){switch(a){case 0:a=-1;if(this.$m.hasLoadingGif()){return
}b=this.$4();if(ss.isNullOrEmptyString(b.courseId)){b2.displayErrorMessage(Strings.share_GoogleClassroom_MustHaveClass,true,5000);
return}if(b.assigneeMode==="INDIVIDUAL_STUDENTS"&&(ss.isNullOrUndefined(b.individualStudentsOptions)||b.individualStudentsOptions.studentIds.length===0)){b2.displayErrorMessage(Strings.share_GoogleClassroom_MustHaveStudents,true,5000);
return}c="Error setting Google Classroom assignment";
a=1;continue $sm1;case 1:case 2:case 3:case 4:case 5:case 6:if(a===1){a=2
}try{$sm2:for(;;){switch(a){case 2:a=-1;this.$a();d=cG.setAssignmentAsync(this.$0.$i(),this.$g);
a=3;d.continueWith(m);n=false;return;case 3:a=-1;e=d.getAwaitedResult();
f=aK.$0(e.EndTime);b.materials=[VEL.Wordwall.Global.Json.GoogleClassroom.Material.createLinkMaterial(e.Url)];
b.dueDate=VEL.Wordwall.Global.Json.GoogleClassroom.Date.create$1(f);
b.dueTime=VEL.Wordwall.Global.Json.GoogleClassroom.TimeOfDay.create$1(f);
g=this.$j.createCourseWork(b.courseId,b);a=4;g.continueWith(m);
n=false;return;case 4:a=-1;h=g.getAwaitedResult();i=cG.setGoogleClassroomAssignmentAsync(e.HomeworkId,h.courseId,h.id);
a=5;i.continueWith(m);n=false;return;case 5:a=-1;i.getAwaitedResult();
j=this.$j.publishCourseWork(h.courseId,h.id);a=6;j.continueWith(m);
n=false;return;case 6:a=-1;h=j.getAwaitedResult();Analytics.event("share","set-assignment","google-classroom-assignment");
this.$0.$g(new aI(this.$0,e,h));a=-1;break $sm2;default:break $sm2
}}}catch(o){o=ss.Exception.wrap(o);if(ss.isInstanceOfType(o,ss.PromiseException)){k=ss.cast(o,ss.PromiseException);
aK.$2.reportGoogleClassroomError(Strings.myActivities_DefaultError,c,k)
}else{l=o;aK.$2.reportError$1(Strings.myActivities_DefaultError,c,l)
}}finally{if(n){this.$7()}}a=-1;break $sm1;default:break $sm1
}}});m()},$a:function(){this.$m.addLoadingGif();this.$h.disable()
},$7:function(){this.$m.resetLoadingGif();this.$h.enable()
},$4:function(){var a=new VEL.Wordwall.Global.Json.GoogleClassroom.CourseWork();
a.courseId=this.$i.get_value();a.title=this.$g.Title;
a.state="DRAFT";a.maxPoints=this.$k;a.workType="ASSIGNMENT";
var b=a;var c=this.$d.get_value();switch(c){case 0:b.assigneeMode="ALL_STUDENTS";
break;case 1:b.assigneeMode="INDIVIDUAL_STUDENTS";var d=new VEL.Wordwall.Global.Json.GoogleClassroom.IndividualStudentsOptions();
d.studentIds=this.$5();b.individualStudentsOptions=d;
break}return b},$5:function(){var a=this.$e.get_domObject().find("input:checked");
var b=new Array(a.length);a.each(function(c,d){b[c]=$(d).val()
});return b}},aG,[au]);ss.initClass(aM,aa,{get_$selector:function(){return".js-step-gc-assignment-refuse"
}},aG,[au]);ss.initClass(aO,aa,{get_$selector:function(){return".js-step-qr"
}},aG,[au]);ss.initClass(aQ,aa,{$9:function(){this.$0.$g(new aE(this.$0))
},get_$selector:function(){switch(this.$b){case 0:return".js-step-resource-done";
case 1:return".js-step-public-resource-done";case 2:return".js-step-assignment-done";
case 3:return".js-step-past-assignment-done"}throw new ss.NotImplementedException()
},$1:function(){this.$0.$g(new ay(this.$0))},$2:function(){this.$0.$g(new aA(this.$0,this.$b,false));
if(this.$b===2||this.$b===3){Analytics.event("share","embed_ondone_assignment","")
}else{Analytics.event("share","embed_ondone_activity","")
}},$6:function(){var a="/resourceajax/qr?resourceType=";
var b;if(this.$b===2||this.$b===3){b=this.$0.$k().Url;
a+="homework&id="+this.$0.$k().HomeworkId;Analytics.event("share","qr_ondone_assignment","")
}else{b=cA.getShortUrl(this.$0.$i().get_activityId(),false);
a+="activity&id="+this.$0.$i().get_activityId();Analytics.event("share","qr_ondone_activity","")
}a+="&imagetype=png&pixels=410";this.$0.$g(new aO(this.$0,b,a,true))
},$3:function(){if(this.$b===2||this.$b===3){var a=this.$0.$k().Url;
var b=this.$0.$k().Title;aZ.openPopup(ss.formatString("https://www.facebook.com/sharer/sharer.php?u={0}&t={1}",encodeURIComponent(a),encodeURIComponent(b)));
Analytics.event("share","facebook","")}else{var c=this.$0.$i().get_longUrl();
var d=this.$0.$i().get_title();aZ.openPopup(ss.formatString("https://www.facebook.com/sharer/sharer.php?u={0}&t={1}",encodeURIComponent(c),encodeURIComponent(d)));
Analytics.event("share","facebook","")}},$8:function(){if(this.$b===2||this.$b===3){var a=this.$0.$k().Url;
aZ.openPopup(ss.formatString("https://vk.com/share.php?url={0}",encodeURIComponent(a)));
Analytics.event("share","vk","")}else{var b=this.$0.$i().get_longUrl();
aZ.openPopup(ss.formatString("https://vk.com/share.php?url={0}",encodeURIComponent(b)));
Analytics.event("share","vk","")}},$7:function(){if(this.$b===2||this.$b===3){var a=this.$0.$k().Url;
aZ.openPopup(ss.formatString("https://twitter.com/intent/tweet?url={0}",encodeURIComponent(a)));
Analytics.event("share","twitter","")}else{var b=this.$0.$i().get_longUrl();
aZ.openPopup(ss.formatString("https://twitter.com/intent/tweet?url={0}",encodeURIComponent(b)));
Analytics.event("share","twitter","")}},$4:function(){if(this.$b===2||this.$b===3){var a=this.$0.$k().Url;
var b=this.$0.$k().Title;aZ.openNewTab(ss.formatString("https://classroom.google.com/share?url={0}&title={1}",encodeURIComponent(a),encodeURIComponent(b)));
Analytics.event("share","google","assignment")}else{var c=this.$0.$i().get_longUrl();
var d=this.$0.$i().get_title();aZ.openNewTab(ss.formatString("https://classroom.google.com/share?url={0}&title={1}",encodeURIComponent(c),encodeURIComponent(d)));
Analytics.event("share","google","activity")}},$5:function(){if(this.$b===2||this.$b===3){var a=this.$0.$k().Url;
var b=this.$0.$k().Title;ak.share(a,b,b);Analytics.event("share","native","")
}else{var c=this.$0.$i().get_longUrl();var d=this.$0.$i().get_title();
ak.share(c,d,d);Analytics.event("share","native","")
}}},aG,[au]);ss.initClass(aS,aa,{$a:function(){this.$m.offChange();
this.$m.onChange(ss.mkdel(this,this.$8));this.$g.offChange();
this.$g.onChange(ss.mkdel(this,this.$6),false);this.$h.offChange();
this.$h.onChange(ss.mkdel(this,function(a){this.$6()
}))},$4:function(){if(ss.isNullOrEmptyString(this.$p.get_value())){$.get("/resourceajax/suggestresultstitle?activityId="+this.$0.$i().get_activityId(),ss.mkdel(this,function(a){this.$p.set_value(a.toString())
}))}},$8:function(){this.$n.set_isVisible(this.$d())
},get_$selector:function(){return".js-step-assignment-setup"
},$6:function(){this.$f.set_value(1)},$5:function(){var a=0,b,c,d;
var e=ss.mkdel(this,function(){$sm1:for(;;){switch(a){case 0:a=-1;
if(this.$o.hasLoadingGif()){return}b=new VEL.Wordwall.Global.Json.HomeworkInfo();
b.Title=this.$p.get_value();b.EndTimeString=this.$1();
b.Registration=this.$m.get_value();b.GameOver=this.$2();
c=b;if(c.Title.length===0){b2.displayErrorMessage(Strings.share_Assignment_MustHaveTitle,true,0);
return}if(this.$d()){d=this.$b(c);a=1;d.continueWith(e);
return}else{this.$c(c);a=-1;break $sm1}case 1:a=-1;
d.getAwaitedResult();a=-1;break $sm1;default:break $sm1
}}});e()},$2:function(){return 0|(this.$k.get_isChecked()?1:0)|(this.$j.get_isChecked()?4:0)|(this.$i.get_isChecked()?2:0)
},$1:function(){return((this.$f.get_value()===0)?"":(this.$g.get_value()+" "+this.$h.get_text()))
},$d:function(){return this.$m.get_value()===2},$c:function(a){this.$9();
cG.setAssignment(this.$0.$i(),a).then(ss.mkdel(this,function(b){Analytics.event("share","set-assignment","");
this.$0.$l(b);this.$0.$g(new aQ(this.$0,2))}),null).always(ss.mkdel(this,function(){this.$7()
}))},$b:function(a){var b=0,c=new ss.TaskCompletionSource(),d,e,f,g,h,i,j,k;
var l=ss.mkdel(this,function(){var m=true;try{$sm1:for(;
;){switch(b){case 0:case 1:case 2:case 3:if(b===0){b=1
}try{$sm2:for(;;){switch(b){case 1:b=-1;this.$9();d=aF.createSetAssignmentClient(ServerModel.googleClassroomClientID,ServerModel.googleClassroomApiKey);
b=2;d.continueWith(l);m=false;return;case 2:b=-1;e=d.getAwaitedResult();
f=e.signIn("set-assignment");b=3;f.continueWith(l);
m=false;return;case 3:b=-1;f.getAwaitedResult();this.$0.$g(new aK(this.$0,e,a,this.$3()));
b=-1;break $sm2;default:break $sm2}}}catch(n){n=ss.Exception.wrap(n);
if(ss.isInstanceOfType(n,ss.PromiseException)){g=ss.cast(n,ss.PromiseException);
h=ag.exceptionToError(g);i=(ss.isValue(h)?h.errorCode:null);
switch(i){case"popup_closed_by_user":case"access_denied":this.$0.$g(new aM(this.$0));
break;default:j=(ss.isValue(h)?h.message:null);k=Strings.myActivities_DefaultError+(!ss.isNullOrEmptyString(j)?(": "+j):"");
b2.displayErrorMessage(k,true,0);break}}else{throw n
}}finally{if(m){this.$7()}}b=-1;break $sm1;default:break $sm1
}}c.setResult(null)}catch(n){c.setException(ss.Exception.wrap(n))
}});l();return c.task},$9:function(){this.$o.addLoadingGif();
this.$e.disable()},$7:function(){this.$o.resetLoadingGif();
this.$e.enable()},$3:function(){var a={};if(ss.Int32.tryParse(this.$l.get_value(),a)){return a.$
}else{return null}}},aG,[au]);ss.initClass(aU,aa,{$5:function(){return this.$2$1
},$6:function(a){this.$2$1=a},$4:function(){return this.get_domObject().find("label").text()
},$3:function(){return parseInt(this.getAttribute("data-id"))
},$1:function(){return this.$2$2},$2:function(a){this.$2$2=a
}},cr);ss.initClass(aW,aa,{getAgeBands:function(){return this.$4(this.$m)
},getSubjects:function(){return this.$4(this.$z)},getTopics:function(){return this.$4(this.$A)
},$5:function(){$.get("/resourceajax/formtags?activityId="+this.$g,ss.mkdel(this,function(a){if(!this.$r.get_isEmpty()){this.$f()
}this.$r.set_html(a.toString());this.$1();this.$e()
}))},$f:function(){this.$x=this.getAgeBands();this.$y=this.getSubjects();
this.$w=this.getTopics()},$e:function(){if(ss.isValue(this.$w)){var a=VEL.Wordwall.Global.Extensions.StringExtensions.toArrayOfIntegers(this.$w);
for(var b=0;b<this.$A.length;b++){var c=this.$A[b];
c.$1().set_isChecked(ss.contains(a,c.$3()))}}if(ss.isValue(this.$x)){var d=VEL.Wordwall.Global.Extensions.StringExtensions.toArrayOfIntegers(this.$x);
for(var e=0;e<this.$m.length;e++){var f=this.$m[e];
f.$1().set_isChecked(ss.contains(d,f.$3()))}}if(ss.isValue(this.$y)){var g=VEL.Wordwall.Global.Extensions.StringExtensions.toArrayOfIntegers(this.$y);
for(var h=0;h<this.$z.length;h++){var i=this.$z[h];
i.$1().set_isChecked(ss.contains(g,i.$3()))}}},$8:function(a){if(a.$5()==="topic"){return
}$.get("/resourceajax/topictags?activityId="+this.$g+"&subjects="+this.getSubjects()+"&agebands="+this.getAgeBands(),ss.mkdel(this,function(b){this.$f();
this.$s.set_html(b.toString());this.$2();this.$e()}))
},$1:function(){this.$s=new b5.$ctor1(".js-insert-topic-tags");
ss.clear(this.$m);var a=this.get_domObject().find(".js-ageband-tag").get();
for(var b=0;b<a.length;b++){var c=a[b];this.$m.push(new aU("ageband",c,ss.mkdel(this,this.$b),ss.mkdel(this,this.$8)))
}var d=new cj.$ctor3(".js-add-ageband",ss.mkdel(this,function(){this.$7("ageband")
}),true);ss.clear(this.$z);var e=this.get_domObject().find(".js-subject-tag").get();
for(var f=0;f<e.length;f++){var g=e[f];this.$z.push(new aU("subject",g,ss.mkdel(this,this.$b),ss.mkdel(this,this.$8)))
}var h=new cj.$ctor3(".js-add-subject",ss.mkdel(this,function(){this.$7("subject")
}),true);this.$2();this.$t=false},$2:function(){ss.clear(this.$A);
var a=this.get_domObject().find(".js-topic-tag").get();
for(var b=0;b<a.length;b++){var c=a[b];this.$A.push(new aU("topic",c,ss.mkdel(this,this.$b),ss.mkdel(this,this.$8)))
}var d=new cj.$ctor3(".js-add-topic",ss.mkdel(this,function(){this.$7("topic")
}),true)},$b:function(a){this.$c();this.$q=a;this.$p.set_isVisible(true);
this.$n.set_value(a.$4());this.$n.focus()},$9:function(){this.$c();
this.$v.set_isVisible(true);this.$p.set_isVisible(false);
this.$l.set_isVisible(false)},$c:function(){this.$p.set_isVisible(false);
this.$l.set_isVisible(false);this.$v.set_isVisible(false)
},$6:function(){var a="/resourceajax/add"+this.$k+"?name="+encodeURIComponent(this.$h.get_value()).replace(/%20/g,"+");
this.$3(a,this.$i);Analytics.event("tags","add-"+this.$k+"-"+ServerModel.localeId,"")
},$a:function(){var a=this.$n.get_value();if(ss.referenceEquals(a,this.$q.$4())){return
}var b="/resourceajax/edit"+this.$q.$5()+"?name="+a+"&"+this.$q.$5()+"id="+this.$q.$3();
this.$3(b,this.$o)},$d:function(){var a="/resourceajax/remove"+this.$q.$5()+"?"+this.$q.$5()+"id="+this.$q.$3();
this.$3(a,this.$u)},$7:function(a){this.$c();switch(a){case"ageband":this.$j.set_text(Strings.resource_Tags_AddAgeBand);
break;case"subject":this.$j.set_text(Strings.resource_Tags_AddSubject);
break;case"topic":this.$j.set_text(Strings.resource_Tags_AddTopic);
break}this.$h.set_value("");this.$l.set_isVisible(true);
this.$h.focus();this.$k=a;this.$i.onClick(ss.mkdel(this,this.$6),false,true);
this.$h.onEnter(ss.mkdel(this,this.$6))},$3:function(a,b){if(this.$t){return
}this.$t=true;b.addLoadingGif();$.ajax(a,{data:null,type:"GET",success:ss.mkdel(this,function(c,d,e){var f=ss.cast(c,VEL.Wordwall.Global.Json.TagResultJson);
if(f.Success){this.$c();this.$5()}else{b2.displayErrorMessage(f.Error,true,0)
}b.resetLoadingGif();this.$t=false}),error:ss.mkdel(this,function(c,d,e){b2.displayNetworkErrorMessage();
b.resetLoadingGif();this.$t=false})})},$4:function(a){var b="";
var c=ss.getEnumerator(a);try{while(c.moveNext()){var d=c.current();
if(d.$1().get_isChecked()){if(b!==""){b+=","}b+=d.$3()
}}}finally{c.dispose()}return b}},cr);ss.initInterface(aY,aa,{initialize:null,onDocumentOpen:null,resizeLayout:null,onContentChanged:null,populateOptionsSection:null,populateThemesList:null,populateTemplates:null,populateLeaderboard:null,updateTags:null,updateLeaderboard:null,get_convertToTemplateId:null,onPdfLoaded:null});
ss.initInterface(a0,aa,{updateErrors:null});ss.initInterface(a2,aa,{initialize:null,nextGame:null});
ss.initInterface(a4,aa,{initialize:null});ss.initInterface(a7,aa,{onOpenFolder:null,onOpenRecycleBin:null,onSearch:null,onBack:null,getItemsDragContainer:null});
ss.initInterface(a8,aa,{initialize:null});ss.initInterface(a9,aa,{initialize:null,restart:null,onTurnedInGoogleClassroomStudentSubmission:null,onCompletedGoogleClassroomAddOnAttachment:null});
ss.initInterface(b0,aa,{initialize:null});ss.initEnum(b1,aa,{folder:0,search:1,recycle:2,teacherFolder:3});
(function(){a5.app=null;a5.activityPage=null;a5.myActivitiesPage=null;
a5.folderPlayPage=null;a5.resultPage=null;a5.myResultsPage=null;
a5.playPage=null;a5.editorPage=null})();(function(){ai.$0=new (ss.makeGenericType(ss.Dictionary$2,[String,ai]))()
})();(function(){cI.guidTag="autosave.guid";cI.templateIdTag="autosave.templateid";
cI.timeTag="autosave.time";cI.titleTag="autosave.title";
cI.userTag="autosave.user";cI.docTag="autosave.doc"
})();(function(){cK.$5=null;cK.$2=null;cK.$3=null;cK.$4=null;
cK.$6=false})();(function(){cO.$0=null})();(function(){ch.$0=null
})();(function(){aZ.$0=null;$(window).on("resize",function(a){if(ss.isValue(aZ.$0)){aZ.$0.resize()
}});$(document).keyup(function(a){if(a.keyCode===27){aZ.closeActiveModal()
}})})();(function(){b2.$w=null;b2.$t=null;b2.$s=null;
b2.$k=null;b2.$o=null;b2.$v=null;b2.$r=null;b2.$u=null;
b2.$y=null;b2.$p=null;b2.$z=null;b2.$A=null;b2.$q=null;
b2.$x=null;b2.$m=null;b2.$l=null;b2.$n=false;b2.$B=0;
b2.isErrorPage=false;b2.jsErrors="";b2.displayError=""
})();(function(){cL.$1=100;cL.$0=200})();(function(){cA.$0=false
})();(function(){cC.$1$1=false})();(function(){ae.$0=5000
})();(function(){at.$1="@wordwall.co.uk";at.$0=new RegExp("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,63}(?:\\.[a-z]{2})?)$","i");
at.$2=new RegExp("^([\\w-+]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,63}(?:\\.[a-z]{2})?)$","i")
})();(function(){az.$2=new ae("https://wordwall.net/scripts/saltarelle/vel.wordwall.global.web.js");
az.$1="en"})();(function(){aW.$0="ageband";aW.$1="subject";
aW.$2="topic"})();(function(){aK.$2=new ae("https://wordwall.net/scripts/saltarelle/vel.wordwall.global.web.js");
aK.$1=5000})()})();$(document).ready(function(){VEL.Wordwall.Global.Shell.initialize()
});
