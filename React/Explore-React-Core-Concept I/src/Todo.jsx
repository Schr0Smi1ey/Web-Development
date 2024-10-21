function Todo({ task, isDone }) {
  return (
    <div className={isDone ? "Done" : "Pending"}>
      <h1>Task : {task}</h1>
      <h2>Task Status : {isDone ? "Done" : "Pending"}</h2> {/* Conditional rendering */}
    </div>
  );
}

export default Todo;
