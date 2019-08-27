import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  // form2 = new FormGroup({
  //   title: new FormControl('titile'),
  //   tagList: new FormArray([new FormControl('Angular')])
  // });

  requiredAndMinLength12 = Validators.compose([Validators.required, Validators.minLength(12)]);

  form = this.fb.group({
    title: this.fb.control('title', [Validators.required, Validators.minLength(12)]),
    description: this.fb.control(null),
    body: this.fb.control(null, this.requiredAndMinLength12),
    tagList: this.fb.array([this.fb.control('Angular'), this.fb.control('HTML')])
  });

  get tagArray() {
    return this.form.get('tagList') as FormArray;
  }

  get tagControls() {
    return this.tagArray.controls;
  }

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {}

  ngOnInit() {}

  addTag() {
    this.tagArray.push(this.fb.control(null));
  }

  createPost() {
    console.log(this.form);
    if (this.form.valid) {
      this.form.patchValue({ description: (this.form.get('body').value as string).substring(0, 100) });
      this.postService.createArticle(this.form.value).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: error => {
          console.log(error);
          alert('新增文章失敗');
        }
      });
    }
  }
}
