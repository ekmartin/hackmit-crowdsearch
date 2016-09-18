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
                    {task.isDone
                      ? 'Done'
                      : 'In Progress'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
