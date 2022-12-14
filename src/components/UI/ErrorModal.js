import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onConfirm} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <Card propClass={classes.modal}>
//       <header className={classes.header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={classes.content}>
//         <p>{props.message}</p>
//       </div>
//       <footer className={classes.actions}>
//         <Button onClick={props.onConfirm}>Close</Button>
//       </footer>
//     </Card>
//   );
// };

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card propClass={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Close</Button>
          </footer>
        </Card>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
// function ErrorModal(props) {
//   return (
//     <>
//       {ReactDOM.createPortal(
//         <Backdrop onConfirm={props.onConfirm} />,
//         document.getElementById("backdrop-root")
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay
//           title={props.title}
//           message="Wo ri ni ma"
//           onConfirm={props.onConfirm}
//         />,
//         document.getElementById("overlay-root")
//       )}
//     </>
//   );
// }

export default ErrorModal;
