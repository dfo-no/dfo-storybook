import { type ReactNode, useState } from 'react';
import classnames from 'classnames';
import Arrow from '../Arrow/Arrow';
import '../Expand/Expand.scss';

interface ExpandProps {
  title: string,
  children: ReactNode,
}

export default function Expand({
  title,
  children
}: ExpandProps) {

  const [ open, setOpen ] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className={classnames('dfo-expand', { 'dfo-expand--open': open })}>
      <button
        className="dfo-expand__button"
        onClick={toggleOpen}
        type="button"
      >
        <Arrow active={open} /> {title}
      </button>
      {open ? <div>{children}</div> : null}
    </div>
  );
}

// export default class Expand extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//   }

//   toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

//   render() {
//     const { open } = this.state;
//     const { title, children } = this.props;

//     return (
//       <div className={classnames('dfo-expand', { 'dfo-expand--open': open })}>
//         <button
//           className="dfo-expand__button"
//           onClick={this.toggleOpen}
//           type="button"
//         >
//           <Arrow active={open} /> {title}
//         </button>
//         {open ? <div>{children}</div> : null}
//       </div>
//     );
//   }
// }

// Expand.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.any.isRequired,
// };
