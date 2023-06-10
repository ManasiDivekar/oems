import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) { }
  getallquestion(id:any){
    return this.httpclient.get(`${baseUrl}/question/quiz/all/${id}`);
  }
  getallquesforuser(id:any){
  return this.httpclient.get(`${baseUrl}/question/quiz/${id}`);
  }
getquestionbyid(id:any){
return this.httpclient.get(`${baseUrl}/question/${id}`);
}
  deletequestion(id:any){
    return this.httpclient.delete(`${baseUrl}/question/${id}`);
  }
postquestion(data:any){
  return this.httpclient.post(`${baseUrl}/question/`,data);
}

putQUestion(data:any){
return this.httpclient.put(`${baseUrl}/question/`,data);
}

directsubmitques(body:any){
  return this.httpclient.post(`${baseUrl}/question/direct-quiz`,body);
}
}
