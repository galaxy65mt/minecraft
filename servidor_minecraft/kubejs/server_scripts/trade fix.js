MoreJSEvents.filterEnchantedBookTrade((event) => {
    // Remove specific enchantments from book trades
    event.remove("alexscaves_torpedoes:universal_magnetism");
    event.remove("create_sa:gravity_gun");
    event.remove("create_sa:above_the_clouds");
    event.remove("create_sa:hellfire");
    event.remove("create_sa:impact");
});