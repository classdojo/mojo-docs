YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Animator",
        "Application",
        "RegisteredClasses"
    ],
    "modules": [
        "mojo",
        "mojo-application"
    ],
    "allModules": [
        {
            "displayName": "mojo",
            "name": "mojo",
            "description": "Animator that makes changes to the UI state of the application. Prevents layout thrashing."
        },
        {
            "displayName": "mojo-application",
            "name": "mojo-application",
            "description": "Main entry point to your application. This is where everything is initialized."
        }
    ]
} };
});