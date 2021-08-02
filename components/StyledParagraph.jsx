export default function StyledParagraph({id, title, children}) {
    return (
        <div id={id ?? ""} className="container">
        { title && <h1> {title} </h1> }
        <div style={{borderLeft: "10px solid var(--theme-bg)", padding: "10px"}}>
          {children}
        </div>
      </div>
    );
}