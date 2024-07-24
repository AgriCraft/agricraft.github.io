
# Fertilizer

Fertilizers are items used make the plant grow faster by forcing a growth tick of the plant. AgriCraft ships default fertilizers such as bone meal, but these can be modified and new fertilizers can be added.

To create a fertilizer, add a new JSON file in the directory `data/<namespace>/agricraft/fertilizers/<fertilizer_id>.json` where `namespace` is the namespace and `fertilizer_id` is the ID of this fertilizer, which can be whatever you want.

Every fertilizer requires the following fields:
- `mods`: mods required for the plant to be loaded.
- `variants`: array of item objects representing the fertilizer. Every item object consists of `item` field, which can be a tag or a resource location.
- `trigger_mutation`: if `true`, the fertilizer can trigger crop mutation.
- `trigger_weeds`: if `true`, the fertilizer can trigger weed growth in the crop.
- `potency`: potency of the fertilizer, higher values mean faster growth.
- `reduce_growth`: if `true`, the fertilizer can reduce the growth stage of negatively affected plants.
- `kill_plant`: if `true`, the fertilizer can kill negatively affected plants.
- `neutral_on`: list of plants unaffected by the fertilizer. Can be a tag or a resource location.
- `negative_on`: list of plants negatively affected by the fertilizer. Can be a tag or a resource location.
- `particles`: array of particles that are spawned in the world when the fertilizer is used on a plant. Every particle object consists of:
	- `amount`: amount of particles.
	- `particle`: resource location of the particle that will spawn.
	- `delta_x`, `delta_y` and `delta_z`: these represent how far from the center of the block the particles will spawn in the given direction.
	- `when`: list of outcomes that can spawn the particle. Can be `positive`, `neutral` and `negative`.

Here is an example of a fertilizer that should be similar to bone meal:
```json
{
  "mods": [],
  "variants": [
    {
      "item": "minecraft:bone_meal"
    }
  ],
  "trigger_mutation": true,
  "trigger_weeds": true,
  "potency": 1,
  "reduce_growth": true,
  "kill_plant": true,
  "neutral_on": [
    "agricraft:nitor_wart",
    "minecraft:wither_rose"
  ],
  "negative_on": [],
  "particles": [
    {
      "amount": 2,
      "delta_x": 0.6,
      "delta_y": 0.4,
      "delta_z": 0.6,
      "particle": "minecraft:happy_villager",
      "when": [
        "positive"
      ]
    },
    {
      "amount": 2,
      "delta_x": 0.6,
      "delta_y": 0.4,
      "delta_z": 0.6,
      "particle": "minecraft:smoke",
      "when": [
        "negative"
      ]
    }
  ]
}
```

## Plant tags

To simplify maintaining `neutral_on` and `negative_on` fields, you can make plant tags. Plant tags are similar to block or item tags, but for plants instead.

They must be placed in the directory `data/<namespace>/tags/agricraft/plants/<tag_id>.json`.

The example below shows a tag that contains all tulip plants:
```json
{
  "values": [
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:orange_tulip",
    "minecraft:red_tulip"
  ]
}
```

