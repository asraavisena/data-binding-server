import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit  {
  // ! @Input() binding property -> memakai aliases -> bindable from outside
  @ViewChild('heading', {static: true}) header: ElementRef;
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static:true}) pragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.pragraph.nativeElement.textContent);
    
  }

  ngAfterViewInit() {
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('Text Content of Paragraph: ' + this.pragraph.nativeElement.textContent);

  }

}
