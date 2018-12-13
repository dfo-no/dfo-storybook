import React from "react";
import addons from "@storybook/addons";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as cssbeautify from "cssbeautify";
import { docco } from "react-syntax-highlighter/dist/styles/hljs";

class CSSPanelComponent extends React.Component {
  state = {
    css: ""
  };

  onAddCSS = rawCss => {
    const css = Array.isArray(rawCss) ? rawCss.join("\n") : rawCss;
    const prettyCss = cssbeautify(css, {
      indent: "  ",
      openbrace: "end-of-line",
      autosemicolon: true
    });
    this.setState({ css: prettyCss });
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
    return active ? (
      <SyntaxHighlighter language="css" style={docco}>
        {css}
      </SyntaxHighlighter>
    ) : null;
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
