import React from "react";
import { TasksNamesMap } from "../../model/tasks";

export function TasksListColumn({ tasksType, items }) {
    const columnName = TasksNamesMap[tasksType];

    return (
        <div>
            { columnName }
        </div>
    );
}