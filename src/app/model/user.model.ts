import { EmailValidator } from '@angular/forms';

export class User{
    public userId: number;
    public userName: string;
    public password: string;
    public email: string;
    public phone: string;

    constructor(userId: number, userName: string,password: string,email: string,phone: string){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}