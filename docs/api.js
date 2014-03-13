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
            "description": "## Usage\n<p>Views are simply models with a few special properties: `render`, and `remove`, and `decorators`. Decorators are essentially plugins\nthat allow you to customize view's behavior to fit your needs. This means you can do something like add your own template engine.\nMojo was design this way to allow better compatibility between different web frameworks. </p>\nAt the core, this is what a mojo view is:\n```javascript\nvar SubView = mojo.View.extend();\nvar view = new SubView({ name: \"craig\" }, new mojo.Application());\nconsole.log(view.get(\"name\")); //craig\nconsole.log(view.render().toString()); // blank string, no template engine specified\n```\nMojo does however come with some built-in decorators. However, you can use whatever you need.\n## Paperclip Decorator\nThe paperclip decorator allows you to use [paperclip](https://github.com/classdojo/paperclip.js) templates with mojo.\nNote that the following example assumes that you're running in either `node.js`, or have `browserified` your paperclip template:\n<br />\nhello.js:\n```javascript\nvar HelloView = mojo.View.extend({\n  paper: require(\"./hello.pc\")\n});\nnew HelloView({ name: \"Mojo\" }, new mojo.Application()).attach($(\"#application\"));\n```\nhello.pc:\n```mustache\nhello  \\{{name}}!\n```\nHere's what you get:\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/59/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>\n## Sections Decorator\nThe sections decorator allows you to easily define sub-views to your view. Here's a basic example:\n```javascript\nvar ContentView = mojo.View.extend({\n    paper: paperclip.compile(\"content\")\n});\nvar MainView = mojo.View.extend({\n    paper: paperclip.compile(\"main\"),\n    sections: {\n        content: ContentView\n    }\n});\n```\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/60/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>\nNote that you can also use registered components for each section, like so:\n```javascript\n//setup model data for the contacts view\nvar contacts = new bindable.Collection([\n  new bindable.Object({ name: \"John\" }),\n  new bindable.Object({ name: \"Jane\" }),\n  new bindable.Object({ name: \"Jeff\" })\n]);\n// an individual contact\nvar ContactVew = mojo.View.extend({\n  paper: require(\"./contact.pc\")\n});\n// creates a contact view for each contact model\nvar ContactsView = mojo.View.extend({\n  paper: require(\"./contacts.pc\"),\n  sections: {\n    contacts: {\n      // reference ListView, and pass the following properties to it\n      type           : \"list\",\n      source         : contacts,\n      modelViewClass : ContactView\n    }\n  }\n});\n```\nThe above example creates a list of contacts. Here's what you get:\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/61/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>\n<p>You'll notice that the properties of each section are passed directly to the component you want to use. By default, Mojo comes with a `states`, and `list` component. See\n`ListView`, and `StatesView` for further documentation.</p>\nIf you want to use your own custom component, you can do so by registering it to the application. For example:\n```javascript\nvar HelloView = mojo.View.extend({\n  paper: require(\"./hello.pc\")\n});\nvar MainView = mojo.View.extend({\n  paper: require(\"./main.pc\"),\n  sections: {\n    hello: {\n      type: \"hello\",\n      name: \"John\"\n    }\n  }\n});\nvar app = new mojo.Application();\napp.viewClasses.add(\"hello\", HelloView);\napp.viewClasses.add(\"main\", MainView);\napp.viewClasses.create(\"main\").attach($(\"#application\"));\n```\nHere's what you get:\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/62/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>\n## Property Scope\nBy default, sections inherit properties from their parent. Here's a basic example:\n```javascript\nvar HelloView = mojo.View.extend({\n  paper: paperclip.compile(\"hello\")\n});\nvar MainView = mojo.View.extend({\n  paper: paperclip.compile(\"main\"),\n  name: \"jeff\",\n  sections: {\n      hello: HelloView\n  }\n});\n```\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/63/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>\nNote that since `name` is not defined in `HelloView`, it's being inherited from `MainView`. You can easily break inheritance by defining `name` in `HelloView`, like so:\n```javascript\nvar HelloView = mojo.View.extend({\n  paper: paperclip.compile(\"hello\"),\n  define: [\"name\"]\n});\nvar MainView = mojo.View.extend({\n  paper: paperclip.compile(\"main\"),\n  name: \"jeff\",\n  sections: {\n      hello: HelloView\n  }\n});\n```\nHere's what you get:\n<iframe width=\"100%\" height=\"200\" src=\"http://jsfiddle.net/BZA8K/64/embedded/result,js,html\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>"
        }
    ]
} };
});