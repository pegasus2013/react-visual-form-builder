/**
  * <HeaderBar />
  */

import React from 'react';

export default class HeaderBar extends React.Component {

  render() {

    const HeaderBarTitle = (<span className="label label-default">{this.props.data.text}</span>);

    const HeaderBarMenu = (
      <div className="toolbar-header-buttons">
        {HeaderBarTitle}
        {
          this.props.data.element !== "LineBreak" &&
          <div className="btn is-isolated btn-school" onClick={this.props.editModeOn.bind(this.props.parent, this.props.data)}><i className="is-isolated fa fa-pencil-square-o"></i></div>
        }
        <div className="btn is-isolated btn-school" onClick={this.props.onDestroy.bind(this, this.props.data)}><i className="is-isolated fa fa-trash-o"></i></div>
      </div>
    );

    return (
      <div className="toolbar-header">
        {HeaderBarMenu}
      </div>
    );
  }
}