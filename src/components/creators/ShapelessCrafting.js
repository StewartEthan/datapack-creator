import React from 'react'
import IngredientPicker from './IngredientPicker'

export default function ShapelessCraftingCreator({ handleCreate }) {
  return (
    <div>
      <IngredientPicker onSelect={console.log} label="Recipe Name" />
    </div>
  )
}
