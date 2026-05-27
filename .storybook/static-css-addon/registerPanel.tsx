// static-css-addon/register.tsx
/*
register.tsx (Panel - runs in manager/UI)
Purpose: Displays the CSS in a panel
Runs in: The Storybook manager (UI chrome)
What it does: Listens for CSS data and renders it
Imported in: manager.ts
*/

import React, { Component } from "react";
import { addons, types } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import { STORY_CHANGED } from "storybook/internal/core-events";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { css as cssJsBeautify } from 'js-beautify';


const ADDON_ID = "WITHCSS";
const PANEL_ID = `${ADDON_ID}/panel`;

interface CSSPanelProps {
  active: boolean;
}

interface CSSPanelState {
  css: string;
}

class CSSPanelComponent extends Component<CSSPanelProps, CSSPanelState> {
  state: CSSPanelState = { css: "" };

  private channel = addons.getChannel();
  private stopListeningOnStory?: () => void;

  onAddCSS = (rawCss: string | string[]): void => {
    
    const css = Array.isArray(rawCss) ? rawCss.join("\n") : rawCss;
    const prettyCss = cssJsBeautify(css, {
      indent_size: 2,
      indent_char: ' ',
      eol: '\n',
      newline_between_rules: true,
    });
    this.setState({ css: prettyCss });
  }

  componentDidMount(): void {
    this.channel.on("WITHCSS/add_css", this.onAddCSS);
    this.stopListeningOnStory = this.channel.on(STORY_CHANGED, () => {
      this.onAddCSS("");
    }) as unknown as () => void;
  }

  componentWillUnmount(): void {
    this.stopListeningOnStory?.();
    this.channel.removeListener("WITHCSS/add_css", this.onAddCSS);
  }

  render(): React.ReactNode {
    const { css } = this.state;
    const { active } = this.props;
    return (
      <AddonPanel active={active}>
          <SyntaxHighlighter language="css" style={atomDark}>
            {css}
          </SyntaxHighlighter>
      </AddonPanel>
    );
  }
}

try {
  addons.register(ADDON_ID, () => {
    addons.add(PANEL_ID, {
      type: types.PANEL,
      title: "CSS",
      match: ({ viewMode }) => viewMode === 'story',
      render: ({ active }) => <CSSPanelComponent active={!!active} />,
    });
  });
} catch (error) {
  console.error('Failed to register CSS panel:', error);
}
