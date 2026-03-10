import React from "react";
import { TasksNamesMap } from "../../../model/tasks";
import { TasksListItem } from "./tasks-list-item";
import * as styles from './styles.module.scss';

export function TasksListColumn({ tasksType, items }) {
    const columnName = TasksNamesMap[tasksType];
    const hasItems = items.length;
    const emptyState = () => {
        return <div className="text-center">
            <h6>Ничего не добавлено</h6>
        </div>;
    }

    return (
        <div className={ `border border-secondary ${ styles.tasksListColumn }` }>
            <div className={ `pt-3 px-3 pb-2 mb-2 ${ styles.tasksListColumnHeader }` }>
                <h5 className="">{ columnName }</h5>
            </div>
            <div className={ `p-3 ${ styles.tasksListColumnContent }` }>
                {
                    hasItems ? items.map(item => (<TasksListItem key={ item.id } task={ item }/>)) : emptyState()
                }
            </div>
        </div>
    );
}
