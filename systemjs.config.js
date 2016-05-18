(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'client/app',
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular':                   'node_modules/@angular',
        '@angular2-material':         'node_modules/@angular2-material',
        '@angular2-material/checkbox':'node_modules/@angular2-material/checkbox/checkbox',
        '@angular2-material/core':      'node_modules/@angular2-material/core/core',
        '@angular2-material/progress-bar':      'node_modules/@angular2-material/progress-circle/progress-bar',
        '@angular2-material/progress-circle':      'node_modules/@angular2-material/progress-circle/progress-circle',
        '@angular2-material/radio':      'node_modules/@angular2-material/radio/radio',
        '@angular2-material/sidenav':      'node_modules/@angular2-material/sidenav/sidenav',
        '@angular2-material/toolbar':      'node_modules/@angular2-material/toolbar/toolbar',
        'typescript': './node_modules/typescript/lib/typescript',
        'ng2-bootstrap/ng2-bootstrap': 'node_modules/ng2-bootstrap/ng2-bootstrap',
        'ng2-material': 'node_modules/ng2-material',
        'lodash': 'node_modules/lodash/lodash',
        'moment': 'node_modules/moment/moment'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'bootstrap.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });
    
    meta = {
        lodash: { format: 'amd' }
    };

    var config = {
        defaultJSExtensions: true,
        map: map,
        packages: packages,
        meta: meta,
        transpiler: "typescript",
        typescriptOptions: {
            "target": "es5",
            "module": "commonjs",
            "declaration": false,
            "removeComments": true,
            "noLib": false,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "sourceMap": true,
            "pretty": true,
            "allowUnreachableCode": false,
            "allowUnusedLabels": false,
            "noImplicitAny": true,
            "noImplicitReturns": true,
            "noImplicitUseStrict": false,
            "noFallthroughCasesInSwitch": true
        }
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);