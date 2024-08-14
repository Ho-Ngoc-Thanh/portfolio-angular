import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostComponent } from '../../home/home/components/delete-post/delete-post.component';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private _title: string = '';
  private _name: string = '';
  private _getApi: Function = () => {};
  constructor(private matDailog:MatDialog) {}

  public set title(v: string) {
    this._title = v;
  }

  public set name(v: string) {
    this._name = v;
  }

  public set getApi(v: Function) {
    this._getApi = v;
  }

  setData(title: string, name: string, getApi: Function) {
    (this._title = title), (this._name = name);
    this._getApi = getApi;
    this.matDailog.open(DeletePostComponent,{
      data:{
        
      }
    })
  }

  getData() {
    return {
      title: this._title,
      name: this._name,
      functionGet: this._getApi,
    };
  }
}
