import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public ids = [];

  constructor() {}

  setStorage(id: any) {
    this.ids[id] = id;
    console.log('setSession = ', this.ids);
    const filtered = this.ids.filter(function(el) {
      return el != null;
    });
    Storage.set({
      key: 'idevento',
      value: JSON.stringify(filtered),
    }).then(()=> console.log('Item Armazenado'));
  }

  getStorage(){
    return Storage.get({ key: 'idevento' });
  }

  updateItemSession(id: any) {
    let ids = JSON.parse(this.getStorage());
    console.log('updateItemSession ids = ', ids);
    if (ids) {
      ids.splice(ids.indexOf(id), 1);
    }
    console.log('updateItemSession ids = ', ids);
    this.setStorage('id', JSON.stringify(ids));  }
}
