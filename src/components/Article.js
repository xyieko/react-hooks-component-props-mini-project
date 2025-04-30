import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    const isShort = minutes < 30;
    const icon = isShort ? "☕️" : "🍱";
    const unit = isShort ? 5 : 10;
    const count = Math.ceil(minutes / unit);
    return `${icon.repeat(count)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderReadTime()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
