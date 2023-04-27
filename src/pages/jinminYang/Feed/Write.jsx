import React from 'react';
import './Write.scss';

const Write = () => {
  return (
    <div className="write">
      <form action="#" method="post" onSubmit={e => e.preventDefault()}>
        <p>
          <label htmlFor="userId">user name: </label>
          <input type="text" />
        </p>
        <p>
          <textarea
            name="content"
            id="content"
            cols="60"
            rows="10"
            placeholder="Write a caption..."
          />
        </p>
        <p>
          <button>Share</button>
        </p>
      </form>
    </div>
  );
};

export default Write;
