 import { Directive, ElementRef } from "@angular/core";
 @Directive({
    selector:'[BackGround]'
 })
 export class BackGround{
    constructor(element:ElementRef){
        element.nativeElement.style.background='#1d1919'
        console.log(element);

    }
 }