import { content } from "../../content/content";

export const Contact = () => {
  return (
    <div>
      <p>{content.name}</p>
      <p>
        Contact me via email at:{" "}
        <a href={`mailto:${content.email}`}>{content.email}</a>
      </p>
      <p>
        Call or text me at:{" "}
        <a href={`tel:1-${content.phone}`}>1-{content.phone}</a>
      </p>
      <p>Facebook Page (Coming Soon)</p>
    </div>
  );
};
