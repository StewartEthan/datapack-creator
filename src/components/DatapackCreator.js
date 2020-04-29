import React, { useState } from 'react'
import ShapelessCraftingCreator from './creators/ShapelessCrafting'

export default function DatapackCreator() {
  const [showRecipeCreator, setShowRecipeCreator] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setShowRecipeCreator(true)}>
        Create New Recipe
      </button>
      {showRecipeCreator && <ShapelessCraftingCreator />}
    </>
  )
}

// function getPackMeta(description) {
//   return {
//     pack: {
//       pack_format: 5,
//       description,
//     },
//   }
// }

// CORE: Crafting recipes
// CORE: Mob/treasure loot tables
// CORE: Figure out how to get all block/item data
// - is there an API?
// - is it easier to just spend the time to data entry it all into the project?
// - should I make some kind of API for it?
// FUTURE: Support multiple game versions
// FUTURE: Custom background with Minecraft block textures
// FUTURE: Look into anything else that can be automated that could be cool
// FEATURE: Download multiple either individually or all together in a ZIP
// - SUBFEATURE: Other compression formats for multiple all together
// FEATURE: Access to JSON
// - SUBFEATURE: Allow JSON to be copied
// - SUBFEATURE: Allow JSON to be edited in the browser
// STRETCH: Drag/drop for block/item picking in recipes and loot tables
