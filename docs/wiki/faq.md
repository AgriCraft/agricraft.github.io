
# Frequently Asked Questions

## How do I prevent a plant from spawning? How do I disable it?

To properly remove plants or their mutations, use the `filter` option in `pack.mcmeta`. You can find more information [here](../customization/removing-data.md).

## How do I disable weeds?

To disable weeds altogether, set `disable_weeds` in the AgriCraft config to `true`. 

To remove a specific weed type, follow the same method as for removing [plants](../customization/removing-data.md).

## Why won't some plant seeds stack with others?

Every seed contains multiple genes. If these genes aren't identical, the seeds won't stack.  
The tooltip should show some of them. However, some genes are hidden by default or through the config. 

You can see the entire seed genotype by planting it and using the Magnifying Glass.

Suspiciously Savvy Seed Sorting Sack can also help by holding multiple seeds with different genes in your inventory.

## How do I use fertilizers from other mods?

Create the corresponding [fertilizer json](../customization/fertilizer.md).

If a mod is [supported](./index.md) by AgriCraft, the fertilizer should work out of the box. If it doesn't, tell us on GitHub or Discord so we can add it.

## How can I use the Seed Analyzer?

Shift Right Click with a seed or a journal in your hand to insert it into the analyzer. Shift Right Click again to remove items from the analyzer.

When the seed is present in the analyzer, analyzing a seed will create a corresponding page in the journal.

## Why can't I put the seed into the Seed Analyzer?

If you follow the instructions above and it still doesn't work, the seed might not be supported by AgriCraft. Check whether an AgriCraft version of the seed exists in JEI/EMI or in the Creative Inventory.

If it doesn't, consider adding the plant yourself by following the [seed customization tutorial](../customization/plant.mdx), or ask us on GitHub or Discord to add it.

[//]: # (## How can I use the Seed Bag?)
[//]: # ()
[//]: # (Hold the bag in your off-hand, then right click with a seed in your main hand to put the seed in the bag,)
[//]: # (or with an empty hand to retrieve one seed. You can shake the bag &#40;shift + right click&#41; to change the order of the seeds.)
[//]: # (You can plant seeds directly from the bag with a right click from the main hand.)

## How can I give myself a seed with specific gene values?

There are two ways to give yourself a seed with specific values:
1. Use the AgriCraft give command:
  - `/agricraft_seed <plant_id>`: gives the seed for the specified plant with default stats (1 for every stat).
  - `/agricraft_seed <plant_id> all <value>`: gives the seed for the specified plant with each stat set to the specified value (must be between 1 and 10).
  - `/agricraft_seed <plant_id> distinct <format>`: gives the seed for the specified plant with each stat set to its own value. The format is the values with a hyphen between, ordered by the stats' ID in alphabetical order.
    Example: To have a plant with the following stats: fertility=1, gain=2, growth=3, mutativity=4, resistance=5, strength=6, use the command: `/agricraft_seed <plant_id> distinct 1-2-3-4-5-6`.
 2. Use the Minecraft give command and set the NBT of the AgriCraft seed according to your needs:
  - `/give <player> agricraft:seed<nbt>` 
	Example: To give yourself Wheat Seeds with default stats, use the following command:
    `/give @p agricraft:seed{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:1,rec:1},species:{dom:"minecraft:wheat",rec:"minecraft:wheat"},strength:{dom:1,rec:1}}}`
