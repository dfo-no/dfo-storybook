import React from "react";
import addons from "@storybook/addons";
import styled from "@emotion/styled";

const CSSPanel = styled.div({
  margin: 10,
  width: "100%",
  overflow: "auto"
});

class CSSPanelComponent extends React.Component {
  state = {
    css: ""
  };

  onAddCSS = rawCss => {
    this.setState({ css: rawCss });
  };

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the css and render it.
    channel.on("WITHCSS/add_css", this.onAddCSS);

    // Clear the current css on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddCSS("");
    });
  }

  render() {
    const { css } = this.state;
    const { active } = this.props;
    return active ? <CSSPanel>{css}</CSSPanel> : null;
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }
    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener("WITHCSS/add_css", this.onAddCSS);
  }
}

// Register the addon with a unique name.
addons.register("WITHCSS", api => {
  // Also need to set a unique name to the panel.
  addons.addPanel("WITHCSS/panel", {
    title: "CSS",
    render: ({ active }) => (
      <CSSPanelComponent
        channel={addons.getChannel()}
        api={api}
        active={active}
      />
    )
  });
});
