JS_SRC := $(shell find src/ -type f)
JS_DST := dist/embed.js


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

.PHONY: clean init build
