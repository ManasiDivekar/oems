"use strict";(self.webpackChunkOEMSmanagement=self.webpackChunkOEMSmanagement||[]).push([[592],{2180:(a,u,n)=>{n.d(u,{H:()=>c});var e=n(9070),i=n(4650),o=n(529);let c=(()=>{class r{constructor(t){this.httpclient=t}getallcategory(){return this.httpclient.get(`${e.Z}/category/`)}getcategoryid(t){return this.httpclient.get(`${e.Z}/category/${t}`)}postcategory(t){return this.httpclient.post(`${e.Z}/category/`,t)}putcategory(t){return this.httpclient.put(`${e.Z}/category/`,t)}deletecategory(t){return this.httpclient.delete(`${e.Z}/category/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(o.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7476:(a,u,n)=>{n.d(u,{a:()=>c});var e=n(9070),i=n(4650),o=n(529);let c=(()=>{class r{constructor(t){this.httpclient=t}getallquestion(t){return this.httpclient.get(`${e.Z}/question/quiz/all/${t}`)}getallquesforuser(t){return this.httpclient.get(`${e.Z}/question/quiz/${t}`)}getquestionbyid(t){return this.httpclient.get(`${e.Z}/question/${t}`)}deletequestion(t){return this.httpclient.delete(`${e.Z}/question/${t}`)}postquestion(t){return this.httpclient.post(`${e.Z}/question/`,t)}putQUestion(t){return this.httpclient.put(`${e.Z}/question/`,t)}directsubmitques(t){return this.httpclient.post(`${e.Z}/question/direct-quiz`,t)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(o.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9743:(a,u,n)=>{n.d(u,{p:()=>c});var e=n(9070),i=n(4650),o=n(529);let c=(()=>{class r{constructor(t){this.httpclient=t}getquizeapi(){return this.httpclient.get(`${e.Z}/quiz/`)}getquizeid(t){return this.httpclient.get(`${e.Z}/quiz/${t}`)}getallactivequiz(){return this.httpclient.get(`${e.Z}/quiz/active`)}getactivequizeofcategory(t){return this.httpclient.get(`${e.Z}/quiz/category/active/${t}`)}deletequize(t){return this.httpclient.delete(`${e.Z}/quiz/${t}`)}postquize(t){return this.httpclient.post(`${e.Z}/quiz/`,t)}putquize(t){return this.httpclient.put(`${e.Z}/quiz/`,t)}}return r.\u0275fac=function(t){return new(t||r)(i.LFG(o.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);