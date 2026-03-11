import { Card } from "react-bootstrap";
import React from "react";
import * as styles from './styles.module.scss';
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeTask, updateDescription, updateState } from "../../../stores/tasks/tasks-slice";
import { TaskModal } from "./task-modal";

export function TasksListItem({ task }) {
    const dispatch = useDispatch();
    const [displayTaskModal, setDisplayTaskModal] = React.useState(false);
    const [isTaskModalEditable, setIsTaskModalEditable] = React.useState(false);

    const onDeleteButtonClick = () => dispatch(removeTask(task.id));
    const closeModal = () => setDisplayTaskModal(false);
    const openModal = () => setDisplayTaskModal(true);
    const onTitleClick = () => {
        setIsTaskModalEditable(false);
        openModal();
    }
    const onEditButtonClick = () => {
        setIsTaskModalEditable(true);
        openModal();
    }
    const onTaskDialogAccept = (id, description, state) => {
        dispatch(updateDescription({ id, description }));
        dispatch(updateState({ id, state }));
        closeModal();
    }
    const onDragStart = e => e.dataTransfer.setData('taskId', task.id);

    return (
        <React.Fragment>
            <Card className="shadow-lg" draggable onDragStart={ onDragStart }>
                <Card.Header>
                    <Card.Title className="link-primary cursor-pointer"
                                onClick={ onTitleClick }>{ task.name }</Card.Title>
                </Card.Header>
                <Card.Body className="position-relative">
                    <Card.Text className="text-multy-ellipsis text-break">{ task.description }</Card.Text>
                    <div className={ styles.tasksListItemControls }>
                        <Pencil className="link-primary cursor-pointer" size={ 12 } onClick={ onEditButtonClick }/>
                        <Trash className="link-primary cursor-pointer" size={ 12 } onClick={ onDeleteButtonClick }/>
                    </div>

                    <div className={ `${ styles.tasksListItemDate }` }>
                        { task.createdAt }
                    </div>
                </Card.Body>
            </Card>
            <TaskModal task={ task }
                       showed={ displayTaskModal }
                       isEditable={ isTaskModalEditable }
                       onAccept={ onTaskDialogAccept }
                       onCancel={ closeModal }/>
        </React.Fragment>
    );
}
