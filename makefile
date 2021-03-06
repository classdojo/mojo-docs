all: download-packages yuidoc

clean:	
	rm -rf packages docs

link-packages:
	mkdir -p packages;
	ln -s `cbd dir mojo` ./packages/mojo.js
	ln -s `cbd dir bindable.js` ./packages/bindable.js
	ln -s `cbd dir mojo-router` ./packages/mojo-router
	ln -s `cbd dir mojo-model` ./packages/mojo-model
	ln -s `cbd dir mediocre.js` ./packages/mediocre
	ln -s `cbd dir paperclip.js` ./packages/paperclip.js
	ln -s `cbd dir nofactor.js` ./packages/nofactor.js
	ln -s `cbd dir loaf.js` ./packages/loaf.js
	ln -s `cbd dir paperclip-view` ./packages/paperclip-component
	ln -s `cbd dir subindable.js` ./packages/subindable.js


download-packages:
	git clone git@github.com:classdojo/mojo.js.git packages/mojo.js
	git clone git@github.com:classdojo/paperclip.js.git packages/paperclip.js
	git clone git@github.com:classdojo/paperclip-component.js.git packages/paperclip-component.js

yuidoc:
	./node_modules/.bin/yuidoc -c ./config.json