import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TasksListColumn } from "./tasks-list-column";
import * as styles from './styles.module.scss';
import { sortedStates } from "../../../stores/states/states-slice";


export function TasksList() {
    const states = useSelector(sortedStates);
    const tasks = useSelector(state => state.tasks.items);
    const [lists, setLists] = React.useState(makeLists(states, tasks));

    useEffect(() => {
        setLists(makeLists(states, tasks));
    }, [states, tasks]);

    return (
        <div className={ `${ styles.tasksList } flex-grow-1 py-4` }>
            <Container className={ `${ styles.tasksListContent } ${ styles.containerLg }` }>
                {
                    lists.map((list, i) => (
                            <div className="col" key={ list.type }>
                                <TasksListColumn tasksType={ list.type } items={ list.items }/>
                            </div>
                        )
                    )
                }
            </Container>
        </div>
    );
}

function makeLists(states, tasks) {
    return states.map((item, i) => {
        const tasksWithState = tasks.filter((task) => task.state === item.value);

        return {
            type: item.value,
            items: tasksWithState,
        };
    });
}
