interface LoadingButtonProps {
  classNames?: string;
}

function LoadingButton(props: LoadingButtonProps) {
  const classNames = props.classNames ? props.classNames : 'btn-primary';
  return (
    <button className={`btn ${classNames}`} type="button" disabled>
      <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  );
}

export default LoadingButton;