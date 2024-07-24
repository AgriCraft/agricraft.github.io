# Mutation

Mutations are a method to grow new plant breeds from two existing plants. AgriCraft includes default mutations for various plants, which can be modified, and new mutations can also be added.

To create a mutation, add a new JSON file in the directory `data/<namespace>/agricraft/mutations/<mutation_id>.json`, where `namespace` is the namespace and `mutation_id` is the ID of this mutation, which can be whatever you want.

There can be multiple mutations for the same plant, as long as the ID of each mutation is different.

Every mutation must have the following structure:
- `chance`: chance of the mutation occurring on any given random tick. *[range 0.0-1.0]*
- `child`: ID of the plant resulting from the mutation.
- `parent1` and `parent2`: IDs of parents needed for the mutation.

The example below shows a mutation of sugar cane and melon that results in the creation of poppy:
```json
{
  "chance": 0.75,
  "child": "minecraft:poppy",
  "parent1": "minecraft:sugar_cane",
  "parent2": "minecraft:melon"
}
```
