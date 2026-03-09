import React from "react";
import { Badge } from "react-bootstrap";

export function TasksStatistic() {
    return (
        <div className="d-flex gap-2">
            <Badge bg="dark">Готово 10</Badge>
            <Badge bg="warning">Осталось 10</Badge>
        </div>
    );
}
