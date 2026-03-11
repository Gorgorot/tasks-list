import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ArrowRight, GearFill } from "react-bootstrap-icons";
import { sortedStates } from "../../stores/states/states-slice";

export function TasksStatistic() {
    const states = useSelector(sortedStates);
    const tasks = useSelector(state => state.tasks.items);
    const [statistics, setStatistics] = React.useState(makeStatistics(states, tasks));

    useEffect(() => {
        setStatistics(makeStatistics(states, tasks));
    }, [states, tasks]);

    return (
        <div className="d-flex align-items-center gap-2">
            <GearFill className="cursor-pointer"/>
            {
                statistics.map((item, index) => (
                        <React.Fragment key={ index }>
                            <span className="badge" style={ { backgroundColor: item.color } }>
                                { item.name } { item.count }
                            </span>
                            { index !== states.length - 1 && <ArrowRight/> }
                        </React.Fragment>
                    )
                )
            }
        </div>
    );
}

function makeStatistics(states, tasks) {
    return states.map((item, i) => {
        const tasksWithState = tasks.filter((task) => task.state === item.value);

        return {
            ...item,
            count: tasksWithState.length,
        };
    });
}
