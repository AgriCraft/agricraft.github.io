# Weed

Weeds are configured almost like the plants.

## Datapack

As with plants, the datapack part consists of one JSON file defining the weed. The location of the file is `data/<namespace>/agricraft/weeds/<weed_id>.json`.

Weed should have the following fields:
- `mods`: mods needed for the weed to be loaded.
- `stages`: list of growth stages for this weed. Every stage should be a number corresponding to the height of the weed in pixels.
- `spawn_chance`: chance the weed has of spawning on a random tick.
- `growth_chance`: chance the weed has of growing on a random tick.
- `aggressive`: if `true`, the weed will try to spread to adjacent crops when mature.
- `lethal`: if `true`, the weed will try to kill the host plant when mature.
- `rake_products`: list of possible raking products of the weed. Follows the same structure as [plant products](./plant.mdx#adding-plant-products).
- `requirement`: an object containing plant's requirements. Follows the same structure as plants, which is explained [here](./plant.mdx#creating-a-simple-plant) and [here](./plant.mdx#adding-additional-requirements).


The example below shows a basic weed:
```json
{
  "mods": [],
  "stages": [
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16
  ],
  "spawn_chance": 0.25,
  "growth_chance": 0.9,
  "aggressive": true,
  "lethal": true,
  "requirement": {
    "light_tolerance_factor": 0.5,
    "max_light": 16,
    "min_light": 10,
    "soil_acidity": {
      "type": "equal",
      "tolerance_factor": 0.2,
      "value": "neutral"
    },
    "soil_humidity": {
      "type": "equal",
      "tolerance_factor": 0.15,
      "value": "damp"
    },
    "soil_nutrients": {
      "type": "equal_or_higher",
      "tolerance_factor": 0.1,
      "value": "medium"
    },
    "seasons": [
      "spring",
      "summer",
      "autumn",
      "winter"
    ]
  }
}
```

## Resourcepack

The resourcepack part describes how the weed is rendered. It follows the same architecture as the [plant resourcepack part](./plant.mdx#resourcepack).

The only difference is that the models must be placed in the `weed` folder instead of `crop`.

### Textures

Agricraft will load the textures from `textures/weed/`, so you can put your weed textures there if you want.

### Translation

The key used to translate the name of the weed is `weed.agricraft.<namespace>.<weed_id>`.
