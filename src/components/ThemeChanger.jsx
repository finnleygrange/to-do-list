import "./themeChanger.scss";

function ThemeChanger({ toggleTheme, isDarkTheme }) {
  function HandleToggleTheme() {
    toggleTheme();
  }

  return (
    <>
      <div className="theme-changer mt-2 d-flex justify-content-end">
        <button
          type="button"
          className={`btn border ${isDarkTheme ? "dark-theme" : "light-theme"}`}
          onClick={HandleToggleTheme}
        >
          {isDarkTheme ? (
            <i className="moon fa-solid fa-moon" />
          ) : (
            <i className="sun fa-solid fa-sun" />
          )}
        </button>
      </div>
    </>
  );
}

export default ThemeChanger;
