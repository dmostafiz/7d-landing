export default function NavMenu() {
  return (
    <div>
      <div id="nav-menu-popup" style={{ display: "none" }} className="hide">
        <div className="nav-menu-body">
          <i className="close-menu fas fa-times" />
          <ul className="nav-menu"></ul>
        </div>
      </div>
    </div>
  );
}
