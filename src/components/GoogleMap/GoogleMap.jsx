// src/components/GoogleMap.jsx

export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.21440541297!2d109.07310087375045!3d13.945835692774303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f3c3be64154bb%3A0x157d76754419bc61!2zQ2jhu6MgR8OyIEfEg25n!5e0!3m2!1svi!2s!4v1758030262805!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
