export const htmlTemplate = `
<nav class="navbar navbar-inverse navbar-fixed-top">
<div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Angular 2</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" [routerLink]="['TimeLogs']">Time Logs</a></li>
            <li><a href="#" [routerLink]="['AddTimeLog', {id:'new'}]">Add Time Log</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>
<div class="container-fluid top-menu-margin">
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#" [routerLink]="['TimeLogs']">Time Logs</a></li>
            <li><a href="#" [routerLink]="['AddTimeLog', {id:'new'}]">Add Time Log</a></li>
          </ul>
          <div class="btn-group" dropdown [(isOpen)]="status.isopen">
    <button id="single-button" type="button" class="btn btn-primary" dropdownToggle [disabled]="disabled">
      Button dropdown <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="single-button">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
`;