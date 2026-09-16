import TaskDetail from "@/components/TaskDetail";

export default async function TaskDetailPage({ params }) {
  const { taskId } = await params;

    return <TaskDetail taskId={taskId} />;
}