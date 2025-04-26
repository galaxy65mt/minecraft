// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal

ServerEvents.recipes(event => {
    event.remove({ id: 'alexscaves:dreadbow' })
    event.remove({ id: 'celestisynth:crimson_piece' })
    event.remove({ id: 'born_in_chaos_v1:nightmare_scythe' })
    event.remove({ id: 'create_sa:brass_drill_head' })
    event.remove({ id: 'witherstormmod:formidibomb' })
    event.remove({ id: 'alexsmobs:transmutation_table' })
    event.remove({ id: 'eeeabsmobs:ghost_warrior_helmet' })
    event.remove({ id: 'eeeabsmobs:ghost_warrior_chestplate' })
    event.remove({ id: 'eeeabsmobs:ghost_warrior_leggings' })
    event.remove({ id: 'eeeabsmobs:ghost_warrior_boots' })
    event.remove({ id: 'celestisynth:celestial_core_dupe' })
    event.remove({ id: 'upgrade_aquatic:tooth_door' })
    event.remove({ id: 'upgrade_aquatic:tooth_trapdoor' })
    event.remove({ id: 'upgrade_aquatic:tooth_lantern' })
    event.remove({ id: 'upgrade_aquatic:tooth_bricks' })
    event.remove({ id: 'upgrade_aquatic:tooth_block' })
});

ServerEvents.recipes(event => {
    event.shaped('alexscaves:dreadbow', [
      ' E ',
      'cCc',
      'eee'
    ], {
      c: 'alexscaves:vesper_wing',  
      C: 'ender_dragon_loot_:dragon_scale',
      E: 'alexscaves:pure_darkness',
      e: 'alexscaves:shadow_silk',       
    });
  });

ServerEvents.recipes(event => {
    event.shaped('born_in_chaos_v1:nightmare_scythe', [
      'CCE',
      '  c',
      ' c '
    ], {
      E: 'born_in_chaos_v1:dark_metal_block',
      c: 'born_in_chaos_v1:bone_handle',  
      C: 'born_in_chaos_v1:nightmare_claw',
    });
  });

ServerEvents.recipes(event => {
    event.shaped('celestisynth:crimson_piece', [
      'abc',
      'ABC',
      'zxy'
    ], {
      a: 'deeperdarker:reinforced_echo_shard',
      b: 'alexscaves:pure_darkness',
      c: 'alexscaves:tectonic_shard',
      A: 'cataclysm:cursium_ingot',
      B: 'minecraft:nether_star',
      C: 'cataclysm:ignitium_ingot',
      z: 'celestisynth:celestial_netherite_ingot',
      x: 'eeeabsmobs:ancient_drive_crystal',
      y: 'cataclysm:witherite_ingot',
    });
  });

ServerEvents.recipes(event => {
    event.shaped('create_sa:brass_drill_head', [
      'cCc',
      'CEC',
      'cCc'
    ], {
      E: 'minecraft:netherite_block',
      C: 'create:andesite_alloy',
      c: 'create:brass_ingot',
    });
});

ServerEvents.recipes(event => {
    event.shaped('witherstormmod:formidibomb', [
      'cCc',
      'CEC',
      'cCc'
    ], {
      E: 'witherstormmod:super_tnt',
      C: 'minecraft:blaze_powder',
      c: 'alexscaves:nuclear_bomb',
    });
});

ServerEvents.recipes(event => {
    event.shaped('alexsmobs:transmutation_table', [
      'cCc',
      'aAa',
      'bbb'
    ], {
      c: 'voidscape:astral_crystal',
      C: 'minecraft:nether_star',
      a: 'alexsmobs:farseer_arm',
      A: 'voidscape:machine_core',
      b: 'minecraft:obsidian',         
    });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_door', [
    'ee ',
    'ee ',
    'ee '
  ], {
    e: 'alexsmobs:cachalot_whale_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_door', [
    'ee ',
    'ee ',
    'ee '
  ], {
    e: 'alexsmobs:shark_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_trapdoor', [
    'ee ',
    'ee ',
    '   '
  ], {
    e: 'alexsmobs:cachalot_whale_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_trapdoor', [
    'ee ',
    'ee ',
    '   '
  ], {
    e: 'alexsmobs:shark_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_lantern', [
    ' e ',
    ' a ',
    ' e '
  ], {
    e: 'alexsmobs:cachalot_whale_tooth',
    a: 'minecraft:prismarine_crystals'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_lantern', [
    ' e ',
    ' a ',
    ' e '
  ], {
    e: 'alexsmobs:shark_tooth',
    a: 'minecraft:prismarine_crystals'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_bricks', [
    'aaa',
    'aea',
    'aaa'
  ], {
    e: 'alexsmobs:cachalot_whale_tooth',
    a: 'minecraft:stone_bricks'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_bricks', [
    'aaa',
    'aea',
    'aaa'
  ], {
    e: 'alexsmobs:shark_tooth',
    a: 'minecraft:stone_bricks'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_block', [
    'eee',
    'eee',
    'eee'
  ], {
    e: 'alexsmobs:cachalot_whale_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('upgrade_aquatic:tooth_block', [
    'eee',
    'eee',
    'eee'
  ], {
    e: 'alexsmobs:shark_tooth'
  });
});

ServerEvents.recipes(event => {
  event.shaped('happyghastmod:ghastling_incubator', [
    'EEE',
    'EeE',
    'EEE'
  ], {
    e: 'minecraft:bone_block',
    E: 'minecraft:ghast_tear'
  });
});


ServerEvents.recipes(event => {
    event.smithing(
      'eeeabsmobs:ghost_warrior_helmet',
      'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
      'voidscape:astral_helmet',
      'eeeabsmobs:ghost_steel_ingot'
    );
});

ServerEvents.recipes(event => {
    event.smithing(
      'eeeabsmobs:ghost_warrior_chestplate',
      'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
      'voidscape:astral_chest',
      'eeeabsmobs:ghost_steel_ingot'
    );
});

ServerEvents.recipes(event => {
      event.smithing(
        'eeeabsmobs:ghost_warrior_leggings',
        'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
        'voidscape:astral_legs',
        'eeeabsmobs:ghost_steel_ingot'
      );
});

ServerEvents.recipes(event => {
    event.smithing(
      'eeeabsmobs:ghost_warrior_boots',
      'eeeabsmobs:ghost_warrior_upgrade_smithing_template',
      'voidscape:astral_boots',
      'eeeabsmobs:ghost_steel_ingot'
    );
});

