export function HolyGrailLayout() {
  return (
    <div
      className="grid gap-[1em]"
      style={{ gridTemplateColumns: "150px auto 150px" }}
    >
      <header style={{ gridColumn: "1 / 4" }}>Header</header>

      <aside className="sidebar-left">Left</aside>
      <article>Article</article>
      <aside className="sidebar-right">Right</aside>

      <footer style={{ gridColumn: "1 / 4" }}>Footer</footer>
    </div>
  );
}
