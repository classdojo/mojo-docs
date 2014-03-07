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
            "description": "BindableObjects make it easy to link properties of two separate objects - when one changes, \nthe other will automatically update with that change. It enables much easier interactions between data models and UIs, \namong other uses outside of MVC.\n<br> \n<br>\nBindableObjects provide a way to maintain the state between server <-> client for a realtime front-end \napplication (similar to Firebase), or perhaps a way to communicate between server <-> server for a realtime distributed Node.js \napplication.\n### Example\n```javascript\nvar bindable = require(\"bindable\");\nvar person = new bindable.Object({\n  name: \"craig\",\n  last: \"condon\",\n  location: {\n    city: \"San Francisco\"\n  }\n});\nperson.bind(\"location.zip\", function(value) {\n  // 94102\n}).now();\n//triggers the binding\nperson.set(\"location.zip\", \"94102\"); \n//bind location.zip to another property in the model, and do it only once\nperson.bind(\"location.zip\", { to: \"zip\", max: 1 }).now();\n//bind location.zip to another object, and make it bi-directional.\nperson.bind(\"location.zip\", { target: anotherModel, to: \"location.zip\", bothWays: true }).now();\n//chain to multiple items, and limit it!\nperson.bind(\"location.zip\", { to: [\"property\", \"anotherProperty\"], max: 1 }).now();\n//you can also transform data as it's being bound\nperson.bind(\"name\", {\n  to: \"name2\",\n  map: function (name) {\n    return name.toUpperCase();\n  }\n}).now();\n```"
        },
        {
            "displayName": "mojo-views",
            "name": "mojo-views",
            "description": "## Usage\n```javascript\nvar SubView = mojo.View.extend({\n  name: \"craig\"\n});\nvar view = new SubView();\nconsole.log(view.get(\"name\")); //craig\n```\n## Sections Property\nThe sections property allows you to define sub-views.\n```javascript\nvar PagesView = mojo.View.extend({\n  sections: {\n    header: require(\"./headerView\"),\n    content: require(\"./contentView\")\n  }\n})\n```\n## Events Property\nEvents property allows you listen to events emitted by the DOM, or view controller.\n```javascript"
        }
    ]
} };
});