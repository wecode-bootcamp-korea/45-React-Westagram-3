import React, { useState } from "react";

const Reply = () => {
  const [id, setId] = useState(1);
  const [comment, setComment] = useState(``);
  const [REPLY, setREPLY] = useState([
    { id: 0, user: `하이`, comment: `ㅋㅋ` },
  ]);

  const typeReply = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const replyButton = () => {
    if (comment.length) {
      REPLY.push({ id, user: `메롱${id}`, comment });
      setId(id => ++id);
      setREPLY(REPLY);
      setComment(``);
    } else {
      alert(`댓글을 입력하세요ㅎ`);
    }
  };

  return (
    <div>
      <form action="#">
        <input type="text" value={comment} onChange={e => typeReply(e)} />
        <button onClick={() => replyButton()}>게시</button>
      </form>
      <ul>
        {REPLY.map(reply => {
          return (
            <li key={reply.id}>
              {reply.user}: {reply.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reply;
