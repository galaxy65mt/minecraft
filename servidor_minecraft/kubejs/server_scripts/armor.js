// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
  // Add custom recipes
  // Iron and Gold Plates (using Create mod sheets)
  const ironPlate = 'create:iron_sheet';
  const goldPlate = 'create:golden_sheet';
  const ironIngot = 'minecraft:iron_ingot';
  const goldIngot = 'minecraft:gold_ingot';
  const nugget = 'minecraft:iron_nugget';
  // Armor Recipes
  const armorShapes = {
      helmet: ['PpP', 'p p'],
      chestplate: ['p p', 'PPP', 'pPp'],
      leggings: ['PpP', 'p p', 'P P'],
      boots: ['p p', 'P P']
  };

  for (const [armor, pattern] of Object.entries(armorShapes)) {
      event.shaped(`minecraft:iron_${armor}`, pattern, { P: ironIngot, p: ironPlate });
      event.shaped(`minecraft:golden_${armor}`, pattern, { P: goldIngot, p: goldPlate });
      event.shaped(`minecraft:chainmail_${armor}`, pattern, { P: ironIngot, p: nugget });
  }

  // Horse Armor Recipes
  event.shaped('minecraft:iron_horse_armor', ['p p', 'PpP', 'p p'], { P: ironIngot, p: ironPlate });
  event.shaped('minecraft:golden_horse_armor', ['p p', 'PpP', 'p p'], { P: goldIngot, p: goldPlate });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'ender_dragon_loot_:dragon_helm_upgrade' });
  event.remove({ id: 'ender_dragon_loot_:dragon_chest_upgrade' });
  event.remove({ id: 'ender_dragon_loot_:dragon_leggins_upgrade' });
  event.remove({ id: 'ender_dragon_loot_:dragon_boots_upgrade' });
  event.remove({ id: 'cataclysm:smithing/ignitium_helmet' });
  event.remove({ id: 'cataclysm:smithing/ignitium_chestplate' });
  event.remove({ id: 'cataclysm:smithing/ignitium_leggings' });
  event.remove({ id: 'cataclysm:smithing/ignitium_boots' });
  event.remove({ id: 'cataclysm:smithing/cursium_helmet' });
  event.remove({ id: 'cataclysm:smithing/cursium_chestplate' });
  event.remove({ id: 'cataclysm:smithing/cursium_leggings' });
  event.remove({ id: 'cataclysm:smithing/cursium_boots' });
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot_:dragon_armor_helmet',
      'ender_dragon_loot_:dragon_upgrade_template',
      'majruszsdifficulty:enderium_helmet',
      'ender_dragon_loot_:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot_:dragon_armor_chestplate',
      'ender_dragon_loot_:dragon_upgrade_template',
      'majruszsdifficulty:enderium_chestplate',
      'ender_dragon_loot_:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot_:dragon_armor_leggings',
      'ender_dragon_loot_:dragon_upgrade_template',
      'majruszsdifficulty:enderium_leggings',
      'ender_dragon_loot_:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'ender_dragon_loot_:dragon_armor_boots',
      'ender_dragon_loot_:dragon_upgrade_template',
      'majruszsdifficulty:enderium_boots',
      'ender_dragon_loot_:dragon_scale'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_helmet',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_helmet',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_chestplate',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_chestplate',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_leggings',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_leggings',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:cursium_boots',
      'cataclysm:cursium_upgrade_smithing_template',
      'deeperdarker:warden_boots',
      'cataclysm:cursium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_helmet',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_helmet',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_chestplate',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_chestplate',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_leggings',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_leggings',
      'cataclysm:ignitium_ingot'
  );
});

ServerEvents.recipes(event => {
  event.smithing(
      'cataclysm:ignitium_boots',
      'cataclysm:ignitium_upgrade_smithing_template',
      'born_in_chaos_v1:dark_metal_armor_boots',
      'cataclysm:ignitium_ingot'
  );
});