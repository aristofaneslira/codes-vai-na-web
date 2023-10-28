export default function Button({ children, event}) {
        return (
          <button onClick={event}>{children}</button>
        );
}

