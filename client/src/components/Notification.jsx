const Notification = (props) => {
  const { subject, body, creator, date, recipient } = props.notification;
  return (
    <div className="card notification">
      <div>
        From: {creator} | To: {recipient} | Date: {date}{" "}
      </div>
      <div className="note-subject">Subject: {subject}</div>
      <div>{body}</div>
    </div>
  );
};

export default Notification;
