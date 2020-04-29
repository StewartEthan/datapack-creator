import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Autocomplete from 'react-autocomplete'
import ingredients from '../util/ingredients'

export default function IngredientPicker({ allowFreeEntry = false, label, onSelect }) {
  const [inputValue, setInputValue] = useState(``)
  return (
    <div>
      <label>
        <span>{label}</span>
        <Autocomplete
          getItemValue={item => item.name}
          items={ingredients}
          renderItem={(item, isHighlighted) => (
            <div style={{ backgroundColor: isHighlighted ? `#ededed` : `transparent` }}>{item.name}</div>
          )}
          shouldItemRender={(item, value) => [item.label, item.id].some(str => new RegExp(value, `i`).test(str))}
          // TODO: Randomize example from ingredients
          inputProps={{ placeholder: `e.g. blaze rod` }}
          onChange={evt => setInputValue(evt.target.value)}
          onSelect={(value, item) => {
            setInputValue(value)
            onSelect(item)
          }}
          value={inputValue}
        />
      </label>
    </div>
  )
}

IngredientPicker.propTypes = {
  allowFreeEntry: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}
