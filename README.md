kready-admin
============

- Vendor JS files belong in /js/vendor/
- the Main application module (Kernel) is /js/app.js
- modules are stored in modules/{module_name}
- if the module has a template it is named modules/{module_name}/{module_name}.html
- every {module_name}.js will be added to the bottom on index.html
- every module will have a modules/{module_name}/{module_name}.js
- generally, core modules will be registered as dependencies in /js/app.js
