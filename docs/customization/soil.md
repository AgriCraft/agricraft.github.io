# Soil

Soils are blocks crops can grow on. AgriCraft ships default soils, but these can be modified and new soils can be added with a datapack.

To create your own soil, add a new json file in the directory `data/<namespace>/agricraft/soils/<soil_id>.json` where `namespace` is the namespace and `soil_id` is the ID of this soil, which can be whatever you want.

Every soil requires the following fields:
- `mods`: mods needed for the soil to be loaded.
- `variants`: array of blocks representing this soil. Every soil object consists of:
	-  `block`: tag or a resource location of the block.
	-  `states`: list of states the block must match. *[optional]*
- `humidity`: humidity condition of the soil. Accepted values [can be found here](#Humidity).
- `acidity`: acidity condition of the soil. Accepted values [can be found here](#Acidity).
- `nutrients`: nutrient condition of the soil. Accepted values [can be found here](#Nutrients).
- `growth_modifier`: value used to modify the growth of the plants on this soil. The default value is `1.0`. Higher values will increase the growth speed, while lower ones will decrease it.

The example below shows soul soil as a soil:

```json
{
  "mods": [],
  "variants": [
    {
      "block": "minecraft:soul_soil"
    }
  ],
  "acidity": "neutral",
  "humidity": "arid",
  "nutrients": "very_high",
  "growth_modifier": 1.0
}
```

## Soil conditions

### Humidity

| Index | Condition | Alias                |
|-------|-----------|----------------------|
| 0     | `arid`    |                      |
| 1     | `dry`     |                      |
| 2     | `damp`    | `moist`              |
| 3     | `wet`     | `standard` `default` |
| 4     | `watery`  |                      |
| 5     | `flooded` |                      |

### Acidity

| Index | Condition           | Alias                                   |
|-------|---------------------|-----------------------------------------|
| 0     | `highly_acidic`     | `highly-acidic` `highly acidic`         |
| 1     | `acidic`            |                                         |
| 2     | `slightly_acidic`   | `slightly-acidic` `slightly acidic`     |
| 3     | `neutral`           |                                         |
| 4     | `slightly_alkaline` | `slightly-alkaline` `slightly alkaline` |
| 5     | `alkaline`          |                                         |
| 6     | `highly_alkaline`   | `highly-alkaline` `highly alkaline`     |

### Nutrients

| Index | Condition   | Alias           |
|-------|-------------|-----------------|
| 0     | `none`      | `zero` `empty`  |
| 1     | `very_low`  | `scarce` `poor` |
| 2     | `low`       |                 |
| 3     | `medium`    | `average`       |
| 4     | `high`      |                 |
| 5     | `very_high` | `rich`          |
