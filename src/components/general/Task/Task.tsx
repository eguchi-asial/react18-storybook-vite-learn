import TaskModule from "./Task.module.css";

interface TaskProps {
  task: {
    id?: string
    title?: string
    state?: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED',
    updatedAt?: Date
  }
  onArchiveTask?: Function
  onPinTask?: Function
}

export const Task = ({ task: { id, title, state, updatedAt }, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className={TaskModule.task}>
      タスク
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}