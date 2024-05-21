import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    headers = new HttpHeaders();

    constructor(private http: HttpClient) { this.headers.append('Content-Type', 'multipart/form-data'); }
    //login 
    getLoginUser(data: any) {
        return this.http.post<any>(environment.baseurl + "/Adminlogin", data);
    }
    //dashboard:-
    getDashboard() {
        return this.http.get<any>(environment.baseurl + '');
    }
    //book insert:-
    getBookInsert(data: any) {
        return this.http.post<any>(environment.baseurl + "/book", data, { headers: this.headers });
    }
    //book update:-
    getBookUpdate(data: any) {
        return this.http.post<any>(environment.baseurl + "/update-book", data);
    }
    //book delete:-
    getBookDelete(id: any) {
        return this.http.get<any>(environment.baseurl + `/Deletebook/${id}`);
    }
    //book display:-
    getBooks() {
        return this.http.get<any>(environment.baseurl + '/get-book');
    }
    //book Catgeries insert:-
    getBookCatgeriesInsert(data: any) {
        return this.http.post<any>(environment.baseurl + "/book-catgories", data, { headers: this.headers });
    }
    //book Catgeries update:-
    getBookCatgeriesUpdate(data: any) {
        return this.http.post<any>(environment.baseurl + "/update-book-categories", data);
    }
    //book Catgeries delete:-
    getBookCatgeriesDelete(id: any) {
        return this.http.get<any>(environment.baseurl + `/deletebookCategories/${id}`);
    }
    //bookCatgeries display:-
    getBooksCatgeries() {
        return this.http.get<any>(environment.baseurl + '/get-book-catgories');
    }
    //blog insert:-
    getBlogInsert(data: any) {
        return this.http.post<any>(environment.baseurl + "/blog", data, { headers: this.headers });
    }
    //blog update:-
    getBlogUpdate(data: any) {
        return this.http.post<any>(environment.baseurl + "/update-book-blog", data);
    }
    //blog delete:-
    getBlogDelete(id: any) {
        return this.http.get<any>(environment.baseurl + `/deleteBlog/${id}`);
    }
    //blog display:-
    getBlogs() {
        return this.http.get<any>(environment.baseurl + '/get-blog');
    }
    //author insert:-
    getAuthorInsert(data: any) {
        return this.http.post<any>(environment.baseurl + "/author", data, { headers: this.headers });
    }
    //author update:-
    getAuthorUpdate(data: any) {
        return this.http.post<any>(environment.baseurl + "/update-Author", data);
    }
    //author delete:-
    getAuthorDelete(id: any) {
        return this.http.get<any>(environment.baseurl + `/deleteAuthor/${id}`);
    }
    //author display:-
    getAuthors() {
        return this.http.get<any>(environment.baseurl + '/get-author');
    }
    //Payment:-
    getPayment() {
        return this.http.get<any>(environment.baseurl + '/get-payment');
    }
    //Contactus:-
    getContactus() {
        return this.http.get<any>(environment.baseurl + '/get-contact-data');
    }
}