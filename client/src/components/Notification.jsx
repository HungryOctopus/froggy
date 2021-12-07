const Notification = (props) => {
  const { subject, body, creator } = props.notification;
  return (
    <div className="card notification mb-5 p-3">
      <div className="note-info fw-lighter fs-4">
        From: {creator} | To: All Volunteers
        {/* | Date: {date}{" "} */}
      </div>
      <div className="note-subject fs-4">{subject}</div>
      <div className="fs-4">{body}</div>
    </div>
  );
};

export default Notification;
