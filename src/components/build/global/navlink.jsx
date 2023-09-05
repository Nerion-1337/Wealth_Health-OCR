import { NavLink } from "react-router-dom";
import { Typelinks } from "#data/links";
//
export default function Navlinks({
  href,
  children,
  active,
  type = "intern",
  special,
  classLink,
  useRef,
  datatext,
  fonction = () => {
    console.log();
  },
}) {
  //
  //
  let urlStyles = "";
  //
  //
  switch (special) {
    case "tel":
      urlStyles = "tel:+33" + href?.slice(-9);
      break;
    case "mail":
      urlStyles = `mailto:${href}`;
      break;
  }
  //
  //
  const handleClick = () => {
    if (fonction) fonction();
  };
  //
  //
  return (
    <>
      {type === Typelinks.INTERN && (
        <NavLink
          to={href}
          className={({ isActive, isPending }) =>
            `${classLink} ${isPending ? "pending" : isActive ? active : ""}`
          }
          onClick={handleClick}
        >
          {children}
        </NavLink>
      )}

      {type === Typelinks.EXTERN && (
<>
        { special ? ( 
          <a href={urlStyles} className={classLink} target="_blank" onClick={handleClick}>
        {children}
      </a>
      ) : (  
        <a href={href} className={classLink} target="_blank" onClick={handleClick}>
          {children}
        </a> 
        )}
        </>
      )}
    </>
  );
}