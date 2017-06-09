import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/component.app';
import { TrimString } from './components/pipe.app';
import { SearchData } from './components/search.app';
import { Home } from './pages/home/home.component';
import { DetailPage } from './pages/detailpage/detailpage.component';
import { Upload } from './pages/upload/upload.component';
import { FineList } from './pages/finelist/finelist.component';
import { CorrectFile } from './pages/correctfile/correctfile.component';
import { UpdateLLP } from './pages/llp/updatellp.component';
import { Token } from './pages/token/token.component';
import { routing } from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    TrimString,
    SearchData,
    Home,
    DetailPage,
    Upload,
    FineList,
    CorrectFile,
    UpdateLLP,
    Token
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}