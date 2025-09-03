import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setField, resetAll, compute } from './features/bmiSlice.js'
import NumberInput from './components/NumberInput.jsx'
import CategoryLegend from './components/CategoryLegend.jsx'
import './index.css'

export default function App() {
  const dispatch = useDispatch()
  const inputs = useSelector((s) => s.bmi.inputs)
  const results = useSelector((s) => s.bmi.results)
  const set = (key) => (val) => dispatch(setField({ key, value: val }))

  return (
    <div className="wrap">
      <header className="header">
        <h1>Kalkulator BMI</h1>
        <p className="subtitle">Kira Body Mass Index anda & lihat kategori WHO</p>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Input</h2>
          <div className="grid-fields">
            <NumberInput id="weight" label="Berat" suffix="kg" step="0.1"
              value={inputs.weight} onChange={set('weight')} />
            <NumberInput id="height" label="Tinggi" suffix="cm" step="0.1"
              value={inputs.height} onChange={set('height')} />
          </div>
          <div className="actions">
            <button className="btn primary" onClick={() => dispatch(compute())}>Kira</button>
            <button className="btn ghost" onClick={() => dispatch(resetAll())}>Set semula</button>
          </div>
        </section>

        <section className="card">
          <h2>Keputusan</h2>
          {results.bmi > 0 ? (
            <div className="results">
              <div className="result-row"><span>BMI</span><strong>{results.bmi.toFixed(1)}</strong></div>
              <div className="result-row"><span>Kategori</span><strong>{results.category}</strong></div>
              <p className="note">Rujuk jadual “Kategori WHO” di sebelah untuk julat setiap kategori.</p>
            </div>
          ) : (
            <p className="note">Sila masukkan berat & tinggi kemudian tekan “Kira”.</p>
          )}
        </section>

        <section>
          <CategoryLegend active={results.category} />
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Kalkulator BMI • React + Redux Toolkit • Vite
                  <br />Coded by Zainuddin [at] Code Master https://www.codemaster.my
        </small>
      </footer>
    </div>
  )
}