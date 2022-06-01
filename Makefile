JS_SRC := $(shell find src/ -type f)
JS_DST := dist/embed.dev.js dist/embed.dev.js.map dist/embed.min.js dist/embed.min.js.LICENSE.txt


all: build

clean:
	rm -f $(JS_DST)

init:
	npm install

${JS_DST}: $(JS_SRC)
	npm run build

build: $(JS_DST)

watch:
	npm run watch

serve:
	cd dist/; python -m http.server

.PHONY: clean init build
