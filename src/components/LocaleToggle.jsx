export default function LocaleToggle({ locale, onToggle, label }) {
  return (
    <button className="iconBtn" type="button" onClick={onToggle} aria-label={label}>
      <span style={{ fontSize: 12, fontWeight: 800 }}>{locale.toUpperCase()}</span>
    </button>
  )
}
