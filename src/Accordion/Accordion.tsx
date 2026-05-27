import React from 'react';
import AccordionPanel from './AccordionPanel';
import './Accordion.scss';

interface PanelProps {
  heading: string;
  id: string;
  content: React.ReactNode;
}

interface AccordionProps {
  panels: PanelProps[];
  onPanelClicked?: (args: { isOpen: boolean; panel: PanelProps | undefined }) => void;
}

interface AccordionState {
  openPanelId: string | null;
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      openPanelId: null,
    };
    this.onPanelClicked = this.onPanelClicked.bind(this);
  }

  onPanelClicked({ id }: { id: string }) {
    this.setState(
      ({ openPanelId }) => (id !== openPanelId ? { openPanelId: id } : { openPanelId: null }),
      () => {
        const { panels, onPanelClicked = () => null } = this.props;
        const clickedPanel = panels.find((panel) => panel.id === id);
        onPanelClicked({
          isOpen: id === this.state.openPanelId,
          panel: clickedPanel,
        });
      },
    );
  }  

  static defaultProps = {
    panels: [],
    onPanelClicked: () => null,
  };

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
