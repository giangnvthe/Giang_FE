import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const mockData = [
    {
        id: uuid(),
        title: 'To do',
        tasks: [
            {
                id: uuid(),
                title: 'create report 4',
                assignee: 'John'
            }
        ]
    },
    {
        id: uuid(),
        title: 'In progress',
        tasks: [
            {
                id: uuid(),
                title: 'Developing frontend',
                assignee: 'John'
            },
            {
                id: uuid(),
                title: 'Creating report 2',
                assignee: 'Bill'
            },
            {
                id: uuid(),
                title: 'Creating report 3',
                assignee: 'Zack'
            },
        ]
    },
    {
        id: uuid(),
        title: 'Done',
        tasks: [
        ]
    }
];

export default function Kanban() {
    const [data, setData] = useState(mockData);

    const onDragEnd = result => {
        console.log(result);

        if(!result.destination) return;
        const { source, destination } = result;

        //move to task to other column
        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTasks = [...sourceCol.tasks]
            const destinationTasks = [...destinationCol.tasks]

            const [removed] = sourceTasks.splice(source.index, 1)
            destinationTasks.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTasks
            data[destinationColIndex].tasks = destinationTasks
            
            setData(data)
        }    else { //move task in the one column
            const columnIndex = data.findIndex(e => e.id === destination.droppableId);

            const column = data[columnIndex]

            const tasks = [...column.tasks]
            console.log(tasks)

            const [removed] = tasks.splice(source.index, 1)
            tasks.splice(destination.index,0, removed)
            console.log(tasks)

            data[columnIndex].tasks = tasks

            setData(data)
        }

    }

    return (
        <Wrapper id='tasks'>
            <h1>Kanban UI</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <KanbanBoard >
                    {
                        data.map(section => (
                            <Droppable
                                key={section.id}
                                droppableId={section.id}
                            >
                                {(provided) => (
                                    <BoardSection
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <SectionTitle>{section.title}</SectionTitle>
                                       
                                        <SectionContent>
                                            {
                                                section.tasks.map((task, index) => (
                                                    <Draggable
                                                        key={task.id}
                                                        draggableId={task.id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    ...provided.draggableProps.style,
                                                                    opacity: snapshot.isDragging ? '0.5' : '1'
                                                                }}
                                                            >
                                                                <Card>
                                                                    <div>{task.title}</div>
                                                                    <div>{task.assignee}</div>
                                                                </Card>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </SectionContent>
                                    </BoardSection>
                                )}
                            </Droppable>
                        ))
                    }
                </KanbanBoard>
            </DragDropContext>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  color: #716F81;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
`;

const KanbanBoard = styled.div`
    display: flex;
    align-items: flex-start;
`

const BoardSection = styled.div`
    width: 400px;
    background-color: #F5B17B;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
`

const SectionTitle = styled.div`
    font-size: 1.2rem;
    margin: 10px 0 20px;
    color: #434242;
    font-weight: bold;

`

const SectionContent = styled.div`
    margin-top: 10px;
`

const Card = styled.div`
    padding: 30px;
    background-color: #F2EEE5;
    border-radius: 10px;
    margin-top: 10px;
`