import {bootstrap}    from '@angular/platform-browser-dynamic'
import {LocationStrategy, PathLocationStrategy} from '@angular/common'
import {provide}    from '@angular/core'
import {CORE_DIRECTIVES} from '@angular/common'
import {ROUTER_PROVIDERS} from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './components/app/index'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);