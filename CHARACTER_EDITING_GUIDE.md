# Family Showdown Character Editing Guide

Most character content is controlled from one file:

- `src/data/characterData.ts`

Add your character images here:

- `src/assets/images/`

## Add Or Replace Characters

Each object inside `characterData` is one character. Copy an existing character object, paste it into the array, then change these fields:

- `id`: unique lowercase id, for example `elder-brother` or `aunt-maya`
- `name`: display name
- `element`: one of `Pyro`, `Hydro`, `Geo`, `Dendro`, `Electro`, `Anemo`, `Cryo`
- `level`
- `friendshipLevel`
- `description`
- `stats`
- `images.profileThumb`
- `images.mainRender`
- `images.weaponRender`
- `weapon`
- `constellations`
- `talents`
- `profile`

Image paths should point to files in `src/assets/images`, for example:

```ts
images: {
  profileThumb: "/src/assets/images/my_character_thumb.jpg",
  mainRender: "/src/assets/images/my_character_full.jpg",
  weaponRender: "/src/assets/images/my_character_weapon.jpg",
},
```

## Supported Elements

The app already supports all seven Genshin-style elements:

- `Pyro`: fire
- `Hydro`: water
- `Geo`: rock/earth
- `Dendro`: nature/grass
- `Electro`: lightning
- `Anemo`: wind
- `Cryo`: ice

Element colors are used in these files:

- `src/App.tsx`: page background atmosphere
- `src/components/TopNavigation.tsx`: top badge and thumbnail ring
- `src/components/AttributesTab.tsx`: attribute panel colors
- `src/components/WeaponsTab.tsx`: weapon panel colors
- `src/components/Sidebar.tsx`: left menu active color
- `src/components/HolographicPanel.tsx`: shared panel glow

You only need to edit those element color files if you want different colors or if you add a brand-new element name.

## App Title

The browser tab title is in:

- `index.html`

It is currently set to `Family Showdown`.

## Large Roster

The top character selector now scrolls horizontally, so 14 to 16 characters can fit without breaking the layout. You can also switch characters with `Q` and `E`.
