# Emoji Primer
[How Emojis Work](https://joeattardi.codes/how-emojis-work)

## Text Configurations

### Search:
```
search                : 'Search'
clear                 : 'Clear'
notfound              : 'No Emoji Found'
searchPlaceholder     : 'Search...
```

### Skin:
```
skintext : 'Choose your default skin tone',

skintones: {
  1: 'Default Skin Tone',
  2: 'Light Skin Tone',
  3: 'Medium-Light Skin Tone',
  4: 'Medium Skin Tone',
  5: 'Medium-Dark Skin Tone',
  6: 'Dark Skin Tone',
}
```


### Categories
```
Categorieslabel : 'Emoji categories'

categories: {
  search  : 'Search Results',
  recent  : 'Frequently Used',
  smileys : 'Smileys & Emotion',
  people  : 'People & Body',
  nature  : 'Animals & Nature',
  foods   : 'Food & Drink',
  activity: 'Activity',
  places  : 'Travel & Places',
  objects : 'Objects',
  symbols : 'Symbols',
  flags   : 'Flags',
  custom  : 'Custom',
}

```

---

## Sprites

- Sheets are served from `unpkg`
- Only The sheet that is requested is fetched
- Fetched resources are:
  - spritesheet (PNG | SVG)
  - dataset for it (JSON)
- Configurations
  - `sheetSet`    : [`'apple'`, `'facebook'`, `'google'`, `'twitter'`]
  - `sheetSize`   : [`16`, `20`, `32`, `64`]

---
### Available Sheets
| Set       | Size (`16`) | Size (`20`) | Size (`32`) | Size (`64`) |
| --------- | ------------| ------------| ------------| ------------|
| apple     | 407 KB      | 561 KB      | 1.34 MB     | 3.60 MB     |
| facebook  | 416 KB      | 579 KB      | 1.38 MB     | 3.68 MB     |
| google    | 362 KB      | 489 KB      | 1.12 MB     | 2.78 MB     |
| twitter   | 361 KB      | 485 KB      | 1.05 MB     | 2.39 MB     |
---
### Available Datasets
| Set       | Size (on disk) |
| --------- | -------------- |
| all       | 611 KB         |
| apple     | 548 KB         |
| facebook  | 468 KB         |
| google    | 518 KB         |
| twitter   | 517 KB         |
| native    | ??? KB         |
---

## Data

### Emoji
**With Skin Variations**
```js
{
    "name": "HANDBALL",
    "unified": "1F93E",
    "non_qualified": null,
    "docomo": null,
    "au": null,
    "softbank": null,
    "google": null,
    "image": "1f93e.png",
    "sheet_x": 41,
    "sheet_y": 17,
    "short_name": "handball",
    "short_names": [
      "handball"
    ],
    "text": null,
    "texts": null,
    "category": "People & Body",
    "subcategory": "person-sport",
    "sort_order": 445,
    "added_in": "3.0",
    "has_img_apple": true,
    "has_img_google": true,
    "has_img_twitter": true,
    "has_img_facebook": true,
    "skin_variations": {
      "1F3FB": {
        "unified": "1F93E-1F3FB",
        "non_qualified": null,
        "image": "1f93e-1f3fb.png",
        "sheet_x": 41,
        "sheet_y": 18,
        "added_in": "3.0",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true
      },
      "1F3FC": {
        "unified": "1F93E-1F3FC",
        "non_qualified": null,
        "image": "1f93e-1f3fc.png",
        "sheet_x": 41,
        "sheet_y": 19,
        "added_in": "3.0",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true
      },
      "1F3FD": {
        "unified": "1F93E-1F3FD",
        "non_qualified": null,
        "image": "1f93e-1f3fd.png",
        "sheet_x": 41,
        "sheet_y": 20,
        "added_in": "3.0",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true
      },
      "1F3FE": {
        "unified": "1F93E-1F3FE",
        "non_qualified": null,
        "image": "1f93e-1f3fe.png",
        "sheet_x": 41,
        "sheet_y": 21,
        "added_in": "3.0",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true
      },
      "1F3FF": {
        "unified": "1F93E-1F3FF",
        "non_qualified": null,
        "image": "1f93e-1f3ff.png",
        "sheet_x": 41,
        "sheet_y": 22,
        "added_in": "3.0",
        "has_img_apple": true,
        "has_img_google": true,
        "has_img_twitter": true,
        "has_img_facebook": true
      }
    }
  },
```

**Without Skin Variations**
```js
{
    "name": "DIVING MASK",
    "unified": "1F93F",
    "non_qualified": null,
    "docomo": null,
    "au": null,
    "softbank": null,
    "google": null,
    "image": "1f93f.png",
    "sheet_x": 41,
    "sheet_y": 23,
    "short_name": "diving_mask",
    "short_names": [
      "diving_mask"
    ],
    "text": null,
    "texts": null,
    "category": "Activities",
    "subcategory": "sport",
    "sort_order": 1037,
    "added_in": "12.0",
    "has_img_apple": true,
    "has_img_google": true,
    "has_img_twitter": true,
    "has_img_facebook": true
  }
```

**Custom Emoji**
```js
{
  id: 'octocat',
  name: 'Octocat',
  colons: ':octocat:',
  text: '',
  emoticons: [],
  custom: true,
  imageUrl: 'https://github.githubassets.com/images/icons/emoji/octocat.png'
}
```

---

### Sheet
```js
{
  url: "https://unpkg.com/emoji-datasource-twitter@4.0.4/img/twitter/sheets-256/64.png",
  size: 64,
  sheetColumns: 52,
  sheetRows: 52
}
```

---

### Category
```js
{
  id: 'smiley',
  name: 'Smileys & Emotion',
  imgUrl: 'url for category image'
}
```

---

### Skin
```ts
{
  skinImg: 'url for svg image'
}

{
  id: 1,
  name: 'Skin Tone Name :/',
  color: 'css color variable',
}
```
