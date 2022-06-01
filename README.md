# isso-frontend

## Goals

- Use modern technology (React.js, TypeScript) without worrying about bloat or package count
- Use dependencies rather than reimplementing them manually
- Write cleaner CSS from scratch
- Solve some issues:
  - Fetch i18n in separate request instead of bundling all languages together
  - Improve overall DOM structure
  - More organized updating of elements using React
- Add some features:
  - Allow admin/moderation from comment section page (instead of just the admin panel)
  - Use new `/config` endpoint for config -- remove client-side config

### https://github.com/posativ/isso/issues/894#issuecomment-1142378908

- [x] A lot of places rely on the `config` object/instance. The config, however,
  needs to be fetched from the server first (or rather, the overrides).
- [x] The `api` needs to know its own endpoint, so it has to be instantiated or
  behave object-y, if we don't want to let it scrape the endpoint from script
  tags on every API invocation
- [ ] Everything that translates things needs an `i18n` instance, which in turn
  needs to have a `config` instance for language and pluralforms selection

I believe these are solved for the most part due to the nature of React:

- [x] There are a lot of periodic tasks (updating `ago` datetime to human
  representation) to be done, all very similar. They should be handled in a
  "clock tick" fashion and not each run on their own (else we'd have a
  `setTimeout` timer for each) They should vanish as soon as the underlying DOM
  object is gone.
- [x] The postbox and comment renderers can insert instances of each other, i.e.
  the a "comment" needs to be able to insert a postbox for replying and a
  postbox needs to insert comments once they're submitted.
- [x] All template rendering needs a `config` and readily-configured `i18n`
  instance
- [ ] `init()` and `fetchComments()` both need to wait for the config to be fetched
  from the server. And they need a sort of locking/waiting mechanism to block
  until that is done, or defer those actions that rely on config until it is
  fetched. Also, `init` needs to be able to tell `fetchComments` to start
  working, so sharing some sort of mutex is needed.

## Structure

See [Isso React Design.md - Gist](https://gist.github.com/BBaoVanC/aa0229a3c4458836063f62b472c8bde6)
