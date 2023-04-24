import React, { useState } from "react";

const Reply = () => {
  const [id, setId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLY, setREPLY] = useState([
    { id: 0, user: `하이`, comment: `ㅋㅋ` },
  ]);

  const replyInput = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      REPLY.push({ id, user: `메롱${id}`, comment });
      setREPLY(REPLY);
      setId(id => ++id);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  return (
    <div>
      <ul>
        {REPLY.map(reply => {
          return (
            <li key={reply.id}>
              {reply.user}: {reply.comment}
            </li>
          );
        })}
      </ul>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={comment} onChange={e => replyInput(e)} />
        <button onClick={() => replyButton()}>게시</button>
      </form>
    </div>
  );
};

export default Reply;
