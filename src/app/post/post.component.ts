import { Component } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  listPosts: Posts[] = [];
  
  constructor( private postservice: PostService ) {}

  ngOnInit(): void {
    this.getListPosts()
  }
  
  getListPosts(): void {
    this.postservice.getAll().subscribe((posts) => {this.listPosts = posts})
   
  }
}
