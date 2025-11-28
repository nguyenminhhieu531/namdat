export const FacebookPage = () => {
  return (
    <div>
      <iframe
        title="facebook-page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fviet.dao.10690&tabs=timeline"
        height="200"
        width={"100%"}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
