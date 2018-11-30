import React from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";
import AccordionPanel from "./AccordionPanel";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPanelId: null
    };
    this.onPanelClicked = this.onPanelClicked.bind(this);
  }

  onPanelClicked({ id }) {
    this.setState(({ openPanelId }, props) => {
      return id !== openPanelId ? { openPanelId: id } : { openPanelId: null };
    });
  }

  render() {
    const { panels } = this.props;
    return panels.length > 0 ? (
      <ul className="dfo-accordion">
        {panels.map(({ id, content, ...rest }) => (
          <AccordionPanel
            key={id}
            {...{ id, ...rest }}
            isOpen={id === this.state.openPanelId}
            onClick={this.onPanelClicked}
          >
            {content}
          </AccordionPanel>
        ))}
      </ul>
    ) : null;
  }
}

Accordion.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      content: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired
    })
  )
};

Accordion.defaultProps = {
  panels: []
};