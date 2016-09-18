import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {
  componentDidMount() {
    const { base, params } = this.props;
    base.bindToState(`tasks/${params.personId}`, {
      state: 'tasks',
      context: this,
      asArray: true
    });
  }

  toggleTask(task) {
    const { base, params } = this.props;
    base.update(`tasks/${params.personId}/${task.key}`, {
      data: {
        ...task,
        isDone: !task.isDone
      }
    });
  }

  render() {
    if (!this.state) return null; // TODO: Loader
    const { tasks } = this.state;
    return (
      <section className="small-section">
        <h3 className="title is-3">What can you do to help?</h3>
        <div className="text-box">
          <p className="content is-medium">
            Thank you for helping us in our search.
            We've compiled a list of tasks you can help with,
            and added up what's been done so far.
          </p>

          <ul className="todo-list">
            {tasks.map(task => <Task
              key={task.key}
              task={task}
              toggle={() => this.toggleTask(task)}
            />)}
          </ul>
        </div>
      </section>
    );
  }
}
