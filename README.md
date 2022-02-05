# ember-emoji-picker

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/emojinx/ember-emoji-picker)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2dc46cc-78ad-4cc7-8aae-b84cf72123a5/deploy-status)](https://app.netlify.com/sites/ember-emoji-picker/deploys)


# ⚠️ WIP

- Quick Demo @ https://ember-emojipicker.netlify.app

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

### Prospective Features

- Choose between png & svg sprites (although some icon sets are either in png or svg)

- Choose between various iconsets

  - twemoji, openmoji, google emoji, apple emoji, facebook emoji ...

- **Override styles with your custom css **

  - since BEM naming is used to make class names unique, at the same time using singular classes for styles)

- **Highly Configurable**

  - can re-arrange blocks like header, searchbar, footer etc... (by setting provided CSS variables)
  - Custom Themes (either by overriding CSS Variables, or use custom CSS)

- **Advanced Configurations**

  - BYO Components (for header, search, etc...) with the help of named blocks (it's fairly recent feature)

- **Performance**
  - Caches the emoji data & sprite sheets
  - Use of IDB to store local persistant data (if needed) like recently used emojis
  - Leveraging `content-visibility` css rule to offset paint process
  - Use of virtual scrolling (to scale growing number of emojis)

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install @emojinx/ember-emoji-picker
```

## Usage

[Longer description of how to use the addon in apps.]

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Docs

[Wiki Link](meh)
