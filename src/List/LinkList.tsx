import classNames from 'classnames';
import { LinkListSymbol } from './LinkListSymbol';
import './LinkList.scss';
import type { ReactNode } from 'react';


interface BaseLinkProps {
  text: string;
}

interface InternalLinkProps extends BaseLinkProps {
  link: string;
  target?: string;
}

interface ExternalLinkProps extends BaseLinkProps {
  externalLink: string;
  target?: string;
}

interface DownloadLinkProps extends BaseLinkProps {
  downloadLink: string;
}

type LinkProps = InternalLinkProps | ExternalLinkProps | DownloadLinkProps;

interface LinkListProps {
  title?: ReactNode,
  invert?: boolean,
  links?: LinkProps[],
}

// Type guards - type predicates
function isInternalLinkProps(link: LinkProps): link is InternalLinkProps {
  return (link as InternalLinkProps).link !== undefined;
}

function isExternalLinkProps(link: LinkProps): link is ExternalLinkProps {
  return (link as ExternalLinkProps).externalLink !== undefined;
}

function isDownloadLinkProps(link: LinkProps): link is DownloadLinkProps {
  return (link as DownloadLinkProps).downloadLink !== undefined;
}

export function LinkList({ 
  title = '', 
  invert = false,
  links = []
}: LinkListProps) {
  // string titles are rendered as h2 by default
  const HeadingComponent = typeof title === 'string' ? (
    <h2 className="nav__heading">{title}</h2>
  ) : (
    <div className="nav__heading">{title}</div>
  );
  return (
    <div
      className={classNames('nav', {
        'nav--light': invert,
      })}
    >
      {title && HeadingComponent}
      <ul className="nav__links">

        {links.map((linkItem) => {
          let thisText: string;
          let thisLink: string;
          let thisTarget: string | undefined;

          // Type identification and values setting
          if (isInternalLinkProps(linkItem)) {
            thisText = linkItem.text;
            thisLink = linkItem.link;
            thisTarget = linkItem.target;
          } else if (isExternalLinkProps(linkItem)) {
            thisText = linkItem.text;
            thisLink = linkItem.externalLink;
            thisTarget = linkItem.target;
          } else if (isDownloadLinkProps(linkItem)) {
            thisText = linkItem.text;
            thisLink = linkItem.downloadLink;
            // downloadLink doesn't have target
          }
          else {
            // Handle unexpected case
            return null;
          }

          return (
            <li key={thisLink} className="nav__item">
              <a className="nav__link" href={isExternalLinkProps(linkItem) ? thisLink : `/${thisLink}`} target={thisTarget}>
                <div className="nav__link__content">{thisText}</div>
                <div className="nav__link__symbol">
                  <LinkListSymbol
                    light={invert}
                    external={isExternalLinkProps(linkItem)}
                    download={isDownloadLinkProps(linkItem)}
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
