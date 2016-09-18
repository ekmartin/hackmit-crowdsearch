import React, { Component } from 'react';

export default class Tasks extends Component {
  componentDidMount() {
    const { base, params } = this.props;
    base.bindToState(`tasks/${params.personId}`, {
      state: 'tasks',
      context: this,
      asArray: true
    });
  }

  createBox() {
    if (!this.state) return null; // TODO: Loader
    const { tasks } = this.state;
    return (
      <div className="container">
        <div className="text-box">
          <center>
        What you could do to help:
          </center>
          <table className="table">
            <thead>
              <tr>
                <th>
                Action
                </th>
                <th>
                Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.key}>
                  <td>
                    {task.description}
                  </td>
                  <td>
                    {task.isDone ? 'Done' : 'In Progress'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (this.createBox());
  }

}
