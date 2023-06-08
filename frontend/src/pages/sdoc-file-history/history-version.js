import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { gettext, filePath } from '../../utils/constants';
import URLDecorator from '../../utils/url-decorator';
import Rename from '../../components/rename';

import '../../css/history-record-item.css';

class HistoryVersion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowOperationIcon: false,
      isMenuShow: false,
      isRenameShow: false,
    };
  }

  onMouseEnter = () => {
    const { currentVersion, historyVersion } = this.props;
    if (currentVersion.commitId === historyVersion.commitId) return;
    this.setState({ isShowOperationIcon: true });
  }

  onMouseLeave = () => {
    const { currentVersion, historyVersion } = this.props;
    if (currentVersion.commitId === historyVersion.commitId) return;
    this.setState({ isShowOperationIcon: false });
  }

  onToggleClick = (e) => {
    this.setState({ isMenuShow: !this.state.isMenuShow });
  }

  onClick = () => {
    this.setState({ isShowOperationIcon: false });
    const { currentVersion, historyVersion } = this.props;
    if (currentVersion.commitId === historyVersion.commitId) return;
    this.props.onSelectHistoryVersion(historyVersion);
  }

  onRestore = () => {
    const { historyVersion } = this.props;
    this.props.onRestore(historyVersion);
  }

  onItemDownload = () => {
    // nothing todo
  }

  toggleRename = () => {
    this.setState({isRenameShow: !this.state.isRenameShow});
  }

  onRenameConfirm = (newName) => {
    const { revFileId } = this.props.historyVersion;
    this.props.renameHistoryVersion(revFileId, newName);
    this.toggleRename();
  }

  onRenameCancel = () => {
    this.toggleRename();
  }

  render() {
    const { currentVersion, historyVersion } = this.props;
    if (!currentVersion || !historyVersion) return null;
    const { ctime, commitId, creatorName, revFileId, name} = historyVersion;
    const isHighlightItem = commitId === currentVersion.commitId;
    const url = URLDecorator.getUrl({ type: 'download_historic_file', filePath: filePath, objID: revFileId });
    return (
      <li
        className={`history-list-item ${isHighlightItem ? 'item-active' : ''}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <div className="history-info">
          {this.state.isRenameShow ?
            <Rename name={name} onRenameConfirm={this.onRenameConfirm} onRenameCancel={this.onRenameCancel}/>
            :<div className="name">{name}</div>
          }
          <div className="time">{ctime}</div>
          <div className="owner">
            <span className="squire-icon"></span>
            <span>{creatorName}</span>
          </div>
        </div>
        <div className="history-operation">
          <Dropdown isOpen={this.state.isMenuShow} toggle={this.onToggleClick}>
            <DropdownToggle
              tag='a'
              className={`fas fa-ellipsis-v ${(this.state.isShowOperationIcon || isHighlightItem) ? '' : 'invisible'}`}
              data-toggle="dropdown"
              aria-expanded={this.state.isMenuShow}
              alt={gettext('More Operations')}
            />
            <DropdownMenu>
              {(this.props.index !== 0) && <DropdownItem onClick={this.onItemRestore}>{gettext('Restore')}</DropdownItem>}
              <DropdownItem tag='a' href={url} onClick={this.onItemDownLoad}>{gettext('Download')}</DropdownItem>
              <DropdownItem onClick={this.toggleRename}>{gettext('Rename')}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </li>
    );
  }
}

HistoryVersion.propTypes = {
  index: PropTypes.number,
  currentVersion: PropTypes.object.isRequired,
  historyVersion: PropTypes.object,
  onSelectHistoryVersion: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  renameHistoryVersion: PropTypes.func.isRequired,
};

export default HistoryVersion;
