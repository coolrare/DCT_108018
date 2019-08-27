import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  form2 = new FormGroup({
    title: new FormControl('titile'),
    tags: new FormArray([
      new FormControl('Angular')
    ])
  });

  form = this.fb.group({
    title: this.fb.control('title'),
    body: this.fb.control(null),
    tags: this.fb.array(
      [
        this.fb.control('Angular'),
        this.fb.control('HTML')
      ]
    )
  });

  get tagArray() {
    return this.form.get('tags') as FormArray;
  }

  get tagControls() {
    return this.tagArray.controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addTag() {
    this.tagArray.push(this.fb.control(null));
  }

  createPost() {
    console.log(this.form.value);
  }

}
