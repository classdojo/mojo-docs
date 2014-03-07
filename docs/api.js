YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Animator",
        "Application",
        "BaseNodeFactory",
        "BaseView",
        "BindableCollection",
        "BindableObject",
        "Binding",
        "BindingTransformer",
        "CustomNodeFactory",
        "DomFactory",
        "EventEmitter",
        "ListView",
        "Mojo",
        "RegisteredClasses",
        "Section",
        "StateView",
        "StringNodeFactory",
        "SubindableObject"
    ],
    "modules": [
        "mojo",
        "mojo-core",
        "mojo-views"
    ],
    "allModules": [
        {
            "displayName": "mojo",
            "name": "mojo"
        },
        {
            "displayName": "mojo-core",
            "name": "mojo-core",
            "description": "created when the second parameter on `bind(property, listener)` is an object."
        },
        {
            "displayName": "mojo-views",
            "name": "mojo-views",
            "description": "## Usage\n```javascript\nvar SubView = mojo.View.extend({\n  name: \"craig\"\n});\nvar view = new SubView();\nconsole.log(view.get(\"name\")); //craig\n```\n## Sections Property\nThe sections property allows you to define sub-views.\n```javascript\nvar PagesView = mojo.View.extend({\n  sections: {\n    header: require(\"./headerView\"),\n    content: require(\"./contentView\")\n  }\n})\n```\n## Events Property\nEvents property allows you listen to events emitted by the DOM, or view controller.\n```javascript"
        }
    ]
} };
});