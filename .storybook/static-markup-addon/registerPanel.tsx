
// static-markup-addon/register.tsx
/*
register.tsx (Panel - runs in manager/UI)
Purpose: Displays the Static Markup in a panel
Runs in: The Storybook manager (UI chrome)
What it does: Listens for Static Markup data and renders it
Imported in: manager.ts
*/

import React, { Component } from "react";
import { addons, types } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import { STORY_CHANGED } from "storybook/internal/core-events";
import { html as htmlBeautify } from 'js-beautify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ADDON_ID = "WITHMARKUP";
const PANEL_ID = `${ADDON_ID}/panel`;

interface StaticMarkupPanelProps {
  active: boolean;
}

interface StaticMarkupPanelState {
  staticMarkup: string;
}

// Define class for content handling in the addon panel
class MarkupPanelComponent extends Component<StaticMarkupPanelProps, StaticMarkupPanelState> {
  state: StaticMarkupPanelState = { staticMarkup: "" };

  private channel = addons.getChannel();
  private stopListeningOnStory?: () => void;

  onAddMarkup = async (rawMarkup: string | string[]): Promise<void> => {
    const markup = Array.isArray(rawMarkup) ? rawMarkup.join("\n") : rawMarkup;
    const prettyMarkup = htmlBeautify(markup, {
      indent_size: 2,
      indent_char: ' ',
      eol: '\n',
    });
    this.setState({ staticMarkup: prettyMarkup });
  };

  componentDidMount(): void {
    this.channel.on("WITHMARKUP/add_static_markup", this.onAddMarkup);
    this.stopListeningOnStory = this.channel.on(STORY_CHANGED, () => {
      this.onAddMarkup("");
    }) as unknown as () => void;

    // Request current markup when panel mounts
    this.channel.emit('WITHMARKUP/request_static_markup');
  }

  componentWillUnmount(): void {
    this.stopListeningOnStory?.();
    this.channel.removeListener("WITHMARKUP/add_static_markup", this.onAddMarkup);
  }

  render(): React.ReactNode {
    const { staticMarkup: markup } = this.state;
    const { active } = this.props;
    return (
      <AddonPanel active={active}>
        <SyntaxHighlighter
          language="html"
          style={atomDark}
          showLineNumbers
          wrapLines
        >
          {markup}
        </SyntaxHighlighter>
      </AddonPanel>
    );
  }
}

// Register addon panel in SB frontend
try {
  addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
      type: types.PANEL,
      title: "Static Markup",
      match: ({ viewMode }) => viewMode === 'story',
      render: ({ active }) => <MarkupPanelComponent active={!!active} />,
    });
  });
} catch (error) {
  console.error('Failed to register Static Markup panel:', error);
}
