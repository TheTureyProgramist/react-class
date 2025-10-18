import React from 'react';
class TaskList extends React.Component {
const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: red;
`;
const WarningText = styled.li`
  color: orange;
`;
const Text = styled.h2`
  color: blue;
  width: 100%;
`;
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Купити хліб' },
        { id: 2, text: 'Написати олімпіаду з математики' },
      ],
    };
  }
  removeTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== id),
    });
  }
  render() {
    const { tasks } = this.state; 
    return (
      <div className="task-list">
        <Text>Список задач</Text>
        <ul>
          {tasks.length === 0 ? (
            <WarningText>Немає задач</WarningText>
          ) : (
            tasks.map((t) => (
              <li key={t.id}>
                {t.text}{' '}
                <Button onClick={() => this.removeTask(t.id)}>Видалити</Button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}
export default TaskList;