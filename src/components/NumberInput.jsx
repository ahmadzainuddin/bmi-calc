import React from 'react'

export default function NumberInput({ label, value, onChange, min = 0, step = 'any', suffix, id }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="field-control">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="input"
        />
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
    </label>
  )
}