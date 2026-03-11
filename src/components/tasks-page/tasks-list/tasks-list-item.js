import { Card } from "react-bootstrap";
import React from "react";
import * as styles from './styles.module.scss';

export function TasksListItem({ task }) {
    return (
        <Card className="shadow-lg">
            <Card.Header>
                <Card.Title>{ task.name }</Card.Title>
            </Card.Header>
            <Card.Body className="position-relative">
                <Card.Text className="text-break">{ task.description }</Card.Text>
                <div className={ `${ styles.tasksListItemDate }` }>
                    { task.createdAt }
                </div>
            </Card.Body>
        </Card>
    );
}
