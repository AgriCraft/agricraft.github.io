# Removing Default Data

You can remove existing data (such as plants, mutations, etc.) using the `filter` block in your datapack's `pack.mcmeta` file. The `filter` block supports regular expressions (regex), making the process more efficient.

> **Note:** Due to a [Minecraft bug](https://bugs.mojang.com/browse/MC-271761), there are certain limitations to this option.

## Removing All Plants and Mutations in a Specific Namespace

This example demonstrates how to remove all AgriCraft plants and mutations.

- `namespace` specifies that only data from the `agricraft` namespace should be removed.
- `path` is the path to the files that you want to remove:
  - `agricraft/` is the directory where all AgriCraft data is stored.
  - `((plants)|(mutations))` regex pattern specifies that both plants and mutations will be removed while keeping soils, fertilizers, and weeds intact.
  - `.*` regex pattern matches all files in the specified path.

> Please note that using multiple namespaces will [cause them to leak](https://bugs.mojang.com/browse/MC-271761). Until this issue is resolved, you should specify the same `namespace` for all the paths.

```json5
  "filter": {
    "block": [
      {
        "namespace": "agricraft",
        "path": "agricraft/((plants)|(mutations))/.*"
      }
    ]
  }
```

## Removing Mutations for Specific Plants

This example shows how to remove mutations for specific plants without using `namespace`. If not specified, the mutation for `petinia` will be removed from all namespaces. This shouldn't be an issue unless you have multiple mods with plants that have the same name. The second path targets all plants that end with `_tulip`. This can be useful for removing multiple plants with similar names.

```json5
  "filter": {
    "block": [
      {
        "path": "agricraft/mutations/petinia"
      },
      {
        "path": "agricraft/mutations/.*_tulip"
      }
    ]
  }
```

## Example `pack.mcmeta`

Once you add the `filter`, `pack.mcmeta` file should look like this:

```json5
{
  "pack": {
    "pack_format": 15,
    "description": "AgriCraft test datapack"
  },
  "filter": {
    "block": [
      {
        "path": "agricraft/((plants)|(mutations))/.*_tulip"
      },
      {
        "path": "agricraft/.*/petinia"
      },
      {
        "path": "agricraft/soils/podzol"
      }
    ]
  }
}
```
