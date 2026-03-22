interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

export default function TodoFilters({ filter, setFilter }: Props) {
  return (
    <div style={styles.container}>
      <button
        onClick={() => setFilter("all")}
        style={{ ...styles.btn, fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        style={{ ...styles.btn, fontWeight: filter === "active" ? "bold" : "normal" }}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        style={{ ...styles.btn, fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
    </div>
  );
}

const styles = {
  container: { display: "flex", gap: "10px", marginTop: "20px" },
  btn: { padding: "5px 10px", cursor: "pointer" },
};