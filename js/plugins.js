/*
 * LazyJSON Plugin
 * Version: 1.0.0 (Mon, 15 Oct 2012)
 * https://github.com/rpnzl/jquery-lazyjson
 *
 * Copyright 2012, Michael Giuliana
 * http://rpnzl.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(b,a,c){c.fn.lazyjson=function(e){var k=this,n=null,l=null,g=null,h=["lazyLoad","nextBtn","custom"],o=["prevBtn"],m=null,d=false,j=false,i={},f=null,p,q=c.extend(true,{},c.fn.lazyjson.defaults,e);k.init=function(){k.checkOpts();if(q.loadOnInit){k.load(true)}if(q.pagination.active){if(q.pagination.lazyLoad){c(b).scroll(function(){var r=k.position();if((c(b).height()+c(b).scrollTop())>(r.top+k.height())){m="lazyLoad";k.load()}})}else{if(q.pagination.loadOnEvent&&q.pagination.loadOnTarget){c("body").on(q.pagination.loadOnEvent,q.pagination.loadOnTarget,function(r){r.preventDefault();m="custom";k.load()})}else{c(k.parent()).on("click",q.pagination.nextBtn,function(r){r.preventDefault();m="nextBtn";k.load()});c(k.parent()).on("click",q.pagination.prevBtn,function(r){r.preventDefault();m="prevBtn";k.load()})}}}};k.debug=function(r,s,t){if(a&&a.log){if(q.debug&&r&&s&&t){a.log({name:r,type:s,data:t})}}};k.checkOpts=function(){if(!c("#"+q.templatePrefix+c(k).attr("id")).length){k.debug("templateNotFound","error","The template object was not found.")}else{p=c("#"+q.templatePrefix+c(k).attr("id")).clone().removeAttr("id").removeAttr("style");c("#"+q.templatePrefix+c(k).attr("id")).remove()}if(!(q.loader instanceof jQuery)){q.loader=c(q.loader);q.loader.children("img").attr("src",q.loaderImg)}if(!(q.noResults instanceof jQuery)){q.noResults=c(q.noResults).text(q.noResultsText)}if(!q.api.uri){k.debug("invalidApiUri","error","Please provide an API endpoint in options.api.uri .")}if(!q.api.httpMethod||c.inArray(q.api.httpMethod,["GET","POST"])===-1){k.debug("invalidHttpMethod","error","Please provide a valid HTTP method.")}};k.load=function(r){if(!d){d=true;if(!q.pagination.appendResults&&m!=="lazyLoad"||c.inArray(m,["nextBtn","prevBtn"])!==-1){c(".lazyjson-template",k).remove()}if(c.inArray(m,h)!==-1&&j===false){n+=1}else{if(c.inArray(m,o)!==-1){n-=1}else{k.debug("currEvent","error","The event is not defined in pagination settings.")}}k.debug("currEvent","notice",m);k.loader(true);i=c.extend(true,i,c(k).data(),q.api.params);if(q.pagination.active){if(n<=0){n=1}if(r){n=1;l=q.pagination.pages*q.pagination.count;g=(n-1)*l}else{n=n||1;l=l||q.pagination.count;g=(n-1)*l}if(q.api.pagination){i[q.api.pagesKey]=n;i[q.api.limitKey]=l;i[q.api.offsetKey]=g}}k.debug("pagination","notice",{page:n,count:l,offset:g});c.ajax({type:q.api.httpMethod.toUpperCase(),url:q.api.uri,data:i,dataType:k.getDataType()}).done(function(s){if(s){f=s;if(q.pagination.active&&!q.api.pagination){f=f.slice(g,g+l)}if(f.length===0){j=true;k.append(q.noResults)}else{j=false;q.noResults.remove();k.build(f)}}if(r){n=q.pagination.pages;l=q.pagination.count}}).fail(function(s,t){}).always(function(){k.loader(false);setTimeout(function(){d=false},800);q.afterLoad(f)})}};k.build=function(r){if(typeof r!=="object"){k.debug("invalidJSON","error","The response must be a valid JSON object.");if(typeof r==="string"){c(k.append("<p>"+r+"</p>"))}}else{c.each(r,function(t,s){var w=p.clone(),u=k.parseObj(w.html(),s);w.html(u).addClass("lazyjson-template").appendTo(k);if(q.effect!==null){w.hide();setTimeout(function(){if(q.effect==="fadeIn"){w.fadeIn("fast")}else{if(q.effect==="slideDown"){w.slideDown("fast")}}},q.delay*t)}})}};k.parseObj=function(s,u,r){if(r){r=r+"."}else{r=""}if(typeof u==="object"){c.each(u,function(x,w){if(w===null){w=""}if(typeof w==="object"&&x){s=k.parseObj(s,w,r+x)}else{var y=new RegExp("{{"+r+x+"}}","g");s=s.replace(y,w)}})}else{if(typeof u==="string"){var t=new RegExp("{{value}}","g");s=s.replace(t,u)}}return s};k.getDataType=function(){var s=document.createElement("a"),r=document.createElement("a");s.href=document.URL;r.href=q.api.uri;if(r.hostname===s.hostname&&!q.api.forceJSONP){return"json"}else{return"jsonp"}};k.loader=function(r){if(r){k.append(q.loader)}else{c(q.loader,k).remove()}};if(c(this).length!==0){k.init();k.debug("options","notice",q)}else{k.debug("invalidMainElement","error","The main object "+this+" does not exist.")}};c.fn.lazyjson.defaults={loadOnInit:true,templatePrefix:"template-",loader:'<div id="lj-loader" style="text-align:center;padding:20px;"><img /></div>',loaderImg:null,noResults:'<div id="lj-noresponse" style="text-align:center;padding:20px;"></div>',noResultsText:"No Results Found",delay:50,effect:null,pagination:{active:false,pages:1,count:10,appendResults:false,lazyLoad:false,nextBtn:"a.next",prevBtn:"a.previous",loadOnEvent:null,loadOnTarget:null},api:{uri:null,httpMethod:"GET",forceJSONP:false,pagination:false,pagesKey:"page",limitKey:"limit",offsetKey:"offset",params:{}},debug:false,afterLoad:function(d){}}})(window,console,jQuery);