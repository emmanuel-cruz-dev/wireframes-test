function InventoryLegend() {
  const STATUS_ITEMS = [
    { bg: "bg-amount-critical", label: "Crítico", range: "0 - 5" },
    { bg: "bg-amount-low", label: "Bajo", range: "6 - 15" },
    { bg: "bg-amount-medium", label: "Medio", range: "16 - 20" },
    { bg: "bg-amount-supplied", label: "Abastecido", range: "+ 20" },
  ];

  return (
    <footer className="text-dark-blue mt-4 flex flex-wrap gap-4 text-sm">
      {STATUS_ITEMS.map(({ bg, label, range }) => (
        <article key={label} className="flex items-center gap-2">
          <div className={`w-5 h-5 ${bg} rounded-full`}></div>
          <aside className="leading-none">
            <p className="font-semibold">{label}</p>
            <p>{range}</p>
          </aside>
        </article>
      ))}
    </footer>
  );
}

export default InventoryLegend;
